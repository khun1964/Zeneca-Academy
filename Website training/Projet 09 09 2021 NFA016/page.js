//Fonction appelée lorsque l'on clique sur le lien Afficher la fenêtre


$(function() {    /* la fonction */

$('.afficherpopup').on('click', function() {

if($(this).hasClass('selected')) 
{

deselect($(this)); 

}


else {

$(this).addClass('selected');
$('.afficherpopup').slideFadeToggle();

}

return false; });


//Fonction appelée lorsque l'on clique sur le lien Fermer la fenêtre

$('.close').on('click', function()  {

deselect($('.afficherpopup'));
return false;
 
});

});

//Fonction utilisée pour fermer la popup et enlever la classe selected 

function deselect(e) {  /* le lien */

    $('.afficherpopup').slideFadeToggle(function()  {
    
        e.removeClass('selected');
    }); 
    
    }
    
    

//Fonction d'animation de la fenêtre. Elle permet d'afficher ou de masquer 

$.fn.slideFadeToggle = function(easing, callback)
{
return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', 
easing, callback);
};



$('.afficherpopup').on('click', function() { select($('.p1'));
return false;
});


if($(this).hasClass('.afficherpopup')) 
{

deselect($(this)); 

} 