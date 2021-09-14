var Links={ alistColor:function(color){
  // var alist=document.querySelectorAll('ol, a')
  // var i=0
  // while(i<alist.length){
  // alist[i].style.color=color;
  // i=i+1;
  //   }
    $('ol, a').css('color',color);
  }
}


 var Body={
 setColor:function(color){
   $('body').css('color',color);
   //document.querySelector('body').style.color=color;
 },
 setBackgroundColor:function(color){
   $('body').css('backgroundColor',color);
   //document.querySelector('body').style.backgroundColor=color;
 }
}

var Border={SetborderBottomColor:function(color){
  $('h1').css('borderBottomColor',color);
  //document.querySelector('h1').style.borderBottomColor='white';
    },
  SetborderRightColor:function(color){
    $('ol').css('borderRightColor',color);
  //document.querySelector('ol').style.borderRightColor=color;
  }
}

function nightDayHandler(self){
 var target=document.querySelector('body');

 if(self.value==='night'){
   Body.setBackgroundColor('black');
   Body.setColor('white');
   self.value='day';
   Border.SetborderBottomColor('white');
   Border.SetborderRightColor('white');
   Links.alistColor('white');
 }

 else{
   Body.setBackgroundColor('white');
   Body.setColor('black');
   self.value='night';
   Border.SetborderBottomColor('black');
   Border.SetborderRightColor('black');

   Links.alistColor('black');

}
}
