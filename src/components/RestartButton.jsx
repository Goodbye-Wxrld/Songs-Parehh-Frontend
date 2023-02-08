export default function ReplayButton({ onClick }) {
    return (
        <div className="h-5 w-5 cursor-pointer lg:h-8 lg:w-8" onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon stroke-black hover:stroke-yellow-700"
                viewBox="0 0 512 512"
            >
                <title>Refresh</title>
                <path
                    d="M320 146s24.36-12-64-12a160 160 0 10160 160"
                    fill="none"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="32"
                />
                <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M256 58l80 80-80 80"
                />
            </svg>{' '}
        </div>
    );
}
