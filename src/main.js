import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const products = await fetchProductsList('computador');
const listProducts = document.querySelector('.products');

products.forEach((product) => {
  const newItemProduct = createProductElement(product);
  listProducts.appendChild(newItemProduct);
});
