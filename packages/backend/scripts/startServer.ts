import { fastify } from "fastify";
import { appService } from "~/index";

const app = fastify({
    logger: true,
}).register(appService);

if (process.env.NODE_ENV === "development") {
    app.addHook("onRequest", async (_, res) => {
        res.header("access-control-allow-origin", "http://localhost:8000");
    });
}

app.listen({ port: parseInt(process.env.PORT || "3000") });
