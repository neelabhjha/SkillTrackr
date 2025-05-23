
import React, { useState, useContext } from 'react';
import { SkillContext } from '../context/SkillContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const AddTaskForm = ({ skillId }) => {
  const [taskName, setTaskName] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const { addTask } = useContext(SkillContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '') return;
    
    addTask(skillId, taskName);
    setTaskName('');
    setIsAdding(false);
  };

  if (!isAdding) {
    return (
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => setIsAdding(true)}
        className="text-sm w-full justify-start"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add Task
      </Button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2 space-y-2 animate-fade-in">
      <Input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
        className="text-sm"
        autoFocus
      />
      <div className="flex justify-end space-x-2">
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => setIsAdding(false)}
        >
          Cancel
        </Button>
        <Button type="submit" size="sm">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddTaskForm;
