# 🎮 NexusVault UI  

**Interface moderna, imersiva e responsiva para gerenciamento de jogos pessoais, conectada à API NexusVault.**

---

## 🧠 Sobre o Projeto  

O **NexusVault UI** é uma aplicação web desenvolvida em **React + TypeScript**, projetada para que jogadores possam cadastrar, revisar e acompanhar seus jogos favoritos em um ambiente intuitivo e visualmente agradável.  

Com **integração direta à API NexusVault**, a interface oferece:  
- 🔐 Autenticação segura via JWT  
- 🎮 Cadastro e gerenciamento de jogos pessoais  
- 🗒️ Reviews personalizadas  
- 🌗 Modo claro/escuro dinâmico e persistente  

---

## 🛠️ Tecnologias Utilizadas  

| Tecnologia | Função |
|-------------|--------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | Base da interface com tipagem forte e modular
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=fff) | Base da interface com tipagem forte e modular
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E) | Build rápido, leve e eficiente
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8) |  Estilização moderna, responsiva e fácil de manter
![Axios](https://img.shields.io/badge/Axios-671DDF?style=for-the-badge&logo=axios&logoColor=fff) | Comunicação com a API NexusVault
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=fff) |  Navegação entre rotas sem recarregar a página
![Context API](https://img.shields.io/badge/Context_API-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) |  Gerenciamento global de autenticação
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=fff) | Autenticação e autorização seguras de usuários


---

## 🎯 Objetivos  

- Criar uma interface leve, acessível e imersiva para gamers  
- Implementar um fluxo completo de **login, cadastro e dashboard**  
- Permitir **reviews personalizadas** para cada jogo  
- Garantir **autenticação JWT** e comunicação segura com o back-end  

---

## 🧩 Estrutura do Projeto  

```
📁 src/
 ├─ assets/         → imagens, fundos e ícones  
 ├─ components/     → botões, inputs e ThemeToggle  
 ├─ contexts/       → gerenciamento global (AuthContext)  
 ├─ pages/          → Home, Login, Register, Dashboard, AddGame  
 ├─ services/       → integração com API via Axios  
 ├─ styles/         → configurações globais de tema  
 └─ main.tsx        → ponto de entrada da aplicação  
```

---

## 🖼️ Prévia Visual  

### 🏠 Tela Inicial  
Interface de boas-vindas com **design gamer** e botões de acesso/cadastro.  
![Tela Inicial](./public/design/home.jpg)

### 🔐 Login e Cadastro  
Formulários minimalistas com **feedback de erro**, **validação** e **autenticação JWT** integrada.  
![Login e Cadastro](./public/design/login.jpg)
![Login e Cadastro](./public/design/register.jpg) 

### 🎮 Dashboard  
Área principal com todos os jogos cadastrados, incluindo **review**, **nota** e **ano de lançamento**.  
Cards com **efeito glassmorphism**, **modo dark/light** e **layout 100% responsivo**.  
![Dashboard](./public/design/dashboard.jpg)

---

## ⚙️ Funcionalidades  

✅ Autenticação via **JWT**  
✅ Criação de conta e **login seguro**  
✅ **Cadastro e gerenciamento** de jogos  
✅ **Reviews personalizadas** por usuário  
✅ Alternância de **tema claro/escuro**  
✅ Interface **totalmente responsiva**  
✅ Comunicação direta com a **API NexusVault**

---

## 📱 Responsividade  

O layout foi otimizado para:  
📱 **Smartphones**  
![smatones](./public/design/iPhone-14-dashboard.png)

💻 **Tablets**  
![tabletes](./public/design/iPad-dashboard.png)

As fontes, espaçamentos e componentes se adaptam automaticamente ao viewport, garantindo **consistência e legibilidade** em qualquer dispositivo.  

---

## 🚀 Como Executar  

```bash
# 1️⃣ Clonar o repositório
git clone https://github.com/Guilherme-Henry-Dev/nexusvault-ui.git
cd nexusvault-ui

# 2️⃣ Instalar dependências
npm install

# 3️⃣ Configurar variáveis de ambiente
# Crie um arquivo .env na raiz do projeto com:
VITE_API_URL=https://nexusvault-api.onrender.com

# 4️⃣ Rodar o servidor local
npm run dev
```

🔗 Acesse em: [http://localhost:5173](http://localhost:5173)

---

## 🌍 Deploy  

- **Front-End:** [nexusvault-ui.vercel.app](https://nexusvault-ui.vercel.app)  
- **Back-End:** [nexusvault-api.onrender.com](https://nexusvault-api.onrender.com)

---

## 📦 Status do Projeto  

| Versão | Status | Próximas Melhorias |
|---------|---------|--------------------|
| 🟢 **1.0** | Estável e funcional | ✏️ Edição de jogos <br> 🖼️ Imagens personalizadas <br> 🏷️ Sistema de tags e filtros |

---

## 👨‍💻 Autor  

**Guilherme Henry**  
💼 Desenvolvedor Fullstack com foco em Front-End  
📍 Belo Horizonte - MG  

[💻 GitHub](https://github.com/Guilherme-Henry-Dev)
[🔗 LinkedIn](https://www.linkedin.com/in/guilherme-henry-dev)
[💻 Portifólio](https://portifolio-guilherme-nu.vercel.app)
