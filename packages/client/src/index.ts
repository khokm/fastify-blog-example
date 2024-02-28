import axios from "axios";

export interface MyClient {
    test(): Promise<any>;
}

export function createClient(): MyClient {
    return {
        test: async () => {
            const resp = await axios("http://localhost:3000");
            return resp.data;
        },
    };
}
