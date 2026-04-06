import { X } from "@untitledui/icons";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "colors", label: "Colors" },
    { id: "with-close", label: "With close button" },
    { id: "sizes", label: "Sizes" },
];

type TagColor = "gray" | "brand" | "success" | "warning" | "error" | "blue" | "purple";

const TAG_COLORS: { color: TagColor; label: string; bg: string; text: string; ring: string }[] = [
    { color: "gray", label: "Gray", bg: "bg-utility-neutral-50", text: "text-utility-neutral-700", ring: "ring-utility-neutral-200" },
    { color: "brand", label: "Brand", bg: "bg-utility-brand-50", text: "text-utility-brand-700", ring: "ring-utility-brand-200" },
    { color: "success", label: "Success", bg: "bg-utility-green-50", text: "text-utility-green-700", ring: "ring-utility-green-200" },
    { color: "warning", label: "Warning", bg: "bg-utility-yellow-50", text: "text-utility-yellow-700", ring: "ring-utility-yellow-200" },
    { color: "error", label: "Error", bg: "bg-utility-red-50", text: "text-utility-red-700", ring: "ring-utility-red-200" },
    { color: "blue", label: "Blue", bg: "bg-utility-blue-50", text: "text-utility-blue-700", ring: "ring-utility-blue-200" },
    { color: "purple", label: "Purple", bg: "bg-utility-purple-50", text: "text-utility-purple-700", ring: "ring-utility-purple-200" },
];

const Tag = ({ bg, text, ring, children, showClose }: { bg: string; text: string; ring: string; children: React.ReactNode; showClose?: boolean }) => (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${bg} ${text} ${ring}`}>
        {children}
        {showClose && <X className="size-3 cursor-pointer opacity-60 hover:opacity-100" />}
    </span>
);

export const TagsPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Tags"
            title="Tag components"
            description="Tag/chip components for categorization and filtering, with optional close/remove buttons."
            componentName="tags"
            filePath="src/components/base/tags/tags.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Tag example"
                preview={
                    <div className="flex flex-wrap gap-2">
                        <Tag bg="bg-utility-brand-50" text="text-utility-brand-700" ring="ring-utility-brand-200">Design</Tag>
                        <Tag bg="bg-utility-green-50" text="text-utility-green-700" ring="ring-utility-green-200">Engineering</Tag>
                        <Tag bg="bg-utility-neutral-50" text="text-utility-neutral-700" ring="ring-utility-neutral-200">Product</Tag>
                    </div>
                }
                code={`import { Tags } from "@/components/base/tags/tags";

// Tags component wraps the badge system
// See badges for the underlying color implementation`}
            />

            <PreviewBlock
                id="colors"
                title="Color variants"
                preview={
                    <div className="flex flex-wrap gap-2">
                        {TAG_COLORS.map(({ label, bg, text, ring }) => (
                            <Tag key={label} bg={bg} text={text} ring={ring}>{label}</Tag>
                        ))}
                    </div>
                }
                code={`// All color variants
<Tag color="gray">Gray</Tag>
<Tag color="brand">Brand</Tag>
<Tag color="success">Success</Tag>
<Tag color="warning">Warning</Tag>
<Tag color="error">Error</Tag>`}
            />

            <PreviewBlock
                id="with-close"
                title="With close button"
                preview={
                    <div className="flex flex-wrap gap-2">
                        {TAG_COLORS.slice(0, 4).map(({ label, bg, text, ring }) => (
                            <Tag key={label} bg={bg} text={text} ring={ring} showClose>{label}</Tag>
                        ))}
                    </div>
                }
                code={`<Tag onClose={() => removeTag(id)}>React</Tag>
<Tag onClose={() => removeTag(id)}>TypeScript</Tag>`}
            />

            <PreviewBlock
                id="sizes"
                title="Sizes"
                preview={
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center rounded-full px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset bg-utility-brand-50 text-utility-brand-700 ring-utility-brand-200">Small</span>
                        <span className="inline-flex items-center rounded-full px-2 py-0.5 text-sm font-medium ring-1 ring-inset bg-utility-brand-50 text-utility-brand-700 ring-utility-brand-200">Medium</span>
                        <span className="inline-flex items-center rounded-full px-2.5 py-1 text-sm font-medium ring-1 ring-inset bg-utility-brand-50 text-utility-brand-700 ring-utility-brand-200">Large</span>
                    </div>
                }
                code={`<Tag size="sm">Small</Tag>
<Tag size="md">Medium</Tag>
<Tag size="lg">Large</Tag>`}
            />
        </ComponentPageLayout>
    );
};
