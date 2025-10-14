









// File removed
import { Link } from "react-router-dom";
import { Shield, ArrowRight, Search, Brain, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
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
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</Link>
            <Link to="/check-url">
              <Button>Check URL</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">How It Works</h1>
            <p className="text-xl text-muted-foreground">
              Our AI-powered system analyzes URLs in three simple steps
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl font-semibold">1. URL Submission</h3>
                <p className="text-muted-foreground text-lg">
                  Simply paste any website URL into our checker. No account needed, no installation required. 
                  Our system accepts any valid web address and begins analysis immediately.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="h-8 w-8 text-primary" />
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl font-semibold">2. AI Analysis</h3>
                <p className="text-muted-foreground text-lg">
                  Our advanced AI model examines multiple factors:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>SSL/HTTPS certificate validation</li>
                  <li>Domain reputation and age</li>
                  <li>URL structure and suspicious patterns</li>
                  <li>Presence of phishing keywords</li>
                  <li>Comparison with known threat databases</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="h-8 w-8 text-primary" />
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <FileCheck className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl font-semibold">3. Instant Results</h3>
                <p className="text-muted-foreground text-lg">
                  Within seconds, you receive a comprehensive report including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Clear classification: Safe, Risky, or Phishing</li>
                  <li>Confidence score (0-100%)</li>
                  <li>Detailed explanation of the findings</li>
                  <li>Key security features identified</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 space-y-4">
            <h2 className="text-2xl font-semibold">What Makes Us Different?</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Unlike traditional URL checkers that rely solely on blacklists, our AI can detect 
                brand-new phishing attempts and zero-day threats by understanding patterns and behaviors.
              </p>
              <p>
                The system continuously learns from new threats, ensuring you're protected against 
                the latest phishing techniques and malicious websites.
              </p>
            </div>
          </div>

          <div className="text-center pt-8">
            <Link to="/check-url">
              <Button size="lg" className="text-lg px-8">
                Check a URL Now
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HowItWorks;
