"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github,  Mail } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="container py-24 md:py-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center space-y-4"
        >
          <div className="space-y-2">
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hi, I&apos;m <span style={{ color: "#fe0187" }}>Nicompter</span>
            </motion.h1>
            <motion.p
              className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              A passionate developer crafting beautiful digital experiences with modern technologies.
            </motion.p>
          </div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button asChild>
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
          <motion.div
            className="flex items-center gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link href="https://github.com/Nicompter" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:contact@nicompter.de" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="relative h-[350px] w-[350px] rounded-full bg-gradient-to-r from-primary to-primary/20 p-1">
            <div className="absolute inset-0 rounded-full bg-background p-2">
              <div className="h-full w-full overflow-hidden rounded-full bg-muted">
                <img
                  src="/nicompter.svg?height=400&width=400"
                  alt="Nicompter"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
