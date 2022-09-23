import { QueryClient } from "@tanstack/react-query";

function onError(err: unknown) {
  console.log(err);
}

const client = new QueryClient({
  defaultOptions: {
    queries: {
      onError,
    },
  },
});

export default client;
