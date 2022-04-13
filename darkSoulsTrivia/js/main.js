const questions = [
  // Question One
  {
    text: "In Demon's Souls, what NPC will kill the other NPCs in the Nexus",
    gameTitle: "Demon's Souls",
    bg: 'https://github.com/CitrineDragon/Images/blob/master/trivia_Yurt.jpg?raw=true',
    answers: [
      {
        text: 'Biorr',
        correct: false,
      },
      {
        text: 'Yurt',
        correct: false,
      },
      {
        text: 'Mephistopheles',
        correct: true,
      },
      {
        text: 'Patches',
        correct: false,
      },
    ],
  },

  // Question Two
  {
    text: 'In Dark Souls, who turned on their own in order to gain immortality?',
    gameTitle: 'Dark Souls',
    bg: 'https://github.com/CitrineDragon/Images/blob/master/trivia_darkSouls.png?raw=true',
    answers: [
      {
        text: 'Petrus',
        correct: false,
      },
      {
        text: 'Gwyn',
        correct: false,
      },
      {
        text: 'Artorias',
        correct: false,
      },
      {
        text: 'Seathe',
        correct: true,
      },
    ],
  },

  // Question Three
  {
    text: 'In Dark Souls 2, what armor set is composed of a mysterious substance that cannot be seen by cowards?',
    gameTitle: 'Dark Souls 2',
    bg: 'https://github.com/CitrineDragon/Images/blob/master/trivia_darkSouls2.jpg?raw=true',
    answers: [
      {
        text: "King's",
        correct: false,
      },
      {
        text: 'Judgement',
        correct: false,
      },
      {
        text: 'Aurous',
        correct: true,
      },
      {
        text: 'Looking Glass',
        correct: false,
      },
    ],
  },

  // Question Four
  {
    text: 'In BloodBorne, a hunter is a hunter, even where? ',
    gameTitle: 'BloodBorne',
    bg: 'https://github.com/CitrineDragon/Images/blob/master/trivia_bloodborne.png?raw=true',
    answers: [
      {
        text: 'in death',
        correct: false,
      },
      {
        text: 'in a nightmare',
        correct: false,
      },
      {
        text: 'on the bus',
        correct: false,
      },
      {
        text: 'in a dream',
        correct: true,
      },
    ],
  },

  // Question Five
  {
    text: "In Dark Souls 3, what is the name of the weapon that can be obtained during a boss battle that is a throwback to a weapon found in Demon's Souls that shares the same name?",
    gameTitle: 'Dark Souls 3',
    bg: 'https://github.com/CitrineDragon/Images/blob/master/trivia_darksouls3.jpg?raw=true',
    answers: [
      {
        text: "Demon's Greataxe",
        correct: false,
      },
      {
        text: 'Storm Ruler',
        correct: true,
      },
      {
        text: 'Chaos Blade',
        correct: false,
      },
      {
        text: "Demon's Scar",
        correct: false,
      },
    ],
  },

  // Question Six
  {
    text: 'In Dark Souls, which of these sorceries has the highest INT requirement?',
    gameTitle: 'Dark Souls',
    bg: 'https://github.com/CitrineDragon/Images/blob/master/trivia_darkSouls.png?raw=true',
    answers: [
      {
        text: 'Persuers',
        correct: false,
      },
      {
        text: 'Strong Magic Sheild',
        correct: false,
      },
      {
        text: 'Hidden Body',
        correct: false,
      },
      {
        text: 'Soul Spear',
        correct: true,
      },
    ],
  },

  // Question Seven
  {
    text: "In Demon's Souls, combining Soulbrandt and DemonBbrandt give you which of the following weapons?",
    gameTitle: "Demon's Souls",
    bg: 'https://github.com/CitrineDragon/Images/blob/master/trivia_Yurt.jpg?raw=true',
    answers: [
      {
        text: 'Ritual Blade',
        correct: false,
      },
      {
        text: 'Northern Regalia',
        correct: true,
      },
      {
        text: 'Meat Cleaver',
        correct: false,
      },
      {
        text: 'Hands of God',
        correct: false,
      },
    ],
  },

  // Question Eight
  {
    text: 'In Dark Souls 2, which of the following rings negates you from gaining any souls?',
    gameTitle: 'Dark Souls 2',
    bg: 'https://github.com/CitrineDragon/Images/blob/master/trivia_darkSouls2.jpg?raw=true',
    answers: [
      {
        text: 'Abyss',
        correct: false,
      },
      {
        text: 'Blue Seal',
        correct: false,
      },
      {
        text: 'Agape',
        correct: true,
      },
      {
        text: 'Crest of Blood',
        correct: false,
      },
    ],
  },

  // Question Nine
  {
    text: 'In BloodBorne, what does the little girl that was left alone give you?',
    gameTitle: 'BloodBorne',
    bg: 'https://github.com/CitrineDragon/Images/blob/master/trivia_bloodborne.png?raw=true',
    answers: [
      {
        text: 'A ring',
        correct: false,
      },
      {
        text: 'A weapon',
        correct: false,
      },
      {
        text: 'an emote',
        correct: false,
      },
      {
        text: 'A music box',
        correct: true,
      },
    ],
  },

  // Question Ten
  {
    text: 'In Dark Souls 3, the area directly following which boss was a popular dueling spot for PvP?',
    gameTitle: 'Dark Souls 3',
    bg: 'https://github.com/CitrineDragon/Images/blob/master/trivia_darksouls3.jpg?raw=true',
    answers: [
      {
        text: 'Vordt',
        correct: false,
      },
      {
        text: 'Pontiff',
        correct: true,
      },
      {
        text: 'Aldrich',
        correct: false,
      },
      {
        text: 'Yhorm',
        correct: false,
      },
    ],
  },

  // Become Grossly Incadescent
  {
    text: 'You are Grossly Incandescent',
    textSize: '3rem',
    gameTitle: '',
    bg: 'https://github.com/CitrineDragon/Images/blob/master/trivia_grosslyIncadescent.jpg?raw=true',
    answers: [],
  },

  // You Died
  {
    text: 'You Died',
    textSize: '5rem',
    gameTitle: '',
    bg: '',
    answers: [],
  },
];

let currentQuestionIndex = 0;
const questionOutput = document.querySelector('.question');
const buttonsOutput = document.querySelector('.answers');

function renderQuestion(question) {
  document.querySelector(
    'body'
  ).style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url('${question.bg}')`;
  document.querySelector('.question').style.fontSize = question.textSize;
  document.querySelector('.game').textContent = question.gameTitle;
  questionOutput.textContent = question.text;
  buttonsOutput.textContent = '';

  for (let i = 0; i < question.answers.length; i++) {
    const answer = question.answers[i];
    const button = document.createElement('button');
    button.textContent = answer.text;

    buttonsOutput.appendChild(button);
    button.addEventListener('click', function () {
      if (answer.correct) {
        currentQuestionIndex++;
        renderQuestion(questions[currentQuestionIndex]);
      } else if (answer.correct === false) {
        renderQuestion(questions[11]);
      }
    });
  }
}

renderQuestion(questions[currentQuestionIndex]);
