I'm preparing a deno talk

The idea is to migrate an existing production grade service from lambdas to deno.deploy

Something akin to

Postgres > PG > db.ts > hander.ts (yup) > controller.ts > http.ts (express)

Outcomes being

Postgres > Kysely > db.ts > handler.ts (zod) > controller.ts > http.ts (something?)

I plan to benchmark some options

1. Node
	1. Express
	2. Fastify
	3. Koa
2. Bun
	2. Express
	3. Fastify
	4. Koa
4. Deno
	2. Express
	3. Fastify
	4. Koa
	5. Others
		1. Reason why?
			1. Security
			2. Documentation
			3. Ease of use
			4. Type Safety
			5. Actively maintained
			6. Scalability
			7. Maturity
		2. Hono
		3. Oak
		4. Alosaur
		5. Pogo
		6. Aqua

Also
TRPC
1. Node
2. Bun
3. Deno

### Flash Server

### Hono
- Supports all 3
- BLAZINGLY fast
- No deps
- 

#### Oak
- Inspired by Koa
- Supports Flash
- 4.5k Stars
- 458 Commits
- Most popular

### Alosaur
- All the decorators - inspired by Nest?
- All the DI
- Generates OpenApi spec 💖

### Aqua
- Very minimal
- Very fass
- 3 years old
- 219 stars

### Pogo
- 472 stars
- 4 years old
- Inspired by Hapi
- 

