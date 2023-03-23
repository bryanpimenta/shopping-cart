import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Testando se é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('Testando se a fetch é chamada', async () => {
    await fetchProduct("MLB1405519561");
    expect(fetch).toBeCalled();
  });
  it('Testando o endpoint da fetch', async () => {
    const endpoint = "https://api.mercadolibre.com/items/MLB1405519561";
    await fetchProduct("MLB1405519561");
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  it('Testando se o retorno é igual ao objeto `product`', async () => {
    const res = await fetchProduct("MLB1405519561");
    expect(res).toBe(product);
  });
  it('Testando a função sem parametro', async () => {
    const res = await fetchProduct();
    expect(res).toThrow();
  });
});
