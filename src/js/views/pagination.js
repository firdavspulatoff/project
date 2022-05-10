import View from './View';
import icons from '../../img/icons.svg';
import { extend } from 'lodash-es';

class Pagination extends View {
  _parentElement = document.querySelector('.pagination');

  _addHandleClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generatorHtml(data) {
    const pageSum = Math.ceil(data.results.length / data.resultsPerPage);

    if (data.page === 1 && pageSum > 1) {
      this._clearHtml();
      let html = `
      <button data-goto="${
        data.page + 1
      }" class="btn--inline pagination__btn--next">
          <span>Page ${data.page + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
      </button>
      `;
      this._parentElement.insertAdjacentHTML('afterbegin', html);
    } else if (data.page === pageSum && pageSum > 1) {
      this._clearHtml();
      let html = `
      <button data-goto="${
        data.page - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${data.page - 1}</span>
    </button>
      `;
      this._parentElement.insertAdjacentHTML('afterbegin', html);
    } else if (data.page < pageSum && pageSum > 1) {
      this._clearHtml();
      let html = `
      <button data-goto="${
        data.page - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${data.page - 1}</span>
    </button>
    <button data-goto="${
      data.page + 1
    }" class="btn--inline pagination__btn--next">
          <span>Page ${data.page + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
      </button>
      `;
      this._parentElement.insertAdjacentHTML('afterbegin', html);
    } else {
      return console.log(`bir`);
    }
  }
}

export default new Pagination();
