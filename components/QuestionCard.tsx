
import React, { useState } from 'react';
import { Question } from '../types';
import { getExplanation } from '../services/geminiService';

interface QuestionCardProps {
  item: Question;
  showSolutionDefault?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ item, showSolutionDefault = false }) => {
  const [showSolution, setShowSolution] = useState(showSolutionDefault);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const toggleSolution = () => setShowSolution(!showSolution);

  const handleGetExplanation = async () => {
    if (explanation) return;
    setLoading(true);
    const text = await getExplanation(item.question, item.solution);
    setExplanation(text || "No explanation available.");
    setLoading(false);
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy': return 'bg-emerald-100 text-emerald-700';
      case 'Medium': return 'bg-amber-100 text-amber-700';
      case 'Hard': return 'bg-rose-100 text-rose-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md mb-6">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
            {item.topic}
          </span>
          <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${getDifficultyColor(item.difficulty)}`}>
            {item.difficulty}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-800 mb-2">
          Question {item.id} <span className="text-slate-400 font-normal ml-2">({item.type})</span>
        </h3>
        <p className="text-slate-700 text-lg mb-6 leading-relaxed">
          {item.question}
        </p>

        <div className="flex flex-wrap gap-3">
          <button 
            onClick={toggleSolution}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
              showSolution 
              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            <i className={`fas ${showSolution ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            {showSolution ? 'Hide Solution' : 'Show Solution'}
          </button>
          
          {showSolution && (
            <button 
              onClick={handleGetExplanation}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg font-semibold hover:bg-purple-100 disabled:opacity-50 transition-colors"
            >
              <i className={`fas ${loading ? 'fa-spinner fa-spin' : 'fa-wand-magic-sparkles'}`}></i>
              {explanation ? 'Explanation Ready' : 'Explain with AI'}
            </button>
          )}
        </div>

        {showSolution && (
          <div className="mt-6 p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
            <h4 className="font-bold text-emerald-800 mb-1">Solution:</h4>
            <p className="text-emerald-900">{item.solution}</p>
          </div>
        )}

        {explanation && showSolution && (
          <div className="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg animate-in fade-in duration-500">
            <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
              <i className="fas fa-robot"></i> AI Teacher Explains:
            </h4>
            <div className="text-purple-900 text-sm whitespace-pre-wrap leading-relaxed">
              {explanation}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
