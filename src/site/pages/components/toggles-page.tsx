import { Toggle } from "@/components/base/toggle/toggle";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { PropsTable } from "@/site/shared/props-table";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "states", label: "On / Off states" },
    { id: "sizes", label: "Sizes" },
    { id: "with-label", label: "With label" },
    { id: "disabled", label: "Disabled" },
    { id: "props", label: "Props" },
];

export const TogglesPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Toggles"
            title="Toggle components"
            description="Toggle switch components for boolean on/off settings, built on React Aria."
            componentName="toggle"
            filePath="src/components/base/toggle/toggle.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Toggle example"
                preview={
                    <div className="flex items-center gap-4">
                        <Toggle size="md" />
                        <Toggle size="md" isSelected />
                    </div>
                }
                code={`import { Toggle } from "@/components/base/toggle/toggle";

<Toggle size="md" />
<Toggle size="md" isSelected />`}
            />

            <PreviewBlock
                id="states"
                title="On / Off states"
                preview={
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-center gap-2">
                            <Toggle size="md" />
                            <span className="text-xs text-tertiary">Off</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Toggle size="md" isSelected />
                            <span className="text-xs text-tertiary">On</span>
                        </div>
                    </div>
                }
                code={`<Toggle size="md" />           {/* Off */}
<Toggle size="md" isSelected /> {/* On */}`}
            />

            <PreviewBlock
                id="sizes"
                title="Sizes"
                preview={
                    <div className="flex items-center gap-6">
                        <Toggle size="sm" isSelected />
                        <Toggle size="md" isSelected />
                    </div>
                }
                code={`<Toggle size="sm" isSelected />
<Toggle size="md" isSelected />`}
            />

            <PreviewBlock
                id="with-label"
                title="With label"
                preview={
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between max-w-xs">
                            <div>
                                <p className="text-sm font-medium text-secondary">Email notifications</p>
                                <p className="text-xs text-tertiary">Receive emails about new activity.</p>
                            </div>
                            <Toggle size="md" isSelected />
                        </div>
                        <div className="flex items-center justify-between max-w-xs">
                            <div>
                                <p className="text-sm font-medium text-secondary">Marketing emails</p>
                                <p className="text-xs text-tertiary">News, updates, and promotions.</p>
                            </div>
                            <Toggle size="md" />
                        </div>
                    </div>
                }
                code={`<div className="flex items-center justify-between">
  <div>
    <p className="text-sm font-medium">Email notifications</p>
    <p className="text-xs text-tertiary">Receive emails about new activity.</p>
  </div>
  <Toggle size="md" isSelected />
</div>`}
            />

            <PreviewBlock
                id="disabled"
                title="Disabled state"
                preview={
                    <div className="flex items-center gap-4">
                        <Toggle size="md" isDisabled />
                        <Toggle size="md" isDisabled isSelected />
                    </div>
                }
                code={`<Toggle size="md" isDisabled />
<Toggle size="md" isDisabled isSelected />`}
            />

            <PropsTable
                props={[
                    { name: "size", type: '"sm" | "md"', default: '"md"', description: "Toggle size" },
                    { name: "isSelected", type: "boolean", default: "false", description: "On/off state" },
                    { name: "isDisabled", type: "boolean", default: "false", description: "Disabled state" },
                    { name: "onChange", type: "(value: boolean) => void", default: "—", description: "Change handler" },
                ]}
            />
        </ComponentPageLayout>
    );
};
