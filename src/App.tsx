// import { Header } from './components/Header/Header';
// import { Hero } from './components/Hero/Hero';
// import { Stat } from './components/Stat/Stat';
// import { CallToAction } from './components/CallToAction/CallToAction';
// import { Footer } from './components/Footer/Footer';
import { SignUp } from './components/SignUp/SignUp';
import { useAuth } from './hooks/useAuth';

// import { Form } from './components/Form/Form';

function App() {
   const { isAuth } = useAuth();
   return (
      <div>
         {/* <Header /> */}
         <main>
            {/* <Hero />
            <Form />
            <Stat />
            <CallToAction /> */}
            {isAuth ? <div>Log out</div> : <SignUp />}
         </main>
         {/* <Footer /> */}
      </div>
   );
}

export default App;
