fetch('https://viacep.com.br/ws/15706076/json').then((response) =>
response.json()).then((json) => {
  console.warn (json);
}).catch((error) => {
  console.error(error);
})

export default Info;