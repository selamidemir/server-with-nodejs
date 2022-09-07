const http = require('http');
const port = 5000;

function createPage(title, content) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body style='text-align:center'>
        <h1>${title}</h1>
        ${content}

        <p>
        <a href="/">Ana Sayfa</a>
        | <a href="/contact">İletişim</a>
        | <a href="/about">Hakkımızda</a>
        </p>
        <hr />
        <p><a href="https://github.com/selamidemir">Github</a> 
        | <a href="https://netbilio.com">Netbilio</a>
        </p>
    </body>
    </html>
    `;
}

const server = http.createServer((req, res) => {
    const url = req.url;
    const welcome = '<p>Sayfamıza hoşgeldiniz! Aramızda sizi görmekten mutluluk duyduk.';
    const about = '<p>Bu bir Node JS ile örnek sunucu çalışmasıdır.</p>';
    const contact = '<p>Bizimle <a href="https://github.com/selamidemir">Github</a> sayfamızdan iletişime geçebilirsiniz.</p>';
    const pageNotFound = '<p>Aradığınız sayfa sunucumuzda bulunmuyor.</p>';
    console.log("Sunucu istek bekliyor...");

    res.writeHead(200, {'Content-Type': 'text/html'});
    if (url === '/') res.write(createPage('Anasaya - Hoşgeldiniz', welcome));
    else if (url === '/about') res.write(createPage('Hakkımızda', about));
    else if (url === '/contact') res.write(createPage('İletişim', contact));
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(createPage('Aradığınız Sayfa Bulunamadı', pageNotFound));
    }
    res.end();
});

server.listen(port, (url) => {
    console.log(`Sunucu ${port} nolu porttan ayağa kaldırıldı.`);
});