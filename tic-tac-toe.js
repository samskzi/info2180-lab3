"use strict";
window.onload = function() {
    let board1 = document.getElementById('board');
    var s = board1.children;
    for(var i = 0; i <= 9; ++i){
        var s1 = s[i];
        s[i].classList.add('square');
    }
    }
    
   
