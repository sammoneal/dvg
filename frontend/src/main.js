import { createApp, h } from "vue";
import App from "./App.vue";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";
import router from "./router";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:3020/graphql",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

//Create the apollo provider
const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

//create app
const myApp = createApp({
  render: () => h(App),
});

//add routes
myApp.use(router);
//add apollo
myApp.use(apolloProvider);
//mount
myApp.mount("#app");
