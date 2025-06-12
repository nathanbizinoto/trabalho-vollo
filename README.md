# ✨ Gerenciador de Tarefas - Deploy Automatizado

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

**Aplicação web para gerenciamento de tarefas com deploy automatizado**

🌐 **[Ver Demo](http://201.23.3.86:8182)** • 📊 **[Status: Online](http://201.23.3.86:8182)**

</div>

---

## 🎯 Sobre o Projeto

Trabalho prático de **Deploy Automatizado** - aplicação web completa com CRUD de tarefas, interface moderna, containerização Docker e pipeline CI/CD automatizado.

### ✨ Funcionalidades
- ➕ **CRUD completo** de tarefas (criar, listar, editar, excluir)
- 🎨 **Interface moderna** com design responsivo
- 📊 **Dashboard** com estatísticas em tempo real
- 🔄 **Deploy automatizado** via GitHub Actions

---

## 🚀 Como Executar

### 📋 Pré-requisitos
- [Docker](https://www.docker.com/get-started) e [Docker Compose](https://docs.docker.com/compose/install/)

### 🔧 Instalação
```bash
# Clone o repositório
git clone https://github.com/nathanbizinoto/trabalho-vollo.git
cd trabalho-volo

# Inicie os containers
docker-compose up -d

# Acesse a aplicação
open http://localhost:8182
```

---

## 🛠️ Tecnologias

**Backend:** Node.js + Express + PostgreSQL  
**Frontend:** HTML5 + CSS3 + JavaScript  
**DevOps:** Docker + GitHub Actions + SSH Deploy  
**Servidor:** 201.23.3.86:8182

---

## 🏗️ Arquitetura

```
GitHub → Actions → Docker Hub → SSH Deploy → Servidor Remoto
                                              ├── App (8182)
                                              └── PostgreSQL (8183)
```

**Containers:**
- **Aplicação**: Node.js na porta 8182
- **Banco**: PostgreSQL na porta 8183
- **Rede**: `trabalho-network` para comunicação

---

## 🔄 CI/CD Pipeline

**Trigger:** Push na branch `main`  
**Processo:** Build → Push Docker Hub → Deploy SSH

**Secrets necessários:**
- `DOCKER_HUB_USERNAME` - Usuário Docker Hub
- `DOCKER_HUB_TOKEN` - Token Docker Hub  
- `SSH_PRIVATE_KEY` - Chave SSH do servidor

---

## 📊 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/tarefas` | Lista tarefas |
| `POST` | `/tarefas` | Cria tarefa |
| `PUT` | `/tarefas/:id` | Atualiza tarefa |
| `DELETE` | `/tarefas/:id` | Remove tarefa |

---

## 🧪 Teste de Deploy

```bash
./test-deploy.sh
```

**Resultado esperado:** ✅ Todos os testes passando + link da aplicação

---

## 📁 Estrutura

```
trabalho-volo/
├── .github/workflows/deploy.yml    # Pipeline CI/CD
├── public/index.html               # Interface web
├── src/index.js                    # Servidor Express
├── Dockerfile                      # Container da app
├── docker-compose.yml              # Orquestração
├── test-deploy.sh                  # Script de teste
└── README.md                       # Documentação
```

---

## 🎯 Trabalho Prático

**Status:** ✅ **Concluído**  
**Data:** 12/06/2025  
**Servidor:** http://201.23.3.86:8182

### ✅ Requisitos Atendidos
- [x] CRUD completo com interface gráfica
- [x] PostgreSQL em porta específica (8183)
- [x] Containers Docker separados
- [x] Repositório GitHub com pipeline
- [x] Deploy automatizado no servidor remoto
- [x] Acesso via SSH com chave fornecida

---

<div align="center">

**🌐 [Acessar Aplicação](http://201.23.3.86:8182)**

*Desenvolvido para o Trabalho Prático de Deploy Automatizado*

</div>