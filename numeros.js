
// Variáveis de controle
const valorMinimo = 1;
const valorMaximo = 100;
const quantidadeNumerosRecentes = 5;
// Obter os elementos
const sliderMin = document.querySelector ('.intervalo__slider--min');
const sliderMax = document.querySelector ('.intervalo__slider--max');
const botaoSortear = document.querySelector ('.area__button');
const numeroSorteado = document.querySelector ('.area__numero');
const listaNumeros = document.querySelector ('.historico__lista');
const botaoLimparHistorico = document.querySelector('.sorteador__limpar')

// Atualizar a interface com o valor do slider
const atualizarValorSlider = () => {
    const min = parseInt(sliderMin.value);
    const max = parseInt (sliderMax.value);

    //Exibir o valor do slider na interface
    document.querySelector ('.intervalo__valor--min').textContent = min; 
    document.querySelector('.intervalo__valor--max').textContent = max;
};

// Eventos para atualizar o valor do slider ao ser alterado
sliderMin.addEventListener('input', atualizarValorSlider);
sliderMax.addEventListener('input', atualizarValorSlider);

// Função para gerar um número aleatório
const gerarNumeroAleatorio = (min, max) => {
    if (min > max) {
        return 'O valor mínimo deve ser menor ou igual ao valor máximo.';
    }
    let numeroAleatorio = Math.floor(Math.random () * (max - min + 1));
    numeroAleatorio += min;
    return numeroAleatorio;
};
// Atualizar a interface com o número sorteado
const atualizarInterface = (numeroSorteado) => {
    const numSorteado = document.querySelector('.area__numero');
    numSorteado.textContent = numeroSorteado;
};
const adicionarAoHistorico = (numeroSorteado) => {
// Criar um elemento "li"
    const li = document.createElement('li');

// Atribuir o número sorteado como conteúdo do "li"
    li.textContent = numeroSorteado;

// Adicionar um evento de click ao "li"
    li.addEventListener ('click', () => {
 
// Copiar o número sorteado para a área de transferência
        navigator.clipboard.writeText (numeroSorteado);

// Exibir um alerta informando que o número foi copiado
        alert ('Numero copiado para a área de transferência!');
});
// Adicionar o "li" no início da lista de números ("listaNumeros")
    listaNumeros.prepend(li);  
// Se o número de elementos na lista for maior que o limite, remover o último elemento
    if (listaNumeros.children.length > quantidadeNumerosRecentes) {
        listaNumeros.removeChild(listaNumeros.lastChild);
    }
};

// Função para limpar o histórico de sorteios
const limparHistorico = () => {
    if (confirm('Deseja realmente limpar o histórico de sorteios?')){
        listaNumeros.innerHTML = '';
        numeroSorteado.innerHTML = '0';
    }
};

// Eventos
botaoSortear.addEventListener ('click', () => {
    const min = parseInt(sliderMin.value);
    const max = parseInt(sliderMax.value);
    
    const numeroSorteado = gerarNumeroAleatorio(min, max);
    atualizarInterface(numeroSorteado);
    adicionarAoHistorico(numeroSorteado);
    
});

botaoLimparHistorico.addEventListener('click', limparHistorico);


