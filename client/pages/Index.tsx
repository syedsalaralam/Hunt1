import GameArena from '@/components/GameArena';
import { ArrowRight, Music, Zap } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 bg-white border-b border-purple-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <ArrowRight className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold neon-glow">Arrow Hunt</h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#game" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                Game
              </a>
              <a href="#how-to-play" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                How to Play
              </a>
              <a href="#history" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
                History
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-100 rounded-full border border-purple-300">
              <Zap size={16} className="text-purple-600" />
              <span className="text-purple-700 font-medium text-sm">Interactive Game</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Master the Ancient Art of
            <span className="block neon-glow mt-2">Arrow Hunting</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Test your precision and reflexes. Track flying birds with your cursor, aim carefully, and click to hunt. 
            How many birds can you hit before they escape?
          </p>
        </section>

        {/* Game Arena */}
        <section id="game" className="mb-20 flex justify-center">
          <GameArena />
        </section>

        {/* How to Play */}
        <section id="how-to-play" className="mb-20">
          <h3 className="text-4xl font-bold mb-12 text-center neon-glow">How to Play</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="neon-border p-8 rounded-lg bg-gradient-to-br from-white to-purple-50">
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                Move Your Archer
              </h4>
              <p className="text-gray-700">
                Move your mouse to control the archer's position. The archer moves vertically to track the birds flying across the screen.
              </p>
            </div>

            <div className="neon-border p-8 rounded-lg bg-gradient-to-br from-white to-purple-50">
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                Aim and Click
              </h4>
              <p className="text-gray-700">
                Position your archer to aim at the birds. Click anywhere on the screen to shoot an arrow. The arrow travels toward the bird's path.
              </p>
            </div>

            <div className="neon-border p-8 rounded-lg bg-gradient-to-br from-white to-purple-50">
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                Hunt Efficiently
              </h4>
              <p className="text-gray-700">
                Each successful hit increases your score by 10 points. After every 5 hits, the difficulty increases with faster and more birds.
              </p>
            </div>

            <div className="neon-border p-8 rounded-lg bg-gradient-to-br from-white to-purple-50">
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                Game Over Condition
              </h4>
              <p className="text-gray-700">
                The game ends when 10 birds escape without being hunted. Track your score, hits, and misses to improve your hunting skills!
              </p>
            </div>
          </div>

          {/* Game Rules */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-l-4 border-purple-600 p-8 rounded-lg">
            <h4 className="text-2xl font-bold mb-6 text-gray-900">Game Rules & Features</h4>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold mt-1">•</span>
                <span><strong>Difficulty Scaling:</strong> Level increases every 5 successful hits, making birds faster and spawning more frequently</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold mt-1">•</span>
                <span><strong>Sound Effects:</strong> Enjoy immersive audio feedback with game sounds and bird hunt effects (toggle with the speaker icon)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold mt-1">•</span>
                <span><strong>Fullscreen Mode:</strong> Play in fullscreen for an immersive experience using the fullscreen toggle button</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold mt-1">•</span>
                <span><strong>Responsive Design:</strong> Works seamlessly on all device sizes with an elegant purple neon aesthetic</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold mt-1">•</span>
                <span><strong>Real-time Scoring:</strong> Watch your score, hits, and misses update in real-time during gameplay</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Historical Inspiration */}
        <section id="history" className="mb-20">
          <h3 className="text-4xl font-bold mb-12 text-center neon-glow">Historical Inspiration</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-lg neon-border">
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                Ancient Greek Archery Competitions
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Archery competitions have been celebrated since ancient times, with records of organized contests dating back to Ancient Greece and Rome. These competitions were not just sports—they were prestigious displays of skill, precision, and martial prowess.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The most famous Greek archery tradition involved hunting expeditions and competitive contests where archers would demonstrate their accuracy by hitting moving targets. These events were often associated with Apollo, the Greek god of archery, and were celebrated as part of religious festivals and Olympic-style competitions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-lg neon-border">
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🏹</span>
                Traditional Archery Legacy
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Archery has been an essential skill throughout human history, evolving from a hunting tool to a refined competitive art form. Different cultures developed their own archery traditions, from the English longbow to Japanese kyudo to Persian mounted archery.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This game reimagines the classic hunting competition where accuracy, timing, and adaptability were crucial. The escalating difficulty reflects how real archers improved their skills by facing increasingly challenging targets, training with faster movements and multiple prey—a testament to the enduring appeal of precision sports.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-lg border border-purple-300/50">
            <h4 className="text-xl font-bold mb-3 text-purple-900">Did You Know?</h4>
            <p className="text-gray-800">
              Ancient archers often competed in events called "roving" where they would shoot at targets placed at various distances across fields, much like our bird-hunting game. The skill required to track moving targets while maintaining precision was highly valued and celebrated in ancient societies. This game captures that essence of ancient hunting competitions in a modern, interactive format!
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h3 className="text-4xl font-bold mb-12 text-center neon-glow">Game Features</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg neon-border hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300">
              <Music className="w-12 h-12 text-purple-600 mb-4" />
              <h5 className="text-lg font-bold mb-2">Sound & Music</h5>
              <p className="text-gray-600">Immersive audio feedback with hunt sounds and ambient music. Toggle sound on/off anytime.</p>
            </div>

            <div className="p-6 rounded-lg neon-border hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300">
              <Zap className="w-12 h-12 text-purple-600 mb-4" />
              <h5 className="text-lg font-bold mb-2">Progressive Difficulty</h5>
              <p className="text-gray-600">Game difficulty increases every 5 hits with faster birds and more spawns. Stay sharp!</p>
            </div>

            <div className="p-6 rounded-lg neon-border hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300">
              <ArrowRight className="w-12 h-12 text-purple-600 mb-4" />
              <h5 className="text-lg font-bold mb-2">Precise Controls</h5>
              <p className="text-gray-600">Smooth cursor tracking and responsive click-to-shoot mechanics for intuitive gameplay.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-8 neon-border rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Master Arrow Hunting?</h3>
          <p className="text-white/90 mb-8 text-lg">
            Scroll up to the game arena and start your hunting adventure. The birds are waiting!
          </p>
          <a href="#game" className="neon-button inline-block">
            Play Now
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Arrow Hunt</h4>
              <p className="text-gray-600 text-sm">
                A modern take on ancient archery competitions. Test your precision and reflexes with this elegant, responsive game.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#game" className="hover:text-purple-600 transition-colors">Play Game</a></li>
                <li><a href="#how-to-play" className="hover:text-purple-600 transition-colors">How to Play</a></li>
                <li><a href="#history" className="hover:text-purple-600 transition-colors">History</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Technology</h4>
              <p className="text-gray-600 text-sm">
                Built with React, TypeScript, and Tailwind CSS. No API required. Deployable anywhere.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-gray-600 text-sm">
              © 2024 Arrow Hunt. Inspired by ancient Greek archery competitions. Built with modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
