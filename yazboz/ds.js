function oyun(event) {

 document.getElementById('player1').innerHTML = document.getElementById("oyuncuName_1").value;
 document.getElementById('player2').innerHTML = document.getElementById("oyuncuName_2").value;
 document.getElementById('player3').innerHTML = document.getElementById("oyuncuName_3").value;
 document.getElementById('player4').innerHTML = document.getElementById("oyuncuName_4").value;
  
 var plNm_1 = document.getElementById("oyuncuName_1").value;
 var plNm_2 = document.getElementById("oyuncuName_2").value;
 var plNm_3 = document.getElementById("oyuncuName_3").value;
 var plNm_4 = document.getElementById("oyuncuName_4").value;

//  checkbox renk değiştirme
 if(document.getElementById('game1').checked==true){
    player1.style.backgroundColor = 'orange';
  }else if(document.getElementById('game2').checked==true){
    player2.style.backgroundColor = 'orange';
  }else if(document.getElementById('game3').checked==true){
    player3.style.backgroundColor = 'orange';
  }else if(document.getElementById('game4').checked==true){
    player4.style.backgroundColor = 'orange';
  }
 
  if (plNm_1 == "") {
    alert("lütfen 1.oyuncu ismini giriniz!");
    return;
  } else if (plNm_2 == "") {
    alert("lütfen 2.oyuncu ismini giriniz!");
    return;
  } else if (plNm_3 == "") {
    alert("lütfen 3.oyuncu ismini giriniz!");
    return;
  } else if (plNm_4 == "") {
    alert("lütfen 4.oyuncu ismini giriniz!");
    return;
  }

  




  // dropdown seçimi
  let degisken1 = document.getElementById("select-val").value;

  let satir = document.getElementById("tbody");
  // document.getElementById("tbody").innerHTML = "";
  // for (let i = 0; i < satir; i++) {}



  document.getElementById("content").style.display = "none";
  document.getElementById("t").style.display = "block";

  //  genel tablo

  for (let i = 0; i < degisken1; i++) {
    var tr = document.createElement("tr");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    for (let j = 0; j < 4; j++) {
      td = document.createElement("td");
      var input = document.createElement("input");
      input.type = "number";
      td.appendChild(input);
      td.appendChild(checkbox);
      tr.appendChild(td);
    }
    satir.appendChild(tr);
  }
}
