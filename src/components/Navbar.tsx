import { Link } from "react-router-dom"
import { useAppData } from "../context/AppContext"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { isAuth, user } = useAppData()
    const profileImage = user?.image?.trim() || "/user.png";

    return (
        <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b border-white/10 bg-[#080b14]/80 backdrop-blur-xl shadow-lg">
            
            <Link to={"/"} className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-indigo-500/30 text-2xl group-hover:scale-110 transition-transform">
                    📚
                </div>
                <span
                    className="font-bold text-lg tracking-tight"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                >
                    carier<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-300">AI</span>
                </span>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
                <Link to={"/analyse"} className="hover:text-white transition-colors">Analyse</Link>
                <Link to={"/jobmatcher"} className="hover:text-white transition-colors">Jobmatcher</Link>
                <Link to={"/resumebuilder"} className="hover:text-white transition-colors">Resumebuilder</Link>
                <Link to={"/interviewprep"} className="hover:text-white transition-colors">Interviewprep</Link>
            </div>

            <div className="hidden md:flex items-center gap-3">
                {
                    isAuth ? (
                        <Link to={"/account"} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <img
                                src={profileImage}
                                alt={user?.name || "User"}
                                referrerPolicy="no-referrer"
                                onError={(event) => {
                                    event.currentTarget.src = "/user.png";
                                }}
                                className="w-8 h-8 rounded-full object-cover ring-2 ring-white/10"
                            />
                            <span className="text-sm text-white/70">
                                {user?.name?.split(" ")?.[0]}
                            </span>
                        </Link>
                    ) : (<>

                        <Link to={"/login"} className="text-sm text-white/50 transition-colors px-4 py-2">
                            Sign in
                        </Link>

                        <Link to={"/login"} className="text-sm px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-emerald-400 text-white font-semibold hover:opacity-90 active:opacity-80 transition">
                            Get started Free
                        </Link>

                    </>)
                }
            </div>

            <button 
                className="md:hidden text-white/60 hover:text-white transition"
                onClick={() => setOpen(!open)}
            >
                {open ? <X size={20} /> : <Menu size={20} />}
            </button>

            {open && (
                <div className="absolute top-full inset-x-0 bg-[#080b14]/95 backdrop-blur-xl border-b border-white/10 flex flex-col gap-4 px-6 py-6 md:hidden animate-in slide-in-from-top-2">
                    
                    <Link to={"/analyse"} className="hover:text-white transition-colors">Analyse</Link>
                    <Link to={"/jobmatcher"} className="hover:text-white transition-colors">Jobmatcher</Link>
                    <Link to={"/resumebuilder"} className="hover:text-white transition-colors">Resumebuilder</Link>
                    <Link to={"/interviewprep"} className="hover:text-white transition-colors">Interviewprep</Link>

                    {isAuth ? (
                        <Link to={"/account"} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <img
                                src={profileImage}
                                alt={user?.name || "User"}
                                referrerPolicy="no-referrer"
                                onError={(event) => {
                                    event.currentTarget.src = "/user.png";
                                }}
                                className="w-8 h-8 rounded-full object-cover ring-2 ring-white/10"
                            />
                            <span className="text-sm text-white/70">
                                {user?.name?.split(" ")?.[0]}
                            </span>
                        </Link>
                    ) : (
                        <>
                            <Link to={"/login"} className="text-sm text-white/50 transition-colors px-4 py-2">
                                Sign in
                            </Link>

                            <Link to={"/login"} className="text-sm px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-emerald-400 text-white font-semibold hover:opacity-90 active:opacity-80 transition">
                                Get started Free
                            </Link>
                        </>
                    )}
                </div>
            )}

        </nav>
    )
}

export default Navbar
