# Labeninjas - Design

Neste documento procuramos explicar e justificar nossas escolhas de design para o projeto. Estamos anexando também os wireframes (“esqueletos”) das páginas, contendo também os fluxos de navegação.

## Paleta de cores

Escolhemos a paleta de cores da aplicação a partir da logomarca da empresa que nos foi fornecida. Através da ferramenta Image Color Picker detectamos que as cores principais:

![image](https://user-images.githubusercontent.com/42283687/135150785-7fe58d64-a128-4d37-885f-94a4c8f16b2b.png)


## Fontes

Escolhemos a fonte Roboto porque ela é sem serifa, o que facilita a leitura em telas. Além disso, é uma das fontes mais utilizadas na API Google Fontes e tem várias espessuras de haste, o que aumenta as suas possibilidades de aplicação.

![image](https://user-images.githubusercontent.com/42283687/135151219-f664e45c-3811-4aff-be30-564245b00e7d.png)


A partir dessa fonte, criamos os seguintes estilos:

![image](https://user-images.githubusercontent.com/42283687/135151399-f9fc85b8-7c37-4a39-bc3b-a8daccaefaad.png)


## Elementos gráficos

### Logomarca

No cabeçalho da página, optamos por editar a logomarca, separando a imagem da parte textual para que o nome da marca seja ampliado e receba assim maior destaque visual.

![image](https://user-images.githubusercontent.com/42283687/135158783-2e3a1f95-2c48-4e8e-91fc-76c33c3d7da3.png)

### Botões

Optamos por deixar os botões com cantos arredondados para ficar mais harmônico. Criamos um estilo primário, para ser utilizados quando a opção é a preferencial, de maior peso, e um botão secundário, para ser utilizado em opções de menor peso ou preferência:

![image](https://user-images.githubusercontent.com/42283687/135158990-e3f72e3c-4dca-4452-af28-5b2e231c25e7.png)

Esses botões dever receber um efeito quando o cursor estiver sobre eles, ficando ligeiramente mais escuros:

![image](https://user-images.githubusercontent.com/42283687/135159101-9c1b2ab9-2eba-4a8a-a422-d726dfaffdd5.png)



### Inputs, listas e campos de texto

No caso dos campos de input, vamos deixar os cantos em ângulo reto porque percebemos que algumas funções não funcionam bem com cantos arredondados, como por exemplo, os campos que apresentam barra de rolagem, conforme ilustramos a seguir:

[ img inputs 1] [ img inputs 2]

## Ferramentas
React porque ele permite a criação de componentes que podem ser repetidos ao longo do projeto. Isso garante uma unidade e consistência visual à aplicação. Além disso, para a estilização, optamos por utilizar um Design System, que é …, para economia de tempo e aumento da produtividade no projeto. Escolhemos o Material UI porque a integração dele com o React é mais harmônica
