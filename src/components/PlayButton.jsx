import { useState } from 'react';

export default function PlayButton({ isPlaying, onClick }) {
    return (
        <div className="cursor-pointer" onClick={onClick}>
            <div className="relative flex h-8 w-8 items-center justify-center gap-1 rounded-full bg-yellow-400 hover:bg-yellow-500 lg:h-12 lg:w-12">
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </div>
        </div>
    );
}

function PlayIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon relative left-[1px] w-2/3"
            viewBox="0 0 512 512"
        >
            <title>Play</title>
            <path
                d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z"
                fill="white"
                // stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
            />
        </svg>
    );
}

function PauseIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon  w-2/3 fill-white stroke-black"
            viewBox="0 0 512 512"
        >
            <title>Pause</title>
            <path
                stroke="currentColor"
                d="M208 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16zM352 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16z"
            />
        </svg>
    );
}
