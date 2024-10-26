import './App.css';

// comps
import Header from './components/header';
import MemeGen from './components/meme';
//import Counter from './components/simpleCount'; // ← appart exercise, you can uncomment it if you want
import TernaryExs from './components/ternaryExs'; // ← appart exercise, you can uncomment it if you want

export default function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column">
      <Header />
      <MemeGen />
      {/* <Counter /> */}
      <TernaryExs />
    </div>
  )
};