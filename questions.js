const questions = {
    vocabulary: [
        { fr: "la gare", nl: "het station" },
        { fr: "le plan", nl: "de (stads)kaart" },
        { fr: "le trottoir", nl: "het trottoir" },
        { fr: "au bout de", nl: "op het einde van" },
        { fr: "le parking", nl: "de parking" },
        { fr: "je regrette", nl: "het spijt me" },
        { fr: "jusqu’à", nl: "tot aan" },
        { fr: "le passage pour piétons", nl: "het zebrapad" },
        { fr: "tout près", nl: "vlakbij" },
        { fr: "la piste cyclable", nl: "het fietspad" }
    ],
    dialogues: [
        { nl: "Waar is het station?", fr: "Où est la gare ?" },
        { nl: "U gaat rechtdoor tot aan het kruispunt.", fr: "Vous allez tout droit jusqu’au carrefour." },
        { nl: "Neem de eerste straat links.", fr: "Prenez la première rue à gauche." },
        { nl: "Hoe kom ik bij de Grote Markt?", fr: "Comment aller à la Grand-Place ?" }
    ]
};

let questionTypes = ["vocab_mc", "dialogue"];
let currentType = "";
let currentQuestion = {};

function nextQuestion() {
    currentType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    document.getElementById("feedback").innerHTML = "";

    if (currentType === "vocab_mc") {
        const all = questions.vocabulary;
        const correct = all[Math.floor(Math.random() * all.length)];
        const choices = [correct];

        while (choices.length < 4) {
            const rand = all[Math.floor(Math.random() * all.length)];
            if (!choices.includes(rand)) choices.push(rand);
        }

        choices.sort(() => 0.5 - Math.random());
        currentQuestion = { ...correct, choices };

        document.getElementById("question").innerHTML = `Wat betekent: <b>"${correct.fr}"</b>?`;
        document.getElementById("answer-box").innerHTML = choices.map(c =>
            `<button onclick="checkMultipleChoice('${c.nl}')">${c.nl}</button>`
        ).join("<br>");
    }

    else if (currentType === "dialogue") {
        const d = questions.dialogues[Math.floor(Math.random() * questions.dialogues.length)];
        const isNlToFr = Math.random() < 0.5;
        currentQuestion = d;

        document.getElementById("question").innerHTML = isNlToFr ?
            `Vertaal naar het Frans: <b>${d.nl}</b>` :
            `Vertaal naar het Nederlands: <b>${d.fr}</b>`;

        document.getElementById("answer-box").innerHTML = `
            <input type="text" id="answer" placeholder="Typ je antwoord">
            <br><button onclick="checkDialogue(${isNlToFr})">Controleren</button>
        `;
    }
}

function checkMultipleChoice(selected) {
    if (selected === currentQuestion.nl) {
        document.getElementById("feedback").innerHTML = `<p class="correct">✅ Juist!</p>`;
    } else {
        document.getElementById("feedback").innerHTML = `<p class="incorrect">❌ Fout. Correct: ${currentQuestion.nl}</p>`;
    }
}

function checkDialogue(isNlToFr) {
    const user = document.getElementById("answer").value.trim().toLowerCase();
    const correct = (isNlToFr ? currentQuestion.fr : currentQuestion.nl).toLowerCase();
    if (user === correct) {
        document.getElementById("feedback").innerHTML = `<p class="correct">✅ Juist!</p>`;
    } else {
        document.getElementById("feedback").innerHTML = `<p class="incorrect">❌ Fout. Correct: ${correct}</p>`;
    }
}

window.onload = nextQuestion;
