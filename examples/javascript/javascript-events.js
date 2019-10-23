const onClick = () => {
  document.getElementById('click').style.backgroundColor = 'pink';
};

const mouseEnter = el => {
  console.log('e', el);
  el.style.backgroundColor = 'pink';
};

const mouseLeave = el => {
  el.style.backgroundColor = '#e2e2e2';
  if (el.id === 'mouseEnterLeave') {
    window.alert('you left the element!');
  }
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
