// To add a lesson: copy an object, change id/title/content. Add more `sets` (arrays of questions) for alternate retakes.
// t: fill | tr | err. a = accepted answers (case/punctuation ignored).
const LESSONS=[
{id:1,emoji:'🔁',title:'Infinitive & Gerund',
intro:'When one verb follows another, the second takes the **infinitive** (to + verb) or the **gerund** (verb + -ing). The first verb decides which. The infinitive often points to a goal; the gerund names an activity.',
form:[['Infinitive','to + verb (bare after modals, let, make)','She wants **to leave**.'],['Gerund','verb + -ing','She enjoys **leaving** early.'],['Negative','not to + verb / not + -ing','She decided **not to leave**.']],
uses:['Infinitive after want, decide, hope, plan, manage, refuse, promise, agree: She decided **to study** abroad.','Infinitive for purpose: He went to the gym **to build** muscle.','Gerund after enjoy, avoid, finish, suggest, mind, keep, practise, deny: I enjoy **reading**.','Gerund after prepositions and as a subject: Thanks for **helping**. / **Swimming** is healthy.','Bare infinitive after modals, let, make: The teacher made us **repeat** it.','Meaning changes: stop **to smoke** (pause) vs stop **smoking** (quit); remember **to lock** (don\'t forget) vs remember **locking** (recall).'],
mistakes:[['She enjoys to read.','She enjoys **reading**.','Enjoy only takes the gerund.'],['I want going home.','I want **to go** home.','Want takes the infinitive.'],['He suggested to go out.','He suggested **going** out.','Suggest takes the gerund.'],['I look forward to meet you.','I look forward to **meeting** you.','"to" is a preposition here, so a gerund follows.'],['She made me to repeat it.','She made me **repeat** it.','Bare infinitive after make.']],
tips:['Biggest trap: "to" as a preposition (look forward to, be used to, object to) → gerund. Test: can a noun go there?','Reporting verbs: "Let\'s go," said Sam → Sam suggested going. Also refuse / promise / agree + to.','Purpose: He went out. He wanted to buy bread. → He went out to buy bread.'],
sets:[[
{t:'fill',q:'She enjoys ______ (cook) for her family.',a:['cooking']},
{t:'fill',q:'We decided ______ (leave) early.',a:['to leave']},
{t:'fill',q:'He is thinking of ______ (study) engineering.',a:['studying']},
{t:'tr',q:'"Let\'s go to the library," said Sara. → Sara suggested ______.',a:['going to the library']},
{t:'tr',q:"He didn't want to help us. → He refused ______.",a:['to help us']},
{t:'tr',q:'He went to the market. He wanted to buy vegetables. → He went to the market ______.',a:['to buy vegetables','in order to buy vegetables','so as to buy vegetables']},
{t:'err',q:'Correct the sentence: I am looking forward to see you next week.',a:['I am looking forward to seeing you next week',"I'm looking forward to seeing you next week"]},
{t:'err',q:'Correct the sentence: She avoided to answer the question.',a:['She avoided answering the question']}
]],
free:['Write one sentence about your studies using "manage" + infinitive.','Write one sentence using "be good at" + gerund.']},
{id:2,emoji:'⏪',title:'Past Perfect',
intro:'The past perfect shows an action that happened **before another past action or time**: "the past of the past".',
form:[['Affirmative','had + past participle','She **had left** before I arrived.'],['Negative',"hadn't + p.p.","She **hadn't left**."],['Question','Had + subject + p.p.?','**Had** she **left**?']],
uses:['Earlier action before a past one: When I got to the station, the train **had left**.','Before a past time: By 8 p.m., we **had finished** dinner.','Reported speech: He said he **had seen** the film.','With after / before / by the time / when: After he **had eaten**, he went out.'],
mistakes:[['When I arrived, the film already started.','When I arrived, the film **had** already started.','The earlier action needs the past perfect.'],['She had went home.','She had **gone** home.','Use the past participle.'],['I had visited Rabat last year.','I **visited** Rabat last year.','Only one past event → past simple.'],["He didn't had studied.","He **hadn't** studied.",'Never use did with had + p.p.']],
tips:['Time clues: before, after, by the time, already, when.','Transformation: "He finished. Then he went out." → After he had finished, he went out.','Reported speech: "I have seen it," he said → He said he had seen it.'],
sets:[[
{t:'fill',q:'When we arrived, the match ______ (already / start).',a:['had already started','had started already']},
{t:'fill',q:'She ______ (not / do) her homework, so the teacher was angry.',a:["hadn't done",'had not done']},
{t:'fill',q:'By the time he called me, I ______ (go) to bed.',a:['had gone','had already gone']},
{t:'tr',q:'He ate dinner. Then he watched TV. → After ______.',a:['he had eaten dinner, he watched TV','he had eaten his dinner, he watched TV']},
{t:'tr',q:'"I have lost my phone," she said. → She said ______.',a:['she had lost her phone','that she had lost her phone']},
{t:'tr',q:'They left the room. I came in after that. → When I came in, ______.',a:['they had left the room','they had already left the room']},
{t:'err',q:'Correct the sentence: When I got home, my sister already went out.',a:['When I got home, my sister had already gone out','When I got home my sister had gone out already']},
{t:'err',q:'Correct the sentence: He had ate before he came.',a:['He had eaten before he came']}
]],
free:['Write a sentence with "by the time" + past perfect.','Write a sentence about something you had done before today\'s lesson.']},
{id:3,emoji:'🌉',title:'Linking Words',
intro:'Linking words connect ideas and show the relationship: **contrast, cause, result, addition, purpose**. What comes after the linker matters (clause vs noun/-ing).',
form:[['Contrast (clause)','although, though, while','**Although** he was tired, he worked.'],['Contrast (noun / -ing)','despite, in spite of','**Despite** being tired, he worked.'],['Cause','because + clause / because of + noun','She stayed **because** she was ill.'],['Result','so, therefore, as a result','He didn\'t study, **so** he failed.'],['Purpose','to, in order to, so that','I study **in order to** pass.']],
uses:['Contrast: He is rich; **however**, he isn\'t happy.','Cause: The match was cancelled **because of** the storm.','Addition: He is smart. **Moreover**, he works hard.','Purpose: He spoke slowly **so that** everyone could understand.'],
mistakes:[['Despite he was tired, he worked.','**Although** he was tired / **Despite** being tired.','Despite needs a noun or -ing.'],['Although he was tired, but he worked.','Although he was tired, he worked.','Never although + but together.'],["She failed because of she didn't study.","She failed **because** she didn't study.",'Because of needs a noun.'],['He was ill, however he went to school.','He was ill; **however**, he went to school.','However needs a full stop or semicolon before it, comma after.'],['I study for pass.','I study **to** pass / **in order to** pass.','Purpose uses to + verb.']],
tips:['Fill-in: check the grammar after the gap first (clause or noun/-ing).','Transformation: Although it rained, we went out → Despite the rain, we went out.','Writing: use at least 3 different linkers for coherence marks.'],
sets:[[
{t:'fill',q:'______ he was very tired, he finished the exercise. (Although / Despite)',a:['although']},
{t:'fill',q:'She missed the bus ______ she got up late. (because / because of)',a:['because']},
{t:'fill',q:'He worked hard; ______, he failed the test. (so / however)',a:['however']},
{t:'tr',q:'Although it was cold, we went swimming. → Despite ______.',a:['the cold, we went swimming','the cold weather, we went swimming']},
{t:'tr',q:'He was late because of the traffic. → He was late because ______.',a:['there was traffic','there was heavy traffic','there was a lot of traffic','the traffic was heavy']},
{t:'tr',q:'She studied hard. She wanted to pass. → She studied hard in order ______.',a:['to pass']},
{t:'err',q:'Correct the sentence: Despite he was ill, he came to school.',a:['Although he was ill, he came to school','Despite being ill, he came to school','Despite his illness, he came to school']},
{t:'err',q:"Correct the sentence: Although she is rich, but she isn't happy.",a:["Although she is rich, she isn't happy","Although she is rich, she is not happy"]}
]],
free:['Write a sentence with "however".','Write a sentence with "so that".']},
{id:4,emoji:'🎯',title:'Passive Voice',soon:1},{id:5,emoji:'⏳',title:'Future Perfect',soon:1},{id:6,emoji:'🔀',title:'Conditional 3',soon:1},{id:7,emoji:'💬',title:'Reported Speech',soon:1},{id:8,emoji:'✨',title:'Wish / If Only',soon:1},{id:9,emoji:'🔗',title:'Relative Clauses',soon:1},{id:10,emoji:'🧩',title:'Modals',soon:1},{id:11,emoji:'🚀',title:'Phrasal Verbs',soon:1}
];
