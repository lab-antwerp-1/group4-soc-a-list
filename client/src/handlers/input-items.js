import { data } from '../../data.js';
import { renderTable } from '../components/render-table.js';

/**
 * Entry point for users adding title and description to the list.
 * It is called each time the user clicks the "add" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */

export const getInputHandler = (event) => {
  /* -- entry point for adding a list -- */
  /* -- check the target -- */
  if (event.target.type !== 'button') {
    return;
  }

  /* -- gather user input from DOM -- */
  const title = event.target.form.text.value;
  const itemDescription = event.target.form.description.value;

  /* check input and update data */
  // if input box contains nothing, send warning and return
  const warnings = document.getElementById('warnings');
  warnings.innerText = '';

  if (title.length === 0) {
    warnings.innerText = 'Please enter a list title';
    return;
  }
  // otherwise, add content to data and clear the input box
  data[title] = itemDescription;
  document.getElementById('input-area').text.value = ''; //
  document.getElementById('description').value = ''; //
  // document.getElementById('input-area').text.placeholder = 'Enter new title'; // works, but it's kind of confusing with edit
  // document.getElementById('description').placeholder = 'Enter new description:'; // // works, but it's kind of confusing with edit

  /* -- render new words -- */

  const itemToRender = Object.keys(data);
  const descriptionToRender = Object.values(data);
  const newTable = renderTable(itemToRender, descriptionToRender);

  const listContainer = document.getElementById('display');
  listContainer.innerHTML = '';
  listContainer.appendChild(newTable);
};

/**
 * Entry point for users adding title and description to the list.
 * It is called each time the user press the "Enter" key.
 *
 * @param {Event} event - The event triggered when press the "Enter" key.
 */

export const getInputWithEnterHandler = (event) => {
  /* -- entry point for adding a list -- */

  /* -- check the target -- */
  if (
    event.target.nodeName !== 'INPUT'
    // && event.target.nodeName !== 'TEXTAREA' // stop handling Enter key on text area.
  ) {
    return;
  }
  if (event.key !== 'Enter') {
    return;
  }
  /* -- disable the default event only for tag INPUT -- */
  if (event.target.nodeName === 'INPUT') {
    event.preventDefault();
  }

  /* -- gather user input from DOM -- */
  const title = event.target.form.text.value;
  const itemDescription = event.target.form.description.value;

  /* check input and update data */
  // if input box contains nothing, send warning and return
  const warnings = document.getElementById('warnings');
  warnings.innerText = '';

  if (title.length === 0) {
    warnings.innerText = 'Please enter a list title';
    return;
  }
  // otherwise, add content to data and clear the input box
  data[title] = itemDescription;
  document.getElementById('input-area').text.value = ''; //
  document.getElementById('description').value = ''; //
  // document.getElementById('input-area').text.placeholder = 'Enter new title';    // works, but it's kind of confusing with edit
  // document.getElementById('description').placeholder = 'Enter new description:';   // works, but it's kind of confusing with edit
  /* -- render new words -- */

  const itemToRender = Object.keys(data);
  const descriptionToRender = Object.values(data);
  const newTable = renderTable(itemToRender, descriptionToRender);

  const listContainer = document.getElementById('display');
  listContainer.innerHTML = '';
  listContainer.appendChild(newTable);
};
