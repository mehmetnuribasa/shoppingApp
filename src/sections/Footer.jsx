import { headerLogo2 } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"
import { copyrightSign } from "../assets/icons"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={headerLogo2} alt="logo" width={150} height={46} className="m-0"/>
          </a>
          
          <p className="mt-6 text-base leading-6 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex gap-5 mt-8">
            {socialMedia.map((icon) => (
              // in this div 'flex' is used to center the icon in the div.
              <div key={icon.alt} className="bg-white flex justify-center items-center w-12 h-12 rounded-full cursor-pointer hover:bg-slate-200 hover:scale-95 transition duration-300 ease-in-out">
                <img src={icon.src} alt={icon.alt} width={24} height={24} className="object-contain"/>
              </div>
            ))}
          </div>
        </div>


        <div className="flex flex-1 justify-between gap-20 flex-wrap lg:gap-10">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-montserrat text-2xl leading-normal font-medium mb-5 text-white">
                  {section.title}
                </h4>

                <ul>
                  {section.links.map((link) => (
                    <li key={link.name} className="mt-3 font-montserrat text-base leading-normal hover:text-slate-gray">
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

      </div>


        <div className="flex justify-between mt-20 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img src={copyrightSign} alt="copyright sign" width={20} height={20} className="rounded-full m-0"/>
            <p>Copyright. All rights reserved.</p>
          </div>

          <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
        </div>

    </footer>
  )
}

export default Footer