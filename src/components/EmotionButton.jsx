import { useState } from 'react';
import clsx from 'clsx';

export default function EmotionButton({ emotion, className, onAnnotate }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        onAnnotate(emotion);
        setIsActive((isActive) => !isActive);
    };

    return (
        <div
            className={clsx(
                'w-2/5 cursor-pointer select-none rounded-full border-2 border-yellow-500 px-5 py-2 text-center hover:bg-yellow-400 active:bg-yellow-500 md:text-xl lg:w-full',
                isActive && 'bg-yellow-500 hover:bg-yellow-500',
                className
            )}
            onClick={handleClick}
        >
            {emotion}
        </div>
    );
}
