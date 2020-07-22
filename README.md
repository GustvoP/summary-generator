# Gerador de Resumo

## Iniciando

Você terá que baixar e instalar em seu computador o [Node.js](https://nodejs.org/en/) e o [Git](https://git-scm.com/downloads). Após tudo instalado, abra o prompt de comando(CMD) ou PowerShell e digite os seguintes comandos:

```
git clone https://github.com/GustvoP/summary-generator.git
cd summary-generator
npm install
```

## Algorithmia Credentials

1. Crie uma conta no site do [Algorithmia](https://algorithmia.com/).
2. Na página principal, já logado, vá na aba API Keys e copie a key.
3. Entre na pasta "summary-generator" que foi criada anteriormente.
4. Crie uma pasta chamada "credentials" na raiz do projeto, e dentro dela crie um arquivo chamado "algorithmia.json".
5. Defina sua APIKey da seguinte forma:

```
{
    "apiKey": "coleAquiSuaAPIKey"
}
```

## Testando

Execute o comando `node index.js` no terminal. Pronto!
