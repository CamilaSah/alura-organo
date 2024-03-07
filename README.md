![Front-end-React](https://github.com/CamilaSah/alura-organo/assets/128820692/2e78b581-0eff-42a5-8695-e8d216159c89)
![Static Badge](https://img.shields.io/badge/Status-Em%20andamento-%2391DCFF)

<h1>Organo</h1>
Neste projeto foi criada uma aplicação web do zero com React, que é o Organo, uma aplicação que permite a configuração e o cadastro de jogadores, separados por níveis (Nível A, Nível B, Nível C, etc.), no qual será possível adicionar dinamicamente jogadores a esses níveis. 
<br>
Ele foi implementado utilizando o layout do Figma, desenvolvido por profissionais da Alura. 
<br>
O projeto foi iniciado do zero com o npx create-react-app, criado e utilizado todos os componentes, com a publicação do resultado final na Vercel.
<br>
Obs.: Como é necessário desenvolver um banner e logo condizentes com o novo tema que eu escolhi, este projeto ainda não está finalizado. O tema proposto pela Alura é a configuração e organização da empresa da Alura, separados pelas Escolas (Front-end, programação, data science, etc.).

## :hammer: Funcionalidades do projeto
- `Criar o card do jogador`: o usuário pode cadastrar um jogador ao inserir o nome, pontos, imagem e nível e clicar no botão "Criar Card".
- `Mostrar o card do jogador por nível`: o usuário pode visualizar os jogadores separados por níveis.

## 📁 Acesso ao projeto

Você pode acessar o projeto clicando [aqui](https://alura-organo-lime.vercel.app/).

## ✔️ Técnicas e tecnologias utilizadas

Técnicas utilizadas:
- ``npx create-react-app``: utilizado para criar uma aplicação base React.
- ``export default``: utilizado para exportar um único valor, objeto, função ou classe.
- ``import``: utilizado para importar o arquivo .css no arquivo .js, além de importar outros componentes e {useState}.
- ``JSX``: é como o React lê o return e transforma em elementos no DOM.
- ``Componente funcional``: foram criados os componentes de banner, botão, campo texto, footer, formulário, jogador, lista suspensa e nível.
- ``Estilo CSS``: foram definidos cores de fundo, centralização, tamanho, borda, sombra, etc. para os componentes criados com base no layout do Figma disponibilizado.
- ``props``: ou propriedades, foram utilizadas para passar dados entre componentes.
- ``props children``: foi usada para passar componentes como dados para outros componentes, de uma forma que preserva a estrutura de árvore do DOM. Neste caso, foi utilizada para o botão com o intuito de pegar o texto e o que mais tiver dentro do botão.
- ``onSubmit``: utilizada para quando o formulário for submetido, a função atrelada será executada.
- ``onChange``: utilizado para controlar inputs. Neste caso, toda vez que ele alterar o input, ou seja, a cada letra que o usuário digitar, será executada uma função.
- ``event.preventDeafult()``: previne o comportamento padrão de fazer o submit da página para o próprio endereço, ou seja, previne que a página seja recarregada ao ser submetida.
- ``obrigatorio={true}`` e ``required``: foram utilizados para colocar os inputs como campos obrigatórios.
- ``.map``: utilizado para renderizar listas, neste caso, os níveis da lista suspensa e os jogadores em cada nível.
- ``.filter``: utilizado para filtrar os jogadores por nível.
- ``hook``: utilizado para garantir que tanto a alteração da minha variável interna quanto pelo usuário tivesse o vínculo do componente que precisava ser atualizado novamente.
- ``useState``: utilizado para gerenciar o estado de um componente, ou seja, quando os campos de texto receberem valores novos ao criar o card, o React saberá que precisa renderizar.
- ``Operador ternário``: (?) - se positivo, faça a primeira condição e (:) - se negativo, faça a outra. Foi utilizado para não mostrar os níveis vazios.
- ``Debugger``: utilizado para depurar o código.

Tecnologias e ferramentas utilizadas:
- ``Visual Studio Code``: editor de código.
- ``Firefox e Chrome``: navegadores utilizados para teste.
- ``React``: utilizado para criar a interface de usuário (UI) do projeto.
- ``Figma``: utilizado para visualizar o layout do site e ser a referência na hora do desenvolvimento.
- ``DevTools``: utilizamos a aba “Console”, no qual podemos executar qualquer código JavaScript, além de nos ajudar a desenvolver, a entender o nosso código e ver como os erros são apresentados. Além disso, foram acessados os dados salvos no navegador no Local Storage.
- ``Git``: ferramenta de controle de versão de seu arquivo, projeto ou código. 
- ``GitHub``: plataforma para gerenciar seu código e criar um ambiente de colaboração entre devs (permite compartilhamento de código através da criação de repositórios), utilizando o Git como sistema de controle.
- ``Vercel``: colocar o projeto no ar e compartilhar com o mundo.

## 📚 Mais informações do curso
Gostou do projeto e quer conhecer mais? Você pode acessar o curso que me ajudou a desenvolver o projeto desde o começo! 
Busque na plataforma da Alura o curso da escola Front-end:
- [React: desenvolvendo com JavaScript](https://cursos.alura.com.br/course/react-desenvolvendo-javascript).

Esse curso faz parte da formação [Explore React com Javascript](https://cursos.alura.com.br/formacao-react-javascript) da Alura

# Autores

| <img src="https://github.com/CamilaSah/site-pessoal/assets/128820692/bed790ab-3722-4503-8fed-c786e774661b" width="100"><br>[<sub>Camila Sayuri Tokubo</sub>](https://www.linkedin.com/in/camila-tokubo/)|
| :---: |

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
