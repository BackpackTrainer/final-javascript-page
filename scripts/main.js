var theNewHeading = document.querySelector('h1');
theNewHeading.textContent = 'Words of Wisdom';

// document.querySelector('html').onclick = function() {
 //   alert('Ouch! Stop poking me!');
//}

var myImage = document.querySelector('img');

myImage.onclick = function()  {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/squirrel.jpg')  {
        myImage.setAttribute('src', 'images/crazy town.jpg');
    } else {
        myImage.setAttribute('src', 'images/squirrel.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Seriously, ' + myName + '?';
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Seriously, ' + storedName + '?';
  }

  myButton.onclick = function() {
    setUserName();
  }