
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, CheckCircle } from "lucide-react";

export const LearningJourney = () => {
  const milestones = [
    {
      date: "Jan 2024",
      title: "Started Learning Web Development",
      description: "Began my journey with HTML, CSS, and basic JavaScript fundamentals.",
      status: "completed"
    },
    {
      date: "Mar 2024",
      title: "First JavaScript Project",
      description: "Built my first interactive web application - a simple calculator.",
      status: "completed"
    },
    {
      date: "May 2024",
      title: "Discovered React",
      description: "Started learning React and component-based architecture.",
      status: "completed"
    },
    {
      date: "Jul 2024",
      title: "TypeScript & Modern Tools",
      description: "Diving into TypeScript, modern build tools, and best practices.",
      status: "in-progress"
    },
    {
      date: "Sep 2024",
      title: "Backend Development",
      description: "Planning to learn Node.js, databases, and API development.",
      status: "planned"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "in-progress":
        return <div className="h-4 w-4 border-2 border-blue-600 rounded-full animate-pulse" />;
      case "planned":
        return <div className="h-4 w-4 border-2 border-muted-foreground rounded-full" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500/10 text-green-700 border-green-500/20";
      case "in-progress": return "bg-blue-500/10 text-blue-700 border-blue-500/20";
      case "planned": return "bg-muted text-muted-foreground";
      default: return "bg-muted";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Learning Journey
        </CardTitle>
        <CardDescription>
          My progress and milestones in software development
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                {getStatusIcon(milestone.status)}
                {index < milestones.length - 1 && (
                  <div className="w-px h-12 bg-border mt-2"></div>
                )}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-semibold">{milestone.title}</h4>
                  <Badge className={getStatusColor(milestone.status)} variant="outline">
                    {milestone.status.replace('-', ' ')}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-3 w-3" />
                  <span>{milestone.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
