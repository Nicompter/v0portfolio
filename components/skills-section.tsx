"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Layout, Layers, Palette, Server } from "lucide-react"

const skills = [
  {
    category: "Frontend Development",
    icon: <Layout className="h-8 w-8" />,
    items: ["HTML", "JavaScript", "TypeScript", "React", "Next.js", "Flutter", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend Development",
    icon: <Server className="h-8 w-8" />,
    items: ["Node.js", "Express", "Python"],
  },
  {
    category: "Database",
    icon: <Database className="h-8 w-8" />,
    items: ["MongoDB", "MySQL", "Firebase", "SQLite", "Redis"],
  },
  {
    category: "Vibecoding",
    icon: <Palette className="h-8 w-8" />,
    items: ["ChatGPT", "Claude", "Cursor", "Windsurf"],
  },
  {
    category: "DevOps",
    icon: <Layers className="h-8 w-8" />,
    items: ["Git", "GitHub", "Docker", "CI/CD", "Vercel"],
  },
  {
    category: "Programming Languages",
    icon: <Code className="h-8 w-8" />,
    items: ["JavaScript", "TypeScript", "Python", "Java", "Dart"],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="container py-24 md:py-32 bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <Badge className="mb-4">Skills</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">My Expertise</h2>
        <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-12">
          I&apos;ve worked with a variety of technologies and tools throughout my career. Here&apos;s a snapshot of my
          technical skills.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-primary">{skill.icon}</div>
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <Badge key={itemIndex} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
