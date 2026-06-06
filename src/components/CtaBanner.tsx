import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaCard = () => {
  return (
    <section className="py-24 px-6 flex justify-center">
      
      <div className="relative max-w-3xl w-full rounded-3xl p-10 text-center 
      bg-white/5 backdrop-blur-xl border border-white/10 
      shadow-2xl overflow-hidden">
        <div className="absolute w-72 h-72 bg-indigo-500 rounded-full blur-3xl -top-20 -left-20 opacity-20" />
        <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl -bottom-20 -right-20 opacity-20" />

        <div className="relative z-10">
          
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Your next job is <br />
            <span className="text-gradient">waiting for you.</span>
          </h2>

          <p className="text-white/50 mb-8 text-base md:text-lg">
            Join thousands of job seekers using CareerAI to get hired faster.
          </p>

          <Link
            to="/analyse"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl 
            bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 
            font-semibold shadow-lg hover:shadow-indigo-500/30"
          >
            Analyse My Resume Free
            <ArrowRight size={18} />
          </Link>

        </div>
      </div>

    </section>
  );
};

export default CtaCard;
