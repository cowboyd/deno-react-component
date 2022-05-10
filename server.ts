import { opine, serveStatic } from 'https://deno.land/x/opine@2.2.0/mod.ts';
import bundle from './bundle.js'

const client = await bundle('./src/client.tsx')

const app = opine()

app.use(serveStatic("public"))

app.get('/scripts/client.js', (req, res) => {
  const js = client.files['deno:///bundle.js']
  res.type('application/javascript').send(js)
})

app.listen(3000, () => console.log("server has started on http://localhost:3000 🚀"),)