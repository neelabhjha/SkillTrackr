
import React, { useContext } from 'react';
import { SkillContext } from '../context/SkillContext';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import AddTaskForm from './AddTaskForm';

const TaskList = ({ skillId, tasks }) => {
  const { deleteTask } = useContext(SkillContext);

  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium mb-2">Tasks</h4>
      {tasks.length > 0 ? (
        <ul className="space-y-1">
          {tasks.map(task => (
            <li 
              key={task.id} 
              className="task-item text-sm flex justify-between items-center group"
            >
              <span>{task.name}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteTask(skillId, task.id)}
                className="opacity-0 group-hover:opacity-100 h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Delete task</span>
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground">No tasks yet.</p>
      )}
      <div className="mt-2">
        <AddTaskForm skillId={skillId} />
      </div>
    </div>
  );
};

export default TaskList;
