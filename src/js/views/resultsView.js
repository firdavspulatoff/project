import View from './View';
import icons from '../../img/icons.svg';
import { extend } from 'lodash-es';

class resultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'Recipe not founded. Please try again!';
  _generatorHtml(data) {
    data.forEach(element => {
      this._parentElement.insertAdjacentHTML(
        'afterbegin',
        this._generatorHtmlResult(element)
      );
    });
  }
  _generatorHtmlResult(data) {
    return `
      <li class="preview">
       <a class="preview__link preview__link--active" href="#${data.id}">
        <figure class="preview__fig">
          <img src="${data.image_url}" alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${data.title}</h4>
          <p class="preview__publisher">${data.publisher}</p>
          <div class="preview__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>`;
  }
}

export default new resultsView();
