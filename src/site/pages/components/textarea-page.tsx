import { TextArea } from "@/components/base/textarea/textarea";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { PropsTable } from "@/site/shared/props-table";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "with-label", label: "With label" },
    { id: "with-hint", label: "With hint text" },
    { id: "error", label: "Error state" },
    { id: "disabled", label: "Disabled" },
    { id: "props", label: "Props" },
];

export const TextAreaPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="TextArea"
            title="TextArea components"
            description="Multi-line text input components with label, hint, and validation states. Built on React Aria."
            componentName="textarea"
            filePath="src/components/base/textarea/textarea.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="TextArea example"
                preview={
                    <div className="w-full max-w-sm">
                        <TextArea placeholder="Enter your message..." aria-label="Message" />
                    </div>
                }
                code={`import { TextArea } from "@/components/base/textarea/textarea";

<TextArea placeholder="Enter your message..." />`}
            />

            <PreviewBlock
                id="with-label"
                title="With label"
                preview={
                    <div className="w-full max-w-sm">
                        <TextArea label="Description" placeholder="Enter a description..." />
                    </div>
                }
                code={`<TextArea label="Description" placeholder="Enter a description..." />`}
            />

            <PreviewBlock
                id="with-hint"
                title="With hint text"
                preview={
                    <div className="w-full max-w-sm">
                        <TextArea
                            label="Bio"
                            placeholder="Tell us about yourself..."
                            hint="Write a short bio. Maximum 300 characters."
                        />
                    </div>
                }
                code={`<TextArea
  label="Bio"
  placeholder="Tell us about yourself..."
  hint="Maximum 300 characters."
/>`}
            />

            <PreviewBlock
                id="error"
                title="Error state"
                preview={
                    <div className="w-full max-w-sm">
                        <TextArea
                            label="Message"
                            placeholder="Enter your message..."
                            isInvalid
                            hint="This field is required."
                        />
                    </div>
                }
                code={`<TextArea label="Message" isInvalid hint="This field is required." />`}
            />

            <PreviewBlock
                id="disabled"
                title="Disabled state"
                preview={
                    <div className="w-full max-w-sm">
                        <TextArea
                            label="Notes"
                            placeholder="Notes are locked..."
                            isDisabled
                        />
                    </div>
                }
                code={`<TextArea label="Notes" isDisabled placeholder="Notes are locked..." />`}
            />

            <PropsTable
                props={[
                    { name: "label", type: "string", default: "—", description: "Field label" },
                    { name: "placeholder", type: "string", default: "—", description: "Placeholder text" },
                    { name: "hint", type: "string", default: "—", description: "Helper text below textarea" },
                    { name: "isRequired", type: "boolean", default: "false", description: "Required field indicator" },
                    { name: "isDisabled", type: "boolean", default: "false", description: "Disabled state" },
                    { name: "isInvalid", type: "boolean", default: "false", description: "Error/invalid state" },
                    { name: "rows", type: "number", default: "3", description: "Number of visible rows" },
                ]}
            />
        </ComponentPageLayout>
    );
};
