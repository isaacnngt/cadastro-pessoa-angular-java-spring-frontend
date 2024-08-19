# Cadastro de Pessoas

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.2-green)
![Angular](https://img.shields.io/badge/Angular-Latest-red)
![h2](https://img.shields.io/badge/H2-Database-blue) 

Este projeto é uma aplicação fullstack para cadastro e listagem de pessoas, utilizando Java Spring Boot no backend e Angular no frontend.

## 🚀 Funcionalidades

- Cadastro de pessoas com nome
- Listagem de pessoas cadastradas
- Integração com banco de dados Oracle XE

## 🛠️ Tecnologias Utilizadas

### Backend
- Java 17
- Spring Boot 3.3.2
- Spring Data JPA
- H2 (Banco em memória)

### Frontend
- Angular (versão mais recente)
- TypeScript
- HTML/CSS

## 📋 Pré-requisitos

- JDK 17
- Node.js e npm
- Angular CLI
- H2 (Banco em memória)

## 🔧 Configuração e Instalação

### Frontend (Angular)

1. Clone o repositório
2. npm install
3. ng serve

## 📦 Estrutura do Projeto
cadastro-pessoas/
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/example/demo/
│   │   │   │       ├── controller/
│   │   │   │       ├── model/
│   │   │   │       ├── repository/
│   │   │   │       └── DemoApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
└── frontend/
    ├── src/
    │   ├── app/
    │   │   ├── pessoa-cadastro/
    │   │   ├── pessoa-lista/
    │   │   ├── app.component.ts
    │   │   ├── app.config.ts
    │   │   └── pessoa.service.ts
    │   ├── assets/
    │   └── index.html
    ├── angular.json
    └── package.json

## 🖥️ Uso

Abra a aplicação no navegador: http://localhost:4200
Use o formulário para cadastrar uma nova pessoa
Clique em "Listar" para ver todas as pessoas cadastradas

##🤝 Contribuindo
Contribuições são sempre bem-vindas! Siga estes passos:

Faça um fork do projeto
Crie uma nova branch (git checkout -b feature/AmazingFeature)
Faça commit das suas alterações (git commit -m 'Add some AmazingFeature')
Faça push para a branch (git push origin feature/AmazingFeature)
Abra um Pull Request

## 📝 Licença
Este projeto está sob a licença ISAAC NUNES.

## 📞 Contato
Isaac Nunes - @isaacnngt - isaacnngt@gmail.com
Link do Projeto: https://github.com/seu-usuario/cadastro-pessoas
