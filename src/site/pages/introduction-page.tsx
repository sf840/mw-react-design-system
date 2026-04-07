import {
    LayersTwo01,
    Palette,
    Type01,
    Code02,
    GitBranch01,
    Sun,
    LinkExternal01,
} from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { CodeBlock } from "@/site/shared/code-block";

const INCLUDED = [
    {
        icon: LayersTwo01,
        title: "23 components",
        description: "Avatars, buttons, inputs, modals, tables, and more — ready to use.",
    },
    {
        icon: Palette,
        title: "Brand tokens",
        description: "Full color system with light and dark mode built in.",
    },
    {
        icon: Type01,
        title: "TT Hoves typeface",
        description: "Midwestern's primary font applied across all components.",
    },
    {
        icon: Code02,
        title: "React + TypeScript",
        description: "Built on Vite, Tailwind CSS v4, and React Aria.",
    },
    {
        icon: GitBranch01,
        title: "Open source",
        description: "MIT licensed. Fork it, extend it, make it yours.",
    },
    {
        icon: Sun,
        title: "Light & dark mode",
        description: "Theme toggle built in, tokens ready for both.",
    },
];

const QUICK_LINKS = [
    { label: "Browse all components", href: "/components/buttons", external: false },
    { label: "Colors & brand tokens", href: "/brand#colors", external: false },
    { label: "Typography", href: "/brand#typography", external: false },
    { label: "Logo & imagery", href: "/brand#logo", external: false },
    { label: "GitHub repository", href: "https://github.com/sf840/mw-react-design-system", external: true },
];

const usageCode = `import { Button } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import { Badge } from '@/components/base/badges/badges';

export function Example() {
  return (
    <div className="flex items-center gap-3">
      <Badge color="brand">New</Badge>
      <Input placeholder="Search..." />
      <Button size="md" color="primary">Submit</Button>
    </div>
  );
}`;

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <p className="text-xs font-medium uppercase tracking-widest text-tertiary mb-4">{children}</p>
);

export const IntroductionPage = () => {
    return (
        <div className="flex flex-col gap-12 max-w-[760px]">

            {/* ── Hero ── */}
            <div className="flex flex-col gap-4">
                <p className="text-xs font-medium uppercase tracking-widest text-brand-secondary">
                    Midwestern Design System
                </p>
                <h1 className="text-4xl font-medium text-primary leading-tight">
                    Build consistent products, faster.
                </h1>
                <p className="text-md text-secondary max-w-[560px] leading-relaxed">
                    A React component library built on Untitled UI, styled to the Midwestern
                    brand. Open-source, free to use, and built for teams shipping real products.
                </p>
                <div className="flex items-center gap-3 mt-1">
                    <Button href="/components/buttons" color="primary" size="sm">
                        Browse components
                    </Button>
                    <Button
                        href="https://github.com/sf840/mw-react-design-system"
                        color="secondary"
                        size="sm"
                        iconLeading={LinkExternal01}
                    >
                        View on GitHub
                    </Button>
                </div>
            </div>

            <hr className="border-none h-px bg-border-secondary" />

            {/* ── What's included ── */}
            <div className="flex flex-col">
                <SectionLabel>What's included</SectionLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {INCLUDED.map(({ icon: Icon, title, description }) => (
                        <div
                            key={title}
                            className="flex flex-col gap-3 rounded-lg border border-secondary bg-primary p-5"
                        >
                            <Icon className="size-5 text-brand-secondary" />
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-medium text-primary">{title}</p>
                                <p className="text-sm text-tertiary leading-snug">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="border-none h-px bg-border-secondary" />

            {/* ── Getting started ── */}
            <div className="flex flex-col gap-4">
                <SectionLabel>Getting started</SectionLabel>
                <p className="text-sm text-secondary">
                    This design system is pre-installed and ready to use. Import any component
                    directly from its source file.
                </p>
                <CodeBlock code={usageCode} />
            </div>

            <hr className="border-none h-px bg-border-secondary" />

            {/* ── Quick links ── */}
            <div className="flex flex-col">
                <SectionLabel>Quick links</SectionLabel>
                <ul className="flex flex-col gap-2">
                    {QUICK_LINKS.map(({ label, href, external }) => (
                        <li key={label}>
                            <a
                                href={href}
                                target={external ? "_blank" : undefined}
                                rel={external ? "noreferrer" : undefined}
                                className="group inline-flex items-center gap-1.5 text-sm text-brand-secondary transition duration-100 ease-linear hover:underline"
                            >
                                <span className="transition-transform duration-100 ease-linear group-hover:translate-x-0.5">→</span>
                                {label}
                                {external && <LinkExternal01 className="size-3 opacity-60" />}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
