import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { categories } from './helpers/categories';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const listProducts = document.querySelector('.products');

const loadSpan = (error) => {
  const div = document.createElement('div');
  if (!error) {
    div.className = 'loading';
    div.innerText = 'carregando...';
    return listProducts.append(div);
  }
  div.className = 'error';
  div.innerText = 'Algum erro ocorreu, recarregue a página e tente novamente';
  return listProducts.append(div);
};

const removeSpan = () => {
  const span = document.querySelector('.loading');
  listProducts.removeChild(span);
};

const removeProducts = async () => {
  const products = document.querySelector('.products');

  while (products.firstChild) {
    products.removeChild(products.firstChild);
  }
}

const loadPageItens = async (category = 'computador') => {
  await removeProducts();
  loadSpan();
  const products = await fetchProductsList(category)
    .catch((error) => {
      removeSpan();
      return loadSpan(error);
    });
  removeSpan();

  return products.forEach((product) => {
    const newItemProduct = createProductElement(product);
    listProducts.appendChild(newItemProduct);
  });
};

function createCategoryCards() {
  const container = document.querySelector('.container-filter');

  categories.forEach((category, index) => {
    const card = document.createElement('button');
    card.classList.add(`card-${index}`);
    card.classList.add('button-filter');
    
    card.innerHTML = `
      <p>${category.name}</p>
    `;
    
    container.appendChild(card);
    document.querySelector(`.card-${index}`).addEventListener('click', () => {
      loadPageItens(category.name);
    });
  });
}

createCategoryCards();
loadPageItens();
