import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FocusEffect } from "@/components/focus-effect";
import { TrueFocusText } from "@/components/true-focus-text";
import { DecryptedText } from "@/components/decrypted-text";
import { ProjectCard } from "@/components/project-card";
import { ExperienceCard } from "@/components/experience-card";
import { ContactForm } from "@/components/contact-form";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Star,
  Download,
} from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Picture Collection Database",
      description:
        "Flask web application for NYPL Picture Collection with NLP-powered search",
      image: "/pcdb.png",
      technologies: [
        "Flask",
        "Python",
        "PostgreSQL",
        "NLP",
        "Sentence Transformers",
      ],
      highlights: [
        "Migrated 11K+ metadata records from Excel to PostgreSQL",
        "Implemented NLP pipeline for semantic search capabilities",
        "Reduced librarian workload by ~5 hours/week",
        "Deployed production Flask application",
      ],
      githubUrl: "https://github.com/Otto-Cline/PictureCollectionDB", // Added placeholder GitHub URL
      liveUrl: "https://picturecollectiondb.onrender.com", // Added placeholder live URL
    },
    {
      title: "Stock Sentinel: Market Sentiment Analyzer",
      description:
        "Java-based tool that analyzes stock market sentiment using news articles",
      image: "/corenlp-logo.png",
      technologies: ["Java", "Stanford CoreNLP", "NewsAPI"],
      highlights: [
        "Scrapes the most recent finance related articles from NewsAPI",
        "Uses the Stanford CoreNLP library to analyze sentiment of each article",
        "Generates a sentiment score for each stock based on the articles using custom weights",
        "Aggregates scores into a market sentiment conclusion",
      ],
      githubUrl: "https://github.com/Otto-Cline/StockSentinel", // Added placeholder live URL
    },
    {
      title: "ClubStop Platform (Still in Development)",
      description:
        "React-based platform for college students to discover and rate campus clubs",
      technologies: ["React", "TypeScript", "MySQL", "Node.js"],
      highlights: [
        "Co-founded student-focused web platform",
        "Built responsive search and filtering system",
        "Implemented user review and rating functionality",
        "Designed intuitive navigation and user experience",
      ],
      githubUrl: "https://github.com/guha-mahesh/ClubStop", // Added placeholder GitHub URL
    },
    {
      title: "Survey Matching Platform",
      description:
        "3rd place hackathon project connecting professors with research participants",
      image: "/survayyy.jpg",
      technologies: ["React", "TypeScript", "API Integration"],
      highlights: [
        "Won 3rd place at STHacks for functionality and usability",
        "Built matching algorithm for survey participants",
        "Created responsive user interface in 48 hours",
        "Solved real academic research problem with a partner",
      ],
      liveUrl: "https://devpost.com/software/go-5dnxvk",
      githubUrl: "https://github.com/guha-mahesh/Survayyy",
    },
  ];

  const experiences = [
    {
      title: "Computer Science and Math Tutor",
      company: "Knack Tutoring",
      location: "Boston, MA",
      duration: "March 2025 – Present",
      description: [
        "Tutored students in Calculus and Java, tailoring support to individual learning needs",
        "Maintained a 5-star average rating across 14 two-hour sessions",
        "Helped 2 students improve from C/B- range to A grades",
        "Completed Knack's training certification on effective peer tutoring",
      ],
      skills: ["Java", "Calculus", "Teaching", "Problem Solving"],
      image: "/knack.jpeg",
    },
    {
      title: "New York Public Library Page",
      company: "General Periodicals Division",
      location: "Manhattan, NY",
      duration: "July 2023 – April 2024",
      description: [
        "Supported 200+ daily patrons by issuing library cards, checking out periodicals, and answering research requests",
        "Located rare documents using NYPL's database for academic and international researchers",
        "Organized and maintained a collection of 10,000+ periodicals, improving accessibility and retrieval efficiency",
      ],
      skills: [
        "Customer Service",
        "Database Management",
        "Research",
        "Organization",
      ],
      image: "/nypl.jpg",
    },
    {
      title: "Captain, Sting Robotics Team",
      company: "Baccalaureate School for Global Education",
      location: "Astoria, NY",
      duration: "October 2022 – February 2024",
      description: [
        "Developed Java-based control logic enabling omnidirectional movement",
        "Led team to 1st place win at FTC qualifier (32 schools)",
        "Directed 22 team members in assembly and development of robot logic",
        "Managed team finances and coordinated project timelines",
      ],
      skills: ["Java", "Leadership", "Project Management", "Robotics"],
      image: "/robotics.png",
    },
  ];

  return (
    <div className="min-h-screen bg-muted/100">
      {/* Hero Section with Focus Effect */}
      <FocusEffect className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <div className="space-y-8">
              <h1
                className="font-mono text-[6rem] md:text-[8rem] font-bold text-foreground 
                bg-gradient-to-r from-teal-900 to-teal-900 bg-clip-text text-transparent"
                style={{
                  margin: "10px",
                }}
              >
                <TrueFocusText text="Otto Cline" />
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Full Stack Software Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Building real software that impacts real people (and doing other
                cool stuff).
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/otto-cline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://linkedin.com/in/otto-cline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="/Otto_Cline_Resume.pdf"
                  download="Otto_Cline_Resume.pdf"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3.81</div>
                <div className="text-sm text-muted-foreground">GPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5★</div>
                <div className="text-sm text-muted-foreground">
                  Tutor Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">3rd</div>
                <div className="text-sm text-muted-foreground">
                  Hackathon Place
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">1st</div>
                <div className="text-sm text-muted-foreground">
                  Robotics Win
                </div>
              </div>
            </div>
          </div>
        </div>
      </FocusEffect>

      {/* About Section */}
      <div className="bg-teal-950">
        <section className="py-20 bg-muted/100 border-4 border-muted/100 rounded-b-[12rem] p-4">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-muted/100 relative font-serif text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="relative z-10">
                  <DecryptedText text="Some Fun Info About Me" />
                </span>
                <span
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[120%] h-[180%] bg-teal-950 -z-0 rounded-lg rotate-[-2deg]"
                ></span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="w-5 h-5 text-accent" />
                    <span>Northeastern University • Class of 2028</span>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Hi! My name is Otto I&apos;m a college sophomore and
                    software developer. I particularly enjoy backend
                    development, and am currently in the process of
                    strengthening my skills in ML. My background is mainly in
                    Java but I am versed in a variety of tools and languages
                    including Python, TypeScript, PostgreSQL, and more. I love
                    talking and learning about tech and finance, so feel free to
                    reach out!
                  </p>

                  <p className="leading-relaxed">
                    My current Python tech stack is FastAPI + React +
                    TypeScript, but I also still do Java development. Recently I
                    have been trying to improve at using OpenSearch&apos;s Java
                    client.
                  </p>

                  <div className="space-y-3">
                    <h3 className="font-serif text-lg font-semibold">
                      Some of my interests:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">
                        Music album reviewing ({" "}
                        <a
                          href="https://imgur.com/a/3VJtW0x"
                          className="underline hover:text-teal-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          check out my favorite albums
                        </a>
                        )
                      </Badge>
                      <Badge variant="outline">Soccer (go spurs)</Badge>
                      <Badge variant="outline">Philosophy</Badge>
                      <Badge variant="outline">Stock trading</Badge>
                    </div>
                  </div>
                </div>

                <Card className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4">
                    Technical Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2 text-accent">
                        Languages
                      </h4>
                      <div className="space-y-1 text-sm">
                        <div>Java</div>
                        <div>Python</div>
                        <div>TypeScript</div>
                        <div>SQL</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-accent">
                        Technologies
                      </h4>
                      <div className="space-y-1 text-sm">
                        <div>React</div>
                        <div>FastAPI (formerly used Flask)</div>
                        <div>Docker</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2 text-accent">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Git",
                        "GitHub",
                        "Supabase",
                        "Node.js",
                        "IntelliJ",
                        "VSCode",
                      ].map((tool) => (
                        <Badge
                          key={tool}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-teal-950">
        <div className="container mx-auto px-4">
          <div className="max-w-8xl mx-auto">
            <h2 className="text-teal-950 relative font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="relative z-10">
                <DecryptedText text="Projects I'm Proud Of" />
              </span>
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[115%] h-[160%] bg-muted/100 -z-0 rounded-lg rotate-[2deg]"
              ></span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className="font-serif text-3xl md:text-4xl font-bold text-center mb-12
            bg-gradient-to-r from-teal-1000 via-teal-900 to-teal-800 bg-clip-text text-transparent"
            >
              <DecryptedText text="Experience" />
            </h2>

            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} {...experience} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className="font-serif text-3xl md:text-4xl font-bold text-center mb-12
            bg-gradient-to-r from-teal-1000 via-teal-900 to-teal-800 bg-clip-text text-transparent"
            >
              <DecryptedText text="Education" />
            </h2>

            <Card className="border-2 border-accent/20">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-2xl">
                  Northeastern University
                </CardTitle>
                <CardDescription className="text-lg">
                  Khoury College of Computer Sciences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-accent" />
                      <span className="font-medium">Bachelor of Science</span>
                    </div>
                    <div className="text-muted-foreground">
                      Computer Science and Business Administration
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>Boston, MA</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-accent" />
                      <span className="font-medium">GPA: 3.81</span>
                    </div>
                    <div className="text-muted-foreground">
                      Expected Graduation: 2028
                    </div>
                    <div className="text-muted-foreground">
                      September 2024 – Present
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Algorithms and Data Structures",
                      "Discrete Structures",
                      "Object Oriented Design",
                      "Fundamentals of CS I & II",
                      "Managerial Accounting I & II",
                    ].map((course) => (
                      <Badge key={course} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="font-serif text-3xl md:text-4xl font-bold text-center mb-12
            bg-gradient-to-r from-teal-1000 via-teal-900 to-teal-800 bg-clip-text text-transparent"
            >
              <DecryptedText text="Let's Connect" />
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">
                    Get In Touch
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I&apos;m actively seeking internship opportunities for
                    Summer 2026 in software engineering, tech consulting, and
                    business roles. I&apos;d love to discuss how my technical
                    skills and business acumen can contribute to your team.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent" />
                    <a
                      href="mailto:ottoclinework@gmail.com"
                      className="hover:text-accent transition-colors"
                    >
                      ottoclinework@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-accent" />
                    <a
                      href="https://github.com/otto-cline"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      github.com/otto-cline
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-accent" />
                    <a
                      href="https://linkedin.com/in/otto-cline"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      linkedin.com/in/otto-cline
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Otto Cline. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
