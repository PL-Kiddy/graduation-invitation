import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { AppState } from '@/lib/constants';
import { AmbientBackground } from '@/components/ui/AmbientBackground';
import { CinematicIntro } from '@/components/book/CinematicIntro';
import { BookCover } from '@/components/book/BookCover';
import { Book } from '@/components/book/Book';

export default function App() {
  const [appState, setAppState] = useState<AppState>('INTRO');

  // Handle transitions
  const handleIntroComplete = () => {
    setAppState('CLOSED_BOOK');
  };

  const handleOpenBook = () => {
    setAppState('OPENING');
    // After cover opening rotation finishes (~1.25s), enter BOOK_OPEN
    setTimeout(() => {
      setAppState('BOOK_OPEN');
    }, 1250);
  };

  const handleRestart = () => {
    setAppState('CLOSED_BOOK');
  };

  return (
    <main className="relative w-full h-full min-h-[100dvh] flex items-center justify-center overflow-hidden text-[#1E1A16]">
      {/* Background cinematic lighting */}
      <AmbientBackground />

      <AnimatePresence mode="wait">
        {/* Phase 1: Cinematic Intro */}
        {appState === 'INTRO' && (
          <CinematicIntro key="intro" onComplete={handleIntroComplete} />
        )}

        {/* Phase 2: Closed Book & Opening Choreography */}
        {(appState === 'CLOSED_BOOK' || appState === 'OPENING') && (
          <motion.div
            key="cover-view"
            className="w-full h-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <BookCover
              isOpening={appState === 'OPENING'}
              onOpen={handleOpenBook}
            />
          </motion.div>
        )}

        {/* Phase 3: Book Open (Interactive Flipbook) */}
        {appState === 'BOOK_OPEN' && (
          <motion.div
            key="book-content"
            className="w-full h-full flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Book
              onRestart={handleRestart}
              onBackToCover={() => setAppState('CLOSED_BOOK')}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
