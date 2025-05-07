import React from "react";
import LegalesLink from "./LinkLegales";
import instagramIcon from "../../icons/instagram.png";
import linkedinIcon from "../../icons/linkedin.png";
import whatsappIcon from "../../icons/whatsapp.png";
import { Link } from "react-router-dom";
import { LuBird } from "react-icons/lu";

const Footer = () => {
  return (
    <>

      <footer className="h-auto md:flex bg-white shadow-xl">
        <div className="w-28 h-28 mb-4 mx-auto mt4">
          <img src="\logoOriginal.png" alt="drewili" className="mt-4" />
        </div>

        <div className="w-[80%] md:w-[20%] flex flex-col justify-center items-center mb-4 mt-4 mx-auto">
          <h3>Síguenos</h3>
          <div className="flex flex-wrap">
            <a href="https://www.instagram.com/loveplantscolombia?igsh=cjI4bGp3czhxa3M0" target="_blank" rel="noopener noreferrer" className="p-4">
              <img src={instagramIcon} alt="Instagram icon" />
            </a>
            <a href="https://www.linkedin.com/company/drewili/" target="_blank" rel="noopener noreferrer" className="p-4">
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
          </div>
        </div>

        <div className="w-[80%] md:w-[20%] flex flex-col justify-center items-center mb-4 mt-4 mx-auto">
          <p className="font-bold">Envíanos tu consulta</p>
          <p>loveplants@gmail.com</p>
        </div>

        <div className="w-[80%] md:w-[20%] flex flex-col justify-center items-center mb-4 mt-4 mx-auto">
          <p className="font-bold">Contacto</p>
          <a href="https://wa.me/573167522173" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="Whatsapp icon" className="hover:text-chiliRed mr-2 w-4 h-4" />
          </a>
          <a href="https://wa.me/573167522173" target="_blank" rel="noopener noreferrer">
            <p>3167522173</p>
          </a> 

          <a href="https://wa.me/573167522173" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="Whatsapp icon" className="hover:text-primary mr-2 w-4 h-4" />
          </a>
          <a href="https://wa.me/573167522173" target="_blank" rel="noopener noreferrer">
            <p>3167522173</p>
          </a>
        </div>

        <div className="w-[80%] md:w-[20%] flex flex-col justify-center items-center mt-4 mx-auto">
          <LegalesLink
            text="Política de contratación"
            url="https://docs.google.com/document/d/1LyWMuTLWuKwGzpHI-WsoCLXb8mTev0cA/edit#heading=h.gjdgxs"
          />
          <LegalesLink
            text="Términos y Condiciones"
            url="https://docs.google.com/document/d/1K0Ppm40WRu-t4nbMoyNki7sNyCfR2_rv/edit"
          />
          <LegalesLink
            text="Política de Privacidad"
            url="https://docs.google.com/document/d/1YameiO7oNAqdk3-kx0JC0VjjP2rTYWCz/edit"
          />
        </div>
      </footer>
      <h4 className="text-center bg-onyx text-white">© 2025 Love Plants Todos los derechos reservados.</h4>

    </>
  );
};

export default Footer;
