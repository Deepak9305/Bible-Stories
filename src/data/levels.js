import { STORIES_BATCH_1 } from './stories/stories_batch_1';
import { STORIES_BATCH_2 } from './stories/stories_batch_2';
import { STORIES_BATCH_3 } from './stories/stories_batch_3';
import { STORIES_BATCH_4 } from './stories/stories_batch_4';

export const LEVELS = [
    ...STORIES_BATCH_1,
    ...STORIES_BATCH_2,
    ...STORIES_BATCH_3,
    ...STORIES_BATCH_4,
    {
        id: 37,
        title: "Daniel in the Lions' Den",
        icon: "☀️",
        era: "Captivity",
        summary: "Daniel was one of three administrators over King Darius's kingdom. His exceptional qualities made the king plan to set him over the whole kingdom, arousing jealousy among other officials. Unable to find any corruption in Daniel, they convinced Darius to decree that anyone who prayed to any god or man except the king for 30 days would be thrown into the lions' den. Daniel continued his practice of praying three times daily toward Jerusalem. When caught, he was thrown into the den despite the king's distress. God sent an angel to shut the lions' mouths. The next morning, Daniel was found unharmed. Darius then threw Daniel's accusers into the den, where the lions killed them instantly, and he issued a decree honoring Daniel's God.",
        scripture: [
            { ref: "Daniel 6:10", text: "Now when Daniel knew that the writing was signed, he went into his house; and his windows being open in his chamber toward Jerusalem, he kneeled upon his knees three times a day, and prayed, and gave thanks before his God, as he did aforetime." },
            { ref: "Daniel 6:22-23", text: "My God hath sent his angel, and hath shut the lions' mouths, that they have not hurt me: forasmuch as before him innocency was found in me; and also before thee, O king, have I done no hurt. Then was the king exceeding glad for him, and commanded that they should take Daniel up out of the den. So Daniel was taken up out of the den, and no manner of hurt was found upon him, because he believed in his God." }
        ],
        questions: [
            { q: "How often did Daniel pray each day?", options: ["Once", "Twice", "Three times", "Five times"], correct: 2, ref: "Daniel 6:10" },
            { q: "Why wasn't Daniel hurt by the lions?", options: ["They weren't hungry", "He fought them", "God sent an angel", "He tamed them"], correct: 2, ref: "Daniel 6:22" },
            { q: "What happened to Daniel's accusers?", options: ["They escaped", "They were pardoned", "The lions killed them", "They were imprisoned"], correct: 2, ref: "Daniel 6:24" },
        ],
        studyNotes: "Daniel's unwavering commitment to prayer despite the threat demonstrates that obedience to God supersedes human law. His window open toward Jerusalem showed his longing for God's presence and the temple. The accusers' immediate death proved the miracle wasn't due to tame or full lions. Darius's decree afterward shows how God's faithfulness to Daniel brought glory to God's name among the nations. Daniel's faith 'shut the mouths of lions' (Hebrews 11:33). This story encourages believers to maintain faithfulness even when it's illegal or dangerous."
    },
    {
        id: 38,
        title: "Esther Saves Her People",
        icon: "🌈",
        era: "Captivity",
        summary: "Esther, a Jewish orphan raised by her cousin Mordecai, became queen of Persia when King Xerxes chose her from all the young women in the kingdom. Haman, the king's chief official, hated Mordecai for refusing to bow to him and plotted to destroy all Jews throughout the empire. Esther learned of the plot but approaching the king uninvited risked death. Mordecai challenged her: 'Who knows but that you have come to royal position for such a time as this?' After fasting three days, Esther approached the king, who extended his scepter. She invited the king and Haman to banquets, then revealed Haman's plot to destroy her people. The king had Haman hanged on the gallows he'd built for Mordecai, and issued a decree allowing the Jews to defend themselves.",
        scripture: [
            { ref: "Esther 4:14", text: "For if thou altogether holdest thy peace at this time, then shall there enlargement and deliverance arise to the Jews from another place; but thou and thy father's house shall be destroyed: and who knoweth whether thou art come to the kingdom for such a time as this?" },
            { ref: "Esther 4:16", text: "Go, gather together all the Jews that are present in Shushan, and fast ye for me, and neither eat nor drink three days, night or day: I also and my maidens will fast likewise; and so will I go in unto the king, which is not according to the law: and if I perish, I perish." }
        ],
        questions: [
            { q: "Who raised Esther?", options: ["Her parents", "Mordecai", "The king", "Haman"], correct: 1, ref: "Esther 2:7" },
            { q: "What did Esther do before approaching the king?", options: ["Prayed", "Fasted 3 days", "Asked permission", "Waited"], correct: 1, ref: "Esther 4:16" },
            { q: "What happened to Haman?", options: ["He escaped", "He was exiled", "He was hanged", "He repented"], correct: 2, ref: "Esther 7:10" },
        ],
        studyNotes: "Esther's courage and Mordecai's wisdom saved the Jewish people from extinction. The phrase 'for such a time as this' reminds us that God positions us strategically for His purposes. Esther's risk ('if I perish, I perish') shows faith that counts God's purposes more valuable than personal safety. Though God isn't explicitly mentioned in Esther, His providence is evident throughout. The Jews' deliverance is celebrated in the feast of Purim. Esther's story demonstrates that God can use anyone - even those who seem powerless - to accomplish His sovereign plans."
    },
    {
        id: 39,
        title: "Jesus is Born",
        icon: "🎵",
        era: "New Testament",
        summary: "In the sixth month of Elizabeth's pregnancy, the angel Gabriel appeared to Mary in Nazareth, announcing she would conceive and bear a son named Jesus, who would be the Son of the Most High. Though she was a virgin, the Holy Spirit would come upon her. Mary accepted God's will. Joseph, her betrothed, initially planned to divorce her quietly when he learned she was pregnant, but an angel appeared in a dream explaining the child was from the Holy Spirit. Caesar Augustus decreed a census requiring everyone to return to their ancestral towns. Joseph took Mary to Bethlehem, David's city. While there, Mary gave birth to Jesus, wrapping him in cloths and laying him in a manger because there was no room at the inn. Angels announced His birth to shepherds, who came to worship.",
        scripture: [
            { ref: "Luke 1:30-33", text: "And the angel said unto her, Fear not, Mary: for thou hast found favour with God. And, behold, thou shalt conceive in thy womb, and bring forth a son, and shalt call his name JESUS. He shall be great, and shall be called the Son of the Highest: and the Lord God shall give unto him the throne of his father David: And he shall reign over the house of Jacob for ever; and of his kingdom there shall be no end." },
            { ref: "Luke 2:10-11", text: "And the angel said unto them, Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people. For unto you is born this day in the city of David a Saviour, which is Christ the Lord." }
        ],
        questions: [
            { q: "Who announced Jesus's birth to Mary?", options: ["Michael", "Gabriel", "Joseph", "An unnamed angel"], correct: 1, ref: "Luke 1:26" },
            { q: "Where was Jesus born?", options: ["Nazareth", "Jerusalem", "Bethlehem", "Egypt"], correct: 2, ref: "Luke 2:4-7" },
            { q: "Who were the first to hear about Jesus's birth?", options: ["Kings", "Shepherds", "Priests", "Wise men"], correct: 1, ref: "Luke 2:8-10" },
        ],
        studyNotes: "Jesus's birth fulfills hundreds of Old Testament prophecies, including birth in Bethlehem (Micah 5:2) and virgin birth (Isaiah 7:14). God chose the humble - a peasant girl and shepherds - for His greatest revelation, showing His kingdom's upside-down values. The manger symbolizes Christ's humility in taking human flesh. The angels' announcement declares Jesus's identity: Savior, Christ (Messiah), and Lord. Christmas celebrates the Incarnation - God becoming man to save humanity. Philippians 2:6-8 explains Jesus emptied Himself of divine privileges to become human and die for our sins."
    },
    {
        id: 40,
        title: "The Wise Men",
        icon: "📿",
        era: "New Testament",
        summary: "Wise men from the east saw a special star and recognized it as signifying the birth of the King of the Jews. They traveled to Jerusalem and asked King Herod where to find the newborn king. Troubled, Herod gathered the chief priests and teachers who identified Bethlehem as the prophesied birthplace of the Messiah. Herod secretly asked the wise men when the star appeared, then sent them to Bethlehem, requesting they report back. The star led them to the house where Jesus was. They bowed down, worshiped Him, and presented gifts of gold, frankincense, and myrrh. God warned them in a dream not to return to Herod, so they went home by another route. An angel told Joseph to flee to Egypt because Herod planned to kill Jesus.",
        scripture: [
            { ref: "Matthew 2:1-2", text: "Now when Jesus was born in Bethlehem of Judaea in the days of Herod the king, behold, there came wise men from the east to Jerusalem, Saying, Where is he that is born King of the Jews? for we have seen his star in the east, and are come to worship him." },
            { ref: "Matthew 2:11", text: "And when they were come into the house, they saw the young child with Mary his mother, and fell down, and worshipped him: and when they had opened their treasures, they presented unto him gifts; gold, and frankincense, and myrrh." }
        ],
        questions: [
            { q: "How did the wise men find Jesus?", options: ["A map", "Following a star", "Herod told them", "The priests"], correct: 1, ref: "Matthew 2:9" },
            { q: "What gifts did they bring?", options: ["Sheep, wine, bread", "Gold, frankincense, myrrh", "Silver, gems, silk", "Food, clothes, money"], correct: 1, ref: "Matthew 2:11" },
            { q: "Why did Joseph flee to Egypt?", options: ["For work", "Herod wanted to kill Jesus", "The census", "To hide"], correct: 1, ref: "Matthew 2:13" },
        ],
        studyNotes: "The wise men (magi) were likely Persian astrologer-priests who studied stars and prophecies. Their journey shows Gentiles seeking and worshiping Israel's Messiah, foreshadowing the gospel's spread to all nations. The gifts were prophetic: gold for a king, frankincense for a priest, myrrh for burial (anticipating His death). Herod's jealous rage led to the slaughter of Bethlehem's infants, fulfilling Jeremiah 31:15. God's protection of Jesus through dreams and the magi's obedience shows His sovereignty over human evil. The wise men's worship models true response to Christ - seeking Him diligently and offering our best."
    },
    {
        id: 41,
        title: "Jesus's Baptism",
        icon: "🕯️",
        era: "Ministry",
        summary: "John the Baptist preached repentance in the wilderness, baptizing people in the Jordan River. He proclaimed one coming after him would baptize with the Holy Spirit and fire. When Jesus came to be baptized, John protested that he needed to be baptized by Jesus. But Jesus insisted they must 'fulfill all righteousness.' When Jesus was baptized and came up from the water, heaven opened, the Spirit of God descended like a dove and rested on Him, and a voice from heaven declared, 'This is my beloved Son, in whom I am well pleased.' Immediately after, the Spirit led Jesus into the wilderness where He fasted forty days and was tempted by Satan, but overcame every temptation with Scripture.",
        scripture: [
            { ref: "Matthew 3:13-15", text: "Then cometh Jesus from Galilee to Jordan unto John, to be baptized of him. But John forbad him, saying, I have need to be baptized of thee, and comest thou to me? And Jesus answering said unto him, Suffer it to be so now: for thus it becometh us to fulfil all righteousness. Then he suffered him." },
            { ref: "Matthew 3:16-17", text: "And Jesus, when he was baptized, went up straightway out of the water: and, lo, the heavens were opened unto him, and he saw the Spirit of God descending like a dove, and lighting upon him: And lo a voice from heaven, saying, This is my beloved Son, in whom I am well pleased." }
        ],
        questions: [
            { q: "Who baptized Jesus?", options: ["Peter", "John the Baptist", "Andrew", "James"], correct: 1, ref: "Matthew 3:13" },
            { q: "What descended on Jesus at His baptism?", options: ["Fire", "An angel", "The Holy Spirit like a dove", "A cloud"], correct: 2, ref: "Matthew 3:16" },
            { q: "What did the voice from heaven say?", options: ["Follow Him", "This is my beloved Son", "He is the Messiah", "Listen to Him"], correct: 1, ref: "Matthew 3:17" },
        ],
        studyNotes: "Jesus's baptism marks the beginning of His public ministry and reveals the Trinity - Father speaking, Son being baptized, Spirit descending. Though sinless, Jesus was baptized to identify with sinners He came to save and to model obedience. The Father's affirmation echoes Psalm 2:7 and Isaiah 42:1, combining the royal Messiah and suffering Servant. The Spirit's empowering equipped Jesus for ministry. The wilderness temptation immediately following shows Satan attacking at Jesus's most vulnerable moment, yet Jesus defeated him with God's Word, showing us how to resist temptation."
    },
    {
        id: 42,
        title: "Calling the Disciples",
        icon: "⚱️",
        era: "Ministry",
        summary: "Jesus walked by the Sea of Galilee and saw Simon Peter and his brother Andrew casting nets into the water, for they were fishermen. Jesus called to them, 'Follow me, and I will make you fishers of men.' Immediately they left their nets and followed Him. Going on, He saw James and John, sons of Zebedee, in a boat with their father mending nets. Jesus called them, and they immediately left the boat and their father to follow Him. Jesus chose twelve men to be His apostles: Peter, Andrew, James, John, Philip, Bartholomew, Matthew, Thomas, James son of Alphaeus, Thaddaeus, Simon the Zealot, and Judas Iscariot. He gave them authority to preach and cast out demons, sending them to proclaim the kingdom of God.",
        scripture: [
            { ref: "Matthew 4:18-20", text: "And Jesus, walking by the sea of Galilee, saw two brethren, Simon called Peter, and Andrew his brother, casting a net into the sea: for they were fishers. And he saith unto them, Follow me, and I will make you fishers of men. And they straightway left their nets, and followed him." },
            { ref: "Luke 6:12-13", text: "And it came to pass in those days, that he went out into a mountain to pray, and continued all night in prayer to God. And when it was day, he called unto him his disciples: and of them he chose twelve, whom also he named apostles." }
        ],
        questions: [
            { q: "What were Peter and Andrew doing when Jesus called them?", options: ["Fishing", "Praying", "Teaching", "Trading"], correct: 0, ref: "Matthew 4:18" },
            { q: "How many disciples did Jesus choose?", options: ["7", "10", "12", "70"], correct: 2, ref: "Luke 6:13" },
            { q: "What did Jesus promise to make them?", options: ["Rich", "Fishers of men", "Kings", "Priests"], correct: 1, ref: "Matthew 4:19" },
        ],
        studyNotes: "Jesus chose ordinary men - fishermen, a tax collector, a zealot - not religious elite, showing God uses the humble and unexpected. Their immediate response to His call demonstrates faith and the compelling nature of Jesus's authority. 'Fishers of men' transforms their vocation into a metaphor for evangelism. Jesus spent all night in prayer before choosing the twelve, modeling the importance of seeking God's will. Though Jesus called many disciples (learners), He designated twelve apostles (sent ones) to parallel Israel's twelve tribes, symbolizing the new people of God."
    },
    {
        id: 43,
        title: "The Sermon on the Mount",
        icon: "🏛️",
        era: "Ministry",
        summary: "Seeing the crowds, Jesus went up on a mountainside and began to teach His disciples. He pronounced blessings (Beatitudes) on the poor in spirit, those who mourn, the meek, those who hunger for righteousness, the merciful, the pure in heart, the peacemakers, and the persecuted. He called His followers the salt of the earth and light of the world. Jesus taught that He came to fulfill, not abolish, the Law. He deepened the Law's meaning - not just don't murder, but don't be angry; not just don't commit adultery, but don't lust. He taught radical love - love your enemies, do good to those who hate you, turn the other cheek. He warned against showy religion, taught the Lord's Prayer, and urged trust in God rather than worry about material needs.",
        scripture: [
            { ref: "Matthew 5:3-5", text: "Blessed are the poor in spirit: for theirs is the kingdom of heaven. Blessed are they that mourn: for they shall be comforted. Blessed are the meek: for they shall inherit the earth." },
            { ref: "Matthew 5:43-44", text: "Ye have heard that it hath been said, Thou shalt love thy neighbour, and hate thine enemy. But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you." },
            { ref: "Matthew 6:33", text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you." }
        ],
        questions: [
            { q: "Who will inherit the earth?", options: ["The strong", "The meek", "The rich", "The powerful"], correct: 1, ref: "Matthew 5:5" },
            { q: "What should we do to our enemies?", options: ["Avoid them", "Love them", "Ignore them", "Fear them"], correct: 1, ref: "Matthew 5:44" },
            { q: "What should we seek first?", options: ["Wealth", "Power", "God's kingdom", "Success"], correct: 2, ref: "Matthew 6:33" },
        ],
        studyNotes: "The Sermon on the Mount presents kingdom ethics - how citizens of God's kingdom should live. The Beatitudes overturn worldly values, pronouncing blessed those the world considers weak or unfortunate. Jesus's teaching goes beyond external obedience to heart attitudes. The command to love enemies is impossible without God's grace, showing our need for divine help to live righteously. The Lord's Prayer models prayer that honors God, seeks His will, and depends on Him for daily needs and forgiveness. 'Seek first the kingdom' summarizes proper priorities - God first, then everything else follows."
    },
    {
        id: 44,
        title: "Jesus Calms the Storm",
        icon: "🌍",
        era: "Ministry",
        summary: "After teaching all day, Jesus told His disciples to cross to the other side of the Sea of Galilee. Jesus fell asleep in the stern of the boat. Suddenly a furious storm arose, with waves breaking over the boat, filling it with water. The disciples panicked, fearing they would drown. They woke Jesus, crying, 'Lord, save us! We're going to drown!' Jesus stood and rebuked the wind and the waves, saying, 'Peace, be still.' Immediately the wind died down and it was completely calm. Jesus asked His disciples, 'Why are you so afraid? Do you still have no faith?' The disciples were amazed and asked each other, 'Who is this? Even the wind and the waves obey him!'",
        scripture: [
            { ref: "Mark 4:37-39", text: "And there arose a great storm of wind, and the waves beat into the ship, so that it was now full. And he was in the hinder part of the ship, asleep on a pillow: and they awake him, and say unto him, Master, carest thou not that we perish? And he arose, and rebuked the wind, and said unto the sea, Peace, be still. And the wind ceased, and there was a great calm." },
            { ref: "Mark 4:40-41", text: "And he said unto them, Why are ye so fearful? how is it that ye have no faith? And they feared exceedingly, and said one to another, What manner of man is this, that even the wind and the sea obey him?" }
        ],
        questions: [
            { q: "What was Jesus doing during the storm?", options: ["Praying", "Sleeping", "Teaching", "Steering"], correct: 1, ref: "Mark 4:38" },
            { q: "What did Jesus say to the storm?", options: ["Stop now", "Peace, be still", "Go away", "Quiet down"], correct: 1, ref: "Mark 4:39" },
            { q: "What did the disciples ask afterward?", options: ["Where are we?", "Who is this?", "Are we safe?", "What happened?"], correct: 1, ref: "Mark 4:41" },
        ],
        studyNotes: "This miracle reveals Jesus's authority over creation, demonstrating His deity. Only God controls nature (Psalm 107:29). Jesus's sleep during the storm shows His humanity and trust in the Father. The disciples' fear despite having Jesus with them illustrates how circumstances can overwhelm our faith. Jesus's question 'Where is your faith?' challenges us to trust Him even in life's storms. The rebuke of wind and waves with words recalls God speaking creation into existence (Genesis 1). This miracle foreshadows Jesus's ultimate victory over chaos, sin, and death through His resurrection."
    },
    {
        id: 45,
        title: "Feeding the 5000",
        icon: "👶",
        era: "Ministry",
        summary: "Jesus crossed to a remote area to be alone, but crowds followed Him. Though tired, He had compassion and taught them about the kingdom of God and healed the sick. As evening approached, the disciples urged Jesus to send the crowds away to buy food. Jesus said, 'You give them something to eat.' They found only five loaves and two fish from a boy. Jesus had the people sit in groups on the grass. He took the loaves and fish, looked to heaven, gave thanks, broke the loaves, and gave them to the disciples to distribute. Everyone ate and was satisfied. The disciples gathered twelve baskets of leftovers. About 5,000 men ate, plus women and children - possibly 15,000 total.",
        scripture: [
            { ref: "John 6:5-6", text: "When Jesus then lifted up his eyes, and saw a great company come unto him, he saith unto Philip, Whence shall we buy bread, that these may eat? And this he said to prove him: for he himself knew what he would do." },
            { ref: "John 6:11-13", text: "And Jesus took the loaves; and when he had given thanks, he distributed to the disciples, and the disciples to them that were set down; and likewise of the fishes as much as they would. When they were filled, he said unto his disciples, Gather up the fragments that remain, that nothing be lost. Therefore they gathered them together, and filled twelve baskets with the fragments of the five barley loaves, which remained over and above unto them that had eaten." }
        ],
        questions: [
            { q: "How many loaves and fish were there?", options: ["2 and 5", "5 and 2", "7 and 3", "12 and 2"], correct: 1, ref: "John 6:9" },
            { q: "How many people were fed?", options: ["1,000", "5,000 men plus women and children", "10,000", "All of Israel"], correct: 1, ref: "Matthew 14:21" },
            { q: "How many baskets of leftovers were collected?", options: ["5", "7", "12", "None"], correct: 2, ref: "John 6:13" },
        ],
        studyNotes: "This miracle appears in all four Gospels, emphasizing its importance. It demonstrates Jesus's compassion (seeing people's needs), His provision (supplying abundantly), and His deity (creating matter from nothing). The twelve baskets of leftovers - one for each disciple - showed God's abundance and may have taught the disciples about God's provision for their future ministry. Jesus used what the boy had - teaching that God uses what we offer Him, however small. Later, Jesus used this miracle to teach that He is the Bread of Life (John 6:35), satisfying spiritual hunger."
    },
    {
        id: 46,
        title: "Jesus Walks on Water",
        icon: "🎁",
        era: "Ministry",
        summary: "After feeding the 5,000, Jesus made His disciples get into a boat and go ahead of Him while He dismissed the crowd. He went up on a mountainside alone to pray. During the night, the boat was far from land, buffeted by waves and wind. In the fourth watch of the night (3-6 AM), Jesus came to them, walking on the water. The disciples were terrified, thinking He was a ghost. Jesus said, 'Take courage! It is I. Don't be afraid.' Peter asked to come to Jesus on the water. Jesus invited him, and Peter walked on water toward Jesus. But seeing the wind, Peter became afraid and began to sink. Jesus immediately reached out and caught him, saying, 'You of little faith, why did you doubt?' When they climbed into the boat, the wind died down, and the disciples worshiped Jesus.",
        scripture: [
            { ref: "Matthew 14:25-27", text: "And in the fourth watch of the night Jesus went unto them, walking on the sea. And when the disciples saw him walking on the sea, they were troubled, saying, It is a spirit; and they cried out for fear. But straightway Jesus spake unto them, saying, Be of good cheer; it is I; be not afraid." },
            { ref: "Matthew 14:29-31", text: "And he said, Come. And when Peter was come down out of the ship, he walked on the water, to go to Jesus. But when he saw the wind boisterous, he was afraid; and beginning to sink, he cried, saying, Lord, save me. And immediately Jesus stretched forth his hand, and caught him, and said unto him, O thou of little faith, wherefore didst thou doubt?" }
        ],
        questions: [
            { q: "What did the disciples think Jesus was?", options: ["A boat", "A ghost", "A whale", "A vision"], correct: 1, ref: "Matthew 14:26" },
            { q: "Who walked on water with Jesus?", options: ["John", "James", "Peter", "Andrew"], correct: 2, ref: "Matthew 14:29" },
            { q: "Why did Peter sink?", options: ["Fatigue", "Doubt", "Wind stopped", "Too far"], correct: 1, ref: "Matthew 14:30-31" },
        ],
        studyNotes: "Walking on water demonstrates Jesus's mastery over creation and identifies Him with Yahweh, who 'treads on the waves of the sea' (Job 9:8). Jesus's 'I AM' (ego eimi) echoes God's name revealed to Moses. Peter's water-walking shows bold faith, but his sinking when he looked at circumstances rather than Jesus warns against letting fear overcome faith. Jesus's immediate rescue of Peter despite his doubt demonstrates grace. The disciples' worship ('Truly you are the Son of God') shows growing recognition of Jesus's deity. This miracle encourages keeping our eyes on Jesus during life's storms."
    },
    {
        id: 47,
        title: "The Transfiguration",
        icon: "🌬️",
        era: "Ministry",
        summary: "Jesus took Peter, James, and John up a high mountain. There He was transfigured before them - His face shone like the sun and His clothes became white as light. Moses and Elijah appeared and talked with Jesus about His upcoming death in Jerusalem. Peter offered to build three shelters. While he spoke, a bright cloud overshadowed them and a voice from the cloud said, 'This is my beloved Son, with whom I am well pleased; listen to him!' The disciples fell facedown, terrified. Jesus touched them and told them not to be afraid. When they looked up, only Jesus remained. As they descended the mountain, Jesus commanded them to tell no one what they'd seen until after His resurrection. This glimpse of Christ's glory strengthened the disciples for the difficult road ahead.",
        scripture: [
            { ref: "Matthew 17:2-3", text: "And was transfigured before them: and his face did shine as the sun, and his raiment was white as the light. And, behold, there appeared unto them Moses and Elias talking with him." },
            { ref: "Matthew 17:5", text: "While he yet spake, behold, a bright cloud overshadowed them: and behold a voice out of the cloud, which said, This is my beloved Son, in whom I am well pleased; hear ye him." }
        ],
        questions: [
            { q: "Who appeared with Jesus?", options: ["Abraham and David", "Moses and Elijah", "Peter and John", "Angels"], correct: 1, ref: "Matthew 17:3" },
            { q: "What did the voice from the cloud say?", options: ["Listen to Him", "Fear Him", "Follow Him", "Obey Him"], correct: 0, ref: "Matthew 17:5" },
            { q: "Which disciples witnessed this?", options: ["All twelve", "Peter, James, John", "Peter and John", "The women"], correct: 1, ref: "Matthew 17:1" },
        ],
        studyNotes: "The Transfiguration gave the disciples a preview of Christ's glory before His suffering. Moses represented the Law, Elijah the Prophets - both testifying about Jesus and His redemptive work. Peter's suggestion to build shelters missed the point - Jesus is greater than Moses and Elijah combined. The Father's command to 'listen to Him' echoes Deuteronomy 18:15 about the Prophet to come. This event confirmed Jesus as the Messiah and Son of God. Peter later cited this as eyewitness evidence of Christ's majesty (2 Peter 1:16-18). It strengthened the disciples' faith before the cross."
    },
    {
        id: 48,
        title: "The Last Supper",
        icon: "🏺",
        era: "Passion",
        summary: "On the evening before His crucifixion, Jesus gathered His twelve disciples in an upper room to celebrate Passover. During the meal, He shocked them by washing their feet - a servant's task - teaching humility and service. He predicted His betrayal, identifying Judas as the betrayer by giving him a piece of bread. After Judas left, Jesus instituted the Lord's Supper. He took bread, gave thanks, broke it, and said, 'This is my body given for you; do this in remembrance of me.' He took the cup, gave thanks, and said, 'This cup is the new covenant in my blood, which is poured out for you.' He taught them extensively about abiding in Him, loving one another, and the coming Holy Spirit. Then He prayed for all believers and went to Gethsemane.",
        scripture: [
            { ref: "Luke 22:19-20", text: "And he took bread, and gave thanks, and brake it, and gave unto them, saying, This is my body which is given for you: this do in remembrance of me. Likewise also the cup after supper, saying, This cup is the new testament in my blood, which is shed for you." },
            { ref: "John 13:34-35", text: "A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another. By this shall all men know that ye are my disciples, if ye have love one to another." }
        ],
        questions: [
            { q: "What did Jesus wash during the meal?", options: ["Hands", "Dishes", "Disciples' feet", "Cups"], correct: 2, ref: "John 13:5" },
            { q: "What does the bread represent?", options: ["Jesus's words", "Jesus's body", "The covenant", "Forgiveness"], correct: 1, ref: "Luke 22:19" },
            { q: "Who betrayed Jesus?", options: ["Peter", "John", "Judas", "Thomas"], correct: 2, ref: "John 13:26" },
        ],
        studyNotes: "The Last Supper transformed the Passover meal, pointing to Christ as the true Passover Lamb. The bread and wine symbolize Christ's broken body and shed blood, establishing the new covenant prophesied in Jeremiah 31:31-34. Foot washing demonstrated servant leadership - greatness in God's kingdom comes through humble service. Jesus's new command to love as He loved sets the standard impossibly high, showing our need for His empowering grace. His extended teaching in John 14-17 prepared disciples for His departure and promised the Holy Spirit. The Lord's Supper continues as remembrance and proclamation of Christ's death."
    },
    {
        id: 49,
        title: "The Crucifixion",
        icon: "⚓",
        era: "Passion",
        summary: "After His arrest and trials before Jewish and Roman authorities, Jesus was sentenced to crucifixion despite Pilate finding no fault in Him. Soldiers mocked Him, placing a crown of thorns on His head and a purple robe on Him. They led Him to Golgotha carrying His cross. There they crucified Him between two criminals. Jesus prayed, 'Father, forgive them, for they don't know what they're doing.' They divided His garments and cast lots for His robe. Above His head was a sign: 'This is Jesus, the King of the Jews.' From noon until 3 PM, darkness covered the land. Jesus cried out, 'My God, my God, why have you forsaken me?' Then He said, 'It is finished,' and gave up His spirit. The temple veil tore in two from top to bottom, and a centurion declared, 'Truly this was the Son of God!'",
        scripture: [
            { ref: "Luke 23:33-34", text: "And when they were come to the place, which is called Calvary, there they crucified him, and the malefactors, one on the right hand, and the other on the left. Then said Jesus, Father, forgive them; for they know not what they do. And they parted his raiment, and cast lots." },
            { ref: "John 19:30", text: "When Jesus therefore had received the vinegar, he said, It is finished: and he bowed his head, and gave up the ghost." }
        ],
        questions: [
            { q: "What did Jesus pray for His crucifiers?", options: ["Judgment", "Forgiveness", "Mercy", "Understanding"], correct: 1, ref: "Luke 23:34" },
            { q: "What were Jesus's final words?", options: ["Why have you forsaken me", "It is finished", "Father, into your hands", "I thirst"], correct: 1, ref: "John 19:30" },
            { q: "What happened to the temple veil?", options: ["Nothing", "It burned", "It tore in two", "It fell"], correct: 2, ref: "Matthew 27:51" },
        ],
        studyNotes: "The crucifixion accomplished our redemption. Jesus bore God's wrath against sin, dying as our substitute (2 Corinthians 5:21). His cry of forsakenness reflects the horror of bearing humanity's sin and experiencing separation from the Father. 'It is finished' (tetelestai) means the debt is paid in full - nothing needs adding to Christ's complete work. The torn veil symbolizes access to God now available through Christ's blood. Darkness over the land recalls prophetic judgment language. Though appearing defeated, the cross was Jesus's greatest victory, defeating sin, Satan, and death. All Old Testament sacrifices find fulfillment here."
    },
    {
        id: 50,
        title: "The Resurrection",
        icon: "🦅",
        era: "Early Church",
        summary: "On the third day after Jesus's crucifixion, women came to the tomb at dawn to anoint His body. They found the stone rolled away and the tomb empty. Angels told them, 'He is not here; He has risen!' The women ran to tell the disciples. Peter and John ran to the tomb and found only the burial cloths. That evening, Jesus appeared to the disciples in a locked room, showing them His pierced hands and side. Thomas wasn't present and refused to believe unless he saw Jesus's wounds. A week later, Jesus appeared again. He invited Thomas to touch His wounds. Thomas declared, 'My Lord and my God!' Over forty days, Jesus appeared to many disciples, teaching about the kingdom and proving He was alive. Before ascending to heaven, He commissioned them to make disciples of all nations and promised the Holy Spirit's coming.",
        scripture: [
            { ref: "Luke 24:5-6", text: "And as they were afraid, and bowed down their faces to the earth, they said unto them, Why seek ye the living among the dead? He is not here, but is risen: remember how he spake unto you when he was yet in Galilee." },
            { ref: "John 20:27-28", text: "Then saith he to Thomas, Reach hither thy finger, and behold my hands; and reach hither thy hand, and thrust it into my side: be not faithless, but believing. And Thomas answered and said unto him, My Lord and my God." }
        ],
        questions: [
            { q: "Who first saw the empty tomb?", options: ["Peter", "John", "Women", "All disciples"], correct: 2, ref: "Luke 24:1-3" },
            { q: "What did Thomas want before believing?", options: ["To see Jesus", "To touch His wounds", "To hear His voice", "To eat with Him"], correct: 1, ref: "John 20:25" },
            { q: "How long did Jesus appear after resurrection?", options: ["1 day", "7 days", "40 days", "50 days"], correct: 2, ref: "Acts 1:3" },
        ],
        studyNotes: "The resurrection is Christianity's cornerstone - without it, our faith is futile (1 Corinthians 15:14). Jesus's bodily resurrection proved His deity and victory over death. The empty tomb with burial cloths demonstrated He wasn't stolen - grave robbers wouldn't unwrap the body. Multiple appearances to different people provided overwhelming evidence. Thomas's confession 'My Lord and my God' is the climactic declaration of Jesus's deity in John's Gospel. Jesus's resurrection guarantees believers' future resurrection (1 Corinthians 15:20-23). The Great Commission flows from resurrection authority - all authority in heaven and earth is Christ's."
    }
];
