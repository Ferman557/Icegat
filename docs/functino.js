var urlOfCachedPage = "https://ferman557.github.io/Icegat/";
var xhr = new XMLHttpRequest();
xhr.open("GET", urlOfCachedPage, true);
xhr.setRequestHeader("Cache-Control", "max-age=0");
xhr.send();