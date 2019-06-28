let input = document.querySelector('.input-text');
let button = document.getElementById('button');
let ul = document.querySelector('.todos');

let handleSubmit = () => {
  let li = document.createElement('li');
  li.textContent = input.value ;
  ul.appendChild(li);
  input.value = '';
}
button.addEventListener('click', handleSubmit);