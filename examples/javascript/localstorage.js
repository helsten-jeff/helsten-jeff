const writeToLs = () => {
  const key = document.getElementById('key').value;
  const val = document.getElementById('val').value;
  if (window.localStorage) {
    localStorage.setItem(key, val);
  }
};

const readLs = () => {
  const key = document.getElementById('key').value;
  if (window.localStorage) {
    const lsItem = localStorage.getItem(key);
    document.getElementById('LS').innerHTML = lsItem;
  }
};

const removeLsByKey = () => {
  const key = document.getElementById('key').value;
  if (window.localStorage) {
    localStorage.removeItem(key);
  }
};

const nukeLs = () => {
  if (window.localStorage) {
    localStorage.clear();
  }
};
