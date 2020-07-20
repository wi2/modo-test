import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'

import User from './users'

@Entity()
@ObjectType()
class Messages extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: string

  @Field(() => String)
  @Column()
  readonly content: string

  @Field(() => String, { nullable: true })
  @Column()
  readonly receiverId: number

  @Field(() => User)
  @JoinColumn({ name: 'receiverId', referencedColumnName: 'id' })
  @ManyToOne(() => User, (user) => user.receive)
  readonly receiver: User

  @Field(() => Number, { nullable: true })
  @Column()
  readonly senderId: number

  @Field(() => User)
  @JoinColumn({ name: 'senderId', referencedColumnName: 'id' })
  @ManyToOne(() => User, (user) => user.send)
  readonly sender: User
}

export default Messages
