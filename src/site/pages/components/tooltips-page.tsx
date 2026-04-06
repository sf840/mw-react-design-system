import { HelpCircle, InfoCircle } from "@untitledui/icons";
import { Tooltip } from "@/components/base/tooltip/tooltip";
import { Button } from "@/components/base/buttons/button";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { PropsTable } from "@/site/shared/props-table";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "positions", label: "Positions" },
    { id: "with-icon", label: "With icon trigger" },
    { id: "props", label: "Props" },
];

export const TooltipsPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Tooltips"
            title="Tooltip components"
            description="Overlay tooltips that appear on hover to provide additional context and information."
            componentName="tooltip"
            filePath="src/components/base/tooltip/tooltip.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Tooltip example"
                preview={
                    <div className="flex items-center gap-8 py-8">
                        <Tooltip title="This is a tooltip">
                            <Button size="sm" color="secondary">Hover me</Button>
                        </Tooltip>
                    </div>
                }
                code={`import { Tooltip } from "@/components/base/tooltip/tooltip";

<Tooltip title="This is a tooltip">
  <Button size="sm" color="secondary">Hover me</Button>
</Tooltip>`}
            />

            <PreviewBlock
                id="positions"
                title="Positions"
                preview={
                    <div className="flex flex-wrap items-center justify-center gap-4 py-8">
                        {(["top", "bottom", "left", "right"] as const).map((placement) => (
                            <Tooltip key={placement} title={`${placement} tooltip`} placement={placement}>
                                <Button size="sm" color="secondary">{placement}</Button>
                            </Tooltip>
                        ))}
                    </div>
                }
                code={`<Tooltip title="Top tooltip" placement="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip title="Bottom tooltip" placement="bottom">
  <Button>Bottom</Button>
</Tooltip>`}
            />

            <PreviewBlock
                id="with-icon"
                title="With icon trigger"
                preview={
                    <div className="flex items-center gap-6 py-4">
                        <Tooltip title="Learn more about this feature">
                            <span className="cursor-help">
                                <HelpCircle className="size-5 text-fg-quaternary hover:text-fg-tertiary transition duration-100" />
                            </span>
                        </Tooltip>
                        <Tooltip title="This field is required for account setup">
                            <span className="cursor-help">
                                <InfoCircle className="size-5 text-fg-quaternary hover:text-fg-tertiary transition duration-100" />
                            </span>
                        </Tooltip>
                    </div>
                }
                code={`import { HelpCircle } from "@untitledui/icons";

<Tooltip title="Learn more about this feature">
  <span>
    <HelpCircle className="size-5 text-fg-quaternary" />
  </span>
</Tooltip>`}
            />

            <PropsTable
                props={[
                    { name: "title", type: "string | ReactNode", default: "—", description: "Tooltip content" },
                    { name: "placement", type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: "Tooltip position" },
                    { name: "children", type: "ReactNode", default: "—", description: "The trigger element" },
                ]}
            />
        </ComponentPageLayout>
    );
};
