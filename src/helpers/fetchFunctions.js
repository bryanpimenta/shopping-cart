export const fetchProduct = async (ProductID) => {
  if (!ProductID) {
    throw new Error('ID não informado');
  }

  const LINK = `https://api.mercadolibre.com/items/${ProductID}`;
  const dados = await fetch(LINK)
    .then((res) => res.json());
  return dados;
};

export const fetchProductsList = async (QUERY) => {
  if (!QUERY) {
    throw new Error('Termo de busca não informado');
  }
  const LINK = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  const dados = await fetch(LINK)
    .then((res) => res.json());
  const { results } = dados;

  return results;
};
