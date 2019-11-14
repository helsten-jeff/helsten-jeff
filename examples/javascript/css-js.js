
const onClick = () => {
  document.getElementById('click').style.backgroundColor = 'pink';
};

const mouseEnter = el => {
  console.log('e', el);
  el.style.backgroundColor = 'pink';
};

const mouseOver = el => {
  el.style.backgroundColor = '#fefefe';
};

const mouseDown = el => {
  el.style.boxShadow = 'rgb(0, 0, 0) 0px 1px 6px inset'
}

const mouseUp = el => {
  el.style.boxShadow = 'rgb(0,0,0) 1px 1px 3px'
}

const cssAnimationColor = el => {
  el.classList.add('colorShift')
  setTimeout(()=> {
    el.classList.remove('colorShift')
  }, 4000)
}

const cssTransition = el => {
  el.classList.add('doIt')
  setTimeout(() => {
    el.classList.remove('doIt')
  }, 2000)
}
