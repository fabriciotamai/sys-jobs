import { UsersRepository } from "@/repositories/users-repository";

interface AuthenticateUseCaseRequest{
  email:string
  password:string

}

type AuthenticaUseCaseResponse  = void



export class AuthenticateUseCase {
  constructor(
    private usersRepository: UsersRepository){}

  async execute ({email, password} :AuthenticateUseCaseRequest ) : Promise<AuthenticaUseCaseResponse>{
    const user = await this.usersRepository.findByEmail(email)


  }
    
  }
