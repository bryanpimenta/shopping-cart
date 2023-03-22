export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (QUERY) => {
  if (!QUERY) {
    throw new Error('Termo de busca não informado');
  }
  const LINK = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  try {
    const response = await fetch(LINK);
    const data = await response.json();
    const dados = data;
    const { results } = dados;

    return results;
  } catch (error) {
    console.error(error);
  }
};
