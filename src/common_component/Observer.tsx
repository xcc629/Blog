/**
 * 참고: https://velog.io/@corgi-world/Next.js-React-Query-Prisma%EC%99%80-%ED%95%A8%EA%BB%98%ED%95%98%EB%8A%94-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4
 */

import { useEffect, useRef } from "react";

export default function Observer({
  handleIntersection,
}: {
  handleIntersection: () => void;
}) {
  const target = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          handleIntersection();
        }
      },
      { threshold: 1 }
    );

    if (target.current) {
      observer.observe(target.current);
    }

    return () => observer.disconnect();
  }, [handleIntersection]);

  return <div ref={target}></div>;
}
