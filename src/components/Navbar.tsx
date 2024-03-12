import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="p-2 rounded-lg justify-center flex font-bold text-white">
            <i className='bx bx-arrow-back bx-sm'></i>
        </NavLink>
        {/* <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-gray-400' : 'text-white' }>
                <p className='flex items-center gap-1'>
                    <i className='bx bx-body bx-sm'></i> <span>About</span>
                </p>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-gray-400' : 'text-white' }>
                <p className='flex items-center gap-1'>
                    <i className='bx bxs-contact bx-sm'></i> <span>Contact</span>
                </p>
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-gray-400' : 'text-white' }>
                <p className='flex items-center gap-1'>
                    <i className='bx bxs-invader bx-sm'></i> <span>Projects</span>
                </p>
            </NavLink>
        </nav> */}
    </header>
  )
}

export default Navbar