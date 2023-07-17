import { Prisma, User } from '@prisma/client'

export interface CheckInsRepository {
  create(data: Prisma.UserCreateInput): Promise<User>;

  

}