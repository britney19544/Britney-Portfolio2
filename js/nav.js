/* Navbar: highlights the current section link while you scroll */

(function(){
  var links=[].slice.call(document.querySelectorAll('.nav nav a:not(.btn)')),
      ids=links.map(function(a){return a.getAttribute('href').slice(1);});
  function upd(){
    var y=scrollY+innerHeight*.35,cur=ids[0];
    ids.forEach(function(id){var el=document.getElementById(id);if(el&&el.getBoundingClientRect().top+scrollY<=y)cur=id;});
    links.forEach(function(a){var on=a.getAttribute('href')==='#'+cur;a.classList.toggle('on',on);if(on)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});
  }
  addEventListener('scroll',upd,{passive:true});upd();
})();
