var destination=0;
var speed=3;
var scroller=null;
var marginY=0;
function initscroll(ID){
  destination=document.getElementById(ID).offsetTop;
  scroller=setTimeOut(function(){
    initscroll(ID);
  },1);
  marginY=marginY + speed;
  if(marginY>=destination){
    clearTimeout(scroller);
  }
  window.scroll(0,marginY);
}
