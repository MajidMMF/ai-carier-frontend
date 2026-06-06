import { useRef, useState } from "react";
import type { Analysis } from "../types";
import {
  downloadReport,
  prioBg,
  prioColor,
  scoreBar,
  scoreColor,
  toBase64,
} from "../utils";
import axios from "axios";
import { server } from "../main";
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  Loader2,
  Sparkles,
  Upload,
} from "lucide-react";
import { ScoreRing } from "../ring";

const AnalysePage = () => {
  const [result, setResult] = useState<Analysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    if (file.type !== "application/pdf")
      return setError("Please upload a pdf file.");
    if (file.size > 5 * 1024 * 1024)
      return setError("File size should be less than 5MB.");

    setError("");
    setLoading(true);
    setResult(null);
    try {
      const pdfBase64 = await toBase64(file);
      const { data } = await axios.post(
        `${server}/api/ai/analyse`,
        { pdfBase64 },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setResult(data);
    } catch (error: any) {
      setError(
        error?.response?.data?.message || "Analysis Failed. Please try again"
      );
    } finally {
      setLoading(false);
    }
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  };
  const scoreLabel =
    result && result.atsScore >= 80
      ? "Strong ATS fit"
      : result && result.atsScore >= 60
      ? "Needs a little polish"
      : "Needs improvement";

  return (
    <div className="bg-page min-h-screen pt-24 px-4 md:px-8 pb-14">
      <div className="max-w-6xl mx-auto flex flex-col gap-5 animate-slide-up">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <span className="feature-pill w-fit">
              <Sparkles size={12} className="text-emerald-400" />
              ATS Resume Analyser
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">
              Resume <span className="text-gradient">health check</span>
            </h1>
            <p className="max-w-2xl text-sm md:text-base text-white/42 leading-relaxed">
              Upload a PDF resume and get a clean ATS score, section feedback,
              strengths, and prioritized fixes.
            </p>
          </div>

          {result && !loading && (
            <button
              onClick={() => downloadReport(result)}
              className="btn-primary flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
            >
              <Download size={16} /> Download Report
            </button>
          )}
        </div>

        <div
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => fileRef.current?.click()}
          className="glass-card border-dashed border-white/15 p-5 md:p-6 cursor-pointer hover:border-indigo-500/45 hover:bg-white/[0.055] transition-all duration-300 group"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              <Upload size={30} className="text-indigo-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-white/85">
                {result ? "Analyse another resume" : "Drop your resume here"}
              </p>
              <p className="text-white/35 text-sm mt-1">
                or click to browse • PDF only • max 5MB
              </p>
            </div>
            <div className="feature-pill sm:ml-auto">
              <FileText size={12} className="text-indigo-300" />
              PDF upload
            </div>
          </div>
          {error && (
            <p className="mt-4 text-red-300 text-sm flex items-center gap-1.5 rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-2">
              <AlertCircle size={14} /> {error}
            </p>
          )}
        </div>

        <input
          type="file"
          ref={fileRef}
          accept=".pdf"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleFile(f);
            e.target.value = "";
          }}
        />

        {loading && (
          <div className="glass-card flex flex-col items-center justify-center py-16 md:py-20 gap-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl" />
              <Loader2 size={38} className="relative text-indigo-400 animate-spin" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-white/75">
                Analysing your resume...
              </p>
              <p className="text-white/35 text-sm mt-1">
                Building score breakdown and suggestions.
              </p>
            </div>
          </div>
        )}

        {result && !loading && (
          <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] gap-5">
            <div className="glass-card p-6 md:p-7 flex flex-col gap-6">
              <div className="flex items-center gap-5">
                <div className="relative flex items-center justify-center shrink-0">
                  <ScoreRing score={result.atsScore} />
                  <div className="absolute flex flex-col items-center">
                    <span
                      className={`text-3xl font-black ${scoreColor(
                        result.atsScore
                      )}`}
                    >
                      {result.atsScore}
                    </span>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest">
                      ATS
                    </span>
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="feature-pill w-fit mb-3">{scoreLabel}</p>
                  <h2 className="text-xl font-bold">Overall Score</h2>
                  <p className="text-white/42 text-sm leading-relaxed mt-2">
                    {result.summary}
                  </p>
                </div>
              </div>

              <div className="divider-subtle" />

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-white/8 bg-white/[0.035] p-3">
                  <p className={`text-lg font-black ${scoreColor(result.atsScore)}`}>
                    {result.atsScore}
                  </p>
                  <p className="text-[11px] text-white/35 mt-0.5">Score</p>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/[0.035] p-3">
                  <p className="text-lg font-black text-emerald-400">
                    {result.strengths.length}
                  </p>
                  <p className="text-[11px] text-white/35 mt-0.5">Strengths</p>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/[0.035] p-3">
                  <p className="text-lg font-black text-indigo-300">
                    {result.suggestions.length}
                  </p>
                  <p className="text-[11px] text-white/35 mt-0.5">Fixes</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="glass-card p-6 md:p-7 flex flex-col gap-5">
                <p className="text-xs text-white/30 uppercase tracking-widest">
                  Score Breakdown
                </p>
                {Object.entries(result.scoreBreakdown).map(([key, val]) => (
                  <div
                    className="rounded-xl border border-white/8 bg-white/[0.025] p-4"
                    key={key}
                  >
                    <div className="flex justify-between gap-3 text-sm">
                      <span className="text-white/70 capitalize font-medium">
                        {key}
                      </span>
                      <span
                        className={`font-semibold ${scoreColor(val.score)}`}
                      >
                        {val.score}/100
                      </span>
                    </div>
                    <div className="mt-3 h-2.5 bg-white/8 rounded-full overflow-hidden ring-1 ring-white/5">
                      <div
                        className={`h-full bg-gradient-to-r ${scoreBar(
                          val.score
                        )} rounded-full transition-all duration-700 shadow-[0_0_18px_rgba(99,102,241,0.35)]`}
                        style={{ width: `${val.score}%` }}
                      />
                    </div>
                    <p className="text-xs text-white/38 leading-relaxed mt-2">
                      {val.feedback}
                    </p>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6 md:p-7 flex flex-col gap-3">
                <p className="text-xs text-white/30 uppercase tracking-widest">
                  Strengths
                </p>
                {result.strengths.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-emerald-500/12 bg-emerald-500/[0.055] px-4 py-3 text-sm text-white/68"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-emerald-400 shrink-0 mt-0.5"
                    />{" "}
                    {s}
                  </div>
                ))}
              </div>

              <div className="glass-card p-6 md:p-7 flex flex-col gap-4">
                <p className="text-xs text-white/30 uppercase tracking-widest">
                  Suggestions
                </p>
                {result.suggestions.map((s, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border flex flex-col gap-3 ${
                      prioBg[s.priority]
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-white/80">
                        {s.category}
                      </span>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-widest ${
                          prioColor[s.priority]
                        }`}
                      >
                        {s.priority}
                      </span>
                    </div>
                    <p className="text-sm text-white/52 leading-relaxed">
                      {s.issue}
                    </p>
                    <div className="flex items-start gap-2 text-sm text-white/72 leading-relaxed">
                      <ChevronRight
                        size={16}
                        className="shrink-0 mt-0.5 text-indigo-400"
                      />
                      {s.recommendation}
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => downloadReport(result)}
                  className="btn-primary flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold md:hidden"
                >
                  <Download size={16} /> Download Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalysePage;
