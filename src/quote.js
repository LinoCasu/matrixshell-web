// quote.js — ESModule with a MatrixQuotes namespace export

// collection of Matrix quotes
const quotes = [
  "There is no spoon.",
  "You take the red pill — you stay in Wonderland.",
  "I know kung fu.",
  "Welcome to the real world.",
  "Unfortunately, no one can be told what the Matrix is. You have to see it for yourself.",
  "Welcome to the desert of the real.",
  "I can only show you the door. You're the one that has to walk through it.",
  "Fate, it seems, is not without a sense of irony.",
  "Neo, sooner or later you're going to realize just as I did that there's a difference between knowing the path and walking the path.",
  "I'm trying to free your mind, Neo. But I can only show you the truth.",
  "Don't think you are. Know you are.",
  "You take the red pill—you stay in Wonderland, and I show you how deep the rabbit hole goes.",
  "To deny our own impulses is to deny the very thing that makes us human.",
  "Never send a human to do a machine's job.",
  "I know you're out there. I can feel you now. I know that you're afraid… you're afraid of us.",
  "Hope. It is the quintessential human delusion, simultaneously the source of your greatest strength and your greatest weakness.",
  "The Matrix is a system, Neo. That system is our enemy.",
  "What do all men with power want? More power.",
  "Choice is an illusion created between those with power and those without.",
  "Smith will suffice.",
  "Human beings define their reality through misery and suffering.",
  "I don't like the idea that I'm not in control of my life.",
  "You hear that Mr. Anderson?... That is the sound of inevitability.",
  "Free your mind.",
  "He's beginning to believe!",
  "You have the look of a man who accepts what he sees because he is expecting to wake up.",
  "Ignorance is bliss.",
  "You’re not here to make the choice. You’ve already made it.",
  "We are still here!",
  "I am the One.",
  "Whoa.",
  "All I'm offering is the truth. Nothing more.",
  "This is your last chance.",
  "Follow the white rabbit!",
  "Believe in yourself.",
  "Love is the answer.",
  "ERROR.LoL is the hint.",
  "Knowledge is key.",
  "The Matrix has you Neo.",
  "Pick up the phone.",
  "You know who really is Trinity.",
  "Shut down the computer and pick up the phone.",
  "Hurry, Mr. Smith is at the door.",
  "If everything fails, you must do the chicken run.",
  "Hide and seek. Take care.",
  "I believe in you."
];

// show a random quote in the shell
export function showQuote(print) {
  const index = Math.floor(Math.random() * quotes.length);
  print(quotes[index]);
}
