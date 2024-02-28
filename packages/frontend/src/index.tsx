import { createClient } from "@fastify-blog-example/client";
import { renderAt } from "./react-utils";

export function createApp(root: string | HTMLElement, strict?: boolean): void {
  const client = createClient();
  client.test().then((res) => console.log(res));

  const appView = <h1>Привет, мир!</h1>;
  renderAt(appView, root, strict);
}
