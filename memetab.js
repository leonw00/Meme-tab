document.addEventListener('DOMContentLoaded', function (){
    var randImg = Math.floor(Math.random() * 1359);
    var meme = document.getElementById("meme_img");
    var newString = "memes/meme" + String(randImg) + ".jpeg";
    meme.src = newString;


}, false)

