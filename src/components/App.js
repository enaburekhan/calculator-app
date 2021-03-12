import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/Calculate';

function App() {
  return (
    <div className="Component-App">
      <>
        <Display />
        <ButtonPanel />
        <Calculate />
      </>
    </div>
  );
}

export default App;
