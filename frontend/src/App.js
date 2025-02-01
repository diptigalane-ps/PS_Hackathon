import { store } from "./store/store.js";
import './App.css';
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import {Dashboard} from "./components/Dashboard.js"

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
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
