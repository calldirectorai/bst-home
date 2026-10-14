(function(){
  var btn=document.querySelector('.nav-toggle'), nav=document.getElementById('site-nav');
  if(!btn||!nav) return;
  function set(open){
    nav.classList.toggle('open',open);
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.setAttribute('aria-label',open?'Close menu':'Open menu');
  }
  btn.addEventListener('click',function(){ set(!nav.classList.contains('open')); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&nav.classList.contains('open')){ set(false); btn.focus(); } });
  nav.addEventListener('click',function(e){ if(e.target.closest('a')) set(false); });
  var mq=window.matchMedia('(min-width:861px)');
  (mq.addEventListener?mq.addEventListener.bind(mq,'change'):mq.addListener.bind(mq))(function(){ if(mq.matches) set(false); });
})();
