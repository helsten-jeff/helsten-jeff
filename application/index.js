const validateUniqueItem = item => {};

const handleDelete = el => {
  const parentLi = el.parentNode;
  parentLi.parentNode.removeChild(parentLi);
  handleSave();
};

const editItem = el => {
  const val = el.children[0].value;
  const newElement = document.createRange().createContextualFragment(`
    <li id="${el.id}">
    <span class="list-item">${val}</span>
      <button
        onclick="handleEdit(this)"
      >
        Edit
      </button>
      <button
        onclick="handleDelete(this)"
      >
        Delete
      </button>
    </li>`);
  el.parentNode.replaceChild(newElement, el);
  handleSave();
};

const handleEdit = el => {
  const parentLi = el.parentNode;
  const tempInput = document.createRange().createContextualFragment(`
  <input type="text" id="edit-${parentLi.id}" value="${parentLi.children[0].innerHTML}"/>
  <button onclick="editItem(${parentLi.id})">Update</button>
  `);
  parentLi.innerHTML = '';
  parentLi.appendChild(tempInput);
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
    <li id="${uniqueId}">
    <span class="list-item">${name}</span>
      <button
        onclick="handleEdit(this)"
      >
        Edit
      </button>
      <button
        onclick="handleDelete(this)"
      >
        Delete
      </button>
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
      <button
        onclick="handleEdit(this)"
      >
        Edit
      </button>
      <button
        onclick="handleDelete(this)"
      >
        Delete
      </button>
    </li>`);
      const list = document.getElementById('grocery-list');
      list.appendChild(newElement);
    });
  }
};
