const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });

minhaPromise()
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });

executaPromise = async () => {
  try {
    const response = await minhaPromise();
    console.log(response);
  } catch (err) {
    console.warn("Erro na API");
  }
};
