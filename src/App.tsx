import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Stat } from './components/Stat/Stat';
import { CallToAction } from './components/CallToAction/CallToAction';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Form/Form';

function App() {
   return (
      <div>
         <Header />
         <main>
            <Hero />
            <Form />
            <Stat />
            <CallToAction />
         </main>
         <Footer />
      </div>
   );
}

export default App;
