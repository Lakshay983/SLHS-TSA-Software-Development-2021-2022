

const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


var cardIndex = 0;
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('addMatch').addEventListener('click', () => {
    getInfo();
    clearInfo();
    readFile();
    createFile();
    //createCard();
    // printInfo();

  });
});
function createFile(){
  const csvWriter = createCsvWriter({
    path: 'MatchSchedules.csv',
    header: [
      {id: 'color', title: 'AllianceColor'},
      {id: 'time', title: 'time'},
      {id: 'field', title: 'field'},
      {id: 't1', title: 'team1'},
      {id: 't2', title: 'team2'},
      {id: 't3', title: 'team3'},
      {id: 't4', title: 'team4'},
      {id: 't5', title: 'team5'},
      {id: 't6', title: 'team6'}
    ]
  });
  const data = [
    {
     color:'blue',
     time:'time',
     field:'lakshay',
     t1:123,
     t2:234,
     t3:345,
     t4:456,
     t5:567,
     t6:678
    }
  ];
  csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));
}
function readFile() {
  try {
    fs.createReadStream('MatchSchedules.csv')
      .pipe(csv())
      .on('data', (row) => {
        console.log(row);
      })
      .on('end', () => {
        alert('CSV file successfully processed');
      });
  } catch (err) {
    alert(err);
  }
}
function createCard(color, time, name, t1, t2, t3, t4, t5, t6) {
  const mainCard = document.getElementById("MainCard");
  var w = 0.7 * window.screen.width;
  var h = 0.8 * window.screen.height;
  mainCard.setAttribute("style", "background-color:blue;width:" + w + "px;height:" + h + ";");


  var title = "";
  title += time + "     " + name;
  const body = "Red Alliance: " + t1 + " " + t2 + " " + t3;
  const body2 = "Blue Alliance : " + t4 + " " + t5 + " " + t6;
  const para = document.createElement("div");
  para.setAttribute("id", "card" + cardIndex);
  cardIndex++;
  para.setAttribute("class", "card");
  if (color == 1) {
    para.setAttribute("style", "background-color: red; width:23rem;");
  } else if (color == 2) {
    para.setAttribute("style", "background-color: blue; width:23rem;");
  }

  const para2 = document.createElement("div");
  para2.setAttribute("class", "card-body");
  para.appendChild(para2);

  const para3 = document.createElement("h3");
  const para4 = document.createElement("p");
  const para5 = document.createElement("p");
  para3.setAttribute("class", "card-title");
  para4.setAttribute("class", "card-text");
  const cardTitle = document.createTextNode(title);
  const cardBody = document.createTextNode(body);
  const cardBody2 = document.createTextNode(body2);
  para3.appendChild(cardTitle);
  para5.appendChild(cardBody2);
  para4.append(cardBody);
  para2.appendChild(para3);
  para2.appendChild(para4);
  para2.appendChild(para5);

  const scroll = document.getElementById("scrollmatches");
  scroll.appendChild(para);
}
function clearInfo() {
  document.getElementById('inputColor').value = "Select Color";
  document.getElementById('inputTime').value = "00:00";
  document.getElementById('inputFieldName').value = "";
  document.getElementById('redAlliance1').value = "";
  document.getElementById('redAlliance2').value = "";
  document.getElementById('redAlliance3').value = "";
  document.getElementById('blueAlliance1').value = "";
  document.getElementById('blueAlliance2').value = "";
  document.getElementById('blueAlliance3').value = "";
}

function getInfo() {
  let color = document.getElementById('inputColor').value;
  let time = document.getElementById('inputTime').value;
  let field = document.getElementById('inputFieldName').value;
  let t1 = document.getElementById('redAlliance1').value;
  let t2 = document.getElementById('redAlliance2').value;
  let t3 = document.getElementById('redAlliance3').value;
  let t4 = document.getElementById('blueAlliance1').value;
  let t5 = document.getElementById('blueAlliance2').value;
  let t6 = document.getElementById('blueAlliance3').value;
  createCard(color, time, field, t1, t2, t3, t4, t5, t6);
  //Add encoding code here
}


