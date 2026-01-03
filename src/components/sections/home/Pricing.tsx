'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Shield } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  title: 'Simple, Transparent Pricing',
  subtitle: "Choose the perfect plan for your startup's growth",
  plans: [
    {
      name: 'Starter',
      price: '29',
      period: 'month',
      description: 'Perfect for early-stage startups',
      features: [
        'Up to 5 team members',
        '10GB storage',
        'Basic analytics',
        'Email support',
        'Core integrations',
      ],
      ctaText: 'Start Free Trial',
      ctaHref: '/signup?plan=starter',
      popular: false,
    },
    {
      name: 'Growth',
      price: '99',
      period: 'month',
      description: 'Ideal for scaling teams',
      features: [
        'Up to 25 team members',
        '100GB storage',
        'Advanced analytics',
        'Priority support',
        'All integrations',
        'Custom workflows',
      ],
      ctaText: 'Get Started',
      ctaHref: '/signup?plan=growth',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '299',
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        '1TB storage',
        'Enterprise analytics',
        '24/7 phone support',
        'Custom integrations',
        'Advanced security',
        'Dedicated success manager',
      ],
      ctaText: 'Contact Sales',
      ctaHref: '/contact?plan=enterprise',
      popular: false,
    },
  ],
  guaranteeText: '30-day money-back guarantee',
  supportText: 'All plans include free onboarding',
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const handlePlanSelect = (href: string) => {
    navigate(href);
  };

  const getDiscountedPrice = (price: string) => {
    if (billingPeriod === 'yearly') {
      return Math.round(parseInt(price) * 0.8).toString();
    }
    return price;
  };

  return (
    <section id="pricing" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm ${billingPeriod === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                billingPeriod === 'yearly' ? 'bg-primary' : 'bg-muted'
              }`}
              aria-label="Toggle billing period"
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-background rounded-full transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className={`text-sm ${billingPeriod === 'yearly' ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              Yearly
            </span>
            {billingPeriod === 'yearly' && (
              <Badge variant="secondary" className="ml-2">
                Save 20%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {config.plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative bg-card text-card-foreground transition-all duration-300 hover:shadow-lg ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="mb-4 text-primary">
                  {idx === 0 && <Zap className="h-8 w-8 mx-auto" />}
                  {idx === 1 && <Star className="h-8 w-8 mx-auto" />}
                  {idx === 2 && <Shield className="h-8 w-8 mx-auto" />}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                </h3>

                <p className="text-muted-foreground mb-4">
                  <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                </p>

                <div className="mb-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">
                      $
                      <span data-editable={`plans[${idx}].price`}>
                        {getDiscountedPrice(plan.price)}
                      </span>
                    </span>
                    <span className="text-muted-foreground ml-1">
                      /
                      <span data-editable={`plans[${idx}].period`}>
                        {billingPeriod === 'yearly' ? 'year' : plan.period}
                      </span>
                    </span>
                  </div>
                  {billingPeriod === 'yearly' && (
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="line-through">${plan.price}/month</span> billed annually
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <span data-editable={`plans[${idx}].features[${featureIdx}]`}>
                          {feature}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handlePlanSelect(plan.ctaHref)}
                  data-editable-href={`plans[${idx}].ctaHref`}
                  data-href={plan.ctaHref}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  <span data-editable={`plans[${idx}].ctaText`}>{plan.ctaText}</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground">
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
