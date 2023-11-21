const btn = document.getElementById('btn')
btn.addEventListener('click',() => {
  setTimeout( function(){
    document.getElementById('text').textContent = 'ボタンをクリックしました';
  },2000);
});