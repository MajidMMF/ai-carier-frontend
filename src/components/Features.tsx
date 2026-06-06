import { Star } from "lucide-react"
import { Features as features } from "../utils";

const Features = () => {
    return (
        <section id="features" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">

            <div className="text-center mb-16">
                <span className="feature-pill inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                    <Star size={12} className="text-indigo-400" />
                    <span className="text-sm text-white/80">Everything you need</span>
                </span>

                <h2
                    className="text-3xl md:text-5xl font-extrabold tracking-tight"
                    style={{ fontFamily: "'Syne',sans-serif" }}
                >
                    Four tools. one <span className="text-gradient">Career leap.</span>
                </h2>

                <p className="text-white/50 mt-4 max-w-xl mx-auto">
                    From your resume to the offer letter, we've got every step covered
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {
                    features.map(({ icon: Icon, color, glow, title, desc, bullets }) => (
                        <div
                            className="glass-card p-8 flex flex-col gap-5 group hover:border-white/15 transition-all duration-300 hover:scale-[1.02]"
                            key={title}
                        >
                            <div
                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-xl ${glow}`}
                            >
                                <Icon size={20} className="text-white" />
                            </div>

                            <h3 className="text-xl font-semibold text-white">
                                {title}
                            </h3>

                            <p className="text-white/50 text-sm leading-relaxed">
                                {desc}
                            </p>

                            <ul className="flex flex-col gap-1 mt-2">
                                {bullets?.map((item, i) => (
                                    <li key={i} className="text-xs text-white/40 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default Features