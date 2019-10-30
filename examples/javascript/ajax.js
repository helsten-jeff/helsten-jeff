const fireXhrRequest = () => {
  const progressEl = document.getElementById('progress');
  const statusEl = document.getElementById('status');
  const response1El = document.getElementById('response1');
  const response2El = document.getElementById('response2');
  // Clear stuff
  progressEl.innerHTML = '';
  statusEl.innerHTML = '';
  response1El.innerHTML = '';
  response2El.innerHTML = '';

  const xhr = new XMLHttpRequest(),
    method = 'GET',
    url = document.getElementById('url').value;

  xhr.open(method, url, true);

  xhr.onprogress = () => {
    progressEl.innerHTML = 'in flight';
  };

  xhr.onload = () => {
    // Check for http success status code
    if (xhr.status === 200) {
      statusEl.innerHTML = xhr.status;
      const _response = JSON.parse(xhr.responseText);
      // Check that we received a shape and response we expected
      if (_response.length) {
        const {orderId, variants} = _response[0];
        response1El.innerHTML = `OrderId : ${orderId}`;
        response2El.innerHTML = `Variants : ${JSON.stringify(variants)}`;
      }
    }
    // if not found
    if (xhr.status.toString().startsWith('4')) {
      response1El.innerHTML = `Error ${xhr.status}`;
    }
  };
  // handle xhr error
  xhr.onerror = e => {
    statusEl.innerHTML = `An Error Occured ${JSON.stringify(e)}`;
  };
  xhr.send();
};
