const FloatingAvatars = () => {
    const avatars = [
        {
            position: 'top-10 left-[10%]',
            image: 'https://i.pravatar.cc/100?img=5',
        },
        {
            position: 'top-16 right-[12%]',
            image: 'https://i.pravatar.cc/100?img=13',
        },
        {
            position: 'bottom-20 left-[8%]',
            image: 'https://i.pravatar.cc/100?img=34',
        },
        {
            position: 'bottom-24 right-[10%]',
            image: 'https://i.pravatar.cc/100?img=49',
        },
    ];

    return (
        <>
            {avatars.map((avatar, index) => (
                <div
                    key={index}
                    className={`hidden lg:block absolute ${avatar.position} animate-float-${index}`}
                >
                    <div className="w-14 h-14 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200">
                        <img
                            src={avatar.image}
                            alt={`User ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default FloatingAvatars;