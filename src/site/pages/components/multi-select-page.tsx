import { MultiSelect } from "@/components/base/select/multi-select";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { PropsTable } from "@/site/shared/props-table";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "placeholder", label: "With placeholder" },
    { id: "props", label: "Props" },
];

const SKILLS = [
    { id: "react", label: "React" },
    { id: "typescript", label: "TypeScript" },
    { id: "tailwind", label: "Tailwind CSS" },
    { id: "node", label: "Node.js" },
    { id: "postgres", label: "PostgreSQL" },
    { id: "graphql", label: "GraphQL" },
];

export const MultiSelectPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Multi-select"
            title="Multi-select components"
            description="Select multiple items from a dropdown list with tag-style display of selected values."
            componentName="multi-select"
            filePath="src/components/base/select/multi-select.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Multi-select example"
                preview={
                    <div className="w-full max-w-sm">
                        <MultiSelect
                            label="Skills"
                            placeholder="Select skills"
                            items={SKILLS}
                        >
                            {(item) => <MultiSelect.Item id={item.id}>{item.label}</MultiSelect.Item>}
                        </MultiSelect>
                    </div>
                }
                code={`import { MultiSelect } from "@/components/base/select/multi-select";

const skills = [
  { id: "react", label: "React" },
  { id: "typescript", label: "TypeScript" },
];

<MultiSelect label="Skills" placeholder="Select skills" items={skills}>
  {(item) => <MultiSelect.Item id={item.id}>{item.label}</MultiSelect.Item>}
</MultiSelect>`}
            />

            <PreviewBlock
                id="placeholder"
                title="Technologies multi-select"
                preview={
                    <div className="w-full max-w-sm">
                        <MultiSelect
                            label="Technologies"
                            placeholder="Add technologies"
                            items={SKILLS}
                        >
                            {(item) => <MultiSelect.Item id={item.id}>{item.label}</MultiSelect.Item>}
                        </MultiSelect>
                    </div>
                }
                code={`<MultiSelect
  label="Technologies"
  placeholder="Add technologies"
  items={skills}
>
  {(item) => <MultiSelect.Item id={item.id}>{item.label}</MultiSelect.Item>}
</MultiSelect>`}
            />

            <PropsTable
                props={[
                    { name: "label", type: "string", default: "—", description: "Field label" },
                    { name: "placeholder", type: "string", default: "—", description: "Placeholder text" },
                    { name: "items", type: "Array", default: "—", description: "Options to display" },
                    { name: "isDisabled", type: "boolean", default: "false", description: "Disabled state" },
                ]}
            />
        </ComponentPageLayout>
    );
};
