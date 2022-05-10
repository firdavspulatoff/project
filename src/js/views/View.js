import icons from '../../img/icons.svg';

export default class View {
  _data;
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.errorMesage();
    this._data = data;
    if (!data) return;
    this._clearHtml();
    this._generatorHtml(this._data);
    if (!this._data.ingredients) return;
    this._data.ingredients.forEach(element => {
      this._reseptIngridient(element);
    });
  }

  _clearHtml() {
    this._parentElement.innerHTML = '';
  }

  spinner() {
    let html = `<div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>`;
    this._clearHtml();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  errorMesage(eror) {
    const html = ` <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${this._errorMessage}</p>
    </div>`;
    this._clearHtml();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }
}
