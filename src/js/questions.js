
const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrowIcon = element.querySelectorAll('i');

        ddElement.classList.toogle('hidden');
        ddArrowIcon.classList.toogle('-rotate-100'); 

    })
})