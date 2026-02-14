import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function waitlistApi() {
  return {
    name: 'waitlist-api',
    configureServer(server) {
      server.middlewares.use('/api/waitlist', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end('Method not allowed')
          return
        }
        let body = ''
        req.on('data', (chunk) => { body += chunk })
        req.on('end', () => {
          try {
            const { name, email } = JSON.parse(body)
            if (!name || !email) {
              res.statusCode = 400
              res.end(JSON.stringify({ error: 'Name and email required' }))
              return
            }
            const filePath = path.resolve('waitlist.json')
            let entries = []
            if (fs.existsSync(filePath)) {
              entries = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
            }
            entries.push({ name, email, date: new Date().toISOString() })
            fs.writeFileSync(filePath, JSON.stringify(entries, null, 2))
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true }))
          } catch {
            res.statusCode = 500
            res.end(JSON.stringify({ error: 'Server error' }))
          }
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), waitlistApi()],
})
