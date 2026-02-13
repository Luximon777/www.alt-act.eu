import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Heart, Users, Globe, Scale } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const navigate = useNavigate();

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

  const valeurs = [
    { icon: Heart, label: "Humanisme", description: "L'humain au cœur de tout" },
    { icon: Users, label: "Inclusion", description: "L'insertion sans barrières" },
    { icon: Globe, label: "Impact social", description: "Transformer durablement" },
    { icon: Scale, label: "Éthique", description: "Intégrité et transparence" }
  ];

  // Composant pour les étoiles européennes
  const EuropeanStars = () => {
    const stars = Array.from({ length: 12 }, (_, i) => {
      const angle = (i * 30 - 90) * (Math.PI / 180);
      const radius = 45;
      const x = 50 + radius * Math.cos(angle);
      const y = 50 + radius * Math.sin(angle);
      return { x, y };
    });

    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {stars.map((star, i) => (
          <g key={i} transform={`translate(${star.x}, ${star.y})`}>
            <polygon
              points="0,-4 1.2,-1.2 4,-1.2 2,0.8 3,4 0,2 -3,4 -2,0.8 -4,-1.2 -1.2,-1.2"
              fill="#FFD700"
              opacity="0.9"
            />
          </g>
        ))}
      </svg>
    );
  };

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b2a55]/95 via-[#0b2a55]/90 to-[#1a4280]/85"></div>
      </div>

      {/* European Stars Background - Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grande couronne d'étoiles en haut à droite */}
        <div className="absolute -top-20 -right-20 w-96 h-96 opacity-10 animate-spin-slow">
          <EuropeanStars />
        </div>
        {/* Petite couronne d'étoiles en bas à gauche */}
        <div className="absolute -bottom-10 -left-10 w-64 h-64 opacity-8">
          <EuropeanStars />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="flex flex-wrap gap-3 justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Association d'intérêt général</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#003399]/30 to-[#FFD700]/20 backdrop-blur-sm rounded-full border border-[#FFD700]/30">
            <svg viewBox="0 0 100 100" className="w-5 h-5">
              {Array.from({ length: 12 }, (_, i) => {
                const angle = (i * 30 - 90) * (Math.PI / 180);
                const radius = 38;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                return (
                  <g key={i} transform={`translate(${x}, ${y})`}>
                    <polygon
                      points="0,-6 1.8,-1.8 6,-1.8 3,1.2 4.5,6 0,3 -4.5,6 -3,1.2 -6,-1.8 -1.8,-1.8"
                      fill="#FFD700"
                    />
                  </g>
                );
              })}
            </svg>
            <span className="text-white text-sm font-medium">Vocation européenne</span>
          </div>
        </div>

        {/* Logo/Title */}
        <div className="mb-6 animate-fade-in-up flex justify-center">
          <div className="inline-block">
            <img src="/logo.png" alt="Alt&Act" className="h-12 md:h-14 lg:h-16 w-auto" />
            <p className="text-[14px] italic text-blue-100 mt-1 text-right">Altérité & Action</p>
          </div>
        </div>
        
        <p className="text-2xl md:text-3xl text-blue-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Des trajectoires professionnelles sans barrières
        </p>

        {/* Encart éthique */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Une éthique tournée vers l'avenir</h3>
            <div className="text-blue-100 text-sm md:text-base leading-relaxed space-y-3 text-left">
              <p>Dans un monde en quête de repères, l'éthique n'est plus un simple cadre de conformité : elle devient une force d'orientation. ALT&ACT s'inscrit dans cette perspective en faisant le choix d'une <strong className="text-white">éthique vivante</strong> — une éthique qui éclaire les décisions, structure les pratiques et soutient les transformations durables.</p>
              <p>Être en avance aujourd'hui, c'est savoir placer l'humain au cœur des évolutions économiques et sociales. Nous considérons que la <strong className="text-white">confiance, l'équité et la reconnaissance des capacités</strong> constituent les fondements d'une société capable de traverser la complexité sans renoncer à sa cohésion.</p>
              <p className="italic text-blue-200">Car les organisations qui compteront demain seront celles qui auront su faire de l'éthique non pas une contrainte, mais une boussole.</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button
            onClick={() => navigate('/notre-mission')}
            size="lg"
            className="bg-white text-[#0b2a55] hover:bg-blue-50 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-200 shadow-xl"
            data-testid="discover-mission-btn"
          >
            Découvrir notre mission
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            onClick={() => scrollToSection('#contact')}
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[#0b2a55] text-lg px-8 py-6 transform hover:scale-105 transition-all duration-200"
            data-testid="contact-btn"
          >
            Nous contacter
          </Button>
        </div>

        {/* Valeurs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {valeurs.map((valeur, index) => {
            const Icon = valeur.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in-up hover:bg-white/20"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-xl font-bold text-white mb-2">
                  {valeur.label}
                </div>
                <div className="text-blue-200 text-sm font-medium">
                  {valeur.description}
                </div>
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
