import { useGoogleLogin } from '@react-oauth/google';
import headphonesUrl from '../assets/headphones.webp';

export default function HomePage() {
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => console.log(codeResponse),
    });

    return (
        <div className="flex h-full w-full justify-center overflow-hidden lg:items-center">
            <div className="container relative flex w-full flex-col px-12 lg:flex-row-reverse lg:justify-between">
                <div className="relative z-10 flex h-5/6 flex-col items-center justify-around gap-10 lg:w-1/2 lg:items-end lg:gap-10">
                    <div className="flex flex-col gap-5">
                        <p className="text-center font-heading text-6xl leading-snug lg:text-end lg:text-8xl">
                            Songs Parehhh
                        </p>
                        <p className="weight- text-center text-3xl font-semibold text-white lg:text-end lg:text-5xl">
                            Relax, listen, and express.
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-6">
                        <button
                            onClick={() => login()}
                            className="w-48 rounded-3xl bg-white py-2 text-xl hover:bg-slate-50 active:bg-slate-100 md:text-3xl"
                        >
                            Login
                        </button>
                        <button className="w-48 rounded-3xl bg-white py-2 text-xl hover:bg-slate-50 active:bg-slate-100 md:text-3xl">
                            Register
                        </button>
                    </div>
                </div>
                <div className="absolute top-1/2 -left-1/4 z-0 flex w-1/3 min-w-[400px] max-w-xl flex-col items-center md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 lg:static lg:translate-x-0 lg:translate-y-0">
                    <img src={headphonesUrl} />
                </div>
            </div>
        </div>
    );
}
