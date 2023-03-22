import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const listProducts = document.querySelector('.products');

const loadSpan = () => {
  listProducts.innerHTML = '<div class=loading>carregando...</div>';
};

const removeSpan = () => {
  const span = document.querySelector('.loading');
  listProducts.removeChild(span);
};

loadSpan();
const products = await fetchProductsList('computador');
removeSpan();

products.forEach((product) => {
  const newItemProduct = createProductElement(product);
  listProducts.appendChild(newItemProduct);
});
