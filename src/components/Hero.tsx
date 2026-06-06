import { ArrowRight, ChevronRight, Zap } from "lucide-react"
import { Link } from "react-router-dom"
import { useAppData } from "../context/AppContext"

const Hero = () => {

    const { isAuth } = useAppData()

    return (
        <section className="relative pt-40 pb-32 px-6 flex flex-col items-center text-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f172a] to-black">

            <div className="orb w-[600px] h-[600px] bg-indigo-600 -top-52 left-1/2 -translate-x-1/2 blur-3xl" style={{ opacity: 0.15 }} />
            <div className="orb w-[350px] h-[350px] bg-emerald-500 bottom-0 right-10 blur-2xl" style={{ opacity: 0.12 }} />

            <div className="inline-flex items-center gap-2 feature-pill mb-6 animate-fade-in backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full shadow-md">
                <Zap size={12} className="text-emerald-400" />
                <span className="text-xs tracking-wide text-white/80">
                    AI-Powered Career Platform
                </span>
            </div>

            <h1
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight max-w-4xl mb-6 animate-slide-up"
                style={{ fontFamily: "'Syne',sans-serif" }}
            >
                Land Your Dream Job
                <br />
                <span className="text-gradient drop-shadow-[0_0_25px_rgba(99,102,241,0.5)]">
                    Faster With AI
                </span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-10 animate-slide-up">
                Analyse your resume, get an ATS score, discover the right jobs,
                build a stunning resume, and ace every interview — all in one place.
            </p>

            <div
                className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
            >
                <Link
                    to={isAuth ? "/jobmatcher" : "/login"}
                    className="btn-primary px-8 py-4 rounded-xl text-base font-semibold shadow-lg hover:scale-[1.04] active:scale-[0.98] transition-all duration-300"
                >
                    {
                        isAuth
                            ? <p className="flex items-center gap-2">Find Best Job <ArrowRight size={16} /></p>
                            : <p className="flex items-center gap-2">Start for free <ArrowRight size={16} /></p>
                    }
                </Link>

                <a
                    href="#features"
                    className="text-sm text-white/50 hover:text-white transition-all duration-300 flex items-center gap-1.5 group"
                >
                    See how it works
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition" />
                </a>
            </div>

            <p className="text-white/30 text-xs mt-5 tracking-wide">
                First 3 analyses free • No credit card required
            </p>

            <div
                className="mt-8 glass-card px-10 py-6 flex items-center gap-8 animate-slide-up backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: "0.3s" }}
            >
                <div className="flex gap-3 items-center">
                    <span
                        className="text-5xl font-black text-gradient"
                        style={{ fontFamily: "'Syne',sans-serif" }}
                    >
                        87
                    </span>
                    <span className="text-[13px] text-gradient uppercase tracking-widest">
                        ATS Score
                    </span>
                </div>

                <div className="h-12 w-px bg-white/10" />

                <div className="flex flex-col gap-1 text-left">
                    <span className="text-xs text-emerald-400 font-medium">
                        ✓ Strong keywords detected
                    </span>
                    <span className="text-xs text-yellow-400 font-medium">
                        ⚠️ Missing: quantified impact
                    </span>
                    <span className="text-xs text-white/50 font-medium">
                        3 job matches found
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Hero