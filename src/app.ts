import fastify from 'fastify'
import cookie from '@fastify/cookie' // é um plugin
import { transactionRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)
app.register(transactionRoutes, {
  prefix: 'transactions',
})
