import { createApp } from "~/index";

declare var process: {
    env: {
        NODE_ENV: string;
    };
};

const isStrict = process.env.NODE_ENV === "development";

createApp("root", isStrict);
