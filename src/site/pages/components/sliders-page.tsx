import { Slider } from "@/components/base/slider/slider";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { PropsTable } from "@/site/shared/props-table";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "values", label: "Different values" },
    { id: "disabled", label: "Disabled" },
    { id: "props", label: "Props" },
];

const SliderWithLabel = ({ defaultValue, label, isDisabled }: { defaultValue: number; label: string; isDisabled?: boolean }) => (
    <div className="w-full flex flex-col gap-2">
        <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-secondary">{label}</span>
            <span className="text-sm text-tertiary">{defaultValue}%</span>
        </div>
        <Slider defaultValue={[defaultValue]} isDisabled={isDisabled} />
    </div>
);

export const SlidersPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Sliders"
            title="Slider components"
            description="Range slider components for selecting a value within a range, built on React Aria."
            componentName="slider"
            filePath="src/components/base/slider/slider.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Slider example"
                preview={
                    <div className="w-full max-w-sm">
                        <SliderWithLabel defaultValue={40} label="Volume" />
                    </div>
                }
                code={`import { Slider } from "@/components/base/slider/slider";

<Slider defaultValue={[40]} />`}
            />

            <PreviewBlock
                id="values"
                title="Different values"
                preview={
                    <div className="w-full max-w-sm flex flex-col gap-6">
                        <SliderWithLabel defaultValue={0} label="0%" />
                        <SliderWithLabel defaultValue={25} label="25%" />
                        <SliderWithLabel defaultValue={75} label="75%" />
                        <SliderWithLabel defaultValue={100} label="100%" />
                    </div>
                }
                code={`<Slider defaultValue={[0]} />
<Slider defaultValue={[25]} />
<Slider defaultValue={[75]} />
<Slider defaultValue={[100]} />`}
            />

            <PreviewBlock
                id="disabled"
                title="Disabled state"
                preview={
                    <div className="w-full max-w-sm">
                        <SliderWithLabel defaultValue={40} label="Volume" isDisabled />
                    </div>
                }
                code={`<Slider defaultValue={[40]} isDisabled />`}
            />

            <PropsTable
                props={[
                    { name: "defaultValue", type: "number[]", default: "[0]", description: "Initial thumb value(s)" },
                    { name: "value", type: "number[]", default: "—", description: "Controlled value(s)" },
                    { name: "minValue", type: "number", default: "0", description: "Minimum value" },
                    { name: "maxValue", type: "number", default: "100", description: "Maximum value" },
                    { name: "step", type: "number", default: "1", description: "Step increment" },
                    { name: "labelPosition", type: '"default" | "bottom" | "top-floating"', default: '"default"', description: "Label position style" },
                    { name: "isDisabled", type: "boolean", default: "false", description: "Disabled state" },
                ]}
            />
        </ComponentPageLayout>
    );
};
