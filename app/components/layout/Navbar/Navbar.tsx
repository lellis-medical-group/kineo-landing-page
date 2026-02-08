import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import NavLinkC from './NavlinkC';
import Logo from '~/components/ui/Logo';
import Button from '~/components/ui/Button';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMouseEnter = (menu: string) => {
        setActiveDropdown(menu);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <Logo />

                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('solutions')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <NavLinkC href="/solutions" >
                                Solutions
                                {/* <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === 'solutions' ? 'rotate-180' : ''
                  }`}
                /> */}
                            </NavLinkC>
                        </div>

                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter('customers')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <NavLinkC href="/customers" >
                                Customers
                            </NavLinkC>
                        </div>

                        <NavLinkC href="/pricing">Pricing</NavLinkC>
                    </div>

                    <div className="hidden lg:flex items-center gap-3">
                        <Button variant="ghost" href='/login'>Log In</Button>
                        <Button variant="primary" href='/start'>Start free</Button>
                    </div>
                    <div className="flex lg:hidden items-center gap-3">
                        <Button variant="primary" size="sm" href='/start'>
                            Start free
                        </Button>
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </nav>
    );
};

export default Navbar;