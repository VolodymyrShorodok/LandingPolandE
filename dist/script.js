'use strict'

$(document).scroll(function() {
    var wi=window.top.scrollY;
    var elem=$('.bar');
    if(wi>70){
        elem.removeClass('noopac');
        elem.addClass('opac');
    } else {
        elem.removeClass('opac');
        elem.addClass('noopac')
    }
})
$('.card').mouseover(
    function(){
         $(this.children[0]).addClass('card_text_an')
        }
)

    
$(".card_text").on("mouseover ",
function(){
    
    $(this.children[0]).removeClass('anb');
    $(this.children[0]).addClass('an');
    $(this.children[1]).removeClass('anb');
    $(this.children[1]).addClass('an')
}
);
$(".card_text ").on('mouseleave ',
    function(){
       
    
    $(this.children[0]).addClass('anb')
    $(this.children[0]).removeClass('an')
    $(this.children[1]).addClass('anb');
    $(this.children[1]).removeClass('an')
    }
);


$(".card").on("mouseover ",
function(){
    
    $(this.children[1]).removeClass('titleanb');

    $(this.children[1]).addClass('titlean')}

);

$(".card").on('mouseleave ',
    function(){
        
    $(this.children[1]).addClass('titleanb')
    $(this.children[1]).removeClass('titlean')}

);


$(".card_text").on(" click",
function(){
    if($(this.children[0]).hasClass("anb")){
    $(this.children[0]).removeClass('anb');
    $(this.children[0]).addClass('an');
    $(this.children[1]).removeClass('anb');
    $(this.children[1]).addClass('an')}
    else if($(this.children[0]).hasClass("an")){
    $(this.children[0]).addClass('anb')
    $(this.children[0]).removeClass('an')
    $(this.children[1]).addClass('anb');
    $(this.children[1]).removeClass('an')}
    }
);

$(".card").on("click ",
function(){
    if($(this.children[1]).hasClass("titleanb")){
    $(this.children[1]).removeClass('titleanb');
    $(this.children[1]).addClass('titlean')}

    else if($(this.children[1]).hasClass("titlean")){
    $(this.children[1]).addClass('titleanb')
    $(this.children[1]).removeClass('titlean')}
});
