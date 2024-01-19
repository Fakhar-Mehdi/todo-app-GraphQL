import { startStandaloneServer } from "@apollo/server/standalone";

export const connectServer = async (server: any) => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
  });
  return url;
};
