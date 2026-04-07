// URL for images: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png

//select elements from HTML
const searchBtn = document.querySelector('.black-button');
const inputField = document.querySelector('.number-input');
const imageScreen = document.querySelector('.pokemon-picture');
const nameScreen = document.getElementById('name');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const type1 = document.getElementById('type-1');
const type2 = document.getElementById('type-2');
const abilities = document.getElementById('abilities');

//function for reseting fields
const resetFields = () => {
    nameScreen.innerHTML = "";
    height.innerHTML = "";
    weight.innerHTML = "";
    type1.innerHTML = "";
    type2.innerHTML = "";
}

//function for getting a pokemon based on its index
const getPokemon = (num) => {
    resetFields();

    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then((res) => res.json())
    .then(data => {
        imageScreen.src = ` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
        nameScreen.innerHTML = data.name;
        height.innerHTML = `${data.height * 10} cm`;
        weight.innerHTML = `${data.weight / 10} kg`;
        type1.innerHTML = data.types[0].type.name;
        type2.innerHTML = "______";
        type2.innerHTML = data.types[1].type.name;
        abilities.innerHTML = data.abilities.length
    })
    .catch(error => {
        console.error('An error occurred: ', error);
        throw new Error('Something went wrong')
    })
}

//event listeners
inputField.addEventListener('keydown', event =>  {
    if (event.key === 'Enter') {
        searchBtn.click();
    }
})

searchBtn.addEventListener('click', () => {
    getPokemon(inputField.value);
})