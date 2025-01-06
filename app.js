const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.todos');

// Function to generate a new todo template
const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  list.insertAdjacentHTML('beforeend', html); // Use insertAdjacentHTML instead of innerHTML
};

// Function to filter todos based on the search term
const filterTodos = term => {
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term)) // Filter todos not matching the term
    .forEach(todo => todo.classList.add('filtered'));

  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term)) // Remove filtered class from matching todos
    .forEach(todo => todo.classList.remove('filtered'));
};

// Add new todos event
addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim(); // Get the trimmed value of the input

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset(); // Clear the input field after adding
  }
});

// Delete todos event
list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove(); // Remove the parent element (the todo item)
  }
});

// Filter todos event
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});