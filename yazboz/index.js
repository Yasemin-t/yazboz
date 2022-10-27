function oyun(event) {
  var plNm_1 = document.getElementById("oyuncuName_1").value;
  var plNm_2 = document.getElementById("oyuncuName_2").value;
  var plNm_3 = document.getElementById("oyuncuName_3").value;
  var plNm_4 = document.getElementById("oyuncuName_4").value;

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

  //  tablo oluşturma
  tr = `<tr>
              <td class="skor" >${plNm_1}</td>
              <td class="skor">${plNm_2}</td>
              <td class="skor">${plNm_3}</td>
              <td class="skor">${plNm_4}</td>
              </tr>
              `;

  document.getElementById("players-table").innerHTML = tr;

  // option değerleri
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
    checkbox.id = "checkBox_1";
    checkbox.type = "checkbox";
    for (let j = 0; j < 4; j++) {
      td = document.createElement("td");
      var input = document.createElement("input");
      input.type = "number";
      td.appendChild(input);
      tr.appendChild(td);
      td.appendChild(checkbox);
    }
    satir.appendChild(tr);
  }
}
