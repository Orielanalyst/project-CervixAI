import React from "react";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Oriel Loh N.",
      role: "Founder & CEO",
      image: "Oriel.jpg",
      bio: "Data Analyst and Researcher with 5+ years of experience",
      socials: {
        linkedin: "https://linkedin.com/in/orielndichia",
        github: "https://github.com/orielanalyst",
        email: "orielanalyst@gmail.com"
      }
    },
    {
      name: "Bafon Precious",
      role: "Software Engineer",
      image: "precious.jpg",
      bio: "Computer Engineer, National Higher Polytechnic Institute (NAHPI) Bamenda",
      socials: {
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        github: ""
      }
    },
    {
      name: "Gerald Tata",
      role: "Communication officer",
      image: "gerald.jpg",
      bio: "Machine learning specialist focused on computer vision applications.",
      socials: {
        github: "https://github.com/alexjohnson",
        email: "alex@cerVixAI.com"
      }
    },
    {
      name: "Sarah Williams",
      role: "Product Manager",
      image: "/team/sarah-williams.jpg",
      bio: "Healthcare technology product leader with 10+ years experience.",
      socials: {
        linkedin: "https://linkedin.com/in/sarahwilliams"
      }
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our Dedicated Team
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Meet the brilliant minds behind CerVixAI working to revolutionize cervical cancer screening.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="relative mb-6">
                  <Avatar className="w-24 h-32 border-4 border-white shadow-lg">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-2xl font-bold">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {member.socials.linkedin && (
                      <a 
                        href={member.socials.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a 
                        href={member.socials.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-slate-800 text-white p-2 rounded-full hover:bg-slate-900 transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a 
                        href={member.socials.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {member.socials.email && (
                      <a 
                        href={`mailto:${member.socials.email}`}
                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-center mb-4">{member.bio}</p>
                
                <Button variant="outline" className="mt-auto">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">
            Want to join our team?
          </h3>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
            We're Hiring
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;