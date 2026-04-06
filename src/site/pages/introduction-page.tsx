import {
    CheckCircle,
    Package,
    Code02,
    Grid01,
    Palette,
} from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { CodeBlock } from "@/site/shared/code-block";

const COMPONENTS = [
    "Avatars", "Badge groups", "Badges", "Button groups", "Buttons",
    "Checkboxes", "Dropdowns", "Inputs", "Progress indicators",
    "Radio buttons", "Radio groups", "Select", "Multi-select",
    "Sliders", "Tags", "Textarea", "Toggles", "Tooltips",
    "Alerts", "Modal", "Tables", "Tabs", "Sidebar nav",
];

const TECH_STACK = [
    { name: "React 19", description: "Latest React with concurrent features", icon: Code02 },
    { name: "TypeScript", description: "Full type safety throughout", icon: Code02 },
    { name: "Tailwind CSS v4", description: "Utility-first CSS framework", icon: Palette },
    { name: "React Aria", description: "Accessible component primitives", icon: Grid01 },
    { name: "Vite", description: "Next-generation build tool", icon: Package },
];

const installCode = `# Install dependencies
bun install

# Start development server
bun run dev`;

const usageCode = `import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { Badge } from "@/components/base/badges/badges";

export function MyComponent() {
  return (
    <div className="flex flex-col gap-4">
      <Input label="Email" placeholder="you@example.com" />
      <Button color="primary" size="md">Submit</Button>
      <Badge color="success">Active</Badge>
    </div>
  );
}`;

export const IntroductionPage = () => {
    return (
        <div className="flex flex-col gap-16 max-w-3xl">
            {/* Hero */}
            <div className="flex flex-col gap-4">
                <Badge color="brand" type="pill-color" size="sm">Design System</Badge>
                <h1 className="text-4xl font-semibold text-primary">Midwestern Design System</h1>
                <p className="text-lg text-tertiary leading-relaxed">
                    A React component library built for internal product teams. Consistent, accessible,
                    and ready to ship — built on React Aria and styled with Tailwind CSS v4.
                </p>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-secondary" />

            {/* What's included */}
            <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-semibold text-primary">What's included</h2>
                <p className="text-md text-tertiary">
                    {COMPONENTS.length} production-ready components across base UI and application UI categories.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {COMPONENTS.map((name) => (
                        <div key={name} className="flex items-center gap-2 text-sm text-secondary">
                            <CheckCircle className="size-4 text-success-primary shrink-0" />
                            {name}
                        </div>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-secondary" />

            {/* Getting started */}
            <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-semibold text-primary">Getting started</h2>
                <div className="flex flex-col gap-3">
                    <h3 className="text-base font-semibold text-secondary">Install & run</h3>
                    <CodeBlock code={installCode} />
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-base font-semibold text-secondary">Basic usage</h3>
                    <CodeBlock code={usageCode} />
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-secondary" />

            {/* Tech stack */}
            <div className="flex flex-col gap-6">
                <h2 className="text-2xl font-semibold text-primary">Tech stack</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {TECH_STACK.map(({ name, description, icon: Icon }) => (
                        <div key={name} className="flex items-start gap-3 rounded-xl border border-secondary p-4 bg-primary">
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-secondary">
                                <Icon className="size-5 text-brand-primary" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-sm font-semibold text-primary">{name}</span>
                                <span className="text-sm text-tertiary">{description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
