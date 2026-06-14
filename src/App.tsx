import Hero from './Hero';
import DeveloperDeck from './DeveloperDeck';
import Timeline from './Timeline';

function App() {
  return (
    <main style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Hero />
      <DeveloperDeck />
      <Timeline />
    </main>
  );
}

export default App;