import { ColorSwatch } from "@/site/shared/color-swatch";
import { CodeBlock } from "@/site/shared/code-block";

const PRIMARY_COLORS = [
    { name: "Deep Navy", hex: "#0A1628", usage: "Primary dark background" },
    { name: "Navy", hex: "#1B2E4B", usage: "Secondary dark background" },
    { name: "Brand Blue", hex: "#1E4DB7", usage: "Interactive brand color" },
    { name: "Bright Blue", hex: "#2563EB", usage: "Primary CTA, links" },
    { name: "Light Blue", hex: "#DBEAFE", usage: "Subtle brand backgrounds" },
    { name: "Off White", hex: "#F8FAFF", usage: "Page backgrounds" },
];

const NEUTRAL_COLORS = [
    { name: "White", hex: "#FFFFFF", usage: "Backgrounds, cards" },
    { name: "Near Black", hex: "#09090B", usage: "Primary text" },
    { name: "Body Secondary", hex: "#6B7280", usage: "Secondary text" },
    { name: "Border", hex: "#E5E7EB", usage: "Borders, dividers" },
];

const cssVariablesCode = `/* Add to your theme.css */
--color-brand-25: rgb(248 250 255);
--color-brand-50: rgb(235 242 255);
--color-brand-100: rgb(210 225 255);
--color-brand-200: rgb(165 195 255);
--color-brand-300: rgb(115 160 255);
--color-brand-400: rgb(66 125 240);
--color-brand-500: rgb(37 99 235);   /* Base */
--color-brand-600: rgb(30 77 183);   /* Primary interactive */
--color-brand-700: rgb(27 62 150);
--color-brand-800: rgb(10 22 40);
--color-brand-900: rgb(7 15 28);
--color-brand-950: rgb(4 8 16);`;

const typographyCode = `/* Font stack */
font-family: var(--font-body);    /* Inter, system-ui, sans-serif */
font-family: var(--font-display); /* Inter, system-ui, sans-serif */
font-family: var(--font-mono);    /* JetBrains Mono, monospace */

/* Type scale */
font-size: var(--text-xs);         /* 12px */
font-size: var(--text-sm);         /* 14px */
font-size: var(--text-md);         /* 16px */
font-size: var(--text-lg);         /* 18px */
font-size: var(--text-xl);         /* 20px */
font-size: var(--text-display-xs); /* 24px */
font-size: var(--text-display-sm); /* 30px */
font-size: var(--text-display-md); /* 36px */
font-size: var(--text-display-lg); /* 48px */
font-size: var(--text-display-xl); /* 60px */`;

const spacingCode = `/* Spacing scale (Tailwind) */
gap-1   →  4px   (xs)
gap-2   →  8px   (sm)
gap-3   →  12px  (md)
gap-4   →  16px  (lg)
gap-5   →  20px  (xl)
gap-6   →  24px  (2xl)
gap-8   →  32px  (3xl)
gap-10  →  40px  (4xl)
gap-12  →  48px  (5xl)
gap-16  →  64px  (6xl)`;

const voiceCode = `✅ DO
- Write in plain, direct language
- Use active voice: "Save your work" not "Your work will be saved"
- Lead with the action or outcome
- Be specific and concrete

❌ DON'T
- Use jargon or buzzwords
- Pad with filler words ("just", "simply", "easily")
- Use passive voice unnecessarily
- Over-explain or be condescending`;

const SPACING_SCALE = [
    { label: "4px", size: "xs", tw: "1", bars: 1 },
    { label: "8px", size: "sm", tw: "2", bars: 2 },
    { label: "12px", size: "md", tw: "3", bars: 3 },
    { label: "16px", size: "lg", tw: "4", bars: 4 },
    { label: "24px", size: "xl", tw: "6", bars: 6 },
    { label: "32px", size: "2xl", tw: "8", bars: 8 },
    { label: "48px", size: "3xl", tw: "12", bars: 12 },
    { label: "64px", size: "4xl", tw: "16", bars: 16 },
];

const TYPE_SCALE = [
    { name: "Display 2XL", size: "60px", weight: "700", lineHeight: "72px", sample: "Aa" },
    { name: "Display LG", size: "48px", weight: "700", lineHeight: "60px", sample: "Heading" },
    { name: "Display MD", size: "36px", weight: "600", lineHeight: "44px", sample: "Section title" },
    { name: "Heading", size: "24px", weight: "600", lineHeight: "32px", sample: "Card heading" },
    { name: "Body LG", size: "18px", weight: "400", lineHeight: "28px", sample: "Intro paragraph text that reads naturally at this size." },
    { name: "Body", size: "16px", weight: "400", lineHeight: "24px", sample: "Standard body copy for paragraphs and descriptions." },
    { name: "Label / Eyebrow", size: "12px", weight: "600", lineHeight: "16px", sample: "SECTION LABEL" },
];

export const BrandPage = () => {
    return (
        <div className="flex flex-col gap-20 max-w-5xl">
            {/* Colors */}
            <section id="colors" className="scroll-mt-8 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-secondary">01</p>
                    <h2 className="text-3xl font-semibold text-primary">Colors</h2>
                    <p className="text-md text-tertiary max-w-2xl">
                        The Midwestern palette anchors every interface. Use brand blue for primary actions,
                        deep navy for dark surfaces, and neutrals for everything in between.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary">Primary</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                        {PRIMARY_COLORS.map((color) => (
                            <ColorSwatch key={color.name} {...color} />
                        ))}
                    </div>

                    <h3 className="text-sm font-semibold uppercase tracking-wide text-secondary">Neutrals</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {NEUTRAL_COLORS.map((color) => (
                            <ColorSwatch key={color.name} {...color} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-base font-semibold text-secondary">CSS variables</h3>
                    <CodeBlock code={cssVariablesCode} />
                </div>
            </section>

            <div className="border-t border-dashed border-secondary" />

            {/* Typography */}
            <section id="typography" className="scroll-mt-8 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-secondary">02</p>
                    <h2 className="text-3xl font-semibold text-primary">Typography</h2>
                    <p className="text-md text-tertiary max-w-2xl">
                        A clear type scale creates visual hierarchy and readable interfaces.
                    </p>
                </div>

                <div className="overflow-hidden rounded-xl border border-secondary divide-y divide-secondary">
                    {TYPE_SCALE.map(({ name, size, weight, lineHeight, sample }) => (
                        <div key={name} className="flex items-center gap-8 p-5 bg-primary">
                            <div className="w-40 shrink-0">
                                <p className="text-sm font-semibold text-primary">{name}</p>
                                <p className="text-xs text-tertiary">{size} / {weight} / {lineHeight}</p>
                            </div>
                            <p
                                className="text-primary truncate"
                                style={{ fontSize: size, fontWeight: weight, lineHeight }}
                            >
                                {sample}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-base font-semibold text-secondary">CSS variables</h3>
                    <CodeBlock code={typographyCode} />
                </div>
            </section>

            <div className="border-t border-dashed border-secondary" />

            {/* Logo & Imagery */}
            <section id="logo" className="scroll-mt-8 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-secondary">03</p>
                    <h2 className="text-3xl font-semibold text-primary">Logo & Imagery</h2>
                    <p className="text-md text-tertiary max-w-2xl">
                        Use the wordmark consistently across all contexts. Never distort, recolor, or modify the logo.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {[
                        { bg: "bg-white", border: "border border-secondary", label: "On white", textColor: "#0A1628" },
                        { bg: "bg-primary-solid", border: "", label: "On dark", textColor: "#FFFFFF" },
                        { bg: "bg-[#0A1628]", border: "", label: "On deep navy", textColor: "#2563EB" },
                        { bg: "bg-[#2563EB]", border: "", label: "On brand blue", textColor: "#FFFFFF" },
                    ].map(({ bg, border, label, textColor }) => (
                        <div key={label} className={`flex flex-col items-center justify-center gap-4 rounded-xl ${bg} ${border} p-12`}>
                            <span className="text-4xl font-bold tracking-tight" style={{ color: textColor }}>MW</span>
                            <span className="text-xs font-medium" style={{ color: textColor, opacity: 0.6 }}>{label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <div className="border-t border-dashed border-secondary" />

            {/* Spacing */}
            <section id="spacing" className="scroll-mt-8 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-secondary">04</p>
                    <h2 className="text-3xl font-semibold text-primary">Spacing</h2>
                    <p className="text-md text-tertiary max-w-2xl">
                        A 4px base unit drives all spacing. Use the Tailwind scale for consistent layouts.
                    </p>
                </div>

                <div className="flex flex-col gap-3 overflow-hidden rounded-xl border border-secondary divide-y divide-secondary">
                    {SPACING_SCALE.map(({ label, size, tw, bars }) => (
                        <div key={label} className="flex items-center gap-6 px-5 py-3 bg-primary">
                            <span className="w-16 text-sm font-mono font-medium text-secondary">{size}</span>
                            <div
                                className="h-4 rounded bg-brand-solid shrink-0"
                                style={{ width: `${bars * 16}px` }}
                            />
                            <span className="text-sm text-tertiary font-mono">{label}</span>
                            <span className="ml-auto text-xs text-quaternary font-mono">gap-{tw}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-base font-semibold text-secondary">Reference</h3>
                    <CodeBlock code={spacingCode} />
                </div>
            </section>

            <div className="border-t border-dashed border-secondary" />

            {/* Tokens */}
            <section id="tokens" className="scroll-mt-8 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-secondary">05</p>
                    <h2 className="text-3xl font-semibold text-primary">Design Tokens</h2>
                    <p className="text-md text-tertiary max-w-2xl">
                        All design decisions are encoded as CSS custom properties in <code className="text-brand-secondary font-mono text-sm">src/styles/theme.css</code>.
                        Use semantic token names in your code — never hardcode raw values.
                    </p>
                </div>

                <div className="overflow-hidden rounded-xl border border-secondary">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-secondary_alt border-b border-secondary">
                                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Category</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Token</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Usage</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary">
                            {[
                                { category: "Text", token: "text-primary", usage: "Primary text, headings" },
                                { category: "Text", token: "text-secondary", usage: "Labels, subheadings" },
                                { category: "Text", token: "text-tertiary", usage: "Body text, descriptions" },
                                { category: "Text", token: "text-brand-secondary", usage: "Brand-colored text" },
                                { category: "Background", token: "bg-primary", usage: "Page and card backgrounds" },
                                { category: "Background", token: "bg-secondary", usage: "Section backgrounds" },
                                { category: "Background", token: "bg-brand-solid", usage: "Primary brand fill" },
                                { category: "Border", token: "border-primary", usage: "High-contrast borders" },
                                { category: "Border", token: "border-secondary", usage: "Default borders" },
                                { category: "Border", token: "border-brand", usage: "Active/focused borders" },
                                { category: "Foreground", token: "fg-primary", usage: "Primary icons" },
                                { category: "Foreground", token: "fg-brand-primary", usage: "Brand icons" },
                            ].map(({ category, token, usage }) => (
                                <tr key={token} className="bg-primary">
                                    <td className="px-4 py-3 text-xs text-tertiary">{category}</td>
                                    <td className="px-4 py-3 font-mono text-xs text-brand-secondary">{token}</td>
                                    <td className="px-4 py-3 text-xs text-tertiary">{usage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="border-t border-dashed border-secondary" />

            {/* Brand Voice */}
            <section id="voice" className="scroll-mt-8 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-secondary">06</p>
                    <h2 className="text-3xl font-semibold text-primary">Brand Voice</h2>
                    <p className="text-md text-tertiary max-w-2xl">
                        Clear, direct, and human. We build for practitioners — write like one.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                        { principle: "Direct", description: "Say what you mean. Cut filler words. Lead with the action." },
                        { principle: "Helpful", description: "Anticipate confusion. Explain what matters. Skip what doesn't." },
                        { principle: "Human", description: "Write like a smart colleague, not a style guide or a chatbot." },
                    ].map(({ principle, description }) => (
                        <div key={principle} className="rounded-xl border border-secondary p-5 bg-primary flex flex-col gap-2">
                            <h3 className="text-sm font-semibold text-primary">{principle}</h3>
                            <p className="text-sm text-tertiary">{description}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="text-base font-semibold text-secondary">Do's and Don'ts</h3>
                    <CodeBlock code={voiceCode} />
                </div>
            </section>
        </div>
    );
};
