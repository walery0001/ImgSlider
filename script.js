const  pic1 = document.querySelector('.pic1');
const  pic2 = document.querySelector('.pic2');
const  pic3 = document.querySelector('.pic3');
const  pic4 = document.querySelector('.pic4');
// const  pic5 = document.getElementById('pic5');
// const  pic6 = document.getElementById('pic6');
// const  pic7 = document.getElementById('pic7');
// const  pic8 = document.getElementById('pic8');, pic5, pic6, pic7, pic8
const  bigDiv = document.querySelector('.bigDiv');
const mysection = document.getElementById('mysection');
const nextSection = document.getElementById('nextSection');

 const allPic = [pic1, pic2, pic3, pic4];
 allPic.forEach(e => e.firstElementChild.addEventListener('click', function(r){
let splitPic =  r.target.src;
let korektPic = splitPic.split("file:///F:/java%20script%20lerning/tutorial_projekt/ownProjekt/");
let smallPic  = korektPic[1]
bigDiv.innerHTML  = `<img src="${smallPic}"></img>`;
console.log(typeof(splitPic))
 }));

