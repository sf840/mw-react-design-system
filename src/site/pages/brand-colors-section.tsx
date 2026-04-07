import { useState } from "react";
import { Check, Copy01 } from "@untitledui/icons";
import { useClipboard } from "@/hooks/use-clipboard";

// ── Group 1: MW Primitives ────────────────────────────────────────────────────

interface PrimitiveColor {
    name: string;
    variable: string;
    hex: string;
    usage: string;
}

const BRAND_PRIMITIVES: PrimitiveColor[] = [
    { name: "Brand Blue", variable: "--mw-blue", hex: "#2237F1", usage: "Primary CTAs, links, interactive states" },
    { name: "Navy", variable: "--mw-navy", hex: "#1A2CD1", usage: "Hover state for brand blue" },
    { name: "Electric Lime", variable: "--mw-green", hex: "#C7FA50", usage: "Dark mode accent only — not a full scale" },
];

const BASE_PRIMITIVES: PrimitiveColor[] = [
    { name: "Off White", variable: "--mw-white", hex: "#F6F7FE", usage: "Page backgrounds, cards" },
    { name: "Near Black", variable: "--mw-black", hex: "#010313", usage: "Primary text, dark backgrounds" },
    { name: "Muted Light", variable: "--mw-muted-light", hex: "#E8E9F4", usage: "Borders, surface tints" },
    { name: "Muted", variable: "--mw-muted", hex: "#666666", usage: "Secondary text" },
    { name: "Gray Light", variable: "--mw-gray-light", hex: "#A9A9A9", usage: "Disabled states, placeholders" },
    { name: "Danger", variable: "--mw-danger", hex: "#CC1838", usage: "Destructive actions only" },
    { name: "Success", variable: "--mw-success", hex: "#407E0B", usage: "Positive states" },
];

const PrimitiveCard = ({ name, variable, hex, usage }: PrimitiveColor) => {
    const { copied, copy } = useClipboard();
    const isCopied = copied === variable;

    return (
        <div className="flex flex-col overflow-hidden ring-1 ring-secondary rounded-none">
            {/* Color swatch — hex in inline style is intentional: displaying the actual color */}
            <div className="h-20 w-full" style={{ backgroundColor: hex }} />
            {/* Info */}
            <div className="flex flex-col gap-1.5 px-3 py-3 bg-primary">
                <span className="text-sm font-semibold text-primary">{name}</span>
                <button
                    type="button"
                    onClick={() => copy(variable, variable)}
                    className="flex items-center gap-1 font-mono text-xs text-brand-secondary transition duration-100 ease-linear w-fit"
                    title={`Copy ${variable}`}
                >
                    {isCopied
                        ? <Check className="size-3 shrink-0" />
                        : <Copy01 className="size-3 shrink-0" />}
                    {variable}
                </button>
                <span className="text-xs text-tertiary leading-snug">{usage}</span>
            </div>
        </div>
    );
};

// ── Group 2: Color Scales ─────────────────────────────────────────────────────

interface ScaleStop {
    stop: number;
    hex: string;
    primitive?: string;
    darkText?: boolean; // swatch is light — overlay dark text
}

interface ColorScale {
    name: string;
    cssPrefix: string;
    stops: ScaleStop[];
    note: string;
}

const COLOR_SCALES: ColorScale[] = [
    {
        name: "Brand",
        cssPrefix: "--color-brand",
        stops: [
            { stop: 25,  hex: "#F5F6FF", darkText: true },
            { stop: 50,  hex: "#ECEEFF", darkText: true },
            { stop: 100, hex: "#D5D9FD", darkText: true },
            { stop: 200, hex: "#ABAEFB", darkText: true },
            { stop: 300, hex: "#7D85F8" },
            { stop: 400, hex: "#5561F5" },
            { stop: 500, hex: "#3347F3" },
            { stop: 600, hex: "#2237F1", primitive: "--mw-blue" },
            { stop: 700, hex: "#1A2CD1", primitive: "--mw-navy" },
            { stop: 800, hex: "#1422A8" },
            { stop: 900, hex: "#0E1880" },
            { stop: 950, hex: "#080F5A" },
        ],
        note: "–– mw-blue is stop 600, –– mw-navy is stop 700",
    },
    {
        name: "Neutral",
        cssPrefix: "--color-neutral",
        stops: [
            { stop: 25,  hex: "#FAFBFF", darkText: true },
            { stop: 50,  hex: "#F6F7FE", darkText: true, primitive: "--mw-white" },
            { stop: 100, hex: "#ECEEF9", darkText: true },
            { stop: 200, hex: "#E8E9F4", darkText: true, primitive: "--mw-muted-light" },
            { stop: 300, hex: "#D0D2E8", darkText: true },
            { stop: 400, hex: "#A9A9A9", darkText: true, primitive: "--mw-gray-light" },
            { stop: 500, hex: "#666666", primitive: "--mw-muted" },
            { stop: 600, hex: "#4D4D5C" },
            { stop: 700, hex: "#363645" },
            { stop: 800, hex: "#1F1F2E" },
            { stop: 900, hex: "#0D0D1C" },
            { stop: 950, hex: "#010313", primitive: "--mw-black" },
        ],
        note: "–– mw-white is stop 50, –– mw-muted-light is stop 200, –– mw-gray-light is stop 400, –– mw-muted is stop 500, –– mw-black is stop 950",
    },
    {
        name: "Red",
        cssPrefix: "--color-red",
        stops: [
            { stop: 25,  hex: "#FFF5F6", darkText: true },
            { stop: 50,  hex: "#FFECEF", darkText: true },
            { stop: 100, hex: "#FFD5DC", darkText: true },
            { stop: 200, hex: "#FFAAB8", darkText: true },
            { stop: 300, hex: "#FF7A94", darkText: true },
            { stop: 400, hex: "#F04D6E" },
            { stop: 500, hex: "#E0284E" },
            { stop: 600, hex: "#CC1838", primitive: "--mw-danger" },
            { stop: 700, hex: "#A8102C" },
            { stop: 800, hex: "#830A22" },
            { stop: 900, hex: "#5E0518" },
            { stop: 950, hex: "#3D000E" },
        ],
        note: "–– mw-danger is stop 600",
    },
    {
        name: "Green",
        cssPrefix: "--color-green",
        stops: [
            { stop: 25,  hex: "#F6FEF9", darkText: true },
            { stop: 50,  hex: "#ECFDF3", darkText: true },
            { stop: 100, hex: "#DCFAE6", darkText: true },
            { stop: 200, hex: "#ABEFC6", darkText: true },
            { stop: 300, hex: "#75E0A7", darkText: true },
            { stop: 400, hex: "#47CD89", darkText: true },
            { stop: 500, hex: "#17B26A" },
            { stop: 600, hex: "#079455" },
            { stop: 700, hex: "#407E0B", primitive: "--mw-success" },
            { stop: 800, hex: "#2D5A08" },
            { stop: 900, hex: "#1C3A04" },
            { stop: 950, hex: "#0D1F02" },
        ],
        note: "–– mw-success is stop 700 — Electric Lime (#C7FA50) is NOT part of this scale — it's a separate brand accent",
    },
];

const ScaleStrip = ({ name, cssPrefix, stops, note }: ColorScale) => {
    const { copied, copy } = useClipboard();
    const [hoveredStop, setHoveredStop] = useState<number | null>(null);

    return (
        <div className="flex flex-col gap-1.5">
            <div className="flex items-stretch">
                {/* Scale name label */}
                <div className="flex items-center w-20 shrink-0 pr-3">
                    <span className="text-xs font-semibold text-secondary">{name}</span>
                </div>
                {/* Color stop blocks */}
                <div className="flex flex-1">
                    {stops.map((stop) => {
                        const tokenName = `${cssPrefix}-${stop.stop}`;
                        const isCopied = copied === tokenName;
                        const isHovered = hoveredStop === stop.stop;
                        // Hex values in inline style are intentional: displaying the actual color
                        const overlayTextColor = stop.darkText ? "#010313" : "#F6F7FE";

                        return (
                            <button
                                key={stop.stop}
                                type="button"
                                onClick={() => copy(tokenName, tokenName)}
                                onMouseEnter={() => setHoveredStop(stop.stop)}
                                onMouseLeave={() => setHoveredStop(null)}
                                className="relative flex-1 flex flex-col items-center justify-end pb-1 rounded-none transition duration-100 ease-linear"
                                style={{ backgroundColor: stop.hex, height: "48px" }}
                            >
                                {/* Hover tooltip */}
                                {isHovered && (
                                    <div
                                        className="absolute bottom-full left-1/2 z-20 mb-2 rounded-none bg-primary-solid px-2 py-1.5 text-left pointer-events-none"
                                        style={{ transform: "translateX(-50%)", whiteSpace: "nowrap" }}
                                    >
                                        <p className="font-mono text-xs" style={{ color: "#F6F7FE" }}>{tokenName}</p>
                                        <p className="text-xs" style={{ color: "rgba(246,247,254,0.6)" }}>{stop.hex}</p>
                                        {stop.primitive && (
                                            <p className="font-mono text-xs" style={{ color: "#C7FA50" }}>{stop.primitive}</p>
                                        )}
                                    </div>
                                )}
                                {/* Stop number / copied indicator */}
                                <span
                                    className="text-xs font-medium leading-none"
                                    style={{ color: overlayTextColor, opacity: isCopied ? 1 : 0.6 }}
                                >
                                    {isCopied ? "✓" : stop.stop}
                                </span>
                                {/* Primitive marker dot */}
                                {stop.primitive && (
                                    <span
                                        className="absolute top-1.5 left-1/2 size-1 rounded-none"
                                        style={{ backgroundColor: overlayTextColor, opacity: 0.5, transform: "translateX(-50%)" }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
            {/* Annotation note */}
            <div className="pl-20">
                <p className="text-xs text-tertiary">{note}</p>
            </div>
        </div>
    );
};

// ── Group 3: Semantic Tokens ──────────────────────────────────────────────────

interface SemanticToken {
    twClass: string;
    lightHex: string;
    darkHex?: string;
    usage: string;
    darkNote?: string;
    flips?: boolean;
}

const BG_TOKENS: SemanticToken[] = [
    {
        twClass: "bg-primary",
        lightHex: "#F6F7FE",
        darkHex: "#010313",
        usage: "Primary background, white in light mode",
        darkNote: "flips to near-black in dark",
    },
    {
        twClass: "bg-secondary",
        lightHex: "#F6F7FE",
        darkHex: "#0D0D1C",
        usage: "Subtle surface contrast against white",
        darkNote: "flips",
    },
    {
        twClass: "bg-tertiary",
        lightHex: "#ECEEF9",
        darkHex: "#1F1F2E",
        usage: "Toggles, progress bars, tertiary surfaces",
    },
    {
        twClass: "bg-brand-solid",
        lightHex: "#2237F1",
        darkHex: "#C7FA50",
        usage: "Primary CTA background",
        darkNote: "blue in light → Electric Lime in dark",
        flips: true,
    },
    {
        twClass: "bg-brand-primary",
        lightHex: "#ECEEFF",
        usage: "Brand tint surface, check icons",
    },
    {
        twClass: "bg-error-solid",
        lightHex: "#CC1838",
        usage: "Destructive button background",
    },
];

const TEXT_TOKENS: SemanticToken[] = [
    {
        twClass: "text-primary",
        lightHex: "#0D0D1C",
        darkHex: "#F6F7FE",
        usage: "Page headings, primary content",
    },
    {
        twClass: "text-secondary",
        lightHex: "#363645",
        darkHex: "#D0D2E8",
        usage: "Labels, section headings",
    },
    {
        twClass: "text-tertiary",
        lightHex: "#4D4D5C",
        darkHex: "#A9A9A9",
        usage: "Supporting text, paragraph copy",
    },
    {
        twClass: "text-placeholder",
        lightHex: "#666666",
        usage: "Input placeholders",
    },
    {
        twClass: "text-brand-secondary",
        lightHex: "#1A2CD1",
        darkHex: "#C7FA50",
        usage: "Brand buttons, highlights",
        darkNote: "blue in light → Electric Lime in dark",
        flips: true,
    },
    {
        twClass: "text-error-primary",
        lightHex: "#CC1838",
        darkHex: "#FF7A94",
        usage: "Error state text, input errors",
    },
];

const BORDER_TOKENS: SemanticToken[] = [
    {
        twClass: "border-primary",
        lightHex: "#D0D2E8",
        darkHex: "#363645",
        usage: "Input fields, checkboxes, button groups",
    },
    {
        twClass: "border-secondary",
        lightHex: "#E8E9F4",
        darkHex: "#1F1F2E",
        usage: "Cards, tables, content dividers — most commonly used",
    },
    {
        twClass: "border-brand",
        lightHex: "#3347F3",
        darkHex: "#C7FA50",
        usage: "Active input focus states",
        darkNote: "brand blue → Electric Lime in dark",
        flips: true,
    },
    {
        twClass: "border-error",
        lightHex: "#E0284E",
        darkHex: "#F04D6E",
        usage: "Error state inputs and file uploaders",
    },
];

const FG_TOKENS: SemanticToken[] = [
    {
        twClass: "fg-primary",
        lightHex: "#0D0D1C",
        darkHex: "#F6F7FE",
        usage: "Highest contrast icons",
    },
    {
        twClass: "fg-secondary",
        lightHex: "#363645",
        darkHex: "#D0D2E8",
        usage: "Standard icon color",
    },
    {
        twClass: "fg-quaternary",
        lightHex: "#A9A9A9",
        darkHex: "#4D4D5C",
        usage: "Low-contrast icons, help icons, input icons",
    },
    {
        twClass: "fg-brand-primary",
        lightHex: "#2237F1",
        darkHex: "#C7FA50",
        usage: "Brand-colored icons, progress bars",
        darkNote: "flips in dark",
    },
    {
        twClass: "fg-error-primary",
        lightHex: "#CC1838",
        darkHex: "#F04D6E",
        usage: "Error state icons",
    },
];

interface TokenTableProps {
    tokens: SemanticToken[];
}

const TokenTable = ({ tokens }: TokenTableProps) => {
    const { copied, copy } = useClipboard();

    return (
        <div className="flex flex-col divide-y divide-secondary ring-1 ring-secondary rounded-none overflow-hidden">
            {tokens.map((token) => (
                <div key={token.twClass} className="flex items-center gap-4 px-4 py-3 bg-primary">
                    {/* Color dots */}
                    <div className="flex items-center gap-2 shrink-0 w-28">
                        {/* Light mode dot */}
                        <div
                            className="size-3 rounded-none ring-1 ring-secondary shrink-0"
                            style={{ backgroundColor: token.lightHex }}
                            title={`Light: ${token.lightHex}`}
                        />
                        {token.darkHex && (
                            <div className="flex items-center gap-1">
                                <div
                                    className="size-3 rounded-none ring-1 ring-secondary shrink-0"
                                    style={{ backgroundColor: token.darkHex }}
                                    title={`Dark: ${token.darkHex}`}
                                />
                                <span className="text-xs text-tertiary">dark</span>
                            </div>
                        )}
                    </div>
                    {/* Tailwind class with copy button */}
                    <button
                        type="button"
                        onClick={() => copy(token.twClass, token.twClass)}
                        className="flex items-center gap-1.5 font-mono text-xs text-brand-secondary shrink-0 transition duration-100 ease-linear w-44"
                        title={`Copy ${token.twClass}`}
                    >
                        {copied === token.twClass
                            ? <Check className="size-3 shrink-0" />
                            : <Copy01 className="size-3 shrink-0" />}
                        {token.twClass}
                    </button>
                    {/* Usage description */}
                    <span className="flex-1 text-xs text-tertiary">{token.usage}</span>
                    {/* Dark mode note or "Flips" badge */}
                    {token.flips ? (
                        <span className="shrink-0 text-xs px-2 py-0.5 rounded-none bg-brand-primary text-brand-secondary">
                            Flips in dark mode
                        </span>
                    ) : token.darkNote ? (
                        <span className="shrink-0 text-xs text-tertiary hidden sm:inline">{token.darkNote}</span>
                    ) : null}
                </div>
            ))}
        </div>
    );
};

// ── Main Section ──────────────────────────────────────────────────────────────

export const BrandColorsSection = () => {
    return (
        <section id="colors" className="scroll-mt-8 flex flex-col gap-14">
            {/* Section header */}
            <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-secondary">01</p>
                <h2 className="text-3xl font-semibold text-primary">Colors</h2>
                <p className="text-md text-tertiary max-w-2xl">
                    The Midwestern palette anchors every interface. Use brand blue for primary actions,
                    deep navy for dark surfaces, and electric lime for dark mode accents.
                </p>
            </div>

            {/* ── Group 1: Brand Primitives ── */}
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-primary">Brand primitives</h3>
                    <p className="text-sm text-tertiary max-w-2xl">
                        The 10 raw brand colors everything is derived from. Never use these directly in components — use semantic tokens instead.
                    </p>
                </div>

                {/* Brand sub-group */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-quaternary">Brand</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {BRAND_PRIMITIVES.map((color) => (
                            <PrimitiveCard key={color.variable} {...color} />
                        ))}
                    </div>
                </div>

                {/* Base sub-group */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-quaternary">Base</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {BASE_PRIMITIVES.map((color) => (
                            <PrimitiveCard key={color.variable} {...color} />
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Group 2: Color Scales ── */}
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-primary">Color scales</h3>
                    <p className="text-sm text-tertiary max-w-2xl">
                        Four 12-step scales derived from the brand primitives. Use scale values only when a semantic token doesn't exist for your use case.
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    {COLOR_SCALES.map((scale) => (
                        <ScaleStrip key={scale.name} {...scale} />
                    ))}
                </div>
            </div>

            {/* ── Group 3: Semantic Tokens ── */}
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-primary">Semantic tokens</h3>
                    <p className="text-sm text-tertiary max-w-2xl">
                        Always use semantic tokens in components. They handle light/dark mode automatically. Never use scale values or primitives directly.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-quaternary">Background</h4>
                        <TokenTable tokens={BG_TOKENS} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-quaternary">Text</h4>
                        <TokenTable tokens={TEXT_TOKENS} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-quaternary">Border</h4>
                        <TokenTable tokens={BORDER_TOKENS} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-quaternary">Foreground (icons)</h4>
                        <TokenTable tokens={FG_TOKENS} />
                    </div>
                </div>
            </div>
        </section>
    );
};
