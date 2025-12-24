
import React from 'react';
import { Question } from '../types';

interface ExamViewProps {
  questions: Question[];
}

const ExamView: React.FC<ExamViewProps> = ({ questions }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg print:shadow-none print:p-0">
      <div className="border-b-2 border-slate-900 pb-4 mb-8 text-center">
        <h1 className="text-3xl font-serif font-bold uppercase tracking-widest">End of Term Science Assessment</h1>
        <p className="text-slate-600 mt-2 font-medium">Grade 7 • Unit 1: Measurement in Science</p>
        <div className="mt-4 flex justify-between text-sm italic text-slate-500">
          <span>Student Name: ____________________________</span>
          <span>Class: _________</span>
          <span>Date: __________</span>
        </div>
      </div>

      <div className="space-y-8">
        {questions.map((q, idx) => (
          <div key={q.id} className="pb-4">
            <div className="flex gap-4">
              <span className="font-bold text-lg">{idx + 1}.</span>
              <div className="flex-1">
                <p className="text-lg leading-relaxed mb-4">{q.question}</p>
                {q.type === 'Descriptive' || q.type === 'Calculation' ? (
                  <div className="mt-4 h-24 border-b border-dashed border-slate-300"></div>
                ) : q.type === 'Short Answer' ? (
                   <div className="mt-2 h-8 border-b border-dashed border-slate-300"></div>
                ) : null}
              </div>
              <span className="text-slate-400 text-sm ml-auto">[3 marks]</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-slate-200 text-center text-xs text-slate-400">
        © 2024 Educational Content Creator • ScienceQuest
      </div>
    </div>
  );
};

export default ExamView;
