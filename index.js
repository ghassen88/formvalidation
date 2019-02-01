$ (function(){
    'use strict';
    $('.username').blur(function(){
        if($(this).val().lentgh<= 3){
         console.log('this nedd 3 cr');  
        }
    }
);

});