function setValues() {
    let portions = document.getElementById("portions").value;
    var result = document.querySelectorAll('span.amount'); // NodeList
    for (const span of result){
        span.textContent = span.attributes.portion.value*portions
    }
}