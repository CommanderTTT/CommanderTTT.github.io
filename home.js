//This is all for Homepage 

document.getElementById("color1").addEventListener("click", change_color1);     //Color scheme 1, which is purple style, when click the button which is called color1, the color will change
function change_color1() {
    document.getElementById("homearticle1").style.backgroundColor = "#e0aaff";
    document.getElementById("homearticle2").style.backgroundColor = "#c77dff";
    document.getElementById("photogallery").style.backgroundColor = "#4e148c";
    document.getElementById("button").style.backgroundColor = "#240046"; 
}
document.getElementById("color2").addEventListener("click", change_color2);    //Color scheme 2, which is blue style, when click the button which is called color2, the color will change
function change_color2() {
    document.getElementById("homearticle1").style.backgroundColor = "#48bfe3";
    document.getElementById("homearticle2").style.backgroundColor = "#5390d9"; 
    document.getElementById("photogallery").style.backgroundColor = "#27187e";
    document.getElementById("button").style.backgroundColor = "#001233";
}

document.getElementById("color3").addEventListener("click", change_color3);    //Color scheme3, which is defalut color, mixed with different kinds of color, when click the button which is called color3, the color will change
function change_color3() {
    document.getElementById("homearticle1").style.backgroundColor = "#ffde22";
    document.getElementById("homearticle2").style.backgroundColor = "#6cc5e6";
    document.getElementById("photogallery").style.backgroundColor = "#cf5529";
    document.getElementById("button").style.backgroundColor = "#52b69a";
}

function updateTitle() {
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");
    var answer = document.getElementById("answer");
    if (option1.checked) {
      answer.innerHTML = "Answer: You can go to skill page to see some links of website, that is a very nice way to improve!";
    } else if (option2.checked) {
      answer.innerHTML = "Answer: Great! You can go to project page to submit your email and contact me to get more details!";
    } else {
      answer.innerHTML = "Answer: You can visit all of my pages to know the career of programmer and Effects TD! If you are interested about it, you can contact me in project page.";
    }
  }

alert("Welcome to my website");  //When visitor go to homepage, they will see it