import { async } from 'regenerator-runtime';
import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/search';
import resultsView from './views/resultsView';
import pagination from './views/pagination';
import bookmarksView from './views/bookmarksView';
import { debounce } from 'lodash-es';
// if (module.hot) {
//   module.hot.accept();
// }

async function renderRight() {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.spinner();
    await model.recipeShow(id);
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.errorMesage(error);
  }
}

async function searchControler() {
  try {
    resultsView.spinner();
    let query = searchView.getValue();
    if (!query) return;
    await model.searchModel(query);
    resultsView.render(model.getSearchResultsPage());
    pagination._generatorHtml(model.state.search);
  } catch (error) {
    resultsView.errorMesage(error);
  }
}

function paginationControler(goto) {
  resultsView.render(model.getSearchResultsPage(goto));
  pagination._generatorHtml(model.state.search);
}

function servingsControler(num) {
  if (num <= 0) return;
  model.servings(num);
  recipeView.render(model.state.recipe);
}

function bookmarkControler() {
  if (model.state.recipe.bookmarked) {
    model.deleteBookmark(model.state.recipe.id);
  } else {
    model.bookmarks(model.state.recipe);
  }
  bookmarksView.render(model.state.bookmark);
  recipeView.render(model.state.recipe);
}

function bookmarkLocal() {
  model.getLocalStorage();
  bookmarksView.render(model.state.bookmark);
}
bookmarksView.addhandleEvent(bookmarkLocal);
pagination._addHandleClick(paginationControler);
recipeView.addHandleEvent(renderRight);
searchView.addHandleEvent(searchControler);
recipeView.addHandleEventServings(servingsControler);
recipeView.addHandleEventBookmark(bookmarkControler);
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
