
const questions = [
    { fr: "la gare", nl: "het station" },
    { fr: "le plan", nl: "de (stads)kaart" },
    { fr: "le trottoir", nl: "het trottoir" },
    { fr: "au bout de", nl: "op het einde van" },
    { fr: "le parking", nl: "de parking" },
    { fr: "je regrette", nl: "het spijt me" },
    { fr: "jusqu’à", nl: "tot aan" },
    { fr: "le passage pour piétons", nl: "het zebrapad" },
    { fr: "tout près", nl: "vlakbij" },
    { fr: "la piste cyclable", nl: "het fietspad" },
    { fr: "le centre-ville", nl: "het stadscentrum" },
    { fr: "le parc", nl: "het park" },
    { fr: "le quartier", nl: "de wijk" },
    { fr: "la Grand-Place", nl: "de Grote Markt" },
    { fr: "la place", nl: "het plein" },
    { fr: "le boulevard", nl: "de brede laan" },
    { fr: "le carrefour", nl: "het kruispunt" },
    { fr: "le cinéma", nl: "de cinema" },
    { fr: "le coin", nl: "de hoek" },
    { fr: "les feux", nl: "de verkeerslichten" },
    { fr: "le pont", nl: "de brug" },
    { fr: "la route", nl: "de weg" },
    { fr: "le trafic", nl: "het verkeer" },
    { fr: "le tunnel", nl: "de tunnel" },
    { fr: "le boulevard", nl: "de brede laan" },
    { fr: "la direction", nl: "de richting" },
    { fr: "marcher", nl: "stappen" },
    { fr: "arriver", nl: "aankomen" },
    { fr: "continuer", nl: "verder gaan" },
    { fr: "entrer", nl: "binnenkomen" }
];

let currentQuestion = {};

function nextQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];
    document.getElementById("question").textContent = `Wat betekent: "${currentQuestion.fr}" in het Nederlands?`;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").innerHTML = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = currentQuestion.nl.toLowerCase();
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.innerHTML = '<p class="correct">✅ Juist!</p>';
    } else {
        feedback.innerHTML = `<p class="incorrect">❌ Fout. Het juiste antwoord is: ${currentQuestion.nl}</p>`;
    }
}

function skipQuestion() {
    nextQuestion();
}

// Laad eerste vraag bij opstart
window.onload = nextQuestion;
