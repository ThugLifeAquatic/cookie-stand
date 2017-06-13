'use strict';
var allResults = [];
var HofO = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//Pike Market Object
var pikeMarket = {
  // Stores the min/max hourly customers, and the average cookies per customer, in object properties
  name: 'Pike Market',
  storeID: 'pikeMarket',
  minPHCustomers: 23,
  maxPHCustomers: 65,
  avgCookies: 6.3,
  customerArray: [],
  cookieArray: [],
  storeResults: [],
  // Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
  getRandCustomers: function() {
    for (var i = 0; i < HofO.length; i++) {
      var randCust = Math.floor(Math.random() * (this.maxPHCustomers - this.minPHCustomers + 1)) + this.minPHCustomers;
      this.customerArray.push(randCust);
    }
  },
  // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  getCookieSales: function() {
    for (var i = 0; i < this.customerArray.length; i++) {
      this.cookieArray.push(Math.floor(this.customerArray[i] * this.avgCookies));
    }
    console.log(this.cookieArray);
  },
  // Store the results for each location in a separate array... perhaps as a property of the object representing that location
  getResults: function() {
    this.getRandCustomers();
    this.getCookieSales();
    var totalCookies = 0;
    console.log('Cookie!');
    this.storeResults[0] = '1st and Pike';
    for (var i = 0; i < this.cookieArray.length; i++) {
      this.storeResults.push(HofO[i] + ': ' + this.cookieArray[i] + ' cookies.');
      totalCookies = totalCookies + this.cookieArray[i];
    }
    allResults.push([this.storeID, this.storeResults, 'Total Cookies: ' + totalCookies]);
    console.log(allResults[0][2]);
  }
};

//SeaTac Object
var seaTac = {
  // Stores the min/max hourly customers, and the average cookies per customer, in object properties
  name: 'SeaTac Airport',
  storeID: 'seaTac',
  minPHCustomers: 3,
  maxPHCustomers: 24,
  avgCookies: 1.2,
  customerArray: [],
  cookieArray: [],
  storeResults: [],
  // Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
  getRandCustomers: function() {
    for (var i = 0; i < HofO.length; i++) {
      var randCust = Math.floor(Math.random() * (this.maxPHCustomers - this.minPHCustomers + 1)) + this.minPHCustomers;
      this.customerArray.push(randCust);
    }
  },
  // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  getCookieSales: function() {
    for (var i = 0; i < this.customerArray.length; i++) {
      this.cookieArray.push(Math.floor(this.customerArray[i] * this.avgCookies));
    }
    console.log(this.cookieArray);
  },
  // Store the results for each location in a separate array... perhaps as a property of the object representing that location
  getResults: function() {
    this.getRandCustomers();
    this.getCookieSales();
    var totalCookies = 0;
    console.log('Cookie!');
    this.storeResults[0] = '1st and Pike';
    for (var i = 0; i < this.cookieArray.length; i++) {
      this.storeResults.push(HofO[i] + ': ' + this.cookieArray[i] + ' cookies.');
      totalCookies = totalCookies + this.cookieArray[i];
    }
    allResults.push([this.storeID, this.storeResults, 'Total Cookies: ' + totalCookies]);
    console.log(allResults[0][2]);
  }
};

//SeaTac Object
var seattleCenter = {
  // Stores the min/max hourly customers, and the average cookies per customer, in object properties
  name: 'Seattle Center',
  storeID: 'seaCenter',
  minPHCustomers: 11,
  maxPHCustomers: 38,
  avgCookies: 3.7,
  customerArray: [],
  cookieArray: [],
  storeResults: [],
  // Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
  getRandCustomers: function() {
    for (var i = 0; i < HofO.length; i++) {
      var randCust = Math.floor(Math.random() * (this.maxPHCustomers - this.minPHCustomers + 1)) + this.minPHCustomers;
      this.customerArray.push(randCust);
    }
  },
  // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  getCookieSales: function() {
    for (var i = 0; i < this.customerArray.length; i++) {
      this.cookieArray.push(Math.floor(this.customerArray[i] * this.avgCookies));
    }
    console.log(this.cookieArray);
  },
  // Store the results for each location in a separate array... perhaps as a property of the object representing that location
  getResults: function() {
    this.getRandCustomers();
    this.getCookieSales();
    var totalCookies = 0;
    console.log('Cookie!');
    this.storeResults[0] = '1st and Pike';
    for (var i = 0; i < this.cookieArray.length; i++) {
      this.storeResults.push(HofO[i] + ': ' + this.cookieArray[i] + ' cookies.');
      totalCookies = totalCookies + this.cookieArray[i];
    }
    allResults.push([this.storeID, this.storeResults, 'Total Cookies: ' + totalCookies]);
    console.log(allResults[0][2]);
  }
};

//Capitol HillObject
var capitolHill = {
  // Stores the min/max hourly customers, and the average cookies per customer, in object properties
  name: 'Capitol Hill',
  storeID: 'capHill',
  minPHCustomers: 20,
  maxPHCustomers: 38,
  avgCookies: 2.3,
  customerArray: [],
  cookieArray: [],
  storeResults: [],
  // Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
  getRandCustomers: function() {
    for (var i = 0; i < HofO.length; i++) {
      var randCust = Math.floor(Math.random() * (this.maxPHCustomers - this.minPHCustomers + 1)) + this.minPHCustomers;
      this.customerArray.push(randCust);
    }
  },
  // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  getCookieSales: function() {
    for (var i = 0; i < this.customerArray.length; i++) {
      this.cookieArray.push(Math.floor(this.customerArray[i] * this.avgCookies));
    }
    console.log(this.cookieArray);
  },
  // Store the results for each location in a separate array... perhaps as a property of the object representing that location
  getResults: function() {
    this.getRandCustomers();
    this.getCookieSales();
    var totalCookies = 0;
    console.log('Cookie!');
    this.storeResults[0] = '1st and Pike';
    for (var i = 0; i < this.cookieArray.length; i++) {
      this.storeResults.push(HofO[i] + ': ' + this.cookieArray[i] + ' cookies.');
      totalCookies = totalCookies + this.cookieArray[i];
    }
    allResults.push([this.storeID, this.storeResults, 'Total Cookies: ' + totalCookies]);
    console.log(allResults[0][2]);
  }
};

//Alki Object
var alki = {
  // Stores the min/max hourly customers, and the average cookies per customer, in object properties
  name: 'Alki',
  storeID: 'alki',
  minPHCustomers: 2,
  maxPHCustomers: 16,
  avgCookies: 4.6,
  customerArray: [],
  cookieArray: [],
  storeResults: [],
  // Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
  getRandCustomers: function() {
    for (var i = 0; i < HofO.length; i++) {
      var randCust = Math.floor(Math.random() * (this.maxPHCustomers - this.minPHCustomers + 1)) + this.minPHCustomers;
      this.customerArray.push(randCust);
    }
  },
  // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
  getCookieSales: function() {
    for (var i = 0; i < this.customerArray.length; i++) {
      this.cookieArray.push(Math.floor(this.customerArray[i] * this.avgCookies));
    }
    console.log(this.cookieArray);
  },
  // Store the results for each location in a separate array... perhaps as a property of the object representing that location
  getResults: function() {
    this.getRandCustomers();
    this.getCookieSales();
    var totalCookies = 0;
    console.log('Cookie!');
    this.storeResults[0] = '1st and Pike';
    for (var i = 0; i < this.cookieArray.length; i++) {
      this.storeResults.push(HofO[i] + ': ' + this.cookieArray[i] + ' cookies.');
      totalCookies = totalCookies + this.cookieArray[i];
    }
    allResults.push([this.storeID, this.storeResults, 'Total Cookies: ' + totalCookies]);
    console.log(allResults[0][2]);
  }
};

// Display the values of each array as unordered lists in the browser
function renderStores() {
  for (var i = 0; i < allResults.length; i++) {
    var store = document.createElement('ul');
    store.id = allResults[i][0];
    store.textContent = allResults[i][1][0];
    document.body.appendChild(store);
    for(var j = 1; j < allResults[i][1].length; j++) {
      var liVal = document.createElement('li');
      liVal.textContent = allResults[i][1][j];
      store.appendChild(liVal);
    }
    var total = document.createElement('p');
    total.innerHTML = allResults[i][2];
    console.log(allResults[i][2]);
    store.appendChild(total);
  }
};
pikeMarket.getResults();
seaTac.getResults();
seattleCenter.getResults();
capitolHill.getResults();
alki.getResults();
renderStores();
// Calculating the sum of these hourly totals; your output for each location should look like this:
//
// 1st and Pike
//
// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// 8pm: 29 cookies
// Total: 657 cookies
// Display the lists on sales.html. We will be adding features to this application and working with its layout throughout the week.
//
// Here are the starting numbers that you'll need to build these objects:
//
// Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// 1st and Pike	23	65	6.3
// SeaTac Airport	3	24	1.2
// Seattle Center	11	38	3.7
// Capitol Hill	20	38	2.3
// Alki	2	16	4.6
