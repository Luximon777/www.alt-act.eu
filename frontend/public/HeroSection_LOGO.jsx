import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, Target, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { heroData } from '../mock/altactData';

const HeroSection = () => {
  const navigate = useNavigate();
  const [counters, setCounters] = useState(heroData.stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const timers = heroData.stats.map((stat, index) => {
      const increment = stat.value / steps;
      let currentStep = 0;

      return setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.min(
              Math.round(increment * currentStep),
              stat.value
            );
            return newCounters;
          });
        }
      }, stepDuration);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const icons = [Users, Target, Sparkles, TrendingUp];

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${heroData.backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b2a55]/95 via-[#0b2a55]/90 to-[#1a4280]/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-medium">Association d'intérêt général</span>
        </div>

        {/* Logo Image instead of Title */}
        <div className="mb-6 animate-fade-in-up">
          <img 
            src="https://customer-assets.emergentagent.com/job_d4392e18-68a6-4d72-af1f-982787d9dcde/artifacts/2ly4eg7d_assetslogo-altact.png" 
            alt="Alt&Act" 
            className="h-16 md:h-20 lg:h-24 w-auto mx-auto"
          />
        </div>
        
        <p className="text-2xl md:text-3xl text-blue-100 mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {heroData.subtitle}
        </p>
        
        <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {heroData.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button
            onClick={() => scrollToSection('#mission')}
            size="lg"
            className="bg-white text-[#0b2a55] hover:bg-blue-50 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-200 shadow-xl"
          >
            Découvrir notre mission
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            onClick={() => scrollToSection('#contact')}
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[#0b2a55] text-lg px-8 py-6 transform hover:scale-105 transition-all duration-200"
          >
            Nous contacter
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {heroData.stats.map((stat, index) => {
            const Icon = icons[index];
            const isClickable = stat.linkTo;
            
            return (
              <div
                key={index}
                onClick={() => isClickable && navigate(stat.linkTo)}
                className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in-up ${isClickable ? 'cursor-pointer hover:bg-white/20' : ''}`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-blue-200 text-sm font-medium">
                  {stat.label}
                </div>
                {isClickable && (
                  <div className="mt-2 text-xs text-blue-100 opacity-75">
                    Cliquez pour en savoir plus
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
