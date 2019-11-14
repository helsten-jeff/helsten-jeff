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


const writeToSS = () => {
  const key = document.getElementById('keySS').value;
  const val = document.getElementById('valSS').value;
  if (window.sessionStorage) {
    sessionStorage.setItem(key, val);
  }
};


const readSS = () => {
  const key = document.getElementById('keySS').value;
  if (window.sessionStorage) {
    const lsItem = sessionStorage.getItem(key);
    document.getElementById('SS').innerHTML = lsItem;
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

const orderData = [
  {
   "orderId": 123456,
   "variants": {
     "quantity": 2,
     "variantId": 98765,
     "title": "Shirt"
   }
  }
]


const storeArray = () => {
  if (window.localStorage){
    localStorage.setItem('array', JSON.stringify(orderData));
  }
}

const getArray = () => {
  if (window.localStorage) {
    document.getElementById('stringifiedArray').innerHTML = localStorage.getItem('array');
  }
}


const storeBoolean = () => {
  if (window.localStorage){
    localStorage.setItem('bool', true);
  }
}

const getIsString= () => {
  if (window.localStorage) {
    document.getElementById('stringifiedBoolean').innerHTML = typeof localStorage.getItem('bool') === 'string';
  }
}
