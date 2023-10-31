import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants/index';
const Footer = () => {
  return (
    <footer className=" max-container ">
      <div className=" flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className=" flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Footer logo" width={150} height={46} />
          </a>
          <p className=" mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur nemo ratione fugit suscipit
            adipisci doloremque molestiae fugiat ea soluta molestias nostrum alias quia corrupti dolorem repudiandae,
            esse deserunt odit.
          </p>
          <div className=" flex items-center gap5 mt-8">
            {socialMedia.map(social => (
              <div key={social.alt} className=" flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={social.src} alt={social.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map(section => (
            <div key={section.title}>
              <h4 className=" text-xl text-white">{section.title}</h4>
              <ul>
                {section.links.map(link => (
                  <li
                    key={link}
                    className=" mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer "
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className=" flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="Copyright" width={20} height={20} className=" rounded-full m-0" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className=" font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
