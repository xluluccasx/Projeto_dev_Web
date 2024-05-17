//------------------Sobre_inicio--------------------//

// Função para exibir a imagem anterior
function imgAnt() {
    if (currentImageIdx > 0) {
        currentImageIdx--;
    } else {
        currentImageIdx = images.length - 1; // Retorna à última imagem se estiver na primeira
    }
    updateImage();
}

// Função para exibir a próxima imagem
function imgProx() {
    if (currentImageIdx < images.length - 1) {
        currentImageIdx++;
    } else {
        currentImageIdx = 0; // Retorna à primeira imagem se estiver na última
    }
    updateImage();
}

// Função para atualizar a imagem exibida
function updateImage() {
    var imageElement = document.querySelector('.imagem');
    imageElement.src = images[currentImageIdx];
}
//------------------Sobre_fim--------------------//

//------------------index_inicio--------------------//

// Função para carregar uma página usando fetch
function carregarPagina(pagina) {
    fetch(pagina)
    .then(response => response.text())
    .then(data => {
        // Insere o conteúdo da página na seção de conteúdo
        document.getElementById('conteudo').innerHTML = data;
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}
//------------------index_Fim--------------------//

//------------------Portfolio_inicio--------------------//

// Função para atualizar a imagem exibida no portfólio
function updateImagep() {
    var imageElement = document.getElementById("portfolio-image");
    var descriptionElement = document.getElementById("portfolio-description");
    imageElement.src = images[currentImageIdx];
    descriptionElement.innerHTML = descriptions[currentImageIdx].replace(/\n/g, "<br>"); // Substitui \n por <br> para quebras de linha no HTML
}

// Função para exibir a imagem anterior no portfólio
function imgAntp() {
    if (currentImageIdx > 0) {
        currentImageIdx--;
    } else {
        currentImageIdx = images.length - 1; // Retorna à última imagem se estiver na primeira
    }
    updateImagep();
}

// Função para exibir a próxima imagem no portfólio
function imgProxp() {
    if (currentImageIdx < images.length - 1) {
        currentImageIdx++;
    } else {
        currentImageIdx = 0; // Retorna à primeira imagem se estiver na última
    }
    updateImagep();
}

//------------------Portfolio_fim--------------------//
