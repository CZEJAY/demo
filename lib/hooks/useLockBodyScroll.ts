import { useEffect } from "react";

export function useLockBodyScroll(...openStates: (boolean | null)[]): void {
  useEffect(() => {
    const shouldLockScroll = openStates.some((state) => state); // If any state is true

    if (shouldLockScroll) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openStates]);
}
