const questions = [
    {'Q1': 1}, {'Q2': 4}, {'Q3': 3}, {'Q4': 4}, {'Q5': 5},
    {'Q6': 3}, {'Q7': 4}, {'Q8': 3}, {'Q9': 2}, {'Q10': 1}
]; 

function display() {
    let n = Math.floor(Math.random() * 10);
    return questions[n];
} 

let score = 0;
let count = 0;
const userAnswers = [1, 2, 3, 4, 1, 2, 3, 4, 1, 4]; 

while (count < 10) {
    let question = display();
    let questionKey = Object.keys(question)[0];
    let correctAnswer = question[questionKey];
    

    let userAnswer = userAnswers[count];
    
    console.log(`Question: ${questionKey}, Your Answer: ${userAnswer} , Correct  answer ${correctAnswer}`);
    
    if (userAnswer === correctAnswer) {
        score++;
    }
    
    count++;
}

console.log("Final score: " + score);