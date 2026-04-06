import { Plus, ArrowRight, Trash02 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { PropsTable } from "@/site/shared/props-table";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "primary", label: "Primary" },
    { id: "secondary", label: "Secondary" },
    { id: "tertiary", label: "Tertiary" },
    { id: "sizes", label: "Sizes" },
    { id: "icon-leading", label: "Icon leading" },
    { id: "icon-trailing", label: "Icon trailing" },
    { id: "loading", label: "Loading" },
    { id: "destructive", label: "Destructive" },
    { id: "disabled", label: "Disabled" },
    { id: "props", label: "Props" },
];

export const ButtonsPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Buttons"
            title="Button components"
            description="Free and open-source React button components built for modern applications and websites. Built using React Aria and styled with Tailwind CSS."
            componentName="button"
            filePath="src/components/base/buttons/button.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Button example"
                description="Buttons in their default sizes across color variants."
                preview={
                    <div className="flex flex-wrap items-center gap-3">
                        <Button color="primary" size="sm">Primary</Button>
                        <Button color="secondary" size="sm">Secondary</Button>
                        <Button color="tertiary" size="sm">Tertiary</Button>
                        <Button color="link-color" size="sm">Link color</Button>
                        <Button color="link-gray" size="sm">Link gray</Button>
                    </div>
                }
                code={`import { Button } from "@/components/base/buttons/button";

<Button color="primary" size="sm">Primary</Button>
<Button color="secondary" size="sm">Secondary</Button>
<Button color="tertiary" size="sm">Tertiary</Button>
<Button color="link-color" size="sm">Link color</Button>
<Button color="link-gray" size="sm">Link gray</Button>`}
            />

            <PreviewBlock
                id="primary"
                title="Primary buttons"
                description="All sizes for the primary button variant."
                preview={
                    <div className="flex flex-wrap items-center gap-3">
                        <Button color="primary" size="xs">X-Small</Button>
                        <Button color="primary" size="sm">Small</Button>
                        <Button color="primary" size="md">Medium</Button>
                        <Button color="primary" size="lg">Large</Button>
                        <Button color="primary" size="xl">X-Large</Button>
                    </div>
                }
                code={`<Button color="primary" size="xs">X-Small</Button>
<Button color="primary" size="sm">Small</Button>
<Button color="primary" size="md">Medium</Button>
<Button color="primary" size="lg">Large</Button>
<Button color="primary" size="xl">X-Large</Button>`}
            />

            <PreviewBlock
                id="secondary"
                title="Secondary buttons"
                preview={
                    <div className="flex flex-wrap items-center gap-3">
                        <Button color="secondary" size="xs">X-Small</Button>
                        <Button color="secondary" size="sm">Small</Button>
                        <Button color="secondary" size="md">Medium</Button>
                        <Button color="secondary" size="lg">Large</Button>
                        <Button color="secondary" size="xl">X-Large</Button>
                    </div>
                }
                code={`<Button color="secondary" size="sm">Secondary</Button>`}
            />

            <PreviewBlock
                id="tertiary"
                title="Tertiary buttons"
                preview={
                    <div className="flex flex-wrap items-center gap-3">
                        <Button color="tertiary" size="sm">Tertiary</Button>
                        <Button color="tertiary" size="md">Tertiary</Button>
                        <Button color="tertiary" size="lg">Tertiary</Button>
                    </div>
                }
                code={`<Button color="tertiary" size="sm">Tertiary</Button>`}
            />

            <PreviewBlock
                id="sizes"
                title="Sizes"
                description="xs, sm, md, lg, xl"
                preview={
                    <div className="flex flex-wrap items-end gap-3">
                        {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
                            <Button key={size} size={size} color="primary">{size.toUpperCase()}</Button>
                        ))}
                    </div>
                }
                code={`<Button size="xs" color="primary">XS</Button>
<Button size="sm" color="primary">SM</Button>
<Button size="md" color="primary">MD</Button>
<Button size="lg" color="primary">LG</Button>
<Button size="xl" color="primary">XL</Button>`}
            />

            <PreviewBlock
                id="icon-leading"
                title="Icon leading"
                preview={
                    <div className="flex flex-wrap items-center gap-3">
                        <Button iconLeading={Plus} size="sm">Add item</Button>
                        <Button iconLeading={Plus} size="md">Add item</Button>
                        <Button iconLeading={Plus} size="lg" color="secondary">Add item</Button>
                    </div>
                }
                code={`import { Plus } from "@untitledui/icons";

<Button iconLeading={Plus} size="sm">Add item</Button>`}
            />

            <PreviewBlock
                id="icon-trailing"
                title="Icon trailing"
                preview={
                    <div className="flex flex-wrap items-center gap-3">
                        <Button iconTrailing={ArrowRight} size="sm">Continue</Button>
                        <Button iconTrailing={ArrowRight} size="md" color="secondary">Continue</Button>
                    </div>
                }
                code={`import { ArrowRight } from "@untitledui/icons";

<Button iconTrailing={ArrowRight} size="sm">Continue</Button>`}
            />

            <PreviewBlock
                id="loading"
                title="Loading state"
                preview={
                    <div className="flex flex-wrap items-center gap-3">
                        <Button isLoading size="sm">Saving</Button>
                        <Button isLoading showTextWhileLoading size="sm">Saving...</Button>
                        <Button isLoading size="md" color="secondary">Loading</Button>
                    </div>
                }
                code={`<Button isLoading size="sm">Saving</Button>
<Button isLoading showTextWhileLoading size="sm">Saving...</Button>`}
            />

            <PreviewBlock
                id="destructive"
                title="Destructive buttons"
                preview={
                    <div className="flex flex-wrap items-center gap-3">
                        <Button color="primary-destructive" iconLeading={Trash02} size="sm">Delete</Button>
                        <Button color="secondary-destructive" iconLeading={Trash02} size="sm">Delete</Button>
                        <Button color="tertiary-destructive" iconLeading={Trash02} size="sm">Delete</Button>
                        <Button color="link-destructive" size="sm">Delete</Button>
                    </div>
                }
                code={`import { Trash02 } from "@untitledui/icons";

<Button color="primary-destructive" iconLeading={Trash02}>Delete</Button>
<Button color="secondary-destructive" iconLeading={Trash02}>Delete</Button>
<Button color="tertiary-destructive">Delete</Button>
<Button color="link-destructive">Delete</Button>`}
            />

            <PreviewBlock
                id="disabled"
                title="Disabled state"
                preview={
                    <div className="flex flex-wrap items-center gap-3">
                        <Button isDisabled size="sm">Disabled primary</Button>
                        <Button isDisabled color="secondary" size="sm">Disabled secondary</Button>
                        <Button isDisabled color="tertiary" size="sm">Disabled tertiary</Button>
                    </div>
                }
                code={`<Button isDisabled size="sm">Disabled</Button>`}
            />

            <PropsTable
                props={[
                    { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"sm"', description: "Controls the button size" },
                    { name: "color", type: '"primary" | "secondary" | "tertiary" | "link-color" | "link-gray" | "primary-destructive" | "secondary-destructive" | "tertiary-destructive" | "link-destructive"', default: '"primary"', description: "Color variant" },
                    { name: "iconLeading", type: "FC | ReactNode", default: "—", description: "Icon or component shown before text" },
                    { name: "iconTrailing", type: "FC | ReactNode", default: "—", description: "Icon or component shown after text" },
                    { name: "isLoading", type: "boolean", default: "false", description: "Shows loading spinner" },
                    { name: "showTextWhileLoading", type: "boolean", default: "false", description: "Keeps text visible during loading" },
                    { name: "isDisabled", type: "boolean", default: "false", description: "Disables the button" },
                    { name: "href", type: "string", default: "—", description: "Renders as an anchor tag" },
                ]}
            />
        </ComponentPageLayout>
    );
};
