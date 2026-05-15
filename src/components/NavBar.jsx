import {Link} from 'react-router-dom'
import '../css/NavBar.css'


function NavBar(){

    return(
        <nav className="navbar">

            <div className="navbar-links">
                <Link to="/">Movie App</Link>
            </div>

            <div className="nav-link">
                <Link to="/" className='link'>Home</Link>
                <Link to="/Favorites">Favorites</Link>
            </div>

        </nav>
    );
}
export default NavBar