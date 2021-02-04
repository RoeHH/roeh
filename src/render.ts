import ejs from 'ejs';
import fs from 'fs';
import { join } from 'path';

interface Article {
  date: string;
  title: string;
  text: string;
}

interface Data {
  [key: string]: any;
  articles: Article[];
}

const data: Data = {
  articles: [
    {
      date: 'Morn',
      text: 'Ja moll oder',
      title: 'Lueg emole',
    },
  ],
};
Object.freeze(data);

const template = fs.readFileSync(join(__dirname, 'index.ejs'), 'utf-8');
const html = ejs.render(template, data);
fs.writeFileSync(join(__dirname, '../public/index.html'), html, 'utf8');
