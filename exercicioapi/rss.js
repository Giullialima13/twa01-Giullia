import { parseStringPromise } from 'xml2js';


const response = await fetch('https://news.ycombinator.com/rss');
const xmlText = await response.text();

const result = await parseStringPromise(xmlText);


const items = result.rss.channel[0].item.slice(0, 3);

items.forEach((item, index) => {
  console.log(`${index + 1}. ${item.title[0]}`);
});