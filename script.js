const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }          
           
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre elaIA. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto:"Utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento",
                afirmacao:"Aproveitou a IA como uma ferramenta de estudos para pesquisar e resumir conteúdos complexos."
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao:"Preferiu confiar em métodos tradicionais de pesquisa e nas reflexões feitas com seus colegas."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao:"Defendeu a necessidade de proteger o mercado de trabalho tradicional e os direitos dos trabalhadores."
            },
            {
                texto:"Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao:"Enxergou a IA como uma aliada capaz de abrir novas vertentes profissionais e otimizar tarefas."
            }
           
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto:"Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao:"Optou por expressar sua criatividade autoral desenhando e editando manualmente sua própria arte."
            },
            {
                texto:"Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao:"Decidiu explorar o potencial dos geradores automáticos para traduzir suas ideias em imagens."
            }
           
        ]
    },
    {
        enunciado: " Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao:"Compreendeu que a revisão humana e o pensamento crítico são indispensáveis para garantir a qualidade de qualquer projeto."
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao:"Passou a considerar o processo de elaboração de comandos (prompts) como uma etapa válida na produção de textos."
            }
           
           
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
