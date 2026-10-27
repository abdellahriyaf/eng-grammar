const $=s=>document.querySelector(s),app=$('#app'),PASS=70;
let S={};try{S=JSON.parse(localStorage.getItem('ebac'))||{}}catch(e){}
const save=()=>{try{localStorage.setItem('ebac',JSON.stringify(S))}catch(e){}};
const st=id=>S[id]||(S[id]={att:0,best:0,bc:0,pass:false,set:0,draft:{},free:{},res:null});
const n=s=>String(s).toLowerCase().replace(/[’‘]/g,"'").replace(/[^a-z0-9 ]/g,'').replace(/\s+/g,' ').trim();
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fm=s=>esc(s).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');
const unlocked=i=>!LESSONS[i].soon&&(i===0||st(LESSONS[i-1].id).pass||st(LESSONS[i].id).att>0);
const day=d=>d.toISOString().slice(0,10);
function mark(){const t=day(new Date());S._d=S._d||[];if(!S._d.includes(t))S._d.push(t)}
function streak(){const d=S._d||[];let k=0,x=new Date();if(!d.includes(day(x)))x.setDate(x.getDate()-1);while(d.includes(day(x))){k++;x.setDate(x.getDate()-1)}return k}
const ring=(p,z=96)=>{const r=z/2-8,c=2*Math.PI*r,h=z/2;return `<svg class="ring" width="${z}" height="${z}"><defs><linearGradient id="rg"><stop offset="0" stop-color="#7c5cff"/><stop offset="1" stop-color="#00e0c6"/></linearGradient></defs><circle cx="${h}" cy="${h}" r="${r}" class="rb"/><circle cx="${h}" cy="${h}" r="${r}" class="rf" stroke-dasharray="${c*p/100} ${c}" transform="rotate(-90 ${h} ${h})"/><text x="50%" y="50%" dy=".35em" text-anchor="middle">${Math.round(p)}%</text></svg>`};
function home(){
 const A=LESSONS.filter(l=>!l.soon),done=A.filter(l=>st(l.id).pass).length,xp=A.reduce((a,l)=>a+st(l.id).bc*10,0),T=A.filter(l=>st(l.id).att),avg=T.length?T.reduce((a,l)=>a+st(l.id).best,0)/T.length:0;
 app.innerHTML=`<section class="hero fade"><span class="pill">Bac English · Sciences Maths</span><h1>Master English.<br><span class="grad">One lesson at a time.</span></h1><p class="mut">Learn → practise → get graded. Score ${PASS}%+ to unlock the next lesson. Progress is saved on this device.</p></section>
<section class="stats fade"><div class="card stat">${ring(done/LESSONS.length*100)}<div><b>${done}/${LESSONS.length}</b><span>lessons passed</span></div></div><div class="card stat"><div><div class="big">⚡ ${xp}</div><span>XP</span></div></div><div class="card stat"><div><div class="big">🔥 ${streak()}</div><span>day streak</span></div></div><div class="card stat"><div><div class="big">${Math.round(avg)}%</div><span>avg best score</span></div></div></section>
<h2 class="sec">Lessons</h2><div class="grid">${LESSONS.map((l,i)=>{const s=st(l.id),u=unlocked(i);const b=l.soon?'<span class="badge">Coming soon</span>':!u?'<span class="badge">🔒 Locked</span>':s.pass?`<span class="badge p">✅ Passed · best ${s.best}%</span>`:s.att?`<span class="badge w">In progress · best ${s.best}%</span>`:'<span class="badge w">Start</span>';
 return `<${u?`a href="#/l/${l.id}"`:'div'} class="card les fade ${u?'':'off'}" style="animation-delay:${i*50}ms"><div class="em">${l.emoji}</div><small>Lesson ${l.id}</small><h3>${l.title}</h3>${b}</${u?'a':'div'}>`}).join('')}</div>
<p class="foot"><button class="ghost" id="rst">Reset progress</button></p>`;
 $('#rst').onclick=()=>{if(confirm('Erase all progress?')){S={};save();home()}};
}
const G={fill:'Fill in the blank',tr:'Transformation',err:'Error correction'};
function lesson(id){
 const i=LESSONS.findIndex(l=>l.id==id);if(i<0||!unlocked(i)){location.hash='#/';return}
 const L=LESSONS[i],s=st(id),sk=s.set%L.sets.length,Q=L.sets[sk],dr=s.draft[sk]||(s.draft[sk]={}),R=s.res;
 const sec=(t,b)=>`<div class="card sc fade"><h3>${t}</h3>${b}</div>`;let last='';
 const items=Q.map((q,k)=>{const h=q.t!==last?`<h4 class="grp">${G[q.t]}</h4>`:'';last=q.t;
  const inp=`<input data-k="${k}" value="${esc(dr[k]||'')}" ${R?'disabled':''} autocomplete="off" spellcheck="false" placeholder="${q.t==='fill'?'…':'Type your answer'}">`;
  const body=q.t==='fill'?`<span>${esc(q.q).replace('______',()=>inp)}</span>`:`<div>${esc(q.q)}</div>${inp}`;
  return `${h}<div class="q ${R?(R.ok[k]?'ok':'bad'):''}"><span class="n">${k+1}</span>${body}${R&&!R.ok[k]?`<div class="fix">✓ ${esc(q.a[0])}</div>`:''}</div>`}).join('');
 const nx=LESSONS[i+1],nxHref=nx&&!nx.soon?`#/l/${nx.id}`:'#/';
 const res=R?`<div class="card res fade ${R.pct>=PASS?'pass':'fail'}" id="res">${ring(R.pct,110)}<div><h3>${R.c}/${Q.length} correct</h3><p>${R.pct>=PASS?'🔥 Lesson passed. Next one unlocked.':'Not yet. You need '+PASS+'%. Read the fixes, then try again.'}</p><small>Attempts: ${s.att} · Best: ${s.best}%</small></div></div>`:'';
 app.innerHTML=`<a class="back" href="#/">← All lessons</a><header class="lh fade"><span class="em">${L.emoji}</span><div><small>Lesson ${L.id}</small><h1>${L.title}</h1></div></header>
${sec('💡 Explanation',`<p>${fm(L.intro)}</p>`)}
${sec('🧱 Form',`<div class="tw"><table><tr><th></th><th>Formula</th><th>Example</th></tr>${L.form.map(r=>`<tr><td>${esc(r[0])}</td><td>${fm(r[1])}</td><td>${fm(r[2])}</td></tr>`).join('')}</table></div>`)}
${sec('🎯 Uses',`<ul>${L.uses.map(u=>`<li>${fm(u)}</li>`).join('')}</ul>`)}
${sec('⚠️ Common mistakes',L.mistakes.map(m=>`<div class="mist"><div class="x">❌ ${fm(m[0])}</div><div class="v">✅ ${fm(m[1])}</div><small>${fm(m[2])}</small></div>`).join(''))}
${sec('📝 Bac tips',`<ul>${L.tips.map(u=>`<li>${fm(u)}</li>`).join('')}</ul>`)}
<h2 class="sec">Practice</h2>${res}${items}
<h4 class="grp">Free writing (not graded, auto-saved)</h4>${L.free.map((p,k)=>`<div><small>${9+k-0}. ${esc(p)}</small><textarea data-f="${k}">${esc(s.free[k]||'')}</textarea></div>`).join('')}
<div class="actions">${!R?'<button id="chk">Check answers</button>':`<button id="retry">${R.pct>=PASS?'Practise again':'Try again'}</button>${R.pct>=PASS||s.pass?`<a class="btn" href="${nxHref}">${nx&&!nx.soon?'Next lesson →':'Home →'}</a>`:''}`}</div>`;
 document.querySelectorAll('input[data-k]').forEach(e=>e.oninput=()=>{dr[e.dataset.k]=e.value;save()});
 document.querySelectorAll('textarea[data-f]').forEach(e=>e.oninput=()=>{s.free[e.dataset.f]=e.value;save()});
 if($('#chk'))$('#chk').onclick=()=>{const ok=Q.map((q,k)=>q.a.map(n).includes(n(dr[k]||''))),c=ok.filter(Boolean).length,pct=Math.round(c/Q.length*100);
  s.att++;if(pct>=s.best){s.best=pct;s.bc=c}if(pct>=PASS)s.pass=true;s.res={ok,c,pct};mark();save();lesson(id);$('#res').scrollIntoView({behavior:'smooth'})};
 if($('#retry'))$('#retry').onclick=()=>{s.res=null;s.set++;s.draft[s.set%L.sets.length]={};save();lesson(id);scrollTo(0,0)};
}
function route(){const m=location.hash.match(/#\/l\/(\d+)/);m?lesson(+m[1]):home();scrollTo(0,0)}
addEventListener('hashchange',route);route();
