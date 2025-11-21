Aplicação web desenvolvida em React + Tailwind CSS, simulando uma plataforma de currículos, carreiras emergentes e recomendações baseadas em IA.


O sistema funciona com ou sem API.

#####

✨ Principais Funcionalidades

🔎 Diretório de Talentos (60 perfis)

Busca por nome, cargo, skills

Filtro por:

Cidade

Área

Tecnologia


Alternância de visualização:

Cards

Lista


Modal completo do perfil com:

Foto

Skills

Experiências

Formação

Soft skills

Hobbies

Recomendações (API ou local)



📊 Demo interativa

Gráficos usando Recharts

Simulação de trilhas dinâmicas

ODS impactados

Comparação entre perfis: aluno, empresa, governo


🤖 IA & Tendências

Integração com a API:

/v1/careers

/v1/users

/v1/recommend

/v1/trends


🌓 Dark Mode completo

Persist 100% via localStorage.


---

🔌 Funcionamento com API + Fallback Automático

Quando a aplicação abre, o diretório de talentos tenta primeiro buscar dados reais da API:

GET http://127.0.0.1:8000/v1/users

➜ Caso a API esteja funcionando:

Os dados exibidos são os retornados pelo backend.

➜ Caso a API falhe, não esteja ativa ou retorne vazio:

O front automáticamente usa o arquivo JSON local:

/src/data/profiles.json

com 60 perfis completos, garantindo que o site sempre funcione.

######

🧰 Instalação e Execução

1. Clonar repositório

git clone https://github.com/gaga190608/vyra-gs.git
cd vyra-gs

2. Instalar dependências

npm install
npm install recharts

3. Rodar

npm run dev


#####

🔧 API Backend

Instalação da API

python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\Activate.ps1
pip install -r requirements.txt

Rodar API

uvicorn api.app:app --reload

Endpoints testáveis em:

http://127.0.0.1:8000/docs


######


👤 Autores: 

Gabrielle Calazans – RM 564460
Pedro H. Silva Batista - RM 563220
João F. Bertini - 563478
