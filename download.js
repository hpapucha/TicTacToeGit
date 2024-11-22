document.querySelectorAll('.toggle-button').forEach((button) => {
    button.addEventListener('click', function () {
        const contentBox = this.nextElementSibling;
        const textContent = contentBox.querySelector('.text-content');
        const buttonId = this.id;
        if (contentBox.classList.contains('open')) {
            contentBox.classList.remove('open');
            textContent.style.display = 'none';
            if (buttonId === 'toggleButton1') {
                this.textContent = 'Download XML';
            } else if (buttonId === 'toggleButton2') {
                this.textContent = 'Download HTML';}
        } else {
            contentBox.classList.add('open');
            textContent.style.display = 'block';
            if (buttonId === 'toggleButton1') {
                this.textContent = 'Hide XML';
            } else if (buttonId === 'toggleButton2') {
                this.textContent = 'Hide HTML';
            }
        }
    });
});