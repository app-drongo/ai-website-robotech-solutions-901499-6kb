'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Rocket, Shield, Zap, Play, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  badge: 'Unified Deploy Platform',
  title: 'Deploy Anywhere, Manage Everything',
  subtitle:
    'Streamline your deployment pipeline with our unified platform. Deploy to any cloud, manage all environments, and scale with confidence.',
  primaryCta: 'Start Deploying',
  primaryCtaHref: '/signup',
  secondaryCta: 'Watch Demo',
  secondaryCtaHref: '/demo',
  heroImageUrl:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80',
  heroImageAlt: 'Modern deployment dashboard interface',
  features: [
    {
      title: 'Lightning Fast',
      description:
        'Deploy in seconds, not minutes. Our optimized infrastructure ensures rapid deployment cycles.',
    },
    {
      title: 'Enterprise Security',
      description:
        'Bank-grade security with end-to-end encryption, compliance monitoring, and audit trails.',
    },
    {
      title: 'Auto-Scale',
      description:
        'Intelligent scaling that adapts to your traffic patterns automatically, saving costs.',
    },
  ],
  stats: [
    { value: '99.9%', label: 'Uptime' },
    { value: '< 30s', label: 'Deploy Time' },
    { value: '50+', label: 'Integrations' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePrimaryCta = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryCta = () => {
    if (config.secondaryCtaHref === '/demo') {
      setIsVideoPlaying(true);
    } else {
      navigate(config.secondaryCtaHref);
    }
  };

  return (
    <section id="hero" className="relative bg-background text-foreground overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Rocket className="h-4 w-4 mr-2" />
                <span data-editable="badge">{config.badge}</span>
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span data-editable="title">{config.title}</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryCta}
                data-editable-href="primaryCtaHref"
                data-href={config.primaryCtaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
              >
                <span data-editable="primaryCta">{config.primaryCta}</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryCta}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="px-8 py-6 text-lg border-border hover:bg-accent"
              >
                <Play className="mr-2 h-5 w-5" />
                <span data-editable="secondaryCta">{config.secondaryCta}</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {config.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card">
              <Image
                src={config.heroImageUrl}
                alt={config.heroImageAlt}
                data-editable-src="heroImageUrl"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Overlay with play button for demo */}
              {!isVideoPlaying && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="lg"
                    onClick={handleSecondaryCta}
                    className="bg-white/90 text-black hover:bg-white rounded-full p-4"
                  >
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
              )}
            </div>

            {/* Floating feature cards */}
            <div className="absolute -bottom-6 -left-6 right-6 space-y-3">
              {config.features.map((feature, idx) => (
                <Card key={idx} className="bg-card/95 backdrop-blur-sm border-border shadow-lg">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="text-primary">
                      {idx === 0 && <Zap className="h-5 w-5" />}
                      {idx === 1 && <Shield className="h-5 w-5" />}
                      {idx === 2 && <CheckCircle className="h-5 w-5" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">
                        <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        <span data-editable={`features[${idx}].description`}>
                          {feature.description}
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
