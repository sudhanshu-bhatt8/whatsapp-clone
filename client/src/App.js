
import './App.css';
import Messanger from './component/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google'
import AccountProvider from './component/account/contexts/AccountProvider';

function App() {
  const clientId='948814229198-cjag52378opiqrfao3ifks44qh80nq0g.apps.googleusercontent.com'

  return (

    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messanger/>
      </AccountProvider>
    </GoogleOAuthProvider>

  );
}

export default App;
