import { renderAt } from "./react-utils";

export function createApp(root: string | HTMLElement, strict?: boolean): void {
  const appView = <h1>Привет, мир!</h1>;
  renderAt(appView, root, strict);
}
