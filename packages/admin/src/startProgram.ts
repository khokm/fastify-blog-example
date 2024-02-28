import { main } from "./index";

(() => {
    const exitCode = main();
    process.exit(exitCode);
})();
