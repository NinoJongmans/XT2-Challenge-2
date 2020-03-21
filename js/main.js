function verkrijgZone() {
    var elem = document.getElementById("tijdzones"),
    selectedNode = elem.options[elem.selectedIndex];

    if (selectedNode.value == "kies") {
        var tijdzone = 1;
        document.getElementById("tijd").innerHTML = "UTC + 1";
    }
    else if (selectedNode.value == "ams") {
        var tijdzone = 1;  
        document.getElementById("tijd").innerHTML = "UTC + 1";
    }
    else if (selectedNode.value == "lnd") {
        var tijdzone = 0;
        document.getElementById("tijd").innerHTML = "UTC + 0";
    }
    else if (selectedNode.value == "la") {
        var tijdzone = -8;
        document.getElementById("tijd").innerHTML = "UTC - 8";
    }
    else if (selectedNode.value == "ny") {
        var tijdzone = -5;   
        document.getElementById("tijd").innerHTML = "UTC - 5";
    }
    else{
        var tijszone = 0;
    }
    return tijdzone;
}
function startKlok() {
  var vandaag = new Date();
  var h = vandaag.getUTCHours();
  var m = vandaag.getUTCMinutes();
  var s = vandaag.getUTCSeconds();
  h = h + verkrijgZone();
  if (h > 24) {
    h = h - 24;
  }
  if (h < 0) {
    h = h + 24;
  }
  if (h => 05, h <= 19) {
      document.body.style.background = "#6DD5FA";
      document.getElementById("maan").style.visibility = "hidden";
      document.getElementById("zon").style.visibility = "visible";
      document.getElementById("dagdeeltekst").innerHTML = "Goedendag";
      document.getElementById("dagdeelp").innerHTML = "Tijd om mars te ontdekken!";
  }   
  else {
      document.body.style.background = "rgba(2,64,118,1)";
      document.getElementById("zon").style.visibility = "hidden";
      document.getElementById("dagdeeltekst").innerHTML = "Goedenavond";
      document.getElementById("dagdeelp").innerHTML = "Tijd om te gaan slapen.";
  }
  if (h > 00, h < 05) {
      document.body.style.background = "rgba(2,64,118,1)";
      document.getElementById("zon").style.visibility = "hidden";
      document.getElementById("dagdeeltekst").innerHTML = "Goedenavond";
      document.getElementById("dagdeelp").innerHTML = "Tijd om te gaan slapen.";
      document.getElementById("maan").style.visibility = "visible";
  }
  h = controleerTijd(h);
  m = controleerTijd(m);
  s = controleerTijd(s);
  document.getElementById('uren').innerHTML = h;
  document.getElementById('minuten').innerHTML = m;
  document.getElementById('seconden').innerHTML = s;  
  var t = setTimeout(function() {
    startKlok()
  }, 500);
}
function controleerTijd(i) {
  if (i < 10) {
    i = "0" + i
  };
  return i;
}
function datum() {
    var today = new Date();
    var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
  document.getElementById('datum').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()] + ' ' + today.getFullYear();
}
datum()
startKlok()