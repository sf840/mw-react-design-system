import { AlignLeft, AlignCenter, AlignRight, Grid01, List } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { ButtonGroup } from "@/components/base/button-group/button-group";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "two-buttons", label: "Two buttons" },
    { id: "three-buttons", label: "Three buttons" },
    { id: "with-icons", label: "With icons" },
];

export const ButtonGroupsPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Button groups"
            title="Button group components"
            description="Group related buttons together in a horizontal row with shared borders and styling."
            componentName="button-group"
            filePath="src/components/base/button-group/button-group.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Button group example"
                preview={
                    <ButtonGroup>
                        <Button color="secondary" size="sm">Previous</Button>
                        <Button color="secondary" size="sm">Next</Button>
                    </ButtonGroup>
                }
                code={`import { ButtonGroup } from "@/components/base/button-group/button-group";
import { Button } from "@/components/base/buttons/button";

<ButtonGroup>
  <Button color="secondary" size="sm">Previous</Button>
  <Button color="secondary" size="sm">Next</Button>
</ButtonGroup>`}
            />

            <PreviewBlock
                id="two-buttons"
                title="Two-button group"
                preview={
                    <ButtonGroup>
                        <Button color="secondary" size="sm">Cancel</Button>
                        <Button color="primary" size="sm">Confirm</Button>
                    </ButtonGroup>
                }
                code={`<ButtonGroup>
  <Button color="secondary" size="sm">Cancel</Button>
  <Button color="primary" size="sm">Confirm</Button>
</ButtonGroup>`}
            />

            <PreviewBlock
                id="three-buttons"
                title="Three-button group"
                preview={
                    <ButtonGroup>
                        <Button color="secondary" size="sm">Month</Button>
                        <Button color="secondary" size="sm">Quarter</Button>
                        <Button color="secondary" size="sm">Year</Button>
                    </ButtonGroup>
                }
                code={`<ButtonGroup>
  <Button color="secondary" size="sm">Month</Button>
  <Button color="secondary" size="sm">Quarter</Button>
  <Button color="secondary" size="sm">Year</Button>
</ButtonGroup>`}
            />

            <PreviewBlock
                id="with-icons"
                title="With icons"
                preview={
                    <div className="flex flex-col gap-4">
                        <ButtonGroup>
                            <Button color="secondary" size="sm" iconLeading={AlignLeft} />
                            <Button color="secondary" size="sm" iconLeading={AlignCenter} />
                            <Button color="secondary" size="sm" iconLeading={AlignRight} />
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button color="secondary" size="sm" iconLeading={Grid01}>Grid</Button>
                            <Button color="secondary" size="sm" iconLeading={List}>List</Button>
                        </ButtonGroup>
                    </div>
                }
                code={`import { AlignLeft, AlignCenter, AlignRight } from "@untitledui/icons";

<ButtonGroup>
  <Button color="secondary" size="sm" iconLeading={AlignLeft} />
  <Button color="secondary" size="sm" iconLeading={AlignCenter} />
  <Button color="secondary" size="sm" iconLeading={AlignRight} />
</ButtonGroup>`}
            />
        </ComponentPageLayout>
    );
};
