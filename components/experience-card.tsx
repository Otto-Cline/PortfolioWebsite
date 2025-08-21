import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skills?: string[];
  image?: string;
}

export function ExperienceCard({
  title,
  company,
  location,
  duration,
  description,
  skills,
  image,
}: ExperienceCardProps) {
  return (
    <Card className="border-l-4 border-l-accent hover:shadow-md transition-shadow duration-300">
      <div className="grid md:grid-cols-3 gap-4">
        {/* Left side - content (takes 2/3 width) */}
        <div className="md:col-span-2">
          <CardHeader>
            <CardTitle className="font-serif text-lg">{title}</CardTitle>
            <CardDescription className="font-medium text-foreground">
              {company}
            </CardDescription>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2 text-sm">
              {description.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {skills && (
              <div className="flex flex-wrap gap-2 pt-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </div>

        {/* Right side - image (takes 1/3 width) */}
        {image && (
          <div className="md:col-span-1 p-4 flex items-center justify-center">
            <img
              src={image}
              alt={`${title} at ${company}`}
              className="object-cover"
            />
          </div>
        )}
      </div>
    </Card>
  );
}
