
//components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId =  '39318088123-84ko4jeb40ehibnnud4eiaq81u0j4qvp.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger /> 
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
