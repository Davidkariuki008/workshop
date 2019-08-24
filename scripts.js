//let age = window.prompt("how old are you")

// if age is 18,can drive small Car 
// if age is between 18 and 24 big Car 
// if age is above 24 truck 
// if (age==18){
//     document.write("you can drive small Car")
// }
// else if(age > 18 && age <=24){
//    alert("you can drive big car")
// }
// else if (age >24){
//     console.log(" you can drive truck")
// }
// else if(age<18){
//     console.log("you cannot drive any vehicle at the moment")
// }

// functions
function drive(event){
    event.preventDefault();

    let age = document.getElementById("age").value;

    if (age==18){
        document.getElementById(log).innerHTML="you can drive small Car";
    }
    else if(age > 18 && age <=24){
       document.getElementById("log").innerHTML="you can drive big car";
    }
    else if (age >24){
        document.getElementById("log").innerHTML=" you can drive truck";
    }
    else{
        document.getElementById("log").innerHTML="you cannot drive any vehicle at the moment";
    }
}

 drive(age);
