const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const recipesGrid = document.querySelector(".recipes");

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}
function displayRecipes(recipes) {
  console.log("Creating HTML");
  const html = recipes.map((recipe) =>
    `<div class="recipe">
      <h2>${recipe.title}</h2>
      <p>${recipe.ingredients}</p>
      ${
        recipe.thumbnail &&
        `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`
      }
    </div>`
  );
  recipesGrid.innerHTML = html.join("");
}

fetchRecipes('pizza');
