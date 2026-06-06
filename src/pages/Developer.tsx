import { Link } from "react-router-dom";

const Developer = () => {
  return (
    <div className="bg-page min-h-screen flex items-center justify-center py-20">
      <div className="w-full max-w-4xl p-8 glass-card flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-white/10 shadow-lg">
            <img src="/my-image.jpeg" alt="Majid" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2 text-gradient">Majid</h1>
          <p className="text-white/70 mb-4">MERN Full‑Stack Developer & DevOps enthusiast</p>

          <p className="text-sm text-white/60 mb-4">
            Hello — I'm Majid. I build reliable, user-friendly web applications using
            the MERN stack (MongoDB, Express, React, Node). I also bring practical
            DevOps experience to streamline deployments, CI/CD pipelines and cloud
            infrastructures. I'm passionate about performant frontends and resilient
            backends that scale.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <h4 className="text-xs text-white/40 uppercase tracking-widest">Core</h4>
              <ul className="mt-2 text-sm text-white/70 list-disc ml-4">
                <li>React / TypeScript</li>
                <li>Node.js / Express</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs text-white/40 uppercase tracking-widest">DevOps</h4>
              <ul className="mt-2 text-sm text-white/70 list-disc ml-4">
                <li>Docker, CI/CD</li>
                <li>AWS basics / deployment</li>
                <li>Monitoring & logging</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3">
            <a href="mailto:majid@example.com" className="btn-primary px-4 py-2 rounded-xl">Email</a>
            <a href="#" className="feature-pill">LinkedIn</a>
            <Link to="/" className="feature-pill">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
