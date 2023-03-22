export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (QUERY) => {
  if (!QUERY) {
    throw new Error('Termo de busca não informado');
  }

  try {
    const LINK = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
    const response = await fetch(LINK);
    const data = await response.json();
    const dados = data;
    const { results } = dados;

    return results;
  } catch (error) {
    return error;
  }
};
