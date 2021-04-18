import {useEffect, useRef} from "react";

export default function useScroll(element, callback) {
    const prevY = useRef(0);

    const observer = useRef(
        new IntersectionObserver(entries => {
                const firstEntry = entries[0]
                const y = firstEntry.boundingClientRect.y
                if (prevY.current > y) {
                    setTimeout(() => callback(), 600);
                }
                prevY.current = y
            },
            {threshold: 1}
        )
    )


    useEffect(() => {
        const currentElement = element;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [element]);
}
