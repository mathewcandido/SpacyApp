import Datacontext from './Components/result/Contexto'
import { Router } from './router'

function App() {
  return (


    <Datacontext.Provider>
      <Router />
    </Datacontext.Provider>
  );
}

export default App;
