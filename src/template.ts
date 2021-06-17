export const siteStart = `<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>roeh</title>
    <link rel="stylesheet" href="card.css">
    <link rel="shortcut icon" type="image/jpg" href="./img/logo.png"/>
</head>

<body>
    <header class="header">
        <img src="./img/logo.png" class="logo" />
        <h1 class="header-text">Rouven Hänggi</h1>
        <p></p>
    </header>
    <section class="card-list">`;

export const template = `
<article class="card">
    <header class="card-header">
    <h3><%= buildDate %></h3>
    <h2><%= appName %></h2>
    </header>
    <p><%= description %></p>
    <p><%= roehDescription %></p>
    <p>Repository:<a href="<%= cloneUrl %>">Repository</a></p>
    <% if(productiveUrl){%><p>Productive App:<a href="<%= productiveUrl %>">Productive App</a></p><% } %>
    <div class="card-author">
        <div class="author-avatar" href="#">
            <img src="./img/avatar.jpg">
        </div>
        <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4">
            </path>
        </svg>
        <div class="author-name">
            <div class="author-name-prefix">Author</div>
            Rouven Hänggi
        </div>
    </div>
</article>`;
