
export type QuestionType = 'Multiple Choice' | 'Short Answer' | 'Calculation' | 'Descriptive';

export interface Question {
  id: number;
  question: string;
  solution: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  type: QuestionType;
}

export interface AppState {
  currentView: 'home' | 'exam' | 'quiz';
  searchQuery: string;
  filterTopic: string;
}
