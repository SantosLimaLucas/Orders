# Orders
## Iniciando o back-end
 Executar o comando "npm run start" no diretório Orders\ordersAPI\orders-api> 

## Iniciando o front-end
 Executar o comando "ng serve --port 333" no diretório Orders\ordersFront\orders>
 
## Configuração do Google Chrome
 Como ainda não foi habilitado o CORS na API, para que seja possível a comunicação do front-end com o back-end é necessário inicializar o Chrome com o seguinte comando:
 * "C:/Program Files/Google/Chrome/Application/chrome.exe" --user-data-dir="C:/Chrome dev session" --disable-web-security

## Utilizando a Aplicação
 Após a realização dos passos acima, acesse "http://localhost:333/" no Google Chrome. 
 
 A aplicação é capaz de realizar o CRUD completo de Products e Orders, porém alguns dos requisitos solicitados ainda não foram implementados. Segue a lista de pendências:
 * "It Should be possible change products inside a order. (Only for products of same category)": Por enquanto ele permite atualizar os produtos de uma Order de acordo com os produtos disponíveis.
 * "Show errors and success messages": Ainda não implementei a tratativa de erros.
 * "Mask the currency inputs": Ainda não implementei o mask dos valores, acredito que nesta aplicação será necessário apenas o mask de dinheiro.
