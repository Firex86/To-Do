function uusiElementti() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("lisaaSisaltoa").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Tekstikenttä on tyhjä! Et voi lisätä listausta.");
  } else {
    document.getElementById("Listani").appendChild(li);
  }
  document.getElementById("lisaaSisaltoa").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "sulje";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < piilota.length; i++) {
    piilota[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "sulje";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var piilota = document.getElementsByClassName("sulje");
var i;
for (i = 0; i < piilota.length; i++) {
  piilota[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
