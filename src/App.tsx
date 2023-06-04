import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Stat } from './components/Stat/Stat';
import { Footer } from './components/Footer/Footer';

function App() {
   return (
      <div>
         <Header />
         <main>
            <Hero />
            <Stat />
         </main>
         <Footer />
      </div>
   );
}

export default App;
