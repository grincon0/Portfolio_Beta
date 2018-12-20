$(document).ready(function () {
    /*     $.ajax({
            method: 'PUT',
            url: `/burger/${d}`,
            data: {
                devour: id
            },
        }).then((res) => {
            location.reload();
        }) */
    
        skyChange.getTime().then(skyChange.getAdjust).then(skyChange.changeSky)
        
        
});



const skyChange = {
   
    getTime: () =>{
        let promise = new Promise((resolve, reject) => {
            $.get("/api/time", function (data) {
                console.log(data);
                    resolve(data);
            });
        })

        return promise;

    },
    getAdjust: (res) => {
        let n = res;
        let promise = new Promise((resolve,reject) =>{
            //let n = parseInt(res);

            let t, m, b;
            if(n == 6){
                t = '#020023';
                m = '#230023';
                b = '#bf510d';
            }else if([7 , 8].includes(n)){
                t = '#5a6ca8';
                m = '#e1f6f7';
                b = '#bf510d';
            }else if([9 , 10].includes(n)){
                t = '#c4f7ff';
                m = '#fff5c4';
                b = '#bf510d';
            }else if(11 <= n <= 16){
                t = '#0079d6';
                m = '#7aedff';
                b = '#a7b8f2';
            }else if(17 <= n <= 18){
                t = '#c170ff';
                m = '#fff9e9e';
                b = '#ffad7a';
            }else if(n == 19){
                t = '#00128c';
                m = '#8f1dd1';
                b = '#ea1e8b';
            }else if(n == 20){
                t = '#010123';
                m = '#460456';
                b = '#960101';
            }else{
                t = '#0d0c38';
                m = '#010116';
                b = '#960101';
            }
            console.log(t);

           /*  $("#main-box").css({
                background : `linear-gradient(${t}, ${m}, ${b})`
            }); */
            resolve({top: t, mid: m, bottom: b});
        });



        return promise;
    },
    
    changeSky: (res) =>{
        console.log(res);
        console.log('Sky gradient re-colored due to time change');
       let promise = new Promise((resolve, reject) => {
            $("#main-box").css({
                background : `linear-gradient(${res.top}, ${res.mid}, ${res.bottom})`
            });
            resolve('Sky changed!');
     });
        return promise; 
    } 
}

