import { expect, test, describe, it, beforeEach } from "vitest";

import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { compare, hash } from "bcryptjs";

import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";

import { GetUserProfileUseCase } from "./get-user-profile";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

let usersRepository = new InMemoryUsersRepository
let sut: GetUserProfileUseCase


describe("get User Profile Use Case", () => {
  beforeEach(()=>{
     usersRepository = new InMemoryUsersRepository();
     sut = new GetUserProfileUseCase(usersRepository);


  })

  it("should be able to get user profile", async () => {
   const createUser =  await usersRepository.create({
      name:'Admin teste',
      email:'admin@gojobs.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      userId:createUser.id
   
  
    });

    expect(user.id).toEqual(expect.any(String))
    expect(user.name).toEqual('Admin teste')

  });
  it("should not be able to get user profile wrong id", async () => {
    expect(()=> 
    sut.execute({
      userId:'non-existing-id'
      })).rejects.toBeInstanceOf(ResourceNotFoundError)
  });

});
