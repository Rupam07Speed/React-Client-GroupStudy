import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";


const Navbar = () => {
    const { logout, user } = useAuth();
    // const [theme, setTheme] = useState('light')

    // useEffect(() => {
    //     localStorage.setItem('theme', theme)
    //     const localTheme = localStorage.getItem('theme')
    //     document.querySelector('html').setAttribute('data-theme', localTheme)

    // }, [theme])

    // const handleToogle = (e) => {
    //     if (e.target.checked) {
    //         setTheme('synthwave');
    //     }
    //     else {
    //         setTheme('light');
    //     }
    // }

    const handleSignOut = () => {
        logout()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error)
            })
    }

    const navLinks = <>
        <li className='mx-2 font-normal'><NavLink to="/">Home</NavLink></li>
        <li className='mx-2 font-normal'><NavLink to="/assignments">Assignments</NavLink></li>
        {
            user ? <li className='mx-2'><NavLink to="/createAssignments">Create assignments</NavLink></li>
                :
                ''
        }
        {
            user ? <li className='mx-2'><NavLink to="/pendingAssignments">Pending assignments</NavLink></li>
                :
                ''
        }
        {
            user ? <li className='mx-2'><NavLink to={`/submittedAssignments/${user.email}`}>Submitted assignments</NavLink></li>

                :
                ''
        }
    </>

    return (
        // <div className="navbar py-4 bg-black text-cyan-500 border-b-2 border-cyan-500">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-10">
        //                 {navLinks}
        //             </ul>
        //         </div>
        //         <a className="btn btn-ghost normal-case text-xl">Trekify</a>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1">
        //             {navLinks}
        //         </ul>
        //     </div>
        //     <div className="navbar-end">
        //         <div className="flex gap-4 mr-4">
        //             <div className="avatar">
        //                 <div className="w-12 rounded-full">
        //                     <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        //                 </div>
        //             </div>
        //             <div className="lg:navbar-end lg:flex lg:gap-4 hidden">
        //                 <Link to="/login" className="btn bg-blue-800 text-blue-50">Login</Link>
        //                 <a className="btn bg-[#3babb8] text-white p-4">Register</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="navbar px-20  text-teal-600 border-r-8 border-l-8 border-teal-600 pt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-10">
                        {navLinks}
                        {
                            user ?
                                <button onClick={handleSignOut} className='btn bg-gradient-to-br from-teal-600 to-teal-700  border-none shadow-xl text-blue-50'>Sign Out</button>
                                :
                                <div className='flex flex-col items-center gap-2 pt-2'>
                                    <Link to="/login" className="btn bg-gradient-to-br from-teal-600 to-teal-700  text-blue-50 border-none shadow-xl">Login</Link>
                                    <Link to="/register" className="btn bg-gradient-to-br from-teal-600 to-teal-700  text-blue-50 border-none shadow-xl">Register</Link>
                                </div>
                        }
                    </ul>
                </div>
                <h1 className='flex text-3xl font-bold gap-0 text-orange-500'>Study <span className='text-teal-600'> Sphere</span></h1>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <div className="p-4">
                    <input
                        onChange={handleToogle}
                        type="checkbox"
                        className="toggle theme-controller" />
                </div> */}
                {
                    user ?
                        <div className='flex gap-4'>
                            {/* <div tabIndex={0} role="button" className=" avatar tooltip w-11 rounded-full" data-tip={user.displayName}>

                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} className='rounded-full' />

                            </div> */}

                            <div className='dropdown dropdown-end z-50'>
                                <div
                                    tabIndex={0}
                                    role='button'
                                    className='btn btn-ghost btn-circle avatar'
                                >
                                    <div className=' rounded-full' title=''>
                                        <img
                                            referrerPolicy='no-referrer'
                                            alt='User Profile Photo'
                                            src={user?.photoURL}
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                                >
                                    <li>
                                        <div className='justify-between font-normal'>Attempted Assignments</div>
                                    </li>
                                    <li className='mt-2'>
                                        <button onClick={handleSignOut} className='bg-gray-200 block text-center border-teal-600'>Sign Out</button>
                                    </li>
                                </ul>
                            </div>

                            <div className="hidden lg:flex">
                                {/* <p>
                                Welcome, {user?.displayName
                                }!
                            </p> */}
                                {/* <button onClick={handleSignOut} className='btn bg-gradient-to-br from-teal-600 to-teal-700  border-none shadow-xl text-blue-50'>Sign Out</button> */}
                            </div>
                        </div>
                        :
                        <div className='hidden lg:flex items-center gap-4'>
                            <Link to="/login" className="btn bg-gradient-to-br from-teal-600 to-teal-700 text-blue-50 border-none shadow-xl">Login</Link>
                            <Link to="/register" className="btn bg-gradient-to-br from-teal-600 to-teal-700 text-blue-50 border-none shadow-xl">Register</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;