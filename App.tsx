
import React, { useState, useMemo } from 'react';
import { QUESTIONS_DATA } from './constants';
import { AppState, QuestionType } from './types';
import QuestionCard from './components/QuestionCard';
import ExamView from './components/ExamView';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    currentView: 'home',
    searchQuery: '',
    filterTopic: 'All'
  });

  const [showSolutions, setShowSolutions] = useState(false);

  const topics = useMemo(() => {
    const set = new Set(QUESTIONS_DATA.map(q => q.topic));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredQuestions = useMemo(() => {
    return QUESTIONS_DATA.filter(q => {
      const matchesSearch = q.question.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                            q.solution.toLowerCase().includes(state.searchQuery.toLowerCase());
      const matchesTopic = state.filterTopic === 'All' || q.topic === state.filterTopic;
      return matchesSearch && matchesTopic;
    });
  }, [state.searchQuery, state.filterTopic]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-indigo-900 text-white shadow-xl sticky top-0 z-50 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg">
              <i className="fas fa-microscope text-indigo-900 text-2xl"></i>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight">ScienceQuest</h1>
              <p className="text-indigo-200 text-xs font-medium uppercase tracking-widest">Grade 7 Measurement Expert</p>
            </div>
          </div>
          
          <nav className="flex gap-2 p-1 bg-indigo-800 rounded-xl">
            <button 
              onClick={() => setState(s => ({ ...s, currentView: 'home' }))}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${state.currentView === 'home' ? 'bg-white text-indigo-900 shadow-sm' : 'text-indigo-100 hover:bg-indigo-700'}`}
            >
              Study Mode
            </button>
            <button 
              onClick={() => setState(s => ({ ...s, currentView: 'exam' }))}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${state.currentView === 'exam' ? 'bg-white text-indigo-900 shadow-sm' : 'text-indigo-100 hover:bg-indigo-700'}`}
            >
              Exam Paper
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {state.currentView === 'home' ? (
          <div className="print:hidden">
            {/* Filters */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-6">
              <div className="flex-1 relative">
                <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <input 
                  type="text" 
                  placeholder="Search questions or keywords..."
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                  value={state.searchQuery}
                  onChange={(e) => setState(s => ({ ...s, searchQuery: e.target.value }))}
                />
              </div>
              <div className="md:w-64">
                <select 
                  className="w-full py-3 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all appearance-none cursor-pointer"
                  value={state.filterTopic}
                  onChange={(e) => setState(s => ({ ...s, filterTopic: e.target.value }))}
                >
                  {topics.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <button 
                onClick={() => setShowSolutions(!showSolutions)}
                className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                  showSolutions 
                  ? 'bg-emerald-600 text-white shadow-lg' 
                  : 'bg-white text-emerald-600 border border-emerald-600 hover:bg-emerald-50'
                }`}
              >
                <i className={`fas ${showSolutions ? 'fa-check-circle' : 'fa-circle'}`}></i>
                Reveal All Answers
              </button>
            </div>

            {/* Questions Grid */}
            <div className="grid grid-cols-1 gap-4">
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map((q) => (
                  <QuestionCard 
                    key={q.id} 
                    item={q} 
                    showSolutionDefault={showSolutions} 
                  />
                ))
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
                  <i className="fas fa-search-minus text-5xl text-slate-300 mb-4"></i>
                  <h3 className="text-xl font-bold text-slate-500">No matching questions found</h3>
                  <button 
                    onClick={() => setState(s => ({ ...s, searchQuery: '', filterTopic: 'All' }))}
                    className="mt-4 text-indigo-600 font-bold hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="mb-6 flex justify-between items-center print:hidden">
              <h2 className="text-2xl font-bold text-slate-800">Exam Preview</h2>
              <button 
                onClick={handlePrint}
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 shadow-lg flex items-center gap-2 transition-all active:scale-95"
              >
                <i className="fas fa-print"></i>
                Download / Print Assessment
              </button>
            </div>
            <ExamView questions={filteredQuestions} />
          </div>
        )}
      </main>

      {/* Floating Action Button for Mobile */}
      {state.currentView === 'home' && (
        <div className="fixed bottom-6 right-6 md:hidden">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      )}

      {/* Stats Counter */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-3 px-4 z-40 print:hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4 text-sm font-bold text-slate-500">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              {filteredQuestions.length} Questions
            </span>
            <span className="flex items-center gap-2 border-l border-slate-200 pl-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              {filteredQuestions.filter(q => q.difficulty === 'Easy').length} Easy
            </span>
            <span className="hidden sm:flex items-center gap-2 border-l border-slate-200 pl-4">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              {filteredQuestions.filter(q => q.difficulty === 'Medium').length} Medium
            </span>
            <span className="hidden sm:flex items-center gap-2 border-l border-slate-200 pl-4">
              <div className="w-2 h-2 rounded-full bg-rose-500"></div>
              {filteredQuestions.filter(q => q.difficulty === 'Hard').length} Hard
            </span>
          </div>
          <div className="text-xs text-slate-400 font-medium">
            Grade 7 Science Curriculum Alignment: Unit 1
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
