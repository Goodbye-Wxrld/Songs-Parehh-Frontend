import { useState, useEffect, useLayoutEffect } from 'react';
import { useLoaderData } from 'react-router';
import clsx from 'clsx';

import EmotionButton from '../components/EmotionButton';
import Modal from '../components/Modal';
import MusicPlayer from '../components/MusicPlayer';
import { fetchMusicToBeAnnotated } from '../utils/fetchData';

import closeUrl from '../assets/close.png';

export default function AnnotationPage() {
    //initial state
    const { musicData, userData } = useLoaderData();

    //states
    const [musicId, setMusicId] = useState(musicData.musicId);
    const [musicUrl, setMusicUrl] = useState(musicData.url);
    const [songsCompleted, setSongsCompleted] = useState(
        userData.totalAnnotations
    );

    const [hasMusicEnded, setHasMusicEnded] = useState(false);
    const [annotations, setAnnotations] = useState(new Set());

    const [showModal, setShowModal] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    //derived states

    const shoudlDisableButton = annotations.size == 0 || !hasMusicEnded;
    const raffleEntries = Math.floor(songsCompleted / 20);

    const setMusicTobeAnnotated = async () => {
        const data = await fetchMusicToBeAnnotated();
        setMusicUrl(data.url);
        setMusicId(data.musicId);
        setHasMusicEnded(false);
    };

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

    const handleSubmit = async () => {
        await fetch(`${import.meta.env.VITE_API_URL}/user/submit`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                musicId: musicId,
                emotions: Array.from(annotations),
            }),
        });

        // setShowPopup(true);
        setSongsCompleted((songsCompleted) => songsCompleted + 1);
        setMusicTobeAnnotated();
        setAnnotations(new Set());
    };

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
                            <MusicPlayer
                                key={musicId}
                                src={musicUrl}
                                onEnd={() => setHasMusicEnded(true)}
                                onCanPlay={() => setShowPopup(true)}
                            />
                        </div>
                        {/* Annotation */}
                        <div className="flex w-full max-w-5xl flex-wrap justify-center gap-4 lg:flex-nowrap">
                            <EmotionButton
                                onAnnotate={handleAnnotate}
                                isSelected={annotations.has('Anger')}
                                emotion="Anger"
                            />
                            <EmotionButton
                                onAnnotate={handleAnnotate}
                                isSelected={annotations.has('Disgust')}
                                emotion="Disgust"
                            />
                            <EmotionButton
                                onAnnotate={handleAnnotate}
                                isSelected={annotations.has('Fear')}
                                emotion="Fear"
                            />
                            <EmotionButton
                                onAnnotate={handleAnnotate}
                                isSelected={annotations.has('Happiness')}
                                emotion="Happiness"
                            />
                            <EmotionButton
                                onAnnotate={handleAnnotate}
                                isSelected={annotations.has('Sadness')}
                                emotion="Sadness"
                            />
                            <EmotionButton
                                onAnnotate={handleAnnotate}
                                isSelected={annotations.has('Surprise')}
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
                                    strokeMiterlimit="10"
                                    strokeWidth="32"
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="32"
                                    d="M220 220h32v116"
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="32"
                                    d="M208 340h88"
                                />
                                <path
                                    d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z"
                                    fill="currentColor"
                                />
                            </svg>

                            <div>
                                <p className="lg:text-xl">
                                    Songs completed: {songsCompleted}
                                </p>
                                <p className="lg:text-xl">
                                    Raffle entries: {raffleEntries}
                                </p>
                                {/* <p>{annotations}</p> */}
                            </div>
                        </div>
                        <div>
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ionicon w-6 cursor-pointer fill-white stroke-black hover:fill-green-300 hover:stroke-green-500 lg:w-8"
                                viewBox="0 0 512 512"
                            >
                                <title>Send</title>
                                <path
                                    d="M470.3 271.15L43.16 447.31a7.83 7.83 0 01-11.16-7V327a8 8 0 016.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 01-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 010 29.39z"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="32"
                                />
                            </svg> */}
                            <button
                                onClick={handleSubmit}
                                disabled={shoudlDisableButton}
                                className="rounded-xl border px-5 py-3 hover:bg-gray-200 disabled:bg-gray-300"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                    {
                        <NewMusicPopup
                            // key={Math.random()}
                            shouldShow={showPopup}
                            onClose={() => setShowPopup(false)}
                        />
                    }
                </div>
            </div>
            {showModal && (
                <InformationModal onClose={() => setShowModal(false)} />
            )}
        </>
    );
}

function InformationModal({ onClose }) {
    return (
        <Modal>
            <div className="relative px-5 py-6 md:px-6  md:py-8">
                <img
                    src={closeUrl}
                    alt="close button"
                    className="absolute top-0 right-2 h-5 w-5 cursor-pointer"
                    onClick={onClose}
                />
                <div className="flex flex-col gap-1 lg:gap-3">
                    <p className="text-xl lg:text-3xl">Instructions</p>
                    <ol className="flex flex-col gap-2 [&>li]:flex [&>li]:gap-2 [&>li]:lg:text-lg">
                        <li>
                            <span>1.</span>
                            <span>
                                Find a quiet place for this task and minimize
                                distractions.
                            </span>
                        </li>
                        <li>
                            <span>2.</span>
                            <span>
                                Listen to the whole song (some have silence
                                intentionally included).
                            </span>
                        </li>
                        <li>
                            <span>3.</span>
                            <span>
                                Choose all the emotions you felt while listening
                                to the song.
                            </span>
                        </li>
                        <li>
                            <span>4.</span>
                            <span>
                                Press the arrow button to submit. A new song
                                will be loaded after submission.
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
                    <ul className="flex flex-col gap-2 [&>li]:flex [&>li]:gap-1 [&>li]:lg:text-lg">
                        <li>
                            <span>&#8226;</span>
                            <span>
                                Perceived emotions are emotions expressed by the
                                music
                            </span>
                        </li>
                        <li>
                            <span>&#8226;</span>
                            <span>
                                Felt emotions are emotions the music made you
                                feel while and after listening
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </Modal>
    );
}

function NewMusicPopup({ shouldShow, onClose }) {
    const POPUP_LIFE_SPAN = 5000;

    const [isTransitioning, setIsTransitioning] = useState(false);
    const [shouldFade, setShouldFade] = useState(false);
    const [shouldScale, setShouldScale] = useState(false);

    const transitionStyle = {
        transition: 'transform 350ms ease-in, opacity 1500ms ease-out',
        transformOrigin: 'bottom left',
    };

    //start transition to show the popup
    if (shouldShow && !isTransitioning) {
        setIsTransitioning(true);

        //call asynchronously so that that display:block can be given to the component first
        //so that we can transition properly
        setTimeout(() => {
            setShouldScale(true);
        }, 50);
    }

    return (
        <div
            className={clsx(
                'absolute bottom-4 left-4 scale-0 rounded-lg border',
                !shouldShow && 'hidden',
                shouldShow && 'block',
                shouldFade && 'opacity-0',
                shouldScale && 'scale-100'
            )}
            onTransitionEnd={(event) => {
                if (event.propertyName == 'opacity') {
                    //reset state after closing the popup
                    //so that it can open and close again
                    //without mounting a new component
                    setShouldFade(false);
                    setShouldScale(false);
                    setIsTransitioning(false);
                    onClose();
                } else if (event.propertyName == 'transform') {
                    console.log('transform end');
                    setTimeout(() => {
                        setShouldFade(true);
                    }, POPUP_LIFE_SPAN);
                }
            }}
            style={transitionStyle}
        >
            <p className="bg-yellow-200 px-5 py-3">New Music Loaded</p>

            <div className="absolute top-0 -right-0 grid h-6 w-6 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-red-900 bg-red-500 text-lg">
                <span className="relative -top-[2px] font-bold text-white">
                    !
                </span>
            </div>
        </div>
    );
}
