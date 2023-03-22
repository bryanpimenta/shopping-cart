import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toEqual('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  
  it('Testando se o retorno é uma estrutura de dados em objeto da função fetchProductsList', async () => {
    const response = await fetchProductsList('computador');
    expect(response).toBe(computadorSearch);
  });
  
  it ('Testando a função fetchProductsList sem parametro', async () => {
/*     const response = await fetchProductsList();
    expect(response).toThrow((new Error("Termo de busca não informado"))); */
  });
  // it('...', () => {
  // });
});
