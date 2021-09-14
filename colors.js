var links={ setColor:function(color){
  // var alist = document.querySelectorAll('a');
  // var i=0;
  // while(i<alist.length){
  // alist[i].style.color=color;
  // i=i+1;
  //   }
 $('a').css('color',color);
  }
}

function backGroundColor(color) {
  // document.querySelector('body').style.backgroundColor=color;
  $('body').css('backgroundColor',color);
}

function fontColor(color) {
  // document.querySelector('body').style.color=color;
  $('body').css('color',color);
}

function nightDayHandler(self){
var target= document.querySelector('body');
if(self.value === 'Night'){
backGroundColor('black');
fontColor('white');
document.querySelector('h1').style.borderBottom='white 1px solid';
document.querySelector('ol').style.borderRight='white 1px solid';
self.value = 'Day';

links.setColor('powderblue');



}


else{
backGroundColor('white');
fontColor('black');
document.querySelector('h1').style.borderBottom='black 1px solid';
document.querySelector('ol').style.borderRight='black 1px solid';
self .value = 'Night';

links.setColor('blue');

  }
}
