import { User01 } from "@untitledui/icons";
import { Select } from "@/components/base/select/select";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { PropsTable } from "@/site/shared/props-table";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "with-label", label: "With label" },
    { id: "with-icon", label: "With icon" },
    { id: "sizes", label: "Sizes" },
    { id: "disabled", label: "Disabled" },
    { id: "props", label: "Props" },
];

const TEAM_MEMBERS = [
    { id: "1", label: "Olivia Rhye", supportingText: "olivia@untitledui.com" },
    { id: "2", label: "Phoenix Baker", supportingText: "phoenix@untitledui.com" },
    { id: "3", label: "Lana Steiner", supportingText: "lana@untitledui.com" },
    { id: "4", label: "Demi Wilkinson", supportingText: "demi@untitledui.com" },
];

export const SelectPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Select"
            title="Select components"
            description="Dropdown select components with search (ComboBox), icon support, and accessible keyboard navigation."
            componentName="select"
            filePath="src/components/base/select/select.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Select example"
                preview={
                    <div className="w-full max-w-sm">
                        <Select label="Team member" placeholder="Select member" items={TEAM_MEMBERS}>
                            {(item) => (
                                <Select.Item id={item.id} supportingText={item.supportingText}>
                                    {item.label}
                                </Select.Item>
                            )}
                        </Select>
                    </div>
                }
                code={`import { Select } from "@/components/base/select/select";

const items = [
  { id: "1", name: "Olivia Rhye", email: "olivia@example.com" },
];

<Select label="Team member" placeholder="Select member" items={items}>
  {(item) => (
    <Select.Item id={item.id} supportingText={item.supportingText}>
      {item.label}
    </Select.Item>
  )}
</Select>`}
            />

            <PreviewBlock
                id="with-label"
                title="With label and hint"
                preview={
                    <div className="w-full max-w-sm">
                        <Select
                            label="Role"
                            placeholder="Select a role"
                            hint="Determines user permissions"
                            items={[
                                { id: "admin", label: "Admin" },
                                { id: "editor", label: "Editor" },
                                { id: "viewer", label: "Viewer" },
                            ]}
                        >
                            {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
                        </Select>
                    </div>
                }
                code={`<Select label="Role" placeholder="Select a role" hint="Determines user permissions" items={roles}>
  {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
</Select>`}
            />

            <PreviewBlock
                id="with-icon"
                title="With icon"
                preview={
                    <div className="w-full max-w-sm">
                        <Select
                            label="Team member"
                            placeholder="Select member"
                            icon={User01}
                            items={TEAM_MEMBERS}
                        >
                            {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
                        </Select>
                    </div>
                }
                code={`import { User01 } from "@untitledui/icons";

<Select label="Team member" icon={User01} placeholder="Select member" items={items}>
  {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
</Select>`}
            />

            <PreviewBlock
                id="sizes"
                title="Sizes"
                preview={
                    <div className="w-full max-w-sm flex flex-col gap-4">
                        {(["sm", "md", "lg"] as const).map((size) => (
                            <Select
                                key={size}
                                label={`Size: ${size}`}
                                placeholder="Select option"
                                size={size}
                                items={[{ id: "1", label: "Option 1" }, { id: "2", label: "Option 2" }]}
                            >
                                {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
                            </Select>
                        ))}
                    </div>
                }
                code={`<Select size="sm" label="Small" placeholder="Select" items={items}>...</Select>
<Select size="md" label="Medium" placeholder="Select" items={items}>...</Select>
<Select size="lg" label="Large" placeholder="Select" items={items}>...</Select>`}
            />

            <PreviewBlock
                id="disabled"
                title="Disabled state"
                preview={
                    <div className="w-full max-w-sm">
                        <Select label="Team member" placeholder="Select member" isDisabled items={TEAM_MEMBERS}>
                            {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
                        </Select>
                    </div>
                }
                code={`<Select label="Team member" isDisabled placeholder="Select member" items={items}>
  {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
</Select>`}
            />

            <PropsTable
                props={[
                    { name: "label", type: "string", default: "—", description: "Field label" },
                    { name: "placeholder", type: "string", default: "—", description: "Placeholder text" },
                    { name: "hint", type: "string", default: "—", description: "Helper text" },
                    { name: "icon", type: "FC | ReactNode", default: "—", description: "Leading icon" },
                    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Select size" },
                    { name: "isDisabled", type: "boolean", default: "false", description: "Disabled state" },
                    { name: "isRequired", type: "boolean", default: "false", description: "Required field" },
                    { name: "items", type: "Array", default: "—", description: "Data items to display" },
                ]}
            />
        </ComponentPageLayout>
    );
};
