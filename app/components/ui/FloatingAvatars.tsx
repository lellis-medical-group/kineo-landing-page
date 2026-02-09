const FloatingAvatars = () => {
    const avatars = [
        {
            position: 'top-8 left-[10%]',
            image: 'https://i.pravatar.cc/100?img=1',
            cursor: 'top-left'
        },
        {
            position: 'top-12 right-[12%]',
            image: 'https://i.pravatar.cc/100?img=5',
            cursor: 'top-right'
        },
        {
            position: 'bottom-16 left-[8%]',
            image: 'https://i.pravatar.cc/100?img=9',
            cursor: 'bottom-left'
        },
        {
            position: 'bottom-20 right-[10%]',
            image: 'https://i.pravatar.cc/100?img=12',
            cursor: 'bottom-right'
        },
    ];

    return (
        <>
            {avatars.map((avatar, index) => (
                <div
                    key={index}
                    className={`hidden lg:block absolute ${avatar.position} animate-float-${index}`}
                >
                    <div className="relative">
                        <div className="w-14 h-14 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200">
                            <img
                                src={avatar.image}
                                alt={`User ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className={`absolute ${avatar.cursor === 'top-left' ? '-top-1 -left-1' :
                            avatar.cursor === 'top-right' ? '-top-1 -right-1' :
                                avatar.cursor === 'bottom-left' ? '-bottom-1 -left-1' :
                                    '-bottom-1 -right-1'
                            }`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                                    fill="#004838"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default FloatingAvatars