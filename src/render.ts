import { renderToString } from 'https://deno.land/x/dejs/mod.ts';
import { MongoProject } from '../../roeh-x-cli/mongo.ts';
import { siteStart, template } from './template.ts';

let siteContent = siteStart;

const articles = await MongoProject.find(undefined, {
  noCursorTimeout: false,
} as any).toArray();

for (const article of articles) {
    siteContent += await renderToString(template, {
        buildDate: article.buildDate,
        appName: article.appName,
        description: article.description,
        roehDescription: article.roehDescription,
        cloneUrl: article.cloneUrl,
        productiveUrl: article.productiveUrl,
    });
}

siteContent += `
   </section>
</body>
</html>`;

const write = Deno.writeTextFile('./public/index.html', siteContent);

write.then(() => console.log('Wrote index.html'));
