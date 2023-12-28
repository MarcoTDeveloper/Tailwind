import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

export interface NavItemProps {
  title: string;
  icon: ElementType;
  hover?: boolean;
}

export function NavItem({ title, icon: Icon, hover = false }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50
      dark:hover:bg-zinc-800
      "
    >
      <Icon className={`h-5 w-5 text-zinc-700 dark:text-zinc-100 ${hover ? "group-hover:text-violet-700 dark:group-hover:text-violet-300" : ""}`} />
      <span className="font-medium text-zinc-700 group-hover:text-violet-700
      dark:text-zinc-100 dark:group-hover:text-violet-300
      ">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300
      dark:text-zinc-600
      " />
    </a>
  )
}