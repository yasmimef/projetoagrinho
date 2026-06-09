const noticias = [

{
titulo:"Programa de reflorestamento cresce no Paraná",
texto:"Novas mudas de espécies nativas estão sendo plantadas em diversas regiões do estado."
},

{
titulo:"Araucárias recebem proteção especial",
texto:"Pesquisadores monitoram áreas críticas para garantir a preservação da espécie."
},

{
titulo:"Monitoramento por drones reduz desmatamento",
texto:"Tecnologia ajuda equipes ambientais a identificar áreas de risco."
},

{
titulo:"Recuperação de matas ciliares avança",
texto:"Projetos ambientais recuperam vegetação próxima aos rios."
},

{
titulo:"Biodiversidade das florestas paranaenses",
texto:"Levantamento identifica novas áreas de preservação prioritária."
}

];

const container = document.getElementById("newsContainer");

function renderNoticias(lista){

container.innerHTML="";

lista.forEach(noticia=>{

container.innerHTML += `
<div class="news">
<h3>${noticia.titulo}</h3>
<p>${noticia.texto}</p>
</div>
`;

});

}

renderNoticias(noticias);

document.getElementById("searchInput")
.addEventListener("input",(e)=>{

const texto=e.target.value.toLowerCase();

const filtradas=noticias.filter(n=>
n.titulo.toLowerCase().includes(texto) ||
n.texto.toLowerCase().includes(texto)
);

renderNoticias(filtradas);

});

document.getElementById("darkMode")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

document.getElementById("mobileBtn")
.addEventListener("click",()=>{

document.getElementById("menu")
.classList.toggle("active");

});
