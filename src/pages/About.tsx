import { Link } from "react-router-dom";
import { Shield, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">SafeURL</span>
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/check-url">
              <Button>Check URL</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">About SafeURL</h1>
            <p className="text-xl text-muted-foreground">
              Protecting users from online threats with cutting-edge AI technology
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground">
              SafeURL was created to address the growing threat of phishing attacks and malicious websites. 
              Every day, millions of users fall victim to sophisticated phishing attempts that steal personal 
              information, credentials, and financial data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border bg-card space-y-4">
              <Target className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                To make the internet safer by providing free, instant URL security analysis 
                that anyone can use to verify website legitimacy before clicking.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card space-y-4">
              <Zap className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Our Technology</h3>
              <p className="text-muted-foreground">
                Powered by advanced AI models trained on millions of legitimate and malicious 
                websites, providing real-time threat detection with high accuracy.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Why Trust Us?</h2>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>AI-powered analysis using state-of-the-art machine learning models</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Real-time threat detection updated continuously with new patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Privacy-focused: we don't store your browsing history or personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Free to use with no registration required</span>
              </li>
            </ul>
          </div>

          <div className="text-center pt-8">
            <Link to="/check-url">
              <Button size="lg" className="text-lg px-8">
                Try It Now
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
import { Link } from "react-router-dom";
import { Shield, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">SafeURL</span>
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/check-url">
              <Button>Check URL</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">About SafeURL</h1>
            <p className="text-xl text-muted-foreground">
              Protecting users from online threats with cutting-edge AI technology
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground">
              SafeURL was created to address the growing threat of phishing attacks and malicious websites. 
              Every day, millions of users fall victim to sophisticated phishing attempts that steal personal 
              information, credentials, and financial data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border bg-card space-y-4">
              <Target className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                To make the internet safer by providing free, instant URL security analysis 
                that anyone can use to verify website legitimacy before clicking.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card space-y-4">
              <Zap className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Our Technology</h3>
              <p className="text-muted-foreground">
                Powered by advanced AI models trained on millions of legitimate and malicious 
                websites, providing real-time threat detection with high accuracy.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Why Trust Us?</h2>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>AI-powered analysis using state-of-the-art machine learning models</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Real-time threat detection updated continuously with new patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Privacy-focused: we don't store your browsing history or personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Free to use with no registration required</span>
              </li>
            </ul>
          </div>

          <div className="text-center pt-8">
            <Link to="/check-url">
              <Button size="lg" className="text-lg px-8">
                Try It Now
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
import { Link } from "react-router-dom";
import { Shield, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">SafeURL</span>
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/check-url">
              <Button>Check URL</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">About SafeURL</h1>
            <p className="text-xl text-muted-foreground">
              Protecting users from online threats with cutting-edge AI technology
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground">
              SafeURL was created to address the growing threat of phishing attacks and malicious websites. 
              Every day, millions of users fall victim to sophisticated phishing attempts that steal personal 
              information, credentials, and financial data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border bg-card space-y-4">
              <Target className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                To make the internet safer by providing free, instant URL security analysis 
                that anyone can use to verify website legitimacy before clicking.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card space-y-4">
              <Zap className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Our Technology</h3>
              <p className="text-muted-foreground">
                Powered by advanced AI models trained on millions of legitimate and malicious 
                websites, providing real-time threat detection with high accuracy.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Why Trust Us?</h2>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>AI-powered analysis using state-of-the-art machine learning models</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Real-time threat detection updated continuously with new patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Privacy-focused: we don't store your browsing history or personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Free to use with no registration required</span>
              </li>
            </ul>
          </div>

          <div className="text-center pt-8">
            <Link to="/check-url">
              <Button size="lg" className="text-lg px-8">
                Try It Now
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
import { Link } from "react-router-dom";
import { Shield, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">SafeURL</span>
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/check-url">
              <Button>Check URL</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">About SafeURL</h1>
            <p className="text-xl text-muted-foreground">
              Protecting users from online threats with cutting-edge AI technology
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground">
              SafeURL was created to address the growing threat of phishing attacks and malicious websites. 
              Every day, millions of users fall victim to sophisticated phishing attempts that steal personal 
              information, credentials, and financial data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border bg-card space-y-4">
              <Target className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-muted-foreground">
                To make the internet safer by providing free, instant URL security analysis 
                that anyone can use to verify website legitimacy before clicking.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card space-y-4">
              <Zap className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Our Technology</h3>
              <p className="text-muted-foreground">
                Powered by advanced AI models trained on millions of legitimate and malicious 
                websites, providing real-time threat detection with high accuracy.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold">Why Trust Us?</h2>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>AI-powered analysis using state-of-the-art machine learning models</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Real-time threat detection updated continuously with new patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Privacy-focused: we don't store your browsing history or personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>Free to use with no registration required</span>
              </li>
            </ul>
          </div>

          <div className="text-center pt-8">
            <Link to="/check-url">
              <Button size="lg" className="text-lg px-8">
                Try It Now
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
