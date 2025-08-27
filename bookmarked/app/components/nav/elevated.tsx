"use client";

import { useEffect, useState } from "react";

interface ElevatedProps {
    elevatedAt: string;
}

export default function Elevated({ elevatedAt }: ElevatedProps) {
    const [targetTime, setTargetTime] = useState<number>(0);

    useEffect(() => {
        if (elevatedAt) {
            setTargetTime(new Date(elevatedAt).getTime() + 20 * 60 * 1000);
        }
    }, [elevatedAt]);

    if (!targetTime) return null;

    return <Countdown targetTime={targetTime} />;
}

function Countdown({ targetTime }: { targetTime: number }) {
    const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            let diff = targetTime - now;
            if (diff < 0) diff = 0;

            const h = Math.floor(diff / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeLeft({ h, m, s });

            if (diff <= 0) clearInterval(interval);
        }, 1000);

        return () => clearInterval(interval);
    }, [targetTime]);

    return (
        <div>
            <span>Elevation expires in: </span>
            <span className="countdown">
                {timeLeft.m.toString().padStart(2, "0")}m
                {timeLeft.s.toString().padStart(2, "0")}s
            </span>
        </div>
    );
}
