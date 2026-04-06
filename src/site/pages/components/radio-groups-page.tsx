import { RadioGroup, Radio } from "react-aria-components";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { cx } from "@/utils/cx";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "vertical", label: "Vertical group" },
    { id: "horizontal", label: "Horizontal group" },
];

const StyledRadio = ({ value, children }: { value: string; children: React.ReactNode }) => (
    <Radio
        value={value}
        className="flex items-center gap-2.5 cursor-pointer group"
    >
        {({ isSelected }) => (
            <>
                <div className={cx(
                    "size-4 rounded-full border-2 flex items-center justify-center transition duration-100 ease-linear",
                    isSelected ? "border-brand bg-white" : "border-primary bg-primary"
                )}>
                    {isSelected && <div className="size-1.5 rounded-full bg-brand-solid" />}
                </div>
                <span className="text-sm text-secondary">{children}</span>
            </>
        )}
    </Radio>
);

export const RadioGroupsPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Radio groups"
            title="Radio group components"
            description="Grouped radio buttons for single-selection from a set of options, built on React Aria."
            componentName="radio-buttons"
            filePath="src/components/base/radio-buttons/radio-buttons.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Radio group example"
                preview={
                    <RadioGroup defaultValue="option1" className="flex flex-col gap-2">
                        <StyledRadio value="option1">Option 1</StyledRadio>
                        <StyledRadio value="option2">Option 2</StyledRadio>
                        <StyledRadio value="option3">Option 3</StyledRadio>
                    </RadioGroup>
                }
                code={`import { RadioGroup, Radio } from "react-aria-components";

<RadioGroup defaultValue="option1">
  <Radio value="option1">Option 1</Radio>
  <Radio value="option2">Option 2</Radio>
  <Radio value="option3">Option 3</Radio>
</RadioGroup>`}
            />

            <PreviewBlock
                id="vertical"
                title="Vertical group"
                preview={
                    <RadioGroup defaultValue="monthly" className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <StyledRadio value="monthly">Monthly billing</StyledRadio>
                            <StyledRadio value="annual">Annual billing (save 20%)</StyledRadio>
                            <StyledRadio value="lifetime">Lifetime access</StyledRadio>
                        </div>
                    </RadioGroup>
                }
                code={`<RadioGroup defaultValue="monthly" className="flex flex-col gap-2">
  <Radio value="monthly">Monthly billing</Radio>
  <Radio value="annual">Annual billing (save 20%)</Radio>
  <Radio value="lifetime">Lifetime access</Radio>
</RadioGroup>`}
            />

            <PreviewBlock
                id="horizontal"
                title="Horizontal group"
                preview={
                    <RadioGroup defaultValue="sm" orientation="horizontal" className="flex gap-6">
                        <StyledRadio value="sm">Small</StyledRadio>
                        <StyledRadio value="md">Medium</StyledRadio>
                        <StyledRadio value="lg">Large</StyledRadio>
                        <StyledRadio value="xl">X-Large</StyledRadio>
                    </RadioGroup>
                }
                code={`<RadioGroup defaultValue="sm" orientation="horizontal" className="flex gap-6">
  <Radio value="sm">Small</Radio>
  <Radio value="md">Medium</Radio>
  <Radio value="lg">Large</Radio>
</RadioGroup>`}
            />
        </ComponentPageLayout>
    );
};
