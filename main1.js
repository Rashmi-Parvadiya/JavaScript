const tbody = document.querySelector('#body');
const btn = document.querySelector('#btn');

let sum = 0;

$("#btn").click (function() {
    sum++
    $("#body").append(`<tr id="tr${sum}">
    <td id="rollnumber">${sum}</td>
    <td><input type="text" id="name" name="name" size="10" placeholder="Name"></td>
    <td><input type="nmbr" id="English${sum}" onChange="count_spots(${sum})" maxlength='2' name="number" size="10" placeholder="0"></td>
    <td><input type="nmbr" id="Science${sum}" onChange="count_spots(${sum})" maxlength='2' name="number" size="10" placeholder="0"></td>
    <td><input type="nmbr" id="Maths${sum}"  onChange="count_spots(${sum})" maxlength='2' name="number" size="10" placeholder="0"></td>
    <td id="total${sum}">00</td>
    <td id="Percentage${sum}">00</td><td><button class="btn btn-dark" onclick="myDeleteFunction(${sum})">Delete</button></td>
  </tr>`)
  CountRows();
})

const myDeleteFunction = (sum) => {
  $(`#tr${sum}`).remove();
  CountRows();
  LowestTotal();
  HighestTotal();
  calcAverage();
}

const count_spots = (sum) => {
  const addition = Number($(`#English${sum}`).val())+Number($(`#Science${sum}`).val())+Number($(`#Maths${sum}`).val());
  $(`#total${sum}`).html(addition);
  $(`#Percentage${sum}`).html((addition * 100/ 300));
  LowestTotal();
  HighestTotal();
  calcAverage();
}

const CountRows= () => {
  var rowCount = 0;
  var Row = $("#tbl tr").length - 1;
  for (var i = 0; i < Row; i++) {
          rowCount++;
      }
      var message = rowCount;
      $('#Total').html(message);
    }


const HighestTotal = () => {
  const arrHighTotal = [];
  var totalRows =$("#tbl tr").length - 1;
  for (var x = 1; x <= totalRows; x++) {
      var i = tbl.rows[x].cells[5].innerText;
      arrHighTotal.push(i);
      arrHighTotal.sort(function (a, b) { return b - a });
      $('#Highest').html(arrHighTotal[0]);
  }
}

const LowestTotal = () => {
  const arrLowTotal = [];
  var totalRows = $("#tbl tr").length - 1;
  for (var w = 1; w <= totalRows; w++) {
      var l = tbl.rows[w].cells[5].innerText;
      arrLowTotal.push(l);
      arrLowTotal.sort(function (a, b) { return a - b });
      $("#Lowest").html(arrLowTotal[0]);

}
}

const calcAverage = () => {
  var count = 0;
  var total = 0;
	for(var i = 1; i < tbl.rows.length; i++){
		var num = Number(tbl.rows[i].cells[6].innerHTML);
		total += num;
    count++;
	}
  $("#avg").html((total/count).toFixed(2));
}

