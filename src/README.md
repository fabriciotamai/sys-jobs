# App

Gojobs style app.

## RFs (Requisitos funcionais)

- [ ] Deve ser possivel se cadastrar;
- [ ] Deve ser possivel se autenticar;
- [ ] Deve ser possivel obter perfil de um usuário logado;
- [ ] Deve ser possivel obter numero de check-ins realizado pelo usuário logado;
- [ ] Deve ser possivel o usuário buscar academias próximas;
- [ ] Deve ser possivel usuário buscar academias, pelo nome;
- [ ] Deve ser possivel o usuário fazer de check-in em uma academia;
- [ ] Deve ser possivel  validar o check-in de um usuário;
- [ ] Deve ser possivel cadastrar uma academia;
 

# RNs (Regras de negócios)


- [x] O usuário não pode se cadastrar com e-mail duplicado;
- [] O usuário não pode fazer 2 check-in no mesmo dia;
- [] O usuário não pode fazer check-in se 100m de uma academia;
- [] O check-in só pode ser validado até 20 minutos após criado;
- [] O checkin só pode ser validado por administradores;
- [] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usúario precisa estar critograda;
- [x] Os dados da aplicação precisam estar persistidos em um Banco PostgreSQL;
- [ ] Todas as listas de dados devem estar paginada com 20 itens por pagina;
- [x] O usuário deve ser identificado pelo JWT (Json web Token);




