import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

export function renderAt(AppView: JSX.Element, root: string | HTMLElement, strict?: boolean): void {
  const rootEl = typeof root === "string" ? document.getElementById(root)! : root;
  createRoot(rootEl).render(strict ? <StrictMode>{AppView}</StrictMode> : AppView);
}
