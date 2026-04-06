import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { PropsTable } from "@/site/shared/props-table";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "values", label: "Different values" },
    { id: "sizes", label: "Sizes" },
    { id: "colors", label: "Colors" },
    { id: "props", label: "Props" },
];

export const ProgressPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Progress indicators"
            title="Progress indicator components"
            description="Bar and circular progress indicators to communicate loading states and task completion."
            componentName="progress-indicators"
            filePath="src/components/base/progress-indicators/progress-indicators.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Progress bar example"
                preview={
                    <div className="w-full max-w-sm">
                        <ProgressBar value={60} />
                    </div>
                }
                code={`import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";

<ProgressBar value={60} />`}
            />

            <PreviewBlock
                id="values"
                title="Different values"
                preview={
                    <div className="w-full max-w-sm flex flex-col gap-4">
                        <ProgressBar value={0} />
                        <ProgressBar value={25} />
                        <ProgressBar value={50} />
                        <ProgressBar value={75} />
                        <ProgressBar value={100} />
                    </div>
                }
                code={`<ProgressBar value={0} />
<ProgressBar value={25} />
<ProgressBar value={50} />
<ProgressBar value={75} />
<ProgressBar value={100} />`}
            />

            <PropsTable
                props={[
                    { name: "value", type: "number", default: "0", description: "Progress value (0–100)" },
                    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Bar thickness" },
                ]}
            />
        </ComponentPageLayout>
    );
};
