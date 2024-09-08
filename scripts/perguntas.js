
const perguntas = document.querySelectorAll('.perguntas dt');

function clickDetector(event) {
    event.addEventListener('click', showResponse)
}

function showResponse(event) {
    let pergunta = event.currentTarget;

    if(pergunta.getAttribute('aria-expanded') == 'false') {
        pergunta.setAttribute("aria-expanded", "true");

    } else {
        pergunta.setAttribute("aria-expanded", "false");
    }
}

perguntas.forEach(clickDetector);