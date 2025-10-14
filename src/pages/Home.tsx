import { Link } from "react-router-dom";
import { Shield, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">SafeURL</span>
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/check-url">
              <Button>Check URL</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <Shield className="h-5 w-5" />
            <span className="font-medium">AI-Powered URL Security</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Protect Yourself from
            <span className="text-primary"> Phishing Attacks</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Project by
            <br />
            Sidharth M K - 24IT0156
            <br />
            Sheshakanth Ra - 24IT0153
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <Link to="/check-url">
              <Button size="lg" className="text-lg px-8">
                Check URL Now
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-16">
            <div className="p-6 rounded-lg border bg-card">
              <CheckCircle2 className="h-12 w-12 text-green-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Safe Sites</h3>
              <p className="text-muted-foreground">
                Legitimate websites verified by our AI
              </p>
            </div>
            
            <div className="p-6 rounded-lg border bg-card">
              <AlertTriangle className="h-12 w-12 text-yellow-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Risky Sites</h3>
              <p className="text-muted-foreground">
                Suspicious sites that require caution
              </p>
            </div>
            
            <div className="p-6 rounded-lg border bg-card">
              <Shield className="h-12 w-12 text-red-500 mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Phishing Sites</h3>
              <p className="text-muted-foreground">
                Dangerous sites attempting to steal data
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
