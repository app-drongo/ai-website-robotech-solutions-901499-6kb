'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bot, Zap, Shield, BarChart3, Clock } from 'lucide-react';
import Image from 'next/image';

const DEFAULT_FEATURES = {
  title: 'Advanced Robotics Solutions',
  subtitle:
    'Cutting-edge technology designed to transform your operations with intelligent automation',
  tabs: [
    {
      id: 'ai-automation',
      title: 'AI-Powered Automation',
      description:
        'Our advanced machine learning algorithms continuously adapt and optimize performance in real-time. The system learns from operational patterns, predicts maintenance needs, and automatically adjusts workflows to maximize efficiency. With neural network processing and deep learning capabilities, our robots can handle complex decision-making tasks that traditionally required human intervention.',
      imageUrl:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=center',
      imageAlt: 'AI-powered robotic automation system',
    },
    {
      id: 'integration',
      title: 'Seamless Integration',
      description:
        "Designed with plug-and-play compatibility, our robotics solutions integrate effortlessly with your existing infrastructure. Whether you're running legacy systems or cutting-edge technology, our adaptive interfaces ensure smooth deployment without operational disruption. Pre-built connectors for major industrial protocols and cloud platforms make implementation straightforward and cost-effective.",
      imageUrl:
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center',
      imageAlt: 'Seamless system integration interface',
    },
    {
      id: 'monitoring',
      title: '24/7 Monitoring',
      description:
        'Continuous system surveillance ensures optimal performance around the clock. Our monitoring platform provides real-time health checks, predictive maintenance alerts, and automated diagnostic reports. Advanced sensors track performance metrics, environmental conditions, and operational efficiency, enabling proactive maintenance scheduling and minimizing unexpected downtime.',
      imageUrl:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center',
      imageAlt: '24/7 monitoring dashboard and analytics',
    },
    {
      id: 'safety',
      title: 'Safety Protocols',
      description:
        'Comprehensive safety systems protect both equipment and personnel through multiple layers of protection. Emergency stop mechanisms, collision detection sensors, and compliance monitoring ensure operations meet the highest safety standards. Our robots feature advanced proximity sensors, safety-rated controllers, and fail-safe mechanisms that immediately halt operations when potential hazards are detected.',
      imageUrl:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center',
      imageAlt: 'Safety protocols and protective systems',
    },
    {
      id: 'analytics',
      title: 'Real-Time Analytics',
      description:
        'Transform operational data into actionable insights with our advanced analytics platform. Real-time dashboards provide comprehensive performance metrics, efficiency trends, and predictive analytics. Machine learning algorithms identify optimization opportunities, track KPIs, and generate detailed reports that drive informed decision-making and continuous improvement across your operations.',
      imageUrl:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center',
      imageAlt: 'Real-time analytics and data visualization',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };

  const renderTabIcon = (tabId: string) => {
    const iconClass = 'h-5 w-5';
    switch (tabId) {
      case 'ai-automation':
        return <Bot className={iconClass} />;
      case 'integration':
        return <Zap className={iconClass} />;
      case 'monitoring':
        return <Clock className={iconClass} />;
      case 'safety':
        return <Shield className={iconClass} />;
      case 'analytics':
        return <BarChart3 className={iconClass} />;
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

        {/* Tabbed Features */}
        <Tabs defaultValue={config.tabs[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12 h-auto p-1">
            {config.tabs.map(tab => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex flex-col sm:flex-row items-center gap-2 p-3 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {renderTabIcon(tab.id)}
                <span
                  className="hidden sm:inline"
                  data-editable={`tabs[${config.tabs.indexOf(tab)}].title`}
                >
                  {tab.title}
                </span>
                <span
                  className="sm:hidden text-xs text-center"
                  data-editable={`tabs[${config.tabs.indexOf(tab)}].title`}
                >
                  {tab.title}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {config.tabs.map((tab, idx) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <Card className="bg-card text-card-foreground border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-96 order-2 lg:order-1">
                      <Image
                        src={tab.imageUrl}
                        alt={tab.imageAlt}
                        fill
                        className="object-cover"
                        data-editable-src={`tabs[${idx}].imageUrl`}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="text-primary">{renderTabIcon(tab.id)}</div>
                        <h3 className="text-2xl lg:text-3xl font-bold">
                          <span data-editable={`tabs[${idx}].title`}>{tab.title}</span>
                        </h3>
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-lg">
                        <span data-editable={`tabs[${idx}].description`}>{tab.description}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

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
