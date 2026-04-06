import { Mail01, SearchLg } from "@untitledui/icons";
import { Input } from "@/components/base/input/input";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { PropsTable } from "@/site/shared/props-table";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "with-label", label: "With label" },
    { id: "with-icon", label: "With icon" },
    { id: "with-hint", label: "With hint text" },
    { id: "sizes", label: "Sizes" },
    { id: "error", label: "Error state" },
    { id: "disabled", label: "Disabled" },
    { id: "props", label: "Props" },
];

export const InputsPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Inputs"
            title="Input components"
            description="Free and open-source React input components with labels, hints, icons, and validation states. Built on React Aria."
            componentName="input"
            filePath="src/components/base/input/input.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Input example"
                preview={
                    <div className="w-full max-w-sm">
                        <Input placeholder="Enter your email" size="md" aria-label="Email" />
                    </div>
                }
                code={`import { Input } from "@/components/base/input/input";

<Input placeholder="Enter your email" size="md" />`}
            />

            <PreviewBlock
                id="with-label"
                title="With label"
                preview={
                    <div className="w-full max-w-sm flex flex-col gap-4">
                        <Input label="Email" placeholder="olivia@untitledui.com" size="md" />
                        <Input label="Username" placeholder="@username" size="md" isRequired />
                    </div>
                }
                code={`<Input label="Email" placeholder="olivia@untitledui.com" size="md" />
<Input label="Username" placeholder="@username" size="md" isRequired />`}
            />

            <PreviewBlock
                id="with-icon"
                title="With icon"
                preview={
                    <div className="w-full max-w-sm flex flex-col gap-4">
                        <Input label="Email" placeholder="olivia@untitledui.com" icon={Mail01} size="md" />
                        <Input label="Search" placeholder="Search..." icon={SearchLg} size="md" />
                    </div>
                }
                code={`import { Mail01 } from "@untitledui/icons";

<Input label="Email" placeholder="olivia@untitledui.com" icon={Mail01} size="md" />`}
            />

            <PreviewBlock
                id="with-hint"
                title="With hint text"
                preview={
                    <div className="w-full max-w-sm flex flex-col gap-4">
                        <Input
                            label="Email"
                            placeholder="olivia@untitledui.com"
                            hint="We'll never share your email with anyone else."
                            size="md"
                        />
                    </div>
                }
                code={`<Input
  label="Email"
  placeholder="olivia@untitledui.com"
  hint="We'll never share your email."
/>`}
            />

            <PreviewBlock
                id="sizes"
                title="Sizes"
                preview={
                    <div className="w-full max-w-sm flex flex-col gap-4">
                        <Input label="Small" placeholder="Small input" size="sm" />
                        <Input label="Medium" placeholder="Medium input" size="md" />
                        <Input label="Large" placeholder="Large input" size="lg" />
                    </div>
                }
                code={`<Input size="sm" label="Small" placeholder="Small" />
<Input size="md" label="Medium" placeholder="Medium" />
<Input size="lg" label="Large" placeholder="Large" />`}
            />

            <PreviewBlock
                id="error"
                title="Error state"
                preview={
                    <div className="w-full max-w-sm">
                        <Input
                            label="Email"
                            placeholder="olivia@untitledui.com"
                            isInvalid
                            hint="Please enter a valid email address."
                            size="md"
                            icon={Mail01}
                        />
                    </div>
                }
                code={`<Input
  label="Email"
  isInvalid
  hint="Please enter a valid email address."
/>`}
            />

            <PreviewBlock
                id="disabled"
                title="Disabled state"
                preview={
                    <div className="w-full max-w-sm">
                        <Input
                            label="Email"
                            placeholder="olivia@untitledui.com"
                            isDisabled
                            size="md"
                        />
                    </div>
                }
                code={`<Input label="Email" isDisabled placeholder="..." />`}
            />

            <PropsTable
                props={[
                    { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Input size" },
                    { name: "label", type: "string", default: "—", description: "Field label" },
                    { name: "placeholder", type: "string", default: "—", description: "Placeholder text" },
                    { name: "hint", type: "string", default: "—", description: "Helper text below input" },
                    { name: "icon", type: "FC", default: "—", description: "Leading icon component" },
                    { name: "isRequired", type: "boolean", default: "false", description: "Shows required indicator" },
                    { name: "isDisabled", type: "boolean", default: "false", description: "Disabled state" },
                    { name: "isInvalid", type: "boolean", default: "false", description: "Error/invalid state" },
                ]}
            />
        </ComponentPageLayout>
    );
};
