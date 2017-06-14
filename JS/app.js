'use strict';
var allResults = [];
var hofO = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var totals = [];

function AddStore(name, min, max, avgCook) {
  // Stores the min/max hourly customers, and the average cookies per customer, in object properties
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCook = avgCook;
  this.customerArray = [];
  this.cookieArray = [];
  this.storeResults = [];
  this.getResults();
  this.renderStores();
};
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
AddStore.prototype.getRandCustomers = function() {
  for (var i = 0; i < hofO.length; i++) {
    var randCust = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.customerArray.push(randCust);
  }
};
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
AddStore.prototype.getCookieSales = function() {
  this.getRandCustomers();
  for (var i = 0; i < hofO.length; i++) {
    this.cookieArray.push(Math.floor(this.customerArray[i] * this.avgCook));
  }
};
// Store the results for each location in a separate array... perhaps as a property of the object representing that location
AddStore.prototype.getResults = function() {
  this.getCookieSales();
  var totalCookies = 0;
  this.storeResults[0] = this.name;
  for (var i = 0; i < hofO.length; i++) {
    this.storeResults.push(this.cookieArray[i]);
    totalCookies = totalCookies + this.cookieArray[i];
  }
  totals.push(totalCookies);
  allResults.push([this.name, this.storeResults, totalCookies]);
};

function renderHead() {
  var headRow = document.createElement('tr');
  //create empty head cell at front so table lines up
  var emptyHead = document.createElement('th');
  emptyHead.textContent = '';
  //add empty head cell to head row
  headRow.appendChild(emptyHead);
  //loop through store hours array for table heading
  for (var i = 0; i < hofO.length; i++) {
    //open table cell
    var hours = document.createElement('th');
    //add text to each cell using hours array
    hours.textContent = hofO[i];
    //add cell to head row
    headRow.appendChild(hours);
    //close for loop
  }
  //create "total" cell for head row
  //this is after the "hours" loop because you want the "total" header at the far column of your table.
  var totalHead = document.createElement('th');
  totalHead.textContent = 'Daily Total';
  //add "total" to head row
  headRow.appendChild(totalHead);
  //add head row to table
  document.getElementById('salesTable').appendChild(headRow);
}

AddStore.prototype.renderStores = function() {
  //open div for table
  var storeDiv = document.getElementById('storeResults');
  //Open Table
  var table = document.getElementById('salesTable');
  //render heading
  //main loop
  //Create a row for each store and adding its data to that row via a loop
  //add your store total at the end of each loop
  for (var i = 0; i < allResults.length; i++) {
    var trVal = document.createElement('tr');
    for (var j = 0; j < allResults[i][1].length; j++) {
      var elTd = document.createElement('td');
      elTd.textContent = allResults[i][1][j];
      trVal.appendChild(elTd);
    }
    var elTd = document.createElement('td');
    elTd.textContent = allResults[i][2];
    trVal.appendChild(elTd);
    table.appendChild(trVal);
  }
  //close table
  storeDiv.appendChild(table);
  //close table div
  document.body.appendChild(storeDiv);
  allResults = [];
};
renderHead();
var pike = new AddStore('1st and Pike', 23, 65, 6.3);
var seaTac = new AddStore('Sea Tac Airport', 3, 24, 1.2);
var seaCenter = new AddStore('Seattle Center', 11, 38, 3.7);
var capHill = new AddStore('Capitol Hill', 20, 38, 2.3);
var alki = new AddStore('Alki', 2, 16, 4.6);
//renderStores();
