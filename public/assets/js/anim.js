let hasBeenToggled = false;

$(function () {
    $(".main-btn").on("click", function () {
        toggleAbout();
    });

    $(".exit").on("click", function () {
        resetDOM();
    });

    clickBundle('#port-link');
    clickBundle('#Extra-link');

    /*
    $("#port-link").on("click", function () {
        $("#port-sec").removeClass("to-be-loaded");
        $("#ExtraBits").removeClass("to-be-loaded");
        $(".footer-links").removeClass("to-be-loaded");
        $(".signature").removeClass("to-be-loaded");
        
    });
    */

    let newDate = new Date();
    let datetime = `Today is ${newDate.today}`;
    console.log(datetime);

   setClassScroll('.portfolio-head', 'appear-bounce', 0);
   setClassScroll('.port-box', 'appear-bounce', 0);
   setClassScroll('.extra-bit-box', 'doit', 380);

    letterMagic.setLayout();
    letterMagic.init();

    
        //fontColor();
    
    
});

const stateCheck = setInterval(function () {
    if (document.readyState !== 'complete') {
        return;
    } else {
        clearInterval(stateCheck);
        console.log('Timer is done');
    }

}, 100);

const letterMagic = {
    specialChars: ['▓', '▒', '░', '█', '╪', 'Ω', '█', 'Σ', '¶',
        '░', 'ø', '▒', 'Γ', 'δ', 'Θ', '▒', '+', '/', '#',
        , '@', '!', '%', '░', '▓'],
    layout: [],
    normal: 'Full Stack Dev',
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
                $('#title-name').text(boo);
                b++;

                isWordComplete = true;

            } else if (isWordComplete) {
                clearInterval(interval);

            } else {
                for (let p = 0; p < a.layout.length; p++) {
                    a.layout[p] = a.specialChars[a.getRndChar()];
                    let text = a.layout.join('');
                    $("#title-name").text(text);
                }
            }
            time++;
        }, 45);

    }
}


const btnActions = {
    getCards: function () {
        $(".main-btn").on("click", function () {
            $(".about-card").attr('class', 'move-in-left');
        });
    }
}


const setClassScroll = (selector, classToAdd, buffer) => {

    let effDel = buffer;
    /*
    if(effDel == (false || undefined || NaN)){
        effDel = 0;
    }
    */
    let $window = $(window);

    $window.on('scroll', function () {
        let div = $(`${selector}`);
        let pad = Math.max(0, $window.height() - 100);
        let scrollTop = $window.scrollTop();

        if (!div.hasClass(`${classToAdd}`) && scrollTop + pad > (div.offset().top + effDel)) {
            div.addClass(`${classToAdd}`);
            return;
        }
    });

}

const clickBundle = (selector) => {

    $(`${selector}`).on("click", function () {
        $("#port-sec").removeClass("to-be-loaded");
        $("#ExtraBits").removeClass("to-be-loaded");
        $("#footer").removeClass("to-be-loaded");
        $(".footer-links").removeClass("to-be-loaded");
        $(".signature").removeClass("to-be-loaded");
        
    });
}



const toggleAbout = () => {

    if (hasBeenToggled) {
        $("#front-page").removeClass('back-fade-in');
        $(".layer").removeClass('back-fade-in')
        $(".about-card").removeClass('back-transparent move-in-right');
        $(".contact-card").removeClass('back-transparent move-in-left');
        $(".about-card").addClass('back-fade-in');
        $(".contact-card").addClass('back-fade-in');
        hasBeenToggled = false;
        toggleAbout();
    } else {
        $("#front-page").addClass('back-transparent');
        $(".layer").addClass('back-transparent');
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

    $('.layer').addClass('back-fade-in');
    $("#front-page").addClass('back-fade-in');
    $(".about-card").addClass('move-in-right');
    $(".contact-card").addClass('move-in-left');
    $(".body").removeClass('stop-scroll-y');

    $(".about-card").addClass('back-transparent');
    $(".contact-card").addClass('back-transparent');

    hasBeenToggled = true;


}

function fontColor (){
    let hour = parseInt(skyChange.getTime());
    console.log(hour);
    if( 7 <= hour && hour <= 18){
        $('nav-link').addClass('day-letter')

    }else{
        $('nav-link').removeClass('day-letter');
    }
}




