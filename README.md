<h1 align="center">
    <a href="https://telaverge-cpu-monitering.vercel.app">
       <h2>YuRL - URL Shortner App</h2>
    </a>
</h1>

<p align="center">
  <i align="center">Use our URL shortener and Link-in pages to engage your audience and Analyse the enagement 🚀</i>
</p>

<p>
    <img src="https://github.com/Pranshu321/Monitoring-System/assets/86917304/8fcc3114-0589-48c2-bdb0-47fd943b7a30" alt="dashboard"/>
</p>

## Introduction

Welcome to `URL Shortener`, your streamlined solution for shortening URLs and tracking their performance with comprehensive analytics. URL Shortener makes it easy to manage your links efficiently, providing detailed insights into their usage. This README will guide you through the features, installation, and usage of URL Shortener.

<details open>
<summary>
 Features
</summary> <br>

*   **URL Shortening:** Easily shorten long URLs to make them more manageable and shareable.
*   **Analytics:** Get detailed analytics on your shortened URLs, including total clicks, browsers used for accessing the link, and date and time of access.
*   **Click Trends:** View a chart displaying the number of clicks per month for each shortened URL, helping you analyze trends over time.
    
</details>

## Usage 

### Once you've accessed the URL Shortener dashboard, you can perform the following actions:

*   **Shorten URLs:** Convert long URLs into short, manageable links with just a few clicks.   
*   **View Analytics:** Access detailed analytics for each shortened URL, including total clicks, browsers used, and access timestamps.   
*   **Analyze Click Trends:** Examine a chart that shows the number of clicks per month for your links, allowing you to track performance and identify trends.

## Development

Alternatively, instead of using the hosted version of the product, YuRL can be run locally for monitoring purposes or contributions - if so, please refer to our how to run section.

### Tech Stack

###

![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

<details open>
<summary>
Running CPMS
</summary> <br />

> **Note**
> It is also possible to start development with GitHub Codespaces, when navigating to `< > Code`, copy the `https` repo link.

Amplication is using a monorepo architecture - powered by <a href="https://nx.dev">Nx Workspaces</a> - where multiple applications and libraries exist in a single repository. To setup a local development environment the following steps can be followed:

**BEFORE** you run the following steps make sure:
2. You are using a supported node version (check `engines` `node` in the [package.json](./package.json))
3. You are using a supported npm version (check `engines` `npm` in the [package.json](./package.json))


### Frontend

1. Clone the repository and install dependencies:
```bash
git clone https://github.com/Pranshu321/url-shortner.git && cd url-shortner/frontend && npm install
```

2. Run the command to install dependencies and setting up the workspace
```bash
npm install
```

3. Hurray!! , Now just run the frontend
```bash
npm run dev
```

### Server

```bash
cd Backend
```

2. Install the dependencies for server
```bash
npm install
```
3. Provide your MongoDB Atlas/Compass URL

```js
connectToMongoDB(process.env.MONGO_URL).then(() =>
  console.log("Mongodb connected")
);
```


3. Run the server
```bash
npm start
```

</details>


<a name="contributing_anchor"></a>


## Team

### Members
- Pranshu Jain
