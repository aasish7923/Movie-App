import {Link} from 'react-router-dom'


function NavBar(){

    return(
        <nav className="bg-black py-4 px-8 flex justify-between align-middle shadow max-md:p-4">

            <div className="flex gap-8 max-md:p-2">
                <Link to="/">Movie App</Link>
            </div>

            <div className="flex gap-8 rounded-1 text-lg py-2 px-4 transition-[background-color] duration-200 hover:bg-[rgba(255, 255, 255, 0.1)] max-md:gap-4">
                <Link to="/" className='link'>Home</Link>
                <Link to="/Favorites">Favorites</Link>
            </div>

        </nav>
    );
}
export default NavBar