# 🚀 BuscaCEP
![Badge Status](https://img.shields.io/badge/Status-In%20Progress-green) | 
![Badge Plataform](https://img.shields.io/badge/-Android-green)

🚧 Em construção... 🚧

Este simples projeto foi desenvolvido afim de buscar conhecimento e praticar. Utilizando Webservice ([ViaCEP](https://viacep.com.br/)), buscando a informação e retornando para o usuário. O intuito deste app é para fins de estudos. Ele ainda está em desenvolvimento, portanto, serão implementadas novas funcionalidades, como é possível notar posteriormente. Sendo assim, como um iniciante, caso tenha alguma dúvida a respeito do que foi feito, ou sugestões para melhorar, entre em contato comigo por aqui, ou via [LinkedIn](https://www.linkedin.com/in/mmacielar/).

## 📝 Instruções

O projeto é simples de ser utilizado, basta inserir um CEP válido no campo disponível, e clicar em buscar. Para buscar um novo CEP, basta clicar em limpar e digitar um novo CEP ou apagar o CEP que foi digitado e digitar um novo. 
Segue o vídeo do funcionamento:

![BuscaCEP](https://user-images.githubusercontent.com/66790565/234268857-5f779033-52e5-4cf7-8632-fabfa61bb542.gif)

### 🔧 Funcionalidades

- [x] Buscar CEP
- [x] Mostrar o resultado
- [x] Salvar CEP
- [x] Listar CEP's buscados
- [ ] Deletar CEP's salvos
  
Problemas existentes que serão corrigidos:
* Ao tentar buscar um CEP em branco, inválido ou que não consta na base, fica carregando e não retorna nenhuma mensagem. O mesmo acontece para CEP inexistente ou que não constam na base de dados do ViaCep; 
* Ao tentar salvar o mesmo cep, não retorna nenhuma mensagem, apesar de não salvar. 
* Ao salvar um CEP, não retorna mensagem nenhum, apesar de salvar. 
* Ao salvar, os valores da listagem são duplicados (os existentes) somando ao novo valor salvo.


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
