import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();
    
    if (!url) {
      throw new Error('No URL provided');
    }

    console.log('Analyzing URL:', url);

    // Extract URL features for analysis
    const urlObj = new URL(url);
    const domain = urlObj.hostname;
    const hasHttps = urlObj.protocol === 'https:';
    const pathLength = urlObj.pathname.length;
    const hasSubdomain = domain.split('.').length > 2;
    const suspiciousKeywords = ['login', 'verify', 'secure', 'account', 'update', 'confirm'];
    const hasSuspiciousKeywords = suspiciousKeywords.some(keyword => 
      url.toLowerCase().includes(keyword)
    );

    // Create analysis prompt for AI
    const prompt = `Analyze this URL for security risks: ${url}

Domain: ${domain}
HTTPS: ${hasHttps}
Path length: ${pathLength}
Has subdomain: ${hasSubdomain}
Contains suspicious keywords: ${hasSuspiciousKeywords}

Classify this URL as one of: SAFE, RISKY, or PHISHING.
Provide a confidence score (0-100) and a brief explanation (2-3 sentences) of why you classified it this way.
Consider factors like: HTTPS usage, domain reputation, suspicious keywords, URL structure.

Respond in JSON format:
{
  "classification": "SAFE|RISKY|PHISHING",
  "confidence": 85,
  "explanation": "Brief explanation here",
  "features": {
    "https": true/false,
    "suspiciousKeywords": true/false,
    "domainAge": "unknown|new|established"
  }
}`;

    // Call Lovable AI
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { 
            role: 'system', 
            content: 'You are a cybersecurity expert specializing in phishing detection. Always respond with valid JSON.' 
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.3,
      }),
    });

    if (!aiResponse.ok) {
      if (aiResponse.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (aiResponse.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI service requires payment. Please add credits.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      throw new Error(`AI Gateway error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const aiContent = aiData.choices[0].message.content;
    
    console.log('AI Response:', aiContent);

    // Parse AI response
    const jsonMatch = aiContent.match(/\{[\s\S]*\}/);
    const result = jsonMatch ? JSON.parse(jsonMatch[0]) : {
      classification: 'RISKY',
      confidence: 50,
      explanation: 'Unable to fully analyze this URL. Please verify manually.',
      features: {
        https: hasHttps,
        suspiciousKeywords: hasSuspiciousKeywords,
        domainAge: 'unknown'
      }
    };

    return new Response(
      JSON.stringify({
        url,
        ...result,
        timestamp: new Date().toISOString()
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in analyze-url:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error',
        classification: 'RISKY',
        confidence: 0,
        explanation: 'An error occurred during analysis. Please try again.'
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
