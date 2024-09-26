import { Provider } from 'react-redux';
import Body from './Component/Body';
import appStore from './utils/appStore';

function App() {
  
  return (
      <Provider store={appStore} >
              <Body />
      </Provider>
     
   
   
  );
}

export default App;
