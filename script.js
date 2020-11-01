const  pic1 = document.getElementById('pic1');
const  pic2 = document.getElementById('pic2');
const  pic3 = document.getElementById('pic3');
const  pic4 = document.getElementById('pic4');
const  pic5 = document.getElementById('pic5');
const  pic6 = document.getElementById('pic6');
const  pic7 = document.getElementById('pic7');
const  pic8 = document.getElementById('pic8');
const  bigDiv = document.getElementById('bigDiv');
const  mysection = document.getElementById('mysection');
const  btnLeft = document.getElementById('btnLeft');
const  btnRight = document.getElementById('btnRight');
const  nextSection = document.getElementById('nextSection');

 const allPic = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
 allPic.forEach(e => e.firstElementChild.addEventListener('click', function(r){
let splitPic =  r.target.src;
bigDiv.innerHTML  = `<img src="${splitPic}"></img>`;
 }));

btnLeft.addEventListener('click', function(){
nextSection.setAttribute('style', 'transform: translate(0px);');
mysection.setAttribute('style', 'transform: translate(-100%);');
console.log('sd')
})