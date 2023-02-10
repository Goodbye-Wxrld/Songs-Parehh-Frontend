import { useState, useRef, useLayoutEffect } from 'react';
import clsx from 'clsx';

import AudioWavUrl from '../assets/4.wav';
import vinylUrl from '../assets/vinyl.png';
import MuteButton from '../components/MuteButton';
import PlayButton from '../components/PlayButton';
import ReplayButton from './ReplayButton';

function MusicPlayer({ src, onEnd, onCanPlay }) {
    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const [progressBarLength, setProgressBarLength] = useState(0);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [endTime, setEndTime] = useState('');

    const handleMetadata = () => {
        const endTime = String(Math.floor(audioRef.current.duration));
        setEndTime(`0:${endTime.padStart(2, 0)}`);
    };

    const handleMute = () => {
        setIsMuted((isMuted) => {
            const newIsMuted = !isMuted;
            if (newIsMuted) audioRef.current.muted = true;
            else audioRef.current.muted = false;

            return newIsMuted;
        });
    };

    const handlePlay = () => {
        setIsPlaying((isPlaying) => {
            const newIsPlaying = !isPlaying;
            if (newIsPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }

            return newIsPlaying;
        });
    };

    const handleProgressUpdate = () => {
        setProgressBarLength(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
        );

        const currentTime = String(Math.floor(audioRef.current.currentTime));
        setCurrentTime(`0:${currentTime.padStart(2, 0)}`);
    };

    const handleAudioEnd = () => {
        setIsPlaying(false);
        onEnd();
    };

    const handleReplay = () => {
        audioRef.current.currentTime = 0;
    };

    return (
        <>
            <audio
                src={src}
                ref={audioRef}
                onTimeUpdate={handleProgressUpdate}
                onLoadedMetadata={handleMetadata}
                onEnded={handleAudioEnd}
                onCanPlay={onCanPlay}
            ></audio>
            <div className="flex justify-center">
                <img
                    src={vinylUrl}
                    onClick={handlePlay}
                    className={clsx(
                        'w-1/2 min-w-[150px] max-w-[250px] animate-spin-slow cursor-pointer',
                        !isPlaying && 'animate-pause'
                    )}
                />
            </div>

            <div className="flex items-center gap-2">
                <p id="time-start text-xs">{currentTime}</p>
                <div className="h-1 w-full bg-gray-200">
                    {/*Progress Bar Indicator*/}
                    <div
                        id="progress-bar"
                        className="h-[inherit] w-0 bg-gray-500"
                        style={{
                            width: `${progressBarLength}%`,
                        }}
                    ></div>
                </div>
                <p id="time-end text-xs">{endTime}</p>
            </div>
            <div className="flex items-center justify-around">
                <MuteButton onClick={handleMute} isMuted={isMuted} />
                <PlayButton onClick={handlePlay} isPlaying={isPlaying} />
                <ReplayButton onClick={handleReplay} />
            </div>
        </>
    );
}

export default MusicPlayer;
