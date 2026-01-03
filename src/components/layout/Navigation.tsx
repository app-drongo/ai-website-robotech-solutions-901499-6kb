'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  brandName: 'RoboTech',
  brandTagline: 'Intelligent Robotics',
  navItems: [
    { label: 'Home', href: '#hero' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ],
  ctaText: 'Get Started',
  ctaHref: '#pricing',
  mobileMenuLabel: 'Open navigation menu',
  closeMenuLabel: 'Close navigation menu',
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  const handleCtaClick = () => {
    navigate(config.ctaHref);
    setIsMobileMenuOpen(false);
  };

  return (
    <section
      id="navigation"
      className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50"
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <Zap className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span
                className="text-lg font-bold text-foreground cursor-pointer hover:text-primary transition-colors"
                onClick={() => handleNavClick('#hero')}
                data-editable="brandName"
              >
                {config.brandName}
              </span>
              <span
                className="text-xs text-muted-foreground hidden sm:block"
                data-editable="brandTagline"
              >
                {config.brandTagline}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6" role="menubar">
              {config.navItems.map((item, idx) => (
                <li key={idx} role="none">
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-3 py-2 rounded-md hover:bg-accent/50"
                    role="menuitem"
                    data-editable-href={`navItems[${idx}].href`}
                    data-href={item.href}
                  >
                    <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <Button
              onClick={handleCtaClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-border hover:bg-accent"
                  aria-label={config.mobileMenuLabel}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-card text-card-foreground border-border w-80"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span
                        className="text-lg font-bold text-card-foreground"
                        data-editable="brandName"
                      >
                        {config.brandName}
                      </span>
                      <span className="text-xs text-muted-foreground" data-editable="brandTagline">
                        {config.brandTagline}
                      </span>
                    </div>
                  </div>
                </div>

                <nav className="flex flex-col space-y-4" role="navigation">
                  {config.navItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-card-foreground hover:text-primary transition-colors duration-200 font-medium p-3 rounded-md hover:bg-accent/50 border border-border"
                      data-editable-href={`navItems[${idx}].href`}
                      data-href={item.href}
                    >
                      <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                    </button>
                  ))}

                  <Button
                    onClick={handleCtaClick}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors mt-6 w-full"
                    data-editable-href="ctaHref"
                    data-href={config.ctaHref}
                  >
                    <span data-editable="ctaText">{config.ctaText}</span>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </section>
  );
}
