//all img
const  pic1 = document.getElementById('pic1');
const  pic2 = document.getElementById('pic2');
const  pic3 = document.getElementById('pic3');
const  pic4 = document.getElementById('pic4');
const  pic5 = document.getElementById('pic5');
const  pic6 = document.getElementById('pic6');
const  pic7 = document.getElementById('pic7');
const  pic8 = document.getElementById('pic8');
//my div-s , section-s ...
const  bigDiv = document.getElementById('bigDiv');
const  mysection = document.getElementById('mysection');
const  btnLeft = document.getElementById('btnLeft');
const  btnRight = document.getElementById('btnRight');
const  nextSection = document.getElementById('nextSection');
// slider
const firstSlide = document.querySelector('.firstSlide');
const secondSlide = document.querySelector('.secondSlide');
const thirdSlide = document.querySelector('.thirdSlide');
//make small pic big
 const allPic = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
 allPic.forEach(e => e.firstElementChild.addEventListener('click', function(r){
let splitPic =  r.target.src;
bigDiv.innerHTML  = `<img src="${splitPic}"></img>`;
 }));
// move img left
btnLeft.addEventListener('click', function(){
nextSection.setAttribute('style', 'transform: translate(-100%);');

mysection.setAttribute('style', 'transform: translate(-100%);');
});
//move img right
btnRight.addEventListener('click', function(){
    nextSection.setAttribute('style', 'transform: translate(100%);');
    mysection.setAttribute('style', 'transform: translate(0px);');
       });
// slider function
x=0;
setInterval(
function(){
	

x++;
if(x===1){
	firstSlide.setAttribute('style', 'transform: translateX(0%);');
}else if(x===2){
	 secondSlide.setAttribute('style', 'transform: translate(0%);');
	}else if(x===3){
		thirdSlide.setAttribute('style', 'transform: translate(0%);');
	}else if(x===7){
		x = 0;
	}	
sliderBack();
    },3000);
    
        function sliderBack(){
        	console.log(x)
        	if(x===4){
        		thirdSlide.setAttribute('style', 'transform: translate(100%);');
	
}else if(x===5){
	 secondSlide.setAttribute('style', 'transform: translate(100%);');
	}else if(x===6){
		firstSlide.setAttribute('style', 'transform: translate(100%);');
	}
        } 

           

          
