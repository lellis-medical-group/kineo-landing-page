const Logo = () => {
    return (
        <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#004838] rounded-lg flex items-center justify-center">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="12" cy="12" r="10" fill="#E2FB6C" />

                    <path
                        d="M8 8L16 16M16 8L8 16M12 7V17"
                        stroke="#004838"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />

                    <circle cx="12" cy="12" r="1.5" fill="#004838" />
                </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">Kinéo</span>
        </a>
    );
};

export default Logo;