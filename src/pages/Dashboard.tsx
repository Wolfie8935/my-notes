
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { NoteEditor } from "@/components/NoteEditor";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <AppSidebar />
        <main className="flex-1 p-6">
          <SidebarTrigger />
          <div className="max-w-4xl mx-auto">
            <NoteEditor />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
