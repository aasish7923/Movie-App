import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function NavBar(){
        const location = useLocation();
        const isHome = location.pathname === '/';

    return(
        <nav className="bg-black py-4 px-8 flex justify-between align-middle shadow max-md:p-4">

            <div className="flex gap-8 max-md:p-2 font-bold text-blue-700">
                <Link to="/">Movie App</Link>
            </div>

            {isHome &&
                <div className='flex gap-10 items-center max-md:hidden'>
                    <a className="font-bold text-cyan-200 opacity-70
                    hover:text-cyan-300 hover:underline hover:opacity-100"
                    href="#popular">Popular</a>

                    <a className="font-bold text-cyan-200 opacity-70
                        hover:text-cyan-300 hover:underline hover:opacity-100"
                        href="#toprated">Top Rated</a>

                        <a className="font-bold text-cyan-200 opacity-70
                        hover:text-cyan-300 hover:underline hover:opacity-100"
                        href="#nowplaying">Now Playing</a>

                        <a className="font-bold text-cyan-200 opacity-70
                        hover:text-cyan-300 hover:underline hover:opacity-100"
                        href="#weeklytrending">Weekly Trending</a>

                        <a className="font-bold text-cyan-200 opacity-70
                        hover:text-cyan-300 hover:underline hover:opacity-100"
                        href="#theatres">In Theatres</a>
            </div>}

            <div className="font-bold flex gap-8 rounded-1 text-lg py-2 px-4 transition-[background-color]
                            duration-200 hover:bg-[rgba(255, 255, 255, 0.1)]
                             max-md:gap-4 text-blue-700">
                <Link to="/tickets" className='link'>My Tickets</Link>
                <Link to="/" className='link'>Home</Link>
                <Link to="/favorites">Favorites</Link>
            </div>

        </nav>
    );
}
export default NavBar