import { useEffect, useRef } from 'react';

export function useClickOutside<T extends HTMLElement>(
  handler: () => void,
  exceptRefs: React.RefObject<HTMLElement>[] = []
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      // Check if click was inside any of the excepted elements
      const isExcepted = exceptRefs.some(
        (exceptRef) => exceptRef.current?.contains(event.target as Node)
      );

      if (!isExcepted) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handler, exceptRefs]);

  return ref;
}