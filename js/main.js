function hamburger() {
  　　document.getElementById('line1').classList.toggle('linea');
  　　document.getElementById('line2').classList.toggle('lineb');
  　　document.getElementById('line3').classList.toggle('linec');
  　　document.getElementById('target').classList.toggle('slidex');
  　　document.getElementById('nav2_f').classList.toggle('fadein2');
  }
  
  document.getElementById('target').addEventListener('click', function () {
  　　hamburger();
  });
  
  let list = document.getElementsByClassName('list');
  
  for (let i = 0; i < list.length; i++) {
  　　list[i].addEventListener('click', function () {
  　　　　hamburger();
      });
  }

 const js_fadein = document.querySelectorAll
 ('js_fadein')
 js_fadein.animate([{opacity:'0'}, {opacity:'1'}], 1500);