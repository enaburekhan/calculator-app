import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  return (
    <div className="Component-App">
      <>
        <Display />
        <ButtonPanel />
        <calculate />
      </>
    </div>
  );
}

export default App;
