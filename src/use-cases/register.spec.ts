import { expect, test, describe, it } from "vitest";

import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { compare } from "bcryptjs";
import { RegisterUseCase } from "./register";
import { InMemoryUsersRepository } from "@/repositories/in-memory/in-memory-users-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";

describe("Register Use Case", () => {
  it("should be able to register", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const registerUseCase = new RegisterUseCase(usersRepository);

    const { user } = await registerUseCase.execute({
      name: "Fabricio Tamai",
      email: "fabriciotamai2@gmail.com",
      password: "123456",
    });

    expect(user.id).toEqual(expect.any(String));
  });
  it.skip("should hash   user password upon registration", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const registerUseCase = new RegisterUseCase(usersRepository);

    const email = "fabriciotamai@gmail.com";

    await registerUseCase.execute({
      name: "Fabricio Tamai",
      email,
      password: "123456",
    });

    await expect(() =>
      registerUseCase.execute({
        name: "Fabricio Tamai",
        email,
        password: "123456",
      })
    ).rejects.toBeInstanceOf(UserAlreadyExistsError);
  });
});
