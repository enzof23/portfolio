import { cn } from "./ui/utils.ts";
import { Simple } from "./icons";

// TODO : update stacks
const stacks = [
  {
    name: "Next.js",
    category: "Framework",
    icon: Simple.IconNext,
    url: "https://nextjs.org",
  },
  {
    name: "Astro",
    category: "Framework",
    icon: Simple.IconAstro,
    url: "https://astro.build",
  },
  {
    name: "React",
    category: "Library",
    icon: Simple.IconReact,
    url: "https://react.dev",
  },
  {
    name: "SolidJS",
    category: "Library",
    icon: Simple.IconSolid,
    url: "https://www.solidjs.com",
  },
  {
    name: "Tailwind",
    category: "CSS Framework",
    icon: Simple.IconTailwind,
    url: "https://tailwindcss.com",
  },
  {
    name: "Typescript",
    category: "Language",
    icon: Simple.IconTypescript,
    url: "https://www.typescriptlang.org",
  },
  {
    name: "Figma",
    category: "Design",
    icon: Simple.IconFigma,
    url: "https://www.figma.com",
  },
  {
    name: "Git",
    category: "Version Control",
    icon: Simple.IconGit,
    url: "https://git-scm.com",
  },
];

export default () => {
  return (
    <div className="flex items-center justify-center p-4 md:p-5 xl:p-6 w-full h-full">
      <ul className="flex flex-col xs:grid xs:grid-cols-2 gap-3 w-full h-full">
        {stacks.map((stack) => {
          return (
            <li key={stack.name} className="flex items-center">
              <a
                href={stack.url}
                className={cn(
                  "group",
                  "flex items-center justify-between p-2 sm:px-3 sm:py-3 lg:px-4  w-full",
                  "bg-neutral-2 hover:bg-neutral-3",
                  "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
                )}
                target="_blank"
                aria-label="Open"
              >
                <div className="flex flex-row items-stretch gap-3 lg:gap-5 pl-2">
                  <div className="flex items-center justify-center">
                    <stack.icon
                      size={24}
                      className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
                    />
                  </div>

                  <div>
                    <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">
                      {stack.name}
                    </h3>
                    <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-[10px] font-medium">
                      {stack.category}
                    </div>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
