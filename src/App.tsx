import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Stat } from './components/Stat/Stat';
import { CallToAction } from './components/CallToAction/CallToAction';
import { Footer } from './components/Footer/Footer';

import { Form } from './components/Form/Form';
import { useAppSelector } from './hooks/useAppSelector';
import { Modal } from './components/Modal/Modal';
import { SignUp } from './components/SignUp/SignUp';
import { SignIn } from './components/SignIn/SignIn';
import { Shorten } from './components/Shorten/Shorten';

function App() {
   const { registrationModal, loginModal } = useAppSelector((state) => state.modalReducer);

   return (
      <div style={{ overflow: `${registrationModal && 'hidden'}` }}>
         <Header />
         <Modal isActive={registrationModal}>
            <SignUp />
         </Modal>
         <Modal isActive={loginModal}>
            <SignIn />
         </Modal>
         <main>
            <Hero />
            <Form />
            <Shorten/>
            <Stat />
            <CallToAction />
         </main>
         <Footer />
      </div>
   );
}

export default App;
