import { ArrowUp } from "@untitledui/icons";
import { Badge, BadgeWithDot, BadgeWithIcon } from "@/components/base/badges/badges";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { PropsTable } from "@/site/shared/props-table";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "colors", label: "Colors" },
    { id: "sizes", label: "Sizes" },
    { id: "types", label: "Types" },
    { id: "with-dot", label: "With dot" },
    { id: "with-icon", label: "With icon" },
    { id: "props", label: "Props" },
];

const BADGE_COLORS = ["gray", "brand", "error", "warning", "success", "blue", "purple", "pink", "orange"] as const;

export const BadgesPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Badges"
            title="Badge components"
            description="Free and open-source React badge components for status labels, counts, and indicators."
            componentName="badges"
            filePath="src/components/base/badges/badges.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Badge example"
                preview={
                    <div className="flex flex-wrap items-center gap-3">
                        <Badge color="gray">Gray</Badge>
                        <Badge color="brand">Brand</Badge>
                        <Badge color="success">Success</Badge>
                        <Badge color="warning">Warning</Badge>
                        <Badge color="error">Error</Badge>
                    </div>
                }
                code={`import { Badge } from "@/components/base/badges/badges";

<Badge color="gray">Gray</Badge>
<Badge color="brand">Brand</Badge>
<Badge color="success">Success</Badge>`}
            />

            <PreviewBlock
                id="colors"
                title="Color variants"
                preview={
                    <div className="flex flex-wrap items-center gap-3">
                        {BADGE_COLORS.map((color) => (
                            <Badge key={color} color={color}>{color}</Badge>
                        ))}
                    </div>
                }
                code={`<Badge color="gray">Gray</Badge>
<Badge color="brand">Brand</Badge>
<Badge color="error">Error</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="success">Success</Badge>
<Badge color="blue">Blue</Badge>
<Badge color="purple">Purple</Badge>`}
            />

            <PreviewBlock
                id="sizes"
                title="Sizes"
                preview={
                    <div className="flex flex-wrap items-center gap-3">
                        <Badge color="brand" size="sm">Small</Badge>
                        <Badge color="brand" size="md">Medium</Badge>
                        <Badge color="brand" size="lg">Large</Badge>
                    </div>
                }
                code={`<Badge color="brand" size="sm">Small</Badge>
<Badge color="brand" size="md">Medium</Badge>
<Badge color="brand" size="lg">Large</Badge>`}
            />

            <PreviewBlock
                id="types"
                title="Badge types"
                preview={
                    <div className="flex flex-wrap items-center gap-3">
                        <Badge color="brand" type="pill-color">Pill color</Badge>
                        <Badge color="brand" type="color">Color</Badge>
                        <Badge type="modern">Modern</Badge>
                    </div>
                }
                code={`<Badge color="brand" type="pill-color">Pill color</Badge>
<Badge color="brand" type="color">Color</Badge>
<Badge type="modern">Modern</Badge>`}
            />

            <PreviewBlock
                id="with-dot"
                title="Badge with dot"
                preview={
                    <div className="flex flex-wrap items-center gap-3">
                        <BadgeWithDot color="success">Active</BadgeWithDot>
                        <BadgeWithDot color="warning">Pending</BadgeWithDot>
                        <BadgeWithDot color="error">Error</BadgeWithDot>
                        <BadgeWithDot color="gray">Archived</BadgeWithDot>
                    </div>
                }
                code={`import { BadgeWithDot } from "@/components/base/badges/badges";

<BadgeWithDot color="success">Active</BadgeWithDot>
<BadgeWithDot color="warning">Pending</BadgeWithDot>
<BadgeWithDot color="error">Error</BadgeWithDot>`}
            />

            <PreviewBlock
                id="with-icon"
                title="Badge with icon"
                preview={
                    <div className="flex flex-wrap items-center gap-3">
                        <BadgeWithIcon iconLeading={ArrowUp} color="success">+12.4%</BadgeWithIcon>
                        <BadgeWithIcon iconLeading={ArrowUp} color="error">-3.2%</BadgeWithIcon>
                    </div>
                }
                code={`import { BadgeWithIcon } from "@/components/base/badges/badges";
import { ArrowUp } from "@untitledui/icons";

<BadgeWithIcon iconLeading={ArrowUp} color="success">+12.4%</BadgeWithIcon>`}
            />

            <PropsTable
                props={[
                    { name: "color", type: '"gray" | "brand" | "error" | "warning" | "success" | "blue" | "purple" | ...', default: '"gray"', description: "Badge color variant" },
                    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Badge size" },
                    { name: "type", type: '"pill-color" | "color" | "modern"', default: '"pill-color"', description: "Badge shape variant" },
                ]}
            />
        </ComponentPageLayout>
    );
};
