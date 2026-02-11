// ═══════════════════════════════════════════════════════════════════════════════════
// BIBLE STORIES DATA - BATCH 1: Stories 1-10 (Creation through Jacob's Ladder)
// ═══════════════════════════════════════════════════════════════════════════════════

export const STORIES_BATCH_1 = [
  {
    id: 1,
    title: "Creation",
    icon: "🌅",
    era: "Creation",
    summary: "In the beginning, God created the heavens and the earth. In six days, He spoke all of creation into existence - light and darkness, sky and sea, land and plants, sun and moon and stars, sea creatures and birds, land animals and finally mankind. God created humans in His own image, both male and female, and gave them dominion over all the earth. On the seventh day, God rested from His work, blessing and sanctifying this day of rest.",
    scripture: [
      { ref: "Genesis 1:1-3", text: "In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. And God said, Let there be light: and there was light." },
      { ref: "Genesis 1:27", text: "So God created man in his own image, in the image of God created he him; male and female created he them." }
    ],
    questions: [
      { q: "How many days did God take to create the world?", options: ["5 days", "6 days", "7 days", "8 days"], correct: 1, ref: "Genesis 1:31-2:2" },
      { q: "What did God create on the first day?", options: ["Animals", "Light", "Plants", "Humans"], correct: 1, ref: "Genesis 1:3" },
      { q: "In whose image did God create mankind?", options: ["Angels", "Animals", "His own image", "The stars"], correct: 2, ref: "Genesis 1:27" },
    ],
    studyNotes: "The Creation account establishes God as the sovereign Creator of all things. The phrase 'And God said' appears repeatedly, showing the power of His word. The creation of humans in God's image sets humanity apart from all other creation, giving us unique dignity and responsibility. The seventh day of rest foreshadows the Sabbath commandment and points to the rest we find in Christ."
  },
  {
    id: 2,
    title: "The Garden of Eden",
    icon: "🍎",
    era: "Eden",
    summary: "God planted a beautiful garden in Eden and placed Adam there to tend it. He brought all the animals to Adam to name. Finding no suitable helper among them, God caused Adam to fall into a deep sleep, took one of his ribs, and created Eve. God gave them one command: they could eat from any tree in the garden except the tree of the knowledge of good and evil. The serpent tempted Eve, who ate the forbidden fruit and gave some to Adam. Their eyes were opened to their sin, they hid from God, and were cast out of the garden.",
    scripture: [
      { ref: "Genesis 2:16-17", text: "And the LORD God commanded the man, saying, Of every tree of the garden thou mayest freely eat: But of the tree of the knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die." },
      { ref: "Genesis 3:6", text: "And when the woman saw that the tree was good for food, and that it was pleasant to the eyes, and a tree to be desired to make one wise, she took of the fruit thereof, and did eat, and gave also unto her husband with her; and he did eat." }
    ],
    questions: [
      { q: "Who was created first, Adam or Eve?", options: ["Eve", "Adam", "Both at once", "The animals"], correct: 1, ref: "Genesis 2:7, 21-22" },
      { q: "What tree were Adam and Eve forbidden to eat from?", options: ["Tree of Life", "Tree of Knowledge of Good and Evil", "Apple Tree", "Oak Tree"], correct: 1, ref: "Genesis 2:17" },
      { q: "Who tempted Eve to eat the forbidden fruit?", options: ["Adam", "An angel", "The serpent", "God"], correct: 2, ref: "Genesis 3:1-6" },
    ],
    studyNotes: "The Fall narrative explains the origin of sin and death in the world. Satan's temptation strategy - questioning God's word, His goodness, and His truthfulness - remains his tactic today. The immediate consequence was broken relationship with God, symbolized by hiding and shame. Yet even in judgment, God's grace appears in His promise that the seed of the woman would crush the serpent's head (Genesis 3:15), the first prophecy of Christ."
  },
  {
    id: 3,
    title: "Cain and Abel",
    icon: "🌊",
    era: "Early Earth",
    summary: "Adam and Eve had two sons: Cain, who became a farmer, and Abel, who kept flocks. Both brought offerings to the Lord - Abel brought the best of his flock, while Cain brought some of his crops. God accepted Abel's offering but not Cain's. Filled with jealousy and anger, Cain lured his brother into a field and killed him. When God confronted Cain, asking where Abel was, Cain responded, 'Am I my brother's keeper?' God cursed Cain to be a wanderer, but also marked him for protection.",
    scripture: [
      { ref: "Genesis 4:3-5", text: "And in process of time it came to pass, that Cain brought of the fruit of the ground an offering unto the LORD. And Abel, he also brought of the firstlings of his flock and of the fat thereof. And the LORD had respect unto Abel and to his offering: But unto Cain and to his offering he had not respect." },
      { ref: "Genesis 4:9", text: "And the LORD said unto Cain, Where is Abel thy brother? And he said, I know not: Am I my brother's keeper?" }
    ],
    questions: [
      { q: "What was Cain's occupation?", options: ["Shepherd", "Farmer", "Fisherman", "Hunter"], correct: 1, ref: "Genesis 4:2" },
      { q: "Why did God reject Cain's offering?", options: ["It wasn't the best", "It was crops not animals", "Cain's heart wasn't right", "It was too small"], correct: 2, ref: "Genesis 4:5-7" },
      { q: "What was Cain's punishment?", options: ["Death", "Slavery", "Wandering the earth", "Imprisonment"], correct: 2, ref: "Genesis 4:12" },
    ],
    studyNotes: "This is the first murder in human history, showing how quickly sin escalated after the Fall. Abel's acceptable offering points to the importance of approaching God on His terms, with faith and the best we have. Hebrews 11:4 tells us Abel offered his sacrifice 'by faith.' Cain's question 'Am I my brother's keeper?' reveals a hardened heart that refuses responsibility. Despite Cain's sin, God's mercy is shown in protecting him from revenge."
  },
  {
    id: 4,
    title: "Noah's Ark",
    icon: "🗼",
    era: "Early Earth",
    summary: "As wickedness increased on earth, God decided to destroy humanity with a flood, but Noah found favor in His eyes. God instructed Noah to build an ark of specific dimensions and to bring his family and two of every kind of animal aboard. Noah obeyed, despite likely mockery from others. Rain fell for 40 days and nights, covering even the highest mountains. Everything on dry land died except those in the ark. After the waters receded, Noah sent out a dove which returned with an olive branch. God made a covenant with Noah, promising never to destroy the earth with a flood again, sealing it with a rainbow.",
    scripture: [
      { ref: "Genesis 6:13-14", text: "And God said unto Noah, The end of all flesh is come before me; for the earth is filled with violence through them; and, behold, I will destroy them with the earth. Make thee an ark of gopher wood." },
      { ref: "Genesis 9:13", text: "I do set my bow in the cloud, and it shall be for a token of a covenant between me and the earth." }
    ],
    questions: [
      { q: "How long did it rain during the flood?", options: ["7 days", "40 days and nights", "100 days", "One year"], correct: 1, ref: "Genesis 7:12" },
      { q: "What did Noah send out to see if the waters had receded?", options: ["A raven and a dove", "An eagle", "A sparrow", "A crow"], correct: 0, ref: "Genesis 8:6-12" },
      { q: "What sign did God give of His covenant with Noah?", options: ["Thunder", "A rainbow", "Lightning", "A star"], correct: 1, ref: "Genesis 9:13" },
    ],
    studyNotes: "Noah's story demonstrates God's judgment on sin and His grace to the faithful. Noah's faith and obedience are remarkable - he built an ark for decades based solely on God's word. Peter calls Noah a 'preacher of righteousness' (2 Peter 2:5), suggesting he warned others of coming judgment. The ark prefigures salvation in Christ - just as Noah's family was saved through water, we are saved through baptism (1 Peter 3:20-21)."
  },
  {
    id: 5,
    title: "Tower of Babel",
    icon: "⭐",
    era: "Early Earth",
    summary: "After the flood, humanity again multiplied and settled in the land of Shinar. Speaking one language and unified in purpose, they decided to build a great city with a tower reaching to heaven, to make a name for themselves and avoid being scattered. God came down to see the city and tower and said, 'Now nothing will be restrained from them, which they have imagined to do.' So the Lord confused their language, causing them to speak in different tongues and unable to understand each other. The people scattered across the earth, and the city was called Babel, meaning 'confusion.'",
    scripture: [
      { ref: "Genesis 11:4", text: "And they said, Go to, let us build us a city and a tower, whose top may reach unto heaven; and let us make us a name, lest we be scattered abroad upon the face of the whole earth." },
      { ref: "Genesis 11:7-8", text: "Go to, let us go down, and there confound their language, that they may not understand one another's speech. So the LORD scattered them abroad from thence upon the face of all the earth." }
    ],
    questions: [
      { q: "What were the people trying to build?", options: ["A palace", "A tower to heaven", "A bridge", "A temple"], correct: 1, ref: "Genesis 11:4" },
      { q: "Why did God confuse their language?", options: ["They were too loud", "To stop their prideful plan", "They asked Him to", "As a test"], correct: 1, ref: "Genesis 11:6-7" },
      { q: "What does 'Babel' mean?", options: ["Tower", "Heaven", "Confusion", "Unity"], correct: 2, ref: "Genesis 11:9" },
    ],
    studyNotes: "Babel represents human pride and rebellion against God. Instead of spreading out and filling the earth as God commanded, they sought to centralize power and make a name for themselves. Their tower reaching to heaven symbolized an attempt to reach God by human effort rather than faith. God's judgment through language confusion prevented unified human rebellion and forced the spread of nations, setting the stage for His plan to eventually unite all peoples in Christ."
  },
  {
    id: 6,
    title: "Abraham's Call",
    icon: "👑",
    era: "Patriarchs",
    summary: "God called Abram (later Abraham) to leave his country, his family, and his father's household to go to a land God would show him. God promised to make him into a great nation, to bless him and make his name great, and that all peoples on earth would be blessed through him. At age 75, Abram obeyed, taking his wife Sarai, his nephew Lot, and all their possessions. They traveled to Canaan where God appeared to Abram and promised, 'To your offspring I will give this land.' Despite being childless at an advanced age, Abram believed God's promise.",
    scripture: [
      { ref: "Genesis 12:1-2", text: "Now the LORD had said unto Abram, Get thee out of thy country, and from thy kindred, and from thy father's house, unto a land that I will shew thee: And I will make of thee a great nation, and I will bless thee, and make thy name great; and thou shalt be a blessing." },
      { ref: "Genesis 15:6", text: "And he believed in the LORD; and he counted it to him for righteousness." }
    ],
    questions: [
      { q: "How old was Abram when God called him?", options: ["50", "75", "100", "120"], correct: 1, ref: "Genesis 12:4" },
      { q: "What did God promise Abram?", options: ["Wealth only", "A great nation and land", "A long life", "Many animals"], correct: 1, ref: "Genesis 12:2, 7" },
      { q: "Who went with Abram on his journey?", options: ["His father", "Sarai and Lot", "Only Sarai", "His brothers"], correct: 1, ref: "Genesis 12:5" },
    ],
    studyNotes: "Abraham is called the father of faith and the friend of God. His calling marks the beginning of God's redemptive plan through Israel. The Abrahamic covenant is foundational to all of Scripture - promising land, descendants, and blessing to all nations. This last promise finds fulfillment in Christ, Abraham's seed through whom all nations are blessed (Galatians 3:16). Abraham's faith wasn't perfect, but he believed God and it was counted to him as righteousness (Romans 4)."
  },
  {
    id: 7,
    title: "Sodom and Gomorrah",
    icon: "🔥",
    era: "Patriarchs",
    summary: "The outcry against Sodom and Gomorrah reached God because their sin was very grievous. Abraham pleaded with God to spare the cities if even ten righteous people could be found there. God agreed but could not find even ten. Two angels came to Sodom where Lot welcomed them, but the wicked men of the city surrounded Lot's house demanding to abuse the visitors. The angels struck the mob with blindness. At dawn, the angels urged Lot, his wife, and two daughters to flee without looking back. As they fled, God rained down burning sulfur, destroying the cities. Lot's wife looked back and became a pillar of salt.",
    scripture: [
      { ref: "Genesis 18:20-21", text: "And the LORD said, Because the cry of Sodom and Gomorrah is great, and because their sin is very grievous; I will go down now, and see whether they have done altogether according to the cry of it, which is come unto me." },
      { ref: "Genesis 19:24-26", text: "Then the LORD rained upon Sodom and upon Gomorrah brimstone and fire from the LORD out of heaven; And he overthrew those cities, and all the plain, and all the inhabitants of the cities, and that which grew upon the ground. But his wife looked back from behind him, and she became a pillar of salt." }
    ],
    questions: [
      { q: "Who pleaded with God to spare Sodom?", options: ["Lot", "Abraham", "Isaac", "Moses"], correct: 1, ref: "Genesis 18:23-32" },
      { q: "What happened to Lot's wife?", options: ["She escaped safely", "She became a pillar of salt", "She was blind", "She stayed in Sodom"], correct: 1, ref: "Genesis 19:26" },
      { q: "How many righteous people did God need to spare the city?", options: ["5", "10", "20", "50"], correct: 1, ref: "Genesis 18:32" },
    ],
    studyNotes: "This account demonstrates God's perfect justice and mercy. His patience is shown in listening to Abraham's intercession, but His holiness demands judgment on persistent, unrepentant sin. Lot's wife's fate serves as a warning against looking back to the world we're called to leave (Luke 17:32). Peter calls Lot a 'righteous man' tormented by the lawless deeds he saw (2 Peter 2:7-8), showing we can be in the world but not of it."
  },
  {
    id: 8,
    title: "Isaac's Birth",
    icon: "📜",
    era: "Patriarchs",
    summary: "God promised Abraham and Sarah a son, even though they were both very old - Sarah was 90 and Abraham was 100. Sarah laughed at the promise, thinking it impossible. But God said, 'Is anything too hard for the Lord?' At the appointed time, Sarah conceived and gave birth to Isaac, whose name means 'laughter.' Sarah said, 'God has brought me laughter, and everyone who hears about this will laugh with me.' Isaac was the promised son through whom God's covenant with Abraham would continue. This miraculous birth demonstrated that God's promises never fail, even when circumstances seem impossible.",
    scripture: [
      { ref: "Genesis 18:14", text: "Is any thing too hard for the LORD? At the time appointed I will return unto thee, according to the time of life, and Sarah shall have a son." },
      { ref: "Genesis 21:1-2", text: "And the LORD visited Sarah as he had said, and the LORD did unto Sarah as he had spoken. For Sarah conceived, and bare Abraham a son in his old age, at the set time of which God had spoken to him." }
    ],
    questions: [
      { q: "How old was Abraham when Isaac was born?", options: ["75", "90", "100", "120"], correct: 2, ref: "Genesis 21:5" },
      { q: "What does Isaac's name mean?", options: ["Promised one", "Laughter", "Miracle", "Beloved"], correct: 1, ref: "Genesis 21:6" },
      { q: "What was Sarah's initial reaction to the promise?", options: ["Joy", "Anger", "Laughter", "Fear"], correct: 2, ref: "Genesis 18:12" },
    ],
    studyNotes: "Isaac's miraculous birth after years of waiting teaches us about God's faithfulness and perfect timing. Abraham and Sarah's advanced age made it clear this was God's work, not human effort. Romans 4 uses Abraham's faith in God's promise of Isaac to illustrate justification by faith. Isaac's birth also prefigures Christ - both were promised sons, born miraculously, and both were offered as sacrifices (though Isaac was spared)."
  },
  {
    id: 9,
    title: "Abraham's Test",
    icon: "⚔️",
    era: "Patriarchs",
    summary: "God tested Abraham's faith by commanding him to sacrifice Isaac, his only son whom he loved, as a burnt offering on Mount Moriah. Abraham rose early, took Isaac and two servants, and traveled three days. When they reached the place, Abraham built an altar and bound Isaac upon it. As Abraham raised the knife, the angel of the Lord called out, 'Do not lay a hand on the boy. Now I know that you fear God, because you have not withheld your son, your only son, from me.' Abraham looked up and saw a ram caught in a thicket, which he sacrificed instead of Isaac.",
    scripture: [
      { ref: "Genesis 22:2", text: "And he said, Take now thy son, thine only son Isaac, whom thou lovest, and get thee into the land of Moriah; and offer him there for a burnt offering upon one of the mountains which I will tell thee of." },
      { ref: "Genesis 22:12", text: "And he said, Lay not thine hand upon the lad, neither do thou any thing unto him: for now I know that thou fearest God, seeing thou hast not withheld thy son, thine only son from me." }
    ],
    questions: [
      { q: "What did God ask Abraham to sacrifice?", options: ["A ram", "His possessions", "Isaac his son", "A lamb"], correct: 2, ref: "Genesis 22:2" },
      { q: "What did Abraham sacrifice instead of Isaac?", options: ["A lamb", "A ram", "A goat", "A dove"], correct: 1, ref: "Genesis 22:13" },
      { q: "Where did this take place?", options: ["Mount Sinai", "Mount Moriah", "Mount Ararat", "Mount Zion"], correct: 1, ref: "Genesis 22:2" },
    ],
    studyNotes: "This is one of the most profound pictures of the gospel in the Old Testament. Abraham's willingness to sacrifice his 'only son, whom he loved' foreshadows God the Father sacrificing His only Son. Mount Moriah is traditionally identified with the Temple Mount in Jerusalem, near where Christ was crucified. Abraham's faith is shown not just in obedience but in his belief that God could raise Isaac from the dead (Hebrews 11:17-19). God provided a substitute sacrifice, as He would ultimately provide Jesus as our substitute."
  },
  {
    id: 10,
    title: "Jacob and Esau",
    icon: "💎",
    era: "Patriarchs",
    summary: "Isaac's wife Rebekah gave birth to twin sons. Esau was born first, red and hairy, followed by Jacob grasping his heel. Esau became a skillful hunter while Jacob was a quiet man dwelling in tents. Isaac favored Esau, but Rebekah loved Jacob. One day, Esau came in famished from the field and asked Jacob for some stew. Jacob said, 'Sell me your birthright first.' Esau, despising his birthright, agreed. Later, when Isaac was old and blind, Rebekah helped Jacob deceive Isaac into giving him the blessing meant for Esau. When Esau discovered this, he wept bitterly and vowed to kill Jacob, forcing Jacob to flee.",
    scripture: [
      { ref: "Genesis 25:31-33", text: "And Jacob said, Sell me this day thy birthright. And Esau said, Behold, I am at the point to die: and what profit shall this birthright do to me? And Jacob said, Swear to me this day; and he sware unto him: and he sold his birthright unto Jacob." },
      { ref: "Genesis 27:35-36", text: "And he said, Thy brother came with subtilty, and hath taken away thy blessing. And he said, Is not he rightly named Jacob? for he hath supplanted me these two times: he took away my birthright; and, behold, now he hath taken away my blessing." }
    ],
    questions: [
      { q: "Who was born first, Jacob or Esau?", options: ["Jacob", "Esau", "They were the same time", "The Bible doesn't say"], correct: 1, ref: "Genesis 25:25" },
      { q: "What did Esau sell for a bowl of stew?", options: ["His inheritance", "His birthright", "His animals", "His land"], correct: 1, ref: "Genesis 25:33" },
      { q: "What does Jacob's name mean?", options: ["Blessed", "Deceiver/Supplanter", "Hunter", "Leader"], correct: 1, ref: "Genesis 25:26, 27:36" },
    ],
    studyNotes: "This story shows both God's sovereign choice and human responsibility. Before the twins were born, God chose Jacob over Esau (Romans 9:10-13), yet both brothers made real choices. Esau despised his birthright, valuing immediate gratification over future blessing (Hebrews 12:16). Jacob's deception was wrong, but God still worked through his flawed character. God would later transform Jacob, changing his name to Israel. The story reminds us that God's purposes prevail despite human sinfulness."
  }
];
