
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Calendar, Code, BookOpen, Trophy } from "lucide-react";
import { SkillsSection } from "@/components/profile/SkillsSection";
import { ProjectsSection } from "@/components/profile/ProjectsSection";
import { LearningJourney } from "@/components/profile/LearningJourney";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
              <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face" />
              <AvatarFallback className="text-2xl font-semibold">JD</AvatarFallback>
            </Avatar>
            
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-2">John Doe</h1>
              <p className="text-xl text-muted-foreground mb-4">Aspiring Software Developer</p>
              <p className="text-muted-foreground max-w-2xl mb-6">
                Passionate about learning software development and building innovative solutions. 
                Currently expanding my knowledge in modern web technologies and best practices.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Learning since 2024</span>
                </div>
              </div>
              
              <div className="flex gap-3 justify-center md:justify-start">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  I'm on an exciting journey to become a skilled software developer. My passion for technology 
                  and problem-solving drives me to continuously learn new programming languages, frameworks, 
                  and development methodologies. I believe in building clean, efficient, and user-friendly applications 
                  that make a real difference.
                </p>
              </CardContent>
            </Card>

            {/* Projects Section */}
            <ProjectsSection />

            {/* Learning Journey */}
            <LearningJourney />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills Section */}
            <SkillsSection />

            {/* Current Focus */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Currently Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">React & TypeScript</h4>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">75% Complete</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Node.js & Express</h4>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">60% Complete</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Database Design</h4>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">45% Complete</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Completed first React project</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Built responsive web app</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Learned Git & GitHub</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Understanding of APIs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
