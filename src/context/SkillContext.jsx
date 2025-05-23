
import React, { createContext, useState, useEffect } from 'react';
import { toast } from '@/components/ui/sonner';

export const SkillContext = createContext();

export const SkillProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load skills from localStorage on first render
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        // In a real app, this would be an API call
        // For now, we'll use localStorage to persist data between sessions
        const savedSkills = localStorage.getItem('skills');
        
        if (savedSkills) {
          setSkills(JSON.parse(savedSkills));
        } else {
          // Example skills for first-time users
          const defaultSkills = [
            {
              id: '1',
              name: 'React',
              description: 'Learn React fundamentals and hooks',
              progress: 65,
              tasks: [
                { id: '101', name: 'Study useState hook' },
                { id: '102', name: 'Build a simple React app' }
              ]
            },
            {
              id: '2',
              name: 'Node.js',
              description: 'Master backend development with Node',
              progress: 40,
              tasks: [
                { id: '201', name: 'Create a REST API' },
                { id: '202', name: 'Learn Express middleware' }
              ]
            },
            {
              id: '3',
              name: 'MongoDB',
              description: 'Learn database design and queries',
              progress: 25,
              tasks: [
                { id: '301', name: 'Set up MongoDB Atlas' }
              ]
            }
          ];
          
          setSkills(defaultSkills);
          localStorage.setItem('skills', JSON.stringify(defaultSkills));
        }
      } catch (err) {
        setError('Failed to load skills');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    // Add a small delay to simulate API call
    setTimeout(() => {
      fetchSkills();
    }, 800);
  }, []);

  // Save skills to localStorage whenever they change
  useEffect(() => {
    if (skills.length > 0 && !loading) {
      localStorage.setItem('skills', JSON.stringify(skills));
    }
  }, [skills, loading]);

  // Add a new skill
  const addSkill = (skill) => {
    try {
      const newSkill = {
        ...skill,
        id: Date.now().toString(),
        tasks: []
      };
      setSkills([...skills, newSkill]);
      toast.success("Skill added successfully!");
    } catch (err) {
      toast.error("Failed to add skill");
      console.error(err);
    }
  };

  // Delete a skill
  const deleteSkill = (id) => {
    try {
      setSkills(skills.filter(skill => skill.id !== id));
    } catch (err) {
      toast.error("Failed to delete skill");
      console.error(err);
    }
  };

  // Update a skill
  const updateSkill = (id, updatedSkill) => {
    try {
      setSkills(skills.map(skill => 
        skill.id === id ? { ...skill, ...updatedSkill } : skill
      ));
    } catch (err) {
      toast.error("Failed to update skill");
      console.error(err);
    }
  };

  // Add a task to a skill
  const addTask = (skillId, taskName) => {
    try {
      const newTask = {
        id: Date.now().toString(),
        name: taskName
      };
      
      setSkills(skills.map(skill => 
        skill.id === skillId 
          ? { ...skill, tasks: [...skill.tasks, newTask] } 
          : skill
      ));
      toast.success("Task added successfully!");
    } catch (err) {
      toast.error("Failed to add task");
      console.error(err);
    }
  };

  // Delete a task
  const deleteTask = (skillId, taskId) => {
    try {
      setSkills(skills.map(skill => 
        skill.id === skillId 
          ? { ...skill, tasks: skill.tasks.filter(task => task.id !== taskId) } 
          : skill
      ));
      toast.success("Task deleted successfully!");
    } catch (err) {
      toast.error("Failed to delete task");
      console.error(err);
    }
  };

  return (
    <SkillContext.Provider 
      value={{ 
        skills, 
        loading, 
        error, 
        addSkill, 
        deleteSkill, 
        updateSkill, 
        addTask, 
        deleteTask 
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};
