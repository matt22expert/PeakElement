import React, { useState, useEffect, useMemo } from "react";
import { Trophy, Medal, Search, X, ChevronRight, Sparkles, Atom, Users, Vote, Crown } from "lucide-react";
import { ELEMENTS } from "./data/elements";
import {
  getOrCreateVoterId,
  castVote,
  fetchAllVotes,
  fetchRemainingVotes,
  fetchMyVotesGiven,
  fetchVoterCount,
} from "./lib/supabase";

const CATS: Record<
  string,
  { label: string; from: string; to: string; text: string }
> = {
  alkali:      { label: "Métal alcalin",          from: "#ff5f6d", to: "#ff9a6c", text: "#2a0a05" },
  alkaline:    { label: "Métal alcalino-terreux",  from: "#ffa751", to: "#ffd76c", text: "#2a1600" },
  transition:  { label: "Métal de transition",     from: "#4facfe", to: "#7ee8fa", text: "#001b2a" },
  poor:        { label: "Métal pauvre",            from: "#43e695", to: "#8fe9c2", text: "#00291a" },
  metalloid:   { label: "Métalloïde",              from: "#a78bfa", to: "#d1b3ff", text: "#1c0a33" },
  nonmetal:    { label: "Non-métal",                from: "#34d399", to: "#6ee7b7", text: "#00291a" },
  halogen:     { label: "Halogène",                from: "#fde047", to: "#fff59d", text: "#332b00" },
  noble:       { label: "Gaz noble",               from: "#22d3ee", to: "#a5f3fc", text: "#00232a" },
  lanthanide:  { label: "Lanthanide",              from: "#f472b6", to: "#fbcfe8", text: "#330018" },
  actinide:    { label: "Actinide",                from: "#e879f9", to: "#f5c2fb", text: "#2d0033" },
};

function catStyle(cat: string) {
  const c = CATS[cat] || CATS.poor;
  return {
    background: `linear-gradient(135deg, ${c.from}, ${c.to})`,
    color: c.text,
  };
}

function useVotingData() {
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [remaining, setRemaining] = useState(3);
  const [given, setGiven] = useState<Record<string, number>>({});
  const [voterCount, setVoterCount] = useState(0);
  const [ready, setReady] = useState(false);
  const [voterId, setVoterId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const id = await getOrCreateVoterId();
        setVoterId(id);
        const [allVotes, myRemaining, myGiven, count] = await Promise.all([
          fetchAllVotes(),
          fetchRemainingVotes(id),
          fetchMyVotesGiven(id),
          fetchVoterCount(),
        ]);
        setVotes(allVotes);
        setRemaining(myRemaining);
        setGiven(myGiven);
        setVoterCount(count);
      } catch (e) {
        console.error(e);
      } finally {
        setReady(true);
      }
    })();
  }, []);

  async function vote(symbol: string) {
    if (!voterId || remaining <= 0) return false;
    try {
      const result = await castVote(voterId, symbol);
      setVotes((prev) => ({ ...prev, [symbol]: result.new_vote_count }));
      setGiven((prev) => ({ ...prev, [symbol]: (prev[symbol] || 0) + 1 }));
      setRemaining(result.remaining);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  return { votes, remaining, given, voterCount, ready, vote };
}

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <span className="text-3xl">🥇</span>;
  if (rank === 2) return <span className="text-3xl">🥈</span>;
  if (rank === 3) return <span className="text-3xl">🥉</span>;
  return <span className="font-display text-lg text-slate-400">#{rank}</span>;
}

export default function App() {
  const { votes, remaining, given, voterCount, ready, vote } = useVotingData();
  const [selected, setSelected] = useState(null);
  const [showFull, setShowFull] = useState(false);
  const [search, setSearch] = useState("");
  const [justVoted, setJustVoted] = useState(null);
  const [toast, setToast] = useState("");

  const ranked = useMemo(() => {
    return [...ELEMENTS]
      .map((e) => ({ ...e, votes: votes[e.symbol] || 0 }))
      .sort((a, b) => b.votes - a.votes || a.z - b.z);
  }, [votes]);

  const top10 = ranked.slice(0, 10);
  const totalVotes = useMemo(
    () => Object.values(votes).reduce((a, b) => a + b, 0),
    [votes]
  );
  const leader = ranked[0];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return ranked;
    return ranked.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        e.symbol.toLowerCase().includes(q) ||
        String(e.z).includes(q)
    );
  }, [ranked, search]);

  const mainBlock = ELEMENTS.filter((e) => e.period <= 7);
  const fBlock = ELEMENTS.filter((e) => e.period >= 9);

  async function handleVote(symbol: string) {
    if (remaining <= 0) {
      setToast("Vous avez utilisé vos 3 votes !");
      setTimeout(() => setToast(""), 2200);
      return;
    }
    const ok = await vote(symbol);
    if (ok) {
      setJustVoted(symbol);
      setTimeout(() => setJustVoted(null), 900);
    }
  }

  return (
    <div className="min-h-screen bg-[#070912] text-slate-100 font-body relative overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;800;900&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');
        .font-display { font-family: 'Orbitron', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        @keyframes floatGlow { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes pulseGlow { 0%,100% { box-shadow: 0 0 25px 2px rgba(34,211,238,0.25); } 50% { box-shadow: 0 0 45px 8px rgba(34,211,238,0.45); } }
        @keyframes popVote { 0% { transform: scale(1); } 40% { transform: scale(1.15); } 100% { transform: scale(1); } }
        .animate-float { animation: floatGlow 4s ease-in-out infinite; }
        .animate-pulseGlow { animation: pulseGlow 2.4s ease-in-out infinite; }
        .animate-pop { animation: popVote 0.5s ease; }
        .scrollbar-thin::-webkit-scrollbar { height: 8px; width: 8px; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: #22d3ee55; border-radius: 8px; }
        .bg-grid { background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0); background-size: 26px 26px; }
      `}</style>

      {/* Background ambience */}
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none fixed -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none fixed top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

      {/* Top nav */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-[#070912]/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Atom className="text-cyan-400" size={22} />
            <span className="font-display text-sm sm:text-base tracking-wide">
              MEILLEUR ÉLÉMENT
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFull(true)}
              className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 transition font-medium"
            >
              Classement complet
            </button>
            <div
              className={`font-mono text-xs sm:text-sm px-3 py-1.5 rounded-full border ${
                remaining > 0
                  ? "border-emerald-400/40 text-emerald-300 bg-emerald-400/5"
                  : "border-rose-400/40 text-rose-300 bg-rose-400/5"
              }`}
            >
              {ready ? `${remaining} vote${remaining !== 1 ? "s" : ""} restant${remaining !== 1 ? "s" : ""}` : "…"}
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-4 pt-14 pb-10 text-center">
        <div className="inline-flex items-center gap-2 text-cyan-300 text-xs font-semibold tracking-[0.2em] uppercase mb-4 border border-cyan-400/30 rounded-full px-4 py-1.5 bg-cyan-400/5">
          <Sparkles size={14} /> Le vote scientifique le plus disputé du web
        </div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black leading-[1.05] bg-gradient-to-b from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.25)]">
          VOTEZ POUR<br />LE MEILLEUR ÉLÉMENT
        </h1>
        <p className="mt-5 text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
          118 éléments. 3 votes chacun. Un seul champion. Choisissez votre élément
          préféré dans le tableau périodique et faites-le grimper au sommet.
        </p>
      </section>

      {/* TOP 10 */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="flex items-center justify-between mb-1">
          <h2 className="font-display text-2xl sm:text-3xl font-bold flex items-center gap-2">
            <Trophy className="text-amber-400" /> LE TOP 10
          </h2>
          <button
            onClick={() => setShowFull(true)}
            className="hidden sm:flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200 font-medium"
          >
            Classement des 118 <ChevronRight size={16} />
          </button>
        </div>
        <p className="text-slate-500 text-sm mb-6">Les éléments les plus populaires du moment</p>

        {/* Podium top 3 */}
        <div
          onClick={() => setShowFull(true)}
          className="cursor-pointer grid grid-cols-3 gap-3 sm:gap-5 items-end mb-5"
        >
          {[top10[1], top10[0], top10[2]].map((el, idx) => {
            if (!el) return <div key={idx} />;
            const rank = idx === 0 ? 2 : idx === 1 ? 1 : 3;
            const heights = rank === 1 ? "py-8 sm:py-12" : rank === 2 ? "py-5 sm:py-8" : "py-3 sm:py-6";
            const ring = rank === 1 ? "ring-2 ring-amber-400/60 animate-pulseGlow" : "ring-1 ring-white/10";
            const order = rank === 1 ? "order-2" : rank === 2 ? "order-1" : "order-3";
            return (
              <div
                key={el.symbol}
                className={`${order} ${ring} ${heights} rounded-2xl relative flex flex-col items-center justify-end text-center px-2 sm:px-4 ${rank===1 ? "animate-float" : ""}`}
                style={catStyle(el.category)}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(el);
                }}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <RankBadge rank={rank} />
                </div>
                <div className="font-display text-2xl sm:text-4xl font-black mt-4">{el.symbol}</div>
                <div className="text-[10px] sm:text-xs font-semibold opacity-80 mt-1 line-clamp-1">{el.name}</div>
                <div className="font-mono text-xs sm:text-sm font-bold mt-2 bg-black/20 rounded-full px-2 py-0.5">
                  {el.votes} vote{el.votes !== 1 ? "s" : ""}
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-10 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {top10.slice(3, 10).map((el, i) => (
            <button
              key={el.symbol}
              onClick={() => setSelected(el)}
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-left transition group"
            >
              <span className="font-display text-slate-500 w-8 text-lg">#{i + 4}</span>
              <span
                className="font-display font-bold text-lg w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={catStyle(el.category)}
              >
                {el.symbol}
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-semibold truncate">{el.name}</span>
                <span className="block text-xs text-slate-500">{el.categoryLabel}</span>
              </span>
              <span className="font-mono text-sm text-cyan-300 shrink-0">{el.votes}</span>
            </button>
          ))}
        </div>

        <button
          onClick={() => setShowFull(true)}
          className="sm:hidden mt-4 w-full flex items-center justify-center gap-1 text-sm text-cyan-300 border border-cyan-400/30 rounded-full py-2 font-medium"
        >
          Voir le classement des 118 <ChevronRight size={16} />
        </button>
      </section>

      {/* PERIODIC TABLE */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-1">🧪 LE TABLEAU PÉRIODIQUE</h2>
        <p className="text-slate-500 text-sm mb-6">
          Cliquez sur un élément pour voir ses détails et voter
        </p>

        <div className="overflow-x-auto scrollbar-thin pb-3">
          <div className="min-w-[820px]">
            <div
              className="grid gap-1"
              style={{ gridTemplateColumns: "repeat(18, minmax(42px, 1fr))" }}
            >
              {mainBlock.map((el) => (
                <ElementCell key={el.symbol} el={el} votes={votes[el.symbol] || 0} onClick={() => setSelected(el)} />
              ))}
            </div>
            <div
              className="grid gap-1 mt-3"
              style={{ gridTemplateColumns: "repeat(18, minmax(42px, 1fr))" }}
            >
              {fBlock.map((el) => (
                <ElementCell
                  key={el.symbol}
                  el={el}
                  votes={votes[el.symbol] || 0}
                  onClick={() => setSelected(el)}
                  gridRow={el.period === 9 ? 1 : 2}
                />
              ))}
            </div>
          </div>
        </div>

        {/* legend */}
        <div className="flex flex-wrap gap-2 mt-6">
          {Object.entries(CATS).map(([key, c]) => (
            <span
              key={key}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full"
              style={{ background: `linear-gradient(135deg, ${c.from}, ${c.to})`, color: c.text }}
            >
              {c.label}
            </span>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">📊 STATISTIQUES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard icon={<Vote size={20} />} label="Total des votes" value={totalVotes} accent="from-cyan-400 to-blue-500" />
          <StatCard icon={<Users size={20} />} label="Votants" value={voterCount} accent="from-emerald-400 to-teal-500" />
          <StatCard
            icon={<Crown size={20} />}
            label="Élément #1"
            value={leader && leader.votes > 0 ? `${leader.symbol} · ${leader.name}` : "—"}
            accent="from-amber-400 to-orange-500"
            small
          />
          <StatCard icon={<Trophy size={20} />} label="Votes du #1" value={leader ? leader.votes : 0} accent="from-fuchsia-400 to-pink-500" />
        </div>
      </section>

      {/* INSTRUCTIONS */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">🗳️ COMMENT VOTER ?</h2>
          <p className="text-slate-300 max-w-2xl leading-relaxed">
            Chaque personne dispose de <strong className="text-cyan-300">3 votes</strong>. Vous
            pouvez les utiliser comme vous le souhaitez : donnez vos 3 votes au même
            élément, ou répartissez-les entre plusieurs éléments. Cliquez simplement sur
            un élément dans le tableau périodique, puis appuyez sur « Voter pour cet
            élément ». À vous de décider quel est le meilleur élément du monde !
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <ExampleCard
              lines={["3️⃣ → 🟦 Carbone"]}
              text="3 votes pour le carbone"
            />
            <ExampleCard
              lines={["2️⃣ → 🟦 Oxygène", "1️⃣ → 🟨 Or"]}
              text="2 votes pour l'oxygène + 1 vote pour l'or"
            />
            <ExampleCard
              lines={["1️⃣ → 🟦 Carbone", "1️⃣ → 🟥 Fer", "1️⃣ → 🟨 Or"]}
              text="1 vote pour chacun"
            />
          </div>
        </div>
        <p className="text-center text-slate-600 text-xs mt-8">
          Fait avec ⚛️ — les votes sont partagés entre tous les visiteurs.
        </p>
      </section>

      {/* ELEMENT MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0c0f1d] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 text-center relative" style={catStyle(selected.category)}>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 flex items-center justify-center hover:bg-black/30"
              >
                <X size={16} />
              </button>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">
                N°{selected.z} · {selected.categoryLabel}
              </div>
              <div className="font-display text-7xl font-black my-2">{selected.symbol}</div>
              <div className="text-xl font-bold">{selected.name}</div>
            </div>
            <div className="p-6 space-y-5">
              <p className="text-slate-300 text-sm leading-relaxed">{selected.description}</p>

              <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                <span className="text-sm text-slate-400">Votes actuels</span>
                <span className={`font-mono font-bold text-lg text-cyan-300 ${justVoted === selected.symbol ? "animate-pop" : ""}`}>
                  {votes[selected.symbol] || 0}
                </span>
              </div>

              <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                <span className="text-sm text-slate-400">Vos votes pour cet élément</span>
                <span className="font-mono font-bold text-lg">{given[selected.symbol] || 0}</span>
              </div>

              <button
                onClick={() => handleVote(selected.symbol)}
                disabled={remaining <= 0}
                className={`w-full py-4 rounded-2xl font-display font-bold text-base tracking-wide transition ${
                  remaining <= 0
                    ? "bg-white/5 text-slate-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-400 to-blue-500 text-[#04121a] hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                }`}
              >
                {remaining <= 0 ? "VOUS AVEZ UTILISÉ VOS 3 VOTES" : "VOTER POUR CET ÉLÉMENT"}
              </button>
              <div className="text-center text-xs text-slate-500">
                Il vous reste {remaining} vote{remaining !== 1 ? "s" : ""}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FULL RANKING */}
      {showFull && (
        <div className="fixed inset-0 z-50 bg-[#070912] flex flex-col">
          <div className="sticky top-0 backdrop-blur-md bg-[#070912]/90 border-b border-white/10 p-4">
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <button
                onClick={() => setShowFull(false)}
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 shrink-0"
              >
                <X size={18} />
              </button>
              <div className="flex-1">
                <h2 className="font-display font-bold text-lg">CLASSEMENT COMPLET</h2>
                <p className="text-xs text-slate-500">118 éléments</p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto mt-3 relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher un élément…"
                className="w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-cyan-400/50"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto scrollbar-thin">
            <div className="max-w-3xl mx-auto px-4 py-4 space-y-2">
              {filtered.map((el) => {
                const rank = ranked.findIndex((r) => r.symbol === el.symbol) + 1;
                return (
                  <button
                    key={el.symbol}
                    onClick={() => {
                      setSelected(el);
                    }}
                    className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                      rank <= 10 ? "bg-cyan-400/10 border border-cyan-400/20" : "bg-white/5 border border-transparent hover:bg-white/10"
                    }`}
                  >
                    <span className="font-mono text-sm text-slate-500 w-10 shrink-0">#{rank}</span>
                    <span
                      className="font-display font-bold w-10 h-10 rounded-lg flex items-center justify-center text-sm shrink-0"
                      style={catStyle(el.category)}
                    >
                      {el.symbol}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-semibold text-sm truncate">{el.name}</span>
                      <span className="block text-[11px] text-slate-500">{el.categoryLabel}</span>
                    </span>
                    {rank <= 10 && <span className="text-xs">🏆</span>}
                    <span className="font-mono text-sm text-cyan-300 shrink-0">{el.votes}</span>
                  </button>
                );
              })}
              {filtered.length === 0 && (
                <p className="text-center text-slate-500 text-sm py-10">Aucun élément trouvé.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] bg-rose-500/90 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
}

function ElementCell({
  el,
  votes,
  onClick,
  gridRow,
}: {
  el: import("./data/elements").ChemElement;
  votes: number;
  onClick: () => void;
  gridRow?: number;
}) {
  const style = {
    gridColumn: el.group,
    ...(gridRow ? { gridRow } : {}),
    ...catStyle(el.category),
  };
  return (
    <button
      onClick={onClick}
      style={style}
      className="relative rounded-md aspect-square flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.15] hover:z-10 hover:shadow-lg"
      title={el.name}
    >
      <span className="text-[7px] sm:text-[8px] font-mono font-semibold opacity-70 absolute top-0.5 left-1">
        {el.z}
      </span>
      <span className="font-display font-black text-[11px] sm:text-sm leading-none">{el.symbol}</span>
      {votes > 0 && (
        <span className="text-[6px] sm:text-[8px] font-mono font-bold opacity-80 absolute bottom-0.5">
          {votes}
        </span>
      )}
    </button>
  );
}

function StatCard({
  icon,
  label,
  value,
  accent,
  small,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  accent: string;
  small?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
      <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center mb-3 text-[#04121a]`}>
        {icon}
      </div>
      <div className={`font-display font-black ${small ? "text-base sm:text-lg" : "text-2xl sm:text-3xl"} truncate`}>
        {value}
      </div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  );
}

function ExampleCard({ lines, text }: { lines: string[]; text: string }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
      <div className="space-y-1 font-mono text-sm mb-2">
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
      <p className="text-xs text-slate-400">{text}</p>
    </div>
  );
}
