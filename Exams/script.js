document.addEventListener("DOMContentLoaded", function() {
  const questions = Array.from(document.querySelectorAll("li"));
  const answers = [
      'b',
      'd',
      'c',
      'c',
      "b",
      'b',
      'c',
      'b',
      'b',
      'c',
      'b',
      'b',
      'b',
      'c',
      'b',
      'c',  
      'c',
      'a',
      'c',
      'c',
      'c',
      'b',
      'd',
      'b',
      'b',
      'c',
      'c',
      'c',
      'c',
      'd',
      'b',
      'b',
      'b',
      'a',
      'c',
      'c',
      'c',
      'b', 
      'c',
      'c',
      'b',
      'a',
      'b',
      'c',
      'd',
      'b',
      'd',
      'c',
      'c',
      'c',
      'b',
      'c',
      'b',
      'd',
      'c',
      'a',
      'd',
      'c',
      'c',
      'c',
      'c',
      'c',
      'b',
      'd',
      'a',
      'c',
      'c',
      'a',
      'a',
      'b'
  ]; // Array to store correct answers

  let currentQuestionIndex = 0;
  let score = 0;

  // Shuffle the questions array
  questions.sort(() => Math.random() - 0.5);

  // Hide all questions except the first one
  questions.forEach(function(question, index) {
    if (index !== currentQuestionIndex) {
      question.style.display = "none";
    }
  });

  // Attach event listener to radio buttons
  questions.forEach(function(question, index) {
    const radioButtons = question.querySelectorAll("input[type=radio]");
    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener("change", function() {
        validateAnswer();
      });
    });
  });

  // Function to validate the answer
  function validateAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedRadioButton = currentQuestion.querySelector("input[type=radio]:checked");
    if (selectedRadioButton) {
      const selectedAnswer = selectedRadioButton.value;
      const correctAnswer = answers[currentQuestionIndex];
      if (selectedAnswer === correctAnswer) {
        score++;
      }
      showNextQuestion();
    } else {
      alert("Please select an answer before proceeding.");
    }
  }

  // Function to show the next question
  function showNextQuestion() {
    questions[currentQuestionIndex].style.display = "none";
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      questions[currentQuestionIndex].style.display = "block";
    } else {
      alert("Congratulations! You have completed the quiz.");
      generateScore();
    }
  }

  // Function to generate and display the score
  function generateScore() {
    const totalQuestions = questions.length;
    const percentageScore = (score / totalQuestions) * 100;
    alert(`Your score: ${score} / ${totalQuestions}\nPercentage: ${percentageScore.toFixed(2)}%`);
    // You can further process the score here (e.g., save it to a database, display it on the webpage, etc.)
  }
});
