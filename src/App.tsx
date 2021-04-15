import { Grommet } from 'grommet';
import { FeatureTogglesContext } from './FeatureTogglesContext'
import  GlobalStyle  from './globalStyles'
import  DEFAULT_THEME from './constants/themes'
import { toggles } from './constants'
import Header from './components/Header/Header'
import './App.css';
import Routes from './routes/router';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Grommet theme={DEFAULT_THEME}>
        <FeatureTogglesContext.Provider value={toggles}>
          <Routes>
            <Header />
          </Routes>
        </FeatureTogglesContext.Provider>
      </Grommet>
    </div>
  );
}

export default App;
