'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  title: 'Intelligent Robotics Solutions',
  subtitle: 'Choose the perfect automation package to transform your business operations',
  billingToggle: 'Monthly',
  plans: [
    {
      name: 'Starter',
      description: 'Perfect for small businesses exploring automation',
      monthlyPrice: '$2,999',
      yearlyPrice: '$29,990',
      popular: false,
      features: [
        'Single robotic unit deployment',
        'Basic automation workflows',
        'Email support & training',
        'Standard integration support',
        'Monthly performance reports',
      ],
      ctaText: 'Start Automating',
      ctaHref: '/contact?plan=starter',
    },
    {
      name: 'Professional',
      description: 'Advanced robotics for growing operations',
      monthlyPrice: '$7,999',
      yearlyPrice: '$79,990',
      popular: true,
      features: [
        'Up to 5 robotic units',
        'Advanced AI-powered workflows',
        'Priority support & dedicated training',
        'Custom integration development',
        'Real-time analytics dashboard',
        '24/7 monitoring & maintenance',
      ],
      ctaText: 'Scale Your Business',
      ctaHref: '/contact?plan=professional',
    },
    {
      name: 'Enterprise',
      description: 'Complete automation transformation for large operations',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      popular: false,
      features: [
        'Unlimited robotic fleet',
        'Custom AI model development',
        'Dedicated success manager',
        'White-glove implementation',
        'Advanced security & compliance',
        'ROI guarantee program',
      ],
      ctaText: 'Contact Sales',
      ctaHref: '/contact?plan=enterprise',
    },
  ],
  guaranteeText: '30-day money-back guarantee',
  supportText: 'All plans include seamless integration and reliable ongoing support',
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [isYearly, setIsYearly] = useState(false);

  const handlePlanSelect = (href: string) => {
    navigate(href);
  };

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section id="pricing" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
            >
              Monthly
            </span>
            <button
              onClick={toggleBilling}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[checked]:bg-primary"
              data-checked={isYearly}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className={`text-sm ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
            >
              Yearly
            </span>
            {isYearly && (
              <Badge variant="secondary" className="ml-2">
                Save 20%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {config.plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative ${
                plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <h3 className="text-xl font-bold mb-2">
                  <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                </h3>
                <p className="text-muted-foreground mb-6">
                  <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                </p>

                <div className="mb-6">
                  <div className="text-4xl font-bold mb-1">
                    <span
                      data-editable={`plans[${idx}].${isYearly ? 'yearlyPrice' : 'monthlyPrice'}`}
                    >
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                  </div>
                  {plan.monthlyPrice !== 'Custom' && (
                    <p className="text-sm text-muted-foreground">
                      per {isYearly ? 'year' : 'month'}
                    </p>
                  )}
                </div>

                <Button
                  onClick={() => handlePlanSelect(plan.ctaHref)}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                  data-editable-href={`plans[${idx}].ctaHref`}
                  data-href={plan.ctaHref}
                >
                  <span data-editable={`plans[${idx}].ctaText`}>{plan.ctaText}</span>
                  <Zap className="w-4 h-4 ml-2" />
                </Button>
              </CardHeader>

              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <span data-editable={`plans[${idx}].features[${featureIdx}]`}>
                          {feature}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-sm text-muted-foreground">
            <span data-editable="guaranteeText">{config.guaranteeText}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            <span data-editable="supportText">{config.supportText}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
