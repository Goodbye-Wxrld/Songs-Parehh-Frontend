export default function Modal({ children }) {
    return (
        <div className="absolute top-0 flex h-full w-full items-center justify-center p-2 backdrop-blur-sm backdrop-brightness-50">
            <div className="max-w-[800px] rounded-lg bg-white px-3 py-3 md:px-6 md:py-8">
                {children}
            </div>
        </div>
    );
}
