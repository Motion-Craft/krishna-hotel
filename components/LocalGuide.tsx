
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { CONTACT_INFO } from '../constants';

const LocalGuide: React.FC = () => {
  const [recommendations, setRecommendations] = useState<string>("");
  const [sources, setSources] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchNearbyInfo = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `What are some popular tourist attractions or points of interest near Krishna Garden Hotel Restaurant and Cafe in Rajasthan? Provide a brief summary and list them.`,
        config: {
          tools: [{ googleMaps: {} }],
          toolConfig: {
            retrievalConfig: {
              latLng: {
                latitude: CONTACT_INFO.lat,
                longitude: CONTACT_INFO.lng
              }
            }
          }
        },
      });

      setRecommendations(response.text || "Discover the beauty of the surrounding area.");
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      setSources(chunks.filter((c: any) => c.maps).map((c: any) => c.maps));
    } catch (error) {
      console.error("Error fetching map data:", error);
      setRecommendations("Unable to load nearby guide at this moment. Please visit our reception for local travel tips!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNearbyInfo();
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-1/2">
            <span className="text-accent uppercase tracking-widest font-semibold mb-4 block">Neighborhood Guide</span>
            <h2 className="text-4xl font-heading text-primary mb-6">Explore the Area</h2>
            <div className="prose prose-stone max-w-none text-darkText/70">
              {loading ? (
                <div className="flex items-center space-x-3 text-accent animate-pulse">
                  <div className="w-6 h-6 border-2 border-t-transparent border-accent rounded-full animate-spin"></div>
                  <span>Discovering local gems for you...</span>
                </div>
              ) : (
                <div className="whitespace-pre-line leading-relaxed">
                  {recommendations}
                </div>
              )}
            </div>
            
            {!loading && sources.length > 0 && (
              <div className="mt-8">
                <h4 className="font-bold text-primary mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Verified Local Sources
                </h4>
                <div className="flex flex-wrap gap-3">
                  {sources.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-bgSoft border border-accent/20 rounded-full text-sm text-primary hover:bg-accent hover:text-white transition-all flex items-center shadow-sm"
                    >
                      {source.title || "View Location"}
                      <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="md:w-1/2 relative">
             <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1597041066672-430932f32f86?auto=format&fit=crop&q=80&w=1000" 
                 alt="Rajasthan Scenery" 
                 className="w-full h-[400px] object-cover"
               />
             </div>
             <div className="absolute -bottom-6 -left-6 bg-accent text-primary p-6 rounded-2xl shadow-xl max-w-[200px]">
                <p className="text-sm font-bold leading-tight">Your perfect base for exploring the heart of Rajasthan.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalGuide;
