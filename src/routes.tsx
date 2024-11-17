import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { About } from './pages/about';
import { Project } from './pages/project';
import { Articles } from './pages/articles';
import { Networks } from './pages/networks';

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Project />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/social-networks" element={<Networks />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
