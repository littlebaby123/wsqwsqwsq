window.onload = function () {
    var img = document.getElementById("tupian");
    var btn_show = document.getElementById("chulai");
    var btn_hidden = document.getElementById("xiaoshi");
    btn_show.onclick = function () {
        img.style.display = "block";
    }
    btn_hidden.onclick = function () {
        img.style.display = "none";
    }
}