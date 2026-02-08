import { Link } from "react-router";
import type { ReactNode } from "react";

interface ButtonProps {
    variant: 'primary' | 'ghost';
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    size?: 'sm' | 'md';
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
    };

    const variantStyles = {
        primary: `
            bg-[#E2FB6C]
            text-gray-900
            hover:bg-[#d4ed5f]
            border border-transparent
            active:scale-95
        `,
        ghost: `
            bg-transparent
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