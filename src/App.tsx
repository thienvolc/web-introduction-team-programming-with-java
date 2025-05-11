import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Team } from './pages/Team';
import { Process } from './pages/Process';
import { Design } from './pages/Design';
import { Tech } from './pages/Tech';
import { MinutesPage } from './pages/minutes/MinutesPage';
export function App() {
  return <Router basename={'/web-introduction-team-programming-with-java'}>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/process" element={<Process />} />
            <Route path="/design" element={<Design />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/minutes" element={<MinutesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}