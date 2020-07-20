import { Resolver, Query, Mutation, Arg } from 'type-graphql'

import Message from '../../models/messages'
import User from '../../models/users'

const QUERY_OPTIONS = { relations: ['sender', 'receiver'] }

@Resolver()
class MessageResolver {
  @Query(() => [Message])
  async messages() {
    return Message.find(QUERY_OPTIONS)
  }

  @Query(() => Message)
  message(@Arg('id') id: string) {
    return Message.findOne({
      where: { id },
      ...QUERY_OPTIONS,
    })
  }
}

export default MessageResolver
