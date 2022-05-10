class SearchView {
  _parentElememt = document.querySelector('.search');
  getValue() {
    return document.querySelector('.search__field').value;
  }
  addHandleEvent(handle) {
    this._parentElememt.addEventListener('submit', function (e) {
      e.preventDefault();

      handle();
      document.querySelector('.search__field').value = '';
    });
  }
}
export default new SearchView();
