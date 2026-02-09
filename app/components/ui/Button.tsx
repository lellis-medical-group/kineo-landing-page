import { Link } from "react-router";
import type { ReactNode } from "react";

interface ButtonProps {
    variant: 'primary' | 'secondary' | 'ghost' | 'second_ghost';
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
        duration-200
        cursor-pointer
        inline-flex
        items-center
        justify-center
        outline-none
        /* Effet de profondeur de base */
        shadow-sm 
        hover:-translate-y-0.5 
        hover:shadow-md
        active:translate-y-0
        active:shadow-inner
        active:scale-[0.98]
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
            hover:shadow-[#E2FB6C]/20
        `,
        secondary: `
            bg-[#004838]
            text-[#E2FB6C]
            hover:bg-[#073127]
            border border-transparent
            hover:shadow-[#004838]/20
        `,
        ghost: `
            bg-white
            text-gray-700
            hover:text-gray-900
            border border-gray-200
            hover:border-gray-300
            hover:bg-gray-50
        `,
        second_ghost: `
            bg-white
            text-[#004838]
            hover:text-gray-900
            border border-gray-200
            hover:border-gray-300
            hover:bg-gray-50
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