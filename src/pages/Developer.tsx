// Developer profile page

const Developer = () => {
  const linkedIn =
    "https://www.linkedin.com/in/mohammad-majid-538113320?utm_source=share_via&utm_content=profile&utm_medium=member_android";

  const skills = [
    { name: "React / TypeScript", pct: 92 },
    { name: "Node.js / Express", pct: 88 },
    { name: "MongoDB", pct: 82 },
    { name: "Docker & CI/CD", pct: 78 },
    { name: "AWS / Deployment", pct: 70 },
  ];

  return (
    <div className="bg-page min-h-screen py-20">
      <div className="w-full max-w-6xl mx-auto p-8">
        <div className="glass-card p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <aside className="w-full md:w-1/3 flex flex-col items-center text-center">
              <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-white/8 shadow-2xl mb-4">
                <img src="/my-image.jpeg" alt="Majid" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-bold text-gradient">Majid</h2>
              <p className="text-white/60 mt-1">MERN Full‑Stack Developer · DevOps</p>

              <div className="mt-4 w-full">
                <a href={linkedIn} target="_blank" rel="noreferrer" className="btn-primary w-full inline-block py-2 rounded-xl text-center">View LinkedIn</a>
                <a href="mailto:majid@example.com" className="feature-pill w-full mt-3 inline-block text-center">Email Me</a>
              </div>

              <div className="mt-6 w-full text-left">
                <h4 className="text-xs text-white/40 uppercase tracking-widest">Quick Stats</h4>
                <ul className="mt-2 text-sm text-white/70">
                  <li>5+ years building production web apps</li>
                  <li>Multiple deployed MERN projects</li>
                  <li>CI/CD + containerization experience</li>
                </ul>
              </div>
            </aside>

            <main className="w-full md:w-2/3">
              <section className="mb-6">
                <h3 className="text-lg font-semibold">About me</h3>
                <p className="text-white/70 mt-2">
                  I'm Majid — a practical full‑stack engineer focused on building
                  performant user experiences and resilient backend systems. I enjoy
                  solving product problems end‑to‑end, and improving delivery with
                  automation and reliable infrastructure.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-lg font-semibold">Skills</h3>
                <div className="mt-3 space-y-3">
                  {skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm text-white/60 mb-1">
                        <span>{s.name}</span>
                        <span>{s.pct}%</span>
                      </div>
                      <div className="w-full bg-white/6 rounded-full h-2.5">
                        <div style={{ width: `${s.pct}%` }} className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-6">
                <h3 className="text-lg font-semibold">Selected Projects</h3>
                <div className="mt-3 space-y-3 text-white/70">
                  <div className="p-4 bg-white/3 rounded-lg border border-white/6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold">Career-AI (this site)</div>
                        <div className="text-sm mt-1">Resume & job-tooling platform built with React, Node and simple AI integrations.</div>
                      </div>
                      <div className="text-sm">
                        <a href="#" className="feature-pill">Live</a>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white/3 rounded-lg border border-white/6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold">Project Two</div>
                        <div className="text-sm mt-1">Scalable API and background workers for data processing.</div>
                      </div>
                      <div className="text-sm">
                        <a href="#" className="feature-pill">Repo</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold">Hire / Contact</h3>
                <p className="text-white/70 mt-2">If you'd like to discuss a role or contract, send a message on LinkedIn or email me.</p>
                <div className="flex gap-3 mt-4">
                  <a href={linkedIn} target="_blank" rel="noreferrer" className="btn-primary px-4 py-2 rounded-xl">Message on LinkedIn</a>
                  <a href="mailto:majid@example.com" className="feature-pill px-4 py-2 rounded-xl">Email</a>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
