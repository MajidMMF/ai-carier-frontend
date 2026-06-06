import { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    console.log("Footer mounted");
  }, []);

  return (
    <footer className="w-full relative z-10 border-t border-white/10 px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs  md:bottom-0 md:left-0 md:right-0 md:bg-[#080b14]/80 md:backdrop-blur-md">
      <span style={{ fontFamily: "'Syne', sans-serif" }} className="font-bold text-white/40 text-sm">
        Career-AI
      </span>
      <span>©️ {new Date().getFullYear()} CareerAI. All rights reserved.</span>
      <div className="flex gap-5">
        <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
        <Link to="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
        <Link to="/contact" className="hover:text-white/60 transition-colors">Contact</Link>
        <Link to="/developer" className="hover:text-white/60 transition-colors">Developer</Link>
      </div>
    </footer>
  );
};

export default Footer;