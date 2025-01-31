// Seleciona o elemento pelo ID
const elemento = document.getElementById('animacao1');

// Configuração do Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Adiciona a classe 'show' quando entra na tela
            console.log('Elemento visível');
        } else {
            entry.target.classList.remove('show'); // Remove a classe 'show' quando sai da tela
            console.log('Elemento invisível');
        }
    });
}, { threshold: 0.2 }); // Define o ponto de visibilidade

// Começa a observar o elemento
observer.observe(elemento);