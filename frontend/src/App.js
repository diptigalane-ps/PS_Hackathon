import { store } from "./store/store.js";
import AuthButton from './components/AuthButton';
import './App.css';
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { useEffect } from "react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
  const { user } = useAuth0();
  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <div className="App">
          <h1>Welcome to My App</h1>
          <AuthButton />
        </div>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
