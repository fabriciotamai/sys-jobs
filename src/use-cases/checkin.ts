import { UsersRepository} from '@/repositories/users-repository'

import { Checkin } from '@prisma/client';
import { InvalidCredentialsError } from './errors/invalid-credentials-error';
import { compare } from 'bcryptjs';

interface CheckinUseCaseRequest{
  userId: string
  jobId:string
}

interface CheckInUseCaseResponse {
  checkIn:Checkin
}

export class CheckInUseCase {
  constructor(
    private usersRepository:UsersRepository ){}

    async execute ({userId, jobId}: CheckInUseCaseResponse) : Promise<CheckInUseCaseResponse>{
      const Checkin = await this.usersRepository.findByEmail(email);

      if(!user){
        throw new InvalidCredentialsError()
      }

      const doesPasswordMatches = await compare(password, user.password_hash)

      if(!doesPasswordMatches){
        throw new InvalidCredentialsError()
      }

      return {
        user,
      }

    }
 
}