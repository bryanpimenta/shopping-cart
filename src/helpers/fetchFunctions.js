export const fetchProduct = () => {
  // seu código aqui
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
