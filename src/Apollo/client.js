import ApolloClient from "apollo-boost";
import { resolvers, defaults } from "./LocalState";
const client = new ApolloClient({
  uri: "http://localhost:4001",
  clientState: { defaults, resolvers },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

export default client;
