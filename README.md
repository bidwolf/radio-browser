# Radio Vibe
<img src="https://github.com/user-attachments/assets/d5cd01b0-1bfa-4022-a63f-451f74fef5d5" width="400px">

O Radio Vibe é um projeto de rádio online com o intuito de trazer um pouco da experiência de ouvir rádio para dentro da internet.
Aqui você pode ver rádios do mundo todo, e com um toque, você pode checar o que tá rolando nas suas estações favoritas.
>[!NOTE]
>  This is a challenge by [Coodesh](https://coodesh.com/)
## Prototipagem

O protótipo do projeto foi feito usando o Figma e você pode acessá-lo diretamente [aqui](https://www.figma.com/proto/QzFtV2JVHBQq9fLl5lspAu/Radio-Vibe?node-id=0-1&t=BI9hyBaMTGRB5V7j-1)

Para acompanhar o processo de planejamento, links utilizados e outras informações [dá uma olhada no notion](https://www.notion.so/Radio-Vibe-19b6987476a38098a026f49e8ab1f80a?pvs=4)
## Tecnologias utilizadas

Este projeto foi construido utilizando principalmente os frameworks **NextJS** e **TailwindCSS** porém foram utilizados outras bibliotecas auxiliares como:

A escolha do NextJs foi algo mais voltado pro conforto de usar o React que tenho mais experiência e aplicar estratégias de cache por padrão.
O ecossistema do NextJS permite ainda tempos de resposta mais satisfatórios do ponto de vista de carregamento de tela. Além disso para uma melhor
integração futura com banco de dados e outras funcionalidades voltadas para a lógica de negócios da aplicação, o nextJs permite a criação de API Rest
em conjunto com a aplicação client side.

Já o tailwind foi por vontade de praticar, mas não muda o fato de que é uma excelente ferramenta pra criação de temas na aplicação de forma quase
automática, além de permitir construir a aplicação sem mudança de contexto. Una isso aos excelentes plugins de tailwind existentes no mercado, e o resultado
é uma experiência de dessenvolvimento sensacional.

- [@formatjs/intl](https://formatjs.github.io): Usado para entender a linguagem preferida do usuário baseando-se no sistema utilizado.
- [negotiator](https://github.com/jshttp/negotiator): Usado para captar os headers de requisição e fornecer para a função que detecta o tipo de linguagem
- [tailwind-merge](https://github.com/dcastil/tailwind-merge): Usado para unir e compor classes default com outras dependendo do uso.


## Como rodar este projeto

Por ser um projeto Next.js, você pode rodar o projeto com os seguintes comandos:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

>[!IMPORTANT]
>### App Vercel
>
>Este projeto estará disponível para acesso diretamente pela vercel, e você pode acessar o resultado do projeto clicando ou lendo a imagem abaixo:
>
><a href="https://radio-browser-two.vercel.app/favorites"><img width="257" alt="Screenshot 2025-02-18 at 06 59 47" src="https://github.com/user-attachments/assets/84e7a49f-ac1e-4a09-980e-e40f95a5d6b6" /></a>
