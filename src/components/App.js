import './App.css';
import Cards from './Cards/Cards';

function App() {
  return (
    <div className='main'>
      <main className='main__container'>
        <h1 className='main__title'>Ты сегодня покормил кота?</h1>
        <Cards />
      </main>

    </div>
  );
}

export default App;
