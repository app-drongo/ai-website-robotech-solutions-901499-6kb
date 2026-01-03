'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, Rocket, Code, Database, Cloud, ArrowRight } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  title: 'Powerful Features for Modern Development',
  subtitle: 'Everything you need to build, deploy, and scale your applications with confidence',
  ctaText: 'Explore All Features',
  ctaHref: '/features',
  features: [
    {
      title: 'Lightning Fast Deployment',
      description:
        'Deploy your applications in seconds with our optimized CI/CD pipeline and global edge network',
      badge: 'Performance',
    },
    {
      title: 'Enterprise Security',
      description:
        'Bank-grade security with end-to-end encryption, SOC 2 compliance, and advanced threat protection',
      badge: 'Security',
    },
    {
      title: 'Auto-Scaling Infrastructure',
      description:
        'Automatically scale your resources based on demand with zero downtime and intelligent load balancing',
      badge: 'Scalability',
    },
    {
      title: 'Developer Experience',
      description:
        'Intuitive APIs, comprehensive documentation, and powerful debugging tools for seamless development',
      badge: 'DX',
    },
    {
      title: 'Real-time Analytics',
      description:
        'Monitor performance, track user behavior, and gain insights with our advanced analytics dashboard',
      badge: 'Analytics',
    },
    {
      title: 'Global CDN',
      description:
        'Deliver content at lightning speed with our worldwide content delivery network and edge caching',
      badge: 'Performance',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  const renderIcon = (index: number) => {
    const iconClass = 'h-8 w-8';
    switch (index) {
      case 0:
        return <Zap className={iconClass} />;
      case 1:
        return <Shield className={iconClass} />;
      case 2:
        return <Rocket className={iconClass} />;
      case 3:
        return <Code className={iconClass} />;
      case 4:
        return <Database className={iconClass} />;
      case 5:
        return <Cloud className={iconClass} />;
      default:
        return <Zap className={iconClass} />;
    }
  };

  return (
    <section id="features" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {config.features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    {renderIcon(idx)}
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 transition-colors"
                  >
                    <span data-editable={`features[${idx}].badge`}>{feature.badge}</span>
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 group"
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
          >
            <span data-editable="ctaText">{config.ctaText}</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}
