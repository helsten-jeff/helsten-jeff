const validateUniqueItem = item => {};

const handleDelete = el => {
  el.classList.remove('fadeIn');
  el.classList.add('fadeOut');
  setTimeout(() => {
    el.parentNode.removeChild(el);
    handleSave();
  }, 2000);
};

const editItem = el => {
  const val = el.children[0].value;
  const newElement = document.createRange().createContextualFragment(`
    <li id="${el.id}">
    <span class="list-item">${val}</span>
    <div>
      <button
        class="edit"
        onclick="handleEdit(${el.id})"
      >
        Edit
      </button>
      <button
        class="delete"
        onclick="handleDelete(el)"
      >
        Delete
      </button>
      </div>
    </li>`);
  el.parentNode.replaceChild(newElement, el);
  handleSave();
};

const handleEdit = (liToEdit, name = '') => {
  const id = liToEdit.id;
  const tempInput = document.createRange().createContextualFragment(`
  <input type="text" id="edit-${id}" value="${name}"/>
  <button class="update" onclick="editItem(${id})">Update</button>
  `);
  liToEdit.innerHTML = '';
  liToEdit.appendChild(tempInput);
};

const addNewItem = () => {
  const input = document.getElementById('add-item');
  const name = input.value;
  if (input.value.length > 0) {
    // Generate unique ID
    const letterPrefix = String.fromCharCode(
      65 + Math.floor(Math.random() * 26),
    );
    const uniqueId = letterPrefix + Date.now();
    // Get grocery list
    const list = document.getElementById('grocery-list');
    // Create new li
    const newLi = document.createElement('li');
    newLi.id = uniqueId;
    const title = document.createElement('span');
    title.appendChild(document.createTextNode(name));
    newLi.appendChild(title);
    // Add buttons
    const edit = document.createElement('button');
    edit.appendChild(document.createTextNode('Edit'));
    edit.onclick = () => {
      handleEdit(uniqueId);
    };
    newLi.appendChild(edit);
    const remove = document.createElement('button');
    remove.appendChild(document.createTextNode('Delete'));
    remove.onclick = () => {
      handleDelte(uniqueId);
    };
    newLi.appendChild(remove);
    //list.appendChild(newLi);
    input.value = '';
    const newElement = document.createRange().createContextualFragment(`
    <li id="${uniqueId}" class="new-item fadeIn">
    <span class="list-item">${name}</span>
    <div>
      <button
        class="edit"
        onclick="handleEdit(${uniqueId}, name)"
      >
        Edit
      </button>
      <button
        class="delete"
        onclick="handleDelete(${uniqueId})"
      >
        Delete
      </button>
        </div>
    </li>`);
    list.appendChild(newElement);
    handleSave();
  }
};

const handleSave = () => {
  const l = document.getElementsByClassName('list-item');
  let vals = [];
  for (let el of l) {
    vals.push(el.innerHTML);
  }
  localStorage.setItem('groceryList', JSON.stringify(vals));
};

const initializeApp = () => {
  const zipCode = localStorage.getItem('zipCode');
  if (zipCode) {
    document.getElementById('zipCheck').value = 'checked';
    document.getElementById('zip').value = zipCode;
  }

  const groceryList = localStorage.getItem('groceryList');
  if (JSON.parse(groceryList).length) {
    JSON.parse(groceryList).forEach(name => {
      // Generate unique ID
      const letterPrefix = String.fromCharCode(
        65 + Math.floor(Math.random() * 26),
      );
      const uniqueId = letterPrefix + Date.now();

      const newElement = document.createRange().createContextualFragment(`
    <li id="${uniqueId}">
    <span class="list-item">${name}</span>
    <div>
      <button
        class="edit"
        onclick="handleEdit(${uniqueId}, name)"
      >
        Edit
      </button>
      <button
        class="delete"
        onclick="handleDelete(${uniqueId})"
      >
        Delete
      </button>
      </div>
    </li>`);
      const list = document.getElementById('grocery-list');
      list.appendChild(newElement);
    });
  }
};

const toggleRememberZip = () => {
  if (localStorage.getItem('zipCode')) {
    localStorage.removeItem('zipCode');
  } else {
    const val = document.getElementById('zip').value;
    localStorage.setItem('zipCode', val);
  }
};

const toggleWeatherDisplay = () => {
  const el = document.getElementById('weatherContent');
  if (el.classList.contains('hidden')) {
    el.classList.remove('hidden');
    document.getElementById('chevron').classList.remove('chevron-spin');
  } else {
    el.classList.add('hidden');
    document.getElementById('chevron').classList.add('chevron-spin');
  }
};
