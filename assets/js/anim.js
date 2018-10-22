const stateCheck = setInterval(function () {
    if (document.readyState !== 'complete') {
        return;
    } else {
        clearInterval(stateCheck);
        console.log('Timer is done');
    }

}, 100);


$(document).ready(function () {
    setTimeout(function () {
        $("#port-sec").removeAttr("class", "to-be-loaded");
    }, 2100);
    letterMagic.init();
});



const letterMagic = {
    specialChars: ['▓', '▒', '░', '█', '╪', 'Ω', 'ε', 'Σ', '¶',
        '…', 'ø', '▒', 'Γ', 'δ', 'Θ', '§', '+', '/', '#',
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
                    console.log(b);
                    
                
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
        }, 60);

    }
}


letterMagic.setLayout();


const specialChars = ['▓', '▒', '░', '█', '╪', 'Ω', 'ε', '≈', 'Σ', '¶',
    '…', 'ø', '▒', 'Γ', 'δ', 'Θ', '§', '9', '+', '/', ']', '&', '#',
    , '@', '!', '%'];






