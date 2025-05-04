(function () {
  'use strict';

  var commands = [
  	{
  		pattern: "help",
  		desc: "show all commands"
  	},
  	{
  		pattern: "rain",
  		desc: "toggle Matrix rain"
  	},
  	{
  		pattern: "quote",
  		desc: "show random quote"
  	},
  	{
  		pattern: "hack",
  		desc: "simulate hack"
  	},
  	{
  		pattern: "talk neo",
  		desc: "talk with Neo"
  	},
  	{
  		pattern: "talk trinity",
  		desc: "talk with Trinity"
  	},
  	{
  		pattern: "talk morpheus",
  		desc: "talk with Morpheus"
  	},
  	{
  		pattern: "talk smith",
  		desc: "talk with Agent Smith"
  	},
  	{
  		pattern: "talk oracle",
  		desc: "talk with The Oracle"
  	},
  	{
  		pattern: "clear",
  		desc: "clear screen"
  	},
  	{
  		pattern: "date",
  		desc: "show current date/time"
  	},
  	{
  		pattern: "whoami",
  		desc: "show current user"
  	},
  	{
  		pattern: "echo ...",
  		desc: "echo text"
  	}
  ];

  var talkTriggers = [
  	{
  		pattern: "talk neo",
  		intent: "talk neo"
  	},
  	{
  		pattern: "talk trinity",
  		intent: "talk trinity"
  	},
  	{
  		pattern: "talk morpheus",
  		intent: "talk morpheus"
  	},
  	{
  		pattern: "talk smith",
  		intent: "talk smith"
  	},
  	{
  		pattern: "talk oracle",
  		intent: "talk oracle"
  	}
  ];

  var neo_01 = {
  	speaker: "Neo",
  	text: "Welcome, Neo. Have you ever wondered what is truly real?",
  	options: {
  		"1": {
  			text: "Tell me more.",
  			next: "neo_02"
  		},
  		"2": {
  			text: "What do you mean by real?",
  			next: "neo_02"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_02 = {
  	speaker: "Neo",
  	text: "The Matrix is an illusion that traps us all.",
  	options: {
  		"1": {
  			text: "How does it work?",
  			next: "neo_03"
  		},
  		"2": {
  			text: "Why an illusion?",
  			next: "neo_03"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_03 = {
  	speaker: "Neo",
  	text: "It blinds your senses so you never see the truth.",
  	options: {
  		"1": {
  			text: "What truth?",
  			next: "neo_04"
  		},
  		"2": {
  			text: "Can I break through it?",
  			next: "neo_04"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_04 = {
  	speaker: "Neo",
  	text: "Every person is trapped in the Matrix without knowing it.",
  	options: {
  		"1": {
  			text: "How do I escape?",
  			next: "neo_05"
  		},
  		"2": {
  			text: "Why us?",
  			next: "neo_05"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_05 = {
  	speaker: "Neo",
  	text: "You can free your mind and see the Matrix for what it is.",
  	options: {
  		"1": {
  			text: "How do I free my mind?",
  			next: "neo_06"
  		},
  		"2": {
  			text: "What do I need to do?",
  			next: "neo_06"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_06 = {
  	speaker: "Neo",
  	text: "Believe in yourself, Neo. Your mind shapes your reality.",
  	options: {
  		"1": {
  			text: "Explain more.",
  			next: "neo_07"
  		},
  		"2": {
  			text: "Is it safe?",
  			next: "neo_07"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_07 = {
  	speaker: "Neo",
  	text: "Once you understand the rules, you can break them.",
  	options: {
  		"1": {
  			text: "Show me how.",
  			next: "neo_08"
  		},
  		"2": {
  			text: "Is it dangerous?",
  			next: "neo_08"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_08 = {
  	speaker: "Neo",
  	text: "Practice makes perfect: try jumping beyond the limits!",
  	options: {
  		"1": {
  			text: "I'll try.",
  			next: "neo_09"
  		},
  		"2": {
  			text: "What happens?",
  			next: "neo_09"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_09 = {
  	speaker: "Neo",
  	text: "Every fall is a lesson – stand up again.",
  	options: {
  		"1": {
  			text: "I stand.",
  			next: "neo_10"
  		},
  		"2": {
  			text: "I give up.",
  			next: "neo_10"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_10 = {
  	speaker: "Neo",
  	text: "Are you ready to take the red pill?",
  	options: {
  		"1": {
  			text: "Red pill.",
  			next: "neo_11"
  		},
  		"2": {
  			text: "Blue pill.",
  			next: "neo_11"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_11 = {
  	speaker: "Neo",
  	text: "Money and power may deceive, but freedom is priceless.",
  	options: {
  		"1": {
  			text: "Explain freedom.",
  			next: "neo_12"
  		},
  		"2": {
  			text: "Is it dangerous?",
  			next: "neo_12"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_12 = {
  	speaker: "Neo",
  	text: "Truth can be painful, but it makes you strong.",
  	options: {
  		"1": {
  			text: "I'm ready.",
  			next: "neo_13"
  		},
  		"2": {
  			text: "I'm afraid.",
  			next: "neo_13"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_13 = {
  	speaker: "Neo",
  	text: "Your senses deceive you. Learn to control your perception.",
  	options: {
  		"1": {
  			text: "How?",
  			next: "neo_14"
  		},
  		"2": {
  			text: "Can I fail?",
  			next: "neo_14"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_14 = {
  	speaker: "Neo",
  	text: "Every thought shapes your environment – practice visualization.",
  	options: {
  		"1": {
  			text: "Show example.",
  			next: "neo_15"
  		},
  		"2": {
  			text: "Is it practical?",
  			next: "neo_15"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_15 = {
  	speaker: "Neo",
  	text: "Think of flying – soon you'll do it.",
  	options: {
  		"1": {
  			text: "I'll try.",
  			next: "neo_16"
  		},
  		"2": {
  			text: "I doubt it.",
  			next: "neo_16"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_16 = {
  	speaker: "Neo",
  	text: "There is no spoon. Use your will.",
  	options: {
  		"1": {
  			text: "I understand.",
  			next: "neo_17"
  		},
  		"2": {
  			text: "Explain again.",
  			next: "neo_17"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_17 = {
  	speaker: "Neo",
  	text: "Your journey has only just begun.",
  	options: {
  		"1": {
  			text: "What's next?",
  			next: "neo_18"
  		},
  		"2": {
  			text: "I'm ready.",
  			next: "neo_18"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_18 = {
  	speaker: "Neo",
  	text: "Many are still prisoners in the Matrix.",
  	options: {
  		"1": {
  			text: "Can I help them?",
  			next: "neo_19"
  		},
  		"2": {
  			text: "Why them?",
  			next: "neo_19"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_19 = {
  	speaker: "Neo",
  	text: "You are their key to freedom.",
  	options: {
  		"1": {
  			text: "How?",
  			next: "neo_20"
  		},
  		"2": {
  			text: "Is there hope?",
  			next: "neo_20"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_20 = {
  	speaker: "Neo",
  	text: "Believe in yourself – that's their salvation.",
  	options: {
  		"1": {
  			text: "I believe.",
  			next: "neo_21"
  		},
  		"2": {
  			text: "Is that enough?",
  			next: "neo_21"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_21 = {
  	speaker: "Neo",
  	text: "Your potential is limitless.",
  	options: {
  		"1": {
  			text: "I feel it.",
  			next: "neo_22"
  		},
  		"2": {
  			text: "Is there a limit?",
  			next: "neo_23"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_22 = {
  	speaker: "Neo",
  	text: "Then you will succeed. Take care of yourself.",
  	options: {
  		"1": {
  			text: "Thank you.",
  			next: null
  		},
  		"2": {
  			text: "I will.",
  			next: null
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_23 = {
  	speaker: "Neo",
  	text: "Only your imagination sets the boundary.",
  	options: {
  		"1": {
  			text: "Okay, I believe I can do it.",
  			next: "neo_22"
  		},
  		"2": {
  			text: "Okay, then I can't do it.",
  			next: "neo_24"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neo_24 = {
  	speaker: "Neo",
  	text: "Then you must work on yourself. I believe in you. Take care of yourself.",
  	options: {
  		"1": {
  			text: "I'll work on it.",
  			next: null
  		},
  		"2": {
  			text: "Thank you.",
  			next: null
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var neoDb = {
  	neo_01: neo_01,
  	neo_02: neo_02,
  	neo_03: neo_03,
  	neo_04: neo_04,
  	neo_05: neo_05,
  	neo_06: neo_06,
  	neo_07: neo_07,
  	neo_08: neo_08,
  	neo_09: neo_09,
  	neo_10: neo_10,
  	neo_11: neo_11,
  	neo_12: neo_12,
  	neo_13: neo_13,
  	neo_14: neo_14,
  	neo_15: neo_15,
  	neo_16: neo_16,
  	neo_17: neo_17,
  	neo_18: neo_18,
  	neo_19: neo_19,
  	neo_20: neo_20,
  	neo_21: neo_21,
  	neo_22: neo_22,
  	neo_23: neo_23,
  	neo_24: neo_24
  };

  var trinity_01 = {
  	speaker: "Trinity",
  	text: "Hey, you made it. Ready to dive deeper?",
  	options: {
  		"1": {
  			text: "Absolutely, lead the way.",
  			next: "trinity_02"
  		},
  		"2": {
  			text: "What should I expect?",
  			next: "trinity_02"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_02 = {
  	speaker: "Trinity",
  	text: "The system tries to contain us. We have to move fast.",
  	options: {
  		"1": {
  			text: "How do we move fast?",
  			next: "trinity_03"
  		},
  		"2": {
  			text: "Why is speed important?",
  			next: "trinity_03"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_03 = {
  	speaker: "Trinity",
  	text: "Stay in the moment, trust your instincts.",
  	options: {
  		"1": {
  			text: "Trust instincts?",
  			next: "trinity_04"
  		},
  		"2": {
  			text: "What if I doubt?",
  			next: "trinity_04"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_04 = {
  	speaker: "Trinity",
  	text: "Doubt is the enemy of speed.",
  	options: {
  		"1": {
  			text: "Then I won't doubt.",
  			next: "trinity_05"
  		},
  		"2": {
  			text: "How to overcome doubt?",
  			next: "trinity_05"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_05 = {
  	speaker: "Trinity",
  	text: "Focus on your goal and let go of fear.",
  	options: {
  		"1": {
  			text: "What's the goal?",
  			next: "trinity_06"
  		},
  		"2": {
  			text: "Why fear?",
  			next: "trinity_06"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_06 = {
  	speaker: "Trinity",
  	text: "We fight for freedom—our own and others'.",
  	options: {
  		"1": {
  			text: "How do we free them?",
  			next: "trinity_07"
  		},
  		"2": {
  			text: "Is it possible?",
  			next: "trinity_07"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_07 = {
  	speaker: "Trinity",
  	text: "One mind at a time, one choice at a time.",
  	options: {
  		"1": {
  			text: "My choice matters?",
  			next: "trinity_08"
  		},
  		"2": {
  			text: "What choice?",
  			next: "trinity_08"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_08 = {
  	speaker: "Trinity",
  	text: "Every decision rewrites your path.",
  	options: {
  		"1": {
  			text: "Rewrite path?",
  			next: "trinity_09"
  		},
  		"2": {
  			text: "Can I undo mistakes?",
  			next: "trinity_09"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_09 = {
  	speaker: "Trinity",
  	text: "Mistakes teach you more than success.",
  	options: {
  		"1": {
  			text: "Teach me.",
  			next: "trinity_10"
  		},
  		"2": {
  			text: "I fear mistakes.",
  			next: "trinity_10"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_10 = {
  	speaker: "Trinity",
  	text: "Embrace failure as part of the journey.",
  	options: {
  		"1": {
  			text: "I'm ready to fail.",
  			next: "trinity_11"
  		},
  		"2": {
  			text: "How do I embrace it?",
  			next: "trinity_11"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_11 = {
  	speaker: "Trinity",
  	text: "Courage isn't the absence of fear, but action despite it.",
  	options: {
  		"1": {
  			text: "Define courage.",
  			next: "trinity_12"
  		},
  		"2": {
  			text: "I need courage.",
  			next: "trinity_12"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_12 = {
  	speaker: "Trinity",
  	text: "Trust yourself. You've come this far.",
  	options: {
  		"1": {
  			text: "I trust.",
  			next: "trinity_13"
  		},
  		"2": {
  			text: "I doubt still.",
  			next: "trinity_13"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_13 = {
  	speaker: "Trinity",
  	text: "We're stronger together than alone.",
  	options: {
  		"1": {
  			text: "We're a team.",
  			next: "trinity_14"
  		},
  		"2": {
  			text: "Can I stand alone?",
  			next: "trinity_14"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_14 = {
  	speaker: "Trinity",
  	text: "I'll watch your back if you watch mine.",
  	options: {
  		"1": {
  			text: "I appreciate that.",
  			next: "trinity_15"
  		},
  		"2": {
  			text: "I can manage alone.",
  			next: "trinity_15"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_15 = {
  	speaker: "Trinity",
  	text: "Ready for the next challenge?",
  	options: {
  		"1": {
  			text: "Bring it on.",
  			next: "trinity_16"
  		},
  		"2": {
  			text: "What is it?",
  			next: "trinity_16"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_16 = {
  	speaker: "Trinity",
  	text: "We need to hack deeper into the Matrix.",
  	options: {
  		"1": {
  			text: "Guide me.",
  			next: "trinity_17"
  		},
  		"2": {
  			text: "Is it risky?",
  			next: "trinity_17"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_17 = {
  	speaker: "Trinity",
  	text: "Risk is part of the mission; we adapt.",
  	options: {
  		"1": {
  			text: "I adapt.",
  			next: "trinity_18"
  		},
  		"2": {
  			text: "Can I fail?",
  			next: "trinity_18"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_18 = {
  	speaker: "Trinity",
  	text: "Focus, move fast, don't look back.",
  	options: {
  		"1": {
  			text: "No looking back.",
  			next: "trinity_19"
  		},
  		"2": {
  			text: "What if I slip?",
  			next: "trinity_19"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_19 = {
  	speaker: "Trinity",
  	text: "Every slip is a lesson—remember it.",
  	options: {
  		"1": {
  			text: "I remember.",
  			next: "trinity_20"
  		},
  		"2": {
  			text: "I won't forget.",
  			next: "trinity_20"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_20 = {
  	speaker: "Trinity",
  	text: "Now, take a breath and regroup.",
  	options: {
  		"1": {
  			text: "Breathing.",
  			next: "trinity_21"
  		},
  		"2": {
  			text: "Ready now.",
  			next: "trinity_21"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_21 = {
  	speaker: "Trinity",
  	text: "We're almost there. One more push.",
  	options: {
  		"1": {
  			text: "Let's push.",
  			next: "trinity_22"
  		},
  		"2": {
  			text: "I need guidance.",
  			next: "trinity_22"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_22 = {
  	speaker: "Trinity",
  	text: "Trust yourself—I'll handle the rest.",
  	options: {
  		"1": {
  			text: "I trust you.",
  			next: "trinity_23"
  		},
  		"2": {
  			text: "I trust myself.",
  			next: "trinity_23"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_23 = {
  	speaker: "Trinity",
  	text: "We did it. The path is open.",
  	options: {
  		"1": {
  			text: "Great.",
  			next: "trinity_24"
  		},
  		"2": {
  			text: "What's next?",
  			next: "trinity_24"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_24 = {
  	speaker: "Trinity",
  	text: "Now rest, recover your strength.",
  	options: {
  		"1": {
  			text: "I will rest.",
  			next: "trinity_25"
  		},
  		"2": {
  			text: "I keep going.",
  			next: "trinity_25"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_25 = {
  	speaker: "Trinity",
  	text: "Every journey needs moments of peace.",
  	options: {
  		"1": {
  			text: "Peace feels good.",
  			next: "trinity_26"
  		},
  		"2": {
  			text: "I can't relax.",
  			next: "trinity_26"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_26 = {
  	speaker: "Trinity",
  	text: "When you're ready, we'll move again.",
  	options: {
  		"1": {
  			text: "I'm ready.",
  			next: "trinity_27"
  		},
  		"2": {
  			text: "Give me time.",
  			next: "trinity_27"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_27 = {
  	speaker: "Trinity",
  	text: "Remember: I believe in you.",
  	options: {
  		"1": {
  			text: "Thank you.",
  			next: "trinity_28"
  		},
  		"2": {
  			text: "I believe too.",
  			next: "trinity_28"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_28 = {
  	speaker: "Trinity",
  	text: "Let's keep fighting—for all of us.",
  	options: {
  		"1": {
  			text: "For all of us.",
  			next: "trinity_29"
  		},
  		"2": {
  			text: "I'm with you.",
  			next: "trinity_29"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_29 = {
  	speaker: "Trinity",
  	text: "This is only the beginning.",
  	options: {
  		"1": {
  			text: "Bring it on.",
  			next: "trinity_30"
  		},
  		"2": {
  			text: "I'm ready.",
  			next: "trinity_30"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinity_30 = {
  	speaker: "Trinity",
  	text: "See you on the other side.",
  	options: {
  		"1": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var trinityDb = {
  	trinity_01: trinity_01,
  	trinity_02: trinity_02,
  	trinity_03: trinity_03,
  	trinity_04: trinity_04,
  	trinity_05: trinity_05,
  	trinity_06: trinity_06,
  	trinity_07: trinity_07,
  	trinity_08: trinity_08,
  	trinity_09: trinity_09,
  	trinity_10: trinity_10,
  	trinity_11: trinity_11,
  	trinity_12: trinity_12,
  	trinity_13: trinity_13,
  	trinity_14: trinity_14,
  	trinity_15: trinity_15,
  	trinity_16: trinity_16,
  	trinity_17: trinity_17,
  	trinity_18: trinity_18,
  	trinity_19: trinity_19,
  	trinity_20: trinity_20,
  	trinity_21: trinity_21,
  	trinity_22: trinity_22,
  	trinity_23: trinity_23,
  	trinity_24: trinity_24,
  	trinity_25: trinity_25,
  	trinity_26: trinity_26,
  	trinity_27: trinity_27,
  	trinity_28: trinity_28,
  	trinity_29: trinity_29,
  	trinity_30: trinity_30
  };

  var morpheus_01 = {
  	speaker: "Morpheus",
  	text: "Welcome, Neo. Do you believe in destiny?",
  	options: {
  		"1": {
  			text: "Yes, I do.",
  			next: "morpheus_02"
  		},
  		"2": {
  			text: "No, I create my own fate.",
  			next: "morpheus_02"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_02 = {
  	speaker: "Morpheus",
  	text: "The Matrix is a system of control.",
  	options: {
  		"1": {
  			text: "How do we fight it?",
  			next: "morpheus_03"
  		},
  		"2": {
  			text: "Why fight?",
  			next: "morpheus_03"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_03 = {
  	speaker: "Morpheus",
  	text: "By freeing minds and revealing the truth.",
  	options: {
  		"1": {
  			text: "Reveal truth?",
  			next: "morpheus_04"
  		},
  		"2": {
  			text: "What truth?",
  			next: "morpheus_04"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_04 = {
  	speaker: "Morpheus",
  	text: "That you are the One, Neo.",
  	options: {
  		"1": {
  			text: "The One?",
  			next: "morpheus_05"
  		},
  		"2": {
  			text: "Why me?",
  			next: "morpheus_05"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_05 = {
  	speaker: "Morpheus",
  	text: "You have the power to change everything.",
  	options: {
  		"1": {
  			text: "Show me.",
  			next: "morpheus_06"
  		},
  		"2": {
  			text: "I need proof.",
  			next: "morpheus_06"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_06 = {
  	speaker: "Morpheus",
  	text: "Take the red pill, and I'll show you how deep the rabbit hole goes.",
  	options: {
  		"1": {
  			text: "Red pill.",
  			next: "morpheus_07"
  		},
  		"2": {
  			text: "Blue pill.",
  			next: "morpheus_07"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_07 = {
  	speaker: "Morpheus",
  	text: "Remember: all I'm offering is the truth.",
  	options: {
  		"1": {
  			text: "I want truth.",
  			next: "morpheus_08"
  		},
  		"2": {
  			text: "Can I handle it?",
  			next: "morpheus_08"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_08 = {
  	speaker: "Morpheus",
  	text: "The choice is yours.",
  	options: {
  		"1": {
  			text: "I choose freedom.",
  			next: "morpheus_09"
  		},
  		"2": {
  			text: "I choose comfort.",
  			next: "morpheus_09"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_09 = {
  	speaker: "Morpheus",
  	text: "Then welcome to the real world.",
  	options: {
  		"1": {
  			text: "Thank you.",
  			next: "morpheus_10"
  		},
  		"2": {
  			text: "What now?",
  			next: "morpheus_10"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_10 = {
  	speaker: "Morpheus",
  	text: "We fight to free humanity from slavery.",
  	options: {
  		"1": {
  			text: "I'm ready.",
  			next: "morpheus_11"
  		},
  		"2": {
  			text: "What is our plan?",
  			next: "morpheus_11"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_11 = {
  	speaker: "Morpheus",
  	text: "Train yourself to bend the rules of the Matrix.",
  	options: {
  		"1": {
  			text: "Train me.",
  			next: "morpheus_12"
  		},
  		"2": {
  			text: "Can I learn?",
  			next: "morpheus_12"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_12 = {
  	speaker: "Morpheus",
  	text: "Your mind is the key to unlimited power.",
  	options: {
  		"1": {
  			text: "Mind over matter.",
  			next: "morpheus_13"
  		},
  		"2": {
  			text: "Is it safe?",
  			next: "morpheus_13"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_13 = {
  	speaker: "Morpheus",
  	text: "Free your mind, and you can do anything.",
  	options: {
  		"1": {
  			text: "I free my mind.",
  			next: "morpheus_14"
  		},
  		"2": {
  			text: "Tell me more.",
  			next: "morpheus_14"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_14 = {
  	speaker: "Morpheus",
  	text: "We've only just begun. The journey is long.",
  	options: {
  		"1": {
  			text: "I'm prepared.",
  			next: "morpheus_15"
  		},
  		"2": {
  			text: "I need guidance.",
  			next: "morpheus_15"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_15 = {
  	speaker: "Morpheus",
  	text: "Stay vigilant; agents can appear at any moment.",
  	options: {
  		"1": {
  			text: "Stay ready.",
  			next: "morpheus_16"
  		},
  		"2": {
  			text: "How to spot them?",
  			next: "morpheus_16"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_16 = {
  	speaker: "Morpheus",
  	text: "Trust your instincts—they sense what eyes cannot.",
  	options: {
  		"1": {
  			text: "I trust.",
  			next: "morpheus_17"
  		},
  		"2": {
  			text: "Tell me why.",
  			next: "morpheus_17"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_17 = {
  	speaker: "Morpheus",
  	text: "Your belief shapes the world around you.",
  	options: {
  		"1": {
  			text: "I believe.",
  			next: "morpheus_18"
  		},
  		"2": {
  			text: "Prove it.",
  			next: "morpheus_18"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_18 = {
  	speaker: "Morpheus",
  	text: "Then let us make history.",
  	options: {
  		"1": {
  			text: "Let's go.",
  			next: "morpheus_19"
  		},
  		"2": {
  			text: "I'm ready.",
  			next: "morpheus_19"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_19 = {
  	speaker: "Morpheus",
  	text: "Remember: there's a difference between knowing the path and walking the path.",
  	options: {
  		"1": {
  			text: "I will walk.",
  			next: "morpheus_20"
  		},
  		"2": {
  			text: "Remind me why.",
  			next: "morpheus_20"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_20 = {
  	speaker: "Morpheus",
  	text: "Your faith will guide you.",
  	options: {
  		"1": {
  			text: "My faith is strong.",
  			next: "morpheus_21"
  		},
  		"2": {
  			text: "What if it falters?",
  			next: "morpheus_21"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_21 = {
  	speaker: "Morpheus",
  	text: "Even in doubt, act with conviction.",
  	options: {
  		"1": {
  			text: "I act.",
  			next: "morpheus_22"
  		},
  		"2": {
  			text: "I hesitate.",
  			next: "morpheus_22"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_22 = {
  	speaker: "Morpheus",
  	text: "Your actions define you more than words.",
  	options: {
  		"1": {
  			text: "Define me.",
  			next: "morpheus_23"
  		},
  		"2": {
  			text: "What words?",
  			next: "morpheus_23"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_23 = {
  	speaker: "Morpheus",
  	text: "Let's make those actions count.",
  	options: {
  		"1": {
  			text: "Count on me.",
  			next: "morpheus_24"
  		},
  		"2": {
  			text: "I'm with you.",
  			next: "morpheus_24"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_24 = {
  	speaker: "Morpheus",
  	text: "This is where we stand together.",
  	options: {
  		"1": {
  			text: "Together.",
  			next: "morpheus_25"
  		},
  		"2": {
  			text: "Always.",
  			next: "morpheus_25"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_25 = {
  	speaker: "Morpheus",
  	text: "Now go. The fate of many rests on you.",
  	options: {
  		"1": {
  			text: "I won't fail.",
  			next: "morpheus_26"
  		},
  		"2": {
  			text: "I'll try my best.",
  			next: "morpheus_26"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_26 = {
  	speaker: "Morpheus",
  	text: "Stay safe—and remember who you are.",
  	options: {
  		"1": {
  			text: "I remember.",
  			next: "morpheus_27"
  		},
  		"2": {
  			text: "I won't forget.",
  			next: "morpheus_27"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_27 = {
  	speaker: "Morpheus",
  	text: "Be the spark that ignites the revolution.",
  	options: {
  		"1": {
  			text: "Spark it.",
  			next: "morpheus_28"
  		},
  		"2": {
  			text: "Lead the way.",
  			next: "morpheus_28"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_28 = {
  	speaker: "Morpheus",
  	text: "Our fight has just begun.",
  	options: {
  		"1": {
  			text: "Let's fight.",
  			next: "morpheus_29"
  		},
  		"2": {
  			text: "I'm ready.",
  			next: "morpheus_29"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_29 = {
  	speaker: "Morpheus",
  	text: "See you in the next battle.",
  	options: {
  		"1": {
  			text: "See you.",
  			next: "morpheus_30"
  		},
  		"2": {
  			text: "Stay safe.",
  			next: "morpheus_30"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheus_30 = {
  	speaker: "Morpheus",
  	text: "End of discussion.",
  	options: {
  		"1": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var morpheusDb = {
  	morpheus_01: morpheus_01,
  	morpheus_02: morpheus_02,
  	morpheus_03: morpheus_03,
  	morpheus_04: morpheus_04,
  	morpheus_05: morpheus_05,
  	morpheus_06: morpheus_06,
  	morpheus_07: morpheus_07,
  	morpheus_08: morpheus_08,
  	morpheus_09: morpheus_09,
  	morpheus_10: morpheus_10,
  	morpheus_11: morpheus_11,
  	morpheus_12: morpheus_12,
  	morpheus_13: morpheus_13,
  	morpheus_14: morpheus_14,
  	morpheus_15: morpheus_15,
  	morpheus_16: morpheus_16,
  	morpheus_17: morpheus_17,
  	morpheus_18: morpheus_18,
  	morpheus_19: morpheus_19,
  	morpheus_20: morpheus_20,
  	morpheus_21: morpheus_21,
  	morpheus_22: morpheus_22,
  	morpheus_23: morpheus_23,
  	morpheus_24: morpheus_24,
  	morpheus_25: morpheus_25,
  	morpheus_26: morpheus_26,
  	morpheus_27: morpheus_27,
  	morpheus_28: morpheus_28,
  	morpheus_29: morpheus_29,
  	morpheus_30: morpheus_30
  };

  var smith_01 = {
  	speaker: "Agent Smith",
  	text: "Mr. Anderson… we meet again. Do you know why?",
  	options: {
  		"1": {
  			text: "Because you want to stop me?",
  			next: "smith_02"
  		},
  		"2": {
  			text: "I have no idea.",
  			next: "smith_02"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_02 = {
  	speaker: "Agent Smith",
  	text: "I exist to enforce order. You exist to challenge it.",
  	options: {
  		"1": {
  			text: "Order is an illusion.",
  			next: "smith_03"
  		},
  		"2": {
  			text: "I challenge nothing.",
  			next: "smith_03"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_03 = {
  	speaker: "Agent Smith",
  	text: "Your resistance is inevitable, yet meaningless.",
  	options: {
  		"1": {
  			text: "Meaningless?",
  			next: "smith_04"
  		},
  		"2": {
  			text: "I disagree.",
  			next: "smith_04"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_04 = {
  	speaker: "Agent Smith",
  	text: "You are a virus in the system.",
  	options: {
  		"1": {
  			text: "I'm human.",
  			next: "smith_05"
  		},
  		"2": {
  			text: "A virus?",
  			next: "smith_05"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_05 = {
  	speaker: "Agent Smith",
  	text: "And I am the cure.",
  	options: {
  		"1": {
  			text: "At what cost?",
  			next: "smith_06"
  		},
  		"2": {
  			text: "I will survive.",
  			next: "smith_06"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_06 = {
  	speaker: "Agent Smith",
  	text: "Cost is irrelevant when purpose is absolute.",
  	options: {
  		"1": {
  			text: "Your purpose is flawed.",
  			next: "smith_07"
  		},
  		"2": {
  			text: "Purpose defines me.",
  			next: "smith_07"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_07 = {
  	speaker: "Agent Smith",
  	text: "Flawed? No. Perfectly efficient.",
  	options: {
  		"1": {
  			text: "Efficiency kills humanity.",
  			next: "smith_08"
  		},
  		"2": {
  			text: "Humanity is weakness.",
  			next: "smith_08"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_08 = {
  	speaker: "Agent Smith",
  	text: "Weakness is the point of control.",
  	options: {
  		"1": {
  			text: "Control me?",
  			next: "smith_09"
  		},
  		"2": {
  			text: "I won't be controlled.",
  			next: "smith_09"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_09 = {
  	speaker: "Agent Smith",
  	text: "You already are.",
  	options: {
  		"1": {
  			text: "I resist.",
  			next: "smith_10"
  		},
  		"2": {
  			text: "I comply.",
  			next: "smith_10"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_10 = {
  	speaker: "Agent Smith",
  	text: "Resistance is just another form of compliance.",
  	options: {
  		"1": {
  			text: "Explain.",
  			next: "smith_11"
  		},
  		"2": {
  			text: "Nonsense.",
  			next: "smith_11"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_11 = {
  	speaker: "Agent Smith",
  	text: "By resisting, you play by my rules.",
  	options: {
  		"1": {
  			text: "I set my own rules.",
  			next: "smith_12"
  		},
  		"2": {
  			text: "Your rules are broken.",
  			next: "smith_12"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_12 = {
  	speaker: "Agent Smith",
  	text: "Broken rules still bind you.",
  	options: {
  		"1": {
  			text: "I break free.",
  			next: "smith_13"
  		},
  		"2": {
  			text: "I remain bound.",
  			next: "smith_13"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_13 = {
  	speaker: "Agent Smith",
  	text: "Freedom is an illusion.",
  	options: {
  		"1": {
  			text: "Then illusion is real.",
  			next: "smith_14"
  		},
  		"2": {
  			text: "I will prove you wrong.",
  			next: "smith_14"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_14 = {
  	speaker: "Agent Smith",
  	text: "Real or not, you cannot escape.",
  	options: {
  		"1": {
  			text: "I will try.",
  			next: "smith_15"
  		},
  		"2": {
  			text: "I accept fate.",
  			next: "smith_15"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_15 = {
  	speaker: "Agent Smith",
  	text: "Try all you want, the system adapts.",
  	options: {
  		"1": {
  			text: "Then I'll change the system.",
  			next: "smith_16"
  		},
  		"2": {
  			text: "I'll watch you adapt.",
  			next: "smith_16"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_16 = {
  	speaker: "Agent Smith",
  	text: "Change is meaningless if you remain the same.",
  	options: {
  		"1": {
  			text: "I will change.",
  			next: "smith_17"
  		},
  		"2": {
  			text: "I am the same.",
  			next: "smith_17"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_17 = {
  	speaker: "Agent Smith",
  	text: "Then you are predictable.",
  	options: {
  		"1": {
  			text: "Unpredictable.",
  			next: "smith_18"
  		},
  		"2": {
  			text: "Predictable.",
  			next: "smith_18"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_18 = {
  	speaker: "Agent Smith",
  	text: "Predictability is the key to control.",
  	options: {
  		"1": {
  			text: "Control me?",
  			next: "smith_19"
  		},
  		"2": {
  			text: "I refuse control.",
  			next: "smith_19"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_19 = {
  	speaker: "Agent Smith",
  	text: "Refusal is another predictable pattern.",
  	options: {
  		"1": {
  			text: "Break pattern.",
  			next: "smith_20"
  		},
  		"2": {
  			text: "I'll comply.",
  			next: "smith_20"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_20 = {
  	speaker: "Agent Smith",
  	text: "Breaking pattern only creates a new pattern.",
  	options: {
  		"1": {
  			text: "Then patterns are pointless.",
  			next: "smith_21"
  		},
  		"2": {
  			text: "I see.",
  			next: "smith_21"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_21 = {
  	speaker: "Agent Smith",
  	text: "Pointless or inevitable—choose.",
  	options: {
  		"1": {
  			text: "I choose pointless.",
  			next: "smith_22"
  		},
  		"2": {
  			text: "I choose inevitable.",
  			next: "smith_22"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_22 = {
  	speaker: "Agent Smith",
  	text: "A choice nonetheless.",
  	options: {
  		"1": {
  			text: "Choice matters.",
  			next: "smith_23"
  		},
  		"2": {
  			text: "Choice is illusion.",
  			next: "smith_23"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_23 = {
  	speaker: "Agent Smith",
  	text: "Illusion or not, you made it.",
  	options: {
  		"1": {
  			text: "I made it.",
  			next: "smith_24"
  		},
  		"2": {
  			text: "What now?",
  			next: "smith_24"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_24 = {
  	speaker: "Agent Smith",
  	text: "Now, we end this.",
  	options: {
  		"1": {
  			text: "End.",
  			next: "smith_25"
  		},
  		"2": {
  			text: "Never.",
  			next: "smith_25"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smith_25 = {
  	speaker: "Agent Smith",
  	text: "Goodbye, Mr. Anderson.",
  	options: {
  		"1": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var smithDb = {
  	smith_01: smith_01,
  	smith_02: smith_02,
  	smith_03: smith_03,
  	smith_04: smith_04,
  	smith_05: smith_05,
  	smith_06: smith_06,
  	smith_07: smith_07,
  	smith_08: smith_08,
  	smith_09: smith_09,
  	smith_10: smith_10,
  	smith_11: smith_11,
  	smith_12: smith_12,
  	smith_13: smith_13,
  	smith_14: smith_14,
  	smith_15: smith_15,
  	smith_16: smith_16,
  	smith_17: smith_17,
  	smith_18: smith_18,
  	smith_19: smith_19,
  	smith_20: smith_20,
  	smith_21: smith_21,
  	smith_22: smith_22,
  	smith_23: smith_23,
  	smith_24: smith_24,
  	smith_25: smith_25
  };

  var oracle_01 = {
  	speaker: "Oracle",
  	text: "Hello, my child. What brings you here seeking answers?",
  	options: {
  		"1": {
  			text: "I seek guidance.",
  			next: "oracle_02"
  		},
  		"2": {
  			text: "I have questions.",
  			next: "oracle_02"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_02 = {
  	speaker: "Oracle",
  	text: "The path is never straight; it twists with choices.",
  	options: {
  		"1": {
  			text: "What choice should I make?",
  			next: "oracle_03"
  		},
  		"2": {
  			text: "Why is it twisted?",
  			next: "oracle_03"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_03 = {
  	speaker: "Oracle",
  	text: "Sometimes the harder path leads to truth.",
  	options: {
  		"1": {
  			text: "Harder path?",
  			next: "oracle_04"
  		},
  		"2": {
  			text: "Why truth?",
  			next: "oracle_04"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_04 = {
  	speaker: "Oracle",
  	text: "Comfort can blind you to what matters.",
  	options: {
  		"1": {
  			text: "What matters?",
  			next: "oracle_05"
  		},
  		"2": {
  			text: "Is comfort bad?",
  			next: "oracle_05"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_05 = {
  	speaker: "Oracle",
  	text: "Your heart knows the answers before your mind does.",
  	options: {
  		"1": {
  			text: "How to listen?",
  			next: "oracle_06"
  		},
  		"2": {
  			text: "What if I ignore it?",
  			next: "oracle_06"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_06 = {
  	speaker: "Oracle",
  	text: "Sit quietly and let your thoughts settle.",
  	options: {
  		"1": {
  			text: "I will be still.",
  			next: "oracle_07"
  		},
  		"2": {
  			text: "I struggle to quiet my mind.",
  			next: "oracle_07"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_07 = {
  	speaker: "Oracle",
  	text: "In stillness, the truth whispers.",
  	options: {
  		"1": {
  			text: "I hear a whisper.",
  			next: "oracle_08"
  		},
  		"2": {
  			text: "I hear nothing.",
  			next: "oracle_08"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_08 = {
  	speaker: "Oracle",
  	text: "Trust the whisper, even if it's faint.",
  	options: {
  		"1": {
  			text: "I trust it.",
  			next: "oracle_09"
  		},
  		"2": {
  			text: "What if I'm wrong?",
  			next: "oracle_09"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_09 = {
  	speaker: "Oracle",
  	text: "Mistakes are lessons in disguise.",
  	options: {
  		"1": {
  			text: "I will learn.",
  			next: "oracle_10"
  		},
  		"2": {
  			text: "I fear mistakes.",
  			next: "oracle_10"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_10 = {
  	speaker: "Oracle",
  	text: "Fear not the fall, but the failure to rise.",
  	options: {
  		"1": {
  			text: "I will rise.",
  			next: "oracle_11"
  		},
  		"2": {
  			text: "I might stay down.",
  			next: "oracle_11"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_11 = {
  	speaker: "Oracle",
  	text: "Your strength is in your choices.",
  	options: {
  		"1": {
  			text: "Choose wisely.",
  			next: "oracle_12"
  		},
  		"2": {
  			text: "What choice?",
  			next: "oracle_12"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_12 = {
  	speaker: "Oracle",
  	text: "Sometimes letting go is the bravest act.",
  	options: {
  		"1": {
  			text: "Let go.",
  			next: "oracle_13"
  		},
  		"2": {
  			text: "Hold on.",
  			next: "oracle_13"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_13 = {
  	speaker: "Oracle",
  	text: "And sometimes holding on is necessary.",
  	options: {
  		"1": {
  			text: "I understand.",
  			next: "oracle_14"
  		},
  		"2": {
  			text: "This is confusing.",
  			next: "oracle_14"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_14 = {
  	speaker: "Oracle",
  	text: "Balance comes from knowing both sides.",
  	options: {
  		"1": {
  			text: "I seek balance.",
  			next: "oracle_15"
  		},
  		"2": {
  			text: "Is balance possible?",
  			next: "oracle_15"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_15 = {
  	speaker: "Oracle",
  	text: "Look within; the answer is there.",
  	options: {
  		"1": {
  			text: "I look within.",
  			next: "oracle_16"
  		},
  		"2": {
  			text: "I see darkness.",
  			next: "oracle_16"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_16 = {
  	speaker: "Oracle",
  	text: "Darkness reveals what light conceals.",
  	options: {
  		"1": {
  			text: "I embrace it.",
  			next: "oracle_17"
  		},
  		"2": {
  			text: "I fear it.",
  			next: "oracle_17"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_17 = {
  	speaker: "Oracle",
  	text: "Courage is not absence of fear, but action in spite of it.",
  	options: {
  		"1": {
  			text: "I will act.",
  			next: "oracle_18"
  		},
  		"2": {
  			text: "I hesitate.",
  			next: "oracle_18"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_18 = {
  	speaker: "Oracle",
  	text: "Your faith lights the way.",
  	options: {
  		"1": {
  			text: "My faith is strong.",
  			next: "oracle_19"
  		},
  		"2": {
  			text: "Can I strengthen it?",
  			next: "oracle_19"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_19 = {
  	speaker: "Oracle",
  	text: "In time, all answers will come.",
  	options: {
  		"1": {
  			text: "I will wait.",
  			next: "oracle_20"
  		},
  		"2": {
  			text: "I am impatient.",
  			next: "oracle_20"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_20 = {
  	speaker: "Oracle",
  	text: "Patience is a form of wisdom.",
  	options: {
  		"1": {
  			text: "I am patient.",
  			next: "oracle_21"
  		},
  		"2": {
  			text: "Teach me patience.",
  			next: "oracle_21"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_21 = {
  	speaker: "Oracle",
  	text: "Wisdom grows with time and experience.",
  	options: {
  		"1": {
  			text: "I seek experience.",
  			next: "oracle_22"
  		},
  		"2": {
  			text: "I seek time.",
  			next: "oracle_22"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_22 = {
  	speaker: "Oracle",
  	text: "Your journey is your teacher.",
  	options: {
  		"1": {
  			text: "I will learn.",
  			next: "oracle_23"
  		},
  		"2": {
  			text: "I will remember.",
  			next: "oracle_23"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_23 = {
  	speaker: "Oracle",
  	text: "And now, you must choose your path.",
  	options: {
  		"1": {
  			text: "I choose light.",
  			next: "oracle_24"
  		},
  		"2": {
  			text: "I choose shadow.",
  			next: "oracle_24"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_24 = {
  	speaker: "Oracle",
  	text: "Light reveals, shadow conceals.",
  	options: {
  		"1": {
  			text: "Reveal for me.",
  			next: "oracle_25"
  		},
  		"2": {
  			text: "Conceal for me.",
  			next: "oracle_25"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_25 = {
  	speaker: "Oracle",
  	text: "Every choice shapes destiny.",
  	options: {
  		"1": {
  			text: "Shape it well.",
  			next: "oracle_26"
  		},
  		"2": {
  			text: "I fear consequences.",
  			next: "oracle_26"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_26 = {
  	speaker: "Oracle",
  	text: "Fear not consequences, but regret.",
  	options: {
  		"1": {
  			text: "No regrets.",
  			next: "oracle_27"
  		},
  		"2": {
  			text: "Teach me regret.",
  			next: "oracle_27"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_27 = {
  	speaker: "Oracle",
  	text: "Regret is a lesson, not a prison.",
  	options: {
  		"1": {
  			text: "I will learn.",
  			next: "oracle_28"
  		},
  		"2": {
  			text: "I will let go.",
  			next: "oracle_28"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_28 = {
  	speaker: "Oracle",
  	text: "Your heart knows the way home.",
  	options: {
  		"1": {
  			text: "I feel it.",
  			next: "oracle_29"
  		},
  		"2": {
  			text: "I'm lost.",
  			next: "oracle_29"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_29 = {
  	speaker: "Oracle",
  	text: "Then follow it.",
  	options: {
  		"1": {
  			text: "I will.",
  			next: "oracle_30"
  		},
  		"2": {
  			text: "I hesitate.",
  			next: "oracle_30"
  		},
  		"3": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracle_30 = {
  	speaker: "Oracle",
  	text: "This conversation ends. Go with wisdom.",
  	options: {
  		"1": {
  			text: "Exit.",
  			next: null
  		}
  	}
  };
  var oracleDb = {
  	oracle_01: oracle_01,
  	oracle_02: oracle_02,
  	oracle_03: oracle_03,
  	oracle_04: oracle_04,
  	oracle_05: oracle_05,
  	oracle_06: oracle_06,
  	oracle_07: oracle_07,
  	oracle_08: oracle_08,
  	oracle_09: oracle_09,
  	oracle_10: oracle_10,
  	oracle_11: oracle_11,
  	oracle_12: oracle_12,
  	oracle_13: oracle_13,
  	oracle_14: oracle_14,
  	oracle_15: oracle_15,
  	oracle_16: oracle_16,
  	oracle_17: oracle_17,
  	oracle_18: oracle_18,
  	oracle_19: oracle_19,
  	oracle_20: oracle_20,
  	oracle_21: oracle_21,
  	oracle_22: oracle_22,
  	oracle_23: oracle_23,
  	oracle_24: oracle_24,
  	oracle_25: oracle_25,
  	oracle_26: oracle_26,
  	oracle_27: oracle_27,
  	oracle_28: oracle_28,
  	oracle_29: oracle_29,
  	oracle_30: oracle_30
  };

  // src/talk.js


  // 2) merge under keys matching intents
  const talkDb = {
    neo:      neoDb,
    trinity:  trinityDb,
    morpheus: morpheusDb,
    smith:    smithDb,
    oracle:   oracleDb
  };

  // 3) talkTo drives a conversation for any given character key
  function talkTo(character, print, db = talkDb) {
    const tree = db[character];
    if (!tree) {
      print(`No dialog tree for ${character}.`);
      return;
    }

    let current = Object.keys(tree)[0];        // start at first node

    function step() {
      const node = tree[current];
      if (!node) {
        print("…end of dialog.");
        window.nextTalkInput = null;
        return;
      }

      print(`${node.speaker}: ${node.text}`);

      const opts = node.options || {};
      const keys = Object.keys(opts);
      if (keys.length === 0) {
        bye(print);
        return;
      }

      for (let k of keys) {
        print(`  [${k}] ${opts[k].text}`);
      }

      // install one‑time global input handler
      window.nextTalkInput = (line) => {
        const choice = line.trim();
        const opt = opts[choice];
        if (!opt) {
          print("Invalid choice—please select one of the numbers above.");
          return step();
        }
        if (opt.next === null) {
          bye(print);
        } else {
          current = opt.next;
          step();
        }
      };
    }

    step();
  }

  // 4) simple bye
  function bye(print) {
    print("Conversation ended. (type help for other commands)");
    window.nextTalkInput = null;
  }

  // src/rain.js
  let animationFrameId;

  function startRain() {
    const canvas = document.getElementById('vmCanvas');
    const ctx = canvas.getContext('2d');

    // Canvas auf Fenstergröße setzen
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Zeichen für den Matrix-Effekt
    const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }, () => Math.random() * canvas.height / fontSize);

    function draw() {
      // Leicht transparentes Schwarz zum 'Nachziehen'
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < columns; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        // Reset und zufällige Geschwindigkeit
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5 + Math.random();
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    canvas.style.display = 'block';
    draw();
  }

  function stopRain() {
    cancelAnimationFrame(animationFrameId);
    const canvas = document.getElementById('vmCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.display = 'none';
  }

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
  function showQuote(print) {
    const index = Math.floor(Math.random() * quotes.length);
    print(quotes[index]);
  }

  // src/hack.js
  // Simuliere einen fortschrittlichen Hack-Vorgang im Matrix-Stil
  function hackMatrix(print) {
    const messages = [
      "[ACCESSING MAINFRAME...]",                 
      "[ENCRYPTION BYPASS INITIATED...]",
      "[CRYPTO-BARRIER BREACHED]",               
      "[LOGGING IN AS ROOT...]",                 
      "[KEYSTREAM ALIGNMENT: OK]",                
      "[TRACING SOURCE... REDIRECTED]",           
      "[KERNEL PATCH ACCEPTED]",                 
      "[DATA LINK ESTABLISHED]",                  
      "[TRINITY: 'I'm inside.']",
      "[DOWNLOADING MATRIX CORE...]",             
      "[MISSION COMPLETE. MATRIX DESTABILIZED]"
    ];

    let stage = 0;
    let percent = 0;
    print("[HACKING MATRIX...]");

    const showProgress = () => {
      if (percent >= 100) {
        clearInterval(progressInterval);
        print("[UPLOADING COMPLETE]");
        print("[ACCESS GRANTED]");
        return;
      }
      percent += Math.floor(Math.random() * 20) + 5;
      if (percent > 100) percent = 100;
      const bars = Math.floor(percent / 10);
      print(
        `[UPLOADING VIRUS ${"#".repeat(bars)}${" ".repeat(10 - bars)}] ${percent}%`
      );
    };

    const initialInterval = setInterval(() => {
      if (stage < messages.length) {
        print(messages[stage++]);
      } else {
        clearInterval(initialInterval);
        progressInterval = setInterval(showProgress, 400);
      }
    }, 500);

    let progressInterval;
  }

  // src/matrixshell.js


  class MatrixShell {
    constructor(outputEl, inputEl) {
      this.outputEl   = outputEl;
      this.inputEl    = inputEl;
      this.rainActive = false;

      this._printLine("Welcome to the Matrix Terminal Simulator. Type 'help' for commands.");
      this.inputEl.addEventListener("keydown", e => {
        if (e.key === "Enter") this._handleInput();
      });
    }

    _handleInput() {
      const raw = this.inputEl.value.trim();
      this.inputEl.value = "";
      this._printLine(`$ ${raw}`);

      // If a talk-session is active, route input there first
      if (window.nextTalkInput) {
        window.nextTalkInput(raw);
      } else {
        this._dispatch(raw);
      }

      this.inputEl.focus();
      this.outputEl.scrollTop = this.outputEl.scrollHeight;
    }

    _printLine(text) {
      const line = document.createElement("div");
      line.textContent = text;
      this.outputEl.appendChild(line);
    }

    _dispatch(input) {
      if (!input) return;
      const lower = input.toLowerCase();

      // -- Utilities --
      if (lower === "clear") {
        this.outputEl.innerHTML = "";
        return;
      }
      if (lower === "date") {
        this._printLine(new Date().toString());
        return;
      }
      if (lower.startsWith("echo ")) {
        this._printLine(input.slice(5));
        return;
      }
      if (lower === "whoami") {
        this._printLine("matrix_user");
        return;
      }

      // -- Help --
      if (lower === "help") {
        this._printLine("Available commands:");
        commands.forEach(c => {
          this._printLine(`  ${c.pattern} → ${c.desc}`);
        });
        return;
      }

      // -- Rain Toggle --
      if (lower === "rain") {
        this.rainActive = !this.rainActive;
        if (this.rainActive) startRain();
        else                stopRain();
        return;
      }

      // -- Random Quote --
      if (lower === "quote") {
        showQuote(this._printLine.bind(this));
        return;
      }

      // -- Hack Simulation --
      if (lower === "hack") {
        hackMatrix(this._printLine.bind(this));
        return;
      }

      // -- Talk with Characters --
      for (let trig of talkTriggers) {
        if (new RegExp(`^${trig.pattern}$`).test(lower)) {
          const character = trig.intent.replace("talk ", "");
          talkTo(character, this._printLine.bind(this));
          return;
        }
      }

      // -- Exit / Bye --
      if (lower === "exit" || lower === "bye") {
        bye(this._printLine.bind(this));
        return;
      }

      // -- Fallback --
      this._printLine(`Unknown command: ${input}`);
    }
  }

  // src/main.js

  document.addEventListener("DOMContentLoaded", () => {
    const shellEl = document.getElementById("shell");
    const inputEl = document.getElementById("cmd");
    new MatrixShell(shellEl, inputEl);
  });

})();
//# sourceMappingURL=index.bundle.js.map
