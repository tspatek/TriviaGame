
$(document).ready(function () {

    var messages = [
        "CORRECT!",
        "WRONG CHOICE!",
        "TIMES UP!"
    ];
    var userMessage = " ";
    var totalCorrectAnswers = 0;
    var totalWrongAnswers = 0;

    var game = {
        currentQuestion: {
            question: " ",
            choices: [],
            correctAnswer: " ",
            info: " ",
            img: " "
        },
        questions: [
            {
                question: `Who was Queen Nefertiti married to?`,
                choices: [
                    "Ramses The Great",
                    "Thutmose III",
                    "Akhenaten",
                    "Hatshepsut",
                    "Amenhotep I"
                ],
                correctAnswer: "Akhenaten",
                info: `Queen Nefertiti was married to 
                       Akhenaten, the heretic king. Akhenaten
                       attempted to convert ancient Eygpt to 
                       monotheism.`,
                img: "assets/images/Nefertiti.jpg"
            },
            {
                question: `Which is not one of the 7 Wonders of 
                           the Ancient World?`,
                choices: [
                    "Hanging Gardens of Babylon",
                    "Temple of Artemis at Ephesus",
                    "Mausoleum at Halicarnassus",
                    "Great Wall of China",
                    "Lighthouse at Alexandria"
                ],
                correctAnswer: "Great Wall of China",
                info: `The Great Wall of China is not included 
                       as one of the 7 Wonders of the Ancient World.`,
                img: "assets/images/GreatWallOfChina.jpg.jpg"
            },
            {
                question: `What does VE Day commemorate?`,
                choices: [
                    "The end of WWII",
                    "Nazi Germany's surrender",
                    "Napolean's invasion of Russia",
                    "Vladimir Lenin's birthday",
                    "The liberation of Paris from the Nazis"
                ],
                correctAnswer: "Nazi Germany's surrender",
                info: `VE Day (Victory in Europe) commemorates 
                       Nazi Germany's surrender toward the end 
                       of WWII.`,
                img: "assets/images/VEDay.jpg"
            },
            {
                question: `Who became US president after the 
                           assassination of Abraham Lincoln?`,
                choices: [
                    "Andrew Johnson",
                    "Richard Nixon",
                    "Rutherford B. Hayes",
                    "Andrew Jackson",
                    "Grover Cleveland"
                ],
                correctAnswer: "Andrew Johnson",
                info: `Lincoln was succeeded by Andrew Johnson.`,
                img: "assets/images/"
            },
            {
                question: `Who was the daughter of Anne Boleyn?`,
                choices: [
                    "Mary I",
                    "Lady Jane Grey",
                    "Catherine of Aragon",
                    "Elizabeth I",
                    "Mary, Queen of Scots"
                ],
                correctAnswer: "Elizabeth I",
                info: `Ann Boleyn was the mother of Elizabeth I.
                       She was beheaded by her husband, Henry VII,
                       when Elizabeth was two years old.`,
                img: "assets/images/Elizabeth_I.jpg"
            },
            {
                question: `A German U-boat sank which ocean liner 
                           in 1915?`,
                choices: [
                    "Lusitania",
                    "Queen Mary",
                    "Britannic",
                    "Titanic",
                    "Mauretania"
                ],
                correctAnswer: "Lusitania",
                info: `The sinking of the Lusitania in 1915 
                       helped turn US public opition against 
                       Germany. This event led the way for US
                       involvement in WW1 two years later.`,
                img: "assets/images/Lusitania.jpg"
            },
            {
                question: `How long did the Roman Empire last?`,
                choices: [
                    "1500 years",
                    "700 years",
                    "1000 years",
                    "500 years",
                    "1200 years"
                ],
                correctAnswer: "500 years",
                info: `The Roman empire lasted 500 years. It's
                       eastern counterpart, the Byzantine empire, 
                       lasted for 1500 years.`,
                img: "assets/images/RomanEmpire.jpg"
            },
            {
                question: `The Rosetta Stone was instrumental in 
                           deciphering what?`,
                choices: [
                    "Linear A",
                    "Egyption hieroglphs",
                    "Coptic script",
                    "Cuneiform script",
                    "Linear B"
                ],
                correctAnswer: "Egyption hieroglphs",
                info: `The discovery of the Rosetta Stone 
                       was a breakthrough in diciphering Egyption 
                       hieroglphs. It contains three versions of the
                       same text: one written in Greek, one in 
                       Demotic script, and one in hieroglphs.`,
                img: "assets/images/RosettaStone.jpg"
            },
            {
                question: `Which killer was also known as The 
                           Whitechapel Murderer?`,
                choices: [
                    "H.H. Holmes",
                    "Ted Bundy",
                    "Mary Ann Cotton",
                    "Lizzie Borden",
                    "Jack the Ripper"
                ],
                correctAnswer: "Jack the Ripper",
                info: `Jack the Ripper commited all of his murders
                       in London's Whitechapel neighborhood.`,
                img: "assets/images/JackTheRipper.jpg"
            },
            {
                question: `Who was the last tsar of Russia?`,
                choices: [
                    "Nicholas I",
                    "Alexander II",
                    "Peter the Great",
                    "Elizabeth of Russia",
                    "Nicholas II"
                ],
                correctAnswer: "Nicholas II",
                info: `Nicholas II, along with his entire immediate 
                       family and their servants, was executed by the 
                       Bolsheviks in 1918.`,
                img: "assets/images/Romanovs.jpg"
            },
            {
                question: `Who was the first Holy Roman Emperor?`,
                choices: [
                    "Charlemagne",
                    "Otto I",
                    "Justinian I",
                    "Constantine",
                    "Charles III"
                ],
                correctAnswer: "Charlemagne",
                info: `Charlemagne, aka Charles The Great, was 
                       crowned Holy Roman Emperor by Pope Leo III 
                       in the year 800.`,
                img: "assets/images/Charlemange.jpg"
            },
            {
                question: `Who was Narmer (aka Menes)?`,
                choices: [
                    "A character in the Epic of Gilgamesh",
                    "The vizier under Cleopatra VII",
                    "The first king of upper and lower Egypt",
                    "The heretic pharaoh",
                    "The architech of the great pyramid"
                ],
                correctAnswer: "The first king of upper and lower Egypt",
                info: `Narmer is credited as being the first pharaoh
                       to unifiy upper and lower Egypt circa 3100 BCE.`,
                img: "assets/images/Narmer.jpg"
            },
            {
                question: `Where was Babylon located?`,
                choices: [
                    "Modern-day Iran",
                    "Modern-day Iraq",
                    "Modren-day Syria",
                    "Modern-day Jordan",
                    "Modern-day Sudan"
                ],
                correctAnswer: "Modern-day Iraq",
                info: `The ancient city of Babylon was located in 
                       modern-day Iraq`,
                img: "assets/images/Babylon.jpg"
            },
            {
                question: `What are the Vedas?`,
                choices: [
                    "Ancient Nubian texts",
                    "Ancient Indian texts",
                    "Ancient Minoan texts",
                    "Darth Vader groupies",
                    "Ancient Sumarian texts"
                ],
                correctAnswer: "Ancient Indian texts",
                info: `The Vedas are a collection of ancient Hindu 
                       texts. They are written in Sanskrit.`,
                img: "assets/images/Vedas.jpg"
            }
        ],
        displayStartScreen: function () {
            $("#sheet-home").append(`
                <div id="title">
                    <h1>WORLD HISTORY TRIVIA</h1>
                </div>
                <div id="start">
                    <button id="start-button" type="button" 
                            class="btn btn-block btn-lg">
                        Start
                    </button>
                </div>
            `);
        },
        pickQuestion: function () {
            var randomQuestion = game.questions[Math.floor(Math.random()
                * game.questions.length)];

            Object.assign(game.currentQuestion, randomQuestion);
        },
        displayQuestion: function () {
            game.pickQuestion();
            $("#sheet-home").empty();

            $("#sheet-home").append(`
                <div id="timer">

                </div>
                <div id="question">
                    ${game.currentQuestion.question}
                </div>
                <div class="choice" id="answer1">
                    ${game.currentQuestion.choices[0]}
                </div>
                <div class="choice" id="answer2">
                    ${game.currentQuestion.choices[1]}
                </div>
                <div class="choice" id="answer3">
                    ${game.currentQuestion.choices[2]}
                </div>
                <div class="choice" id="answer4">
                    ${game.currentQuestion.choices[3]}
                </div>
                <div class="choice" id="answer5">
                    ${game.currentQuestion.choices[4]}
                </div>
            `);
        },
        calculateChoice: function (event) {
            if ($(event.currentTarget).text().trim() === game.correctAnswer) {
                totalCorrectAnswers++;
                userMessage = messages[0];
            } else {
                totalCorrectAnswers--;
                userMessage = messages[1];
            }
        },
        displayAnswer: function (event) {
            game.calculateChoice(event);
            $("#sheet-home").empty();
            $("#sheet-home").append(`
                <div id="timer">

                </div>
                <div id="user-message">
                    ${userMessage}
                </div>
                <div id="answer">
                    ${game.currentQuestion.info}
                </div>
                <div id="answer-image">
                    <img src=${game.currentQuestion.img}>
                </div>
            `);
        },
        displayFinalStats: function () {
            $("#sheet-home").empty();
            $("#sheet-home").append(`
                <div id="correct-answers">
                    ${totalCorrectAnswers}
                </div>
                <div id="incorrect-answers">
                    ${totalWrongAnswers}
                </div>
                <div id="reset">
                    <button id="reset-button" type="button" 
                            class="btn btn-block btn-lg">
                        Start
                    </button>
                </div>
            `);
        },
        restart: function () {

        }
    };

    game.displayStartScreen();

    $("#sheet-home").on("click", "#start-button", game.displayQuestion);

    $("#sheet-home").on("click", ".choice", game.displayAnswer);

    $("#sheet-home").on("click", "#reset-button", game.restart);
});
