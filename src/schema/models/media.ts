import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'

import User from './users'

@Entity()
@ObjectType()
class Media extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number

  @Field(() => Number)
  @Column()
  readonly userId: number

  @Field(() => User, { nullable: true })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  @OneToOne(() => User, (user) => user.id)
  readonly user: User

  @Field(() => String, { nullable: true })
  @Column()
  readonly url: string
}

export default Media
