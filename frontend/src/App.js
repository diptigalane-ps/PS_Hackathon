import { store } from "./store/store.js";
import AuthButton from './components/AuthButton';
import './App.css';
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
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
