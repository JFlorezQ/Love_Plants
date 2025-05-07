import React from "react";
import LegalesLink from "./LinkLegales";
import instagramIcon from "../../icons/instagram.png";
import TiktokIcon from "../../icons/Tiktok.png";
import whatsappIcon from "../../icons/whatsapp.png";
import { Link } from "react-router-dom";
import { LuBird } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <footer className="h-auto md:flex bg-white shadow-xl flex-wrap justify-around items-start py-6">
        {/* Logo */}
        <div className="w-28 h-28 mb-4 mx-auto mt-4">
          <img src="/logoOriginal.png" alt="LovePlants" className="mt-2 w-full h-full object-contain" />
        </div>
  
        {/* Redes Sociales */}
        <div className="w-[80%] md:w-[20%] flex flex-col justify-center items-center mb-4 mt-4 mx-auto">
          <h3 className="mb-2 font-semibold">Síguenos</h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/loveplantscolombia?igsh=cjI4bGp3czhxa3M0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram icon" className="w-8 h-8 object-contain" />
            </a>
            <a
              href="https://www.tiktok.com/@love.plants.colom?_t=ZS-8w2JYyv9YNk&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TiktokIcon} alt="Tiktok icon" className="w-8 h-8 object-contain" />
            </a>
          </div>
        </div>
  
        {/* Contacto */}
        <div className="w-[80%] md:w-[20%] flex flex-col justify-center items-center mb-4 mt-4 mx-auto text-center">
          <p className="font-bold mb-1">Contacto</p>
          <a href="https://wa.me/573167522173" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="Whatsapp icon" className="w-5 h-5 mx-auto mb-1" />
          </a>
          <a href="https://wa.me/573167522173" target="_blank" rel="noopener noreferrer">
            <p>3167522173</p>
          </a>
        </div>
  
        {/* Enlaces legales */}
        <div className="w-[80%] md:w-[20%] flex flex-col justify-center items-center mt-4 mx-auto text-center">
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
  
      <h4 className="text-center bg-onyx text-white py-2">
        © 2025 Love Plants - Todos los derechos reservados.
      </h4>
    </>
  );}
  

export default Footer;
