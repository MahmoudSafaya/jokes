
const url = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky?blacklistFlags=religious&amount=10';

let dataObj ={
  list: {}
}

fetch(url)
.then(res => res.json())
.then(data => dataObj.list = data);

const displayJokes = setTimeout(() => {
  
  for (let i=0; i<dataObj.list.jokes.length; i++) {

    const jokes = dataObj.list.jokes[i];
    const type = jokes.type;
    const setup = jokes.setup;
    const delivery = jokes.delivery;
    const joke = jokes.joke;
    const badge = jokes.category

    const div = document.createElement('div');
    div.setAttribute('class', `${type}`);

    if(type === 'single') {
      div.innerHTML = `<span class='badge'>${badge}</span>
        <p>${joke}</p>`;

    } else if(type === 'twopart') {
      div.innerHTML = `<span class='badge'>${badge}</span>
        <h4>${setup}</h4>
        <p>${delivery}</p>`;
    }
    

    const jokesParent = document.querySelector('#jokes');
    jokesParent.appendChild(div);
    

  }
}, 700);

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  window.location.reload();
});