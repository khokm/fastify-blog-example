import { createClient } from "@fastify-blog-example/client";

export async function main(): Promise<number> {
    console.log("Привет, мир!");

    const client = createClient();
    const res = await client.test();
    console.log(res);

    return 0;
}
