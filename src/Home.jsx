import { Link } from 'react-router-dom'
import './Home.css'

function Home(){
    return(
        <>
          <nav className="navbar">
        <div className="logo">MySite</div>
        <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

    <main className="main-content">
        <h1>Welcome to My Website</h1>
        <p>This is a simple page design with a responsive navbar and a content section.</p>
    </main>

    <footer className="footer">
        &copy; 2025 MySite. All rights reserved.
    </footer>

    </>
        
    )
}

export default Home