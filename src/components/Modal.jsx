export default function Modal({ children }) {
    return (
        <div className="absolute top-0 z-[999] flex h-full w-full items-center justify-center p-2 backdrop-blur-sm backdrop-brightness-50">
            <div className="relative max-w-[800px] rounded-lg bg-white py-3">
                {children}
            </div>
        </div>
    );
}
