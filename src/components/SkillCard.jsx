
import React, { useState, useContext } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Trash, Edit, Check, X } from 'lucide-react';
import { SkillContext } from '../context/SkillContext';
import TaskList from './TaskList';
import YouTubeResources from './YouTubeResources';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { toast } from '@/components/ui/sonner';

const SkillCard = ({ skill }) => {
  const { deleteSkill, updateSkill } = useContext(SkillContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: skill.name,
    description: skill.description,
    progress: skill.progress
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value
    });
  };

  const handleProgressChange = (value) => {
    setEditData({
      ...editData,
      progress: value[0]
    });
  };

  const handleSave = () => {
    if (editData.name.trim() === '') return;
    updateSkill(skill.id, editData);
    setIsEditing(false);
    toast.success("Skill updated successfully!");
  };

  const handleDelete = () => {
    deleteSkill(skill.id);
    toast.success("Skill deleted successfully!");
  };

  const getProgressColor = (progress) => {
    if (progress < 30) return 'bg-skill-blue';
    if (progress < 70) return 'bg-skill-purple';
    return 'bg-skill-green';
  };

  return (
    <Card className="skill-card overflow-hidden">
      <CardHeader className="pb-2">
        {!isEditing ? (
          <>
            <CardTitle className="flex items-center justify-between">
              <span>{skill.name}</span>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setIsEditing(true)}
                >
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleDelete}
                  className="text-destructive"
                >
                  <Trash className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {skill.description}
            </p>
          </>
        ) : (
          <div className="space-y-3 animate-fade-in">
            <div className="space-y-1">
              <label htmlFor={`edit-name-${skill.id}`} className="text-xs font-medium">
                Skill Name
              </label>
              <Input
                id={`edit-name-${skill.id}`}
                name="name"
                value={editData.name}
                onChange={handleEditChange}
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor={`edit-desc-${skill.id}`} className="text-xs font-medium">
                Description
              </label>
              <Textarea
                id={`edit-desc-${skill.id}`}
                name="description"
                value={editData.description}
                onChange={handleEditChange}
                rows={2}
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-medium">
                Progress: {editData.progress}%
              </label>
              <Slider
                max={100}
                step={5}
                value={[editData.progress]}
                onValueChange={handleProgressChange}
              />
            </div>
            
            <div className="flex justify-end gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  setEditData({
                    name: skill.name,
                    description: skill.description,
                    progress: skill.progress
                  });
                  setIsEditing(false);
                }}
              >
                <X className="h-4 w-4 mr-1" />
                Cancel
              </Button>
              <Button size="sm" onClick={handleSave}>
                <Check className="h-4 w-4 mr-1" />
                Save
              </Button>
            </div>
          </div>
        )}
      </CardHeader>
      
      {!isEditing && (
        <CardContent className="pb-2">
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span className="font-medium">{skill.progress}%</span>
            </div>
            <Progress 
              value={skill.progress} 
              className={`h-2 ${getProgressColor(skill.progress)}`}
            />
          </div>
          
          <TaskList skillId={skill.id} tasks={skill.tasks} />
          
          <div className="border-t mt-4">
            <YouTubeResources skillName={skill.name} />
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default SkillCard;
