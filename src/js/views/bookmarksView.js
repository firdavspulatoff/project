import View from './View';
import icons from '../../img/icons.svg';
import { extend } from 'lodash-es';

class BookMarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'Recipe not founded. Please try again!';

  _generatorHtml(data) {
    console.log(data);
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
    <a class="preview__link" href="#${data.id}">
      <figure class="preview__fig">
        <img src="${data.image_url}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__name">
         ${data.title}
        </h4>
        <p class="preview__publisher">${data.publisher}</p>
      </div>
    </a>
  </li>`;
  }
  addhandleEvent(handle) {
    window.addEventListener('load', function () {
      handle();
    });
  }
}

export default new BookMarksView();
