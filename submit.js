//This is for project page, in submit box.

document.getElementById("submit").addEventListener("click", submitMessage);  //First connect a button 
function submitMessage() {
    let age = document.getElementById("age").value;                         
    if (age < 18) {                     //If someone who is younger than 18, it will tell them they are not old enough to submit message
        alert("You are too young, you cannot submit your message to me.");  
    } else if (age > 120) {             //If someone who submit the age that is more than 120, this is invalid, it is too large
        alert("This age is invalid, please change it.");              
    } else {                            //For Adult that is 18 or older, and the age is valid which is lower than 121, they can send message to me.
        alert("Thank you for submitting message to me.");
    }

}