import { Link } from "react-router";
import type { ReactNode } from "react";

interface ButtonProps {
    variant: 'primary' | 'secondary' | 'ghost';
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

const Button = ({
    variant,
    children,
    onClick,
    href,
    size = 'md',
    fullWidth = false
}: ButtonProps) => {
    const baseStyles = `
        font-medium
        rounded-lg
        transition-all
        cursor-pointer
        inline-flex
        items-center
        justify-center
        ${fullWidth ? 'w-full' : ''}
    `;

    const sizeStyles = {
        sm: 'px-3 py-1.5 text-xs sm:text-sm',
        md: 'px-4 sm:px-5 py-2 sm:py-2.5 text-sm',
        lg: 'px-6 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg',
    };

    const variantStyles = {
        primary: `
            bg-[#E2FB6C]
            text-gray-900
            hover:bg-[#d4ed5f]
            border border-transparent
            active:scale-95
        `,
        secondary: `
            bg-[#004838]
            text-[#E2FB6C]
            hover:bg-[#073127]
            border border-transparent
            active:scale-95
        `,
        ghost: `
            bg-white
            text-gray-700
            hover:text-gray-900
            border border-gray-300
            hover:border-gray-400
            hover:bg-gray-50
            active:scale-95
        `,
    };

    const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`;

    if (href) {
        return (
            <Link to={href} className={combinedStyles}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedStyles}>
            {children}
        </button>
    );
};

export default Button;