import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';

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

const loadPageItens = async () => {
  loadSpan();
  const products = await fetchProductsList('computador')
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

loadPageItens();
