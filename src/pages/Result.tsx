import { useLocation, Link, useNavigate } from "react-router-dom";
import { Shield, CheckCircle2, AlertTriangle, XCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface ResultData {
  url: string;
  classification: 'SAFE' | 'RISKY' | 'PHISHING';
  confidence: number;
  explanation: string;
  features?: {
    https?: boolean;
    suspiciousKeywords?: boolean;
    domainAge?: string;
  };
  timestamp: string;
}

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result as ResultData;

  useEffect(() => {
    if (!result) {
      navigate('/check-url');
    }
  }, [result, navigate]);

  if (!result) {
    return null;
  }

  const getClassificationColor = () => {
    switch (result.classification) {
      case 'SAFE':
        return 'text-green-500';
      case 'RISKY':
        return 'text-yellow-500';
      case 'PHISHING':
        return 'text-red-500';
      default:
        return 'text-muted-foreground';
    }
  };

  const getClassificationIcon = () => {
    switch (result.classification) {
      case 'SAFE':
        return <CheckCircle2 className="h-16 w-16" />;
      case 'RISKY':
        return <AlertTriangle className="h-16 w-16" />;
      case 'PHISHING':
        return <XCircle className="h-16 w-16" />;
      default:
        return <Shield className="h-16 w-16" />;
    }
  };

  const getClassificationBg = () => {
    switch (result.classification) {
      case 'SAFE':
        return 'bg-green-500/10 border-green-500/20';
      case 'RISKY':
        return 'bg-yellow-500/10 border-yellow-500/20';
      case 'PHISHING':
        return 'bg-red-500/10 border-red-500/20';
      default:
        return 'bg-muted';
    }
  };

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
        <div className="max-w-3xl mx-auto space-y-8">
          <Link to="/check-url" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Check another URL
          </Link>

          <div className={`rounded-lg border p-8 ${getClassificationBg()}`}>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className={getClassificationColor()}>
                {getClassificationIcon()}
              </div>
              <h1 className="text-3xl font-bold">
                {result.classification}
              </h1>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Confidence Score</p>
                <div className="text-4xl font-bold">{result.confidence}%</div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg border p-6 space-y-4">
            <h2 className="text-xl font-semibold">Analyzed URL</h2>
            <p className="text-muted-foreground break-all">{result.url}</p>
          </div>

          <div className="bg-card rounded-lg border p-6 space-y-4">
            <h2 className="text-xl font-semibold">Analysis Explanation</h2>
            <p className="text-muted-foreground leading-relaxed">
              {result.explanation}
            </p>
          </div>

          {result.features && (
            <div className="bg-card rounded-lg border p-6 space-y-4">
              <h2 className="text-xl font-semibold">Security Features</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">HTTPS Enabled</span>
                  <span className={result.features.https ? 'text-green-500' : 'text-red-500'}>
                    {result.features.https ? '✓ Yes' : '✗ No'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Suspicious Keywords</span>
                  <span className={result.features.suspiciousKeywords ? 'text-red-500' : 'text-green-500'}>
                    {result.features.suspiciousKeywords ? '✗ Detected' : '✓ None'}
                  </span>
                </div>
                {result.features.domainAge && (
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Domain Age</span>
                    <span className="capitalize">{result.features.domainAge}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="text-center text-sm text-muted-foreground">
            Analysis completed at {new Date(result.timestamp).toLocaleString()}
          </div>

          <div className="text-center pt-4">
            <Link to="/check-url">
              <Button size="lg" className="text-lg px-8">
                Check Another URL
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Result;
