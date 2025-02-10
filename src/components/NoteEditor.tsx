
import React, { useEffect, useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Save, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from './ui/use-toast';

export const NoteEditor = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const loadNote = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('notes')
          .select('content')
          .eq('user_id', user.id)
          .order('updated_at', { ascending: false })
          .limit(1)
          .single();

        if (error) throw error;
        if (data) setContent(data.content);
      } catch (error) {
        console.error('Error loading note:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNote();
  }, [user]);

  const handleSave = async () => {
    if (!user) return;

    try {
      setLoading(true);
      const { error } = await supabase
        .from('notes')
        .insert({
          content,
          user_id: user.id
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Note saved successfully",
      });
    } catch (error) {
      console.error('Error saving note:', error);
      toast({
        title: "Error",
        description: "Failed to save note",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-4 h-full bg-white/50 backdrop-blur-sm animate-fade-up">
      <div className="flex flex-col h-full">
        <textarea
          className="w-full flex-1 min-h-[500px] p-4 bg-transparent border-none focus:outline-none resize-none"
          placeholder="Start writing your note here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={loading}
        />
        <div className="flex justify-end mt-4">
          <Button
            onClick={handleSave}
            disabled={loading}
            className="gap-2"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            Save Note
          </Button>
        </div>
      </div>
    </Card>
  );
};
