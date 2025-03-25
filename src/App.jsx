import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import logo from "./assets/CAPITALXLOGO.png";
import qrCode from "./assets/qrcode.png";
import bgImage from "./assets/BGRED.jpg";
import "./index.css";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center md:justify-center bg-cover bg-center text-white px-4 text-center font-['Red_Hat_Display']" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Logo */}
      <img src={logo} alt="capitalxfinancelogo" className="w-73  mb-8" />
      
      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">UNDER CONSTRUCTION</h1>
      
      {/* Info */}
      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        Our website is under construction, but business is operational. For further assistance, contact us below.
      </p>
      
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* QR Code */}
        <img src={qrCode} alt="WhatsApp QR Code" className="w-32 h-32" />
        
        {/* Contact Details */}
        <div className="flex flex-col items-center md:items-start gap-1 mb-2.5 md:gap-4 text-lg">
          <div className="flex items-center gap-2">
            <IoCallOutline className="text-white text-2xl" />
            <span>066 316 6041</span>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-white text-2xl" />
            <span>077 392 9701</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-white text-2xl" />
            <span>support@capitalxfinance.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
