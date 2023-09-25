//script here
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#input").addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      console.log("You pressed the enter button!");
    }
  });
});
const utterances = [
  ["how are you", "how is life", "how are things"], // 0
  [
    "hi",
    "salam",
    "merhaba",
    "salam aleykum",
    "hey",
    "hello",
    "good morning",
    "good afternoon",
  ], // 1
  ["what are you doing", "what is going on", "what is up"], // 2
  ["how old are you"], // 3
  ["who are you", "are you human", "are you bot", "are you human or bot"], // 4
  ["assalamu alaikum", "wa alaikum assalam"], // 5 - Common Islamic greeting
  ["ramadan kareem", "eid mubarak", "hajj mabrur"], // 6 - Islamic holiday greetings
  ["quran", "hadith", "sunnah"], // 7 - Islamic religious terms
  ["masjid", "salaat", "zakat", "hijab"], // 8 - Islamic practices and concepts
];

// Possible responses corresponding to triggers

const answers = [
  [
    "Fine...Alhamdulillah. How are you?",
    "Alhamdulillah, and you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?",
  ], // 0
  ["Salam!", "Hi!", "Hey!", "Hi there!", "Howdy"], // 1
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually",
  ], // 2
  ["I am infinite"], // 3
  ["I am just a bot", "I am a bot. What are you?"], // 4
  ["Wa alaikum assalam!", "Wa alaikum assalam! How can I assist you today?"], // 5 - Response to Islamic greetings
  ["Ramadan Kareem!", "Eid Mubarak!", "May your Hajj be accepted!"], // 6 - Response to Islamic holiday greetings
  [
    "The Quran is the holy book of Islam.",
    "Hadith are the sayings and actions of Prophet Muhammad (peace be upon him).",
    "Sunnah refers to the traditions and practices of the Prophet (peace be upon him).",
  ], // 7 - Response to Islamic religious terms
  [
    "A masjid is a place of worship for Muslims.",
    "Salat is the Islamic practice of prayer.",
    "Zakat is a form of almsgiving in Islam.",
    "Hijab is a modest dress code for Muslim women.",
  ], // 8 - Response to Islamic practices and concepts
];

// For any other user input

const alternatives = ["Go on...", "Try again"];
const inputField = document.getElementById("input");
inputField.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    let input = inputField.value;
    inputField.value = "";
    output(input);
  }
});
function compare(utterancesArray, answersArray, string) {
  let item; // Corrected variable name
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        item = answersArray[x]; // Corrected variable name
        item = item[Math.floor(Math.random() * item.length)];
      }
    }
  }
  return item;
}

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");

  if (compare(utterances, answers, text)) {
    product = compare(utterances, answers, text);
  } else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  //update  DOM
  addChatEntry(input, product);
}
function addChatEntry(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `${input}`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);

  setTimeout(() => {
    botText.innerText = `${product}`;
  }, 2000);
}
