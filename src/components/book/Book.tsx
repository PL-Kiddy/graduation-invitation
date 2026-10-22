import React from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useBookNavigation } from '@/hooks/useBookNavigation';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';
import { PageIndicator } from '@/components/book/PageIndicator';
import { transitions } from '@/lib/motion';

// Pages
import { CoverPage } from '@/pages/CoverPage';
import { IntroPage } from '@/pages/IntroPage';
import { JourneyPage } from '@/pages/JourneyPage';
import { InvitationPage } from '@/pages/InvitationPage';
import { CountdownPage } from '@/pages/CountdownPage';
import { CampusPage } from '@/pages/CampusPage';
import { LocationPage } from '@/pages/LocationPage';
import { MemoriesPage } from '@/pages/MemoriesPage';
import { MessagePage } from '@/pages/MessagePage';
import { RSVPPage } from '@/pages/RSVPPage';
import { FinalPage } from '@/pages/FinalPage';

interface BookProps {
  onRestart?: () => void;
}

const pageVariants: Variants = {
  enter: (dir: number) => ({
    opacity: dir > 0 ? 0.9 : 0.8,
    rotateY: dir > 0 ? 35 : -35,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: transitions.pageSpring,
  },
  exit: (dir: number) => ({
    opacity: 0,
    rotateY: dir > 0 ? -95 : 95,
    scale: 0.97,
    transition: transitions.pageSpring,
  }),
};

export const Book: React.FC<BookProps> = ({ onRestart }) => {
  const {
    currentPage,
    direction,
    canGoNext,
    canGoPrev,
    nextPage,
    prevPage,
    goToPage,
  } = useBookNavigation({ enabled: true });

  const { gestureState, gestureProps } = useSwipeGesture({
    onSwipeNext: nextPage,
    onSwipePrev: prevPage,
    canSwipeNext: canGoNext,
    canSwipePrev: canGoPrev,
    enabled: true,
  });

  const { isDragging, dragProgress } = gestureState;

  // Render the appropriate component for a given page index
  const renderPageComponent = (index: number) => {
    switch (index) {
      case 0:
        return <CoverPage onNext={nextPage} />;
      case 1:
        return <IntroPage onNext={nextPage} />;
      case 2:
        return <JourneyPage />;
      case 3:
        return <InvitationPage />;
      case 4:
        return <CountdownPage />;
      case 5:
        return <CampusPage />;
      case 6:
        return <LocationPage />;
      case 7:
        return <MemoriesPage />;
      case 8:
        return <MessagePage />;
      case 9:
        return <RSVPPage />;
      case 10:
        return (
          <FinalPage
            onRestart={() => {
              goToPage(0);
              onRestart?.();
            }}
          />
        );
      default:
        return null;
    }
  };

  // Calculate live drag rotation & bend illusion
  const liveRotateY = isDragging ? Math.max(-80, Math.min(35, dragProgress * 95)) : 0;
  const shadowIntensity = isDragging ? Math.abs(dragProgress) : 0;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between overflow-hidden select-none">
      {/* 3D Perspective Flipbook Stage */}
      <div className="relative w-full flex-1 flex items-center justify-center p-2 md:p-6 perspective-container">
        {/* Book Container with physical shadow & 3D Volume */}
        <div
          {...gestureProps}
          className="relative w-full h-full max-w-[440px] max-h-[820px] rounded-[7px] preserve-3d cursor-grab active:cursor-grabbing touch-pan-y"
          style={{
            boxShadow: `
              0 25px 60px -15px rgba(70, 50, 30, 0.25),
              0 6px 18px rgba(70, 50, 30, 0.08)
            `,
          }}
        >
          {/* 3D Physical Paper Stack Edges */}
          <div className="book-edge-stack-right" />
          <div className="book-edge-stack-bottom" />

          {/* Underneath page preview during drag forward (Next Page) */}
          {isDragging && dragProgress < 0 && canGoNext && (
            <div
              className="absolute inset-0 rounded-[6px] overflow-hidden"
              style={{ zIndex: 5, transform: 'translateZ(-1px)' }}
            >
              {renderPageComponent(currentPage + 1)}
            </div>
          )}

          {/* Underneath page preview during drag backward (Prev Page) */}
          {isDragging && dragProgress > 0 && canGoPrev && (
            <div
              className="absolute inset-0 rounded-[6px] overflow-hidden"
              style={{ zIndex: 5, transform: 'translateZ(-1px)' }}
            >
              {renderPageComponent(currentPage - 1)}
            </div>
          )}

          {/* Active Book Page with 3D Turn and Settle */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate={isDragging ? { opacity: 1, rotateY: liveRotateY } : 'center'}
              exit="exit"
              className="absolute inset-0 w-full h-full preserve-3d origin-left backface-hidden rounded-[6px] overflow-hidden"
              style={{
                zIndex: 10,
              }}
            >
              {/* Dynamic curvature and paper curl shadow overlay */}
              {shadowIntensity > 0 && (
                <div
                  className="absolute inset-0 pointer-events-none z-30 transition-opacity"
                  style={{
                    background: `linear-gradient(to right, rgba(50, 35, 20, ${shadowIntensity * 0.3}) 0%, rgba(255, 255, 255, ${shadowIntensity * 0.15}) 40%, transparent 100%)`,
                  }}
                />
              )}

              {renderPageComponent(currentPage)}
            </motion.div>
          </AnimatePresence>

          {/* Left / Right Subtle Tap Zones Indicator for Desktop Assist */}
          <div className="absolute inset-y-0 left-0 w-[15%] pointer-events-none opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-r from-[#C59B27]/10 to-transparent rounded-l-[6px]" />
          <div className="absolute inset-y-0 right-0 w-[15%] pointer-events-none opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-l from-[#C59B27]/10 to-transparent rounded-r-[6px]" />
        </div>
      </div>

      {/* Bottom Floating Page Indicator (Safe Area Aware & Luxury Ivory Gold theme) */}
      <div className="w-full pb-safe pt-2 flex justify-center z-40 bg-gradient-to-t from-[#F6F2E9]/95 via-[#F6F2E9]/50 to-transparent pointer-events-none">
        <PageIndicator
          currentPage={currentPage}
          onSelectPage={goToPage}
          className="pb-2"
        />
      </div>
    </div>
  );
};
