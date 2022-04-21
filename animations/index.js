var i = 0;
var txt= "text";
var speed = 50;

function typeWriter() {
    if (i < txt.lenght) {
        document.getElementById("typeText").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed); 
    }
}