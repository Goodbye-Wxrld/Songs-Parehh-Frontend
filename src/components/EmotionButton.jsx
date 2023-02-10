import { useState } from 'react';
import clsx from 'clsx';

export default function EmotionButton({
    emotion,
    className,
    onAnnotate,
    isSelected,
}) {
    const handleClick = () => {
        onAnnotate(emotion);
    };

    return (
        <div
            className={clsx(
                'w-2/5 cursor-pointer select-none rounded-full border-2 border-yellow-500 px-5 py-2 text-center hover:bg-yellow-400 active:bg-yellow-500 md:text-xl lg:w-full',
                isSelected && 'bg-yellow-500 lg:hover:bg-yellow-500',
                className
            )}
            onClick={handleClick}
        >
            {emotion}
        </div>
    );
}
