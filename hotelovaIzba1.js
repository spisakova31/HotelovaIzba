function hotelovaIzba1(canvas, enabled, homeDir) {

  var empty = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAACXBIWXMAAAsSAAALEgHS3X78AAAAX0lEQVR42u3PAREAMAgAIfuX3mr4HjRghox3glKBUoFSgVKBUoFSgVKBUoFSgVKBUoFSgVKBUoFSgVKBUoFSgVKBUoFSgVKBUoFSgVKBUoFSgVKBUoFSgVKBUsH1Eqt9x/zb4wHjjTYAAAAASUVORK5CYII=";
  
  var c11 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAACXBIWXMAAAsSAAALEgHS3X78AAABGUlEQVR42u3Uuw3CQBCEYcqhBjIqoAR6oAoqoAUyJCIiyEiJKIGIhxCCgMxchAR+761sj/WvJp7b73T2YMDIzHB57kEgKQSSQiApBJJCICkEkkIgKQRSYabbe/I7rbR5knantyPJ3OZGSl9qDCmmzYc0Xl+TrGmlzYE0Wl3Sj8RMim+LJYUbzdvAQHJpiyJlvngzyavNSArPY354JmXTSlttUjh+tn+UHl9xCd82I6ni8RWX8G3zJE02N0eSuc2HFH5QYYO85RpucyAtjq/wMRTcd8NtUaTvdRY/oYbbjKRwl3/Hxyzh22Yk1frQW2mDBAkSJEiQIEGCBAkSJEiQIHUokBQCSSGQFAJJIZAUAkkhkBTSdxLT6fkA8KsXSYV1VhEAAAAASUVORK5CYII=";
  var c12 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAACXBIWXMAAAsSAAALEgHS3X78AAAB8ElEQVR42u3YvUrEQBAH8HscH8DKzs7O0tLW2t7eJ/AVrhFBEARBwcLCxsrO1srvL8Qu/iEQ9HY2O7uTvcyEWf7VcW787c7OJZnNfJgZK/OHCcRJFuIkC3GShTjJQpxkIU6yECdZiJOobJ+/Nv9HwSQbJ8+7V+8Ht1/dJBf3P/s3n5h89fBx2SRcW0ICZn733fSOvesPPkxKCrcoi4SdaXgDC7d2xFKJSOvHT+TlB/dkqcpJmD0sOT4pthz9A6erFgn/UMzDJP3tBFkDZ294Enl+skjYYfIP0Qba0kIziJUlPh+ShOth65MLWbYo6HsLX4OQ87VCEjD805wkkeuyebpYUWXth0vKKvckiTyHZDdbNgnrWlx4yM7lG7YLaX9qmdfFclQhYd62TspI/ISTJ/t4CQn9tyuSqiSyCrC9Q5K6zZHUOj9kF0ne7HFJ2JmwI1UlbZ29hDMnf5QySFltQ+6J3W1x7sc1kmKe5ClSSsI+kB7ODatSEnk7iw/5M+giyT26SKSHX2/qSKSH07KVkkgPs79pJJEe8mfdBol8BpN4RiaRz7ZCz5gk8okVT1BCz5ik5BvWnqGRFHscNkySbJFGUuwlnmESesDUSJyXm8ZIQk91ksI4yUKcZCFOshAnWYiTLMRJFuIkC5k6yYfq8QuDyLM55CmYFwAAAABJRU5ErkJggg==";
  var c15 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAACXBIWXMAAAsSAAALEgHS3X78AAACAElEQVR42u2YO04DMRCGc5w9ABUdHR1lStrU9PScgCukQUhISEhIIKWgoKGio6UihISHEJ35RaRViGd37bE3nolm9DeJ1l5/nodnPRiYqbFq/LIFMiQNMiQNMiQNMiQNMiQNMiQNMiQNMiRKhzdz99/Cx+6cTV2kbQLp9vmHjbR/OROH5LsoCokcXhJp7+KV99ZaJw+fgpB2z6d+yMUiNc1QAAn+aVlNf7WhL6TOBOivNuRHQrCFRH/K1uBPRpXiIAHm6O4910a21AaE9IaQ8sZGy5yJPKlIB1cz9rLgdn/g6eNXMSSUO/Ck7DS5HYjtMkjYS+xxYvCMJgvS7VCdY+Onb0DGZlccUu2c9HwgawMYyAmP7z/yI8EzazCJSC7SwtMstW3lIZG1IRdVGaTh9RsDyYUdxGWQwk/tNUMyC0VCCPmjUAPq4ob2j3zG/VVFiUiIHwgMqHvLpZMLJQtgZ/UrgxQo8jjuLBKikXjzG1KOVyL1/VzSjUQmPTj9J8kveQwXhwTn+EPIHpw8kSVWvKavLL/jJm9shJ5L5KjVNh9xSMan3O6B3RDJ7fEq1qWk6E68ar58bjJsAQqgaKRlnQj0FfKqvhoQjVSF3XWOJouoJYloiACGda+ywXv4iXMpMNhyIgmUIWmQIWmQIWmQIWmQIWmQIWmQIWnQtiOZibZf0GHfE4D7su0AAAAASUVORK5CYII=";
  var c18 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAACXBIWXMAAAsSAAALEgHS3X78AAACNUlEQVR42u2ZvU4DMQzH+zh9ACY2NjbGjqzM7Ow8QV+hC6qEhISEBBIDAwtTN1YmyjcVYjv+ItLpuPgujnMlcWXrv1Dy9Utsx2lHIzM1Np49boAMSYMMSYMMSYMMSYMMSYMMSYMMSYMMidL+5Wv112JH2D17Prx5P777bA6CP/Eh/pUB6erhW4yEFc/uv6peQ4Od06f/Q/KPiI80uXip2LZ3zj2uJCRsHjk9py+WyOeJopIjbc+Xvsvxkbr69hi6rBEJ59OzJrHL4XNmg4GRyPiJQmolN2cYNjgLOg6MBGcjVxOLRPbC4K25ZINzkTABbgmm08uQxM2ESEwY5qxkHHIm5WSIJKSuRByc9ej2Q+Z46LguJOyWuyVkSORecNIDp4yQIE0Xq3pHZUhdSa8/iXOOKBqpPpzECHbC1lRs46TvOCRMT9YjKUjOu4JlBBq0fHIYpKi0ETVCsHjlVAylICHWgy8LZ1Hvi2xIJVbiKUjkqwRHUb9hsXoyxjiP3DxIvr8BYOukfdX6VENWDwMikS53cP3mtyRv22C2yIBEVkNk9JM1UfCCyoDErFnF42dAiupiSJmQyOuVjKWuXF8cEpke8GT2WyIN+i2D9XgpSbyinoBkIgnWEHmuWnKtzZcLqgSyTdDrsiEJCjxn5RZEEP/7ptrIeCsIqSv6E3kyI41/03Twu85mha4AqU5uODGwNVPCdLHK9pNZaTIkDTIkDTIkDTIkDTIkDTIkDTIkDdp0JLOi7QeSuvhpj0kc+QAAAABJRU5ErkJggg==";
  var c22 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAACXBIWXMAAAsSAAALEgHS3X78AAAB80lEQVR42u2YvUrEUBCF93F8ACs7OztLS1tre3ufwFfYRgRBEAQFCwsbKztbK9d/RezigSBo7iR799yTzc4yw6lCODnfTWaSm9Eoyk2tjB+WQIHkQYHkQYHkQYHkQYHkQYHkQYHkQYH0XxsnT7tXbwe3n9VvXdx/7998bJ+/rB5OhnIjkXD58d1X1Vl71++ZUbRuDBLWssorLPPa0WSebgxSfoKcHFo3Bmn9+HGmBHWhH+bgRiL97d2ZCt3StxuDhDtuXgCNWz8MaN+2BwnHe3UjkTBMU3dMqsZpyJRzmtaNRMJDnLpvnjafgbYO6dWNRMK0Sa3N+ZMTQuvGP3jQzuUrFhiqX47mmWkCAPTqVvReylEaYurkFbrpkdAPaQjckLm56ZHMvie+Ymk3MdLW2XOaoPs1IndTImFemXOMu0W0mwypLQHXRSVuGiSsnJmAG3SFbhok8wMUBwdxEyAtFI8AyUxAv1glbkVIZgJ6ZKvceCQzAf2VIHQjkcwE6dZgEDfZHyI6gdaNQTJ3o3QCrRuDZO4xsefhrq11I5Gm/hPtqL7dGCRz60KH0LqRSCWLmobQujFIbb/duBBaNxIJXSsMoXUjkcwNMx1C60YiFSZohNC6FQ1xFwokDwokDwokDwokDwokDwokDwokD1p2pKiFrh+wy084V3J1dgAAAABJRU5ErkJggg==";
  var c25 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAACXBIWXMAAAsSAAALEgHS3X78AAACgklEQVR42u2Zu0oEMRSG93H2Aazs7OwsLW2t7e19Al/BRgRBEAQFCwsbKztbK+83xG78Ydhh3fmTOUnObjzLOfyNS8zkm5xbMqORmxkbHzwsgRzJghzJghzJghzJghzJghzJghzJghzpr9ZPnneu3vdvv5qJXdz/7N18bp2/rhw+CifByCbR5oIEmIO77/iDd68/JGCYqj4Sdkb4bGza6tEAFba0MpKcR0gFR62JtHb8lPp4GBYdmRPMNZGmM0GSIWC0coMmEvyHPgBpoHUtrC/klvhdKzdoItE4Rt6bGQZCybDInPgxtZxkItE43jid9ahQvMnnxAwLQqJxTLOZHCnDrzSR4A/Q9uUbXi3UllrhQvE6hMGJDLQ4JLn6C6V5HE7bHxlKJDWR6EJpxGPDaXBCXYzBFwCZFF36SDTiabNHR4ZaRyTSOkibZy9yX2oSTRhmmkgId5oV6RaFCnc5lRpSiCdUN+l+SmywEOsgYR8oT6RhTe3oO6P1QB+JtrNxJ6H/ghzQJTe0f6Euud+yKCNl8IwnhRsM2Ml2BrpQmgDj2a8UifLED0hJolUu/r6KkChPefmfEfW9uSBRnsJzQU0kyhOP2mkh9PuxVBOJ5l85Tyjo6WGenuRDB8pMJHoOTeIZB06+NAhpRdbMePTEioY6NTxoHmvYeZZWcM26NHjDGjFJhACgW27oQlezewi92jyk7IZIs8cr2aKG5aiMS0nNTjzvLBBHSr27xSuQfDeQItFDdSFS68zCvYKPDH4xSEPKuIyXILX7Pzh5UlKVIhXyNEO3cwBrr9Om3Qx/oi7Jv77lJHETciQLciQLciQLciQLciQLciQLciQLWnYkt39tv3nWexLORojYAAAAAElFTkSuQmCC";
  var c31 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAACXBIWXMAAAsSAAALEgHS3X78AAACMUlEQVR42u2Zv0oEQQzG73H2Aazs7OwsLW2vtrf3CXyFa0QQBEFQuMLCxsrO1ko9Pf8gdusHi8PeTmY2M8fOJkfCVyiMu/ltJplMnEzM1Fg1e94AGZIGGZIGGZIGGZIGGZIGGZIGGZIGGVJA+1dvR3efs8ef+t+O77+m8+X22cs6zh1cv9erVgIJb715+q3DBrat00ww/8mDI508fNcMg2cZ4fJDNDgSPj+HJ49q5/yVfM6ASEgePk9jCCnz4YAPbeYBkdqVgG97lwtOfCLJORTS7sWCfN/h7YdbQLqFqpiRPyWQ4Lr/MqRWew0CkuQTNhsnOYdCIncdItNZxvQJMOQ3KoqE7Q5hk0D4tM3X9Zf5DmE3cpaNgMSsWsxcIl1P3bclkOC97xBi24uESDaFURAS4kPyuHoYQcLZ5U5kEUiREhzica674KRWlxGQ4CtajchfITLkESwCiTxYwJn3NLlInEDJRYpfnCLpJBfJNRAo1uRVKmkTikDqiOyb+DdciUhkBzCdLxUjISC+T/yLoESkddwqioTUR0VGoqOCoWo3ZUA3ElmpyX6UbMYlIpHnKXnmkP1R5/IrAik0G+rMtEJTHokVj6xj9WorjR9CnQR/mlcOqQqMUzjWOyEaDanqa+dCYUwajpdGigxEQzypY/HSSElUeWP+EZCaUtE7T0y9U4yM5MKF0txmQ1jwK8p99n+WRkaSJkPSIEPSIEPSIEPSIEPSIEPSIEPSoE1HMhNtfyzjjSLHfVAyAAAAAElFTkSuQmCC";
  var c43 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAACXBIWXMAAAsSAAALEgHS3X78AAACVklEQVR42u2Zv0oDQRDG8zh5ACs7OztLS9vU9vY+ga+QRgRBEASFFBY2Vna2VsZo/IPYxQ8OjmN39u/N3u2EWb4igd27/Ha+mZvbTCY6xIzp/HULpEgSpEgSpEgSpEgSpEgSpEgSpEgSpEheHd68b6yRtPzk4Wv+/NuuPX38ni3WuxfLcZB2zpd3L395SEe3H+TaLhuuPzQS7kr+muDCs6efTcQAc2S4eJBIy8UguTaiDxUDkstyQSTPRrgGQjoEkn+nPQu7lSB+HFyvyiIFd9q1cP9qRc4/vv9sJ5DBR1UsiOS3nB8JP92ejIB35yAgqZHvi4QNC/okyXWIjDFtUCSXcyJvv3f5BuGJBCE4TULa0+wLwhelkAzLZT+XPELJHi6XDMsBD3nFjkQaG7HlR7Ith7qX53tPfEieth4yI9mWy05lW0gtV1rG8OQgkZYrjYS7NEbgR3JZjhGJLDPgjL9CGpLLcqWRkgKVgGTnq9EXsyD52xHO8mBbzjYDC1LbQKBYk69SQRPGIhmbRzb5LEiGyL7J/4YbhRS0XDkksnOdLdZ9kTZMIwOJbEr8L4K1I2UEfxwkpD4qMhIdFQxVuykDspHISk32o2QzXiMS+Twlnzlkf2Q84qtAcp1YGIUUX8l4MlQ89jx2vVwBoD0AwgdXJ+E/zRsHaeo4TokZZU+Iepam4OkSGcbg4fiYSK5U8fAMdICcjZRENfQxfzZSUyqCh/2Rr+i1ILXhQmnusiEs+IpyH//PEj9SJVIkCVIkCVIkCVIkCVIkCVIkCVIkCdp2JB1Vj3/b7D0eCH6yNgAAAABJRU5ErkJggg==";
  var c44 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAACXBIWXMAAAsSAAALEgHS3X78AAABVUlEQVR42u3VPQ4BURQFYMuxAJUV2IHSSvRWYAsaUakk9BqVJahMkKDQjZfo3ps3P+edmbiTc3MqmRz3Sy4zGGjMzHB17UFEshCRLEQkCxHJQkSyEJEsRCQLEak00909D6b7NhpptM4Olw+LlNJGIy1Or7xoum/jkAqPBCYlthFIsSPBSOltBFLsSDBSelsqqeRIABKlLYlUfiRNSay2JNL8+Myrpvs2nDTZ3io3qE8ituEk70gS30vENpDkHYlbyP0S4CW4bQgpPBL3T+U+x5bgtoGk8Eh+n2NLcNsQUuGRwEtw2xBS7EiwJbhtICl2JNgS3DaEFL4Kx5sMXoLbhpDCI5ntH94z9ZfgtoEk70iW53f4TP0luG0IqfJIGi3BbQNJOWnaaBNJJJFE4pJqptEXt9cmkkgiiSSS4YhkISJZiEgWIpKFiGQhIlmISBbSd5Lmr+cL+Ad3MrwreQAAAAAASUVORK5CYII=";
  var c52 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAIAAAD+THXTAAAACXBIWXMAAAsSAAALEgHS3X78AAACiklEQVR42u2ZPU4DMRCFc5wcgIqOjo6Skpaanp4TcIU0CAkJCQkJJAoKGio6Wir+/4TowhMrraLss3dm7IVMNNZrEm3s/eyZ57EzGkVz08aT+yVQIHlQIHlQIHlQIHlQIHlQIHlQIHlQIP1q5eBhqmySbtePn3Yu3/ZvPttfnd99711/bJ29YMRhkTB2XSR0OLn9yvewe/UuBLMgYdoqImFlhJ1g0VYP+6ksSAiGWkhyHjmVBQn9VkFaO3rU9oOGCa2MZPCGFNKsE6gacq8mksEbKBLihz4JG2hCC3OXCkt8XxOJegO+1O4etB/43txjIJQ8VoREvQFZoUWi/WyczEdUKt9qImkHUHkMdbNhkWgCIMsNSAg8aPviFcsFNVutcBIxHdWQEBjaZC1Xd8S8j+uQMKk0AaA2NzDfgDRkl3wS826kQ6I5nSrPYFblSHTEfLGnQ5oqmy3NWm2ePhviXIGU2hwHosJw1BV763EFEp0zSTNsxCkeSVcKJG3V3La853aFdaA8vQWrGolWmfCA1txQ/qUq0W5ZoB1IHsAKpGZzBANmqxmVvig1QLn7FfKoHU8iupMI34nyCONtQKSxtQ6kPIbSZFGQKI/BKhVISP1uLtVCojwqR7Eg0aSnB2Z6ks8c2ujeYOZRINHTJQ10uiOnHI+ebUt4FEjUx6bsPEt3SfqW9MSKYr8wkxX2QJEA0L5u6tI0VT303rBmWh0kc0FEjSu17H+KNDZdSqY22ZIlqomkvR/FFNCzgO2cMghSEzDCtcI6pO6v6YH/35CaOe696c8bl+GPgmGRWrDmymo2zPAR+1LvwbOQZyikhVUgeVAgeVAgeVAgeVAgeVAgeVAgedCyI0Vb6PYD1wV7Ev3iSHEAAAAASUVORK5CYII=";
  
  var card_images = [c12, c25, c11, c43, c22, c15, c18, c31, c44, c52];
  var card_values = [12, 25, 11, 43, 22, 15, 18, 31, 44, 52];
  
  
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
    
     var spravne = [11, 31, 12, 22, 52, 43, 44, 15, 25, 18];
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

	var path = homeDir + "/images/";
	
  var x_targets = 65;
  var y_targets = 160;
  
  var x_cards = 43;
	var y_cards = 60;
  
  var targets = [];
  for (var i = 0; i < card_images.length; i++){
        targets[i] = new Sprite(this.act, {file:path + 'empty.png', data: empty}, x_targets + (i*69), y_targets);
	}

	var cards = [];
  for (var i = 0; i < card_images.length; i++){
      cards[i] = new Sprite(this.act, {file:path + 'c' + card_values[i] + '.png', data: card_images[i]}, x_cards + (i*75), y_cards, dragSprite);
      cards[i].value = card_values[i];
	}
  
   
}
