
import React, { useContext } from 'react';
import { SkillContext } from '../context/SkillContext';
import Header from '../components/Header';
import AddSkillForm from '../components/AddSkillForm';
import SkillCard from '../components/SkillCard';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Define a type for the SkillContext
interface SkillContextType {
  skills: any[];
  loading: boolean;
  error: string | null;
  addSkill: (skill: any) => void;
  deleteSkill: (id: string) => void;
  updateSkill: (id: string, skill: any) => void;
  addTask: (skillId: string, taskName: string) => void;
  deleteTask: (skillId: string, taskId: string) => void;
}

const Index = () => {
  // Cast the context to the correct type
  const { skills, loading, error } = useContext(SkillContext) as SkillContextType;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero section */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-skill-blue via-skill-purple to-skill-pink">
              Track Your Learning Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Keep track of your skills, manage learning tasks, and discover helpful resources to accelerate your progress.
            </p>
            <Button 
              variant="outline" 
              className="mx-auto flex items-center mt-2" 
              onClick={() => {
                window.scrollTo({
                  top: 400,
                  behavior: 'smooth'
                });
              }}
            >
              View My Skills
              <ChevronDown className="ml-2 h-4 w-4 animate-bounce" />
            </Button>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">My Skills</h3>
            <p className="text-muted-foreground">
              Track your progress and manage tasks for each skill you're learning.
            </p>
          </div>
          
          <AddSkillForm />
          
          {loading ? (
            <div className="py-20 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent"></div>
              <p className="mt-4 text-muted-foreground">Loading your skills...</p>
            </div>
          ) : error ? (
            <div className="py-20 text-center text-destructive">
              <p>Error: {error}</p>
            </div>
          ) : skills.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map(skill => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center border-2 border-dashed rounded-xl">
              <h3 className="text-xl font-medium mb-2">No skills added yet</h3>
              <p className="text-muted-foreground mb-4">
                Start by adding a skill you want to learn or track
              </p>
            </div>
          )}
        </div>
      </main>
      
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            SkillTrackr &copy; {new Date().getFullYear()} — Built by a passionate developer
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
