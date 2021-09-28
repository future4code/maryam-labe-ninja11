# Labeninjas - Design

Neste documento procuramos explicar e justificar nossas escolhas de design para o projeto. Estamos anexando também os wireframes (“esqueletos”) das páginas, contendo também os fluxos de navegação.

## Paleta de cores

[ img paleta]

Escolhemos a paleta de cores da aplicação a partir da logomarca da empresa que nos foi fornecida. Através da ferramenta Image Color Picker detectamos que as cores principais:

## Fontes

Escolhemos a fonte Roboto porque ela é sem serifa, o que facilita a leitura em telas. Além disso, é uma das fontes mais utilizadas na API Google Fontes e tem várias espessuras de haste, o que aumenta as suas possibilidades de aplicação.

[ img fontes ]

A partir dessa fonte, criamos os seguintes estilos:

[ img estilos ]

## Elementos gráficos

### Logomarca

Optamos por editar a logomarca, separando a imagem da parte textual para que o nome da marca seja ampliado e receba assim maior destaque visual.

### Botões

Optamos por deixar os botões com cantos arredondados para ficar mais harmônico.

### Inputs, listas e campos de texto

No caso dos campos de input, vamos deixar os cantos em ângulo reto porque percebemos que algumas funções não funcionam bem com cantos arredondados, como por exemplo, os campos que apresentam barra de rolagem, conforme ilustramos a seguir:

[ img inputs 1] [ img inputs 2]

## Ferramentas
React porque ele permite a criação de componentes que podem ser repetidos ao longo do projeto. Isso garante uma unidade e consistência visual à aplicação. Além disso, para a estilização, optamos por utilizar um Design System, que é …, para economia de tempo e aumento da produtividade no projeto. Escolhemos o Material UI porque a integração dele com o React é mais harmônica