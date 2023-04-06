//This is for Skill and Project page

document.getElementById("color1").addEventListener("click", change_color1);    //Color scheme 1, which is purple style, when click the button which is called color1, the color will change
function change_color1() {
    document.getElementById("article1").style.backgroundColor = "#e0aaff";
    document.getElementById("article2").style.backgroundColor = "#c77dff";
    document.getElementById("button1").style.backgroundColor = "#240046";
    document.getElementById("form").style.backgroundColor = "#4e148c";
} 

document.getElementById("color2").addEventListener("click", change_color2);   //Color scheme 2, which is blue style, when click the button which is called color2, the color will change
function change_color2() {
    document.getElementById("article1").style.backgroundColor = "#48bfe3";
    document.getElementById("article2").style.backgroundColor = "#5390d9";
    document.getElementById("button1").style.backgroundColor = "#001233";
    document.getElementById("form").style.backgroundColor = "#27187e";
}

document.getElementById("color3").addEventListener("click", change_color3);   //Color scheme3, which is defalut color, mixed with different kinds of color, when click the button which is called color3, the color will change
function change_color3() {
    document.getElementById("article1").style.backgroundColor = "#ffde22";
    document.getElementById("article2").style.backgroundColor = "#6cc5e6";
    document.getElementById("button1").style.backgroundColor = "#52b69a";
    document.getElementById("form").style.backgroundColor = "#819C52";
}
