//pass value in Promise
var username = "Sid";
var password = "124";

let p1 = new Promise(function (resolve, reject) {   //high order function
    
    setTimeout(function(){
        if(username == "Sid" && password == 123){
            resolve();
        } else {
            reject();
        }
    }, 2000);
    
});

p1.
    then(function(){
        console.log("Login successful.");
    }).
    catch(function(){
        console.log("Login Fail");
    });
