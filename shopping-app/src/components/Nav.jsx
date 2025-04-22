import { headerLogo2} from '../assets/images';
import { navLinks } from '../constants';
import { hamburger } from '../assets/icons';

const Nav = () => {
  return (
    <header className='padding-x py-8 w-full absolute z-10'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/" >
          <img src={headerLogo2} alt="Header Logo" width={160}/>
        </a>
        
        {/*flex-1 allows all flex-1 given items to take up equal space, grow and shrink at an equal rate while filling empty space. */}
        <ul className='flex-1 flex justify-center items-center gap-16 max-md:hidden'> {/* until the height becomes at most medium, this applies. i mean, hidden. */}
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='hidden max-md:block'>
          <img src={hamburger} alt="Hamburger" width="30px" height="30px"/>
        </div>
      </nav>
    </header>
  )
}

export default Nav