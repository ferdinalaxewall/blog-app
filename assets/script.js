const texts = ['M. Rifky Maulana', 'Ahmad Fariz', 'M. Ferdinal', 'M. Syamsul', 'Anindiya Imtiyaz'];
let count = 0 ;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    
    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('#typing-text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 400);
}());

$(window).scroll(function(){
    let windowScroll = $(this).scrollTop();

    if(windowScroll > 100){
        $(".navbar").attr("data-scroll", "on");
    }else{
        $(".navbar").attr("data-scroll", "off");
    }
});