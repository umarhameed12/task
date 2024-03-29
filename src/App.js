import './App.css';
import LeftSide from './components/leftside';
import RightSide from './components/rightside';

function App() {

  return (
    <div className="min-h-screen h-screen bg-[#191919] flex font-apercu">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
