var button = document.getElementById('button_top'); 
button.addEventListener('click', scroll);


function scroll(){
    button.style.transform = 'scale(0)';
    
    var scroll_top = document.documentElement.scrollTop;
    
    if (scroll_top > 100){
        window.scrollTo(0,0); 
        
    }
}

window.onscroll = function(){

    var scroll_top = document.documentElement.scrollTop;
    if(scroll_top > 99){
        button.style.transform = 'scale(1)';
    }else if(scroll_top < 99){
        button.style.transform = 'scale(0)';
    }
}









