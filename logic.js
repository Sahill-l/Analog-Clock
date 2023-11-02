setInterval(()=>{
 let d = new Date();
 let hourTime = d.getHours();
 let minTime = d.getMinutes();
 let secTime = d.getSeconds();

 let hRotate = 30*hourTime + minTime/2;
 let mRotate = 6*minTime;
 let sRotate = 6*secTime;

 document.getElementById("hHand").style.transform=`rotate(${hRotate}deg)`;
 document.getElementById("mHand").style.transform=`rotate(${mRotate}deg)`;
 document.getElementById("sHand").style.transform=`rotate(${sRotate}deg)`;

},1000);

