const btnMostrar = document.getElementById('btnAbrir');

const mostrarModal = (modalID) => {
    const modalContainer = document.getElementById(modalID);
    if (modalContainer) {
        if (localStorage.getItem('fechaModal') !== modalID) {
            modalContainer.classList.add('mostrar');
            modalContainer.addEventListener('click', (e) => {
                if (
                    e.target.id === modalID ||
                    e.target.className === 'fecharModal'
                ) {
                    modalContainer.classList.remove('mostrar');
                    localStorage.setItem('fechaModal', modalID);
                }
            });
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    mostrarModal('modalProduto');
});
