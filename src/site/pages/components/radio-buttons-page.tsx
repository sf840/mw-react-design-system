import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { PropsTable } from "@/site/shared/props-table";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "states", label: "States" },
    { id: "disabled", label: "Disabled" },
    { id: "props", label: "Props" },
];

// Minimal radio button visual (React Aria RadioGroup requires RadioGroup wrapper)
const RadioDemo = ({ selected, disabled, label }: { selected?: boolean; disabled?: boolean; label?: string }) => (
    <div className={`flex items-center gap-2 ${disabled ? "opacity-50" : ""}`}>
        <div className={`size-4 rounded-full border-2 flex items-center justify-center transition duration-100 ${selected ? "border-brand bg-brand-primary" : "border-primary bg-primary"}`}>
            {selected && <div className="size-1.5 rounded-full bg-brand-solid" />}
        </div>
        {label && <span className="text-sm text-secondary">{label}</span>}
    </div>
);

export const RadioButtonsPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Radio buttons"
            title="Radio button components"
            description="Radio button components built on React Aria for accessible single-selection within a group."
            componentName="radio-buttons"
            filePath="src/components/base/radio-buttons/radio-buttons.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Radio button example"
                preview={
                    <div className="flex items-center gap-6">
                        <RadioDemo />
                        <RadioDemo selected />
                    </div>
                }
                code={`import { RadioGroup, Radio } from "react-aria-components";

<RadioGroup>
  <Radio value="option1">Option 1</Radio>
  <Radio value="option2">Option 2</Radio>
</RadioGroup>`}
            />

            <PreviewBlock
                id="states"
                title="States"
                preview={
                    <div className="flex items-center gap-6">
                        <RadioDemo label="Unselected" />
                        <RadioDemo selected label="Selected" />
                    </div>
                }
                code={`<Radio value="unselected">Unselected</Radio>
<Radio value="selected">Selected</Radio>`}
            />

            <PreviewBlock
                id="disabled"
                title="Disabled state"
                preview={
                    <div className="flex items-center gap-6">
                        <RadioDemo disabled label="Disabled" />
                        <RadioDemo disabled selected label="Disabled checked" />
                    </div>
                }
                code={`<Radio value="option" isDisabled>Disabled</Radio>`}
            />

            <PropsTable
                props={[
                    { name: "value", type: "string", default: "—", description: "The radio button value" },
                    { name: "isDisabled", type: "boolean", default: "false", description: "Disabled state" },
                    { name: "children", type: "ReactNode", default: "—", description: "Label content" },
                ]}
            />
        </ComponentPageLayout>
    );
};
