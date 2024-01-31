 // Quiz data
 var questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale"
    }
  ];

  var currentQuestion = 0;
  var score = 0;


  function loadQuestion() {
    var questionContainer = document.getElementById('question-container');
    var optionsContainer = document.getElementById('options-container');
    var resultContainer = document.getElementById('result');

    questionContainer.innerHTML = '<p>' + questions[currentQuestion].question + '</p>';

    var optionsHTML = '';
    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
      optionsHTML += '<div class="option" onclick="selectOption(this)">' + questions[currentQuestion].options[i] + '</div>';
    }
    optionsContainer.innerHTML = optionsHTML;

    resultContainer.innerHTML = '';
  }

 
  function selectOption(option) {
    var options = document.getElementsByClassName('option');
    for (var i = 0; i < options.length; i++) {
      options[i].classList.remove('selected');
    }

    option.classList.add('selected');
  }


  function checkAnswer() {
    var selectedOption = document.querySelector('.option.selected');

    if (selectedOption) {
      var answer = selectedOption.textContent;
      if (answer === questions[currentQuestion].correctAnswer) {
        score++;
      }

      currentQuestion++;

      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        displayResult();
      }
    } else {
      alert('Please select an answer before submitting.');
    }
  }


  function displayResult() {
    var resultContainer = document.getElementById('result');
    var submitButton = document.getElementById('submit-btn');
    var optionsContainer = document.getElementById('options-container');

    resultContainer.innerHTML = 'Your score: ' + score + '/' + questions.length;

    // Hide submit button and options container after quiz completion
    submitButton.style.display = 'none';
    optionsContainer.style.display = 'none';
  }


  loadQuestion();