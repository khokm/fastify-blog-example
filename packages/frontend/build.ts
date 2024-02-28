/// <reference types="node" />
import esbuild from "esbuild";
import { writeFileSync } from "fs";

const projectName = "Frontend";
const entryPoint = "./scripts/initFrontend.ts";
const outFileName = "frontend.min.js";
const target = "es2015";
const servePort = 8000;

const isDevServer = process.argv.includes("--dev");

const options: esbuild.BuildOptions = {
    absWorkingDir: __dirname,
    bundle: true,
    target: [target],
    entryPoints: [entryPoint],
    outfile: isDevServer ? `public/${outFileName}` : `dist/${outFileName}`,
    entryNames: "[ext]/[name]",
    sourcemap: isDevServer,
    minify: !isDevServer,
    write: !isDevServer,
    define: { "process.env.NODE_ENV": isDevServer ? '"development"' : '"production"' },
    metafile: !isDevServer,
};

if (isDevServer) {
    esbuild
        .context(options)
        .then((v) => v.serve({ servedir: "public", port: servePort }))
        .then((v) => console.log(`${projectName} running at http://localhost:${v.port}`));
} else {
    console.log(`esbuild v${esbuild.version}`);

    try {
        const r = esbuild.buildSync(options);
        writeFileSync("dist/meta.json", JSON.stringify(r.metafile));
    } catch {
        process.exit(1);
    }
}

process.on("SIGINT", () => {});
