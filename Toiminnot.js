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
  
    
  }
