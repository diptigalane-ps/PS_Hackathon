import { store } from "./store/store.js";
import AuthButton from './components/AuthButton';
import './App.css';
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { useEffect } from "react";
import {Dashboard} from "./components/Dashboard.js"

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
  const { user } = useAuth0();
  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <div>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <div className="App">
          <Dashboard></Dashboard>
          {/* <AuthButton /> */}
        </div>
      </Provider>
    </Auth0Provider>
    </div>
  );
}

export default App;
