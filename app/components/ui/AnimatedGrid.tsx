const AnimatedGrid = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-white">
            <div
                className="absolute inset-0 animate-grid-move"
                style={{
                    backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 23px,
              #000000 23px,
              #000000 24px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 23px,
              #000000 23px,
              #000000 24px
            )
          `,
                    backgroundSize: '24px 24px',
                    opacity: 0.20
                }}
            />

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
            radial-gradient(
              ellipse 70% 60% at 50% 50%,
              transparent 0%,
              transparent 30%,
              rgba(255, 255, 255, 0.3) 50%,
              rgba(255, 255, 255, 0.7) 70%,
              rgb(255, 255, 255) 100%
            )
          `
                }}
            />

            <div className="absolute inset-0 bg-linear-to-r from-white/50 via-transparent to-white/50 pointer-events-none" />
            <div className="absolute inset-0 bg-linear-to-b from-white/40 via-transparent to-white/40 pointer-events-none" />
        </div>
    );
};

export default AnimatedGrid;