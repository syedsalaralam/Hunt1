import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';

interface Bird {
  id: number;
  x: number;
  y: number;
  speed: number;
  width: number;
  height: number;
}

interface Arrow {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

// Draw a bird with wings
function drawBird(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  // Bird body (ellipse)
  ctx.fillStyle = '#1a1a1a';
  ctx.beginPath();
  ctx.ellipse(x, y, size * 0.8, size * 0.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Bird head
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(x + size * 0.6, y - size * 0.3, size * 0.35, 0, Math.PI * 2);
  ctx.fill();

  // Bird eye
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(x + size * 0.85, y - size * 0.35, size * 0.12, 0, Math.PI * 2);
  ctx.fill();

  // Bird beak
  ctx.strokeStyle = '#ff9800';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(x + size * 0.95, y - size * 0.3);
  ctx.lineTo(x + size * 1.2, y - size * 0.3);
  ctx.stroke();

  // Wings (left)
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x + size * 0.2, y - size * 0.2, size * 0.5, 0, Math.PI * 2);
  ctx.stroke();

  // Wings (right)
  ctx.beginPath();
  ctx.arc(x + size * 0.2, y + size * 0.2, size * 0.5, 0, Math.PI * 2);
  ctx.stroke();

  // Tail feathers
  ctx.strokeStyle = '#1a1a1a';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x - size * 0.6, y);
  ctx.lineTo(x - size * 1.1, y - size * 0.3);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x - size * 0.6, y);
  ctx.lineTo(x - size * 1.1, y + size * 0.3);
  ctx.stroke();
}

// Draw an archer warrior
function drawArcher(ctx: CanvasRenderingContext2D, x: number, y: number) {
  const scale = 1;

  // Ground/feet
  ctx.fillStyle = '#8B4513';
  ctx.fillRect(x - 12 * scale, y + 35 * scale, 24 * scale, 8 * scale);

  // Legs
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x - 5 * scale, y + 15 * scale);
  ctx.lineTo(x - 8 * scale, y + 35 * scale);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x + 5 * scale, y + 15 * scale);
  ctx.lineTo(x + 8 * scale, y + 35 * scale);
  ctx.stroke();

  // Body/torso
  ctx.fillStyle = '#2c3e50';
  ctx.fillRect(x - 10 * scale, y, 20 * scale, 18 * scale);

  // Arms
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 3;
  // Left arm (holding bow)
  ctx.beginPath();
  ctx.moveTo(x - 10 * scale, y + 5 * scale);
  ctx.lineTo(x - 20 * scale, y - 5 * scale);
  ctx.stroke();

  // Right arm (drawing arrow)
  ctx.beginPath();
  ctx.moveTo(x + 10 * scale, y + 5 * scale);
  ctx.lineTo(x + 15 * scale, y + 2 * scale);
  ctx.stroke();

  // Head
  ctx.fillStyle = '#d4a574';
  ctx.beginPath();
  ctx.arc(x, y - 15 * scale, 8 * scale, 0, Math.PI * 2);
  ctx.fill();

  // Hair
  ctx.fillStyle = '#2c1810';
  ctx.fillRect(x - 8 * scale, y - 22 * scale, 16 * scale, 8 * scale);

  // Eyes
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(x - 3 * scale, y - 16 * scale, 1.5 * scale, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x + 3 * scale, y - 16 * scale, 1.5 * scale, 0, Math.PI * 2);
  ctx.fill();

  // Bow (curved)
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(x - 20 * scale, y - 5 * scale, 12 * scale, 0, Math.PI * 2);
  ctx.stroke();

  // Bow string
  ctx.strokeStyle = '#D2B48C';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(x - 20 * scale, y - 17 * scale);
  ctx.lineTo(x - 20 * scale, y + 7 * scale);
  ctx.stroke();

  // Quiver (arrows on back)
  ctx.fillStyle = '#654321';
  ctx.fillRect(x + 5 * scale, y - 5 * scale, 6 * scale, 20 * scale);

  // Arrows in quiver
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 1;
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(x + 8 * scale, y + 2 * scale + i * 6 * scale);
    ctx.lineTo(x + 12 * scale, y + 5 * scale + i * 6 * scale);
    ctx.stroke();
  }
}

// Draw an arrow shape
function drawArrow(ctx: CanvasRenderingContext2D, x: number, y: number, angle: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  // Arrow shaft
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-15, 0);
  ctx.lineTo(20, 0);
  ctx.stroke();

  // Arrow head (triangle)
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.moveTo(20, 0);
  ctx.lineTo(25, -4);
  ctx.lineTo(25, 4);
  ctx.closePath();
  ctx.fill();

  // Arrow fletching (feathers at back)
  ctx.strokeStyle = '#FF6347';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(-15, 0);
  ctx.lineTo(-18, -5);
  ctx.moveTo(-15, 0);
  ctx.lineTo(-18, 5);
  ctx.stroke();

  ctx.restore();
}

export default function GameArena() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'over'>('idle');
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [level, setLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [score, setScore] = useState(0);

  const gameRef = useRef({
    birds: [] as Bird[],
    arrows: [] as Arrow[],
    mouseX: 0,
    mouseY: 0,
    birdId: 0,
    arrowId: 0,
    spawnTimer: 0,
    spawnRate: 120,
    baseSpeed: 2,
    nextBirdSpawn: 120,
    animationId: 0,
    archerX: 0,
    archerY: 0,
  });

  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize Web Audio API for sound effects
  const initAudio = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  // Play bird hunt sound
  const playBirdHuntSound = useCallback(() => {
    if (isMuted) return;

    try {
      const audioContext = initAudio();
      const now = audioContext.currentTime;
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.2);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

      osc.start(now);
      osc.stop(now + 0.2);
    } catch (e) {
      console.error('Error playing sound:', e);
    }
  }, [isMuted, initAudio]);

  // Play background music/ambient sound
  const playBackgroundSound = useCallback(() => {
    if (isMuted) return;

    try {
      const audioContext = initAudio();
      const now = audioContext.currentTime;
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.frequency.value = 220;
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.linearRampToValueAtTime(0.1, now + 0.3);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {
      console.error('Error playing sound:', e);
    }
  }, [isMuted, initAudio]);

  // Start game
  const startGame = useCallback(() => {
    setGameState('playing');
    setHits(0);
    setMisses(0);
    setLevel(1);
    setScore(0);
    gameRef.current = {
      birds: [],
      arrows: [],
      mouseX: 0,
      mouseY: 0,
      birdId: 0,
      arrowId: 0,
      spawnTimer: 0,
      spawnRate: 120,
      baseSpeed: 2,
      nextBirdSpawn: 120,
      animationId: 0,
      archerX: 0,
      archerY: 0,
    };
    playBackgroundSound();
  }, [playBackgroundSound]);

  // Handle mouse move
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!canvasRef.current || gameState !== 'playing') return;
    const rect = canvasRef.current.getBoundingClientRect();
    gameRef.current.mouseX = e.clientX - rect.left;
    gameRef.current.mouseY = e.clientY - rect.top;
  }, [gameState]);

  // Handle click to shoot
  const handleClick = useCallback(() => {
    if (gameState !== 'playing' || !canvasRef.current) return;

    const game = gameRef.current;
    const canvas = canvasRef.current;

    const archerX = game.archerX;
    const archerY = game.archerY - 15; // Arrow starts from archer's chest

    const dx = game.mouseX - archerX;
    const dy = game.mouseY - archerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance === 0) return;

    const arrowSpeed = 8;
    const arrow: Arrow = {
      id: game.arrowId++,
      x: archerX,
      y: archerY,
      vx: (dx / distance) * arrowSpeed,
      vy: (dy / distance) * arrowSpeed,
    };

    game.arrows.push(arrow);
    playBirdHuntSound();
  }, [gameState, playBirdHuntSound]);

  // Toggle fullscreen
  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(!isFullscreen);
  }, [isFullscreen]);

  // Game loop
  useEffect(() => {
    if (gameState !== 'playing') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const game = gameRef.current;

    // Initialize archer position
    if (game.archerX === 0) {
      game.archerX = canvas.width / 2;
      game.archerY = canvas.height - 50;
    }

    const gameLoop = () => {
      // Clear canvas
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ground/land
      ctx.fillStyle = '#8B7355';
      ctx.fillRect(0, canvas.height - 40, canvas.width, 40);

      // Update and draw birds
      game.spawnTimer++;
      const currentSpeed = game.baseSpeed + (level - 1) * 0.5;
      const numBirds = 1 + Math.floor((level - 1) * 0.5);

      if (game.spawnTimer > game.nextBirdSpawn) {
        game.spawnTimer = 0;
        game.nextBirdSpawn = Math.max(60, 120 - (level - 1) * 10);

        for (let i = 0; i < numBirds; i++) {
          const bird: Bird = {
            id: game.birdId++,
            x: -50,
            y: Math.random() * (canvas.height * 0.4) + 40, // Birds in upper 40% of screen
            speed: currentSpeed + Math.random() * 0.5,
            width: 40,
            height: 30,
          };
          game.birds.push(bird);
        }
      }

      // Update and draw birds
      for (let i = game.birds.length - 1; i >= 0; i--) {
        const bird = game.birds[i];
        bird.x += bird.speed;

        drawBird(ctx, bird.x, bird.y, 15);

        // Remove bird if off screen
        if (bird.x > canvas.width) {
          game.birds.splice(i, 1);
          setMisses((prev) => {
            const newMisses = prev + 1;
            if (newMisses >= 10) {
              setGameState('over');
            }
            return newMisses;
          });
        }
      }

      // Update and draw arrows
      for (let i = game.arrows.length - 1; i >= 0; i--) {
        const arrow = game.arrows[i];
        arrow.x += arrow.vx;
        arrow.y += arrow.vy;

        const angle = Math.atan2(arrow.vy, arrow.vx);
        drawArrow(ctx, arrow.x, arrow.y, angle);

        // Check collision with birds
        let hit = false;
        for (let j = game.birds.length - 1; j >= 0; j--) {
          const bird = game.birds[j];
          const dx = arrow.x - bird.x;
          const dy = arrow.y - bird.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 25) {
            game.birds.splice(j, 1);
            game.arrows.splice(i, 1);
            hit = true;
            setHits((prev) => {
              const newHits = prev + 1;
              const newLevel = Math.floor(newHits / 5) + 1;
              setLevel(newLevel);
              setScore(newHits * 10);
              playBirdHuntSound();
              return newHits;
            });
            break;
          }
        }

        // Remove arrow if off screen
        if (
          !hit &&
          (arrow.x < 0 || arrow.x > canvas.width || arrow.y < 0 || arrow.y > canvas.height)
        ) {
          game.arrows.splice(i, 1);
        }
      }

      // Draw archer (fixed position on ground)
      drawArcher(ctx, game.archerX, game.archerY);

      // Draw crosshair at mouse position
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.5)';
      ctx.lineWidth = 2;
      const crosshairSize = 15;
      ctx.beginPath();
      ctx.moveTo(game.mouseX - crosshairSize, game.mouseY);
      ctx.lineTo(game.mouseX + crosshairSize, game.mouseY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(game.mouseX, game.mouseY - crosshairSize);
      ctx.lineTo(game.mouseX, game.mouseY + crosshairSize);
      ctx.stroke();

      // Draw UI
      ctx.fillStyle = '#000';
      ctx.font = 'bold 20px Inter, sans-serif';
      ctx.fillText(`Hits: ${hits}`, 20, 30);
      ctx.fillText(`Misses: ${misses}`, 20, 60);
      ctx.fillText(`Level: ${level}`, canvas.width - 150, 30);
      ctx.fillText(`Score: ${score}`, canvas.width - 150, 60);

      gameRef.current.animationId = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      if (gameRef.current.animationId) {
        cancelAnimationFrame(gameRef.current.animationId);
      }
    };
  }, [gameState, hits, misses, level, score, playBirdHuntSound]);

  // Event listeners
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [handleMouseMove, handleClick]);

  // Canvas resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden neon-border transition-all duration-300 ${
        isFullscreen
          ? 'fixed inset-0 z-50 rounded-none w-screen h-screen'
          : 'w-full md:w-5/6 lg:w-3/4 h-screen md:h-[600px]'
      } ${gameState === 'playing' ? 'shadow-[0_0_30px_rgba(168,85,247,0.8)]' : ''}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair bg-white"
        style={{ display: 'block' }}
      />

      {/* Game Over Screen */}
      {gameState === 'over' && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-40">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 neon-glow">Game Over!</h2>
            <p className="text-xl mb-6 text-white">
              Final Score: <span className="text-2xl font-bold neon-glow">{score}</span>
            </p>
            <p className="text-lg mb-8 text-white">
              Hits: {hits} | Misses: {misses}
            </p>
            <button onClick={startGame} className="neon-button">
              Play Again
            </button>
          </div>
        </div>
      )}

      {/* Start Screen */}
      {gameState === 'idle' && (
        <div className="absolute inset-0 bg-white flex items-center justify-center z-40">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 neon-glow">Arrow Hunt</h2>
            <p className="text-lg mb-8 text-gray-700">Track flying birds with your cursor and click to shoot!</p>
            <button onClick={startGame} className="neon-button mb-4">
              Start Game
            </button>
            <p className="text-sm text-gray-600 mt-4">Miss 10 birds to lose. Difficulty increases every 5 hits!</p>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-30">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 bg-black text-white rounded-lg hover:bg-purple-600 transition-colors"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        <button
          onClick={toggleFullscreen}
          className="p-2 bg-black text-white rounded-lg hover:bg-purple-600 transition-colors"
          title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        >
          {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>
      </div>
    </div>
  );
}
