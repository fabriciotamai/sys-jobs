import { expect, test, describe, it, beforeEach } from "vitest";

import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { compare } from "bcryptjs";
import { RegisterUseCase } from "./register";
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";


let usersRepository : InMemoryUsersRepository
let sut: RegisterUseCase 



describe("Register Use Case", () => {
  beforeEach(() => {
  usersRepository = new InMemoryUsersRepository();
  sut = new RegisterUseCase(usersRepository);

    })
  it("should be able to register", async () => {


    const { user } = await sut.execute({
      name: "Fabricio Tamai",
      email: "fabriciotamai2@gmail.com",
      password: "123456",
    });

    expect(user.id).toEqual(expect.any(String));
  });
  it("should hash   user password upon registration", async () => {
  

    const email = "fabriciotamai@gmail.com";

    await sut.execute({
      name: "Fabricio Tamai",
      email,
      password: "123456",
    });

    await expect(() =>
    sut.execute({
        name: "Fabricio Tamai",
        email,
        password: "123456",
      })
    ).rejects.toBeInstanceOf(UserAlreadyExistsError);
  });
});
