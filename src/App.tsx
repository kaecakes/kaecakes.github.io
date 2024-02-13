import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Home, About, Projects, Contact } from './routes';
// import Navbar from './components/Navbar';
import 'boxicons'
import 'boxicons/css/boxicons.min.css'

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App;