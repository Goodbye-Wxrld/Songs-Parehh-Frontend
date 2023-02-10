export default function ReplayButton({ onClick }) {
    return (
        <div className="h-5 w-5 cursor-pointer lg:h-8 lg:w-8" onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon stroke-black lg:hover:stroke-yellow-700"
                viewBox="0 0 512 512"
            >
                <title>Refresh</title>
                <path
                    d="M320 146s24.36-12-64-12a160 160 0 10160 160"
                    fill="none"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                />
                <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M256 58l80 80-80 80"
                />
            </svg>
        </div>
    );
}
