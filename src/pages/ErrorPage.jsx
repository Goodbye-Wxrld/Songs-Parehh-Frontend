import { useNavigate } from 'react-router';

export default function ErrorPage({ message }) {
    const navigate = useNavigate();
    return (
        <div className="flex h-full items-center justify-center p-3 md:p-8">
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 rounded-3xl bg-white p-5 md:p-16 lg:p-24">
                <div className="grid place-items-center gap-7">
                    <p className="font-heading text-8xl font-bold leading-none tracking-wider md:text-9xl lg:text-[300px]">
                        O
                        <span className="relative -top-[6px] text-5xl lg:-top-[20px] lg:text-[130px]">
                            😟
                        </span>
                        ps!
                    </p>
                    <p className="text-xl md:text-3xl lg:text-6xl">{message}</p>
                    <button
                        className="w-2/3 rounded-3xl bg-yellow-600 px-6 py-3 text-lg md:text-2xl lg:text-3xl"
                        onClick={() => navigate('/')}
                    >
                        Go to Homepage
                    </button>
                </div>
            </div>
        </div>
    );
}
