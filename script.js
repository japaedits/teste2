document.addEventListener('DOMContentLoaded', () => {
    const showImagesButton = document.getElementById('showImagesButton');
    const photosContainer = document.createElement('div');
    photosContainer.classList.add('photo-container');
    document.body.appendChild(photosContainer);

    // Defina o caminho das suas imagens
    const photoPaths = [
        'fotos/image1.png',
        'fotos/image2.png',
        'fotos/image3.png',
        'fotos/image4.png',
        'fotos/image5.png'
    ];

    let currentImageIndex = 0;

    // Função para exibir as imagens uma por uma
    function showNextImage() {
        // Cria a imagem e adiciona à tela
        const img = document.createElement('img');
        img.src = photoPaths[currentImageIndex];
        img.style.display = 'none'; // Inicialmente escondida
        photosContainer.appendChild(img);

        // Faz a imagem aparecer gradualmente
        setTimeout(() => {
            img.style.display = 'block';
            img.style.transition = 'opacity 1s ease-in-out';
            img.style.opacity = '1';
        }, 100);

        // Incrementa o índice da imagem
        currentImageIndex++;

        // Se todas as imagens foram exibidas, desativa o botão
        if (currentImageIndex >= photoPaths.length) {
            showImagesButton.disabled = true;
            showImagesButton.innerHTML = 'Todas as imagens mostradas!';
        }
    }

    // Quando o botão de mostrar as imagens for clicado, começa a exibir as imagens
    showImagesButton.addEventListener('click', () => {
        showNextImage();
        // Configura um intervalo para mostrar as imagens de 5 em 5 segundos
        const imageInterval = setInterval(() => {
            if (currentImageIndex < photoPaths.length) {
                showNextImage();
            } else {
                clearInterval(imageInterval); // Limita a exibição de imagens
            }
        }, 5000); // Exibe uma imagem a cada 5 segundos
    });
});
