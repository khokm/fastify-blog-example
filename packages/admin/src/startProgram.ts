import { main } from "./index";

(async () => {
    const exitCode = await main();
    process.exit(exitCode);
})();
