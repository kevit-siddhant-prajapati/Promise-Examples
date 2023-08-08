// Simple Promise Example
let p1 = new Promise(function (resolve, reject){
    console.log("Promise in pending....");
    setTimeout(
        function(){
            console.log("Promise p1 is full filled");
        }
    , 5000);
});
let name1 = "Ajay Kumar";
console.log("Hello my name is "+name1);