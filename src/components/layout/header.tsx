import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex gap-6 md:gap-10">
          <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <GraduationCap className="h-6 w-6" />
            <span className="inline-block font-bold">سامانه آزمون</span>
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>دسته‌بندی‌ها</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/categories"
                      >
                        <GraduationCap className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          دسته‌بندی‌ها
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          مشاهده تمام دسته‌بندی‌های آزمون
                        </p>
                      </a>
                    </li>
                    <li className="col-span-1">
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/categories/programming"
                        >
                          <div className="text-sm font-medium leading-none">برنامه‌نویسی</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            آزمون‌های مرتبط با برنامه‌نویسی و توسعه نرم‌افزار
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li className="col-span-1">
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/categories/language"
                        >
                          <div className="text-sm font-medium leading-none">زبان</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            آزمون‌های زبان انگلیسی و سایر زبان‌ها
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4 rtl:space-x-reverse">
          <nav className="flex items-center space-x-2 rtl:space-x-reverse">
            <Button variant="ghost" size="sm" asChild>
              <a href="/login">ورود</a>
            </Button>
            <Button size="sm" asChild>
              <a href="/register">ثبت‌نام</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}