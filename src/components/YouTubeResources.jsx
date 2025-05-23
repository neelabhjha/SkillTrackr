
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Youtube, ExternalLink, RefreshCcw } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const YouTubeResources = ({ skillName }) => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideos = async () => {
    if (!skillName) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Mock API response with different videos based on skill name
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay
      
      let mockVideos = [];
      
      if (skillName.toLowerCase().includes('react')) {
        mockVideos = [
          { id: 'y_pM4xDuO-c', title: 'React in 100 Seconds', url: 'https://www.youtube.com/watch?v=y_pM4xDuO-c' },
          { id: 'bMknfKXIFA8', title: 'React Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8' },
          { id: 'w7ejDZ8SWv8', title: 'React JS Crash Course', url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8' }
        ];
      } else if (skillName.toLowerCase().includes('node')) {
        mockVideos = [
          { id: 'ENrzD9HAZK4', title: 'Node.js Crash Course', url: 'https://www.youtube.com/watch?v=ENrzD9HAZK4' },
          { id: 'TlB_eWDSMt4', title: 'Node.js Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=TlB_eWDSMt4' },
          { id: 'Oe421EPjeBE', title: 'Node.js and Express.js Full Course', url: 'https://www.youtube.com/watch?v=Oe421EPjeBE' }
        ];
      } else if (skillName.toLowerCase().includes('mongo')) {
        mockVideos = [
          { id: 'ofme2o29ngU', title: 'MongoDB in 100 Seconds', url: 'https://www.youtube.com/watch?v=ofme2o29ngU' },
          { id: '-56x56UppqQ', title: 'MongoDB Crash Course', url: 'https://www.youtube.com/watch?v=-56x56UppqQ' },
          { id: '2QQGWYe7IDU', title: 'MongoDB with Node.js', url: 'https://www.youtube.com/watch?v=2QQGWYe7IDU' }
        ];
      } else {
        // Generic programming tutorials for any other skill
        mockVideos = [
          { id: 'zOjov-2OZ0E', title: `Learn ${skillName} Programming`, url: 'https://www.youtube.com/watch?v=zOjov-2OZ0E' },
          { id: 'bJzb-RuUcMU', title: `${skillName} Crash Course`, url: 'https://www.youtube.com/watch?v=bJzb-RuUcMU' }
        ];
      }
      
      setResources(mockVideos);
    } catch (err) {
      setError('Failed to fetch resources');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [skillName]);

  return (
    <div className="py-2">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-medium flex items-center gap-1">
          <Youtube className="h-4 w-4" />
          Tutorial Resources
        </h4>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={fetchVideos} 
          disabled={loading}
          className="h-7 w-7 p-0"
          title="Refresh resources"
        >
          <RefreshCcw className="h-3.5 w-3.5" />
          <span className="sr-only">Refresh</span>
        </Button>
      </div>

      {loading ? (
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-5/6" />
          <Skeleton className="h-5 w-4/6" />
        </div>
      ) : error ? (
        <div className="py-2 text-sm text-red-500">
          Error: {error}
        </div>
      ) : resources.length === 0 ? (
        <div className="py-2 text-sm text-muted-foreground">
          No resources found.
        </div>
      ) : (
        <ul className="space-y-2">
          {resources.map((resource) => (
            <li key={resource.id} className="text-sm">
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary transition-colors"
              >
                <span className="flex-1">{resource.title}</span>
                <ExternalLink className="h-3.5 w-3.5 ml-1 flex-shrink-0" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default YouTubeResources;
