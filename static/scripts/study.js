var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var checkButton = document.getElementById("checkbutton");
var nextButton = document.getElementById("nextbutton");

var banner = document.getElementById("banner");

var select1 = false;
var select2 = false;
var select3 = false;
var select4 = false;

var selectedStyle = "background-color:rgb(197, 197, 197)"

var correctAnswer = 3;
var correctAnswers = [];

var multipleSelect = false;

function showBanner(correct)
{
    if (correct)
    {
        banner.querySelector("p").textContent = "🎉 You are correct! 🎉";
        banner.style.backgroundColor = "chartreuse";
        banner.hidden = false;
    }
    else
    {
        if (multipleSelect)
        {
            var letterCorrectAnswers = ""
            for (var i = 0; i < correctAnswers.length; i++)
            {
                var current = correctAnswers[i];
                if (current == 1)
                {
                    letterCorrectAnswers += "A";
                }
                else if (current == 2)
                {
                    letterCorrectAnswers += "B"; 
                }
                else if (current == 3)
                {
                    letterCorrectAnswers += "C";
                }
                else
                {
                    letterCorrectAnswers += "D";
                }

                if (i != correctAnswers.length)
                {
                    letterCorrectAnswers += ", ";
                }
            }

            banner.querySelector("p").textContent = "☹ Incorrect! ☹ The answers are "+letterCorrectAnswer+"!";
            banner.style.backgroundColor = "red";
            banner.hidden = false;
        }
        else
        {
            var letterCorrectAnswer = "A";
            if (correctAnswer == 2)
                {
                letterCorrectAnswer = "B"; 
            }
            else if (correctAnswer == 3)
            {
                letterCorrectAnswer = "C";
            }
            else if (correctAnswer == 4)
            {
                letterCorrectAnswer = "D";
            }

            banner.querySelector("p").textContent = "☹ Incorrect! ☹ The answer is "+letterCorrectAnswer+"!";
            banner.style.backgroundColor = "red";
            banner.hidden = false;
        }
    }
}

function generateNewQuestion()
{
    nextButton.hidden = true;
    banner.hidden = true;

    var randomQuestion = questionBank[Math.floor(Math.random()*questionBankLength)];
    question.textContent = randomQuestion[0];
    answer1.textContent = "A. " + randomQuestion[1];
    answer2.textContent = "B. " + randomQuestion[2];
    answer3.textContent = "C. " + randomQuestion[3];
    answer4.textContent = "D. " + randomQuestion[4];
    multipleSelect = randomQuestion[5];

    if (multipleSelect)
    {
        correctAnswers = randomQuestion[6];
    }
    else
    {
        correctAnswer = randomQuestion[6];
    }
}

function updateOtherAnswers(answer)
{
    if (multipleSelect == false)
    {
        switch (answer)
        {
            case 1:
                select2 = false;
                select3 = false;
                select4 = false;
                answer2.setAttribute("style", "");
                answer3.setAttribute("style", "");
                answer4.setAttribute("style", "");
                break;
            case 2:
                select1 = false;
                select3 = false;
                select4 = false;
                answer1.setAttribute("style", "");
                answer3.setAttribute("style", "");
                answer4.setAttribute("style", "");
                break;
            case 3:
                select1 = false;
                select2 = false;
                select4 = false;
                answer1.setAttribute("style", "");
                answer2.setAttribute("style", "");
                answer4.setAttribute("style", "");
                break;
            case 4:
                select1 = false;
                select2 = false;
                select3 = false;
                answer1.setAttribute("style", "");
                answer2.setAttribute("style", "");
                answer3.setAttribute("style", "");
                break;
            default:
                select1 = false;
                select2 = false;
                select3 = false;
                select4 = false;
                answer1.setAttribute("style", "");
                answer2.setAttribute("style", "");
                answer3.setAttribute("style", "");
                answer4.setAttribute("style", "");
                break;
        }
    }
}

function selectAnswerOutput(answer)
{
    switch (answer)
        {
            case 1:
                answer1.setAttribute("style", selectedStyle);
                break;
            case 2:
                answer2.setAttribute("style", selectedStyle);
                break;
            case 3:
                answer3.setAttribute("style", selectedStyle);
                break;
            case 4:
                answer4.setAttribute("style", selectedStyle);
                break;
            default:
                break;
        }
}

function selectAnswer1()
{
    answer1.blur();
    if (select1)
        {
            select1 = false;
            answer1.setAttribute("style", "");
        }
        else
        {
            select1 = true;
            updateOtherAnswers(1);
            selectAnswerOutput(1);
        }
}

function selectAnswer2()
{
    answer2.blur();
    if (select2)
        {
            select2 = false;
            answer2.setAttribute("style", "");
        }
        else
        {
            select2 = true;
            updateOtherAnswers(2);
            selectAnswerOutput(2);
        }
}

function selectAnswer3()
{
    answer3.blur();
    if (select3)
        {
            select3 = false;
            answer3.setAttribute("style", "");
        }
        else
        {
            select3 = true;
            updateOtherAnswers(3);
            selectAnswerOutput(3);
        }
}

function selectAnswer4()
{
    answer4.blur();
    if (select4)
    {
        select4 = false;
        answer4.setAttribute("style", "");
    }
    else
    {
        select4 = true;
        updateOtherAnswers(4);
        selectAnswerOutput(4);
    }
}


function checkButtonClick()
{
    checkButton.blur();
    var correct = true;
    if (multipleSelect)
    {
        var selectedAnswers = [];
        if (select1) {selectedAnswers.push(true)} else {selectedAnswers.push(false)}
        if (select2) {selectedAnswers.push(true)} else {selectedAnswers.push(false)}
        if (select3) {selectedAnswers.push(true)} else {selectedAnswers.push(false)}
        if (select4) {selectedAnswers.push(true)} else {selectedAnswers.push(false)}

        for (var i = 0; i < correctAnswers.length; i++)
        {
            var current = correctAnswers[i];
            if (!selectedAnswers[current - 1])
            {
                correct = false;
            }
        }
    }
    else
    {
        switch (correctAnswer)
        {
            case 1:
                if (!select1)
                {
                    correct = false;
                }
                break;
            case 2:
                if (!select2)
                {
                    correct = false;
                }
                break;
            case 3:
                if (!select3)
                {
                    correct = false;
                }
                break;
            case 4:
                if (!select4)
                {
                    correct = false;
                }
                break;
            default:
                break;             
        }

        if (correct)
        {
            showBanner(true);
            nextButton.hidden = false;
        }
        else
        {
            showBanner(false);
        }
    }
}

function nextButtonClick()
{
    nextButton.blur();
    generateNewQuestion();
    updateOtherAnswers(0);
}

answer1.addEventListener("click", function() {selectAnswer1()});
answer2.addEventListener("click", function() {selectAnswer2()});
answer3.addEventListener("click", function() {selectAnswer3()});
answer4.addEventListener("click", function() {selectAnswer4()});
checkButton.addEventListener("click", function() {checkButtonClick()});
nextButton.addEventListener("click", function() {nextButtonClick()});
document.addEventListener("keypress", function(e) {
    console.log(e.key);
    if (e.key == " " || e.key == "Enter")
    {
        if (nextButton.hidden == false)
        {
            nextButtonClick();
        }
        else
        {
            checkButtonClick();
        }
    }
});

generateNewQuestion();