"use client";

import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Level({ xp }: { xp: number }) {
    return (
        <div className="stat">
            <div className="stat-figure text-primary">
                <FontAwesomeIcon icon={faTrophy} className="text-4xl" />
            </div>
            <div className="stat-title">Current Level</div>
            <div className="stat-value text-primary">{Math.floor(xp / 10)}</div>
            <div className="stat-desc">
                <div className="flex gap-x-1.5 items-center">
                    <progress
                        className="progress progress-primary"
                        value={xp % 10}
                        max="10"
                    ></progress>
                    <p className="text-xs">
                        {10 - (xp % 10)} xp until next level
                    </p>
                </div>
                <hr className="text-base-300 my-2" />
                <p className="text-xs">{xp | 0} xp</p>
            </div>
        </div>
    );
}
