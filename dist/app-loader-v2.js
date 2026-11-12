const base = new URL('./', import.meta.url);
const urls = Array.from({length: 12}, (_, i) => new URL('./app-parts-v2/part-' + String(i).padStart(2, '0') + '.js', base));
const source = (await Promise.all(urls.map(url => fetch(url).then(response => {
  if (!response.ok) throw new Error('Failed to load application bundle part');
  return response.text();
})))).join('');
const rewritten = source
  .replaceAll('from"./chunk-E3LC3LG2.js"', 'from"' + new URL('./chunk-E3LC3LG2.js', base).href + '"')
  .replaceAll('import("./pdf-Q2CDDOZ2.js"', 'import("' + new URL('./pdf-Q2CDDOZ2.js', base).href + '"')
  .replaceAll('import("./src-4XQUKV4T.js"', 'import("' + new URL('./src-4XQUKV4T.js', base).href + '"');
await import(URL.createObjectURL(new Blob([rewritten], {type: 'text/javascript'})));
