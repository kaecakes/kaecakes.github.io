import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={'Home'} />
        </Routes>
      </Router>
    </main>
  )
}

export default App;