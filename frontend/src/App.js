import { useState, useCallback, useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { 
  Compass, 
  Briefcase, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Download,
  Sparkles,
  Target,
  Heart,
  Shield,
  Brain,
  Sun,
  ChevronRight,
  Loader2,
  FileText,
  Star,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import jsPDF from "jspdf";
import { ReactifHome, ParticuliersPage, ServicesRHPage, PartenairesPage } from "./ReactifPro";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// ============== VERTU ICONS & COLORS ==============
const VERTU_CONFIG = {
  sagesse: { icon: Brain, color: "#D97706", label: "Sagesse et connaissance" },
  courage: { icon: Target, color: "#EF4444", label: "Courage" },
  humanite: { icon: Heart, color: "#EC4899", label: "Humanité" },
  justice: { icon: Shield, color: "#8B5CF6", label: "Justice" },
  temperance: { icon: Compass, color: "#0F766E", label: "Tempérance" },
  transcendance: { icon: Sun, color: "#3B82F6", label: "Transcendance" }
};

// ============== HOME PAGE ==============
const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-[#FAFAF9]" data-testid="home-page">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-stone-50 to-teal-50" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-100">
              <Sparkles className="w-3 h-3 mr-1" />
              100% Anonyme
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1C1917] tracking-tight mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
              Valoriser Son Identité<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-teal-600">
                Professionnelle
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#57534E] max-w-2xl mx-auto leading-relaxed">
              Découvrez vos forces, vos valeurs et les environnements professionnels 
              où vous pouvez vous épanouir durablement.
            </p>
          </div>

          {/* Two Doors */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Door 1 - Mon Job */}
            <div 
              data-testid="door-mon-job"
              onClick={() => navigate("/questionnaire/mon_job")}
              className="door-card group cursor-pointer animate-fade-in-up delay-200"
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-amber-900/80 via-amber-900/40 to-transparent group-hover:from-amber-900/90 transition-all duration-500" />
              <div className="relative z-20 h-full flex flex-col justify-end p-6 md:p-8 text-white">
                <div className="mb-4 w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Compass className="w-7 h-7" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Fraunces, serif' }}>
                  Je cherche MON job
                </h2>
                <p className="text-white/80 mb-4 text-sm md:text-base">
                  Découvrez les environnements professionnels qui correspondent à votre identité et vos valeurs.
                </p>
                <div className="flex items-center text-amber-300 font-medium group-hover:translate-x-2 transition-transform">
                  Explorer mon profil <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>

            {/* Door 2 - Un Job */}
            <div 
              data-testid="door-un-job"
              onClick={() => navigate("/questionnaire/un_job")}
              className="door-card group cursor-pointer animate-fade-in-up delay-300"
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-teal-900/80 via-teal-900/40 to-transparent group-hover:from-teal-900/90 transition-all duration-500" />
              <div className="relative z-20 h-full flex flex-col justify-end p-6 md:p-8 text-white">
                <div className="mb-4 w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Fraunces, serif' }}>
                  Je cherche UN job
                </h2>
                <p className="text-white/80 mb-4 text-sm md:text-base">
                  Vérifiez votre adéquation avec un métier précis et découvrez vos atouts.
                </p>
                <div className="flex items-center text-teal-300 font-medium group-hover:translate-x-2 transition-transform">
                  Vérifier l'adéquation <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center animate-fade-in-up delay-500">
            <p className="text-[#A8A29E] text-sm uppercase tracking-widest mb-4">
              Inspiré des travaux de
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-[#57534E]">
              <span className="font-medium">Seligman & Peterson</span>
              <span className="font-medium">Shalom Schwartz</span>
              <span className="font-medium">C. G. Jung</span>
              <span className="font-medium">OMS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============== QUESTIONNAIRE PAGE ==============
const QuestionnairePage = ({ entryType }) => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [birthDate, setBirthDate] = useState("");
  const [targetJob, setTargetJob] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Fetch questions on mount
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${API}/questions`);
        setQuestions(response.data.questions);
        setLoading(false);
      } catch (error) {
        toast.error("Erreur lors du chargement des questions");
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const currentQuestion = questions[currentIndex];
  const progress = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;

  const handleAnswer = (code) => {
    setAnswers({ ...answers, [currentQuestion.id]: code });
    
    // Auto-advance after short delay
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }, 300);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const response = await axios.post(`${API}/analyze`, {
        birth_date: birthDate,
        answers,
        entry_type: entryType,
        target_job: entryType === "un_job" ? targetJob : null
      });
      
      // Navigate to results with the profile data
      navigate("/results", { state: { profile: response.data } });
    } catch (error) {
      toast.error("Erreur lors de l'analyse");
      setSubmitting(false);
    }
  };

  const canSubmit = Object.keys(answers).length === questions.length;

  // Intro screen
  if (showIntro) {
    return (
      <div className="min-h-screen bg-[#FAFAF9] flex items-center justify-center p-4" data-testid="questionnaire-intro">
        <Card className="max-w-lg w-full vsi-card">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-100 to-teal-100 flex items-center justify-center">
              {entryType === "mon_job" ? (
                <Compass className="w-8 h-8 text-amber-600" />
              ) : (
                <Briefcase className="w-8 h-8 text-teal-600" />
              )}
            </div>
            <CardTitle className="text-2xl" style={{ fontFamily: 'Fraunces, serif' }}>
              {entryType === "mon_job" ? "Découvrez votre profil" : "Vérifiez votre adéquation"}
            </CardTitle>
            <CardDescription className="text-base mt-2">
              12 questions situationnelles pour révéler votre identité professionnelle.
              Il n'y a ni bonne ni mauvaise réponse.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="birthdate">Date de naissance (optionnel)</Label>
              <Input
                id="birthdate"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="mt-1"
                data-testid="birth-date-input"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Utilisée uniquement pour contextualiser votre parcours professionnel
              </p>
            </div>
            
            {entryType === "un_job" && (
              <div>
                <Label htmlFor="targetJob">Métier visé *</Label>
                <Input
                  id="targetJob"
                  type="text"
                  value={targetJob}
                  onChange={(e) => setTargetJob(e.target.value)}
                  placeholder="Ex: Cariste, Infirmier, Développeur..."
                  className="mt-1"
                  data-testid="target-job-input"
                />
              </div>
            )}

            <Button 
              onClick={() => setShowIntro(false)}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full py-6"
              disabled={entryType === "un_job" && !targetJob}
              data-testid="start-questionnaire-btn"
            >
              Commencer le questionnaire
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading || !currentQuestion) {
    return (
      <div className="min-h-screen bg-[#FAFAF9] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF9]" data-testid="questionnaire-page">
      {/* Progress bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={() => currentIndex > 0 ? setCurrentIndex(currentIndex - 1) : navigate("/")}
              className="flex items-center text-stone-500 hover:text-stone-700 transition-colors"
              data-testid="back-btn"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              {currentIndex > 0 ? "Précédent" : "Accueil"}
            </button>
            <span className="text-sm font-medium text-stone-600">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Question */}
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <div className="animate-fade-in-up">
          <Badge variant="outline" className="mb-4 capitalize">
            {currentQuestion.dimension.replace("_", " ")}
          </Badge>
          
          <h2 
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1C1917] mb-8 leading-relaxed"
            style={{ fontFamily: 'Fraunces, serif' }}
            data-testid="question-text"
          >
            {currentQuestion.texte}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={option.code}
                onClick={() => handleAnswer(option.code)}
                className={`option-btn ${answers[currentQuestion.id] === option.code ? 'selected' : ''}`}
                style={{ animationDelay: `${idx * 100}ms` }}
                data-testid={`option-${option.code}`}
              >
                <div className="flex items-center">
                  <span className="w-8 h-8 rounded-full border-2 border-stone-300 flex items-center justify-center mr-4 text-sm font-medium text-stone-500 group-hover:border-amber-500">
                    {option.code}
                  </span>
                  <span className="text-[#1C1917] font-medium">{option.texte}</span>
                  {answers[currentQuestion.id] === option.code && (
                    <Check className="w-5 h-5 text-amber-500 ml-auto" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Submit button (shows on last question) */}
        {currentIndex === questions.length - 1 && canSubmit && (
          <div className="mt-8 animate-fade-in-up">
            <Button
              onClick={handleSubmit}
              disabled={submitting}
              className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-full py-6 text-lg"
              data-testid="submit-btn"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Analyse en cours...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Découvrir mon profil
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

// ============== RESULTS PAGE ==============
const ResultsPage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  
  // Get profile from navigation state
  useEffect(() => {
    const state = window.history.state?.usr;
    if (state?.profile) {
      setProfile(state.profile);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const generatePDF = useCallback(() => {
    if (!profile) return;
    
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Header
    doc.setFillColor(217, 119, 6);
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text("VSI - Mon Profil Professionnel", pageWidth / 2, 25, { align: "center" });
    
    // Reset text color
    doc.setTextColor(28, 25, 23);
    
    let y = 50;
    
    // Disclaimer
    doc.setFillColor(254, 243, 199);
    doc.roundedRect(15, y, pageWidth - 30, 28, 3, 3, 'F');
    doc.setFontSize(9);
    doc.setTextColor(146, 64, 14);
    const disclaimerText = "À noter : Ce profil constitue un premier aperçu de votre identité professionnelle. Il révèle une tendance à être et ne valide pas vos compétences professionnelles acquises. Il est destiné à éclairer votre réflexion, non à vous définir.";
    const splitDisclaimer = doc.splitTextToSize(disclaimerText, pageWidth - 40);
    doc.text(splitDisclaimer, 20, y + 8);
    
    // Reset text color
    doc.setTextColor(28, 25, 23);
    y = 90;
    
    // Vertus dominantes
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text("Vertus Dominantes", 20, y);
    y += 10;
    doc.setFont(undefined, 'normal');
    doc.setFontSize(11);
    profile.vertus_dominantes.forEach((vertu) => {
      const config = VERTU_CONFIG[vertu];
      doc.text(`• ${config?.label || vertu}`, 25, y);
      y += 7;
    });
    
    y += 10;
    
    // Qualités
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text("Qualités Humaines", 20, y);
    y += 10;
    doc.setFont(undefined, 'normal');
    doc.setFontSize(11);
    const qualitesText = profile.qualites_humaines.join(", ");
    const splitQualites = doc.splitTextToSize(qualitesText, pageWidth - 50);
    doc.text(splitQualites, 25, y);
    y += splitQualites.length * 7 + 10;
    
    // Valeurs
    if (profile.valeurs && profile.valeurs.length > 0) {
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.text("Valeurs (Schwartz)", 20, y);
      y += 10;
      doc.setFont(undefined, 'normal');
      doc.setFontSize(11);
      const valeursText = profile.valeurs.join(", ");
      const splitValeurs = doc.splitTextToSize(valeursText, pageWidth - 50);
      doc.text(splitValeurs, 25, y);
      y += splitValeurs.length * 7 + 10;
    }
    
    // Compétences
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text("Compétences Psychosociales", 20, y);
    y += 10;
    doc.setFont(undefined, 'normal');
    doc.setFontSize(11);
    profile.competences_psychosociales.forEach((comp) => {
      doc.text(`• ${comp}`, 25, y);
      y += 7;
    });
    
    y += 10;
    
    // Filières
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text("Filières Professionnelles Compatibles", 20, y);
    y += 10;
    doc.setFont(undefined, 'normal');
    doc.setFontSize(11);
    profile.filieres_compatibles.slice(0, 5).forEach((filiere) => {
      doc.text(`• ${filiere.nom}`, 25, y);
      y += 7;
    });
    
    // New page for recommendations
    if (profile.recommandations_ia && profile.recommandations_ia.length > 50) {
      doc.addPage();
      y = 20;
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.text("Recommandations Personnalisées", 20, y);
      y += 10;
      doc.setFont(undefined, 'normal');
      doc.setFontSize(10);
      const splitReco = doc.splitTextToSize(profile.recommandations_ia, pageWidth - 40);
      doc.text(splitReco, 20, y);
    }
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text("Généré par VSI - Valoriser Son Identité Professionnelle", pageWidth / 2, 285, { align: "center" });
    
    doc.save("VSI-Mon-Profil.pdf");
    toast.success("PDF téléchargé avec succès !");
  }, [profile]);

  if (!profile) {
    return (
      <div className="min-h-screen bg-[#FAFAF9] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF9]" data-testid="results-page">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-teal-500 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
            <Sparkles className="w-3 h-3 mr-1" />
            Premier aperçu
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
            Votre Identité Professionnelle
          </h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Découvrez vos forces, vos valeurs et les environnements où vous pouvez vous épanouir.
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-5xl mx-auto px-4 -mt-4 mb-4">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
          <p className="text-sm text-amber-800">
            <strong>À noter :</strong> Ce profil constitue un <strong>premier aperçu</strong> de votre identité professionnelle. 
            Il révèle une <strong>tendance à être</strong> et ne valide pas vos compétences professionnelles acquises. 
            Il est destiné à éclairer votre réflexion, non à vous définir.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8 -mt-8">
        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button
            onClick={generatePDF}
            className="bg-white text-[#1C1917] hover:bg-stone-100 shadow-lg rounded-full"
            data-testid="download-pdf-btn"
          >
            <Download className="w-4 h-4 mr-2" />
            Télécharger PDF
          </Button>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="rounded-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Recommencer
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Vertus dominantes */}
          <Card className="vsi-card animate-fade-in-up" data-testid="vertus-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ fontFamily: 'Fraunces, serif' }}>
                <Target className="w-5 h-5 text-amber-500" />
                Vertus Dominantes
              </CardTitle>
              <CardDescription>Ce qui vous anime profondément</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profile.vertus_dominantes.map((vertu, idx) => {
                  const config = VERTU_CONFIG[vertu];
                  const Icon = config?.icon || Brain;
                  const score = profile.vertus_scores[vertu];
                  
                  return (
                    <div key={vertu} className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${config?.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: config?.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-[#1C1917]">{config?.label}</span>
                          <span className="text-sm text-[#57534E]">{score}%</span>
                        </div>
                        <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000"
                            style={{ 
                              width: `${score}%`,
                              backgroundColor: config?.color
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Qualités humaines */}
          <Card className="vsi-card animate-fade-in-up delay-100" data-testid="qualites-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ fontFamily: 'Fraunces, serif' }}>
                <Heart className="w-5 h-5 text-pink-500" />
                Qualités Humaines
              </CardTitle>
              <CardDescription>Vos forces naturelles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profile.qualites_humaines.map((qualite) => (
                  <Badge 
                    key={qualite} 
                    variant="secondary"
                    className="bg-pink-50 text-pink-700 hover:bg-pink-100 py-1.5"
                  >
                    {qualite}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Valeurs */}
          <Card className="vsi-card animate-fade-in-up delay-150" data-testid="valeurs-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ fontFamily: 'Fraunces, serif' }}>
                <Star className="w-5 h-5 text-amber-500" />
                Valeurs (Schwartz)
              </CardTitle>
              <CardDescription>Ce qui compte profondément pour vous</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profile.valeurs && profile.valeurs.map((valeur) => (
                  <Badge 
                    key={valeur} 
                    variant="secondary"
                    className="bg-amber-50 text-amber-700 hover:bg-amber-100 py-1.5"
                  >
                    {valeur}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Compétences psychosociales */}
          <Card className="vsi-card animate-fade-in-up delay-200" data-testid="competences-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ fontFamily: 'Fraunces, serif' }}>
                <Brain className="w-5 h-5 text-purple-500" />
                Compétences Psychosociales
              </CardTitle>
              <CardDescription>Vos capacités mobilisables</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {profile.competences_psychosociales.map((comp) => (
                  <li key={comp} className="flex items-center gap-2 text-[#57534E]">
                    <Check className="w-4 h-4 text-green-500" />
                    {comp}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Savoirs-être */}
          <Card className="vsi-card animate-fade-in-up delay-300" data-testid="savoirs-etre-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ fontFamily: 'Fraunces, serif' }}>
                <FileText className="w-5 h-5 text-blue-500" />
                Savoirs-être Professionnels
              </CardTitle>
              <CardDescription>Ce qu'on observe de vous au travail</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {profile.savoirs_etre.map((savoir) => (
                  <li key={savoir} className="flex items-start gap-2 text-[#57534E]">
                    <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{savoir}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Filières compatibles */}
        <Card className="vsi-card mt-6 animate-fade-in-up delay-400" data-testid="filieres-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ fontFamily: 'Fraunces, serif' }}>
              <Briefcase className="w-5 h-5 text-teal-500" />
              Filières Professionnelles Compatibles
            </CardTitle>
            <CardDescription>Les environnements où vous pouvez vous épanouir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {profile.filieres_compatibles.map((filiere, idx) => (
                <div 
                  key={filiere.id}
                  className="p-4 rounded-xl border border-stone-200 hover:border-teal-300 hover:bg-teal-50/50 transition-all cursor-pointer"
                  data-testid={`filiere-${filiere.id}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {filiere.code}
                    </Badge>
                    <span className="text-xs text-[#A8A29E]">
                      #{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-semibold text-[#1C1917] mb-1">{filiere.nom}</h4>
                  <p className="text-sm text-[#57534E] mb-3">{filiere.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {filiere.metiers_types.slice(0, 3).map((metier) => (
                      <span key={metier} className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                        {metier}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        {profile.recommandations_ia && (
          <Card className="vsi-card mt-6 animate-fade-in-up delay-500 border-l-4 border-l-amber-500" data-testid="recommendations-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2" style={{ fontFamily: 'Fraunces, serif' }}>
                <Sparkles className="w-5 h-5 text-amber-500" />
                Recommandations Personnalisées
              </CardTitle>
              <CardDescription>Conseils adaptés à votre profil</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-stone max-w-none">
                <div className="whitespace-pre-wrap text-[#57534E] leading-relaxed">
                  {profile.recommandations_ia}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

// ============== MAIN APP ==============
function App() {
  return (
    <div className="App">
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/questionnaire/mon_job" element={<QuestionnairePage entryType="mon_job" />} />
          <Route path="/questionnaire/un_job" element={<QuestionnairePage entryType="un_job" />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
