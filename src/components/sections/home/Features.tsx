'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Zap, Shield, BarChart3, Clock, Users, TrendingDown, Headphones } from 'lucide-react';

const DEFAULT_FEATURES = {
  title: 'Advanced Robotics Solutions',
  subtitle:
    'Cutting-edge technology designed to transform your operations with intelligent automation',
  features: [
    {
      title: 'AI-Powered Automation',
      description:
        'Advanced machine learning algorithms that adapt and optimize performance in real-time for maximum efficiency.',
    },
    {
      title: 'Seamless Integration',
      description:
        'Plug-and-play compatibility with existing systems, ensuring smooth deployment without operational disruption.',
    },
    {
      title: '24/7 Monitoring',
      description:
        'Continuous system surveillance with proactive alerts and automated maintenance scheduling.',
    },
    {
      title: 'Scalable Deployment',
      description:
        'Flexible architecture that grows with your business needs, from single units to enterprise-wide implementations.',
    },
    {
      title: 'Cost Reduction',
      description:
        'Significant operational savings through optimized workflows and reduced manual labor requirements.',
    },
    {
      title: 'Safety Protocols',
      description:
        'Comprehensive safety systems with emergency stops, collision detection, and compliance monitoring.',
    },
    {
      title: 'Real-Time Analytics',
      description:
        'Advanced data visualization and performance metrics to drive informed decision-making.',
    },
    {
      title: 'Expert Support',
      description:
        'Dedicated technical support team available around the clock for assistance and optimization.',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };

  const renderFeatureIcon = (index: number) => {
    const iconClass = 'h-8 w-8';
    switch (index) {
      case 0:
        return <Bot className={iconClass} />;
      case 1:
        return <Zap className={iconClass} />;
      case 2:
        return <Clock className={iconClass} />;
      case 3:
        return <Users className={iconClass} />;
      case 4:
        return <TrendingDown className={iconClass} />;
      case 5:
        return <Shield className={iconClass} />;
      case 6:
        return <BarChart3 className={iconClass} />;
      case 7:
        return <Headphones className={iconClass} />;
      default:
        return <Bot className={iconClass} />;
    }
  };

  return (
    <section id="features" className="bg-background text-foreground py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            <span data-editable="badgeText">Features</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {config.features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  {renderFeatureIcon(idx)}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            <span data-editable="ctaText">
              Ready to revolutionize your operations with RoboTech Solutions?
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2">
              <span data-editable="badge1">Enterprise Ready</span>
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <span data-editable="badge2">ISO Certified</span>
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <span data-editable="badge3">24/7 Support</span>
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
