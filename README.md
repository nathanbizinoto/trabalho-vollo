# Gerenciador de Tarefas

Aplicação web simples para gerenciamento de tarefas, desenvolvida com Node.js, Express e PostgreSQL.

## Requisitos

- Docker
- Docker Compose
- Node.js (para desenvolvimento local)

## Configuração do Ambiente

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd trabalho-volo
```

2. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
DB_HOST=db
DB_PORT=5433
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=trabalho_volo
```

3. Inicie os containers:
```bash
docker-compose up -d
```

A aplicação estará disponível em `http://localhost:3000`

## Desenvolvimento Local

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Estrutura do Projeto

- `src/index.js`: Arquivo principal da aplicação
- `public/index.html`: Interface do usuário
- `Dockerfile`: Configuração do container da aplicação
- `docker-compose.yml`: Configuração dos containers
- `.github/workflows/deploy.yml`: Pipeline de CI/CD

## CI/CD

O projeto utiliza GitHub Actions para automatizar o processo de deploy. O pipeline:

1. Faz build da imagem Docker
2. Faz push para o Docker Hub
3. Executa análise de código com SonarQube
4. Faz deploy no servidor remoto (se a análise for aprovada)

## Secrets Necessários

Configure os seguintes secrets no GitHub:

- `DOCKER_HUB_USERNAME`: Seu usuário do Docker Hub
- `DOCKER_HUB_TOKEN`: Seu token de acesso do Docker Hub
- `SSH_PRIVATE_KEY`: Chave SSH para acesso ao servidor
- `SONAR_TOKEN`: Token de acesso ao SonarQube

   # Deploy test