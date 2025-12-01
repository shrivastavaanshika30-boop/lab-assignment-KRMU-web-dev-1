<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<script>
  const quizQuestions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Which language is used for web development?", answer: "HTML&CSS" },
    { question: "what is the capital of India?", answer: "Delhi"}
];

function runQuiz() {

    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {

        const userAnswer = prompt(quizQuestions[i].question);

        if (userAnswer && userAnswer.toLowerCase().trim() === quizQuestions[i].answer.toLowerCase().trim()) {
            alert("Correct!");
            score++;
        } else {
            alert(`Wrong! The correct answer is: ${quizQuestions[i].answer}`);
        }
    }

    alert(`Quiz over! Your final score is ${score} out of ${quizQuestions.length}`);
}

runQuiz();  
</script>
</body>
</html>