import { buildSchema } from 'type-graphql'

import UserResolver from './resolvers/user'
import MessageResolver from './resolvers/message'
import MediaResolver from './resolvers/media'

function getSchema() {
  try {
    return buildSchema({
      resolvers: [UserResolver, MessageResolver, MediaResolver],
    })
  } catch (e) {
    throw new Error(`buildSchema Error, ${e}`)
  }
}

export default getSchema
