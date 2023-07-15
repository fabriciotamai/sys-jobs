import { expect, test, describe, it, beforeEach } from "vitest";

import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { compare, hash } from "bcryptjs";

import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";
import { AuthenticateUseCase } from "./authenticate";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

let usersRepository = new InMemoryUsersRepository
let sut: AuthenticateUseCase


describe("Register Use Case", () => {
  beforeEach(()=>{
     usersRepository = new InMemoryUsersRepository();
     sut = new AuthenticateUseCase(usersRepository);


  })
  it("should be able to authenticate", async () => {
 

    await usersRepository.create({
      name:'Admin teste',
      email:'admin@gojobs.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
   
      email: "admin@gojobs.com",
      password: "123456",
    });

    expect(user.id).toEqual(expect.any(String))

  });
  it("should be able to authenticate with wrong email", async () => {


  

    expect(()=> sut.execute({
      email:'admin@gojobs.com',
      password: "123456",
    })).rejects.toBeInstanceOf(InvalidCredentialsError)

  });
  it("should be able to authenticate with wrong password", async () => {
 

    await usersRepository.create({
      name:'Admin teste',
      email:'admin@gojobs.com',
      password_hash: await hash('123456', 6),
    })

    expect(()=> sut.execute({
      email:'admin@gojobs.com',
      password: "123123",
    })).rejects.toBeInstanceOf(InvalidCredentialsError)

 

    
  });
});
