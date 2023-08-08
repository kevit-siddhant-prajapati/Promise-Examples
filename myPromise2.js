//promise with resolve , reject with then & catch

let p1 = new Promise(function (resolve, reject) {   //high order function
    let x = 16;
    setTimeout(function(){
        if(x > 18){
            resolve();
        } else {
            reject(x);
        }
    }, 5000);
    
});

p1.
    then(function(){
        console.log("You are eligible.");
    }).
    catch(function(age){
        console.log("You are not eligible because you are "+ age + " year old.");
    });

