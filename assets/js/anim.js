const stateCheck = setInterval(function () {
    if (document.readyState !== 'complete') {
        return;
    } else {
        clearInterval(stateCheck);
        console.log('Timer is done');
    }

}, 100);

let hasBeenToggled = false;

$(document).ready(function () {
    $(".main-btn").on("click", function (){
        toggleAbout();

    });
    
    $(".exit").on("click", function (){
        resetDOM();
    });
    setTimeout(function () {
        $("#port-sec").removeAttr("class", "to-be-loaded");
    }, 2100);

    letterMagic.setLayout();
    letterMagic.init();

});

const letterMagic = {
    specialChars: ['▓', '▒', '░', '█', '╪', 'Ω', '█', 'Σ', '¶',
        '░', 'ø', '▒', 'Γ', 'δ', 'Θ', '▒', '+', '/', '#',
        , '@', '!', '%', '░', '▓'],
    layout: [],
    normal: 'Full Stack Developer',
    sep: [],
    setLayout: function () {
        let word = this.normal.split("");

        for (let i = 0; i < word.length; i++) {

            this.layout.push(false);
        }

    },
    getRndChar: function () {
        return Math.floor(Math.random() * this.specialChars.length);
    },
    getRndPos: function () {
        return Math.floor(Math.random() * this.layout.length);
    },
    init: function () {
        let time = 0;
        let a = letterMagic;
        let b = 0;
        let isWordComplete = false;
        let interval = setInterval(function () {
            //probabaly dont need this
            //set layout[a = getRndPos]

            if (time > 75 && (b < a.normal.length)) {
                
                    let word = a.normal.split("");

                    a.layout[b] = word[b];

                    let boo = a.layout.join('');
                    $('#sub-name').text(boo);
                    b++;
                
                isWordComplete = true;

            } else if(isWordComplete){
                clearInterval(interval);

            } else {
                for (let p = 0; p < a.layout.length; p++) {
                    a.layout[p] = a.specialChars[a.getRndChar()];
                    let text = a.layout.join('');
                    $("#sub-name").text(text);
                }               
            }
            time++;
        }, 45);

    }
}


const btnActions = {
    getCards : function () {
        $(".main-btn").on("click", function (){
            $(".about-card").attr('class', 'move-in-left');
        });
    }
}


const toggleAbout = () => {

    if(hasBeenToggled){
        $(".about-card").removeClass('back-transparent move-in-right');
        $(".contact-card").removeClass('back-transparent move-in-left');
        $(".about-card").addClass('back-fade-in');
        $(".contact-card").addClass('back-fade-in');
        hasBeenToggled = false;
        toggleAbout();
    }else{
        $("#front-page").addClass('back-transparent');
        $(".about-card").addClass('move-in-left');
        //$(".contact-card").addClass('move-smooth');
        $(".contact-card").addClass('move-in-right');
        $(".body").addClass('stop-scroll-y');
    }

}

const resetDOM = () => {
    $("#front-page").removeClass('back-transparent');
    $(".about-card").removeClass('move-in-left');
    $(".contact-card").removeClass('move-in-right');
    

    $("#front-page").addClass('back-fade-in');
    $(".about-card").addClass('move-in-right');
    $(".contact-card").addClass('move-in-left');
    $(".body").removeClass('stop-scroll-y');

    $(".about-card").addClass('back-transparent');
    $(".contact-card").addClass('back-transparent');

    hasBeenToggled = true;


}


