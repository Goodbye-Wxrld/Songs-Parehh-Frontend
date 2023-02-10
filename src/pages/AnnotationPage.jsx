import { useState, useEffect } from 'react';
import EmotionButton from '../components/EmotionButton';
import Modal from '../components/Modal';

import MusicPlayer from '../components/MusicPlayer';

import closeUrl from '../assets/close.png';

export default function AnnotationPage() {
    const [annotations, setAnnotations] = useState(new Set());
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/music/next-annotation`, {
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);

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
        <>
            <div className="flex h-full items-center justify-center p-3 md:p-8">
                <div className="relative  flex h-full w-full flex-col items-center gap-3 rounded-3xl bg-white p-5 md:p-16 lg:p-24">
                    <p className="mb-5 text-center font-heading text-4xl lg:text-8xl">
                        Dude Pare Song
                    </p>
                    <div className="flex w-full flex-col items-center gap-4">
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ionicon w-6 cursor-pointer fill-white hover:fill-yellow-200 lg:absolute lg:top-0 lg:right-0 lg:w-10 lg:-translate-x-1/2 lg:translate-y-1/2"
                                onClick={() => setShowModal(true)}
                                viewBox="0 0 512 512"
                            >
                                <title>Information Circle</title>
                                <path
                                    d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z"
                                    // fill="blue"
                                    stroke="currentColor"
                                    stroke-miterlimit="10"
                                    stroke-width="32"
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="32"
                                    d="M220 220h32v116"
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-miterlimit="10"
                                    stroke-width="32"
                                    d="M208 340h88"
                                />
                                <path
                                    d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z"
                                    fill="currentColor"
                                />
                            </svg>

                            <div>
                                <p className="lg:text-xl">
                                    Songs completed: 69
                                </p>
                                <p className="lg:text-xl">Raffle entries: 3</p>
                                <p>{annotations}</p>
                            </div>
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
            {showModal && (
                <Modal>
                    <div className="relative px-5 py-6 md:px-6  md:py-8">
                        <img
                            src={closeUrl}
                            alt="close button"
                            className="absolute top-0 right-2 h-5 w-5 cursor-pointer"
                            onClick={() => setShowModal(false)}
                        />
                        <div className="flex flex-col gap-1 lg:gap-3">
                            <p className="text-xl lg:text-3xl">Instructions</p>
                            <ol className="flex flex-col gap-2 [&>li]:flex [&>li]:gap-2 [&>li]:lg:text-lg">
                                <li>
                                    <span>1.</span>
                                    <span>
                                        Find a quiet place for this task and
                                        minimize distractions.
                                    </span>
                                </li>
                                <li>
                                    <span>2.</span>
                                    <span>
                                        Listen to the whole song (some have
                                        silence intentionally included).
                                    </span>
                                </li>
                                <li>
                                    <span>3.</span>
                                    <span>
                                        Choose all the emotions you felt while
                                        listening to the song.
                                    </span>
                                </li>
                                <li>
                                    <span>4.</span>
                                    <span>
                                        Press the arrow button to submit. A new
                                        song will be loaded after submission.
                                    </span>
                                </li>
                            </ol>
                        </div>
                        <div className="my-5 flex justify-center">
                            <hr className="w-full"></hr>
                        </div>
                        <div className="flex flex-col gap-1 lg:gap-3">
                            <p className="text-xl lg:text-3xl">
                                Perceived vs Felt Emotions
                            </p>
                            <ul className="flex flex-col gap-2 [&>li]:flex [&>li]:gap-1  [&>li]:lg:text-lg">
                                <li>
                                    <span>&#8226;</span>
                                    <span>
                                        Perceived emotions are emotions
                                        expressed by the music
                                    </span>
                                </li>
                                <li>
                                    <span>&#8226;</span>
                                    <span>
                                        Felt emotions are emotions the music
                                        made you feel while and after listening
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}
