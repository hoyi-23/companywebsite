//test
console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});


//nav&tab
const nav = document.querySelectorAll('.nav-item');
nav.forEach(item => item.addEventListener('click',function(e){  
  nav.forEach(item => item.classList.remove('active'));        
  item.classList.add('active')  
  const panes = document.querySelectorAll('.product__tab');  
  panes.forEach(pane => {
    const tab = pane.dataset.tab;
    if(item.id == tab){      
      panes.forEach(pane => pane.classList.remove('show'));
      pane.classList.add('show');
    }    
  })    
}))


