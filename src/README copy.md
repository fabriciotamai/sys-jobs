# App

GymPass style app.

## RFs (Requisitos funcionais)

- [ ] Deve ser possivel se cadastrar;
- [ ] Deve ser possivel se autenticar;
- [ ] Deve ser possivel obter perfil de um usuário logado;
- [ ] Deve ser possivel obter numero de check-ins realizado pelo usuário logado;
- [ ] Deve ser possivel o usuário buscar pessoas próximas;
- [ ] Deve ser possivel o usuário fazer de check-in em um estabelecimento;
- [ ] Deve ser possivel o usuário criar um QRCODE com algum produto da casa;
- [ ] Deve ser possivel o usuário bloquear outro usuario;
- [ ] Deve ser possivel seguir os outros usuarios;
- [ ] Deve ser possivel se candidatar  Rei e Rainha da baile;
- [ ] Deve ser possivel Criar um stories.



<!-- - [ ] Deve ser possivel usuário buscar academias, pelo nome; --> 
<!-- - [ ] Deve ser possivel  validar o check-in de um usuário; -->
<!-- - [ ] Deve ser possivel cadastrar uma academia; -->
 

# RNs (Regras de negócios)


- O usuário não pode se cadastrar com emai-l duplicado;
- O usuário não pode fazer 2 check-in no mesmo dia;
- O usuário não pode fazer check-in se estiver a menos de 100m de estabecimento;
- O usuário pode enviar um produto da casa para outro player;
- O usuário pode  realizar 5 curtidas no plano free;
- O usuário pode enviar 2 mesangens na semana sem ter dado match [ Free ]
- O usuário pode vizualizar stories somente quando for Premium 



# A TRABALHAR 

- Rainha e rei do baile recompensa.
- Como cobrar mes ou dia.





<!-- - O check-in só pode ser validado até 20 minutos após criado; -->
- O checkin só pode ser validado por administradores;
<!-- - A academia só pode ser cadastrada por administradores; -->

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usúario precisa estar critograda;
- [ ] Os dados da aplicação precisam estar persistidos em um Banco PostgreSQL;
- [ ] Todas as listas de dados devem estar paginada com 20 itens por pagina;
- [ ] O usuário deve ser identificado pelo JWT (Json web Token);
-



