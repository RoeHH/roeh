import ejs from 'ejs';
import { defaultMaxListeners } from 'events';
import fs from 'fs';
import { join } from 'path';
var nmd = require('nano-markdown');

interface Article {
  header: string,
  text: string
}

interface Data {
  [key: string]: any;
  articles: Article[];
}

var datas: Data = {
  articles: [],
};

const directoryPath = './md';

function getContent(): any {
  fs.readdir(directoryPath, function (err: any, files: any) {
    if (err) {
      console.log('Error getting directory information.');
    } else {
      files.forEach(function (file: any) {
        fs.readFile(
          directoryPath + `/${file}`,
          'utf8',
          function (err: any, data: any) {
            if (err) {
              console.log(err);
            }
            var d = nmd(data);
            var article: Article = { header: "",text: "",};
            article.header = d.substr(0, d.indexOf('<p>'));
            article.text = d.substr(d.indexOf('<p>'))
            datas.articles.push(article);
          }
        );
      });
    }
  });
}

getContent();

setTimeout(f1, 3000);

function f1() {
  datas.articles.forEach((element) => {
    console.log('(-----------');
    console.log(element);
    console.log('------------)');
  });

  
  Object.freeze(datas);

  var path = require('path');
  const outputPath = path.join(process.cwd(), './public/index.html');
  if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
  console.log(outputPath);

  const template = fs.readFileSync(join(__dirname, 'index.ejs'), 'utf-8');
  const html = ejs.render(template, datas);
  fs.writeFileSync(outputPath, html, 'utf8');
}