import { Resolver, Query, Mutation, Arg } from 'type-graphql'

import Media from '../../models/media'

const QUERY_OPTIONS = {
  relations: ['user'],
}

@Resolver()
class MediaResolver {
  @Query(() => [Media])
  medias() {
    return Media.find(QUERY_OPTIONS)
  }

  @Query(() => Media)
  media(@Arg('id') id: string) {
    return Media.findOne({
      where: { id },
      ...QUERY_OPTIONS,
    })
  }
}

export default MediaResolver
