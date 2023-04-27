// console.log('123456');
// // const web3 = require('web3');
// var contractABI = null;
// var contractAddress = null;
// var account0 = null;
// var AssetTrackerContract = null;
// $.ajax({
//   url: "./build/contracts/AssetTracker.json",
//   async: false,
//   dataType: "json",
//   delay: 500,
//   success: function (json) {
//     console.log(json);
//     assignVariable(json);

//   }
// });
// function assignVariable(data) {
//   contractABI = data.abi;
//   contractAddress = data.networks[5777].address;
// }

// console.log(web3);

// if (typeof web3 !== "undefined") {
//   web3 = new Web3(web3.currentProvider);
//   console.log(typeof web3, web3)
// } else {
//   web3 = new Web3(new Web3.providers.HttpProviders("http://127.0.0.1:7545"));
//   console.log(typeof web3);
// }

// web3.eth.getAccounts().then(function (result) {
//   account0 = result[0];
//   console.log(account0);
// });

// setTimeout(function delay() {
//   console.log("inside delay func")
//   AssetTrackerContract = new web3.eth.Contract(
//     contractABI,
//     contractAddress,
//     { from: account0 }
//   );
//   console.log(AssetTrackerContract);
// }, 1000);


// setTimeout(function delay() {
//   Object.freeze(account0);
// }, 4000);
var contractABI = null;
var contractAddress = null;
var account0 = null;
var AssetTrackerContract = null;
var dhruv = 18;
  $.ajax({
    url: "./build/contracts/AssetTracker.json",
    async: false,
    dataType: "json",
    delay: 500,
    success: function (json) {
      console.log(json)
      assignVariable(json);
  
    }
  });
  function assignVariable(data) {
    contractABI = data.abi;
    contractAddress = data.networks[5777].address;
  }
  
  if (typeof web3 !== "undefined") {
    console.log(typeof web3);
    web3 = new Web3(web3.currentProvider);
    
  } else {
    console.log(web3);
    web3 = new Web3(new Web3.providers.HttpProviders("http://127.0.0.1:7545"));
  }
window.ethereum.enable();
web3.eth.getAccounts().then(function (result) {
    console.log(result)
    account0 = result[0];
    console.log(account0);
  });
  console.log(account0);
  
  // web3.eth.requestAccounts().then(console.log);
  console.log('shubh line 81')
  // setTimeout(function delay() {
    async function contractAccess(){
      console.log(account0);
      AssetTrackerContract = await new web3.eth.Contract(
        console.log(account0),
        contractABI,
        contractAddress,
        { from: account0 }
      );
    }
    contractAccess();
    console.log(AssetTrackerContract);
  // }, 1000);
  
  console.log(AssetTrackerContract);
  setTimeout(function delay() {
    Object.freeze(account0);
  }, 4000);
