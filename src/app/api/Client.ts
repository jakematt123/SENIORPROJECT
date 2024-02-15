import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "~/server/api/root";
import { SuperJSON } from "superjson";

export const Client = createTRPCProxyClient<AppRouter>({
    links: [httpBatchLink({ url: "/api/trpc" })],
    transformer: SuperJSON
})