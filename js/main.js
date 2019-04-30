/**
 * 
 */
let quiz1 = [{
        "text":"2 + 3 = ?" ,
        "answers": [{
                "label": 5,
                "value": 5
            },
            {
                "label": 6,
                "value": 6
            },
            {
                "label": 1,
                "value": 1
            }
        ],
        "answer": "5"
    },
    {
        "text": " 4 + 6 = ?",
        "answers": [{
                "label": 9,
                "value": 9
            },
            {
                "label": 10,
                "value": 10
            },
        ],
        "answer": "10"
    },
    {
        "text": " ? + 6 = 8?",
        "answers": [{
                "label": 3,
                "value": 3
            },
            {
                "label": 2,
                "value": 2
            },
        ],
        "answer": "2"
    },
    {
        "text": "9 + ? = 16",
        "answers": [{
                "label": 8,
                "value": 8
            },
            {
                "label": 9,
                "value": 9
            },
            {
                "label": 7,
                "value": 7
            }
        ],
        answer: "7"
    },
    {
        "text": "7 + 9 = ?",
        "answers": [{
                "label": 18,
                "value": 18
            },
            {
                "label": 20,
                "value": 20
            },
            {
                "label": 16,
                "value": 16
            },
            {
                "label": 15,
                "value": 15
            }
        ],
        answer: 16
    }
]

let quiz2 = [{
        "text": "52 + ? = 100",
        "answers": [{
                "label": 48,
                "value": 48
            },
            {
                "label": 50,
                "value": 50
            }
        ],
        "answer": 48
    },
    {
        "text": "? + 477 = 600",
        "answers": [{
                "label": 33,
                "value": 33
            },
            {
                "label": 133,
                "value": 133
            },
        ],
        "answer": 133
    },
    {
        "text": "80 + 90 = ?",
        "answers": [{
                "label": 170,
                "value": 170
            },
            {
                "label": 150,
                "value": 150
            },
        ],
        "answer": 170
    },
    {
        "text": "25 + ? = 70",
        "answers": [{
                "label": 55,
                "value": 55
            },
            {
                "label": 35,
                "value": 35
            },
            {
                "label": 45,
                "value": 45
            }
        ],
        "answer": 45
    },
    {
        "text": " ? + 45 = 302",
        "answers": [{
                "label": 257,
                "value": 257
            },
            {
                "label": 207,
                "value": 207
            },
            {
                "label": 157,
                "value": 157
            },
            {
                "label": 247,
                "value": 247
            }
        ],
        "answer": 257
    }
];

let quiz3 = [{
        "text": "Katheline has 5 friends and each of his friends has 7 friends. How many friends do katherine have in total?",
        "answer": 35
    },
    {
        "text": "Ayumi puts 3 packets of ketchup on her tater tots. Each packet has 8 milliliters of ketchup. How many milliliters of ketchup does Ayumi put on her tater tots?",
        "answer": 24
    },
    {
        "text": "cows are playing soccer. green team is playing the pink team, 4 are on the green team. how many cows are in the pink team to make a total of 8 cows",
        "answer": 4
    },
    {
        "text": ".A bird laid 6 eggs in total. how many eggs remaining if 4 eggs have hatched?",
        "answer": 2
    }
]
/**
 * 
 * @param {*} question 
 */
function createChoiceQuestion(question, questionId) {
    let questionD = document.createElement('div');
    questionD.classList.add(["question", "question-m"]);
    // label
    let labelD = document.createElement("label");
    labelD.classList.add("question-text");
    labelD.innerHTML = question.text;
    questionD.appendChild(labelD);
    // answers
    let questionA = document.createElement('div');
    questionA.classList.add("question-answers");
    // 
    for (var i = 0; i < question.answers.length; i++) {
        let answer = question.answers[i];
        // label
        let labelV = document.createElement("label");
        labelV.classList.add("value-l");
        labelV.setAttribute("for", answer.label + " " + questionId);
        // input
        let input = document.createElement("input");
        input.type = "radio";
        input.id = answer.label + " " + questionId;
        input.name = "question" + questionId;
        input.value = answer.value;
        labelV.appendChild(input);
        // span for label
        let textSpan = document.createElement("span");
        textSpan.innerHTML = answer.label;
        labelV.appendChild(textSpan);
        //
        questionA.appendChild(labelV);
    }
    questionD.appendChild(questionA);
    return questionD;
}
/**
 * 
 * @param {*} question 
 */
function createInputQuestion(question, questionId) {
    let questionD = document.createElement('div');
    questionD.classList.add(["question", "question-m"]);
    // label
    let labelD = document.createElement("label");
    labelD.classList.add("question-text");
    labelD.innerHTML = question.text;
    questionD.appendChild(labelD);
    // question answers
    let questionA = document.createElement("div");
    questionA.classList.add('question-answers');
    //input 
    let input = document.createElement("input");
    input.type = "text";
    input.id = "question" + questionId;
    input.name = "question" + questionId;
    input.placeholder = "Answer";
    questionA.appendChild(input);
    questionD.appendChild(questionA);
    return questionD;
}

/**
 * for checking if questions are correct or wrong
 */
function checkQuestion(quizQuestions) {
    let count = 0;
    let quiz = document.quiz;
    for (let index = 0; index < quizQuestions.length; index++) {
        let question = eval(`quiz.question${index}`);
        let value = question.value;
        let expectedValue = quizQuestions[index].answer;
        if (value == expectedValue) {
            question[0].parentNode.parentNode.classList.add('success');
            count++;
        } else {
            question[0].parentNode.parentNode.classList.remove('success');
            question[0].parentNode.parentNode.classList.add('danger');
        }
    }
    return count;
}
/**
 * for checking if questions are correct or wrong
 */
function checkInputQuestion(quizQuestions) {
    let count = 0;
    let quiz = document.quiz;
    for (let index = 0; index < quizQuestions.length; index++) {
        let question = eval(`quiz.question${index}`);
        let value = question.value;
        let expectedValue = quizQuestions[index].answer;
        if (value == expectedValue) {
            question.classList.add('success');
            question.parentNode.parentNode.classList.add('success');
            count++;
        } else {
            question.parentNode.parentNode.classList.remove('success');
            question.parentNode.parentNode.classList.add('danger');
            question.classList.remove('success');
            question.classList.add('danger');
        }
    }
    return count;
}
/**
 * For quiz 2
 */
function createQuestions1() {
    let quiz = document.getElementById("quiz");
    for (var i = 0; i < quiz1.length; i++) {
        let question = createChoiceQuestion(quiz1[i], i);
        quiz.appendChild(
            question
        );
    }

    
}

function checkQuestions1() {
    document.getElementById("results").innerText = `${checkQuestion(quiz1)} out of ${quiz1.length}`;

    var x = document.getElementById("show");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
}
/**
 * For quiz 2
 */
function createQuestions2() {
    let quiz = document.getElementById("quiz");
    for (var i = 0; i < quiz2.length; i++) {
        let question = createChoiceQuestion(quiz2[i], i);
        quiz.appendChild(
            question
        );
    }
}

function checkQuestions2() {
    document.getElementById("results").innerText = `${checkQuestion(quiz2)} out of ${quiz2.length}`;

    
    var x = document.getElementById("show");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

}
/**
 * For quiz 3
 */
function createQuestions3() {
    let quiz = document.getElementById("quiz");
    for (var i = 0; i < quiz3.length; i++) {
        let question = createInputQuestion(quiz3[i], i);
        quiz.appendChild(
            question
        );
    }
}

function checkQuestions3() {
    document.getElementById("results").innerText = `${checkInputQuestion(quiz3)} out of ${quiz3.length}`;
}

/**
 * Submittion of the contact form
 */
function submitForm(){
    let contact = document.contact.names.value;
    let email = document.contact.names.email;
    if(!contact && !email){
        return;
    }
    document.getElementById("contact-message").innerText = contact + "\n Your Form is submitted. You will be contacted in 3 days.";
}