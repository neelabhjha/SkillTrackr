
import React, { useState, useContext } from 'react';
import { SkillContext } from '../context/SkillContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const AddSkillForm = () => {
  const { addSkill } = useContext(SkillContext);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    progress: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleProgressChange = (value) => {
    setFormData({
      ...formData,
      progress: value[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() === '') return;
    
    addSkill(formData);
    setFormData({ name: '', description: '', progress: 0 });
    setIsFormOpen(false);
    toast.success("Skill added successfully!");
  };

  return (
    <div className="mb-8 w-full">
      {!isFormOpen ? (
        <Button 
          onClick={() => setIsFormOpen(true)}
          className="w-full bg-gradient-to-r from-skill-blue to-skill-purple hover:from-skill-purple hover:to-skill-blue transition-all duration-300"
          variant="default"
        >
          <Plus className="mr-2 h-5 w-5" />
          Add New Skill
        </Button>
      ) : (
        <Card className="w-full animate-scale-in">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Add New Skill</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Skill Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. React, Node.js, MongoDB"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="What do you want to learn about this skill?"
                  rows={3}
                />
              </div>
              
              <div className="space-y-4">
                <label className="text-sm font-medium">
                  Current Progress: {formData.progress}%
                </label>
                <Slider
                  defaultValue={[0]}
                  max={100}
                  step={5}
                  value={[formData.progress]}
                  onValueChange={handleProgressChange}
                  className="py-4"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsFormOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Save Skill</Button>
            </CardFooter>
          </form>
        </Card>
      )}
    </div>
  );
};

export default AddSkillForm;
