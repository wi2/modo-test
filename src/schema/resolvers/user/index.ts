import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { getRepository } from 'typeorm'

import User from '../../models/users'
import Media from '../../models/media'

const QUERY_OPTIONS = {
  relations: ['media', 'send', 'receive'],
  limit: 10,
}
const LIMIT = 10

@Resolver()
class UserResolver {
  @Query(() => [User])
  users(@Arg('name') name: string, @Arg('page') page: number) {
    return getRepository(User)
      .createQueryBuilder('user')
      .where('user.name LIKE :name', { name: `%${name}%` })
      .orderBy('user.name')
      .limit(LIMIT * page)
      .getMany()
  }

  @Query(() => User)
  user(@Arg('id') id: string) {
    return User.findOne({
      where: { id },
      ...QUERY_OPTIONS,
    })
  }

  @Query(() => [User])
  userByName(@Arg('name') name: string) {
    return User.find({
      where: { name },
      ...QUERY_OPTIONS,
    })
  }
}

export default UserResolver
