"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  return (
    <section id="about" className="container py-24 md:py-32 bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <Badge className="mb-4">About Me</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">My Journey</h2>
        <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-12">
          I&apos;m a passionate developer with a keen eye for design and a love for creating seamless user experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">My Background</h3>
              <p className="text-gray-500 dark:text-gray-400">
                With over 5 years of experience in development, I&apos;ve worked on a variety of projects ranging
                from small websites to complex web applications. My journey began with a passion for
                problem-solving and has evolved into a career focused on creating intuitive and engaging digital
                experiences.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">My Approach</h3>
              <p className="text-gray-500 dark:text-gray-400">
                I believe in creating solutions that are not only visually appealing but also functional and
                user-friendly. My approach combines technical expertise with creative thinking to deliver projects that
                exceed expectations. I&apos;m constantly learning and adapting to new technologies to stay at the
                forefront of web development.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
