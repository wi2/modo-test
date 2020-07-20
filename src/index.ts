import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { ApolloServer } from 'apollo-server'

import getSchema from './schema'

const PORT = 3000

async function server() {
  await createConnection()

  const schema = await getSchema()
  const apolloServer = new ApolloServer({ schema })
  await apolloServer.listen(PORT)

  console.log(`Apollo Server is ready (port: ${PORT})`)
}

server()
