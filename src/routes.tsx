import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { About } from './pages/about';

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
