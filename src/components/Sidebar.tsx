
import { Folder, Hash, Search } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

export function AppSidebar() {
  const folders = [
    { id: '1', name: 'Personal' },
    { id: '2', name: 'Work' },
    { id: '3', name: 'Projects' },
  ];

  const tags = [
    { id: '1', name: 'Important' },
    { id: '2', name: 'Todo' },
    { id: '3', name: 'Ideas' },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <div className="px-4 py-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              placeholder="Search notes..."
              className="w-full rounded-md border border-input bg-white px-8 py-2 text-sm"
            />
          </div>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Folders</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {folders.map((folder) => (
                <SidebarMenuItem key={folder.id}>
                  <SidebarMenuButton>
                    <Folder className="h-4 w-4 mr-2" />
                    <span>{folder.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Tags</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tags.map((tag) => (
                <SidebarMenuItem key={tag.id}>
                  <SidebarMenuButton>
                    <Hash className="h-4 w-4 mr-2" />
                    <span>{tag.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
