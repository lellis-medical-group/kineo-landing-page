const Logo = () => {
    return (
        <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#004838] rounded-lg flex items-center justify-center">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 3L4 7V17L12 21L20 17V7L12 3Z"
                        fill="#E2FB6C"
                        stroke="#E2FB6C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 3V21M4 7L20 17M20 7L4 17"
                        stroke="#004838"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            {/* Texte du logo */}
            <span className="text-xl font-semibold text-gray-900">Clause</span>
        </a>
    );
};

export default Logo;