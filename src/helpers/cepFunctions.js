export const getAddress = async () => {
  const inputCep = document.querySelector('section.cart input.cep-input');
  const API_1 = `https://cep.awesomeapi.com.br/json/${inputCep.value}`;
  const API_2 = `https://brasilapi.com.br/api/cep/v2/${inputCep.value}`;
  let infos;

  await Promise.any([fetch(API_1), fetch(API_2)])
    .then((response) => response.json())
    .then((data) => {
      if (data.cep) {
        infos = `${data.address} - ${data.district} - ${data.city} - ${data.state}`
      || `${data.street} - ${data.neighborhood} - ${data.city} - ${data.state}`;
      } else throw new Error('CEP não encontrado');
    });
  return infos;
};

export const searchCep = async () => {
  try {
    const data = await getAddress();
    const tagEndereco = document.querySelector('.cart__address');
    tagEndereco.innerHTML = data;
  } catch (error) {
    const tagEndereco = document.querySelector('.cart__address');
    tagEndereco.innerHTML = 'CEP não encontrado';
  }
};
