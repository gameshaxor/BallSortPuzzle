var files = [
        "js/850.js",
        "js/core.js"
    ],
    t = Date.now();

for(var i = 0, l = files.length; i < l; i+=1) {
    var scr = document.createElement("script");
    scr.defer = "defer";
    scr.src = files[i] + "?t=" + t;
    document.head.appendChild(scr);
}