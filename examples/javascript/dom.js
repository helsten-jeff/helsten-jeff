document.getElementById('location').innerHTML = document.location;

const toggleRed = e => {
  const el = e.target;
  if (el.style.color === 'red') {
    el.style.color = 'black';
  } else {
    el.style.color = 'red';
  }
};

document.getElementById('click').onclick = e => {
  toggleRed(e);
};
document.getElementById('hover').onmouseover = e => {
  toggleRed(e);
};
document.getElementById('mouseout').onmouseout = e => {
  toggleRed(e);
};

document.addEventListener('blur', function(){
  console.log('blurring')
  document.getElementById('textInputValue').innerHTML = document.getElementById('textInput').value;
});
