// Version: 1.0.0
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  iconBgColor?: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  iconColor = "text-green-600",
  iconBgColor = "bg-green-100",
  className = ""
}) => {
  return (
    <Card className={`text-center hover:shadow-lg transition-all duration-300 hover:scale-105 theme-card ${className}`}>
      <CardHeader>
        <div className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4 theme-feature-icon-bg`}>
          <Icon className={`h-8 w-8 ${iconColor} theme-feature-icon`} />
        </div>
        <CardTitle className="theme-card-title">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="theme-card-description">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  iconColor?: string;
  iconBgColor?: string;
  hoverColor?: string;
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  icon: Icon,
  title,
  description,
  buttonText,
  onButtonClick,
  iconColor = "text-red-600",
  iconBgColor = "bg-red-100",
  hoverColor = "group-hover:bg-red-200",
  className = ""
}) => {
  return (
    <div className={`group cursor-pointer ${className}`} onClick={onButtonClick}>
      <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105 theme-category-card">
        <div className={`w-20 h-20 ${iconBgColor} ${hoverColor} rounded-full flex items-center justify-center mx-auto mb-6 transition-colors theme-category-icon-bg`}>
          <Icon className={`h-10 w-10 ${iconColor} theme-category-icon`} />
        </div>
        <CardTitle className="text-2xl font-bold mb-3 theme-category-title">{title}</CardTitle>
        <CardDescription className="mb-6 theme-category-description">{description}</CardDescription>
        <Button 
          variant="outline" 
          className="theme-category-button"
          onClick={(e) => {
            e.stopPropagation();
            onButtonClick?.();
          }}
        >
          {buttonText}
        </Button>
      </Card>
    </div>
  );
};

interface HeroStatsProps {
  stats: Array<{
    value: string;
    label: string;
  }>;
  className?: string;
}

export const HeroStats: React.FC<HeroStatsProps> = ({ stats, className = "" }) => {
  return (
    <div className={`grid grid-cols-3 gap-6 pt-8 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl font-bold theme-stat-value">{stat.value}</div>
          <div className="text-sm theme-stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = "",
  containerClassName = ""
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className={`container mx-auto px-4 ${containerClassName}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 theme-section-title">{title}</h2>
          {subtitle && (
            <p className="max-w-2xl mx-auto theme-section-subtitle">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};
