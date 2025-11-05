'use client';

import { useState } from 'react';

const birds = [
  {
    id: 1,
    name: 'Blue Jay',
    scientific: 'Cyanocitta cristata',
    description: 'A vibrant blue bird known for its intelligence and complex social systems.',
    habitat: 'Forests and suburban areas',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 2,
    name: 'Cardinal',
    scientific: 'Cardinalis cardinalis',
    description: 'A stunning red bird that brings color to gardens year-round.',
    habitat: 'Woodlands and gardens',
    color: 'from-red-400 to-red-600',
  },
  {
    id: 3,
    name: 'Hummingbird',
    scientific: 'Trochilidae',
    description: 'The smallest birds capable of hovering in mid-air by rapidly flapping their wings.',
    habitat: 'Gardens with flowers',
    color: 'from-emerald-400 to-green-600',
  },
  {
    id: 4,
    name: 'American Robin',
    scientific: 'Turdus migratorius',
    description: 'A migratory songbird with a distinctive orange breast.',
    habitat: 'Lawns and gardens',
    color: 'from-orange-400 to-orange-600',
  },
  {
    id: 5,
    name: 'Bald Eagle',
    scientific: 'Haliaeetus leucocephalus',
    description: 'A majestic bird of prey and the national bird of the United States.',
    habitat: 'Near large bodies of water',
    color: 'from-gray-600 to-gray-800',
  },
  {
    id: 6,
    name: 'Peacock',
    scientific: 'Pavo cristatus',
    description: 'Famous for their iridescent tail feathers displayed in courtship.',
    habitat: 'Forests and farmlands',
    color: 'from-teal-400 to-cyan-600',
  },
];

export default function Home() {
  const [selectedBird, setSelectedBird] = useState(birds[0]);

  return (
    <div className="min-h-screen p-4 sm:p-8">
      {/* Floating particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 drop-shadow-lg animate-fade-in">
            🦅 Birds
          </h1>
          <p className="text-xl sm:text-2xl glass rounded-full px-6 py-3 inline-block">
            Discover the Beauty of Nature
          </p>
        </header>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Bird Card */}
          <div className="glass-strong rounded-3xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-[1.02]">
            <div className={`bg-gradient-to-br ${selectedBird.color} rounded-2xl h-64 mb-6 flex items-center justify-center text-8xl shadow-lg`}>
              🐦
            </div>
            <h2 className="text-4xl font-bold mb-2">{selectedBird.name}</h2>
            <p className="text-lg text-white/80 italic mb-4">{selectedBird.scientific}</p>
            <p className="text-lg mb-4 leading-relaxed">{selectedBird.description}</p>
            <div className="glass rounded-xl p-4">
              <p className="text-sm font-semibold">Habitat</p>
              <p className="text-white/90">{selectedBird.habitat}</p>
            </div>
          </div>

          {/* Bird Selection Grid */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Explore Species</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {birds.map((bird) => (
                <button
                  key={bird.id}
                  onClick={() => setSelectedBird(bird)}
                  className={`glass rounded-2xl p-6 text-left transition-all duration-300 transform hover:scale-105 hover:glass-strong ${
                    selectedBird.id === bird.id ? 'ring-2 ring-white/50' : ''
                  }`}
                >
                  <div className={`bg-gradient-to-br ${bird.color} rounded-xl h-24 mb-4 flex items-center justify-center text-5xl shadow-md`}>
                    🐦
                  </div>
                  <h4 className="text-xl font-bold">{bird.name}</h4>
                  <p className="text-sm text-white/70 italic">{bird.scientific}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Facts Section */}
        <div className="glass-strong rounded-3xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold mb-6 text-center">Did You Know?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6">
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="font-bold text-lg mb-2">10,000+ Species</h4>
              <p className="text-sm text-white/80">There are over 10,000 bird species worldwide</p>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="text-4xl mb-3">🦜</div>
              <h4 className="font-bold text-lg mb-2">Ancient Lineage</h4>
              <p className="text-sm text-white/80">Birds evolved from theropod dinosaurs</p>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="text-4xl mb-3">🎵</div>
              <h4 className="font-bold text-lg mb-2">Beautiful Songs</h4>
              <p className="text-sm text-white/80">Birds communicate through complex vocalizations</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-white/60">
          <p>© 2025 Birds. Celebrating nature's aviators.</p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
