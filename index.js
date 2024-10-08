require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const dns = require('dns');
const urlparse = require('url');

const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.DB_URL);
const db = client.db("urlshortner");
const urls = db.collection("urls");

const bodyParser = require('body-parser');

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(`${process.cwd()}/public`));

app.get("/", (req, res) => {
    res.render('index', { originalUrl: null, shortenedUrl: null, error: null });
});

app.post("/api/shorturl", (req, res) => {
    const url = req.body.url;
    const dnslookup = dns.lookup(urlparse.parse(url).hostname, async (err, address) => {
        if (err || !address) {
            res.render('index', { originalUrl: url, error: 'Url inválida, tente novamente...', shortenedUrl: null })
        } else {
            const urlShort = await urls.countDocuments({})
            const urlDocument = {
                url: url,
                short_url: urlShort
            }
            const result = await urls.insertOne(urlDocument);
            const fullUrl = `${req.headers.host}/api/${urlShort}`;

            res.render('index', {
                originalUrl: url,
                shortenedUrl: +urlShort,
                fullUrl: fullUrl
            });
        };
    });
});


app.get("/api/:short_url", async (req,res) => {
    const shorturl = req.params.short_url;
    const urlDocument = await urls.findOne({short_url: +shorturl});

    if (urlDocument) {
        res.redirect(urlDocument.url)
    } else {
        res.status(404).send("URL encurtada não encontrada");
    }
});




app.listen(port, () => {
    console.log(`Funcionando em ${port}`)
})