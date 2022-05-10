import icons from '../../img/icons.svg';
import View from './View';

class RecipeView extends View {
  _errorMessage = 'No recipes found for your query. Please try again!';
  _parentElement = document.querySelector('.recipe');

  _generatorHtml(obj) {
    let html = `
    <figure class="recipe__fig">
        <img src="${obj.image_url}" alt="Tomato" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${obj.title}</span>
        </h1>
      </figure>
      
      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${
            obj.cooking_time
          }</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${
            obj.servings
          }</span>
          <span class="recipe__info-text">servings</span>
      
          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings" data-serv="${
              obj.servings - 1
            }"  id="${obj.servings - 1}">
              <svg>
                <use href="${icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings" data-serv="${
              obj.servings + 1
            }" id="${obj.servings + 1}">
              <svg>
                <use href="${icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>
      
        <div class="recipe__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="${icons}#icon-bookmark${
      obj.bookmarked ? '-fill' : ''
    }"></use>
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
          <span class="recipe__publisher">${
            obj.publisher
          }</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${obj.source_url}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>`;
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  _reseptIngridient(obj) {
    let html = `
    <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${obj.quantity ? obj.quantity : ''}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${obj.unit}</span>
          ${obj.description}
        </div>
      </li>`;
    document
      .querySelector('.recipe__ingredient-list')
      .insertAdjacentHTML('afterbegin', html);
  }
  addHandleEvent(handle) {
    ['hashchange', 'load'].map(val => {
      window.addEventListener(val, handle);
    });
  }
  addHandleEventServings(handle) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--tiny');
      if (!btn) return;
      const servNumber = +btn.dataset.serv;
      handle(servNumber);
    });
  }
  addHandleEventBookmark(handle) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--round');
      if (!btn) return;
      handle();
    });
  }
}

export default new RecipeView();
