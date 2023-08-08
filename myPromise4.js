// Promise 
var username;
var password;
for(let i=0 ; i<5 ; i++){
    setTimeout(function(){
        console.log("\nSecond "+i);
        ageCheck(15 + i);
    },i*1000);
}

// Promise for login task
function authenticate(username, password){
    
    let p1 = new Promise(function (resolve, reject) {   //high order function
        //console.log("Task Pending");
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
            console.log("Login successful, Welcome "+ username);
        }).
        catch(function(){
            console.log("Login Fail");
        }).
        finally(function(){
            console.log("authentication complete");
        })

}

var age;
//Promise for age check
function ageCheck(age){
    
    let p1 = new Promise(function (resolve, reject) {   //high order function
        console.log("Task Pending");
        setTimeout(function(){
            if(age > 18) {
                resolve();
            } else {
                reject();
            }
        });
        
    });

    p1.
        then(function(){
            console.log("You are eligible.");
        }).
        catch(function(){
            console.log("You are not eligible because you are "+ age + " year old.");
        });

}
let user1 = authenticate("Sid",123);
let user2 = authenticate("Ajay",123);

