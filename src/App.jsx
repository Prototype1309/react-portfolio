import { Outlet } from 'react-router-dom';
import Navigation from './components/Nav/NavLinks.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';

function App() {

   return (
    <>
      <div>
        <Header />
        <Navigation />
        <main className=''>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App
