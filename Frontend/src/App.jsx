import { Header, Footer } from './components/index.js';
import { Outlet } from 'react-router-dom';
import BACK from './components/Back.jpg';

function App() {
  return (
    <div
      className="w-full min-h-screen overflow-y-scroll bg-fixed bg-no-repeat bg-cover z-1"
      style={{ backgroundImage: `url(${BACK})` }}
    >
      <Header/>
      <div className="flex flex-wrap items-center justify-center w-full py-4 md:mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
