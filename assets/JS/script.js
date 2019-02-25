let red =

anime({
  targets:'.red',
  left: '240px',
  backgroundColor: '#FFF',
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuad'
})

document.querySelector('.slide').onclick = go.restart;
document.querySelector('.first-text').onclick = good.restart;
document.querySelector('.second-text').onclick = bad.restart;
