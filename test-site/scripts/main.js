let myImage = document.querySelector('img');
 
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/zhao.jpg') {
       myImage.setAttribute('src', 'images/shen.jpg');
    } else {
      myImage.setAttribute('src', 'images/zhao.jpg');
    }
}
function setHeading(name) {
let myHeading = document.querySelector('h1');
myHeading.textContent = '你好,' + name + '!';
}

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName) {
    setUserName();
}else {
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;