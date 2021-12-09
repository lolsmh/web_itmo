(function() {
    let speed = performance.now()
    let tag = document.createElement("h3");
    let text = document.createTextNode(`Скорость загрузки - ${speed} мс`);
    tag.appendChild(text);
    let element = document.getElementById("speedFooter");
    element.appendChild(tag);
}())