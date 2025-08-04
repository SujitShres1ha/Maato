// Version: 1.0.0
import React from "react";
import { Button } from "../../components/ui/button";
import { ShoppingCart, Truck, Shield, Leaf, Apple, Carrot, Cherry, Star } from "lucide-react";
import { FeatureCard, CategoryCard, HeroStats, Section } from "../../components/common/HomeComponents";

function Home() {
  const heroStats = [
    { value: "500+", label: "Happy Customers" },
    { value: "100%", label: "Organic" },
    { value: "24h", label: "Delivery" }
  ];

  const features = [
    {
      icon: Leaf,
      title: "100% Organic",
      description: "Certified organic produce from trusted local farmers",
      iconColor: "text-green-600",
      iconBgColor: "bg-green-100"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery available for orders placed before 2 PM",
      iconColor: "text-blue-600",
      iconBgColor: "bg-blue-100"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Hand-picked produce ensuring maximum freshness and flavor",
      iconColor: "text-yellow-600",
      iconBgColor: "bg-yellow-100"
    },
    {
      icon: Shield,
      title: "Money Back",
      description: "100% satisfaction guarantee or your money back",
      iconColor: "text-purple-600",
      iconBgColor: "bg-purple-100"
    }
  ];

  const categories = [
    {
      icon: Apple,
      title: "Fresh Fruits",
      description: "Seasonal fruits picked at peak ripeness for maximum flavor and nutrition",
      buttonText: "Shop Fruits",
      iconColor: "text-red-600",
      iconBgColor: "bg-red-100",
      hoverColor: "group-hover:bg-red-200",
      onButtonClick: () => console.log("Navigate to fruits")
    },
    {
      icon: Carrot,
      title: "Vegetables",
      description: "Farm-fresh vegetables harvested daily for optimal taste and nutrition",
      buttonText: "Shop Vegetables",
      iconColor: "text-green-600",
      iconBgColor: "bg-green-100",
      hoverColor: "group-hover:bg-green-200",
      onButtonClick: () => console.log("Navigate to vegetables")
    },
    {
      icon: Cherry,
      title: "Organic",
      description: "Certified organic produce grown without harmful pesticides or chemicals",
      buttonText: "Shop Organic",
      iconColor: "text-purple-600",
      iconBgColor: "bg-purple-100",
      hoverColor: "group-hover:bg-purple-200",
      onButtonClick: () => console.log("Navigate to organic")
    }
  ];

  return (
    <>
      <style>{`
        /* Home-specific theme extensions */
        .theme-hero-bg {
          background: linear-gradient(to bottom, rgb(var(--theme-primary-light) / 0.1), white);
        }
        
        .theme-hero-title {
          color: rgb(var(--theme-primary-darker));
        }
        
        .theme-hero-highlight {
          color: var(--theme-bg-primary-dark);
        }
        
        .theme-hero-description {
          color: rgb(107, 114, 128);
        }
        
        .theme-primary-button {
          background: var(--theme-gradient-from);
          color: white;
        }
        
        .theme-primary-button:hover {
          background: var(--theme-gradient-to);
        }
        
        .theme-secondary-button {
          border-color: var(--theme-bg-primary-dark);
          color: var(--theme-bg-primary-dark);
        }
        
        .theme-secondary-button:hover {
          background-color: rgb(var(--theme-primary-light) / 0.1);
        }
        
        .theme-stat-value {
          color: var(--theme-bg-primary-dark);
        }
        
        .theme-stat-label {
          color: rgb(107, 114, 128);
        }
        
        .theme-section-title {
          color: rgb(17, 24, 39);
        }
        
        .theme-section-subtitle {
          color: rgb(107, 114, 128);
        }
        
        .theme-card {
          background: white;
          border-color: rgb(var(--theme-primary-light) / 0.1);
        }
        
        .theme-card-title {
          color: rgb(17, 24, 39);
        }
        
        .theme-card-description {
          color: rgb(107, 114, 128);
        }
        
        .theme-feature-icon-bg {
          transition: background-color 0.3s ease;
        }
        
        .theme-feature-icon {
          transition: color 0.3s ease;
        }
        
        .theme-category-card {
          background: white;
          border-color: rgb(var(--theme-primary-light) / 0.1);
        }
        
        .theme-category-title {
          color: rgb(17, 24, 39);
        }
        
        .theme-category-description {
          color: rgb(107, 114, 128);
        }
        
        .theme-category-icon-bg {
          transition: background-color 0.3s ease;
        }
        
        .theme-category-icon {
          transition: color 0.3s ease;
        }
        
        .theme-category-button {
          border-color: rgb(var(--theme-primary-light) / 0.3);
          color: rgb(75, 85, 99);
        }
        
        .theme-category-button:hover {
          background-color: rgb(var(--theme-primary-light) / 0.1);
          border-color: var(--theme-bg-primary-dark);
          color: var(--theme-bg-primary-dark);
        }
        
        .theme-cta-bg {
          background: linear-gradient(to right, var(--theme-gradient-from), var(--theme-gradient-to));
        }
        
        .theme-cta-title {
          color: white;
        }
        
        .theme-cta-description {
          color: rgba(255, 255, 255, 0.9);
        }
        
        .theme-cta-primary-button {
          background: white;
          color: var(--theme-bg-primary-dark);
        }
        
        .theme-cta-primary-button:hover {
          background: rgb(243, 244, 246);
        }
        
        .theme-cta-secondary-button {
          border-color: white;
          color: white;
        }
        
        .theme-cta-secondary-button:hover {
          background: white;
          color: var(--theme-bg-primary-dark);
        }
      `}</style>

      <div className="min-h-screen theme-hero-bg">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight theme-hero-title">
                    Fresh & Natural
                    <span className="block theme-hero-highlight">Produce Delivered</span>
                  </h1>
                  <p className="text-xl leading-relaxed theme-hero-description">
                    Get the freshest fruits, vegetables, and organic produce delivered straight to your doorstep. 
                    Quality guaranteed, farmer fresh.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="px-8 py-3 text-base theme-primary-button hover:theme-primary-button">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Shop Now
                  </Button>
                  <Button variant="outline" className="px-8 py-3 text-base theme-secondary-button hover:theme-secondary-button">
                    View Products
                  </Button>
                </div>

                {/* Hero Stats */}
                <HeroStats stats={heroStats} />
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="relative z-10">
                  <img 
                    src="/src/assets/mato_banner.jpg" 
                    alt="Fresh produce banner" 
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-50" style={{backgroundColor: 'rgb(var(--theme-primary-light) / 0.3)'}}></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-30" style={{backgroundColor: 'var(--theme-bg-accent)'}}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <Section
          title="Why Choose Maato?"
          subtitle="We're committed to bringing you the freshest, highest quality produce with unmatched convenience."
          className="bg-white"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconColor={feature.iconColor}
                iconBgColor={feature.iconBgColor}
              />
            ))}
          </div>
        </Section>

        {/* Categories Section */}
        <Section
          title="Shop by Category"
          subtitle="Discover our wide range of fresh produce"
          className="bg-gray-50"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                icon={category.icon}
                title={category.title}
                description={category.description}
                buttonText={category.buttonText}
                iconColor={category.iconColor}
                iconBgColor={category.iconBgColor}
                hoverColor={category.hoverColor}
                onButtonClick={category.onButtonClick}
              />
            ))}
          </div>
        </Section>

       
      </div>
    </>
  );
}

export default Home;
