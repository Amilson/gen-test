# Gen Test

## Online

Apenas publiquei no cloudfront sem a criação de um domínimo.

Acesso: https://d17osqkdzt4526.cloudfront.net

<br/>

## Telas

O projeto consiste em 5 telas principais.

- A tela responsável por listar os produtos.

- A tela de deatlhes do produto.

- A tela de carrinho.

- A tela de compra realizada com sucesso.

- A tela com principais componentes que criei na library gen-style.

### Tela de listagem de produtos

![image](https://user-images.githubusercontent.com/10110065/228688802-3619b559-1566-4918-90d0-199ea9732861.png)

### Tela de detalhe do produto

![image](https://user-images.githubusercontent.com/10110065/228688952-cfdf5d55-be1f-4d55-9216-df9d56558e96.png)

### Tela de carrinho

![image](https://user-images.githubusercontent.com/10110065/228688999-12fb6f68-2678-4f18-b34f-bc5b4ef70029.png)

### Tela de compra realizada com sucesso

![image](https://user-images.githubusercontent.com/10110065/228689044-b76978e1-f928-4fbf-a119-01bd11dbcf69.png)

### Tela de componentes

![image](https://user-images.githubusercontent.com/10110065/228689090-3b398d5a-990e-4f59-924c-d656e6b02806.png)

## Gen Style

Para desenvolvimento do style, criei uma library contendo alguns componentes, e inicialmente idealizei o layout dos botões da plataforma inteira.

Esta library carrega um json com cores no formato hexadecimal localizado em `assets/gen-style-settings.json`.

Este JSON também contém a configuração de font-family. A library inteira se modela á configuração desse JSON.

O que possibilita a criação de white-labels diferenciados, caso a gen tenha clientes que queiram contratar a plataforma e queiram utilizar seu proprio styleguide (cores, imagens, etc)

<br/>

O projeto contém:

- Buttons

Com opção de tipo primary, border, e cores success, white, question.

```
<gen-button type="primary">
  Primary
</gen-button>
```

---

### Como utilizar a library:

Após customizar ou criar algum componente novo, rodar o comando:

```
ng build gen-style
```

Será disponibilizado o build na pasta /dist.
Nesse caso poderia ser publicado tambem no npm, onde tambem já fiz em diversos projetos.

---

## Padrão do projeto

### Services

Todos services utilizados nos projetos que construo, eu costumo utilizar um padrão com "resolve", utilizando sempre o conceito o componente fica totalmente desacoplado do service no sentido de que o componente precisa ser o menos "inteligente" possível e não efetuar chamadas sem necessidade ao service.
Então toda vez que uma rota é carregada, o service correspondente é resolvido, e o componente somente utiliza as variaveis que o próprio service já preencheu.

Para os services também tenho um CommonService, com alguns métodos onde qualquer outro service extend essa classe para ter varios recursos padrão.

### Componentes

Também contém um componente chamado BaseCompnent, com recursos onde outro componente pode também extende-lo e herder esses recursos.

### Code Style

Gosto de utilizar como base o airbnb style guide, junto ao eslint e prettier, também configurado no projeto.

## Store

Utilizei o ngrx-store para armazenamento de estado

Então toda request realizada, bem como também uma regra de negócio necessária, não ficou no component.
E sim eu fiz a inclusão no service que a store precisa disparar para preencher a entidade.

## Deploy

Estou utilizando ambiente da aws

Então criei o seguinte:

- Criei 1 bucket no s3 chamado: gen-teste
- Criei 1 cloudfront para consumir o conteudo do bucket s3 gen-teste

O deploy consiste em:

- rodar o comando `ng build`
- e na sequência os seguintes comandos:

```
aws s3 rm s3://gen-teste --recursive
cd dist/gen-test
aws s3 cp . s3://gen-teste --recursive
aws cloudfront create-invalidation --distribution-id E28ZXE9B75RCZF --paths "/*"
```
