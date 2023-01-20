import './App.css';
import {
  BrowserRouter as Router,
  Outlet,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Search from './Search';


export default function App() {
  return ( 
    <>
      <Header />
      <Footer />
    </>
    
  )
}

function Header() {
  return(
    <Router>
    <header className = "header">
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </nav>
    </header>

    <Routes>
      <Route element={ <Home/> } path="/" />

      <Route element={ <Menu/> } path="/menu" />

      <Route element= { <Contact/> } path="/contact" />

    </Routes>

  </Router>
  )
}

function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Search label="Search" />
    </main>
  )
}

function Menu() {
  return (
    <main>
      <h1>Menu</h1>
    </main>
  )
}

function Contact() {
  return (
    <main>
      <h1>Contact</h1>
    </main>
  )
}

function Footer() {
  return (
    <footer>

    </footer>
  )
}



