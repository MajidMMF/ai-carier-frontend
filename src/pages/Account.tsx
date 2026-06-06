import { Calendar, Crown, LogOut, Mail, Zap } from "lucide-react";
import { useAppData } from "../context/AppContext";
import { HashLink } from "react-router-hash-link";

const Account = () => {
  const { user, LogoutUser } = useAppData();

  const isPro = user?.subscription && new Date() < new Date(user.subscription);
  const freeRequestsLimit = 3;
  const reportedFreeRequestsUsed = Math.max(
    user?.freeRequestsUsed ?? 0,
    user?.freeReqestsUsed ?? 0
  );
  const freeRequestsUsed = Math.min(
    freeRequestsLimit,
    Math.max(0, reportedFreeRequestsUsed)
  );
  const freeLeft = Math.max(0, freeRequestsLimit - freeRequestsUsed);
  const progressPercent = (freeRequestsUsed / freeRequestsLimit) * 100;
  const profileImage = user?.image?.trim() || "/user.png";

  return (
    <div className="bg-page flex items-start justify-center px-4 pt-28 pb-12">
      <div className="w-full max-w-2xl flex flex-col gap-5 animate-slide-up">
        <div className="glass-card p-6 flex flex-col gap-5 sm:flex-row sm:items-center">
          <img
            src={profileImage}
            alt={user?.name || "User"}
            referrerPolicy="no-referrer"
            onError={(event) => {
              event.currentTarget.src = "/user.png";
            }}
            className="w-20 h-20 rounded-2xl object-cover ring-2 ring-white/10 shadow-2xl shadow-indigo-950/50"
          />

          <div className="flex-1 min-w-0 space-y-1">
            <p className="feature-pill w-fit">Account</p>
            <h2 className="font-bold text-2xl truncate">{user?.name}</h2>
            <p className="text-white/45 text-sm flex items-center gap-1.5 truncate">
              <Mail size={12} /> {user?.email}
            </p>
          </div>
          <button
            className="feature-pill gap-2 text-red-300 border-red-500/25 hover:bg-red-500/10 hover:text-red-200 transition-colors cursor-pointer self-start sm:self-center"
            onClick={LogoutUser}
          >
            <LogOut size={12} /> Sign out
          </button>
        </div>

        <div
          className={`glass-card p-6 flex flex-col gap-4 sm:flex-row sm:items-center ${
            isPro ? "border-emerald-500/25" : "border-white/8"
          }`}
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              isPro ? "bg-emerald-500/15" : "bg-white/5"
            }`}
          >
            {isPro ? (
              <Crown size={20} className="text-emerald-400" />
            ) : (
              <Zap size={20} className="text-white/40" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-lg">{isPro ? "Pro Plan" : "Free Plan"}</p>
            {isPro ? (
              <p className="text-white/40 text-sm flex items-center gap-1.5 mt-0.5">
                <Calendar size={12} /> Expires{" "}
                {new Date(user!.subscription!).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            ) : (
              <p className="text-white/40 text-sm mt-0.5">
                {freeLeft} of {freeRequestsLimit} free requests remaining
              </p>
            )}
          </div>
          {!isPro && (
            <HashLink
              to={"/#pricing"}
              className="btn-primary text-xs font-semibold px-4 py-2 rounded-lg whitespace-nowrap"
            >
              Upgrade
            </HashLink>
          )}
        </div>

        {!isPro && (
          <div className="glass-card p-6 flex flex-col gap-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-white/50">Free requests used</p>
                <h3 className="text-2xl font-bold mt-1">
                  <span className="text-gradient">{freeRequestsUsed}</span>
                  <span className="text-white/35">/{freeRequestsLimit}</span>
                </h3>
              </div>
              <span className="feature-pill shrink-0">
                {Math.round(progressPercent)}%
              </span>
            </div>

            <div className="relative w-full h-4 bg-white/8 rounded-full overflow-hidden ring-1 ring-white/10">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-400 rounded-full shadow-[0_0_24px_rgba(99,102,241,0.45)] transition-all duration-700 ease-out"
                style={{
                  width: `${progressPercent}%`,
                }}
              />
            </div>
            {freeLeft === 0 ? (
              <p className="text-xs text-amber-300/90">
                You have used all free requests. Upgrade to continue.
              </p>
            ) : (
              <p className="text-xs text-white/40">
                Your free usage fills this bar as each request is used.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
