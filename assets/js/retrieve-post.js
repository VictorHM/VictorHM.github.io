// URL del feed del blog
var feed_url = "https://failingup.substack.com/feed";

// Hacer una petición a la URL del feed del blog
fetch(feed_url)
    .then(function(response) {
        return response.text();
    })
    .then(function(xml) {
        // Convertir el XML del feed a un objeto Document de JavaScript
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xml, "text/xml");

        // Obtener la lista de elementos "item" del feed
        var items = xmlDoc.getElementsByTagName("item");

        // Obtener la última entrada del blog
        var lastItem = items[0];

        // Obtener el título, la fecha y el contenido de la última entrada
        var titleblog = lastItem.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        var pubDateblog = lastItem.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
        var contentblog = lastItem.getElementsByTagName("content:encoded")[0].childNodes[0].nodeValue;

        // Mostrar la información de la última entrada en la página
        document.querySelector("#title").innerText = titleblog;
        document.querySelector("#pubDate").innerText = pubDateblog;
        document.querySelector("#content").innerHTML = contentblog;
    })
    .catch(function(error) {
        console.error(error);
    });