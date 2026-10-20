import { useState, useRef, useCallback } from 'react';
import { APP_CONFIG } from '@/lib/constants';

interface UseSwipeGestureOptions {
  onSwipeNext: () => void;
  onSwipePrev: () => void;
  canSwipeNext: boolean;
  canSwipePrev: boolean;
  enabled?: boolean;
}

export interface SwipeGestureState {
  isDragging: boolean;
  dragOffset: number; // in pixels
  dragProgress: number; // normalized -1 to 1 (negative = dragging left for next page)
  dragDirection: 'next' | 'prev' | null;
}

export function useSwipeGesture({
  onSwipeNext,
  onSwipePrev,
  canSwipeNext,
  canSwipePrev,
  enabled = true,
}: UseSwipeGestureOptions) {
  const [gestureState, setGestureState] = useState<SwipeGestureState>({
    isDragging: false,
    dragOffset: 0,
    dragProgress: 0,
    dragDirection: null,
  });

  const startXRef = useRef<number>(0);
  const startYRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const isTrackingRef = useRef<boolean>(false);
  const containerWidthRef = useRef<number>(390);

  const isInteractiveTarget = (target: HTMLElement | null): boolean => {
    if (!target) return false;
    if (target.closest(`[${APP_CONFIG.INTERACTIVE_ATTR}="true"]`)) return true;
    if (target.closest('button, a, input, textarea, select')) return true;
    return false;
  };

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!enabled) return;
      if (isInteractiveTarget(e.target as HTMLElement)) return;

      const rect = e.currentTarget.getBoundingClientRect();
      containerWidthRef.current = rect.width || 390;

      startXRef.current = e.clientX;
      startYRef.current = e.clientY;
      startTimeRef.current = Date.now();
      isTrackingRef.current = true;

      // Set pointer capture to ensure smooth tracking across boundaries
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // Fallback for environments where setPointerCapture isn't available
      }
    },
    [enabled]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isTrackingRef.current || !enabled) return;

      const deltaX = e.clientX - startXRef.current;
      const deltaY = e.clientY - startYRef.current;

      // If vertical movement dominates early on, cancel swipe
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 25 && !gestureState.isDragging) {
        isTrackingRef.current = false;
        return;
      }

      const width = containerWidthRef.current;
      let boundedDeltaX = deltaX;

      // Boundary resistance if can't go further
      if (deltaX < 0 && !canSwipeNext) {
        boundedDeltaX = deltaX * 0.18; // strong resistance
      } else if (deltaX > 0 && !canSwipePrev) {
        boundedDeltaX = deltaX * 0.18; // strong resistance
      }

      const progress = Math.max(-1, Math.min(1, boundedDeltaX / (width * 0.75)));
      const dir: 'next' | 'prev' | null = deltaX < -10 ? 'next' : deltaX > 10 ? 'prev' : null;

      setGestureState({
        isDragging: true,
        dragOffset: boundedDeltaX,
        dragProgress: progress,
        dragDirection: dir,
      });
    },
    [canSwipeNext, canSwipePrev, enabled, gestureState.isDragging]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isTrackingRef.current || !enabled) return;
      isTrackingRef.current = false;

      const deltaX = e.clientX - startXRef.current;
      const deltaY = e.clientY - startYRef.current;
      const duration = Math.max(1, Date.now() - startTimeRef.current);
      const velocity = Math.abs(deltaX) / duration;
      const rect = e.currentTarget.getBoundingClientRect();
      const relativeX = (e.clientX - rect.left) / (rect.width || 1);

      // Check for edge tap if movement was tiny (< 12px) and fast (< 350ms)
      const isTap = Math.abs(deltaX) < 12 && Math.abs(deltaY) < 12 && duration < 350;

      if (isTap) {
        if (relativeX > 1 - APP_CONFIG.TAP_EDGE_PERCENT && canSwipeNext) {
          onSwipeNext();
        } else if (relativeX < APP_CONFIG.TAP_EDGE_PERCENT && canSwipePrev) {
          onSwipePrev();
        }
      } else {
        // Evaluate swipe completion based on distance or velocity
        const meetsDistance = Math.abs(deltaX) > APP_CONFIG.SWIPE_DISTANCE_THRESHOLD;
        const meetsVelocity = velocity > APP_CONFIG.SWIPE_VELOCITY_THRESHOLD;

        if (deltaX < 0 && (meetsDistance || meetsVelocity) && canSwipeNext) {
          onSwipeNext();
        } else if (deltaX > 0 && (meetsDistance || meetsVelocity) && canSwipePrev) {
          onSwipePrev();
        }
      }

      // Reset state smoothly
      setGestureState({
        isDragging: false,
        dragOffset: 0,
        dragProgress: 0,
        dragDirection: null,
      });

      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // Ignore if pointer capture already released
      }
    },
    [canSwipeNext, canSwipePrev, enabled, onSwipeNext, onSwipePrev]
  );

  const handlePointerCancel = useCallback(() => {
    isTrackingRef.current = false;
    setGestureState({
      isDragging: false,
      dragOffset: 0,
      dragProgress: 0,
      dragDirection: null,
    });
  }, []);

  return {
    gestureState,
    gestureProps: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerCancel,
    },
  };
}
