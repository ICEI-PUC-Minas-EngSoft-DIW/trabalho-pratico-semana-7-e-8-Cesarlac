const carros = [
    {
        id: 1,
        titulo: "Toyota Corolla",
        imagem: "imgs/corolla.jpg",
        descricao: "O Toyota Corolla é sinônimo de confiabilidade e conforto. É o líder absoluto de vendas em sua categoria há muitos anos e se tornou o carro preferido de quem busca um sedã médio sem surpresas. Seu sucesso se baseia em uma reputação sólida de durabilidade, baixa desvalorização e um pós-venda elogiado."
    },
    {
        id: 2,
        titulo: "Volkswagen Gol",
        imagem: "imgs/gol.jpg",
        descricao: "Falar de carros no Brasil é falar do Volkswagen Gol. Lançado em 1980, ele foi o carro mais vendido do país por 27 anos consecutivos, um recorde absoluto. O Gol se tornou um ícone pela sua robustez, simplicidade mecânica e facilidade de revenda."
    },
    {
        id: 3,
        titulo: "Chevrolet Onix",
        imagem: "imgs/onix.jpg",
        descricao: "O Chevrolet Onix é, há anos, um dos carros mais vendidos do Brasil e um verdadeiro fenômeno de mercado. Lançado em 2012, ele rapidamente conquistou o público com seu design moderno, bom pacote de equipamentos e baixo custo de manutenção."
    },
    {
        id: 4,
        titulo: "Jeep Renegade",
        imagem: "imgs/renegade.jpg",
        descricao: "O Jeep Renegade foi um dos principais responsáveis pela popularização dos SUVs compactos no Brasil desde seu lançamento em 2015. Com um design 'quadradão' e carismático, inspirado nos clássicos da marca, ele conquistou um público que buscava um carro com visual robusto e posição de dirigir mais elevada."
    },
    {
        id: 5,
        titulo: "Fiat Strada",
        imagem: "imgs/strada.jpg",
        descricao: "A Fiat Strada é a líder incontestável do mercado de picapes no Brasil e, por vezes, o veículo mais vendido do país no geral. Lançada em 1998, ela revolucionou o segmento com inovações como a cabine estendida e, posteriormente, a cabine dupla com três portas."
    }
];

function carregarCards() {
    
    const containerDestaque = document.querySelector('.secao-destaque');
    const containerInferior = document.querySelector('.secao-inferior');

    const carroDestaque = carros[0];

    if (carroDestaque) {
        const destaqueHtml = `
            <article class="artigo-destaque">
                <a href="detalhes.html?id=${carroDestaque.id}" class="link-artigo">
                    <img src="${carroDestaque.imagem}" alt="${carroDestaque.titulo}">
                    <div class="texto-artigo-principal">
                        <h1>${carroDestaque.titulo}</h1>
                        <p>${carroDestaque.descricao}</p>
                    </div>
                </a>
            </article>
        `;
        containerDestaque.innerHTML = destaqueHtml;
    }

    const outrosCarros = carros.slice(1);

    outrosCarros.forEach(carro => {
        const cardHtml = `
            <article class="artigo-inferior">
                <a href="detalhes.html?id=${carro.id}" class="link-artigo">
                    <img src="${carro.imagem}" alt="${carro.titulo}">
                    <div class="texto-artigo">
                        <h2>${carro.titulo}</h2>
                        <p>${carro.descricao}</p>
                    </div>
                </a>
            </article>
        `;
        containerInferior.innerHTML += cardHtml;
    });
}

document.addEventListener('DOMContentLoaded', carregarCards);

function carregarDetalhes() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const carroId = urlParams.get('id');

    const carro = carros.find(c => c.id === parseInt(carroId));

    const container = document.getElementById('detalhes-container');

    if (carro) {
        document.title = carro.titulo;
        const detalheHtml = `
            <article class="detalhe-carro">
                <h1>${carro.titulo}</h1>
                <img src="${carro.imagem}" alt="${carro.titulo}">
                <p>${carro.descricao}</p>
                <a href="index.html" class="voltar-link"> ← Voltar para a página inicial</a>
            </article>
        `;
        container.innerHTML = detalheHtml;
    } else {
    
        container.innerHTML = `
            <h1>Carro não encontrado!</h1>
            <a href="index.html" class="voltar-link"> ← Voltar para a página inicial</a>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('detalhes-container')) {
        carregarDetalhes();
    } else if (document.querySelector('.secao-destaque')) {
        carregarCards();
    }
});