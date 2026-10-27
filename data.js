// To add a lesson: copy an object, change id/title/content. Add more `sets` (arrays of questions) for alternate retakes.
// t: fill | tr | err. a = accepted answers (case/punctuation ignored).
// Source note: only data.js was attached; lessons 4–11 are drafted from standard grammar conventions because the referenced lesson document was not included.
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
],[
{t:'fill',q:'My brother promised ______ (help) me with the project.',a:['to help']},
{t:'fill',q:'They finished ______ (paint) the classroom yesterday.',a:['painting']},
{t:'fill',q:'You should avoid ______ (spend) too much money.',a:['spending']},
{t:'tr',q:'"I will call you," Lina said. → Lina promised ______.',a:['to call me','to call you']},
{t:'tr',q:'He went to the shop because he wanted to buy milk. → He went to the shop ______.',a:['to buy milk','in order to buy milk','so as to buy milk']},
{t:'tr',q:'"Why don\'t we take a taxi?" Omar said. → Omar suggested ______.',a:['taking a taxi']},
{t:'err',q:'Correct the sentence: She is interested in to learn Spanish.',a:['She is interested in learning Spanish']},
{t:'err',q:'Correct the sentence: They agreed helping us.',a:['They agreed to help us']}
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
],[
{t:'fill',q:'By the time the doctor arrived, the patient ______ (fall) asleep.',a:['had fallen']},
{t:'fill',q:'They ______ (never / see) snow before they visited Ifrane.',a:['had never seen','had not seen']},
{t:'fill',q:'After Nadia ______ (finish) her homework, she went out.',a:['had finished']},
{t:'tr',q:'The train left. We reached the station later. → When we reached the station, ______.',a:['the train had left','the train had already left']},
{t:'tr',q:'"I had never flown before," he said. → He said ______.',a:['he had never flown before','that he had never flown before']},
{t:'tr',q:'She saved enough money. Then she bought a laptop. → After ______.',a:['she had saved enough money, she bought a laptop','she had saved enough money she bought a laptop']},
{t:'err',q:'Correct the sentence: They had wrote the report before lunch.',a:['They had written the report before lunch']},
{t:'err',q:'Correct the sentence: By the time we arrived, the film has started.',a:['By the time we arrived, the film had started']}
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
],[
{t:'fill',q:'______ the heavy rain, the match continued. (Although / Despite)',a:['despite']},
{t:'fill',q:'We took a taxi ______ we would not miss the train. (so that / because of)',a:['so that']},
{t:'fill',q:'Mona was ill. ______, she went to the exam. (However / Therefore)',a:['however']},
{t:'tr',q:'Although he was poor, he was generous. → Despite ______.',a:['his poverty, he was generous','being poor, he was generous']},
{t:'tr',q:'The road was closed because there was an accident. → The road was closed because of ______.',a:['an accident']},
{t:'tr',q:'He wants to improve his English. He practises every day. → He practises every day so that ______.',a:['he can improve his english','he may improve his english']},
{t:'err',q:'Correct the sentence: Because of he was tired, he went to bed early.',a:['Because he was tired, he went to bed early']},
{t:'err',q:'Correct the sentence: She studied hard, therefore she passed.',a:['She studied hard; therefore, she passed','She studied hard. Therefore, she passed']}
]],
free:['Write a sentence with "however".','Write a sentence with "so that".']},

{id:4,emoji:'🎯',title:'Passive Voice',
intro:'The **passive voice** focuses on the person or thing receiving an action. Form it with the correct tense of **be + past participle**. Use **by + agent** when the doer is important; omit it when it is unknown or obvious.',
form:[['Present simple','am / is / are + past participle','English **is spoken** worldwide.'],['Past simple','was / were + past participle','The window **was broken**.'],['Present perfect','has / have been + past participle','The work **has been finished**.'],['Future / modal','will be / modal + be + past participle','The results **will be announced**.']],
uses:['Use the passive when the action or result matters more than the doer: The road **was repaired** yesterday.','Present simple: The company makes these phones. → These phones **are made** by the company.','Past simple: Someone stole my bike. → My bike **was stolen**.','Present perfect: They have completed the project. → The project **has been completed**.','With modals: You must wear a helmet. → A helmet **must be worn**.','The object of the active sentence becomes the subject of the passive sentence; keep the original tense.'],
mistakes:[['The letter wrote yesterday.','The letter **was written** yesterday.','Passive requires be + past participle.'],['The rooms are clean every day by staff.','The rooms **are cleaned** every day by the staff.','Use the past participle, not the bare verb.'],['The work has finished.','The work **has been finished**.','Present perfect passive needs has/have been + p.p.'],['The thief was catch by the police.','The thief was **caught** by the police.','Use the past participle of irregular verbs.']],
tips:['Find the tense in the active sentence first; then change the object into the subject.','The tense is carried by **be**: makes → is made; made → was made; has made → has been made.','Do not add "by someone" when the agent is unknown or unimportant.'],
sets:[[
{t:'fill',q:'The classrooms ______ (clean) every afternoon.',a:['are cleaned']},
{t:'fill',q:'The bridge ______ (build) in 1998.',a:['was built']},
{t:'fill',q:'The results ______ (announce) tomorrow.',a:['will be announced']},
{t:'tr',q:'People speak Arabic in Morocco. → Arabic ______ in Morocco.',a:['is spoken']},
{t:'tr',q:'The police arrested the thief. → The thief ______ by the police.',a:['was arrested']},
{t:'tr',q:'They have repaired the road. → The road ______.',a:['has been repaired']},
{t:'err',q:'Correct the sentence: The emails was sent this morning.',a:['The emails were sent this morning']},
{t:'err',q:'Correct the sentence: This product makes in Morocco.',a:['This product is made in Morocco']}
],[
{t:'fill',q:'These bags ______ (make) from recycled plastic.',a:['are made']},
{t:'fill',q:'The missing child ______ (find) last night.',a:['was found']},
{t:'fill',q:'All applications must ______ (submit) before Friday.',a:['be submitted']},
{t:'tr',q:'Someone has stolen my bicycle. → My bicycle ______.',a:['has been stolen']},
{t:'tr',q:'The school will publish the timetable. → The timetable ______ by the school.',a:['will be published']},
{t:'tr',q:'You should protect personal information. → Personal information ______.',a:['should be protected']},
{t:'err',q:'Correct the sentence: The meals are prepare by the cook.',a:['The meals are prepared by the cook']},
{t:'err',q:'Correct the sentence: The stadium built in 2005.',a:['The stadium was built in 2005']}
]],
free:['Write two sentences about your school, using the passive voice in two different tenses.','Write a sentence about a useful invention using the passive voice.']},

{id:5,emoji:'⏳',title:'Future Perfect',
intro:'Use the **future perfect** for an action that will be completed before a particular time or another future event. Form it with **will have + past participle**.',
form:[['Affirmative','subject + will have + past participle','By Friday, I **will have finished**.'],['Negative','subject + will not have + past participle','She **will not have arrived** by noon.'],['Question','Will + subject + have + past participle?','**Will** they **have completed** it?']],
uses:['Completion before a future deadline: By next June, she **will have graduated**.','Often used with **by**, **by the time**, **before**, and a future time expression.','By the time you arrive, we **will have prepared** dinner.','It can describe an expected result at a point in the future: In ten years, scientists **will have developed** new treatments.'],
mistakes:[['By tomorrow, I will finished the work.','By tomorrow, I **will have finished** the work.','The future perfect needs will have + past participle.'],['She will has left by 8.','She **will have left** by 8.','Use have after will, not has.'],['By next year, he will have went abroad.','By next year, he will have **gone** abroad.','Use the past participle.'],['When you will have arrived, call me.','When you **have arrived**, call me.','Do not usually use will in a time clause with when.']],
tips:['Look for a future deadline introduced by **by** or **by the time**.','Structure: will + have + the past participle, even with he/she/it.','Compare: "I will finish at 6" (future action) vs "I will have finished by 6" (completed before 6).'],
sets:[[
{t:'fill',q:'By 9 p.m., we ______ (finish) the assignment.',a:['will have finished']},
{t:'fill',q:'By next month, Salma ______ (save) enough money.',a:['will have saved']},
{t:'fill',q:'They ______ (not / complete) the repairs by Monday.',a:['will not have completed','will not have finished','wont have completed','wont have finished']},
{t:'tr',q:'I expect to graduate before 2030. → By 2030, I ______.',a:['will have graduated']},
{t:'tr',q:'The guests will arrive at 8. We will prepare dinner before that. → By the time the guests arrive, we ______.',a:['will have prepared dinner']},
{t:'tr',q:'She will finish the book before the holiday ends. → By the end of the holiday, she ______.',a:['will have finished the book','will have read the book']},
{t:'err',q:'Correct the sentence: By Friday, he will has completed the task.',a:['By Friday, he will have completed the task']},
{t:'err',q:'Correct the sentence: By the time you arrive, we will have ate.',a:['By the time you arrive, we will have eaten']}
],[
{t:'fill',q:'By the end of this course, I ______ (learn) many new expressions.',a:['will have learned','will have learnt']},
{t:'fill',q:'The workers ______ (not / finish) the road by the start of winter.',a:['will not have finished','wont have finished','will not have completed','wont have completed']},
{t:'fill',q:'______ you ______ (write) the report by tomorrow morning?',a:['will you have written']},
{t:'tr',q:'The plane is due at noon. We will reach the airport before noon. → By noon, we ______.',a:['will have reached the airport']},
{t:'tr',q:'He plans to pay all his debts before he turns thirty. → By the time he turns thirty, he ______.',a:['will have paid all his debts']},
{t:'tr',q:'The scientists expect to discover a solution before 2040. → By 2040, the scientists ______.',a:['will have discovered a solution']},
{t:'err',q:'Correct the sentence: Will they have finish the work by 5 p.m.?',a:['Will they have finished the work by 5 p.m.']},
{t:'err',q:'Correct the sentence: By next week, I will have wrote three essays.',a:['By next week, I will have written three essays']}
]],
free:['Write two things you will have done by the end of this school year.','Write a sentence about technology using the future perfect and "by 2050".']},

{id:6,emoji:'🔀',title:'Conditional 3',
intro:'The **third conditional** describes an unreal past situation and its imagined past result. The situation did not happen, so the result is only hypothetical.',
form:[['If-clause','if + past perfect','If I **had studied** harder, ...'],['Result clause','would have + past participle','... I **would have passed**.'],['Negative','would not have + past participle','She **would not have missed** the bus.']],
uses:['Regret about the past: If I **had left** earlier, I **would have caught** the train.','Imagined alternative result: If they **had taken** a map, they **would not have got** lost.','The if-clause can come first or second: I would have called you if I had known.','Could have and might have can replace would have when the meaning is ability or possibility: If he had tried, he **could have won**.'],
mistakes:[['If I would have known, I would have helped.','If I **had known**, I would have helped.','Do not normally use would have in the if-clause.'],['If she had went, she would have seen him.','If she had **gone**, she would have seen him.','Use the past participle after had.'],['If he studied, he would have passed.','If he **had studied**, he would have passed.','Third conditional needs past perfect in the if-clause.'],['If they had left early, they would arrived on time.','If they had left early, they **would have arrived** on time.','The result uses would have + past participle.']],
tips:['Remember the pattern: **If + had + past participle, would have + past participle**.','Use it for a past situation that did not happen, not for a real future possibility.','The clauses can switch order; when the if-clause comes second, a comma is usually unnecessary.'],
sets:[[
{t:'fill',q:'If I ______ (study) harder, I would have passed the exam.',a:['had studied']},
{t:'fill',q:'If they had left earlier, they ______ (catch) the train.',a:['would have caught']},
{t:'fill',q:'She would not have been late if she ______ (take) a taxi.',a:['had taken']},
{t:'tr',q:'I did not know about the meeting, so I did not attend. → If I ______, I would have attended.',a:['had known about the meeting']},
{t:'tr',q:'He did not bring a map, so he got lost. → If he had brought a map, he ______.',a:['would not have got lost','would not have gotten lost','wouldnt have got lost','wouldnt have gotten lost']},
{t:'tr',q:'They did not practise, so they lost the match. → If they had practised, they ______.',a:['would have won the match','might have won the match','could have won the match']},
{t:'err',q:'Correct the sentence: If I would have seen you, I would have said hello.',a:['If I had seen you, I would have said hello']},
{t:'err',q:'Correct the sentence: If she had took the medicine, she would have felt better.',a:['If she had taken the medicine, she would have felt better']}
],[
{t:'fill',q:'If we ______ (book) earlier, we would have paid less.',a:['had booked']},
{t:'fill',q:'He would have won the race if he ______ (not / fall).',a:['had not fallen','hadnt fallen']},
{t:'fill',q:'If you had told me, I ______ (help) you.',a:['would have helped']},
{t:'tr',q:'She forgot her umbrella, so she got wet. → If she had remembered her umbrella, she ______.',a:['would not have got wet','would not have gotten wet','wouldnt have got wet','wouldnt have gotten wet']},
{t:'tr',q:'I missed the bus because I woke up late. → If I had woken up earlier, I ______.',a:['would not have missed the bus','would have caught the bus']},
{t:'tr',q:'They did not check the weather, so the trip was cancelled. → If they had checked the weather, the trip ______.',a:['might not have been cancelled','may not have been cancelled']},
{t:'err',q:'Correct the sentence: If they had knew the truth, they would have acted differently.',a:['If they had known the truth, they would have acted differently']},
{t:'err',q:'Correct the sentence: If he had trained more, he would won the competition.',a:['If he had trained more, he would have won the competition']}
]],
free:['Write a third conditional sentence about a missed opportunity.','Write a third conditional sentence about something you would have done differently last year.']},

{id:7,emoji:'💬',title:'Reported Speech',
intro:'**Reported speech** tells someone what another person said without repeating the exact words. When the reporting verb is in the past, tenses and time expressions often move back.',
form:[['Present simple → past simple','am/is → was; do/does → did','"I am tired." → He said he **was** tired.'],['Present perfect → past perfect','have/has + p.p. → had + p.p.','"I have finished." → She said she **had finished**.'],['Will → would','will + verb → would + verb','"I will help." → He said he **would help**.'],['Questions','ask + if/whether or question word + statement order','"Are you ready?" → He asked if I **was ready**.'],['Commands / requests','tell/ask + object + (not) to + verb','"Close the door." → She told me **to close** the door.']],
uses:['Statements: use **say (that)** or **tell + object (that)**; change pronouns to match the speaker and listener.','Yes/no questions: use **asked if/whether** and normal statement word order.','Wh-questions: keep the question word, but do not use question word order: "Where do you live?" → He asked where I lived.','Commands: use **told/asked + object + to + base verb**; negative commands use **not to**.','Common shifts include today → that day, tomorrow → the next day, yesterday → the day before, and here → there when the context changes.'],
mistakes:[['He said me that he was busy.','He **told me** that he was busy.','Use tell + object, or say without a direct object.'],['She asked where did I live.','She asked where I **lived**.','Reported questions use statement word order.'],['He told me open the window.','He told me **to open** the window.','Commands need to + base verb.'],['Maya said she is tired yesterday.','Maya said she **was** tired yesterday.','Backshift the tense when the reporting verb is past and the context requires it.']],
tips:['Check pronouns carefully: "I" may become he/she, and "my" may become his/her.','In reported questions, remove do/does/did inversion: "What did he say?" → She asked what he had said.','Commands use **told/asked + person + to / not to**.'],
sets:[[
{t:'tr',q:'Sara said, "I am busy." → Sara said that she ______.',a:['was busy']},
{t:'tr',q:'Ali said, "I have finished my homework." → Ali said that he ______.',a:['had finished his homework']},
{t:'tr',q:'Omar said, "I will call you tomorrow." → Omar said that he ______.',a:['would call me the next day','would call me tomorrow','would call you the next day','would call you tomorrow']},
{t:'tr',q:'She asked me, "Do you like coffee?" → She asked me ______.',a:['if i liked coffee','whether i liked coffee']},
{t:'tr',q:'The teacher said to us, "Open your books." → The teacher told us ______.',a:['to open our books']},
{t:'tr',q:'He asked me, "Where do you live?" → He asked me ______.',a:['where i lived']},
{t:'err',q:'Correct the sentence: She asked me where did I work.',a:['She asked me where I worked']},
{t:'err',q:'Correct the sentence: He told that he was ill.',a:['He said that he was ill','He told me that he was ill']}
],[
{t:'tr',q:'Mina said, "I can swim." → Mina said that she ______.',a:['could swim']},
{t:'tr',q:'The boy said, "I saw the accident yesterday." → The boy said that he ______.',a:['had seen the accident the day before','had seen the accident yesterday']},
{t:'tr',q:'The mother said to her son, "Do not touch the stove." → The mother told her son ______.',a:['not to touch the stove']},
{t:'tr',q:'He asked, "Have you finished?" → He asked me ______.',a:['if i had finished','whether i had finished']},
{t:'tr',q:'Nora asked me, "Why are you crying?" → Nora asked me ______.',a:['why i was crying']},
{t:'tr',q:'The manager said, "We must leave now." → The manager said that they ______.',a:['had to leave then','must leave then','had to leave at that moment']},
{t:'err',q:'Correct the sentence: He asked me if was I ready.',a:['He asked me if I was ready','He asked me whether I was ready']},
{t:'err',q:'Correct the sentence: My father told me do not be late.',a:['My father told me not to be late']}
]],
free:['Report something a friend told you recently, changing the pronouns where necessary.','Write one reported question and one reported command.']},

{id:8,emoji:'✨',title:'Wish / If Only',
intro:'Use **wish** and **if only** to express regret, dissatisfaction, or a desire for a different situation. The verb form shows whether the wish concerns the present, the past, or a change you want.',
form:[['Present situation','wish / if only + past simple','I wish I **knew** the answer.'],['Past regret','wish / if only + past perfect','If only I **had studied** harder.'],['Desired change','wish + subject + would + base verb','I wish it **would stop** raining.'],['Ability','wish + could + base verb','I wish I **could travel** more.']],
uses:['Present unreal situation: I wish I **lived** near the beach. The past simple refers to an unreal present.','Past regret: She wishes she **had accepted** the offer.','Annoying habit or desired change: I wish my neighbours **would be** quieter.','Lack of ability: If only I **could speak** Japanese.','In formal grammar, use **were** for all subjects in the unreal present: I wish I **were** taller.'],
mistakes:[['I wish I know the answer.','I wish I **knew** the answer.','Use the past simple for an unreal present.'],['If only I studied harder last year.','If only I **had studied** harder last year.','Use past perfect for regret about the past.'],['I wish he will stop shouting.','I wish he **would stop** shouting.','Use would for a desired change or annoying behaviour.'],['She wishes she can drive.','She wishes she **could drive**.','Use could to express unreal ability.']],
tips:['Present wish: past simple. Past regret: past perfect. Desired change: would + base verb.','**If only** has the same grammar as **wish**, but often expresses stronger feeling.','Do not use "wish + would" simply for facts about yourself; use the past simple or could instead.'],
sets:[[
{t:'fill',q:'I wish I ______ (know) the answer now.',a:['knew']},
{t:'fill',q:'If only we ______ (leave) earlier yesterday!',a:['had left']},
{t:'fill',q:'I wish my brother ______ (stop) borrowing my clothes without asking.',a:['would stop']},
{t:'tr',q:'I do not have enough money to buy a laptop. → I wish I ______.',a:['had enough money to buy a laptop']},
{t:'tr',q:'She did not study, so she failed the exam. → She wishes she ______.',a:['had studied for the exam','had studied harder']},
{t:'tr',q:'I am unable to speak French. → If only I ______.',a:['could speak french']},
{t:'err',q:'Correct the sentence: I wish I am taller.',a:['I wish I were taller','I wish I was taller']},
{t:'err',q:'Correct the sentence: If only they would have listened to me.',a:['If only they had listened to me']}
],[
{t:'fill',q:'He wishes he ______ (not / make) that mistake last night.',a:['had not made','hadnt made']},
{t:'fill',q:'I wish it ______ (not / rain) so much here.',a:['did not rain','didnt rain','would not rain','wouldnt rain']},
{t:'fill',q:'If only I ______ (can) remember people\'s names!',a:['could']},
{t:'tr',q:'I live far from my school, and I dislike it. → I wish I ______.',a:['lived closer to my school','did not live so far from my school','didnt live so far from my school']},
{t:'tr',q:'He forgot his passport, so he could not travel. → If only he ______.',a:['had not forgotten his passport','hadnt forgotten his passport']},
{t:'tr',q:'My neighbours play loud music every night. → I wish my neighbours ______.',a:['would stop playing loud music every night']},
{t:'err',q:'Correct the sentence: She wishes she can come with us.',a:['She wishes she could come with us']},
{t:'err',q:'Correct the sentence: I wish I had went to the concert.',a:['I wish I had gone to the concert']}
]],
free:['Write one wish about your present life and one wish expressing regret about the past.','Write a sentence with "If only" about an ability you would like to have.']},

{id:9,emoji:'🔗',title:'Relative Clauses',
intro:'A **relative clause** adds information about a noun. Use **who** for people, **which** for things, **whose** for possession, and **where** for places. **That** can replace who or which in many defining clauses.',
form:[['People','who / that','The student **who won** is my friend.'],['Things','which / that','The book **that I bought** is useful.'],['Possession','whose + noun','The girl **whose bag was lost** is here.'],['Places','where','This is the town **where I grew up**.']],
uses:['Defining clauses identify exactly which person or thing you mean: The man **who lives next door** is a doctor. Do not use commas.','Non-defining clauses add extra information and use commas: My sister, **who lives in Rabat**, is a teacher. Do not use **that** in these clauses.','Use **whose** to show possession: I met a writer **whose books are famous**.','Use **where** for a place and **when** for a time: That is the café **where we met**; I remember the day **when we met**.','A relative pronoun can be omitted in some defining clauses when it is the object: The film (that) we watched was excellent.'],
mistakes:[['The woman which called you is here.','The woman **who** called you is here.','Use who for people.'],['My laptop, that I bought last year, is broken.','My laptop, **which** I bought last year, is broken.','Do not use that in a non-defining clause.'],['This is the house who I grew up.','This is the house **where** I grew up.','Use where for a place.'],['The boy who his father is a doctor won.','The boy **whose father is a doctor** won.','Whose shows possession.']],
tips:['Decide what the pronoun refers to: person, thing, possession, place, or time.','Defining information is essential and has no commas; non-defining information is extra and uses commas.','In a defining clause, the object pronoun may be omitted: The person (who/that) I met was kind.'],
sets:[[
{t:'fill',q:'The woman ______ lives next door is a doctor. (who / where)',a:['who']},
{t:'fill',q:'That is the school ______ my mother teaches. (where / whose)',a:['where']},
{t:'fill',q:'I met a student ______ brother studies medicine. (whose / which)',a:['whose']},
{t:'tr',q:'I bought a phone. It takes excellent photos. → I bought a phone ______.',a:['that takes excellent photos','which takes excellent photos']},
{t:'tr',q:'The man is my uncle. You met him yesterday. → The man ______ is my uncle.',a:['whom you met yesterday','who you met yesterday','that you met yesterday','you met yesterday']},
{t:'tr',q:'Marrakesh is a city. Many tourists visit it. → Marrakesh is a city ______.',a:['which many tourists visit','that many tourists visit','many tourists visit']},
{t:'err',q:'Correct the sentence: My brother, that lives in Agadir, is a student.',a:['My brother, who lives in Agadir, is a student']},
{t:'err',q:'Correct the sentence: This is the restaurant which we had dinner.',a:['This is the restaurant where we had dinner','This is the restaurant at which we had dinner']}
],[
{t:'fill',q:'The book ______ you lent me was fascinating. (which / whose)',a:['which','that']},
{t:'fill',q:'I remember the day ______ we first met. (when / who)',a:['when']},
{t:'fill',q:'The artist ______ paintings won the prize is from Morocco. (whose / where)',a:['whose']},
{t:'tr',q:'A teacher helped me. Her advice was useful. → The teacher ______ gave me useful advice.',a:['whose advice was useful','who gave me useful advice']},
{t:'tr',q:'This is the village. My father was born there. → This is the village ______.',a:['where my father was born','in which my father was born']},
{t:'tr',q:'The laptop is expensive. I want to buy it. → The laptop ______ is expensive.',a:['which i want to buy','that i want to buy','i want to buy']},
{t:'err',q:'Correct the sentence: The woman whose lives here is a nurse.',a:['The woman who lives here is a nurse']},
{t:'err',q:'Correct the sentence: My car, that is ten years old, still works well.',a:['My car, which is ten years old, still works well']}
]],
free:['Write two sentences about people you know, using who and whose.','Describe a place you like using a relative clause with where.']},

{id:10,emoji:'🧩',title:'Modals',
intro:'**Modal verbs** express ability, permission, advice, obligation, prohibition, possibility, and deduction. A modal is followed by the **base form** of a verb, without **to** (except in expressions such as have to and ought to).',
form:[['Ability','can / could','She **can speak** three languages.'],['Advice','should / ought to','You **should revise** regularly.'],['Obligation','must / have to','You **must wear** a seat belt.'],['Prohibition','must not / cannot','You **must not park** here.'],['Possibility','may / might / could','It **might rain** later.'],['Past deduction','must have / can\'t have + p.p.','He **must have forgotten**.']],
uses:['**Can/could** express ability; **may/can** can ask for or give permission.','**Must** and **have to** express obligation; **must not** means prohibited, while **do not have to** means not necessary.','**Should/ought to** give advice.','**May/might/could** express possibility; might often sounds less certain.','**Must have + past participle** expresses a strong deduction about the past; **can\'t have + past participle** expresses that something was impossible.','Modal + base verb: She can **drive**, not *can drives* or *can to drive*.'],
mistakes:[['She can to swim.','She can **swim**.','Do not use to after a modal.'],['You mustn\'t come early if you don\'t want to.','You **don\'t have to** come early if you don\'t want to.','Must not means forbidden; do not have to means unnecessary.'],['He should studies more.','He should **study** more.','Use the base form after should.'],['She must have forget her keys.','She must have **forgotten** her keys.','Past deductions use have + past participle.']],
tips:['Pay attention to meaning: **mustn\'t** = not allowed; **don\'t have to** = not necessary.','After can, should, must, may, and might, use the base verb without **to**.','For past deduction, use modal + have + past participle: must have left, might have missed, can\'t have known.'],
sets:[[
{t:'fill',q:'You ______ wear a helmet when riding this motorbike. (obligation)',a:['must','have to']},
{t:'fill',q:'You ______ smoke in the hospital. It is prohibited. (must not / do not have to)',a:['must not','mustnt']},
{t:'fill',q:'You look exhausted. You ______ get some rest. (advice)',a:['should','ought to']},
{t:'tr',q:'It is not necessary for you to bring food. → You ______ bring food.',a:['do not have to','dont have to','need not','neednt']},
{t:'tr',q:'Perhaps she missed the bus. → She ______ the bus.',a:['may have missed','might have missed','could have missed']},
{t:'tr',q:'I am sure he forgot the appointment. → He ______ the appointment.',a:['must have forgotten']},
{t:'err',q:'Correct the sentence: My little sister can speaks Spanish.',a:['My little sister can speak Spanish']},
{t:'err',q:'Correct the sentence: You must to show your ticket.',a:['You must show your ticket']}
],[
{t:'fill',q:'When I was five, I ______ already read simple books. (past ability)',a:['could']},
{t:'fill',q:'You ______ use your phone during the exam. It is forbidden.',a:['must not','mustnt','cannot','cant']},
{t:'fill',q:'Take an umbrella. It ______ rain this afternoon. (possibility)',a:['may','might','could']},
{t:'tr',q:'It is a good idea for you to apologise. → You ______.',a:['should apologise','ought to apologise']},
{t:'tr',q:'I am certain they are at home because the lights are on. → They ______ at home.',a:['must be']},
{t:'tr',q:'It was impossible for him to finish the task in one minute. → He ______ the task in one minute.',a:['cannot have finished','could not have finished','couldnt have finished','cant have finished']},
{t:'err',q:'Correct the sentence: She must has forgotten her password.',a:['She must have forgotten her password']},
{t:'err',q:'Correct the sentence: You don\'t have to park here; it is forbidden.',a:['You must not park here','You mustnt park here','You cannot park here']}
]],
free:['Write three pieces of advice for a student preparing for the Bac, using modal verbs.','Write two sentences about what might have happened yesterday and what must have happened.']},

{id:11,emoji:'🚀',title:'Phrasal Verbs',
intro:'A **phrasal verb** combines a verb with a particle (such as up, off, out, or after) to create a meaning that may differ from the main verb. Learn common combinations as complete expressions.',
form:[['Separable','verb + object + particle, or verb + particle + noun','Please **turn the light off** / **turn off the light**.'],['Pronoun object','verb + pronoun + particle','Please **turn it off** (not *turn off it*).'],['Inseparable','verb + particle + object','I **look after my sister**.'],['Three-word verb','verb + particle + preposition + object','We **look forward to the trip**.']],
uses:['**give up** = stop doing something: He gave up smoking.','**look after** = take care of: She looks after her younger brother.','**put off** = postpone: They put off the meeting.','**find out** = discover information: I found out the truth.','**run out of** = have none left: We ran out of water.','**turn down** = reject an offer; **take off** = leave the ground or remove clothing; **look forward to** = feel pleased about a future event.'],
mistakes:[['She looks her little brother after.','She **looks after** her little brother.','Look after is inseparable.'],['Please turn off it.','Please **turn it off**.','A pronoun object goes between a separable phrasal verb and its particle.'],['We ran out water.','We **ran out of water**.','The expression is run out of something.'],['I look forward to see you.','I **look forward to seeing** you.','Here, to is a preposition, so it takes a noun or gerund.']],
tips:['For separable phrasal verbs, a noun can often go in either position, but a pronoun goes in the middle: turn the TV off / turn it off.','Some phrasal verbs are inseparable: look after a child, run into a friend.','Use the context to identify meaning: **take off** can mean remove clothing or leave the ground.'],
sets:[[
{t:'fill',q:'Could you ______ my little sister while I am away? (look after / look up)',a:['look after']},
{t:'fill',q:'They had to ______ the meeting until next week. (put off / take off)',a:['put off']},
{t:'fill',q:'We have ______ milk, so I will go to the shop. (run out of / look after)',a:['run out of']},
{t:'tr',q:'He stopped smoking last year. → He ______ smoking last year.',a:['gave up']},
{t:'tr',q:'Please switch the television off. → Please ______.',a:['turn the television off','turn off the television','turn it off']},
{t:'tr',q:'I discovered the answer by searching online. → I ______ the answer online.',a:['found out']},
{t:'err',q:'Correct the sentence: I am looking forward to meet you.',a:['I am looking forward to meeting you']},
{t:'err',q:'Correct the sentence: She turned off it before leaving.',a:['She turned it off before leaving']}
],[
{t:'fill',q:'The plane will ______ at 6:30 a.m. (take off / give up)',a:['take off']},
{t:'fill',q:'He ______ the job offer because the salary was too low. (turned down / looked after)',a:['turned down']},
{t:'fill',q:'I need to ______ what time the train leaves. (find out / run out of)',a:['find out']},
{t:'tr',q:'Please remove your shoes before entering. → Please ______ before entering.',a:['take off your shoes','take your shoes off','take them off']},
{t:'tr',q:'We are excited about seeing our cousins. → We are ______ seeing our cousins.',a:['looking forward to']},
{t:'tr',q:'The match was postponed because of the rain. → They ______ the match because of the rain.',a:['put off']},
{t:'err',q:'Correct the sentence: I ran out bread yesterday.',a:['I ran out of bread yesterday']},
{t:'err',q:'Correct the sentence: Can you look after it my cat this weekend?',a:['Can you look after my cat this weekend']}
]],
free:['Write a short paragraph about your daily routine using at least three different phrasal verbs.','Write two sentences using one separable and one inseparable phrasal verb.']}
];
