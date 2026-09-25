/* KlinikCare - main.js */
(function(){
  var WA='628111568477';
  /* nav shadow + mobile bar */
  var nav=document.querySelector('.nav'), mbar=document.getElementById('mbar'), demo=document.getElementById('demo');
  function onScroll(){
    var y=window.scrollY; nav.classList.toggle('scrolled',y>8);
    var r=demo.getBoundingClientRect(); var inDemo=r.top<window.innerHeight&&r.bottom>0;
    mbar.classList.toggle('show',y>520&&!inDemo);
  }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

  var menuBtn=document.getElementById('menuBtn'), menu=document.getElementById('mobileMenu');
  menuBtn.addEventListener('click',function(){var o=menu.hidden;menu.hidden=!o;menuBtn.setAttribute('aria-expanded',String(o));});
  menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.hidden=true;menuBtn.setAttribute('aria-expanded','false');}});

  /* journey */
  var S=[
    {k:'Registrasi',ic:'i-user',who:'Petugas Pendaftaran',t:'Pendaftaran pasien dan nomor antrean dalam hitungan detik',p:'Petugas dapat mencari data pasien lama berdasarkan nama atau nomor rekam medis, maupun mendaftarkan pasien baru. Status kepesertaan BPJS ditampilkan saat pendaftaran.',b:['Nomor antrean otomatis untuk setiap poli','Data pasien cukup dimasukkan satu kali','Pasien BPJS dan pasien umum dalam satu alur'],
     m:'<span class="cap">Pendaftaran</span><div class="row"><div><span>Pasien</span><br><b>Dewi Lestari</b></div><span class="mono">RM 00-12-45</span></div><div class="row"><div><span>Penjamin</span><br><b>BPJS Kesehatan</b></div><span class="tag g">Aktif</span></div><div class="row"><div><span>Nomor antrean</span><br><span class="big">A-014</span></div><span>Poli Umum</span></div>'},
    {k:'Pemeriksaan',ic:'i-steth',who:'Dokter',t:'Pemeriksaan didukung riwayat medis pasien yang lengkap',p:'Tanda vital, anamnesis, diagnosis, dan tindakan dicatat dalam satu layar. Permintaan laboratorium, radiologi, dan resep dapat dikirim langsung dari halaman ini.',b:['Riwayat kunjungan dan hasil laboratorium sebelumnya','Diagnosis dengan kode ICD-10','Permintaan laboratorium dan resep tanpa kertas'],
     m:'<span class="cap">Catatan pemeriksaan</span><div class="row"><div><span>Tanda vital</span><br><b class="mono">TD 120/80 · 37,8 °C</b></div></div><div class="row"><div><span>Diagnosis</span><br><b>ISPA akut</b></div><span class="mono">J06.9</span></div><div class="row"><div><span>Tindak lanjut</span><br><b>Darah lengkap · Resep</b></div><span class="tag b">Dikirim</span></div>'},
    {k:'Laboratorium',ic:'i-flask',who:'Laboran',t:'Permintaan pemeriksaan diterima otomatis, hasil langsung dikirim ke dokter',p:'Laboran menerima permintaan pemeriksaan beserta identitas pasien. Hasil yang dimasukkan langsung tersedia pada layar dokter.',b:['Daftar permintaan pemeriksaan yang tertata','Hasil terhubung dengan rekam medis pasien','Waktu layanan laboratorium lebih singkat'],
     m:'<span class="cap">Hasil laboratorium</span><div class="row"><div><span>Pemeriksaan</span><br><b>Darah lengkap</b></div><span class="tag g">Hasil masuk</span></div><div class="row"><div><span>Hemoglobin</span><br><b class="mono">13,2 g/dL</b></div><span>Normal</span></div><div class="row"><div><span>Leukosit</span><br><b class="mono">11.400 /µL</b></div><span class="tag o">Tinggi</span></div>'},
    {k:'Radiologi',ic:'i-scan',who:'Petugas Radiologi',t:'Permintaan dan hasil pemeriksaan radiologi tersimpan dengan rapi',p:'Permintaan pemeriksaan radiologi tercatat langsung dari dokter, dan hasil pembacaan tersimpan dalam riwayat pasien untuk kunjungan berikutnya.',b:['Permintaan radiologi langsung dari halaman pemeriksaan','Status pemeriksaan dapat dipantau','Hasil tersimpan dalam riwayat pasien'],
     m:'<span class="cap">Radiologi</span><div class="row"><div><span>Pemeriksaan</span><br><b>Rontgen thorax PA</b></div><span class="tag b">Dibaca</span></div><div class="row"><div><span>Kesan</span><br><b>Cor dan pulmo dalam batas normal</b></div></div><div class="row"><div><span>Waktu</span><br><b class="mono">10.05 WIB</b></div><span>Terlampir</span></div>'},
    {k:'Farmasi',ic:'i-pill',who:'Apoteker',t:'Resep dari dokter langsung diterima dan diproses oleh apotek',p:'Apoteker menerima resep digital sesuai yang ditetapkan dokter. Saat obat diserahkan, stok berkurang secara otomatis sehingga data persediaan selalu akurat.',b:['Resep digital, bebas dari kesalahan membaca tulisan','Stok obat berkurang secara otomatis','Penerimaan barang tercatat'],
     m:'<span class="cap">Resep</span><div class="row"><div><span>Paracetamol 500 mg</span><br><b class="mono">3 × 1 · 10 tablet</b></div><span class="tag g">Siap</span></div><div class="row"><div><span>Stok gudang</span><br><b class="mono">1.240 → 1.230 tab</b></div><span>Otomatis</span></div><div class="row"><div><span>Amoxicillin 500 mg</span><br><b class="mono">3 × 1 · 15 kapsul</b></div><span class="tag g">Siap</span></div>'},
    {k:'Kasir',ic:'i-receipt',who:'Kasir',t:'Tagihan tersusun otomatis dari seluruh layanan',p:'Biaya tindakan, pemeriksaan laboratorium, radiologi, dan obat tergabung dalam satu tagihan. Pembayaran tercatat dan langsung tampil pada laporan pemilik klinik.',b:['Tagihan lengkap tanpa perhitungan manual','Pemisahan pasien BPJS dan pasien umum','Pendapatan harian tercatat dalam laporan'],
     m:'<span class="cap">Tagihan</span><div class="row"><div><span>Konsultasi dokter umum</span></div><b class="mono">Rp 75.000</b></div><div class="row"><div><span>Darah lengkap</span></div><b class="mono">Rp 85.000</b></div><div class="row"><div><span>Obat</span></div><b class="mono">Rp 25.000</b></div><div class="row" style="background:var(--sky-wash)"><b>Total</b><span class="big" style="color:var(--sky)">Rp 185.000</span></div>'}
  ];
  var wrap=document.getElementById('stations'), panel=document.getElementById('jpanel'), btns=[];
  S.forEach(function(s,i){
    var b=document.createElement('button'); b.className='st'; b.type='button'; b.setAttribute('role','tab'); b.id='st'+i; b.setAttribute('aria-controls','jpanel');
    b.innerHTML='<span class="node"><svg><use href="#'+s.ic+'"/></svg></span><span class="step">0'+(i+1)+'</span><span>'+s.k+'</span>';
    b.addEventListener('click',function(){select(i,true)});
    b.addEventListener('keydown',function(e){var n=null;if(e.key==='ArrowRight')n=(i+1)%S.length;if(e.key==='ArrowLeft')n=(i-1+S.length)%S.length;if(e.key==='Home')n=0;if(e.key==='End')n=S.length-1;if(n!==null){e.preventDefault();select(n,true);btns[n].focus();}});
    wrap.appendChild(b); btns.push(b);
  });
  /* ECG path: flat line between station centers with a heartbeat spike in each gap */
  (function(){
    var W=1200,y=32,n=S.length,step=W/n,d='M0 '+y;
    for(var i=0;i<n-1;i++){var mx=step*(i+1); d+=' H'+(mx-26)+' l6 -3 l6 6 l5 -26 l6 38 l5 -19 l4 4 l4 0';}
    d+=' H'+W;
    document.getElementById('ecgBase').setAttribute('d',d); document.getElementById('ecgLive').setAttribute('d',d); document.getElementById('ecgRun').setAttribute('d',d);
  })();
  var clip=document.getElementById('ecgClipRect');
  function select(i,user){
    btns.forEach(function(b,j){b.setAttribute('aria-selected',String(i===j));b.tabIndex=i===j?0:-1;b.classList.toggle('done',j<i);});
    panel.setAttribute('aria-labelledby','st'+i);
    clip.setAttribute('width',String((1200/S.length)*(i+.5)));
    var s=S[i];
    panel.innerHTML='<div class="jfade"><span class="who">'+s.who+'</span><h3 style="margin-top:6px">'+s.t+'</h3><p>'+s.p+'</p><ul>'+s.b.map(function(x){return '<li><svg><use href="#i-check-c"/></svg><span>'+x+'</span></li>'}).join('')+'</ul></div><div class="mini jfade" aria-label="Contoh tampilan modul '+s.k+'">'+s.m+'</div>';
    if(user) stopAuto();
  }
  var auto=null, reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches, cur=0;
  function stopAuto(){if(auto){clearInterval(auto);auto=null;}}
  select(0,false);
  if(!reduced && 'IntersectionObserver' in window){
    var started=false;
    new IntersectionObserver(function(en){en.forEach(function(e){
      if(e.isIntersecting&&!started){started=true;auto=setInterval(function(){cur=(cur+1)%S.length;select(cur,false);if(cur===S.length-1)stopAuto();},3200);}
    })},{threshold:.45}).observe(document.querySelector('.journey'));
    document.querySelector('.journey').addEventListener('pointerenter',stopAuto);
  }

  /* copy helpers */
  function copyText(t,btn,label){
    var done=function(){var o=btn.textContent;btn.textContent=label||'Disalin';setTimeout(function(){btn.textContent=o},1600)};
    try{navigator.clipboard.writeText(t).then(done,function(){fallback(t);done()});}catch(e){fallback(t);done()}
  }
  function fallback(t){var ta=document.createElement('textarea');ta.value=t;ta.setAttribute('readonly','');ta.style.position='absolute';ta.style.left='-9999px';document.body.appendChild(ta);ta.select();try{document.execCommand('copy')}catch(e){}document.body.removeChild(ta);}
  document.querySelectorAll('.copy[data-copy]').forEach(function(b){b.addEventListener('click',function(){copyText(b.getAttribute('data-copy'),b)})});

  /* form */

  /* ===== custom select enhancement ===== */
  var CHK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
  var openSel=null;
  function enhance(sel){
    var wrap=document.createElement('div'); wrap.className='csel';
    sel.parentNode.insertBefore(wrap,sel); wrap.appendChild(sel); sel.tabIndex=-1; sel.setAttribute('aria-hidden','true');
    var btn=document.createElement('button'); btn.type='button'; btn.className='csel-btn'; btn.id=sel.id+'-btn';
    btn.setAttribute('aria-haspopup','listbox'); btn.setAttribute('aria-expanded','false');
    var list=document.createElement('ul'); list.className='csel-list'; list.setAttribute('role','listbox'); list.id=sel.id+'-list'; list.tabIndex=-1;
    btn.setAttribute('aria-controls',list.id);
    var lab=document.querySelector('label[for="'+sel.id+'"]'); if(lab){lab.htmlFor=btn.id; lab.id=lab.id||sel.id+'-lab'; list.setAttribute('aria-labelledby',lab.id);}
    btn.innerHTML='<span class="val"></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
    var opts=[].slice.call(sel.options).filter(function(o){return o.value!==''});
    var placeholder=(sel.options[0]&&sel.options[0].value==='')?sel.options[0].text:'Pilih';
    opts.forEach(function(o,i){var li=document.createElement('li');li.setAttribute('role','option');li.id=sel.id+'-o'+i;li.innerHTML='<span>'+o.text+'</span>'+CHK;li.dataset.v=o.value||o.text;list.appendChild(li);});
    wrap.appendChild(btn); wrap.appendChild(list); sel._btn=btn;
    var lis=[].slice.call(list.children), act=-1;
    function render(){var v=sel.value;btn.querySelector('.val').textContent=v?sel.options[sel.selectedIndex].text:placeholder;btn.classList.toggle('empty',!v);lis.forEach(function(li){li.setAttribute('aria-selected',String(li.dataset.v===v))});}
    function setAct(i){act=Math.max(0,Math.min(lis.length-1,i));lis.forEach(function(li,j){li.classList.toggle('active',j===act)});list.setAttribute('aria-activedescendant',lis[act].id);var li=lis[act];if(li.offsetTop<list.scrollTop)list.scrollTop=li.offsetTop-6;else if(li.offsetTop+li.offsetHeight>list.scrollTop+list.clientHeight)list.scrollTop=li.offsetTop+li.offsetHeight-list.clientHeight+6;}
    function open(){if(openSel&&openSel!==close)openSel();wrap.classList.add('open');btn.setAttribute('aria-expanded','true');var i=lis.findIndex(function(l){return l.dataset.v===sel.value});setAct(i<0?0:i);list.focus({preventScroll:true});openSel=close;}
    function close(focusBtn){wrap.classList.remove('open');btn.setAttribute('aria-expanded','false');lis.forEach(function(li){li.classList.remove('active')});if(openSel===close)openSel=null;if(focusBtn)btn.focus({preventScroll:true});}
    function choose(i){sel.value=lis[i].dataset.v;render();sel.dispatchEvent(new Event('input',{bubbles:true}));sel.dispatchEvent(new Event('change',{bubbles:true}));close(true);}
    btn.addEventListener('click',function(){wrap.classList.contains('open')?close(true):open()});
    btn.addEventListener('keydown',function(e){if(['ArrowDown','ArrowUp','Enter',' '].indexOf(e.key)>-1){e.preventDefault();open();}});
    list.addEventListener('keydown',function(e){
      if(e.key==='ArrowDown'){e.preventDefault();setAct(act+1)}
      else if(e.key==='ArrowUp'){e.preventDefault();setAct(act-1)}
      else if(e.key==='Home'){e.preventDefault();setAct(0)}
      else if(e.key==='End'){e.preventDefault();setAct(lis.length-1)}
      else if(e.key==='Enter'||e.key===' '){e.preventDefault();choose(act)}
      else if(e.key==='Escape'){e.preventDefault();close(true)}
      else if(e.key==='Tab'){close(false)}
      else if(e.key.length===1){var k=e.key.toLowerCase();var n=lis.findIndex(function(l,j){return j>act&&l.textContent.toLowerCase().indexOf(k)===0});if(n<0)n=lis.findIndex(function(l){return l.textContent.toLowerCase().indexOf(k)===0});if(n>-1)setAct(n);}
    });
    lis.forEach(function(li,i){li.addEventListener('pointerenter',function(){setAct(i)});li.addEventListener('click',function(){choose(i)});});
    document.addEventListener('pointerdown',function(e){if(wrap.classList.contains('open')&&!wrap.contains(e.target))close(false)});
    list.addEventListener('focusout',function(e){if(!wrap.contains(e.relatedTarget))close(false)});
    render();
  }
  document.querySelectorAll('.f select').forEach(enhance);
  var form=document.getElementById('demoForm'), doneEl=document.getElementById('done'), summary=document.getElementById('summary');
  function field(id){return document.getElementById(id)}
  function setErr(id,bad){var f=field(id).closest('.f');f.classList.toggle('bad',bad);f.querySelector('.err').hidden=!bad;field(id).setAttribute('aria-invalid',String(bad));}
  function check(id){
    var v=field(id).value.trim(),bad=false;
    if(id==='wa')bad=v.replace(/\D/g,'').length<9;
    else if(id==='email')bad=v!==''&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    else bad=v==='';
    setErr(id,bad);return !bad;
  }
  field('jenis').addEventListener('change',function(){check('jenis')});
  ['nama','wa','instansi','email'].forEach(function(id){field(id).addEventListener('blur',function(){if(field(id).value||id!=='email')check(id)});field(id).addEventListener('input',function(){if(field(id).closest('.f').classList.contains('bad'))check(id)});});
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var ids=['nama','wa','instansi','jenis','email'],ok=true,first=null;
    ids.forEach(function(id){if(!check(id)){ok=false;if(!first)first=id;}});
    if(!ok){var fe=field(first);(fe._btn||fe).focus();return;}
    var g=function(id){return field(id).value.trim()};
    var lines=['Yth. Tim KlinikCare,','saya ingin mengajukan jadwal demo aplikasi KlinikCare dengan data sebagai berikut.','','Nama: '+g('nama'),'Instansi: '+g('instansi')+' ('+g('jenis')+')','Nomor WhatsApp: '+g('wa')];
    if(g('email'))lines.push('Email: '+g('email'));
    if(g('dokter'))lines.push('Jumlah dokter: '+g('dokter'));
    if(g('jabatan'))lines.push('Jabatan: '+g('jabatan'));
    if(g('domisili'))lines.push('Domisili: '+g('domisili'));
    if(g('sumber'))lines.push('Sumber informasi: '+g('sumber'));
    if(g('catatan'))lines.push('Catatan: '+g('catatan'));
    lines.push('','Terima kasih.');
    var text=lines.join('\n');
    summary.textContent=text;
    document.getElementById('waSend').href='https://api.whatsapp.com/send/?phone='+WA+'&text='+encodeURIComponent(text);
    form.hidden=true; doneEl.hidden=false; doneEl.focus();
  });
  document.getElementById('copySummary').addEventListener('click',function(){copyText(summary.textContent+'\n\nTujuan email: marketing@pkp.co.id',this,'Ringkasan berhasil disalin')});
  document.getElementById('editForm').addEventListener('click',function(){doneEl.hidden=true;form.hidden=false;field('nama').focus();});

  document.getElementById('yr').textContent=new Date().getFullYear();

  /* ===== motion ===== */
  var RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root=document.documentElement;
  /* progress bar */
  var prog=document.getElementById('progress');
  function onProg(){var h=document.documentElement.scrollHeight-innerHeight;prog.style.transform='scaleX('+(h>0?Math.min(1,scrollY/h):0)+')';}
  addEventListener('scroll',onProg,{passive:true}); onProg();

  /* scroll reveal with stagger */
  var sel='.sec-head,.pains li,.fix,.journey,.sc-tabs,.sc-stage,.cell,.role,.reg,.tcard,.stepc,.offer,.faq details,.help,.cl,.form,.final>*,.clients-label,.client';
  var items=[].slice.call(document.querySelectorAll(sel));
  items.forEach(function(el){
    el.classList.add('rv');
    var sib=[].slice.call(el.parentNode.children).filter(function(c){return c.matches(sel)});
    var i=sib.indexOf(el); el.style.setProperty('--d',Math.min(i,6)*0.08+'s');
  });
  function countUp(el){
    var to=+el.getAttribute('data-to'),t0=null,dur=1400;
    function f(t){if(!t0)t0=t;var k=Math.min(1,(t-t0)/dur);el.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f);}
    requestAnimationFrame(f);
  }
  if(root.classList.contains('anim')){
    var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    items.forEach(function(el){io.observe(el)});
    document.querySelectorAll('.count').forEach(function(el){setTimeout(function(){countUp(el)},1300)});
  }

  /* hero parallax (depth) */
  var stage=document.getElementById('stage');
  if(!RM&&matchMedia('(pointer:fine)').matches&&stage){
    var floats=stage.querySelectorAll('.float'),shot=document.getElementById('shotWrap');
    document.querySelector('.hero').addEventListener('pointermove',function(e){
      var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;
      shot.style.translate=(x*-10)+'px '+(y*-8)+'px';
      floats.forEach(function(f,i){var d=18+i*8;f.style.translate=(x*d)+'px '+(y*d)+'px';});
    });
  }

  /* bento spotlight */
  document.querySelectorAll('.cell').forEach(function(c){
    c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px');});
  });

  /* app showcase */
  (function(){
    var D=[
      {t:'Antrean poli yang tertata dan mudah dipantau',p:'Nomor antrean aktif ditampilkan untuk setiap poli beserta dokter yang bertugas, sehingga petugas dan pasien dapat mengetahui giliran layanan secara langsung.',c:['Nomor antrean per poli','Nama dokter yang bertugas','Tampilan besar yang mudah dibaca']},
      {t:'Riwayat booking pasien dalam satu daftar',p:'Seluruh booking tercatat lengkap dengan kode booking, dokter, poli, dan tanggal kunjungan. Data dapat dicari berdasarkan nama pasien, nomor rekam medis, tanggal, maupun status.',c:['Kode booking otomatis','Filter tanggal dan status','Terhubung dengan antrean']},
      {t:'Pemeriksaan laboratorium dari permintaan hingga pembayaran',p:'Petugas laboratorium dapat melihat antrean dan riwayat pemeriksaan, memperbarui status, mencetak hasil, serta memantau status pembayaran setiap pasien.',c:['Antrean dan riwayat pemeriksaan','Cetak hasil pemeriksaan','Status pembayaran terpantau']}
    ];
    var tabs=[].slice.call(document.querySelectorAll('.sc-tab')),cards=[].slice.call(document.querySelectorAll('.sc-card')),cap=document.getElementById('scPanel'),tabWrap=document.getElementById('scTabs'),stageEl=document.getElementById('scStage');
    var cur=0,timer=null,DUR=6000,visible=false,paused=false;
    function show(i,fromUser){
      cur=(i+3)%3;
      cards.forEach(function(c,j){var pos=(j-cur+3)%3;c.setAttribute('data-pos',pos===2?'-1':String(pos));c.style.removeProperty('--rx');c.style.removeProperty('--ry');});
      tabs.forEach(function(t,j){t.setAttribute('aria-selected',String(j===cur));t.tabIndex=j===cur?0:-1;t.classList.remove('run');});
      cap.setAttribute('aria-labelledby','sct'+cur);
      var d=D[cur];
      cap.innerHTML='<h3 class="jfade">'+d.t+'</h3><p class="jfade">'+d.p+'</p><div class="chips jfade">'+d.c.map(function(x){return '<span><svg><use href="#i-check-c"/></svg>'+x+'</span>'}).join('')+'</div>';
      schedule();
    }
    function schedule(){
      clearTimeout(timer);
      if(RM||!visible||paused)return;
      var t=tabs[cur]; void t.offsetWidth; t.style.setProperty('--dur',DUR+'ms'); t.classList.add('run');
      timer=setTimeout(function(){show(cur+1);},DUR);
    }
    tabs.forEach(function(t,j){
      t.addEventListener('click',function(){show(j,true)});
      t.addEventListener('keydown',function(e){var n=null;if(e.key==='ArrowRight')n=cur+1;if(e.key==='ArrowLeft')n=cur-1;if(n!==null){e.preventDefault();show(n,true);tabs[cur].focus();}});
    });
    cards.forEach(function(c,j){
      c.addEventListener('click',function(){if(c.getAttribute('data-pos')!=='0')show(j,true)});
      c.addEventListener('pointermove',function(e){
        if(RM||c.getAttribute('data-pos')!=='0'||!matchMedia('(pointer:fine)').matches)return;
        var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        c.style.setProperty('--ry',(x*6)+'deg');c.style.setProperty('--rx',(y*-5)+'deg');
      });
      c.addEventListener('pointerleave',function(){c.style.removeProperty('--rx');c.style.removeProperty('--ry');});
    });
    function pause(v){paused=v;if(v){clearTimeout(timer);tabs[cur].classList.remove('run');}else schedule();}
    stageEl.addEventListener('pointerenter',function(){pause(true)});
    stageEl.addEventListener('pointerleave',function(){pause(false)});
    tabWrap.addEventListener('focusin',function(){pause(true)});
    tabWrap.addEventListener('focusout',function(){pause(false)});
    if('IntersectionObserver' in window){
      new IntersectionObserver(function(en){en.forEach(function(e){visible=e.isIntersecting;if(visible)schedule();else{clearTimeout(timer);tabs[cur].classList.remove('run');}})},{threshold:.35}).observe(stageEl);
    }
    show(0);
  })();
})();
