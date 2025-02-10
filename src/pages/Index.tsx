
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center space-y-6 animate-fade-up">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Your thoughts, organized.
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A beautiful space for your notes, ideas, and everything in between.
          </p>
        </div>
        <div className="space-x-4">
          <Button onClick={() => navigate("/login")} variant="outline">
            Login
          </Button>
          <Button onClick={() => navigate("/signup")}>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
