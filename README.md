# CRUD API
---

## Install:
---
1. git clone https://github.com/Vaitsel/CRUD-API.git
2. git checkout dev
3. npm install
4. npm run strart:dev or npm run strart:prod
---

## Start Server:
---
1. Create **.env** file
2. Write **PORT** there, how in env.example
---

## Endpoints
---
- GET:
  - `/api/users` - get all users;
  - `/api/users/${userId}` - get an user by ID, where `userId` unique identifier (string, uuid) generated on server side;
- POST:
  - `/api/users` - Create new user. Accepts the request body as `json` as data;
- PUT:
  - `/api/users/${userId}` - Update an user, with data from the request body as `json`;
- DELETE:
  - `/api/users/${userId}` - Delete an user.
---


**USER:** are stored as objects that have following properties:
 ---
- `id` — unique identifier (string, uuid) generated on server side
- `username` — user's name (string, **(required)**)
- `age` — user's age (number, **(required)**)
- `hobbies` — user's hobbies (array of strings or empty array, **(required)**)
---