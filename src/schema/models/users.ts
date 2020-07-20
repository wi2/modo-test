import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  PrimaryColumn,
  Column,
  OneToOne,
  OneToMany,
} from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'

import Media from './media'
import Message from './messages'

@Entity()
@ObjectType()
class Users extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: string

  @Field(() => Boolean)
  @Column()
  readonly isDeleted: boolean

  @Field(() => String)
  @Column()
  readonly name: string

  @Field(() => String)
  @Column()
  readonly city: string

  @Field(() => Media, { nullable: true })
  @OneToOne(() => Media, (media) => media.user)
  readonly media: Media

  @Field(() => [Message], { nullable: true })
  @OneToMany(() => Message, (message) => message.sender)
  readonly send: Message[]

  @Field(() => [Message], { nullable: true })
  @OneToMany(() => Message, (message) => message.receiver)
  readonly receive: Message[]
}

export default Users
