// Banco de dados simulado das árvores
const infoArvores = {
    ipe: {
        titulo: "Ipê-Amarelo",
        cientifico: "Handroanthus albus",
        descricao: "O Ipê-Amarelo é uma das árvores mais icônicas do Brasil. Suas flores amarelas brilhantes surgem logo após a queda das folhas, criando um contraste maravilhoso com o céu azul de inverno/primavera. É amplamente utilizada no paisagismo urbano.",
        bioma: "Mata Atlântica e Cerrado",
        altura: "7 a 30 metros"
    },
    paubrasil: {
        titulo: "Pau-Brasil",
        cientifico: "Paubrasilia echinata",
        descricao: "Historicamente valioso pela resina vermelha extraída de seu tronco para tingir tecidos de luxo na Europa colonial. Possui galhos com espinhos e flores amarelas perfumadas. Hoje, é uma espécie ameaçada e protegida por lei.",
        bioma: "Mata Atlântica",
        altura: "10 a 15 metros"
    },
    jabuticaba: {
        titulo: "Jabuticabeira",
        cientifico: "Plinia cauliflora",
        descricao: "Uma árvore frutífera nativa extremamente popular no Brasil. Sua principal característica é a caulifloria: os pequenos frutos negros e doces crescem diretamente grudados no tronco principal e nos galhos grossos, transformando o visual da árvore na época de colheita.",
        bioma: "Mata Atlântica",
        altura: "6 a 9 metros"
    }
};

// Seleção de elementos do DOM
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-btn");
const cards = document.querySelectorAll(".card");

// Elementos internos do Modal
const modalTitulo = document.getElementById("modal-titulo");
const modalCientifico = document.getElementById("modal-cientifico");
const modalDescricao = document.getElementById("modal-descricao");
const modalBioma = document.getElementById("modal-bioma");
const modalAltura = document.getElementById("modal-altura");

// Função para abrir o modal com as informações corretas
cards.forEach(card => {
    card.addEventListener("click", () => {
        const idArvore = card.getAttribute("data-tree");
        const dados = infoArvores[idArvore];

        if (dados) {
            modalTitulo.textContent = dados.titulo;
            modalCientifico.textContent = dados.cientifico;
            modalDescricao.textContent = dados.descricao;
            modalBioma.textContent = dados.bioma;
            modalAltura.textContent = dados.altura;

            modal.style.display = "flex";
        }
    });
});

// Fechar o modal ao clicar no 'X'
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar o modal ao clicar fora da caixa branca
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
