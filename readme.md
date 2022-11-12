Desenvolvimento de um sitema para cadastro de anúncios de veículos e disposição desses anúncios em uma página web.

As funções desta aplicação são:
 - Visualização dos anúncios
 - Login de usuários 
 - Inserir anúncios 
 - Deletar anúncios 
 - Atualizar de anúncios 

 *** Para teste da aplicação deverá ser realizado o login com os seguintes dados: ***
 - Login : aaa@hotmail.com
 - senha : 123456789

*** Executar o projeto ***

O BD utilizado nesta aplicação é o POSTGRESQL

Com o referido BD instalado , executar os comandos:

*** Dentro do diretorio api-verzel ***

criar um arquivo .env 

### touch .env

adicionar as informações

DB_HOST = 
DB_USER = 
DB_SCHEMA = 
DB_PASSWORD = 'sua senha do bd'
DB_PORT = 
BASE_URL_API = 'http://localhost:3003'
JWT_KEY = inserir uma senha para o token JWT
JWT_EXPIRES_IN = 120min
BCRYPT_COST = 12

instalar node_modules
### npm install

instalar as dependencias do banco de dados

### npm i pg

criar tabelas no BD

### npm run migrations

iniciar o servidor em ambiente de desenvolvimento

### npm run dev

*** Dentro do diretorio frontend-verzel ***

instalar node_modules

### npm install

iniciar o servidor

### npm run start





