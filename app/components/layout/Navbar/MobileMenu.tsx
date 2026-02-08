import { useEffect } from 'react';
import NavLinkC from './NavlinkC';
import Button from '~/components/ui/Button';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <div
                className={`
                    fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden
                    transition-opacity duration-300 z-40
                    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
                onClick={onClose}
                aria-hidden="true"
            />

            <div
                className={`
                    fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white
                    shadow-2xl lg:hidden overflow-y-auto z-50
                    transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className="px-6 py-8 space-y-6">
                    <div className="flex flex-col gap-4">
                        <div className="border-b border-gray-100 pb-2" onClick={onClose}>
                            <NavLinkC href="/solutions">Solutions</NavLinkC>
                        </div>
                        <div className="border-b border-gray-100 pb-2" onClick={onClose}>
                            <NavLinkC href="/customers">Customers</NavLinkC>
                        </div>
                        <div className="border-b border-gray-100 pb-2" onClick={onClose}>
                            <NavLinkC href="/pricing">Pricing</NavLinkC>
                        </div>
                    </div>

                    <div className="pt-4 space-y-3">
                        <Button variant="ghost" fullWidth href="/login" onClick={onClose}>
                            Log In
                        </Button>
                        <Button variant="primary" fullWidth href="/start" onClick={onClose}>
                            Start free
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;