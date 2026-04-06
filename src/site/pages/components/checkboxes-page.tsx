import { Checkbox } from "@/components/base/checkbox/checkbox";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { PropsTable } from "@/site/shared/props-table";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "states", label: "States" },
    { id: "with-label", label: "With label" },
    { id: "with-hint", label: "With hint text" },
    { id: "sizes", label: "Sizes" },
    { id: "disabled", label: "Disabled" },
    { id: "props", label: "Props" },
];

export const CheckboxesPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Checkboxes"
            title="Checkbox components"
            description="Free and open-source React checkbox components built on React Aria for full accessibility support."
            componentName="checkbox"
            filePath="src/components/base/checkbox/checkbox.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Checkbox example"
                preview={
                    <div className="flex items-center gap-6">
                        <Checkbox size="sm" />
                        <Checkbox size="sm" isSelected />
                        <Checkbox size="sm" isIndeterminate />
                    </div>
                }
                code={`import { Checkbox } from "@/components/base/checkbox/checkbox";

<Checkbox size="sm" />
<Checkbox size="sm" isSelected />
<Checkbox size="sm" isIndeterminate />`}
            />

            <PreviewBlock
                id="states"
                title="States"
                description="Unchecked, checked, and indeterminate"
                preview={
                    <div className="flex items-center gap-6">
                        <Checkbox size="sm" />
                        <Checkbox size="sm" isSelected />
                        <Checkbox size="sm" isIndeterminate />
                    </div>
                }
                code={`<Checkbox />                    {/* Unchecked */}
<Checkbox isSelected />         {/* Checked */}
<Checkbox isIndeterminate />    {/* Indeterminate */}`}
            />

            <PreviewBlock
                id="with-label"
                title="With label"
                preview={
                    <div className="flex flex-col gap-3">
                        <Checkbox size="sm" label="Remember me" />
                        <Checkbox size="sm" label="Accept terms and conditions" isSelected />
                        <Checkbox size="sm" label="Subscribe to newsletter" />
                    </div>
                }
                code={`<Checkbox size="sm" label="Remember me" />
<Checkbox size="sm" label="Accept terms and conditions" isSelected />`}
            />

            <PreviewBlock
                id="with-hint"
                title="With hint text"
                preview={
                    <div className="flex flex-col gap-4">
                        <Checkbox
                            size="sm"
                            label="Remember me"
                            hint="Save my login details for next time."
                        />
                        <Checkbox
                            size="sm"
                            label="Marketing emails"
                            hint="Get notified about new features and updates."
                            isSelected
                        />
                    </div>
                }
                code={`<Checkbox
  label="Remember me"
  hint="Save my login details for next time."
/>`}
            />

            <PreviewBlock
                id="sizes"
                title="Sizes"
                preview={
                    <div className="flex items-center gap-6">
                        <Checkbox size="sm" label="Small" />
                        <Checkbox size="md" label="Medium" />
                    </div>
                }
                code={`<Checkbox size="sm" label="Small" />
<Checkbox size="md" label="Medium" />`}
            />

            <PreviewBlock
                id="disabled"
                title="Disabled state"
                preview={
                    <div className="flex items-center gap-6">
                        <Checkbox size="sm" isDisabled />
                        <Checkbox size="sm" isDisabled isSelected />
                        <Checkbox size="sm" isDisabled label="Disabled with label" />
                    </div>
                }
                code={`<Checkbox isDisabled />
<Checkbox isDisabled isSelected />
<Checkbox isDisabled label="Disabled" />`}
            />

            <PropsTable
                props={[
                    { name: "size", type: '"sm" | "md"', default: '"sm"', description: "Checkbox size" },
                    { name: "label", type: "string", default: "—", description: "Checkbox label text" },
                    { name: "hint", type: "string", default: "—", description: "Helper text below label" },
                    { name: "isSelected", type: "boolean", default: "false", description: "Checked state" },
                    { name: "isIndeterminate", type: "boolean", default: "false", description: "Indeterminate state" },
                    { name: "isDisabled", type: "boolean", default: "false", description: "Disabled state" },
                ]}
            />
        </ComponentPageLayout>
    );
};
