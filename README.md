# TESTE 3LM
### Sobre o desenvolvimento
### Bibliotecas utilizadas
- React
- React-router-dom
- Styled-componentes
- polished 
- react-spring
- react-icons
- uuidv4
- redux
- react-redux
- axios

O teste foi desenvolvido em duas versões: [**v1.0**](https://github.com/xpiral14/teste-3lm-frontend/tree/v1.0) e [**v2.0**](https://github.com/xpiral14/teste-3lm-frontend/tree/v2.0). A **v1.0** consiste em mostrar como eu consigo lidar com a biblioteca de gerenciamento de estado `Redux`. O foco é mostrar a iteração entre as páginas esses estados e também uma espécie de relação entre `Funcionário` e `Cargo`;

Já a **v2.0** eu quis mostrar como seria esse teste caso tivesse um backend servindo os dados. Como os dados vem do servidor senti que não havia necessidade de usar o redux por causa que o compartilhamento de estado entre componentes é quase nulo nesse teste.


# Como rodar o sistema
## [**v1.0**](https://github.com/xpiral14/teste-3lm-frontend/tree/v1.0) - Teste apenas com o redux

1. Clone o repositório para o seu sistema operacional:

    ```bash
    git clone -b v1.0 https://github.com/xpiral14/teste-3lm-frontend
    ```

2. Entre no diretório recém clonado e instale as dependências do projeto com seu gerenciador de pacotes:

    ```bash
    cd teste-3lm-frontend
    yarn
    ```
    ou 
     ```bash
    cd teste-3lm-frontend
    npm install
    ```

3. Rode o comando de execução de desenvolvedor e espere a execução compilar o código.
    ```bash
    yarn start
    ```
    ou
    ```bash
    npm run start
    ```
4. Provavelmente o seu navegador padrão irá abrir na url padrão de desenvolvimento react, caso não abra, [clique aqui](http://localhost:3000) para ser redirecionado para esta url.

5. Pronto! O teste já deve está rodando em seu navegador.


___
## [**v2.0**](https://github.com/xpiral14/teste-3lm-frontend/tree/v2.0) - Teste com API REST

Os passos para execução deste exige duas especificações:

1. Ter o banco mariaDB instalado em sua máquina ou em um container docker.
2. Ter o Node JS instalado.
  
### Execução do Backend
1. Clone o repositório para o seu sistema operacional:

    ```bash
    git clone https://github.com/xpiral14/teste-3lm-backend
    ```

2. Entre no diretório recém clonado e instale as dependências do projeto com seu gerenciador de pacotes e espere terminar:

    ```bash
    cd teste-3lm-backend 
    yarn
    ```
    ou 
     ```bash
    cd teste-3lm-backend
    npm install
    ```
3. Após o término, renomeie o arquivo na pasta raíz `.example.env` para `.env`

4. Entre nesse arquivo e configure as variáveis de conexão do banco de dados de acordo com o seu sistema.
    ```markdown
    #NODE_ENV CONFIG

    # Ambiente em que o node está rodando.
    NODE_ENV=development                


    #APP CONFIG

    # Porta de execução da aplicação
    APP_PORT=2004

    # url do sistema (coloque a porta de acordo com a variável de ambiente APP_PORT)
    APP_URL=http://localhost:1234       


    #DATABASE CONFIG

    # Porta em que seu banco MariaDB está rodando
    DB_PORT= 

    # Nome de usuário do seu banco de dados
    DB_USER=                        

    # Senha de usuário do seu banco de dados
    DB_PASS=                   

    # Onde seu banco de dados está hospedado
    DB_HOST=            

    # Nome da database dentro do seu banco de dados
    DB_NAME=                                  
    ```
5. Agora execute o comando: 

    ```bash
        yarn dev
    ```
    ou
    ```bash
        npm run dev
    ```
6. Caso esteja tudo certo, uma espécie de sincronização das tabelas com o banco irá acontecere e a última mensagem deverá ser algo como:
    ```bash
    Servidor iniciou na porta <SUA_PORTA>
    ```
7. Após a mensagem aparecer, vá no arquivo localizado em `src/Main.ts` e comente a linha 13: 
    ```ts
    11 // Sincroniza as tabelas da aplicação com o banco de dados.
    12 //RODE APENAS UMA UNICA VEZ
    13 await database.getConnection().sync({ force: true });
    ```
8. Espere o servidor reiniciar (acontecerá automaticamente), ou pare o servidor atual e rode novamente o comando: 
   ```bash
        yarn dev
    ```
    ou
    ```bash
        npm run dev
    ```
    
### End Points
- Cargos
    ``` bash
    VERBO HTTP      URL            Descrição
    GET             /cargos        - Obtém cargos
    GET             /cargos/:id    - Obtém cargo pelo id
    POST            /cargos        - Cadastra novo cargo
    PUT             /cargos/:id    - Atualiza cargo
    DELETE          /cargos/:id    - Deleta cargo
    ```
- Funcionários
    ``` bash
    VERBO HTTP  URL                Descrição
    GET         /funcionarios      - Obtém funcionarios
    GET         /funcionarios/:id  - Obtém funcionario 
    POST        /funcionarios      - Cadastra funcionario
    PUT         /funcionarios/:id  - Atualiza funcionario
    DELETE      /funcionarios/:id  - Deleta funcionario
'   ```
___
## Frontend
É importante salientar que para o frontend funcionar bem, o servidor configurado no passo anterior deve estar rodando.
1. Clone o repositório para o seu sistema operacional:

    ```bash
    git clone -b v2.0 https://github.com/xpiral14/teste-3lm-frontend
    ```

2. Entre no diretório recém clonado e instale as dependências do projeto com seu gerenciador de pacotes:

    ```bash
    cd teste-3lm-frontend 
    yarn
    ```
    ou 
     ```bash
    cd teste-3lm-frontend 
    npm install
    ```

4. Entre no arquivo localizado em `src/api/index.ts` e modifique a constante `API_BASE_URL` para  a url do backend configurado.
     exemplo:
    ```
    const API_BASE_URL = "http://localhost:1234"
    ```

6. Rode o comando de execução de desenvolvedor e espere a execução compilar o código.
    ```bash
    yarn start
    ```
    ou
    ```bash
    npm run start
    ```
7. Provavelmente o seu navegador padrão irá abrir na url padrão de desenvolvimento react, caso não abra, [clique aqui](http://localhost:3000) para ser redirecionado para esta url.

8. Pronto! O teste já deve está rodando em seu navegador.
