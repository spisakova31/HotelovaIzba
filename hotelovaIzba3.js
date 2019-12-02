var card_values = [];
var homeDir="";
var targets = [];
var spravne = [];
var cards = [];
function hotelovaIzba3(canvas, enabled, homeDir) {

    this.act = new Activity(canvas, enabled);
  
    this.act.onDragDrop = function(sprite) {
        var target = sprite.findOverlapped(targets);
			 sprite.placeAt(target);
      
        var res = this.getResult();
        var color = '#f7c41b';
        if (res === 'A') color = '#51b558';
        if (res === 'D') color = '#b85151';

  			document.getElementById('result').innerHTML = res;
        document.getElementById('result').style.backgroundColor = color;
    }
	
    this.act.getResult=function() {
		// ak nie je nič označené: return "x";
		// správne riešenie: return "a";
		// nesprávne riešenie: return "d";
  
        var ok = true;
        var p = 0;
        for (var i = 0; i < targets.length; i++) {
            if (targets[i].item == null) p++;
        }
    
        if (p == targets.length)  {
            return "X";
        } else {
        for (var i = 0; i < targets.length; i++) {
            if (targets[i].item == null) {
                ok = false;
            }
            else {
                if (targets[i].item.value != spravne[i]) {
                    ok = false;
                }
            }
        }
        if (ok)
            return "A";
        else
            return "D";
        }  
    }   

    this.path = homeDir + "images/verzia_3/";
    this.image = this.path + "empty.png";
}
var uloha = new hotelovaIzba3("canvas1", true, homeDir);

function generateNumbers(count)
{
    card_values = [];
    while(card_values.length < count){
        let number = ~~(Math.random() * (100 - 11) + 11);
        if(!card_values.includes(number)){
            card_values.push(number); 
        }
    }
    loadImages();
}

function loadImages()
{
    if(cards.length > 0){
        deleteExistCards();
    }
    targets = [];
    var y = 0; var k = 0;
    for (var i = 0; i < card_values.length; i++){
        targets[i] = new Sprite(uloha.act, uloha.image, 52 + (k*73), 280 + (y*73));
        k++;
        if(k == 10 || k == 19){
            y++; k = 0;
        }
    }
    y = 0; k = 0;
    cards = [];
    for (var i = 0; i < card_values.length; i++){
        var image = uloha.path + card_values[i] + ".png";
        cards[i] = new Sprite(uloha.act, image, 43 + (k*75), 70 + (y*73), dragSprite);
        cards[i].value = card_values[i];
        k++;
        if(k == 10 || k == 19){
            y++; k = 0;
        }
    }
    setSolution();
    setHtmlResult();
    $("#generateButton").html("Iné čísla");
    $("#solveButton").show();
    $("#save").show();
}

function deleteExistCards()
{
    for(var i = 0; i < cards.length; i++){
        cards[i].erase();
        targets[i].erase();
    }
}

function setSolution()
{
    data = {};
    spravne = [];
    for (var i = 0; i < card_values.length; i++) {
        var item = card_values[i];
        var unit = item % 10;
        if (data[unit]) {
            data[unit].push(item);
        } else {
            data[unit] = [item];
        }
    }
    for(var key in data){
        var sorted = data[key].sort((a, b) => a - b);
        spravne = spravne.concat(sorted);
    }  
}

function solve()
{
    for(var i = 0; i < cards.length; i++){
        var index = spravne.indexOf(cards[i].value);
        cards[i].placeAt(targets[index]);
    }
    uloha.act.animate();
    $("#solveButton").hide(); 
    $("#backToHomePos").show();
}

function backToHomePos()
{
    for(var i = 0; i < cards.length; i++){
        var index = spravne.indexOf(cards[i].value);
        cards[i].placeAt(null);
    }
    uloha.act.animate();
    $("#backToHomePos").hide();
    $("#solveButton").show(); 
}

function save()
{
    $.ajax({
        type: "GET",
        url: "save.php",
        dataType: "json",
        data: { data: JSON.stringify(card_values) },
        success: function(){}
    });
}

function load()
{
    $.ajax({
        url: "data.json",
        dataType: 'json',
        success: function(result){
            card_values = result;
            loadImages();
        },
        error: function (jqXhr, textStatus, errorMessage) { // error callback 
            alert(errorMessage);
        }
    });
}

function setHtmlResult()
{
    document.getElementById('result').innerHTML = "X";
    document.getElementById('result').style.backgroundColor = '#f7c41b';
}

$(document).ready(function()
{
    $("#solveButton").hide(); 
    $("#backToHomePos").hide();
    $("#save").hide();
    $('#generateButton').click(function () 
    {
        let count = $("#countInput").val();
        if(count != "" && count < 21)  //max 20 cards
        {  
            generateNumbers(count);
        }
        else if(count == "")
            alert("Nezadali ste počet čísel");
        else
            alert("Zadajte počet čísel menší ako 21");
    });
});


