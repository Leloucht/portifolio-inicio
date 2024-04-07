const buttonShowProjects = document.querySelector('button');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

buttonShowProjects.addEventListener('click', () => {
    showProject();
    hideButton()
});


function showProject(){
    projetosInativos.forEach((projetos) => {
        projetos.classList.add('ativo')
    })
};

function hideButton(){
    buttonShowProjects.classList.add('remover')
};