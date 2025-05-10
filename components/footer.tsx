import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Youtube, YoutubeIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <Link href="/" className="text-xl font-bold">
            Nicompter
          </Link>
          <p className="text-center text-sm text-gray-500 md:text-left dark:text-gray-400">
            &copy; {new Date().getFullYear()} Nicompter. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com/Nicompter" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 text-gray-500 hover:text-primary transition-colors" />
          </Link>
          <Link href="mailto:contact@nicompter.de" aria-label="Email">
            <Mail className="h-5 w-5 text-gray-500 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
