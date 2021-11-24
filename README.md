<h1> Projeto de consumo da API de Autenticação do Github</h1>

<p>Quando criado o seu OAuth app, crie um .env na raiz do server contendo as seguintes informações:</p>

<ul>
  <li>GITHUB_CLIENT_SECRET= Contendo o secret criado no app</li>
  <li>GITHUB_CLIENT_ID= Contendo o ID</li>
  <li>JWT_SECRET= Contendo uma numeração aleatória de sua preferência</li>
</ul>

<p>Na raiz do front, crie um .env com a seguinte variável:</p>

<ul>
  <li>VITE_GITHUB_ID= Contendo o ID criado no app</li>
</ul>

<p>Instale todos os pacotes em cada parte do projeto (front & server) e rode ambos simultaneamente com "npm run dev"</p>
