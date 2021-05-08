const submitBtn = document.getElementById("enviar");
const quiz = document.getElementById("quiz");
// const todasRespostas = document.querySelectorAll(".resposta");

let atualQuiz = 0;
let score = 0;

// pega pergunta selecionada
const getSelected = () => {
const todasRespostas = document.querySelectorAll(".resposta");
  let resposta = undefined;
  todasRespostas.forEach((item) => {
    if (item.checked) {
      resposta = parseInt(item.id);
    }
  });

  return resposta;
};

// deseleciona perguntas
const deselectAnswers = () => {
const todasRespostas = document.querySelectorAll(".resposta");
  todasRespostas.forEach((item) => {
    item.checked = false;
  });
};

// carrega perguntas
const perguntas = () => {
  deselectAnswers();

  let pergunta = document.getElementById("pergunta");
  let opcoes = document.getElementById("options");
  let listaRespostas = "";

  const atualQuizData = lista[atualQuiz];

  pergunta.innerHTML = atualQuizData.pergunta;

  // lista respostas
  atualQuizData.options.forEach((item, index) => {
    const value = index + 1;
    listaRespostas += `<li class="resposta">
                        <input type="radio" id="${value}" name="resposta" 
                        value="${value}" class="esp-radio resposta">${item[value]}
                      </li>`;
  });
  opcoes.innerHTML = listaRespostas;
};
perguntas();

// enviar perguntas
submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === lista[atualQuiz].resposta) {
      score++;
    }

    atualQuiz++;
    if (atualQuiz < lista.length) {
      perguntas();
    } else {
      quiz.innerHTML = `
        <h2>Total de questões ${lista.length}.</h2>
        <h2 class="m-bottom">Total de questões corretas ${score}.</h2>
        <button class = "btn-reload" onclick="location.reload()">Recomeçar</button>
      `;
      // <button class = "btn-reload" onclick="location.reload()">Reload</button>
    }
  }
});
