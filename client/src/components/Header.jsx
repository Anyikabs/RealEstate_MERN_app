import {FaSearch} from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='bg-blue-950 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <Link to='/'>
                <img src='' alt='logo' />
                </Link>
                    <div>
                        <Link to='/'>
                        <span className='text-slate-400'>  Real</span>
                        <span className='text-stone-950'>Estate</span>
                        </Link>
                    </div>
                    
                </h1>
                <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                    <input type="text" placeholder="Search..." 
                    className='bg-transparent focus:outline-none w-24 sm:w-64'
                    />
                    <FaSearch className='text-slate-600'/>
                </form>
                <ul className='flex gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline text-slate-100 hover:underline'>
                Home
            </li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-100 hover:underline'>
                About
            </li>
            </Link>
            <Link to='/sign-in'> 
            <li className=' text-slate-100 hover:underline'>
                Sign in
            </li>
            </Link>
        </ul>
            </div>
        </header>
    );
}
