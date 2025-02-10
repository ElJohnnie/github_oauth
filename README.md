![GitHub OAuth](https://github.com/ElJohnnie/github_oauth/assets/54804502/f43a7b27-2ad7-420f-a271-5ecbe2055506)

# GitHub Authentication API Consumption Project

## 🔑 Setting Up OAuth on GitHub
Access **[GitHub Developer Settings](https://github.com/settings/developers)** to create an OAuth App and obtain the required credentials.



## 🛠 Server Configuration
Create a **`.env`** file in the server root containing the following information:

```env
GITHUB_CLIENT_SECRET= # Contains the secret generated in the GitHub app
GITHUB_CLIENT_ID= # Contains the app ID from GitHub
JWT_SECRET= # Contains a random secret key of your choice
```

## 🖥 Client Configuration
In the client root, create a **`.env`** file with the following variable:

```env
VITE_GITHUB_ID= # Contains the app ID from GitHub
```

## 📦 Installing Dependencies and Running the Project

Install all necessary packages in both the client and server parts of the project. Then, run both simultaneously using:

```bash
npm run dev
```