// Version: 1.0.0

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import { Button } from "../components/ui/button";
import { 
  ShoppingCart, 
  User, 
  Heart, 
  Search, 
  Menu, 
  X,
  Apple,
  Carrot,
  ChefHat,
  Leaf,
  Star
} from "lucide-react";
import { Input } from "../components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [cartCount] = useState<number>(3);
  const [favoritesCount] = useState<number>(5);

  return (
    <>
      {/* CSS Custom Properties for theming */}
      <style>{`
        :root {
          /* Primary Theme Colors - Change these to update entire theme */
          --theme-primary: 34 197 94;        /* green-500 */
          --theme-primary-dark: 22 163 74;   /* green-600 */
          --theme-primary-darker: 21 128 61; /* green-700 */
          --theme-primary-light: 34 197 94;  /* green-500 with opacity */
          --theme-accent: 251 146 60;        /* orange-400 */
          --theme-error: 239 68 68;          /* red-500 */
          
          /* Semantic colors based on primary */
          --theme-bg-primary: rgb(var(--theme-primary));
          --theme-bg-primary-dark: rgb(var(--theme-primary-dark));
          --theme-bg-primary-darker: rgb(var(--theme-primary-darker));
          --theme-bg-accent: rgb(var(--theme-accent));
          --theme-bg-error: rgb(var(--theme-error));
          
          /* Hover and focus states */
          --theme-hover-bg: rgb(var(--theme-primary-light) / 0.1);
          --theme-hover-text: rgb(var(--theme-primary-dark));
          --theme-border: rgb(var(--theme-primary-light) / 0.2);
          --theme-focus-ring: rgb(var(--theme-primary));
          
          /* Gradients */
          --theme-gradient-from: rgb(var(--theme-primary));
          --theme-gradient-to: rgb(var(--theme-primary-dark));
          --theme-gradient-hover-from: rgb(var(--theme-primary-dark));
          --theme-gradient-hover-to: rgb(var(--theme-primary-darker));
          
          /* Text colors */
          --theme-text-primary: rgb(var(--theme-primary-dark));
          --theme-text-gradient: linear-gradient(to right, rgb(var(--theme-primary-dark)), rgb(var(--theme-primary-darker)));
        }
        
        .theme-gradient-bg {
          background: linear-gradient(to bottom right, var(--theme-gradient-from), var(--theme-gradient-to));
        }
        
        .theme-gradient-hover-bg {
          background: linear-gradient(to right, var(--theme-gradient-hover-from), var(--theme-gradient-hover-to));
        }
        
        .theme-text-gradient {
          background: var(--theme-text-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .theme-border {
          border-color: var(--theme-border);
        }
        
        .theme-hover:hover {
          background-color: var(--theme-hover-bg);
          color: var(--theme-hover-text);
        }
        
        .theme-focus:focus {
          outline: none;
          ring: 2px solid var(--theme-focus-ring);
          border-color: transparent;
        }
        
        .theme-input {
          background-color: rgb(var(--theme-primary-light) / 0.05);
          border-color: var(--theme-border);
        }
        
        .theme-input:focus {
          background-color: rgb(var(--theme-primary-light) / 0.08);
          ring: 2px solid var(--theme-focus-ring);
          border-color: transparent;
        }
      `}</style>

      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b shadow-sm theme-border">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Brand Logo */}
            <div className="flex items-center space-x-3 mr-2">
              <div className="relative">
                <div className="h-10 w-10 rounded-full theme-gradient-bg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full animate-pulse" style={{backgroundColor: 'var(--theme-bg-accent)'}}></div>
              </div>
              <div>
                <span className="text-2xl font-bold theme-text-gradient">
                  Maato
                </span>
                <div className="text-xs font-medium -mt-1" style={{color: 'var(--theme-text-primary)'}}>Fresh & Natural</div>
              </div>
            </div>

            {/* Desktop Navigation using shadcn NavigationMenu */}
            <div className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent theme-hover">
                      <Apple className="h-4 w-4 mr-2" />
                      Fruits
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                        <div className="grid grid-cols-2 gap-4">
                          <NavigationMenuLink asChild>
                            <a href="/fruits/citrus" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors theme-hover">
                              <div className="text-sm font-medium leading-none">Citrus Fruits</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Fresh oranges, lemons, limes & more
                              </p>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="/fruits/berries" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors theme-hover">
                              <div className="text-sm font-medium leading-none">Berries</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Strawberries, blueberries, raspberries
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent theme-hover">
                      <Carrot className="h-4 w-4 mr-2" />
                      Vegetables
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                        <div className="grid grid-cols-2 gap-4">
                          <NavigationMenuLink asChild>
                            <a href="/vegetables/leafy" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors theme-hover">
                              <div className="text-sm font-medium leading-none">Leafy Greens</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Spinach, kale, lettuce & herbs
                              </p>
                            </a>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a href="/vegetables/root" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors theme-hover">
                              <div className="text-sm font-medium leading-none">Root Vegetables</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Carrots, potatoes, onions & more
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <a href="/recipes" className="bg-transparent theme-hover">
                        <ChefHat className="h-4 w-4 mr-2" />
                        Recipes
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <a href="/organic" className="bg-transparent theme-hover">
                        <Leaf className="h-4 w-4 mr-2" />
                        Organic
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <a href="/seasonal" className="bg-transparent theme-hover">
                        <Star className="h-4 w-4 mr-2" />
                        Seasonal
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input type="text" placeholder="Search fresh produce..." className="w-full pl-9 pr-4 py-2 border rounded-md transition-all theme-input theme-focus"/>
              </div>
            </div>

            {/* Right Side Actions using shadcn Button */}
            <div className="flex items-center space-x-2">
              {/* Search - Mobile */}
              <Button variant="ghost" size="sm" className="md:hidden">
                <Search className="h-4 w-4" />
              </Button>

              {/* Favorites */}
              <Button variant="ghost" size="sm" className="relative hover:bg-red-50 hover:text-red-500">
                <Heart className="h-4 w-4" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full text-xs text-white flex items-center justify-center font-medium" style={{backgroundColor: 'var(--theme-bg-error)'}}>
                    {favoritesCount}
                  </span>
                )}
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="sm" className="relative theme-hover">
                <ShoppingCart className="h-4 w-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full text-xs text-white flex items-center justify-center font-medium" style={{backgroundColor: 'var(--theme-bg-primary-dark)'}}>
                    {cartCount}
                  </span>
                )}
              </Button>

              {/* User Account */}
              <Button className="hidden sm:flex text-white shadow-lg hover:shadow-xl theme-gradient-bg hover:theme-gradient-hover-bg">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t bg-white/95 backdrop-blur theme-border">
              <div className="py-4 space-y-2">
                {/* Mobile Search */}
                <div className="px-4 mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search fresh produce..."
                      className="w-full pl-10 pr-4 py-2 border rounded-md theme-input theme-focus"
                    />
                  </div>
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-1 px-2">
                  <NavigationMenuLink asChild>
                    <a href="/fruits" className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 transition-colors theme-hover">
                      <Apple className="h-4 w-4" />
                      <span>Fruits</span>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/vegetables" className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 transition-colors theme-hover">
                      <Carrot className="h-4 w-4" />
                      <span>Vegetables</span>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/recipes" className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 transition-colors theme-hover">
                      <ChefHat className="h-4 w-4" />
                      <span>Recipes</span>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/organic" className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 transition-colors theme-hover">
                      <Leaf className="h-4 w-4" />
                      <span>Organic</span>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/seasonal" className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 transition-colors theme-hover">
                      <Star className="h-4 w-4" />
                      <span>Seasonal</span>
                    </a>
                  </NavigationMenuLink>
                </div>

                {/* Mobile Sign In */}
                <div className="px-4 pt-4 border-t theme-border">
                  <Button className="w-full text-white shadow-lg theme-gradient-bg hover:theme-gradient-hover-bg">
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;