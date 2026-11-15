const $=s=>document.querySelector(s),app=$('#app');
let S={};try{S=JSON.parse(localStorage.getItem('ebac'))||{}}catch(e){}
const save=()=>{try{localStorage.setItem('ebac',JSON.stringify(S))}catch(e){}};
const st=id=>{const s=S[id]||(S[id]={});s.set=s.set||0;s.draft=s.draft||{};s.free=s.free||{};if(s.res===undefined)s.res=null;return s};
const n=s=>String(s).toLowerCase().replace(/[’‘]/g,"'").replace(/[^a-z0-9 ]/g,'').replace(/\s+/g,' ').trim();
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fm=s=>esc(s).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');
// answers are stored without apostrophes/capitals for matching; restore them for display
const CT={wont:"won't",dont:"don't",didnt:"didn't",doesnt:"doesn't",wouldnt:"wouldn't",couldnt:"couldn't",shouldnt:"shouldn't",hadnt:"hadn't",hasnt:"hasn't",isnt:"isn't",mustnt:"mustn't",neednt:"needn't",cant:"can't"};
const disp=s=>s.replace(/\b[a-z]+\b/g,w=>CT[w]||w).replace(/\bi\b/g,'I').replace(/\bfrench\b/g,'French').replace(/\benglish\b/g,'English');
const models=a=>{const seen=new Set();return a.filter(x=>{const k=n(x);if(seen.has(k))return false;seen.add(k);return true}).map(disp)};
function home(){
 app.innerHTML=`<section class="hero fade"><span class="pill">Bac English · Grammar</span><h1>Master English.<br><span class="grad">One lesson at a time.</span></h1><p class="mut">Read the lesson, practise, then compare with the model answers. Your answers are saved on this device.</p></section>
<a href="#/verbs" class="card les fade verbcard"><div class="em">📚</div><small>Reference</small><h3>Verb forms: irregular &amp; regular verbs</h3></a>
<h2 class="sec">Lessons</h2><div class="grid">${LESSONS.map((l,i)=>`<a href="#/l/${l.id}" class="card les fade" style="animation-delay:${i*40}ms"><div class="em">${l.emoji}</div><small>Lesson ${l.id}</small><h3>${l.title}</h3></a>`).join('')}</div>
<p class="foot"><button class="ghost" id="rst">Clear saved answers</button></p>`;
 $('#rst').onclick=()=>{if(confirm('Erase all saved answers?')){S={};save();home()}};
}
const G={fill:'Fill in the blank',tr:'Transformation',err:'Error correction'};
function lesson(id){
 const i=LESSONS.findIndex(l=>l.id==id);if(i<0){location.hash='#/';return}
 const L=LESSONS[i],s=st(id),sk=s.set%L.sets.length,Q=L.sets[sk],dr=s.draft[sk]||(s.draft[sk]={}),R=s.res;
 const sec=(t,b)=>`<div class="card sc fade"><h3>${t}</h3>${b}</div>`;let last='';
 const items=Q.map((q,k)=>{const h=q.t!==last?`<h4 class="grp">${G[q.t]}</h4>`:'';last=q.t;
  const inp=`<input data-k="${k}" value="${esc(dr[k]||'')}" ${R?'disabled':''} autocomplete="off" spellcheck="false" placeholder="${q.t==='fill'?'…':'Type your answer'}">`;
  const body=q.t==='fill'?`<span>${esc(q.q).replace('______',()=>inp)}</span>`:`<div>${esc(q.q)}</div>${inp}`;
  let fb='',cls='';
  if(R){const ok=q.a.map(n).includes(n(dr[k]||'')),m=models(q.a);cls=ok?'ok':'chk';
   fb=ok?`<div class="fix">✓ Matches the model answer</div>`:`<div class="fix"><b>Model answer:</b> ${esc(m[0])}</div>`;
   if(m.length>1)fb+=`<div class="alt">Also fine: ${m.slice(1).map(esc).join(' · ')}</div>`}
  return `${h}<div class="q ${cls}"><span class="n">${k+1}</span>${body}${fb}</div>`}).join('');
 const prev=LESSONS[i-1],next=LESSONS[i+1];
 const note=R?`<div class="card note fade" id="res"><b>Compare your answers.</b> Green means it matches the model answer. Otherwise, check the grammar rather than the exact words: a different wording can still be correct.</div>`:'';
 app.innerHTML=`<a class="back" href="#/">← All lessons</a><header class="lh fade"><span class="em">${L.emoji}</span><div><small>Lesson ${L.id}</small><h1>${L.title}</h1></div></header>
${sec('💡 Explanation',`<p>${fm(L.intro)}</p>`)}
${sec('🧱 Form',`<div class="tw"><table><tr><th></th><th>Formula</th><th>Example</th></tr>${L.form.map(r=>`<tr><td>${esc(r[0])}</td><td>${fm(r[1])}</td><td>${fm(r[2])}</td></tr>`).join('')}</table></div>`)}
${sec('🎯 Uses',`<ul>${L.uses.map(u=>`<li>${fm(u)}</li>`).join('')}</ul>`)}
${sec('⚠️ Common mistakes',L.mistakes.map(m=>`<div class="mist"><div class="x">❌ ${fm(m[0])}</div><div class="v">✅ ${fm(m[1])}</div><small>${fm(m[2])}</small></div>`).join(''))}
${sec('📝 Bac tips',`<ul>${L.tips.map(u=>`<li>${fm(u)}</li>`).join('')}</ul>`)}
<h2 class="sec">Practice</h2>${note}${items}
<h4 class="grp">Free writing (not checked, auto-saved)</h4>${L.free.map((p,k)=>`<div><small>${Q.length+1+k}. ${esc(p)}</small><textarea data-f="${k}">${esc(s.free[k]||'')}</textarea></div>`).join('')}
<div class="actions">${R?'<button id="retry">Practise again</button>':'<button id="chk">Show answers</button>'}</div>
<nav class="nav">${prev?`<a class="ghost" href="#/l/${prev.id}">← Lesson ${prev.id}</a>`:'<span></span>'}${next?`<a class="ghost" href="#/l/${next.id}">Lesson ${next.id} →</a>`:'<a class="ghost" href="#/">All lessons →</a>'}</nav>`;
 document.querySelectorAll('input[data-k]').forEach(e=>e.oninput=()=>{dr[e.dataset.k]=e.value;save()});
 document.querySelectorAll('textarea[data-f]').forEach(e=>e.oninput=()=>{s.free[e.dataset.f]=e.value;save()});
 if($('#chk'))$('#chk').onclick=()=>{s.res={checked:true};save();lesson(id);$('#res').scrollIntoView({behavior:'smooth'})};
 if($('#retry'))$('#retry').onclick=()=>{s.res=null;s.set++;s.draft[s.set%L.sets.length]={};save();lesson(id);scrollTo(0,0)};
}
function verbs(){
 const G=VERBS.groups,irr=G.reduce((a,g)=>a+g.rows.length,0);
 app.innerHTML=`<a class="back" href="#/">← All lessons</a><header class="lh fade"><span class="em">📚</span><div><small>Reference</small><h1>Verb forms</h1></div></header>
<div class="card sc fade"><h3>💡 How to use the three forms</h3><ul><li><b>Base</b>: infinitive, present simple (I <b>go</b>).</li><li><b>Past simple</b> (form 2): finished past action (I <b>went</b> yesterday).</li><li><b>Past participle</b> (form 3): after have / had / will have (lessons 2, 5), in the passive (lesson 4) and in the third conditional (lesson 6).</li></ul></div>
<div class="card sc fade"><h3>🔍 Regular or irregular? How to tell</h3><ul>
<li><b>Regular</b>: the past simple and the past participle are both <b>base + -ed</b> (work → worked → worked). This is the normal rule, and all new verbs follow it (text → texted, download → downloaded).</li>
<li><b>Irregular</b>: any other form (go → went → gone). You cannot guess it from the base alone, so you have to learn the list below. There are about 200 of them, but they are the most frequent verbs.</li>
<li><b>Quick test</b>: if you are not sure, say the past form. If you must change the vowel, change the word, or keep it the same (cut → cut), it is irregular.</li>
<li><b>Clues</b>: same form three times usually ends in -t / -d (cut, put, set). -ought / -aught is always irregular (bought, taught). The pattern -ing → -ang → -ung (sing, drink, swim) is irregular. But do not over-apply a pattern: show → showed → shown, and follow, borrow, allow are regular.</li></ul></div>
<div class="card sc fade"><h3>✏️ Regular verbs: spelling of -ed</h3><ul>
<li>Most verbs: add <b>-ed</b> (work → work<b>ed</b>).</li>
<li>Ending in -e: add <b>-d</b> (live → live<b>d</b>).</li>
<li>Consonant + y: change to <b>-ied</b> (study → stud<b>ied</b>). Vowel + y: just -ed (play → play<b>ed</b>).</li>
<li>One syllable, consonant-vowel-consonant: double the last letter (stop → stop<b>ped</b>, plan → plan<b>ned</b>). Not for stress on the first syllable (visit → visit<b>ed</b>).</li></ul>
<h4 class="grp">Pronunciation of -ed</h4><ul><li><b>/t/</b> after voiceless sounds: worked, helped, watched, asked</li><li><b>/d/</b> after voiced sounds and vowels: played, lived, called, opened</li><li><b>/ɪd/</b> after t or d: wanted, needed, started, decided</li></ul>
<h4 class="grp">Common regular verbs</h4><div class="chips">${VERBS.regular.map(r=>`<span class="chip">${r[0]} → <b>${r[1]}</b></span>`).join('')}</div></div>
<h2 class="sec">Irregular verbs (${irr})</h2>
<div class="actions"><button class="ghost" id="hide">Hide forms 2 and 3 (self-test)</button></div>
<div id="vlist">${G.map(g=>`<h4 class="grp">${esc(g.title)}</h4><p class="mut vnote">${esc(g.note)}</p><div class="card tw"><table class="vt"><tr><th>Base</th><th>Past simple</th><th>Past participle</th></tr>${g.rows.map(r=>`<tr><td>${esc(r[0])}</td><td class="f">${esc(r[1])}</td><td class="f">${esc(r[2])}</td></tr>`).join('')}</table></div>`).join('')}</div>`;
 const v=$('#vlist');
 v.onclick=e=>{const c=e.target.closest('td.f');if(c&&v.classList.contains('hide'))c.classList.toggle('rev')};
 $('#hide').onclick=e=>{v.classList.toggle('hide');v.querySelectorAll('.rev').forEach(x=>x.classList.remove('rev'));e.target.textContent=v.classList.contains('hide')?'Show all forms':'Hide forms 2 and 3 (self-test)'};
}
function route(){const m=location.hash.match(/#\/l\/(\d+)/);location.hash==='#/verbs'?verbs():m?lesson(+m[1]):home();scrollTo(0,0)}
addEventListener('hashchange',route);route();
