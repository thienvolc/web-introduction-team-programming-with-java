import { Github, Figma } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  return <footer className="border-t bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between py-6 space-y-4 md:space-y-0">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dashspace. All rights reserved. 😘
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
            <span className="sr-only">GitHub</span>
            <Link to="https://github.com/thienvolc/Subject-Programming-with-Java">
              <Figma className="h-5 w-5" />
            </Link>
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
            <span className="sr-only">Figma</span>
            <Link to="https://github.com/thienvolc/Subject-Programming-with-Java">
              <Github className="h-5 w-5" />
            </Link>
          </a>
        </div>
      </div>
    </footer>;
}