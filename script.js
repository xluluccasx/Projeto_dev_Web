//------------------Sobre_inicio--------------------//

function imgAnt() {
    if (currentImageIdx > 0) {
        currentImageIdx--;
    } else {
        currentImageIdx = images.length - 1; // Retorna à última imagem se estiver na primeira
    }
    updateImage();
}

function imgProx() {
    if (currentImageIdx < images.length - 1) {
        currentImageIdx++;
    } else {
        currentImageIdx = 0; // Retorna à primeira imagem se estiver na última
    }
    updateImage();
}

function updateImage() {
    var imageElement = document.querySelector('.imagem');
    imageElement.src = images[currentImageIdx];
}
//------------------Sobre_fim--------------------//

//------------------index_inicio--------------------//

function carregarPagina(pagina) {
    // Usa fetch() para carregar o conteúdo da página
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

function updateImagep() {
    var imageElement = document.getElementById("portfolio-image");
    var descriptionElement = document.getElementById("portfolio-description");
    imageElement.src = images[currentImageIdx];
    descriptionElement.innerHTML = descriptions[currentImageIdx].replace(/\n/g, "<br>"); // Substitui \n por <br> para quebras de linha no HTML
}

function imgAntp() {
    if (currentImageIdx > 0) {
        currentImageIdx--;
    } else {
        currentImageIdx = images.length - 1; // Retorna à última imagem se estiver na primeira
    }
    updateImagep();
}

function imgProxp() {
    if (currentImageIdx < images.length - 1) {
        currentImageIdx++;
    } else {
        currentImageIdx = 0; // Retorna à primeira imagem se estiver na última
    }
    updateImagep();
}

//------------------Portfolio_fim--------------------//