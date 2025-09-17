import { useState, useEffect } from "react";
import x from "./assets/x-min.png";

import {
  FaSearch,
  FaStar,
  FaBrain,
  FaHeart,
  FaFeatherAlt,
  FaFire,
  FaCat,
  FaCar,
  FaHome,
} from "react-icons/fa";
import {
  GiCrystalBall,
  GiMagicSwirl,
  GiSparkles,
  GiButterfly,
  GiDreamCatcher,
  GiStarFormation,
  GiFloatingCrystal,
  GiDeathSkull,
} from "react-icons/gi";
import { RiWaterFlashLine } from "react-icons/ri";
import { IoCloudOutline } from "react-icons/io5";
import { BsStars, BsMoonStars, BsEye } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { dreamInterpretations } from "./components/data";

const ENV = window.__ENV || {};
const title = ENV.TITLE || "Dream Decoder";
const xLink = ENV.X || "https://x.com/new";

const topDreams = [
  {
    symbol: "Teeth falling out",
    meaning: "anxiety or fear of loss",
    icon: GiDeathSkull,
    color: "from-rose-400 via-pink-400 to-purple-400",
  },
  {
    symbol: "Flying",
    meaning: "desire for freedom",
    icon: FaFeatherAlt,
    color: "from-sky-400 via-blue-400 to-indigo-400",
  },
  {
    symbol: "Being chased",
    meaning: "avoiding a problem",
    icon: GiMagicSwirl,
    color: "from-orange-400 via-red-400 to-pink-400",
  },
  {
    symbol: "Falling",
    meaning: "losing control",
    icon: IoCloudOutline,
    color: "from-purple-400 via-violet-400 to-indigo-400",
  },
  {
    symbol: "Water",
    meaning: "emotional cleansing",
    icon: RiWaterFlashLine,
    color: "from-cyan-400 via-blue-400 to-teal-400",
  },
  {
    symbol: "Death",
    meaning: "transformation",
    icon: GiButterfly,
    color: "from-gray-400 via-purple-400 to-violet-400",
  },
  {
    symbol: "Animals",
    meaning: "instinctual behavior",
    icon: FaCat,
    color: "from-emerald-400 via-green-400 to-teal-400",
  },
  {
    symbol: "Houses",
    meaning: "aspects of self",
    icon: FaHome,
    color: "from-amber-400 via-yellow-400 to-orange-400",
  },
  {
    symbol: "Cars",
    meaning: "life direction",
    icon: FaCar,
    color: "from-indigo-400 via-purple-400 to-pink-400",
  },
  {
    symbol: "Fire",
    meaning: "passion or destruction",
    icon: FaFire,
    color: "from-red-400 via-orange-400 to-yellow-400",
  },
];

const FloatingDreamElement = ({
  children,
  delay = 0,
  duration = 8,
  className = "",
}) => (
  <div
    className={`absolute animate-float opacity-20 ${className}`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    }}
  >
    {children}
  </div>
);

const DreamyParticle = ({ delay = 0 }) => (
  <div
    className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-twinkle opacity-60"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
    }}
  />
);

export function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [interpretation, setInterpretation] = useState("");
  const [dreamOfTheDay, setDreamOfTheDay] = useState({
    word: "",
    meaning: "",
    icon: GiCrystalBall,
  });
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const dreamWords = Object.keys(dreamInterpretations);
    const randomWord =
      dreamWords[Math.floor(Math.random() * dreamWords.length)];
    const mysticalIcons = [
      GiCrystalBall,
      GiDreamCatcher,
      BsEye,
      GiSparkles,
      GiButterfly,
      GiMagicSwirl,
      GiFloatingCrystal,
      BsStars,
      HiSparkles,
    ];
    setDreamOfTheDay({
      word: randomWord.charAt(0).toUpperCase() + randomWord.slice(1),
      meaning: dreamInterpretations[randomWord],
      icon: mysticalIcons[Math.floor(Math.random() * mysticalIcons.length)],
    });
  }, []);

  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    setIsSearching(true);
    setShowResult(false);

    setTimeout(() => {
      const lowerSearchTerm = searchTerm.toLowerCase().trim();
      const result = dreamInterpretations[lowerSearchTerm];

      if (result) {
        setInterpretation(result);
      } else {
        setInterpretation(
          `The mystical realm hasn't yet revealed the secrets of "${searchTerm}". Try exploring ancient symbols like snake, water, flying, or house to unlock their ethereal messages from beyond the veil.`
        );
      }
      setIsSearching(false);
      setShowResult(true);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-[100vw] min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 via-violet-950 to-fuchsia-950 relative overflow-hidden">
      {/* Dreamy Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating mystical elements */}
        <FloatingDreamElement
          delay={0}
          duration={12}
          className="top-20 left-1/4"
        >
          <HiSparkles className="text-8xl text-purple-300/30" />
        </FloatingDreamElement>

        <FloatingDreamElement
          delay={3}
          duration={15}
          className="top-1/3 right-1/4"
        >
          <GiMagicSwirl className="text-7xl text-pink-300/25" />
        </FloatingDreamElement>

        <FloatingDreamElement
          delay={6}
          duration={10}
          className="bottom-1/3 left-1/5"
        >
          <BsStars className="text-6xl text-cyan-300/30" />
        </FloatingDreamElement>

        <FloatingDreamElement
          delay={2}
          duration={14}
          className="top-1/2 left-3/4"
        >
          <GiButterfly className="text-8xl text-violet-300/25" />
        </FloatingDreamElement>

        <FloatingDreamElement
          delay={4}
          duration={11}
          className="bottom-1/4 right-1/3"
        >
          <BsMoonStars className="text-6xl text-blue-300/30" />
        </FloatingDreamElement>

        <FloatingDreamElement
          delay={1}
          duration={13}
          className="top-3/4 left-1/2"
        >
          <GiDreamCatcher className="text-7xl text-emerald-300/25" />
        </FloatingDreamElement>

        {/* Dreamy particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <DreamyParticle key={i} delay={i * 0.5} />
          ))}
        </div>

        {/* Constellation pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-white to-purple-200 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Ethereal Header */}
        <header className="text-center mb-14">
          <div className="inline-flex items-center gap-8 mb-12 px-10 py-4 rounded-full bg-white/5 backdrop-blur-3xl border border-white/20 shadow-2xl">
            <div className="relative">
              <BsMoonStars className="h-[40px] w-[40px] text-violet-300 animate-pulse" />
              <div className="absolute inset-0 h-[40px] w-[40px] bg-violet-400/40 rounded-full blur-3xl animate-pulse"></div>
            </div>
            <h1 className="text-5xl font-black bg-gradient-to-r from-violet-200 via-fuchsia-200 via-pink-200 via-cyan-200 to-emerald-200 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
              {title}
            </h1>
            <div className="relative">
              <HiSparkles className="h-[40px] w-[40px] text-pink-300 animate-spin-slow" />
              <div className="absolute inset-0 h-[40px] w-[40px] bg-pink-400/40 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>

          <div className="max-w-[80vw] m-auto space-y-8">
            <h2 className="text-3xl  font-bold text-white drop-shadow-lg">
              What ethereal whispers did your{" "}
              <span className="text-transparent bg-gradient-to-r from-pink-200 via-purple-200 to-violet-200 bg-clip-text animate-pulse">
                dreams
              </span>{" "}
              carry from the astral realm?
            </h2>
            <p className="text-2xl text-purple-200 font-light drop-shadow-md">
              Enter a mystical symbol. Unveil its ancient secrets. Decode your
              soul's cosmic message.
            </p>
          </div>
          <img
            src={x}
            alt="Dream Decoder Logo"
            className="mx-auto mt-5 w-20 h-20 rounded-full shadow-lg"
            onClick={() => window.open(xLink, "_blank")}
          />
        </header>

        {/* Mystical Search Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="relative group">
            <section className="relative bg-black/30 backdrop-blur-3xl border border-white/30 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-12">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="relative flex-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-lg"></div>
                    <div className="relative flex items-center">
                      <FaSearch className="absolute left-6 text-purple-300 h-8 w-8 z-10 animate-pulse" />
                      <input
                        type="text"
                        placeholder="What mystical symbol danced through your dreams tonight?"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="relative w-full pl-16 pr-8 py-6 bg-white/10 border-white/40 text-white text-2xl placeholder:text-purple-300/70 rounded-3xl focus:bg-white/15 focus:border-purple-300/60 transition-all duration-700 shadow-inner backdrop-blur-2xl"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleSearch}
                    disabled={isSearching || !searchTerm.trim()}
                    className="px-12 py-6 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 hover:from-violet-400 hover:via-fuchsia-400 hover:to-pink-400 text-white font-bold text-xl rounded-3xl transition-all duration-700 transform hover:scale-105 disabled:opacity-50 disabled:transform-none shadow-2xl"
                  >
                    {isSearching ? (
                      <div className="flex items-center gap-4">
                        <GiMagicSwirl className="w-8 h-8 animate-spin" />
                        Channeling Ancient Wisdom...
                      </div>
                    ) : (
                      <div className="flex items-center gap-4">
                        <GiCrystalBall className="h-8 w-8 animate-pulse" />
                        Decode Mystical Vision
                      </div>
                    )}
                  </button>
                </div>

                {showResult && interpretation && (
                  <div className="mt-12">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
                      <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-3xl border border-white/40 rounded-3xl p-10 shadow-2xl">
                        <div className="flex items-start gap-8">
                          <div className="p-6 bg-gradient-to-br from-violet-400 to-fuchsia-400 rounded-full shadow-2xl">
                            <BsEye className="h-12 w-12 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                              <HiSparkles className="h-8 w-8 text-pink-300 animate-pulse" />
                              Mystical Revelation from the Cosmos
                            </h3>
                            <p className="text-purple-100 text-2xl leading-relaxed font-light">
                              {interpretation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>

        {/* Dreamy Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Dream of the Day - Mystical section */}
          <div className="lg:col-span-1">
            <div className="relative group h-full">
              <section className="relative h-full bg-black/30 backdrop-blur-3xl border border-white/30 rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-10 h-full flex flex-col">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="p-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full shadow-2xl">
                      <FaStar className="h-10 w-10 text-white animate-pulse" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      Celestial Vision of the Day
                    </h3>
                  </div>
                  <div className="flex-1 flex flex-col justify-center text-center">
                    <div className="mb-8 relative">
                      <dreamOfTheDay.icon className="text-9xl text-yellow-300 mx-auto animate-pulse" />
                      <div className="absolute inset-0 blur-3xl opacity-60">
                        <dreamOfTheDay.icon className="text-9xl text-yellow-400 mx-auto" />
                      </div>
                    </div>
                    <h4 className="text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 bg-clip-text mb-8 drop-shadow-lg animate-pulse">
                      {dreamOfTheDay.word}
                    </h4>
                    <p className="text-purple-100 text-xl leading-relaxed font-light">
                      {dreamOfTheDay.meaning}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Top Dreams - Constellation Grid */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <section className="relative bg-black/30 backdrop-blur-3xl border border-white/30 rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-10">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="p-6 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full shadow-2xl">
                      <FaBrain className="h-10 w-10 text-white animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-white flex items-center gap-3">
                        <GiStarFormation className="h-10 w-10 text-cyan-300 animate-pulse" />
                        Celestial Dream Constellation
                      </h3>
                      <p className="text-purple-200 text-xl">
                        The most mystical symbols from the ethereal realm
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {topDreams.map((dream, index) => {
                      const IconComponent = dream.icon;
                      return (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-3xl border border-white/30 p-8 hover:scale-105 hover:bg-white/20 transition-all duration-700 cursor-pointer shadow-2xl"
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${dream.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
                          ></div>
                          <div className="relative flex items-center gap-6">
                            <div className="flex-shrink-0">
                              <div className="relative">
                                <IconComponent className="text-5xl text-purple-200 group-hover:text-white transition-colors duration-500 animate-pulse" />
                                <div className="absolute inset-0 blur-2xl opacity-60">
                                  <IconComponent
                                    className={`text-5xl bg-gradient-to-r ${dream.color} bg-clip-text text-transparent`}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-3 mb-3">
                                <span className="text-sm font-bold text-purple-300 bg-white/20 px-4 py-2 rounded-full border border-white/30">
                                  #{index + 1}
                                </span>
                                <HiSparkles className="h-4 w-4 text-pink-300 animate-pulse" />
                              </div>
                              <h4 className="font-bold text-white text-lg mb-3 group-hover:text-purple-100 transition-colors duration-500">
                                {dream.symbol}
                              </h4>
                              <p className="text-purple-200 text-base font-light group-hover:text-purple-100 transition-colors duration-500">
                                {dream.meaning}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Ethereal Footer */}
        <footer className="text-center mt-32">
          <div className="inline-flex items-center gap-4 px-10 py-6 bg-white/10 backdrop-blur-3xl border border-white/30 rounded-full shadow-2xl">
            <FaHeart className="h-6 w-6 text-pink-300 animate-pulse" />
            <p className="text-base text-purple-200 font-light">
              These mystical interpretations are ancient whispers from the
              cosmic consciousness, meant to illuminate your sacred journey of
              self-discovery through the infinite realms of dreams.
            </p>
            <HiSparkles className="h-6 w-6 text-cyan-300 animate-pulse" />
          </div>
        </footer>
      </div>
    </div>
  );
}
