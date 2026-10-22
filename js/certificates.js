/* Competitions popup: opens certificates and the full-size image preview */

(function(){
  var dlg=document.getElementById('certs');
  if(!dlg||!dlg.showModal)return;
  document.querySelectorAll('.open-certs').forEach(function(c){c.addEventListener('click',function(){dlg.showModal();});});
  dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close();});
  dlg.querySelector('.x').addEventListener('click',function(){dlg.close();});
  var lb=document.getElementById('lb'),lbi=lb.querySelector('img'),lbc=lb.querySelector('.cap'),links=[].slice.call(dlg.querySelectorAll('.cgrid a')),cur=0;
  function miss(i){return links[i].closest('figure').classList.contains('missing');}
  function show(n){cur=n;var f=links[n].closest('figure');lbi.src=links[n].getAttribute('href');lbi.alt=f.querySelector('img').alt;lbc.textContent=f.querySelector('strong').textContent+' – '+f.querySelector('small').textContent;}
  function go(d){var n=cur,k=0;do{n=(n+d+links.length)%links.length;k++;}while(miss(n)&&k<links.length);show(n);}
  links.forEach(function(a,i){a.addEventListener('click',function(e){e.preventDefault();if(miss(i))return;show(i);lb.showModal();});});
  lb.addEventListener('click',function(e){if(!e.target.closest('.nv'))lb.close();});
  lb.querySelector('.prev').addEventListener('click',function(){go(-1);});
  lb.querySelector('.next').addEventListener('click',function(){go(1);});
  document.addEventListener('keydown',function(e){if(!lb.open)return;if(e.key==='ArrowLeft')go(-1);if(e.key==='ArrowRight')go(1);});
})();
