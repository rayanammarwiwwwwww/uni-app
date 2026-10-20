import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import StudentCard from './components/StudentCard'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="main">
        <StudentCard />
      </main>
      <Footer />
    </>
  )
}

export default App
