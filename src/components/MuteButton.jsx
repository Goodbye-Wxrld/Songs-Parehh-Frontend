export default function MuteButton({ isMuted, onClick }) {
    return (
        <div className="h-5 w-5 cursor-pointer lg:h-8 lg:w-8" onClick={onClick}>
            {isMuted ? <MuteButtonIcon /> : <UnmuteButtonIcon />}
        </div>
    );
}

function UnmuteButtonIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon stroke-black hover:stroke-yellow-700"
            viewBox="0 0 512 512"
        >
            <title>Volume High</title>
            <path
                d="M126 192H56a8 8 0 00-8 8v112a8 8 0 008 8h69.65a15.93 15.93 0 0110.14 3.54l91.47 74.89A8 8 0 00240 392V120a8 8 0 00-12.74-6.43l-91.47 74.89A15 15 0 01126 192zM320 320c9.74-19.38 16-40.84 16-64 0-23.48-6-44.42-16-64M368 368c19.48-33.92 32-64.06 32-112s-12-77.74-32-112M416 416c30-46 48-91.43 48-160s-18-113-48-160"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
            />
        </svg>
    );
}

function MuteButtonIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon stroke-black hover:fill-yellow-700 hover:stroke-yellow-700"
            viewBox="0 0 512 512"
        >
            <title>Volume Mute</title>
            <path
                fill="none"
                // stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M416 432L64 80"
            />
            <path d="M224 136.92v33.8a4 4 0 001.17 2.82l24 24a4 4 0 006.83-2.82v-74.15a24.53 24.53 0 00-12.67-21.72 23.91 23.91 0 00-25.55 1.83 8.27 8.27 0 00-.66.51l-31.94 26.15a4 4 0 00-.29 5.92l17.05 17.06a4 4 0 005.37.26zM224 375.08l-78.07-63.92a32 32 0 00-20.28-7.16H64v-96h50.72a4 4 0 002.82-6.83l-24-24a4 4 0 00-2.82-1.17H56a24 24 0 00-24 24v112a24 24 0 0024 24h69.76l91.36 74.8a8.27 8.27 0 00.66.51 23.93 23.93 0 0025.85 1.69A24.49 24.49 0 00256 391.45v-50.17a4 4 0 00-1.17-2.82l-24-24a4 4 0 00-6.83 2.82zM125.82 336zM352 256c0-24.56-5.81-47.88-17.75-71.27a16 16 0 00-28.5 14.54C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 002.32 6.25l19.66 19.67a4 4 0 006.75-2A146.89 146.89 0 00352 256zM416 256c0-51.19-13.08-83.89-34.18-120.06a16 16 0 00-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 001.9 8.26l16.77 16.76a4 4 0 006.52-1.27C410.09 315.88 416 289.91 416 256z" />
            <path d="M480 256c0-74.26-20.19-121.11-50.51-168.61a16 16 0 10-27 17.22C429.82 147.38 448 189.5 448 256c0 47.45-8.9 82.12-23.59 113a4 4 0 00.77 4.55L443 391.39a4 4 0 006.4-1C470.88 348.22 480 307 480 256z" />
        </svg>
    );
}