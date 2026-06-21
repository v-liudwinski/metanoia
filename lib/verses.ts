export interface DailyVerse {
  reference: string;
  apiReference: string;
  fallbackText: string;
  devotionalTitle: string;
  devotional: string[];
  pullQuote: string;
  prayer: string[];
}

// Curated daily verses. The verse for a given date is selected deterministically
// by day-of-year index modulo this list length, so every visitor sees the same
// verse on the same day. Text is fetched from API.Bible when possible; the
// fallbackText below is used if the API is unavailable.
export const curatedVerses: DailyVerse[] = [
  {
    reference: 'John 3:16',
    apiReference: 'JHN.3.16',
    fallbackText:
      'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
    devotionalTitle: 'The Measure of Love',
    devotional: [
      'In a world that often measures love by convenience, John 3:16 presents a love that is costly, expansive, and unearned. God did not wait for humanity to ascend to holiness before reaching down; he gave what was most precious to bridge the distance we could not cross ourselves.',
      'The word "gave" carries the weight of sacrifice. It is not merely affectionate feeling but decisive action. To believe in him is to entrust our entire existence to the one who considered us worth the price of his Son.',
    ],
    pullQuote: 'Love is not measured by what we receive, but by what God was willing to give.',
    prayer: [
      'Heavenly Father,',
      'Help me today to receive your love not as a concept, but as a living truth.',
      'Where I have measured my worth by performance, remind me that I am valued enough to be pursued.',
      'May your giving shape my living, and may I become someone who loves generously because I have been loved first.',
      'Amen.',
    ],
  },
  {
    reference: 'Psalm 46:10',
    apiReference: 'PSA.46.10',
    fallbackText:
      'Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.',
    devotionalTitle: 'Stillness as Surrender',
    devotional: [
      'In the relentless cadence of modern existence, stillness is often misconstrued as unproductivity or idleness. Yet the Psalmist invites us into a profound paradigm shift: stillness as an active, deliberate posture of knowing. It is an intentional cessation of our striving, a conscious laying down of our frantic attempts to manage outcomes that are ultimately beyond our control.',
      'The Hebrew word used here for "be still" implies a slackening, a letting go. It is not merely physical immobility, but a surrender of the spirit. When we let the rope go limp, we acknowledge that the tension we were holding was not sustaining us, but exhausting us. It is in this released space that true recognition of the Divine becomes possible.',
    ],
    pullQuote: 'Stillness is not the absence of action, but the presence of perspective.',
    prayer: [
      'Sovereign Lord,',
      'Quiet the anxious striving within me today.',
      'Help me to release my grip on the things I cannot control, and to trust deeply in your unshakeable power.',
      'In the silence, let me recognize your voice, and in the stillness, let me know your peace.',
      'Amen.',
    ],
  },
  {
    reference: 'Philippians 4:13',
    apiReference: 'PHP.4.13',
    fallbackText: 'I can do all things through Christ which strengtheneth me.',
    devotionalTitle: 'Strength Beyond Self',
    devotional: [
      'Paul writes these words from imprisonment, not from a mountaintop. That context matters. This is not a promise that every personal ambition will succeed, but that every circumstance can be met with a strength that comes from outside ourselves.',
      'To do all things through Christ is to discover that our limitations are not the final word. In weakness, his power is made visible. In uncertainty, his peace becomes our footing. The strength we need is not willpower; it is partnership.',
    ],
    pullQuote: 'Your limitation is the place where his strength begins to show.',
    prayer: [
      'Lord Jesus,',
      'When I face tasks that feel beyond me, remind me that I do not face them alone.',
      'Strengthen the places in me that feel weak, and steady my heart with your presence.',
      'Let every small act of faith today be carried by your grace.',
      'Amen.',
    ],
  },
  {
    reference: 'Proverbs 3:5-6',
    apiReference: 'PRO.3.5',
    fallbackText:
      'Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.',
    devotionalTitle: 'The Direction of Trust',
    devotional: [
      'Trust is not the absence of questions; it is the presence of surrender. The call to trust with all our hearts asks us to bring our full selves before God—not just the polished, certain parts, but the confused and searching parts as well.',
      'Leaning on our own understanding feels like wisdom, yet it can become a crutch that limits our vision. When we acknowledge God in all our ways, we invite his perspective into the ordinary moments where we usually rely only on ourselves.',
    ],
    pullQuote: 'The path becomes clear only when we stop pretending we already know the way.',
    prayer: [
      'Father,',
      'I confess how often I lean on my own understanding.',
      'Teach me to trust you with the parts of my life I have tried to manage alone.',
      'Direct my steps today, and give me the courage to follow even when the way forward is unclear.',
      'Amen.',
    ],
  },
  {
    reference: 'Romans 8:28',
    apiReference: 'ROM.8.28',
    fallbackText:
      'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.',
    devotionalTitle: 'The Weaving of Providence',
    devotional: [
      'This promise does not say that all things are good. Pain, loss, and confusion remain real. What it declares is that God is able to weave even the torn threads of our lives into a pattern that serves his purpose for those who love him.',
      'The weaving takes time, and the underside of the tapestry often looks chaotic. Faith is the choice to believe that the Weaver sees the finished design even when we can only see knots.',
    ],
    pullQuote: 'Not all threads are good, but the Weaver is always good.',
    prayer: [
      'God of all purposes,',
      'I bring to you the broken pieces I do not understand.',
      'Help me trust that you are working, even in the silence and the waiting.',
      'May my love for you become the lens through which I interpret every season.',
      'Amen.',
    ],
  },
  {
    reference: 'Psalm 23:1',
    apiReference: 'PSA.23.1',
    fallbackText: 'The Lord is my shepherd; I shall not want.',
    devotionalTitle: 'Under the Shepherd\'s Care',
    devotional: [
      'To call the Lord "my shepherd" is to exchange anxiety for belonging. A shepherd does not merely own sheep; he knows them, leads them, protects them, and provides for them. To be shepherded is to be seen and sustained.',
      'The confession "I shall not want" is not a claim of material abundance but of sufficiency. When the one who holds all things is walking beside us, the soul can rest even in scarcity.',
    ],
    pullQuote: 'The soul that knows its shepherd stops scrambling to be its own god.',
    prayer: [
      'Good Shepherd,',
      'Thank you for leading me, even when I cannot see the path.',
      'Calm the wants that disturb my peace, and remind me that I have what I need in you.',
      'Make me content, trusting, and quick to follow your voice today.',
      'Amen.',
    ],
  },
  {
    reference: 'Isaiah 40:31',
    apiReference: 'ISA.40.31',
    fallbackText:
      'But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.',
    devotionalTitle: 'The Strength of Waiting',
    devotional: [
      'Waiting is not passive. To wait upon the Lord is to direct our hope toward him, to renew our focus, and to refuse the hurry that drains the soul. In a culture that rewards speed, this verse dignifies the slow, steady posture of trust.',
      'Eagles do not run themselves to exhaustion. They rise on currents they did not create. In the same way, those who wait on God find strength not from self-generated effort but from the wind of his Spirit beneath their wings.',
    ],
    pullQuote: 'Exhaustion is the price of self-reliance; renewal is the gift of waiting.',
    prayer: [
      'Lord,',
      'I am tired from running in my own strength.',
      'Teach me to wait on you, to find renewal in your presence, and to move at the pace of your Spirit.',
      'Lift me above the noise, and let me soar on grace instead of willpower.',
      'Amen.',
    ],
  },
  {
    reference: 'Matthew 11:28',
    apiReference: 'MAT.11.28',
    fallbackText:
      'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
    devotionalTitle: 'An Invitation to Rest',
    devotional: [
      'Jesus does not offer rest as a reward for finishing. He offers it as a gift for coming. The prerequisite is not performance but weariness. The heavy-laden are precisely the ones he invites.',
      'Rest in Christ is not merely physical relaxation. It is the deep rest of a soul that no longer has to earn its standing. His yoke is easy not because the work is light, but because we walk beside him.',
    ],
    pullQuote: 'You do not have to finish first to be welcomed; you only have to come weary.',
    prayer: [
      'Jesus,',
      'I come to you with the burdens I have been carrying alone.',
      'Give me the rest you promised—not just for my body, but for my soul.',
      'Help me lay down the need to prove myself and receive the grace you freely offer.',
      'Amen.',
    ],
  },
  {
    reference: 'Joshua 1:9',
    apiReference: 'JOS.1.9',
    fallbackText:
      'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest.',
    devotionalTitle: 'Courage for the Journey',
    devotional: [
      'Courage in Scripture is not the absence of fear but the presence of God. Three times in this chapter, Joshua is told to be strong and courageous—not because the task ahead is easy, but because he will not face it alone.',
      'The promise "whithersoever thou goest" removes the boundary between sacred and ordinary places. God\'s presence is not limited to the sanctuary; it accompanies us into the unknown territories we are called to enter.',
    ],
    pullQuote: 'Courage is not fearlessness; it is fear walking with God.',
    prayer: [
      'Lord of every path,',
      'The road ahead feels uncertain, and my heart is tempted to shrink back.',
      'Command courage into me, and let your presence be the strength I lean on.',
      'Go with me wherever I must go today, and let me not walk alone.',
      'Amen.',
    ],
  },
  {
    reference: 'Galatians 5:22-23',
    apiReference: 'GAL.5.22',
    fallbackText:
      'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.',
    devotionalTitle: 'Fruit, Not Forced',
    devotional: [
      'The fruit of the Spirit is not a checklist to achieve; it is the natural produce of a life connected to God. We do not manufacture love or peace by sheer effort. We grow them by abiding in the vine.',
      'Each fruit listed is a quality the world needs and the soul longs for. They grow slowly, seasonally, and often unseen. But a life rooted in the Spirit eventually overflows with flavors that bless everyone nearby.',
    ],
    pullQuote: 'You cannot force fruit; you can only tend the roots.',
    prayer: [
      'Holy Spirit,',
      'Grow in me the fruit that I cannot produce on my own.',
      'Where I am impatient, bring peace; where I am harsh, bring gentleness.',
      'Let my life become a visible expression of your invisible work.',
      'Amen.',
    ],
  },
  {
    reference: 'Jeremiah 29:11',
    apiReference: 'JER.29.11',
    fallbackText:
      'For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.',
    devotionalTitle: 'A Future Held in Trust',
    devotional: [
      'These words were spoken to exiles, people living far from home with no clear timeline for restoration. God\'s promise was not immediate rescue but a future shaped by his intentions for their welfare.',
      'To trust God with our expected end is to believe that our story is not finished yet. The present chapter may be painful, but the Author is writing toward hope, not harm.',
    ],
    pullQuote: 'The end of your story is being written by the one who began it.',
    prayer: [
      'Father,',
      'When my future feels uncertain, remind me that your thoughts toward me are good.',
      'Help me trust the story you are writing, even when I cannot read ahead.',
      'Give me patience to wait for the expected end you have prepared.',
      'Amen.',
    ],
  },
  {
    reference: '1 Corinthians 13:4-5',
    apiReference: '1CO.13.4',
    fallbackText:
      'Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up, doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil.',
    devotionalTitle: 'The Shape of Love',
    devotional: [
      'Love, in Paul\'s description, is less a feeling and more a way of being. It is patient when it wants to react, kind when it wants to defend, and humble when it wants to boast. This kind of love is learned, not merely discovered.',
      'To love like this is to allow God\'s love to reshape our instincts. It is a daily reorientation away from self-protection and toward the good of others.',
    ],
    pullQuote: 'Love is not what you feel; it is what you do when no one is looking.',
    prayer: [
      'Lord,',
      'My love is often thin and self-serving.',
      'Thicken it with patience, sweeten it with kindness, and humble it with grace.',
      'Let the people around me today experience love that looks like you.',
      'Amen.',
    ],
  },
  {
    reference: 'Psalm 119:105',
    apiReference: 'PSA.119.105',
    fallbackText: 'Thy word is a lamp unto my feet, and a light unto my path.',
    devotionalTitle: 'Light for the Next Step',
    devotional: [
      'A lamp does not illuminate the entire journey. It provides just enough light for the next step. Scripture is given not to answer every question at once but to guide us faithfully through the darkness one step at a time.',
      'We often wish for a floodlight that reveals the whole road. Instead, God gives us a lamp that requires us to stay close, to walk with him, and to trust that the next step will be revealed when it is needed.',
    ],
    pullQuote: 'You do not need to see the whole path; you only need light for the next step.',
    prayer: [
      'God of light,',
      'Your word is my lamp. Help me read it not for information but for direction.',
      'When the path ahead is dark, give me courage to take the step you illuminate.',
      'Keep me close enough to you that I never outrun your light.',
      'Amen.',
    ],
  },
  {
    reference: 'Colossians 3:23',
    apiReference: 'COL.3.23',
    fallbackText:
      'And whatsoever ye do, do it heartily, as to the Lord, and not unto men.',
    devotionalTitle: 'Work as Worship',
    devotional: [
      'Ordinary work becomes sacred when it is done "as to the Lord." The task itself may be unnoticed by others, but when offered to God, it carries eternal weight. Every honest effort can be an act of worship.',
      'This reframing frees us from the need for applause. We are no longer performing for human approval but serving the one who sees what is hidden and rewards what is faithful.',
    ],
    pullQuote: 'The smallest task, done for God, is greater than the grandest performance for human eyes.',
    prayer: [
      'Lord,',
      'Transform my work today into worship.',
      'When I feel unseen or unappreciated, remind me that I am serving you.',
      'Give me diligence, integrity, and joy in the ordinary tasks before me.',
      'Amen.',
    ],
  },
  {
    reference: 'Hebrews 11:1',
    apiReference: 'HEB.11.1',
    fallbackText:
      'Now faith is the substance of things hoped for, the evidence of things not seen.',
    devotionalTitle: 'The Substance of Hope',
    devotional: [
      'Faith gives substance to hope. It is not wishful thinking; it is a settled confidence that what God has promised is real even before it is visible. Faith turns hope into something we can stand on.',
      'In a world that demands proof before belief, faith dares to believe before seeing. It is the evidence of a reality that exists beyond the reach of our senses, anchored in the character of God.',
    ],
    pullQuote: 'Faith is the courage to treat God\'s promises as if they are already true.',
    prayer: [
      'God of the unseen,',
      'Strengthen my faith when sight fails me.',
      'Let your promises become the ground beneath my feet and the air in my lungs.',
      'Help me live today as though every word you have spoken is already fulfilled.',
      'Amen.',
    ],
  },
  {
    reference: 'Psalm 19:14',
    apiReference: 'PSA.19.14',
    fallbackText:
      'Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight, O Lord, my strength, and my redeemer.',
    devotionalTitle: 'Speech from a Sanctified Heart',
    devotional: [
      'David asks God to approve both what he says and what he thinks. This is a prayer for integrity between the inner and outer life. It is possible to speak rightly while thinking wrongly; David wants both aligned.',
      'The heart is the source from which words flow. If we want our speech to be acceptable, our inner meditation must first be brought into the light of God\'s presence.',
    ],
    pullQuote: 'Guard your thoughts, and your words will take care of themselves.',
    prayer: [
      'Lord, my Redeemer,',
      'Search the meditations of my heart before they become the words of my mouth.',
      'Make my speech a gift to others and an offering to you.',
      'Let what I think and say today be acceptable in your sight.',
      'Amen.',
    ],
  },
  {
    reference: 'Ephesians 2:8-9',
    apiReference: 'EPH.2.8',
    fallbackText:
      'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: not of works, lest any man should boast.',
    devotionalTitle: 'The Gift of Grace',
    devotional: [
      'Grace is unearned favor, and that is precisely what makes it grace. If we could achieve it, it would be wages, not a gift. Salvation begins with God\'s initiative and is received by faith, not produced by effort.',
      'This is humbling and liberating. We cannot boast in what we have earned from God, but we can rest in what we have received. Grace levels the ground at the foot of the cross.',
    ],
    pullQuote: 'You cannot earn a gift, but you can receive it with both hands.',
    prayer: [
      'Gracious Father,',
      'Thank you for grace that reaches me before I reach you.',
      'Deliver me from the pride of self-earned righteousness and the despair of believing I must be enough.',
      'Let my life today be a grateful response to your unearned favor.',
      'Amen.',
    ],
  },
  {
    reference: 'Psalm 37:4',
    apiReference: 'PSA.37.4',
    fallbackText:
      'Delight thyself also in the Lord; and he shall give thee the desires of thine heart.',
    devotionalTitle: 'Delight First',
    devotional: [
      'The order of this verse matters. Delight in the Lord comes first; the desires of the heart follow. As we delight in God, our desires are purified and aligned with what is truly good.',
      'This is not a formula for getting what we want. It is an invitation to want differently. To delight in God is to find that he himself becomes the deepest desire of the heart.',
    ],
    pullQuote: 'When God becomes your delight, your desires begin to look like his.',
    prayer: [
      'Lord,',
      'Teach me to delight in you more than in any lesser thing.',
      'Shape the desires of my heart until they match your desires for me.',
      'Let my joy in you overflow into every area of my life today.',
      'Amen.',
    ],
  },
  {
    reference: 'Matthew 6:33',
    apiReference: 'MAT.6.33',
    fallbackText:
      'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.',
    devotionalTitle: 'First Things First',
    devotional: [
      'Jesus does not dismiss our practical needs. He reorders them. When the kingdom of God and his righteousness become our first pursuit, the other concerns find their proper place.',
      'Seeking first is a matter of priority, not denial. It is the daily choice to orient our time, energy, and attention around what will last rather than what will fade.',
    ],
    pullQuote: 'You cannot seek everything first; something must take the first place.',
    prayer: [
      'King Jesus,',
      'Help me seek your kingdom before I seek my own comfort.',
      'Rearrange my priorities until you are first in my thoughts, my plans, and my spending.',
      'I trust that as I seek you, the rest will fall into place.',
      'Amen.',
    ],
  },
  {
    reference: '2 Timothy 1:7',
    apiReference: '2TI.1.7',
    fallbackText:
      'For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.',
    devotionalTitle: 'The Spirit We Have Been Given',
    devotional: [
      'Fear is a common visitor, but it is not the spirit God has placed within his people. We have been given power to act, love to connect, and a sound mind to discern. These are the tools of our new nature.',
      'When fear rises, we do not need to pretend it does not exist. We simply remind ourselves that it does not belong. It is a trespasser, not a tenant.',
    ],
    pullQuote: 'Fear may knock, but it does not have to be given a room.',
    prayer: [
      'Holy Spirit,',
      'Replace my fear with your power, your love, and your sound mind.',
      'When anxiety rises, remind me of the spirit I have been given.',
      'Let me face today with boldness, compassion, and clarity.',
      'Amen.',
    ],
  },
  {
    reference: 'James 1:2-3',
    apiReference: 'JAS.1.2',
    fallbackText:
      'My brethren, count it all joy when ye fall into divers temptations; knowing this, that the trying of your faith worketh patience.',
    devotionalTitle: 'Joy in the Furnace',
    devotional: [
      'James does not say trials are joyful in themselves. He says we can count them as joy because of what they produce. Trials test faith, and tested faith produces endurance.',
      'This is not denial of pain. It is a reframe of purpose. The same heat that melts wax hardens clay. Difficulty can either destroy us or deepen us, depending on how we respond.',
    ],
    pullQuote: 'Trials are not evidence of absence; they are the gymnasium of the soul.',
    prayer: [
      'Lord,',
      'When trials come today, help me count them as joy—not because they are pleasant, but because you use them.',
      'Strengthen my faith through testing and shape patience in me through pressure.',
      'Let every difficulty deepen my trust in you.',
      'Amen.',
    ],
  },
  {
    reference: 'John 14:27',
    apiReference: 'JHN.14.27',
    fallbackText:
      'Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.',
    devotionalTitle: 'A Peace Not of This World',
    devotional: [
      'The peace Jesus gives is not dependent on circumstances. Worldly peace rises and falls with conditions; his peace remains because it is rooted in his presence and finished work.',
      'To receive this peace is to allow it to guard the heart and mind. It does not remove the storm, but it calms the sailor. Jesus commands us not to let our hearts be troubled because he has already provided the peace they need.',
    ],
    pullQuote: 'His peace does not depend on the world being calm; it depends on him being near.',
    prayer: [
      'Prince of Peace,',
      'I receive the peace you leave with me.',
      'When my heart is troubled, remind me that your peace is not like the world\'s.',
      'Guard my heart and mind today, and keep me from fear.',
      'Amen.',
    ],
  },
  {
    reference: 'Romans 12:2',
    apiReference: 'ROM.12.2',
    fallbackText:
      'And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.',
    devotionalTitle: 'The Renewed Mind',
    devotional: [
      'Transformation begins in the mind. We are not merely called to behave differently but to think differently. The patterns of this world press us into their mold; the renewal of the mind frees us from it.',
      'This renewal is ongoing. It happens as we steep our minds in God\'s truth, allowing it to reshape our assumptions, desires, and categories. The will of God becomes clear to those whose minds have been retrained to see it.',
    ],
    pullQuote: 'You cannot live differently until you think differently.',
    prayer: [
      'Transforming God,',
      'Renew my mind today. Break the patterns this world has pressed into me.',
      'Help me see clearly what is good, acceptable, and perfect in your sight.',
      'Let my thoughts be shaped by your truth, not by the noise around me.',
      'Amen.',
    ],
  },
  {
    reference: '1 Peter 5:7',
    apiReference: '1PE.5.7',
    fallbackText: 'Casting all your care upon him; for he careth for you.',
    devotionalTitle: 'Cast, Do Not Carry',
    devotional: [
      'To cast is to throw, to release, to transfer the weight. We are not asked to minimize our cares but to hand them over. The reason we can cast them is because he cares for us.',
      'Carrying anxiety alone is a burden we were never designed to bear. God invites us to live as dependents, not as self-sufficient beings. Our cares become his because his love makes them his concern.',
    ],
    pullQuote: 'The cares you carry were never meant to be yours alone.',
    prayer: [
      'Caring Father,',
      'I cast my anxieties on you today—all of them, not just the manageable ones.',
      'Thank you that you care for me personally and persistently.',
      'Free me from the weight of carrying what you have offered to bear.',
      'Amen.',
    ],
  },
  {
    reference: 'Psalm 27:1',
    apiReference: 'PSA.27.1',
    fallbackText:
      'The Lord is my light and my salvation; whom shall I fear? the Lord is the strength of my life; of whom shall I be afraid?',
    devotionalTitle: 'Light, Salvation, Strength',
    devotional: [
      'David packs three titles into one verse: light for guidance, salvation for deliverance, and strength for endurance. To have the Lord is to have everything necessary for facing life.',
      'Fear loses its grip when we remember who is with us. The question "Whom shall I fear?" is not a denial of danger but a declaration of greater security. If the Lord is our light, the darkness does not have the final word.',
    ],
    pullQuote: 'Fear asks "what if"; faith answers "who is with me".',
    prayer: [
      'Lord, my light,',
      'Be my guidance when I cannot see the way.',
      'Be my salvation when I cannot save myself.',
      'Be my strength when I have none of my own.',
      'Amen.',
    ],
  },
  {
    reference: 'Isaiah 41:10',
    apiReference: 'ISA.41.10',
    fallbackText:
      'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.',
    devotionalTitle: 'Upheld by Righteousness',
    devotional: [
      'Three times God says "I will" in this single verse. He will strengthen, help, and uphold. The source of courage is not our own resolve but the repeated, emphatic promises of God.',
      'To be upheld by the right hand of his righteousness is to be supported by the very thing that secures his faithfulness. We are not held by our grip on him but by his grip on us.',
    ],
    pullQuote: 'You are upheld not by your grip, but by his.',
    prayer: [
      'Faithful God,',
      'I take you at your word today.',
      'Strengthen me in weakness, help me in need, and uphold me by your righteousness.',
      'Let fear be replaced by the confidence that you are with me.',
      'Amen.',
    ],
  },
  {
    reference: 'Luke 6:31',
    apiReference: 'LUK.6.31',
    fallbackText: 'And as ye would that men should do to you, do ye also to them likewise.',
    devotionalTitle: 'The Golden Rule',
    devotional: [
      'This simple rule requires imagination. Before acting, we must pause to imagine how we would want to be treated in the other person\'s place. It slows us down and softens our edges.',
      'The rule is active, not passive. It calls us to initiate kindness, to treat others not merely as they have treated us but as we would wish to be treated. It turns relationships toward grace.',
    ],
    pullQuote: 'Treat others not as they deserve, but as you would wish to be treated.',
    prayer: [
      'Lord,',
      'Before I speak or act today, help me imagine the other person\'s place.',
      'Make me kind in the moments where I would rather defend myself.',
      'Let the golden rule shape my relationships today.',
      'Amen.',
    ],
  },
  {
    reference: 'John 15:5',
    apiReference: 'JHN.15.5',
    fallbackText:
      'I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.',
    devotionalTitle: 'Abiding and Bearing',
    devotional: [
      'Branches do not produce fruit by straining. They produce fruit by remaining connected to the vine. The Christian life is less about producing results and more about maintaining connection.',
      'Without him we can do nothing of eternal value. This is not a condemnation but an invitation to rest in dependency. The fruit we long to bear grows naturally from a life that abides.',
    ],
    pullQuote: 'Fruitfulness is the overflow of abiding, not the product of striving.',
    prayer: [
      'True Vine,',
      'Keep me abiding in you today.',
      'Prune from me the branches that drain life, and strengthen the connection that bears fruit.',
      'Without you I can do nothing; with you, anything of value is possible.',
      'Amen.',
    ],
  },
  {
    reference: 'Psalm 91:1-2',
    apiReference: 'PSA.91.1',
    fallbackText:
      'He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty. I will say of the Lord, He is my refuge and my fortress: my God; in him will I trust.',
    devotionalTitle: 'The Secret Place',
    devotional: [
      'The secret place is not hidden from God; it is hidden in God. To dwell there is to live under his shadow, close enough to be covered by his presence. It is a place of intimacy and safety.',
      'Refuge and fortress are two images of protection. Refuge is for the moment of danger; fortress is for sustained security. God is both. We can run to him in crisis and remain in him for life.',
    ],
    pullQuote: 'The safest place in the world is the shadow of the Almighty.',
    prayer: [
      'Most High God,',
      'I choose to dwell in your secret place today.',
      'Be my refuge in trouble and my fortress in uncertainty.',
      'I say of you: you are my God, and in you I will trust.',
      'Amen.',
    ],
  },
  {
    reference: 'Nehemiah 8:10',
    apiReference: 'NEH.8.10',
    fallbackText:
      '...for the joy of the Lord is your strength.',
    devotionalTitle: 'Joy as Strength',
    devotional: [
      'Strength is often associated with effort, but here it is tied to joy. The joy of the Lord becomes a reservoir of strength that carries us through difficulty. It is not happiness based on circumstances; it is gladness rooted in God himself.',
      'When we are depleted, joy in God replenishes us. It reminds us that our story is held by a good God, that sin is forgiven, and that the future is secure. This joy is a strength the world cannot give or take.',
    ],
    pullQuote: 'Joy in God is not a luxury; it is the strength that keeps you standing.',
    prayer: [
      'Lord of joy,',
      'Let your joy be my strength today.',
      'Where I feel depleted, refresh me with the gladness of knowing you.',
      'Help me rejoice not in circumstances, but in who you are.',
      'Amen.',
    ],
  },
  {
    reference: 'Micah 6:8',
    apiReference: 'MIC.6.8',
    fallbackText:
      'He hath shewed thee, O man, what is good; and what doth the Lord require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?',
    devotionalTitle: 'What the Lord Requires',
    devotional: [
      'The prophet summarizes the life God desires in three phrases: do justly, love mercy, walk humbly. Justice addresses how we treat others; mercy shapes the spirit behind it; humility keeps us close to God.',
      'These three are inseparable. Justice without mercy becomes harsh; mercy without justice becomes enabling; both without humility drift from God. The fully formed life holds all three in balance.',
    ],
    pullQuote: 'The good life is just, merciful, and humble—not perfect, but directed toward God.',
    prayer: [
      'Lord,',
      'Show me what is good today.',
      'Help me act justly, love mercy, and walk humbly with you.',
      'Form my character until these three become the rhythm of my life.',
      'Amen.',
    ],
  },
];

export function getDayOfYear(date: Date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

export function getDailyVerseForDate(date: Date = new Date()): DailyVerse {
  const dayNumber = getDayOfYear(date);
  const index = dayNumber % curatedVerses.length;
  return curatedVerses[index];
}

export function formatVerseDate(date: Date = new Date()): string {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });
}
