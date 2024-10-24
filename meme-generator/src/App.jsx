import './App.css';

// comps
import Header from './components/header';
import MemeGen from './components/meme';
import Counter from './components/simpleCount';

export default function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <Header />
      <MemeGen />
      <Counter />
    </div>
  )
};