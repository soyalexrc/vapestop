import './App.css';
import Router from './routes'
import ThemeConfig from './theme'
import GlobalStyles from "./theme/globalStyles";
import {ProgressBarStyle} from "./components/LoadingScreen";
import ScrollToTop from "./hooks/ScrollToTop";
import {AuthProvider} from './context/AuthContext'
import 'react-phone-input-2/lib/material.css'


function App() {

  return (
    <ThemeConfig>
      <GlobalStyles />
      <ProgressBarStyle />
      <ScrollToTop />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeConfig>
  );
}

export default App;
