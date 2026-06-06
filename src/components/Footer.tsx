import { useEffect } from "react";

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
        {["Privacy", "Terms", "Contact"].map((i) => (
          <a key={i} href="#" className="hover:text-white/60 transition-colors">
            {i}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;