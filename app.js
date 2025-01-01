function invisibleImage() {
    document.getElementById("image").className="picture";
}

function heading() {
    document.getElementById("text").className += " head";
}
//using function
function swipImage() {
    document.getElementById("swip").src="dance.gif";
    document.getElementById("swip").style.width="200px";
}
//with variable and function
function image() {
   let pic = document.getElementById("start");
   pic.src = 'submit.png';
   pic.style.width = "200px";
}

function address() {
   let link = document.getElementById("url");
   let url = link.href;
   document.write(url);
}

function input() {
    let form = document.getElementById("form");
    form.className = "input";
}

function text() {
    document.getElementById("para").style.color = "yellow";
}