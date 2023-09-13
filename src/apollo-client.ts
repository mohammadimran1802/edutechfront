import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { IAuth } from './pages/login';

const httpLink = createHttpLink({
  uri: "http://13.233.196.92/",
});

const authLink = setContext((_, { headers }) => {
  const auth_object = JSON.parse(sessionStorage.getItem("auth_object") || "{}") as IAuth;
  // console.log("ct_auth_object", ct_auth_object, "ct_auth_object.authToken", ct_auth_object.authToken);
  console.log("auth_object", auth_object);
  console.log("auth_object2", auth_object && auth_object.authToken);
  return {
    headers: {
      ...headers,
      authorization: auth_object && auth_object.authToken ? `Bearer ${auth_object && auth_object.authToken}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions:{
    watchQuery:{
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore'
    },
    query:{
      fetchPolicy:'no-cache',
      errorPolicy:'all'
    },
    mutate:{
      fetchPolicy:'no-cache',
      errorPolicy:'all'
    },

  }
});

export default client;