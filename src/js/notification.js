// Función Open-Close del Dialog by Lúcian j

const modal = document.querySelector('.dialog')

const btnOpen = 
    document.querySelector('.btn-open').addEventListener('click', ()=> modal.showModal());

const btnClose = 
    document.querySelector('.btn-close').addEventListener('click', ()=> modal.close());

// Función Nav enlaces

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function showTab(tabName) {
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === tabName) {
                content.classList.add('active');
            }
        });

        tabButtons.forEach(button => {
            button.classList.remove('active');
            if (button.dataset.tab === tabName) {
                button.classList.add('active');
            }
        });
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            showTab(button.dataset.tab);
        });
    });

    // Mostrar por defecto la pestaña "Todos"
    showTab('todos');
});
