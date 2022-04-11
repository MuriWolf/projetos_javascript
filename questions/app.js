//using selectors inside the element

// chama todas as questoes (com nome de questao para cada)
const questions = document.querySelectorAll(".question")

// faz um loop para cada questao
questions.forEach(function(question){

    //chama o botao de cada funcao
    const btn = question.querySelector(".question-btn")

    // adiona um evento no botao da questao
    btn.addEventListener("click", function() {

        // chama todas as questoes (agr cada com nome de item)
        // faz um loop que verifica todas as questoes, apenas a selecionada ele não faz nada, todas as outras ele remove o "show-text"
        questions.forEach(function(item){
            if (item !== question) {
                item.classList.remove("show-text")
            }

            question.classList.toggle("show-text")
        })
    })
})

// traversing the dom

// const btns = document.querySelectorAll(".question-btn")
// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         const question = e.currentTarget.parentElement.parentElement
        
//         question.classList.toggle("show-text")
//     })
// })