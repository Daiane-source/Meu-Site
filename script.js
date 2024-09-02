document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        alert('Você clicou em um link!');
    });
});