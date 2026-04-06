import { Settings01, LogOut01, User01, HelpCircle, Edit01 } from "@untitledui/icons";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "with-icons", label: "With icons" },
    { id: "with-divider", label: "With divider" },
];

// Simple dropdown component for demo
const DemoDropdown = ({ children }: { children: React.ReactNode }) => (
    <div className="w-56 rounded-xl border border-secondary bg-primary shadow-lg overflow-hidden">
        {children}
    </div>
);

const DemoDropdownItem = ({
    icon: Icon,
    label,
    destructive = false,
}: {
    icon?: React.FC<{ className?: string }>;
    label: string;
    destructive?: boolean;
}) => (
    <div className={`flex items-center gap-2.5 px-4 py-2.5 text-sm cursor-pointer transition duration-100 ease-linear hover:bg-primary_hover ${destructive ? "text-error-primary" : "text-secondary"}`}>
        {Icon && <Icon className={`size-4 ${destructive ? "text-fg-error-secondary" : "text-fg-quaternary"}`} />}
        {label}
    </div>
);

export const DropdownsPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Dropdowns"
            title="Dropdown components"
            description="Dropdown menus for displaying lists of actions and navigation items."
            componentName="dropdown"
            filePath="src/components/base/dropdown/dropdown.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Dropdown example"
                preview={
                    <DemoDropdown>
                        <DemoDropdownItem label="View profile" />
                        <DemoDropdownItem label="Settings" />
                        <DemoDropdownItem label="Keyboard shortcuts" />
                    </DemoDropdown>
                }
                code={`import { DropdownButtonSimple } from "@/components/base/dropdown/dropdown-button-simple";

// Use the dropdown components from the dropdown folder`}
            />

            <PreviewBlock
                id="with-icons"
                title="With icons"
                preview={
                    <DemoDropdown>
                        <DemoDropdownItem icon={User01} label="View profile" />
                        <DemoDropdownItem icon={Settings01} label="Settings" />
                        <DemoDropdownItem icon={Edit01} label="Edit" />
                        <DemoDropdownItem icon={HelpCircle} label="Support" />
                    </DemoDropdown>
                }
                code={`<DemoDropdownItem icon={User01} label="View profile" />
<DemoDropdownItem icon={Settings01} label="Settings" />`}
            />

            <PreviewBlock
                id="with-divider"
                title="With divider and destructive item"
                preview={
                    <DemoDropdown>
                        <DemoDropdownItem icon={User01} label="View profile" />
                        <DemoDropdownItem icon={Settings01} label="Settings" />
                        <div className="border-t border-secondary my-1" />
                        <DemoDropdownItem icon={LogOut01} label="Sign out" destructive />
                    </DemoDropdown>
                }
                code={`<DemoDropdownItem icon={User01} label="View profile" />
<DemoDropdownItem icon={Settings01} label="Settings" />
<div className="border-t border-secondary my-1" />
<DemoDropdownItem icon={LogOut01} label="Sign out" destructive />`}
            />
        </ComponentPageLayout>
    );
};
