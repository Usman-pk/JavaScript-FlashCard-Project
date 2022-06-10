var listOfQuestion = [];


function OpenQuestion()
{
    document.getElementById("Question").style.display = "block";
}

function closeQuestion()
{
    document.getElementById("Question").style.display = "none";
}

function SaveQuestion()
{
    var questionStatement = document.getElementById("Statement").value;
    var answerOfQuestion = document.getElementById("Answer").value;
    showQuestionCard(questionStatement, answerOfQuestion);
}

function showQuestionCard(question, answer)
{
    html = `<div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title" id="StatementOfQuestion">${question}</h5>
                            <p class="card-text" id="AnswerOfQuestion">${answer}</p>
                            <a href="#" class="btn btn-info">Hide Answer</a>
                            <a href="#" class="btn btn-info">Show Answer</a>
                        </div>
                    </div>`;
    document.getElementById("QuestionBox").innerHTML = html;
}