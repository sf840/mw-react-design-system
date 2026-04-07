import { Check, Copy01 } from "@untitledui/icons";
import { CodeBlock } from "@/site/shared/code-block";
import { useClipboard } from "@/hooks/use-clipboard";

// ── Shared copy token button ──────────────────────────────────────────────────

interface CopyTokenProps {
    value: string;
    copied: string | boolean;
    copy: (text: string, id?: string) => Promise<{ success: boolean }>;
}

const CopyToken = ({ value, copied, copy }: CopyTokenProps) => (
    <button
        type="button"
        onClick={() => copy(value, value)}
        className="inline-flex items-center gap-1 font-mono text-xs text-brand-secondary transition duration-100 ease-linear"
        title={`Copy ${value}`}
    >
        {copied === value
            ? <Check className="size-3 shrink-0" />
            : <Copy01 className="size-3 shrink-0" />}
        {value}
    </button>
);

// ── Group 1: Font families ────────────────────────────────────────────────────

const FontFamiliesGroup = () => {
    const { copied, copy } = useClipboard();

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-primary">Font families</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1 — Primary */}
                <div className="flex flex-col gap-4 overflow-hidden rounded-xl border border-secondary p-5 bg-primary">
                    <div className="overflow-hidden">
                        {/* Specimen — inline font-size so we display the actual scale token value */}
                        <span
                            className="font-body font-medium text-primary leading-none whitespace-nowrap"
                            style={{ fontSize: "48px" }}
                        >
                            Aa
                        </span>
                    </div>
                    <div className="flex flex-col gap-1.5 border-t border-secondary pt-4">
                        <span className="text-sm font-semibold text-primary">TT Hoves</span>
                        <div className="flex items-center gap-1.5 flex-wrap">
                            <CopyToken value="--font-body" copied={copied} copy={copy} />
                            <span className="text-xs text-tertiary">/</span>
                            <CopyToken value="--font-display" copied={copied} copy={copy} />
                        </div>
                        <p className="text-xs text-tertiary font-mono leading-snug">
                            'TT Hoves', 'DM Sans', system-ui, sans-serif
                        </p>
                        <p className="text-xs text-tertiary leading-snug">
                            Self-hosted via @font-face. Applied to all UI elements.
                        </p>
                    </div>
                </div>

                {/* Card 2 — Mono */}
                <div className="flex flex-col gap-4 overflow-hidden rounded-xl border border-secondary p-5 bg-primary">
                    <div className="overflow-hidden">
                        <span
                            className="font-mono font-medium text-primary leading-none whitespace-nowrap"
                            style={{ fontSize: "48px" }}
                        >
                            Aa
                        </span>
                    </div>
                    <div className="flex flex-col gap-1.5 border-t border-secondary pt-4">
                        <span className="text-sm font-semibold text-primary">System mono</span>
                        <CopyToken value="--font-mono" copied={copied} copy={copy} />
                        <p className="text-xs text-tertiary font-mono leading-snug">
                            ui-monospace, 'Roboto Mono', SFMono-Regular, Menlo, Monaco, Consolas, monospace
                        </p>
                        <p className="text-xs text-tertiary leading-snug">
                            Used for code blocks, CSS token display, and technical labels.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ── Group 2: Type scale ───────────────────────────────────────────────────────

interface TypeScaleRow {
    step: string;
    twClass: string;
    size: string;
    lineHeight: string;
    weight: "font-medium" | "font-normal";
    useWhen: string;
}

const TYPE_SCALE_ROWS: TypeScaleRow[] = [
    { step: "Display 2XL", twClass: "text-display-2xl", size: "72px", lineHeight: "90px", weight: "font-medium", useWhen: "Hero headlines, marketing splash" },
    { step: "Display XL",  twClass: "text-display-xl",  size: "60px", lineHeight: "72px", weight: "font-medium", useWhen: "Large feature headers" },
    { step: "Display LG",  twClass: "text-display-lg",  size: "48px", lineHeight: "60px", weight: "font-medium", useWhen: "Page titles" },
    { step: "Display MD",  twClass: "text-display-md",  size: "36px", lineHeight: "44px", weight: "font-medium", useWhen: "Section heroes, modal titles" },
    { step: "Display SM",  twClass: "text-display-sm",  size: "30px", lineHeight: "38px", weight: "font-medium", useWhen: "Card group headings" },
    { step: "Display XS",  twClass: "text-display-xs",  size: "24px", lineHeight: "32px", weight: "font-medium", useWhen: "Sidebar headers, panel titles" },
    { step: "XL",          twClass: "text-xl",           size: "20px", lineHeight: "30px", weight: "font-normal", useWhen: "Sub-section headings" },
    { step: "LG",          twClass: "text-lg",           size: "18px", lineHeight: "28px", weight: "font-normal", useWhen: "Lead paragraphs, intro copy" },
    { step: "MD",          twClass: "text-md",           size: "16px", lineHeight: "24px", weight: "font-normal", useWhen: "Default body copy, form labels" },
    { step: "SM",          twClass: "text-sm",           size: "14px", lineHeight: "20px", weight: "font-normal", useWhen: "Secondary text, table cells, captions" },
    { step: "XS",          twClass: "text-xs",           size: "12px", lineHeight: "18px", weight: "font-normal", useWhen: "Badges, timestamps, helper text" },
];

const TypeScaleGroup = () => {
    const { copied, copy } = useClipboard();

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-primary">Type scale</h3>
            <div className="overflow-hidden rounded-xl border border-secondary divide-y divide-secondary">
                {TYPE_SCALE_ROWS.map((row) => (
                    <div key={row.twClass} className="flex">
                        {/* Specimen — 40% width, overflow-hidden to clip large display text */}
                        <div className="w-2/5 shrink-0 overflow-hidden flex items-center px-5 py-4 border-r border-secondary">
                            <span
                                className={`text-primary ${row.weight} whitespace-nowrap`}
                                style={{ fontSize: row.size, lineHeight: row.lineHeight }}
                            >
                                The quick brown fox
                            </span>
                        </div>
                        {/* Metadata — 60% width */}
                        <div className="flex flex-col justify-center gap-1 px-5 py-4">
                            <span className="text-sm font-semibold text-primary">{row.step}</span>
                            <span className="text-xs text-tertiary font-mono">
                                {row.size} / {row.lineHeight}
                            </span>
                            <CopyToken value={row.twClass} copied={copied} copy={copy} />
                            <span className="text-xs text-tertiary">{row.useWhen}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ── Group 3: Responsive scale ─────────────────────────────────────────────────

interface ResponsiveRow {
    context: string;
    desktop: string[];
    tablet: string[] | null; // null means "unchanged"
    mobile: string[] | null;
}

const RESPONSIVE_ROWS: ResponsiveRow[] = [
    { context: "Page hero",          desktop: ["text-display-lg"], tablet: ["text-display-md"], mobile: ["text-display-sm"] },
    { context: "Section heading",    desktop: ["text-display-md"], tablet: ["text-display-sm"], mobile: ["text-display-xs"] },
    { context: "Card title",         desktop: ["text-display-xs"], tablet: ["text-xl"],          mobile: ["text-xl"] },
    { context: "Body copy",          desktop: ["text-md"],          tablet: ["text-md"],          mobile: ["text-md"] },
    { context: "Labels / captions",  desktop: ["text-sm", "text-xs"], tablet: null,              mobile: null },
];

const ResponsiveScaleGroup = () => {
    const { copied, copy } = useClipboard();

    const TokenCell = ({ tokens }: { tokens: string[] | null }) => {
        if (!tokens) {
            return <span className="text-xs text-tertiary">unchanged</span>;
        }
        return (
            <span className="flex items-center gap-1 flex-wrap">
                {tokens.map((t, i) => (
                    <span key={t} className="inline-flex items-center gap-1">
                        {i > 0 && <span className="text-xs text-tertiary">·</span>}
                        <CopyToken value={t} copied={copied} copy={copy} />
                    </span>
                ))}
            </span>
        );
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-primary">Responsive scale</h3>
                <p className="text-sm text-tertiary">
                    Display sizes scale down on mobile. Body and label sizes stay constant.
                </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-secondary">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-secondary_alt border-b border-secondary">
                            <th className="px-4 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Context</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Desktop</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Tablet (md:)</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Mobile</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary">
                        {RESPONSIVE_ROWS.map((row) => (
                            <tr key={row.context} className="bg-primary">
                                <td className="px-4 py-3 text-sm text-secondary font-medium whitespace-nowrap">{row.context}</td>
                                <td className="px-4 py-3"><TokenCell tokens={row.desktop} /></td>
                                <td className="px-4 py-3"><TokenCell tokens={row.tablet} /></td>
                                <td className="px-4 py-3"><TokenCell tokens={row.mobile} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// ── Group 4: Font weights ─────────────────────────────────────────────────────

interface FontWeightRow {
    twClass: string;
    weight: string;
    numeric: string;
    useWhen: string;
    style: string; // CSS font-weight value for inline style
}

const FONT_WEIGHT_ROWS: FontWeightRow[] = [
    { twClass: "font-normal",   weight: "Normal",   numeric: "400", useWhen: "Body copy, descriptions, paragraph text, input values", style: "400" },
    { twClass: "font-medium",   weight: "Medium",   numeric: "500", useWhen: "Headings, nav labels, emphasized body text",           style: "500" },
    { twClass: "font-semibold", weight: "Semibold", numeric: "600", useWhen: "Buttons, badges, active states, strong UI labels",     style: "600" },
];

const FontWeightsGroup = () => {
    const { copied, copy } = useClipboard();

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-primary">Font weights</h3>
            <div className="overflow-hidden rounded-xl border border-secondary divide-y divide-secondary">
                {FONT_WEIGHT_ROWS.map((row) => (
                    <div key={row.twClass} className="flex items-center gap-6 px-5 py-4 bg-primary">
                        {/* Live specimen */}
                        <div className="w-2/5 shrink-0 overflow-hidden">
                            <span
                                className="text-primary whitespace-nowrap text-xl"
                                style={{ fontWeight: row.style }}
                            >
                                The quick brown fox
                            </span>
                        </div>
                        {/* Metadata */}
                        <div className="flex flex-col gap-1 border-l border-secondary pl-6">
                            <span className="text-sm font-semibold text-primary">
                                {row.weight} <span className="font-normal text-tertiary">({row.numeric})</span>
                            </span>
                            <CopyToken value={row.twClass} copied={copied} copy={copy} />
                            <span className="text-xs text-tertiary">{row.useWhen}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// ── Group 5: CSS variables ────────────────────────────────────────────────────

const cssVarsCode = `/* Font families */
font-family: var(--font-body);    /* 'TT Hoves', 'DM Sans', system-ui, sans-serif */
font-family: var(--font-display); /* same as --font-body */
font-family: var(--font-mono);    /* ui-monospace, 'Roboto Mono', Menlo, monospace */

/* Type scale — size / line-height */
font-size: var(--text-xs);          /* 12px / 18px */
font-size: var(--text-sm);          /* 14px / 20px */
font-size: var(--text-md);          /* 16px / 24px */
font-size: var(--text-lg);          /* 18px / 28px */
font-size: var(--text-xl);          /* 20px / 30px */
font-size: var(--text-display-xs);  /* 24px / 32px */
font-size: var(--text-display-sm);  /* 30px / 38px */
font-size: var(--text-display-md);  /* 36px / 44px */
font-size: var(--text-display-lg);  /* 48px / 60px */
font-size: var(--text-display-xl);  /* 60px / 72px */
font-size: var(--text-display-2xl); /* 72px / 90px */

/* Line heights (available separately) */
line-height: var(--text-xs--line-height);           /* 18px */
line-height: var(--text-sm--line-height);           /* 20px */
line-height: var(--text-md--line-height);           /* 24px */
line-height: var(--text-lg--line-height);           /* 28px */
line-height: var(--text-xl--line-height);           /* 30px */
line-height: var(--text-display-xs--line-height);   /* 32px */
line-height: var(--text-display-sm--line-height);   /* 38px */
line-height: var(--text-display-md--line-height);   /* 44px */
line-height: var(--text-display-lg--line-height);   /* 60px */
line-height: var(--text-display-xl--line-height);   /* 72px */
line-height: var(--text-display-2xl--line-height);  /* 90px */`;

// ── Main Section ──────────────────────────────────────────────────────────────

export const BrandTypographySection = () => {
    return (
        <section id="typography" className="scroll-mt-8 flex flex-col gap-10">
            {/* Section header */}
            <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-secondary">02</p>
                <h2 className="text-3xl font-semibold text-primary">Typography</h2>
                <p className="text-md text-tertiary max-w-2xl">
                    A clear type scale creates visual hierarchy and readable interfaces.
                </p>
            </div>

            <FontFamiliesGroup />
            <TypeScaleGroup />
            <ResponsiveScaleGroup />
            <FontWeightsGroup />

            {/* CSS variables */}
            <div className="flex flex-col gap-3">
                <h3 className="text-base font-semibold text-primary">CSS variables</h3>
                <CodeBlock code={cssVarsCode} />
            </div>
        </section>
    );
};
