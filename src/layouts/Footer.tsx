// Version: 1.0.0
import React from "react";
import { Button } from "../components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Apple,
  Carrot,
  ChefHat,
  Leaf
} from "lucide-react";

function Footer() {
  return (
    <>
      <style>{`
        .theme-footer-bg {
          background: white;
          border-top: 1px solid rgb(var(--theme-primary-light) / 0.2);
        }
        
        .theme-footer-text {
          color: rgb(107, 114, 128);
        }
        
        .theme-footer-heading {
          color: rgb(17, 24, 39);
          font-weight: 600;
        }
        
        .theme-footer-link {
          color: rgb(107, 114, 128);
          transition: color 0.2s ease;
        }
        
        .theme-footer-link:hover {
          color: var(--theme-bg-primary-dark);
        }
        
        .theme-footer-social {
          background: rgba(var(--theme-primary-light), 0.1);
          color: var(--theme-bg-primary-dark);
          transition: all 0.2s ease;
        }
        
        .theme-footer-social:hover {
          background: var(--theme-bg-primary-dark);
          color: white;
        }
        
        .theme-footer-bottom {
          border-top: 1px solid rgb(var(--theme-primary-light) / 0.1);
          background: rgba(var(--theme-primary-light), 0.05);
        }
        
        .theme-footer-logo {
          background: linear-gradient(to bottom right, var(--theme-gradient-from), var(--theme-gradient-to));
        }
      `}</style>

      <footer className="theme-footer-bg">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full theme-footer-logo flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <div>
                  <span className="text-xl font-bold theme-footer-heading">Maato</span>
                  <div className="text-xs theme-footer-text -mt-1">Fresh & Natural</div>
                </div>
              </div>
              <p className="theme-footer-text text-sm leading-relaxed">
                Fresh, organic produce delivered to your doorstep. Quality guaranteed.
              </p>
              <div className="flex space-x-3">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 theme-footer-social hover:theme-footer-social">
                  <Facebook className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 theme-footer-social hover:theme-footer-social">
                  <Twitter className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 theme-footer-social hover:theme-footer-social">
                  <Instagram className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold theme-footer-heading">Quick Links</h3>
              <div className="space-y-2">
                <a href="/about" className="block text-sm theme-footer-link hover:theme-footer-link">About Us</a>
                <a href="/contact" className="block text-sm theme-footer-link hover:theme-footer-link">Contact</a>
                <a href="/delivery" className="block text-sm theme-footer-link hover:theme-footer-link">Delivery</a>
                <a href="/support" className="block text-sm theme-footer-link hover:theme-footer-link">Support</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold theme-footer-heading">Categories</h3>
              <div className="space-y-2">
                <a href="/fruits" className="flex items-center space-x-2 text-sm theme-footer-link hover:theme-footer-link">
                  <Apple className="h-3 w-3" />
                  <span>Fruits</span>
                </a>
                <a href="/vegetables" className="flex items-center space-x-2 text-sm theme-footer-link hover:theme-footer-link">
                  <Carrot className="h-3 w-3" />
                  <span>Vegetables</span>
                </a>
                <a href="/recipes" className="flex items-center space-x-2 text-sm theme-footer-link hover:theme-footer-link">
                  <ChefHat className="h-3 w-3" />
                  <span>Recipes</span>
                </a>
                <a href="/organic" className="flex items-center space-x-2 text-sm theme-footer-link hover:theme-footer-link">
                  <Leaf className="h-3 w-3" />
                  <span>Organic</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold theme-footer-heading">Contact</h3>
              <div className="space-y-2 text-sm theme-footer-text">
                <div className="flex items-center space-x-2">
                  <Mail className="h-3 w-3" />
                  <span>hello@maato.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-3 w-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-3 w-3" />
                  <span>Green City</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="theme-footer-bottom">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <div className="theme-footer-text text-sm">
                © 2025 Maato. All rights reserved.
              </div>
              <div className="flex space-x-4 text-sm">
                <a href="/privacy" className="theme-footer-link hover:theme-footer-link">Privacy</a>
                <a href="/terms" className="theme-footer-link hover:theme-footer-link">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
