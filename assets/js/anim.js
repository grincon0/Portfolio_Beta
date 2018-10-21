const stateCheck = setInterval(function (){
    if( document.readyState !== 'complete' ){
        return;
    }else{
        clearInterval(stateCheck);
        console.log('Timer is done');
    }
}, 100);


//$(document).ready(function(){
    //setTimeout(function(){
       // $(".begins").attr('class', 'slide-away');
        //$(".column").attr('class', 'remove-load-anim');

   // }, 3000);
//});