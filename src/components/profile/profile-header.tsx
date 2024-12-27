import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Edit2 } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  email: string;
  username: string;
  avatarUrl?: string;
  onEdit: () => void;
}

export function ProfileHeader({ name, email, username, avatarUrl, onEdit }: ProfileHeaderProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-muted-foreground">{email}</p>
          <p className="text-sm text-muted-foreground">@{username}</p>
        </div>
        <Button variant="outline" size="sm" onClick={onEdit}>
          <Edit2 className="h-4 w-4 ml-2" />
          ویرایش پروفایل
        </Button>
      </CardHeader>
    </Card>
  );
}