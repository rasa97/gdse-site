var myQuestions = [
    {
        question: "What is the main objective of Follow the Sun?",
        answers: {
            a: 'To work in parallel with different countries worldwide.',
            b: 'To reduce the production time.',
            c: 'To reduce the production cost.'
        },
        correctAnswer: 'b'
    },
    {
        question: "Which of the following is not a characteristic of Follow the Sun?",
        answers: {
            a: 'The production sites are many time zones apart',
            b: 'Project handoffs are conducted at the end of the work shift',
            c: 'There are multiple production sites working on the product at each time point.'
        },
        correctAnswer: 'c'
    },
    {
        question: "Any question",
        answers: {
            a: 'test',
            b: 'test2',
            c: 'test3'
        },
        correctAnswer: 'c'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submitQuiz');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // Store the output and the answer choices
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            // Reset the list of answers
            answers = [];

            // For each available answer add an html radio button
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        // + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
            // Add questions and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        // Combine output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        // Gather answer containers from the quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // Keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // For each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                answerContainers[i].style.color = 'red';
            }
        }
        // Show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
    // Show questions
    showQuestions(questions, quizContainer);
    
    // Show results on submit
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}