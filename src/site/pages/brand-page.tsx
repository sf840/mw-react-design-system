import { XClose } from "@untitledui/icons";
import { MidwesternLogo } from "@/components/foundations/logo/midwestern-logo";
import { BrandColorsSection } from "@/site/pages/brand-colors-section";
import { BrandTypographySection } from "@/site/pages/brand-typography-section";

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


export const BrandPage = () => {
    return (
        <div className="flex flex-col gap-20 max-w-5xl">
            {/* Colors */}
            <BrandColorsSection />

            <div className="border-t border-dashed border-secondary" />

            {/* Typography */}
            <BrandTypographySection />

            <div className="border-t border-dashed border-secondary" />

            {/* Logo & Imagery */}
            <section id="logo" className="scroll-mt-8 flex flex-col gap-12">
                <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-secondary">03</p>
                    <h2 className="text-3xl font-semibold text-primary">Logo & Imagery</h2>
                    <p className="text-md text-tertiary max-w-2xl">
                        The Midwestern logo is the cornerstone of our visual identity. Use it consistently
                        and follow these guidelines to maintain brand integrity across all contexts.
                    </p>
                </div>

                {/* Logo Variants */}
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-base font-semibold text-primary">Logo Variants</h3>
                        <p className="text-sm text-tertiary">Three approved variants cover every use case — choose based on available space and context.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {/* Primary / Horizontal wordmark */}
                        <div className="overflow-hidden rounded-xl border border-secondary">
                            <div className="grid grid-cols-2 divide-x divide-secondary">
                                <div className="flex flex-col items-center justify-center gap-6 p-10 bg-white">
                                    <MidwesternLogo variant="primary" colorScheme="dark" height={32} />
                                    <span className="text-xs font-medium text-gray-400">On white</span>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-6 p-10" style={{ backgroundColor: "#010313" }}>
                                    <MidwesternLogo variant="primary" colorScheme="light" height={32} />
                                    <span className="text-xs font-medium text-white/40">On dark</span>
                                </div>
                            </div>
                            <div className="border-t border-secondary px-5 py-3 bg-secondary_alt">
                                <p className="text-xs font-semibold text-secondary">Primary — Horizontal Wordmark</p>
                                <p className="text-xs text-tertiary">Preferred variant. Use when horizontal space allows.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Secondary / Stacked */}
                            <div className="overflow-hidden rounded-xl border border-secondary">
                                <div className="grid grid-cols-2 divide-x divide-secondary">
                                    <div className="flex flex-col items-center justify-center gap-5 p-8 bg-white">
                                        <MidwesternLogo variant="secondary" colorScheme="dark" height={72} />
                                        <span className="text-xs font-medium text-gray-400">On white</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-5 p-8" style={{ backgroundColor: "#010313" }}>
                                        <MidwesternLogo variant="secondary" colorScheme="light" height={72} />
                                        <span className="text-xs font-medium text-white/40">On dark</span>
                                    </div>
                                </div>
                                <div className="border-t border-secondary px-5 py-3 bg-secondary_alt">
                                    <p className="text-xs font-semibold text-secondary">Secondary — Stacked</p>
                                    <p className="text-xs text-tertiary">Use in constrained horizontal spaces.</p>
                                </div>
                            </div>

                            {/* Icon mark */}
                            <div className="overflow-hidden rounded-xl border border-secondary">
                                <div className="grid grid-cols-2 divide-x divide-secondary">
                                    <div className="flex flex-col items-center justify-center gap-5 p-8 bg-white">
                                        <MidwesternLogo variant="icon" colorScheme="dark" height={48} />
                                        <span className="text-xs font-medium text-gray-400">On white</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-5 p-8" style={{ backgroundColor: "#010313" }}>
                                        <MidwesternLogo variant="icon" colorScheme="light" height={48} />
                                        <span className="text-xs font-medium text-white/40">On dark</span>
                                    </div>
                                </div>
                                <div className="border-t border-secondary px-5 py-3 bg-secondary_alt">
                                    <p className="text-xs font-semibold text-secondary">Icon Mark</p>
                                    <p className="text-xs text-tertiary">Avatars, favicons, and square formats only.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Minimum Size */}
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-base font-semibold text-primary">Minimum Size</h3>
                        <p className="text-sm text-tertiary">Do not reproduce the logo smaller than these minimum dimensions to preserve legibility.</p>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-secondary">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-secondary_alt border-b border-secondary">
                                    <th className="px-5 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Variant</th>
                                    <th className="px-5 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Digital</th>
                                    <th className="px-5 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Print</th>
                                    <th className="px-5 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Preview</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary">
                                <tr className="bg-primary">
                                    <td className="px-5 py-4 text-sm text-secondary font-medium">Primary (wordmark)</td>
                                    <td className="px-5 py-4 text-sm text-tertiary font-mono">120px wide</td>
                                    <td className="px-5 py-4 text-sm text-tertiary font-mono">1.25 in wide</td>
                                    <td className="px-5 py-4">
                                        <MidwesternLogo variant="primary" colorScheme="dark" height={18} />
                                    </td>
                                </tr>
                                <tr className="bg-primary">
                                    <td className="px-5 py-4 text-sm text-secondary font-medium">Secondary (stacked)</td>
                                    <td className="px-5 py-4 text-sm text-tertiary font-mono">80px wide</td>
                                    <td className="px-5 py-4 text-sm text-tertiary font-mono">0.85 in wide</td>
                                    <td className="px-5 py-4">
                                        <MidwesternLogo variant="secondary" colorScheme="dark" height={40} />
                                    </td>
                                </tr>
                                <tr className="bg-primary">
                                    <td className="px-5 py-4 text-sm text-secondary font-medium">Icon mark</td>
                                    <td className="px-5 py-4 text-sm text-tertiary font-mono">24px wide</td>
                                    <td className="px-5 py-4 text-sm text-tertiary font-mono">0.25 in wide</td>
                                    <td className="px-5 py-4">
                                        <MidwesternLogo variant="icon" colorScheme="dark" height={24} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Clear Space */}
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-base font-semibold text-primary">Clear Space</h3>
                        <p className="text-sm text-tertiary">
                            Always maintain a minimum clear space equal to the cap-height of the "M" in Midwestern around all sides of the logo.
                            No text, graphics, or other logos may appear within this zone.
                        </p>
                    </div>

                    <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary_alt p-12">
                        <div className="relative">
                            {/* Clear space dashed border */}
                            <div className="absolute inset-0 -m-8 rounded border-2 border-dashed border-brand opacity-60" />
                            {/* Corner labels */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-brand-secondary font-mono">1× cap height</div>
                            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-medium text-brand-secondary font-mono">1× cap height</div>
                            <div className="absolute top-1/2 -left-24 -translate-y-1/2 text-xs font-medium text-brand-secondary font-mono -rotate-90 whitespace-nowrap">1× cap height</div>
                            <div className="absolute top-1/2 -right-24 -translate-y-1/2 text-xs font-medium text-brand-secondary font-mono rotate-90 whitespace-nowrap">1× cap height</div>
                            {/* Logo */}
                            <div className="bg-white rounded-lg px-6 py-4 shadow-sm">
                                <MidwesternLogo variant="primary" colorScheme="dark" height={36} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Color Usage */}
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-base font-semibold text-primary">Color Usage</h3>
                        <p className="text-sm text-tertiary">Four approved color treatments. Always use the version with the highest contrast for the given background.</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                            { label: "Dark on white", bg: "#FFFFFF", scheme: "dark" as const, border: true },
                            { label: "Light on dark", bg: "#010313", scheme: "light" as const },
                            { label: "Light on blue", bg: "#2237F1", scheme: "light" as const },
                            { label: "Dark on lime", bg: "#C7FA50", scheme: "dark" as const },
                        ].map(({ label, bg, scheme, border }) => (
                            <div
                                key={label}
                                className={`flex flex-col items-center justify-center gap-4 rounded-xl p-6 ${border ? "border border-secondary" : ""}`}
                                style={{ backgroundColor: bg }}
                            >
                                <MidwesternLogo variant="icon" colorScheme={scheme} height={40} />
                                <span className={`text-xs font-medium text-center leading-tight ${scheme === "light" ? "text-white/50" : "text-black/40"}`}>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* What Not To Do */}
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-base font-semibold text-primary">What Not To Do</h3>
                        <p className="text-sm text-tertiary">These treatments violate brand standards. Never alter the logo in any of these ways.</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {[
                            {
                                label: "Don't stretch or distort",
                                render: () => (
                                    <div style={{ transform: "scaleX(1.4)" }}>
                                        <MidwesternLogo variant="icon" colorScheme="dark" height={40} />
                                    </div>
                                ),
                            },
                            {
                                label: "Don't use low contrast",
                                bg: "#D5D9FD",
                                render: () => <MidwesternLogo variant="primary" colorScheme="dark" height={24} />,
                            },
                            {
                                label: "Don't rotate",
                                render: () => (
                                    <div style={{ transform: "rotate(25deg)" }}>
                                        <MidwesternLogo variant="icon" colorScheme="dark" height={44} />
                                    </div>
                                ),
                            },
                            {
                                label: "Don't add effects or shadows",
                                render: () => (
                                    <div style={{ filter: "drop-shadow(4px 4px 6px #2237F1)" }}>
                                        <MidwesternLogo variant="icon" colorScheme="dark" height={44} />
                                    </div>
                                ),
                            },
                            {
                                label: "Don't use on busy backgrounds",
                                render: () => (
                                    <div className="relative flex items-center justify-center">
                                        <div className="absolute inset-0 rounded" style={{
                                            background: "repeating-linear-gradient(45deg, #2237F1 0, #2237F1 4px, #C7FA50 4px, #C7FA50 8px)",
                                        }} />
                                        <div className="relative">
                                            <MidwesternLogo variant="icon" colorScheme="dark" height={44} />
                                        </div>
                                    </div>
                                ),
                            },
                            {
                                label: "Don't outline or stroke the logo",
                                render: () => (
                                    <div style={{ WebkitTextStroke: "1px #2237F1", filter: "invert(1) sepia(1) saturate(0) brightness(2)" }}>
                                        <MidwesternLogo variant="icon" colorScheme="dark" height={44} />
                                    </div>
                                ),
                            },
                        ].map(({ label, bg, render }) => (
                            <div
                                key={label}
                                className="overflow-hidden rounded-xl border border-error/30"
                                style={{ backgroundColor: bg }}
                            >
                                <div className="flex items-center justify-center p-8 bg-white min-h-[120px] relative">
                                    {render()}
                                    <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-error-solid px-2 py-0.5">
                                        <XClose className="size-3 text-white" />
                                        <span className="text-xs font-semibold text-white">Don't</span>
                                    </div>
                                </div>
                                <div className="px-4 py-2.5 bg-error-primary/10 border-t border-error/20">
                                    <p className="text-xs text-error-primary font-medium">{label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* File Formats */}
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-base font-semibold text-primary">File Formats</h3>
                        <p className="text-sm text-tertiary">Use the correct file format for each application to ensure the logo always looks its best.</p>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-secondary">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-secondary_alt border-b border-secondary">
                                    <th className="px-5 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Format</th>
                                    <th className="px-5 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Use Case</th>
                                    <th className="px-5 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary">
                                {[
                                    { format: "SVG", use: "Web, UI, digital products", notes: "Preferred for all digital use — infinitely scalable, smallest file size" },
                                    { format: "PNG (2×)", use: "Web when SVG is not supported", notes: "Export at 2× minimum for retina displays. Transparent background." },
                                    { format: "PDF", use: "Print production", notes: "Vector-based. For use with printers, sign makers, and production vendors." },
                                    { format: "EPS", use: "Professional print / embroidery", notes: "Required by many vendors. Include both light and dark versions." },
                                    { format: "WEBP", use: "Web images and thumbnails", notes: "Use for rasterized logo appearances in social media or OG images." },
                                ].map(({ format, use, notes }) => (
                                    <tr key={format} className="bg-primary">
                                        <td className="px-5 py-3.5 font-mono text-sm font-semibold text-brand-secondary">{format}</td>
                                        <td className="px-5 py-3.5 text-sm text-secondary">{use}</td>
                                        <td className="px-5 py-3.5 text-sm text-tertiary">{notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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
