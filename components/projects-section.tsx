"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js, Tailwind CSS and Shadcn UI designed by v0.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "React", "Tailwind CSS", "Shadcn UI", "v0"],
    githubUrl: "https://github.com/Nicompter/v0portfolio",
    liveUrl: "https://nicompter.de",
  },
  {
    title: "Count to 1 Billion",
    description: "A website which allows everyone to blick a button and count to 1 billion.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Node.js", "Redis", "Vite"],
    githubUrl: "https://github.com",
    liveUrl: "https://counter.nicompter.de",
  },
  {
    title: "Taskly",
    description: "A productivity app for managing tasks.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Firebase", "Tailwind CSS", "Shadcn UI", "CapacitorJS"],
    githubUrl: "https://github.com",
    liveUrl: "https://taskly.nicompter.de",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="container py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <Badge className="mb-4">Projects</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">My Recent Work</h2>
        <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-12">
          Here are some of the projects I&apos;ve worked on recently. Each project represents a unique challenge and
          solution.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full flex flex-col">
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-500 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
