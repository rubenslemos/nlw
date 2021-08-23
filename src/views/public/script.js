document.querySelector('.hamburger').addEventListener('click', () =>
    document.querySelector('.container').classList.toggle('show-menu')
);
var modal = document.getElementById('modal')

function abrirModal() {
    modal.classList.add("bg-modalon")
}

function fecharModal() {
    modal.classList.remove("bg-modalon")
}