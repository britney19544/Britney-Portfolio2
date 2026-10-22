/* Organizations and Taniku popups (any element with data-dialog="id" opens that popup) */

(function(){
  document.querySelectorAll('[data-dialog]').forEach(function(t){
    var d=document.getElementById(t.getAttribute('data-dialog'));
    if(!d||!d.showModal)return;
    t.addEventListener('click',function(){d.showModal();});
    d.addEventListener('click',function(e){if(e.target===d)d.close();});
    var x=d.querySelector('.x');if(x)x.addEventListener('click',function(){d.close();});
  });
})();
