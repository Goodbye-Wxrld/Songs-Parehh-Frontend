import EmotionButton from '../components/EmotionButton';

import MusicPlayer from '../components/MusicPlayer';
import { useState, useRef } from 'react';

export default function AnnotationPage() {
    const [annotations, setAnnotations] = useState(new Set());

    const handleAnnotate = (emotion) => {
        setAnnotations((annotations) => {
            const newAnnotations = new Set(annotations);

            // deselect on duplicate emotion
            if (newAnnotations.has(emotion)) {
                newAnnotations.delete(emotion);
            } else {
                newAnnotations.add(emotion);
            }

            return newAnnotations;
        });
    };

    const handleSubmit = () => {};

    return (
        <div className="flex h-full items-center justify-center p-3 md:p-8">
            <div className="flex h-full w-full flex-col items-center gap-3 rounded-3xl bg-white p-5 md:p-16 lg:p-24">
                <p className="mb-5 text-center font-heading text-4xl lg:text-8xl">
                    Dude Pare Song
                </p>
                <div className="flex w-full flex-col items-center gap-8">
                    {/* music player */}
                    <div className="flex w-full max-w-xl flex-col">
                        <MusicPlayer />
                    </div>
                    {/* Annotation */}
                    <div className="flex w-full max-w-5xl flex-wrap justify-center gap-4 lg:flex-nowrap">
                        <EmotionButton
                            onAnnotate={handleAnnotate}
                            emotion="Anger"
                        />
                        <EmotionButton
                            onAnnotate={handleAnnotate}
                            emotion="Disgust"
                        />
                        <EmotionButton
                            onAnnotate={handleAnnotate}
                            emotion="Fear"
                        />
                        <EmotionButton
                            onAnnotate={handleAnnotate}
                            emotion="Happiness"
                        />
                        <EmotionButton
                            onAnnotate={handleAnnotate}
                            emotion="Sadness"
                        />
                        <EmotionButton
                            onAnnotate={handleAnnotate}
                            emotion="Surprise"
                        />
                    </div>
                </div>
                <div className="mt-auto flex w-full max-w-6xl items-center justify-between">
                    <div>
                        <p className="lg:text-xl">Songs completed: 69</p>
                        <p className="lg:text-xl">Raffle entries: 3</p>
                        <p>{annotations}</p>
                    </div>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ionicon w-6 cursor-pointer fill-white stroke-black hover:fill-green-300 hover:stroke-green-500 lg:w-8"
                            viewBox="0 0 512 512"
                        >
                            <title>Send</title>
                            <path
                                d="M470.3 271.15L43.16 447.31a7.83 7.83 0 01-11.16-7V327a8 8 0 016.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 01-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 010 29.39z"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="32"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
