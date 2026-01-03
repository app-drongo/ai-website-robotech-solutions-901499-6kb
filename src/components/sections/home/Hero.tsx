'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Zap, Shield, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Intelligent Robotics for Modern Business',
  subtitle:
    "Transform your operations with advanced automation that's simple to deploy and proven to deliver results",
  description:
    'Our scalable robotic solutions seamlessly integrate into your workflow, reducing costs by up to 40% while boosting productivity across manufacturing, logistics, and service industries.',
  primaryCtaText: 'Start Your Transformation',
  primaryCtaHref: '/get-started',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  heroImageUrl:
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
  heroImageAlt: 'Advanced robotic arm in modern manufacturing facility',
  trustBadge: 'Trusted by 500+ Companies',
  features: ['40% Cost Reduction', '99.9% Uptime Guarantee', '24/7 Expert Support'],
  stats: [
    { label: 'Efficiency Boost', value: '3x', icon: 'TrendingUp' },
    { label: 'Setup Time', value: '24hrs', icon: 'Zap' },
    { label: 'ROI Timeline', value: '6mo', icon: 'Shield' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePrimaryClick = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryClick = () => {
    setIsVideoPlaying(true);
    navigate(config.secondaryCtaHref);
  };

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="h-5 w-5" />;
      case 'Zap':
        return <Zap className="h-5 w-5" />;
      case 'Shield':
        return <Shield className="h-5 w-5" />;
      default:
        return <Zap className="h-5 w-5" />;
    }
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <Badge
              variant="secondary"
              className="bg-accent text-accent-foreground px-4 py-2 text-sm font-medium"
            >
              <span data-editable="trustBadge">{config.trustBadge}</span>
            </Badge>

            {/* Headlines */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span data-editable="title">{config.title}</span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                <span data-editable="description">{config.description}</span>
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {config.features.map((feature, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="bg-primary/5 text-primary border-primary/20 px-3 py-1"
                >
                  <span data-editable={`features[${idx}]`}>{feature}</span>
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="primaryCtaHref"
                data-href={config.primaryCtaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold group"
              >
                <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-semibold group"
              >
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {config.stats.map((stat, idx) => (
                <Card key={idx} className="bg-card text-card-foreground border-border">
                  <CardContent className="p-4 text-center">
                    <div className="flex justify-center mb-2 text-primary">
                      {getStatIcon(stat.icon)}
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-8">
              <Image
                src={config.heroImageUrl}
                alt={config.heroImageAlt}
                data-editable-src="heroImageUrl"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
                priority
              />

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-4 shadow-lg animate-pulse">
                <Zap className="h-6 w-6" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-full p-4 shadow-lg">
                <Shield className="h-6 w-6" />
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl transform rotate-3 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
