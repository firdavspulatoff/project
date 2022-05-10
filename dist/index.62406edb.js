const recipeContainer = document.querySelector('.recipe');
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
async function renderRight(id) {
    let dataJson = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
    let data = await dataJson.json();
    let recipe = data.data.recipe;
    renderHtml(recipe);
    let recipeIngridient = recipe.ingredients;
    recipeIngridient.forEach((element)=>{
        reseptIngridient(element);
    });
    console.log(data);
}
renderRight();
function renderHtml(obj) {
    recipeContainer.innerHTML = '';
    let html = `<figure class="recipe__fig">
  <img src="${obj.image_url}" alt="Tomato" class="recipe__img" />
  <h1 class="recipe__title">
    <span>${obj.title}</span>
  </h1>
</figure>

<div class="recipe__details">
  <div class="recipe__info">
    <svg class="recipe__info-icon">
      <use href="../src/img/icons.svg#icon-clock"></use>
    </svg>
    <span class="recipe__info-data recipe__info-data--minutes">${obj.cooking_time}</span>
    <span class="recipe__info-text">minutes</span>
  </div>
  <div class="recipe__info">
    <svg class="recipe__info-icon">
      <use href="../src/img/icons.svg#icon-users"></use>
    </svg>
    <span class="recipe__info-data recipe__info-data--people">${obj.servings}</span>
    <span class="recipe__info-text">servings</span>

    <div class="recipe__info-buttons">
      <button class="btn--tiny btn--increase-servings">
        <svg>
          <use href="../src/img/icons.svg#icon-minus-circle"></use>
        </svg>
      </button>
      <button class="btn--tiny btn--increase-servings">
        <svg>
          <use href="../src/img/icons.svg#icon-plus-circle"></use>
        </svg>
      </button>
    </div>
  </div>

  <div class="recipe__user-generated">
    <svg>
      <use href="../src/img/icons.svg#icon-user"></use>
    </svg>
  </div>
  <button class="btn--round">
    <svg class="">
      <use href="../src/img/icons.svg#icon-bookmark-fill"></use>
    </svg>
  </button>
</div>

<div class="recipe__ingredients">
  <h2 class="heading--2">Recipe ingredients</h2>
  <ul class="recipe__ingredient-list">
   
  </ul>
</div>

<div class="recipe__directions">
  <h2 class="heading--2">How to cook it</h2>
  <p class="recipe__directions-text">
    This recipe was carefully designed and tested by
    <span class="recipe__publisher">${obj.publisher}</span>. Please check out
    directions at their website.
  </p>
  <a
    class="btn--small recipe__btn"
    href="${obj.source_url}"
    target="_blank"
  >
    <span>Directions</span>
    <svg class="search__icon">
      <use href="src/img/icons.svg#icon-arrow-right"></use>
    </svg>
  </a>
</div>`;
    recipeContainer.insertAdjacentHTML('afterbegin', html);
}
function reseptIngridient(obj) {
    let html = `
  <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="src/img/icons.svg#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${obj.quantity}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${obj.unit}</span>
        ${obj.description}
      </div>
    </li>`;
    document.querySelector('.recipe__ingredient-list').insertAdjacentHTML('afterbegin', html);
} // https://forkify-api.herokuapp.com/v2
 ///////////////////////////////////////

//# sourceMappingURL=index.62406edb.js.map
