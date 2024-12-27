import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <GraduationCap className="h-6 w-6" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-right">
            تمامی حقوق محفوظ است © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex gap-4">
          <a href="/about" className="text-sm text-muted-foreground hover:text-foreground">
            درباره ما
          </a>
          <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
            تماس با ما
          </a>
          <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
            حریم خصوصی
          </a>
        </div>
      </div>
    </footer>
  );
}