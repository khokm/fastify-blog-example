import { FastifyInstance } from "fastify";

export async function appService(app: FastifyInstance) {
    // Both `/foo` and `/foo/` are registered
    app.get("/", async function () {
        return { hello: "world" };
    });
}

export default appService;
