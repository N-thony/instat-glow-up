import { Card } from "@/components/ui/card";
import { Linkedin, Mail, Github } from "lucide-react";

const coreTeam = [
  {
    name: "Prof. Roger Stern",
    role: "Project Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Danny Parsons",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Lily Clements",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "David Stern",
    role: "Statistical Consultant",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];

const developers = [
  {
    name: "Shadrack Kibet",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    name: "Patrick Kiplangat",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
  {
    name: "Grace Akinyi",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "Emmanuel Chalo",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Susan Mburu",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    name: "John Kamau",
    role: "QA Engineer",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop",
  },
  {
    name: "Faith Wanjiru",
    role: "Documentation Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    name: "Michael Omondi",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated team of over 15 professionals working together to make statistical analysis accessible to everyone.
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-12">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8 text-center">
            Core Leadership
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {coreTeam.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-display font-semibold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">{member.role}</p>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-3.5 w-3.5 text-primary" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Mail className="h-3.5 w-3.5 text-primary" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Github className="h-3.5 w-3.5 text-primary" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Team */}
        <div>
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8 text-center">
            Development Team
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {developers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-border animate-fade-in"
                style={{ animationDelay: `${(index + 4) * 0.08}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-base font-display font-semibold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3">{member.role}</p>
                  <div className="flex gap-2">
                    <button className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-3 w-3 text-primary" />
                    </button>
                    <button className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Mail className="h-3 w-3 text-primary" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 rounded-full">
            <span className="text-foreground font-medium">Plus many more contributors from our global community</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
