var xhr = new XMLHttpRequest();
xhr.open("GET", uriOfCachedPage, true);
xhr.setRequestHeader("Cache-Control", "max-age=0");
xhr.send();