'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Assess.ng"
              width={140}
              height={30}
              className="h-8 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-700 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#process" className="text-gray-700 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors">
                How it Works
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors">
                Benefits
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-brand-green">
              Sign In
            </Button>
            <Button className="bg-brand-green hover:bg-brand-green/90 text-white">
              Get Started Free
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a href="#features" className="text-gray-700 hover:text-brand-green block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#process" className="text-gray-700 hover:text-brand-green block px-3 py-2 text-base font-medium">
                How it Works
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-brand-green block px-3 py-2 text-base font-medium">
                Benefits
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-brand-green block px-3 py-2 text-base font-medium">
                Pricing
              </a>
              <div className="pt-4 pb-3 border-t border-gray-100">
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" className="text-gray-700 hover:text-brand-green justify-start">
                    Sign In
                  </Button>
                  <Button className="bg-brand-green hover:bg-brand-green/90 text-white">
                    Get Started Free
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}