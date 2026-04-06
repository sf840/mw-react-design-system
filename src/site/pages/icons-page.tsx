import { useState, useMemo } from "react";
import * as Icons from "@untitledui/icons";
import { SearchLg, Copy01, Check, X } from "@untitledui/icons";
import { cx } from "@/utils/cx";

// ─── Category mapping ────────────────────────────────────────────────────────

const CATEGORY_PREFIXES: Record<string, string[]> = {
    Arrows: ["Arrow", "Chevron", "Corner", "Expand", "Flip", "Minimize", "Maximize", "Reverse", "Switch"],
    Charts: ["BarChart", "LineChart", "PieChart", "DonutChart", "DataFlow", "Trend", "Presentation", "Report"],
    Communication: ["Mail", "Message", "Chat", "Phone", "Signal", "Voicemail", "Annotation", "Send", "Inbox", "NotificationText", "Notification", "Bell"],
    Editor: ["Edit", "Bold", "Italic", "Underline", "Strikethrough", "Paragraph", "Heading", "List", "Indent", "Quote", "Code", "Brackets", "Cursor", "Type", "Font", "Align", "Text"],
    Files: ["File", "Folder", "Paperclip", "Attachment", "Archive", "Zip"],
    Finance: ["Currency", "CreditCard", "Coins", "Bank", "Wallet", "Receipt", "Invoice", "Tax", "Percent", "Tag", "ShoppingCart", "ShoppingBag", "Store", "Package"],
    Interface: ["Alert", "Check", "XClose", "Plus", "Minus", "Settings", "Filter", "Menu", "Grid", "Refresh", "Reload", "Trash", "Delete", "Lock", "Unlock", "Eye", "Search", "Slash", "Toggle", "Switch", "Dots", "Info", "Help", "Question", "Bookmark", "Heart", "Star", "Flag", "Pin", "Link", "Share", "Upload", "Download", "Cloud", "Clipboard"],
    Maps: ["Map", "MarkerPin", "Globe", "Navigation", "Route", "Direction", "Location", "Compass", "Radar", "Satellite"],
    Media: ["Image", "Video", "Music", "Play", "Pause", "Stop", "Record", "Camera", "Mic", "Speaker", "Volume", "Fast", "Rewind", "Skip", "Photo", "Gallery", "Film", "Podcast", "Radio"],
    People: ["User", "Users", "Avatar", "Face", "Person", "Profile", "Team", "Group", "Contact", "Account"],
    Shapes: ["Circle", "Square", "Triangle", "Diamond", "Hexagon", "Rectangle", "Rhombus", "Octagon"],
    Weather: ["Cloud", "Sun", "Moon", "Rain", "Wind", "Snow", "Weather", "Thermometer", "Lightning", "Snowflake", "Droplets", "Waves", "Hurricane", "Tornado"],
};

function getCategory(name: string): string {
    for (const [category, prefixes] of Object.entries(CATEGORY_PREFIXES)) {
        if (prefixes.some((p) => name.startsWith(p))) {
            return category;
        }
    }
    return "General";
}

// ─── Build icon list once ─────────────────────────────────────────────────────

type IconEntry = {
    name: string;
    component: React.FC<React.SVGProps<SVGSVGElement> & { strokeWidth?: number }>;
    category: string;
};

const ALL_ICONS: IconEntry[] = Object.entries(Icons)
    .filter(([, v]) => typeof v === "function")
    .map(([name, component]) => ({
        name,
        component: component as IconEntry["component"],
        category: getCategory(name),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

const CATEGORIES = ["All", ...Object.keys(CATEGORY_PREFIXES).sort(), "General"];

// ─── Icon card ────────────────────────────────────────────────────────────────

const IconCard = ({ name, component: Icon }: { name: string; component: IconEntry["component"] }) => {
    const [copied, setCopied] = useState<"component" | "import" | null>(null);

    const copyComponent = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText(`<${name} className="size-5" />`);
        setCopied("component");
        setTimeout(() => setCopied(null), 1500);
    };

    return (
        <button
            type="button"
            onClick={copyComponent}
            title={`Click to copy <${name} />`}
            className="group flex flex-col items-center gap-3 rounded-xl border border-secondary bg-primary p-4 text-center transition duration-100 ease-linear hover:border-brand hover:shadow-sm focus-visible:outline-2 focus-visible:outline-brand"
        >
            <div className="flex size-10 items-center justify-center rounded-lg bg-secondary transition duration-100 ease-linear group-hover:bg-brand-secondary">
                {copied === "component" ? (
                    <Check className="size-5 text-success-primary" />
                ) : (
                    <Icon className="size-5 text-secondary transition duration-100 ease-linear group-hover:text-brand-secondary" />
                )}
            </div>
            <span className="w-full truncate text-xs font-medium text-tertiary transition duration-100 ease-linear group-hover:text-secondary">
                {name}
            </span>
        </button>
    );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export const IconsPage = () => {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [copied, setCopied] = useState<string | null>(null);

    const filtered = useMemo(() => {
        const q = search.toLowerCase().trim();
        return ALL_ICONS.filter((icon) => {
            const matchesSearch = !q || icon.name.toLowerCase().includes(q);
            const matchesCategory = activeCategory === "All" || icon.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [search, activeCategory]);

    const copyInstall = () => {
        navigator.clipboard.writeText("npm install @untitledui/icons");
        setCopied("install");
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="flex flex-col gap-10 max-w-6xl">
            {/* Header */}
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-secondary">07</p>
                    <h1 className="text-3xl font-semibold text-primary">Icons</h1>
                    <p className="text-md text-tertiary max-w-2xl">
                        {ALL_ICONS.length.toLocaleString()} open-source line icons by Untitled UI. Free for commercial use under MIT license.
                        Click any icon to copy its JSX component tag.
                    </p>
                </div>

                {/* Install strip */}
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <button
                        type="button"
                        onClick={copyInstall}
                        className="group flex items-center gap-2.5 rounded-lg border border-secondary bg-secondary_alt px-4 py-2.5 transition duration-100 ease-linear hover:border-brand hover:bg-brand-primary/30 focus-visible:outline-2 focus-visible:outline-brand"
                    >
                        <code className="font-mono text-sm text-secondary group-hover:text-secondary">
                            npm install @untitledui/icons
                        </code>
                        <span className="shrink-0">
                            {copied === "install" ? (
                                <Check className="size-4 text-success-primary" />
                            ) : (
                                <Copy01 className="size-4 text-tertiary group-hover:text-brand-secondary" />
                            )}
                        </span>
                    </button>
                    <a
                        href="https://github.com/untitleduico/icons"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-brand-secondary hover:text-brand-secondary/80 transition duration-100 ease-linear"
                    >
                        View on GitHub →
                    </a>
                </div>
            </div>

            {/* Search + Filter bar */}
            <div className="flex flex-col gap-4 sticky top-0 z-10 bg-primary py-3 -mx-8 px-8 border-b border-secondary">
                {/* Search */}
                <div className="relative max-w-sm">
                    <SearchLg className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-quaternary pointer-events-none" />
                    <input
                        type="search"
                        placeholder={`Search ${ALL_ICONS.length} icons…`}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-lg border border-secondary bg-primary pl-9 pr-9 py-2 text-sm text-primary placeholder:text-placeholder transition duration-100 ease-linear focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                    />
                    {search && (
                        <button
                            type="button"
                            onClick={() => setSearch("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-quaternary hover:text-tertiary"
                        >
                            <X className="size-4" />
                        </button>
                    )}
                </div>

                {/* Category tabs */}
                <div className="flex items-center gap-1 flex-wrap">
                    {CATEGORIES.map((cat) => {
                        const count = cat === "All"
                            ? ALL_ICONS.length
                            : ALL_ICONS.filter((i) => i.category === cat).length;
                        if (count === 0) return null;
                        return (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setActiveCategory(cat)}
                                className={cx(
                                    "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition duration-100 ease-linear",
                                    activeCategory === cat
                                        ? "bg-brand-solid text-white"
                                        : "bg-secondary text-tertiary hover:bg-secondary_hover hover:text-secondary",
                                )}
                            >
                                {cat}
                                <span className={cx(
                                    "rounded-full px-1.5 py-px text-[10px] font-semibold",
                                    activeCategory === cat ? "bg-white/20 text-white" : "bg-tertiary/10 text-quaternary",
                                )}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Results count */}
            <div className="-mt-4 flex items-center justify-between">
                <p className="text-sm text-tertiary">
                    {filtered.length === ALL_ICONS.length
                        ? `${ALL_ICONS.length.toLocaleString()} icons`
                        : `${filtered.length.toLocaleString()} of ${ALL_ICONS.length.toLocaleString()} icons`}
                </p>
                {(search || activeCategory !== "All") && (
                    <button
                        type="button"
                        onClick={() => { setSearch(""); setActiveCategory("All"); }}
                        className="text-xs font-medium text-brand-secondary hover:text-brand-secondary/80 transition duration-100 ease-linear"
                    >
                        Clear filters
                    </button>
                )}
            </div>

            {/* Icon grid */}
            {filtered.length > 0 ? (
                <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-3">
                    {filtered.map((icon) => (
                        <IconCard key={icon.name} name={icon.name} component={icon.component} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-secondary py-20">
                    <SearchLg className="size-8 text-quaternary" />
                    <p className="text-sm font-medium text-tertiary">No icons match "{search}"</p>
                    <button
                        type="button"
                        onClick={() => setSearch("")}
                        className="text-sm font-medium text-brand-secondary hover:text-brand-secondary/80 transition duration-100 ease-linear"
                    >
                        Clear search
                    </button>
                </div>
            )}

            {/* Usage section */}
            <div className="border-t border-dashed border-secondary pt-10 flex flex-col gap-6">
                <h2 className="text-xl font-semibold text-primary">Usage</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        {
                            title: "Named import (recommended)",
                            code: `import { Home01, Settings01 } from "@untitledui/icons";\n\n// As a component reference\n<Button iconLeading={Home01}>Home</Button>\n\n// Inline with className\n<Home01 className="size-5 text-secondary" />`,
                        },
                        {
                            title: "With stroke width",
                            code: `// Line icons support strokeWidth\n<Home01\n  className="size-5"\n  strokeWidth={1.5}\n/>`,
                        },
                        {
                            title: "Accessible decorative icon",
                            code: `// Decorative icons need aria-hidden\n<Home01\n  className="size-5 text-brand-600"\n  aria-hidden="true"\n/>`,
                        },
                        {
                            title: "As JSX element prop",
                            code: `// Must include data-icon attribute\n<Button\n  iconLeading={\n    <Home01 data-icon className="size-4" />\n  }\n>\n  Home\n</Button>`,
                        },
                    ].map(({ title, code }) => (
                        <div key={title} className="flex flex-col gap-2 rounded-xl border border-secondary overflow-hidden">
                            <div className="px-4 py-3 border-b border-secondary bg-secondary_alt">
                                <p className="text-xs font-semibold text-secondary">{title}</p>
                            </div>
                            <pre className="px-4 py-3 text-xs font-mono text-secondary overflow-x-auto leading-relaxed">
                                <code>{code}</code>
                            </pre>
                        </div>
                    ))}
                </div>

                {/* Size guide */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold text-secondary">Sizing</h3>
                    <div className="flex items-end gap-6 rounded-xl border border-secondary bg-primary p-6">
                        {[
                            { label: "size-4", px: "16px", className: "size-4" },
                            { label: "size-5", px: "20px", className: "size-5" },
                            { label: "size-6", px: "24px", className: "size-6" },
                            { label: "size-8", px: "32px", className: "size-8" },
                            { label: "size-10", px: "40px", className: "size-10" },
                            { label: "size-12", px: "48px", className: "size-12" },
                        ].map(({ label, px, className }) => (
                            <div key={label} className="flex flex-col items-center gap-2">
                                <Icons.Home01 className={cx(className, "text-secondary")} />
                                <div className="flex flex-col items-center gap-0.5">
                                    <span className="text-xs font-mono font-medium text-secondary">{label}</span>
                                    <span className="text-[10px] text-quaternary">{px}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
