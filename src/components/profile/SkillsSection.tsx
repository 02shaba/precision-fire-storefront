
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

export const SkillsSection = () => {
  const skills = [
    { name: "JavaScript", level: "Intermediate", color: "bg-yellow-500" },
    { name: "React", level: "Learning", color: "bg-blue-500" },
    { name: "TypeScript", level: "Learning", color: "bg-blue-600" },
    { name: "HTML/CSS", level: "Intermediate", color: "bg-orange-500" },
    { name: "Tailwind CSS", level: "Learning", color: "bg-cyan-500" },
    { name: "Git", level: "Beginner", color: "bg-red-500" },
    { name: "Node.js", level: "Learning", color: "bg-green-600" },
    { name: "Python", level: "Beginner", color: "bg-green-500" },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Intermediate": return "bg-primary";
      case "Learning": return "bg-secondary";
      case "Beginner": return "bg-muted";
      default: return "bg-muted";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5" />
          Skills & Technologies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                <span className="font-medium">{skill.name}</span>
              </div>
              <Badge variant="secondary" className={getLevelColor(skill.level)}>
                {skill.level}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
