# 🚀 BuscaCEP
![Badge in progress](https://img.shields.io/badge/status-in%20progress-brightgreen)

🚧 Em construção... 🚧

Este simples projeto visa buscar informações de uma API (a selecionada foi a ViaCEP) e mostrar para o usuário. O intuíto desde app é para fins de estudos. Ele ainda está em desenvolvimento, portanto, serão implementadas novas funcionalidades, como é possível notar. Sendo assim, como estou iniciando na área (de forma pessoal), caso tenha alguma dúvida a respeito do que foi feito, ou sugestões de melhora, entre em contato comigo por aqui, ou via [LinkedIn](https://www.linkedin.com/in/mmacielar/).
## 📝 Instruções

O projeto é simples de ser utilizado, basta inserir um CEP válido no campo disponível, e clicar em buscar. Para buscar um novo CEP, basta clicar em limpar e digitar um novo CEP ou apagar o CEP que foi digitado e digitar um novo. 
Segue o vídeo do funcionamento:
![BuscaCEP](https://user-images.githubusercontent.com/66790565/231463434-59564860-765e-4874-8fe7-492fb75ef5a1.gif)


### 🔧 Funcionalidades

- [x] Buscar CEP
- [x] Mostrar resultado
- [ ] Salvar CEP
- [ ] Listar CEP's buscados

Ao tentar salvar, ocorre erro pois ainda não foi desenvolvido. 
A tela de listagem ainda não possui nenhuma informação. 
Problemas que precisam de correções:
* Ao tentar buscar um CEP em branco, inválido ou que não consta na base, fica carregando e não retorna nenhuma mensagem; 


## 🛠 Tecnologias

* [npm](https://www.npmjs.com/) - Gerenciador de pacotes
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem
* [Expo](https://expo.dev/) - Conjunto de ferramentas para o desenvolvimento mobile
* [React](https://react.dev/) e [React Native](https://reactnative.dev/) - frameworks

Para banco de dados, realizei algumas tentativas. Inicialmente, minha ideia era utilizar o [MongoDB Realm](https://www.mongodb.com/docs/realm/), porém identifiquei muita complexidade, tentando utilizar juntamente com o [Expo](https://expo.dev/). Portanto, irei tentar utilizar com o [Firebase Realtime Database](https://firebase.google.com/docs/database?hl=pt-br). 
Este projeto foi construído em sua maior parte, utilizando as documentações listadas. 
Para visualizar os pacotes utilizados, basta acessar o arquivo [package.json](/package.json).

## 🤝 Contribuições

Gostaria de agradecer ao Davi, um amigo que auxiliou em relação ao fetch. 
Acessem o perfil dele aqui no GitHub: [Davi Torelli](https://github.com/DaviTorelli).

## 📃 Conclusões

Este projeto contribuiu com um aprendizado gigantesco, mesmo ainda estando incompleto. O código é livre para ser utilizado da maneira que for desejado. 
