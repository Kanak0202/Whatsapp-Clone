
//components
import Messenger from "./components/Messenger";

import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId =  '39318088123-84ko4jeb40ehibnnud4eiaq81u0j4qvp.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
