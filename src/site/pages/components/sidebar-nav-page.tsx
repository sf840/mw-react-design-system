import { LayoutAlt04, Settings01, Users01, BarChart01, HelpCircle } from "@untitledui/icons";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { PropsTable } from "@/site/shared/props-table";
import type { NavItemType } from "@/components/application/app-navigation/config";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "with-dividers", label: "With section dividers" },
    { id: "props", label: "Props" },
];

const DEMO_NAV: NavItemType[] = [
    { label: "Overview", href: "/overview", icon: LayoutAlt04 },
    { label: "Analytics", href: "/analytics", icon: BarChart01 },
    { label: "Customers", href: "/customers", icon: Users01 },
    { label: "Divider", divider: true },
    { label: "Settings", href: "/settings", icon: Settings01 },
    { label: "Help & support", href: "/help", icon: HelpCircle },
];

export const SidebarNavPage = () => {
    return (
        <ComponentPageLayout
            group="Application UI"
            name="Sidebar nav"
            title="Sidebar navigation components"
            description="Fixed sidebar navigation with section grouping, icons, and active state management."
            componentName="sidebar-navigation"
            filePath="src/components/application/app-navigation/sidebar-navigation/sidebar-simple.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Sidebar navigation example"
                preview={
                    <div className="relative h-96 w-full overflow-hidden rounded-xl border border-secondary bg-primary flex">
                        <div className="relative h-full">
                            <SidebarNavigationSimple
                                activeUrl="/analytics"
                                items={DEMO_NAV}
                                showAccountCard={false}
                                hideBorder={false}
                            />
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <p className="text-sm text-tertiary">Main content area</p>
                        </div>
                    </div>
                }
                code={`import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";

const NAV_ITEMS = [
  { label: "Overview", href: "/overview", icon: LayoutAlt04 },
  { label: "Analytics", href: "/analytics", icon: BarChart01 },
  { label: "Section header", divider: true },
  { label: "Settings", href: "/settings", icon: Settings01 },
];

<SidebarNavigationSimple
  activeUrl={pathname}
  items={NAV_ITEMS}
  showAccountCard={false}
/>`}
            />

            <PreviewBlock
                id="with-dividers"
                title="With section dividers"
                description="Use divider: true to create labeled section headers in the sidebar."
                preview={
                    <div className="relative h-96 w-full overflow-hidden rounded-xl border border-secondary bg-primary flex">
                        <div className="relative h-full">
                            <SidebarNavigationSimple
                                activeUrl="/customers"
                                items={DEMO_NAV}
                                showAccountCard={false}
                            />
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <p className="text-sm text-tertiary">Content</p>
                        </div>
                    </div>
                }
                code={`const NAV_ITEMS = [
  { label: "Overview", href: "/overview", icon: LayoutAlt04 },
  { label: "Analytics", href: "/analytics", icon: BarChart01 },
  // Section divider with label
  { label: "Account", divider: true },
  { label: "Settings", href: "/settings", icon: Settings01 },
];`}
            />

            <PropsTable
                props={[
                    { name: "activeUrl", type: "string", default: "—", description: "URL of the currently active item" },
                    { name: "items", type: "NavItemType[]", default: "—", description: "Navigation items to display" },
                    { name: "footerItems", type: "NavItemType[]", default: "[]", description: "Footer navigation items" },
                    { name: "showAccountCard", type: "boolean", default: "true", description: "Show account card in footer" },
                    { name: "hideBorder", type: "boolean", default: "false", description: "Hide the right border" },
                    { name: "featureCard", type: "ReactNode", default: "—", description: "Feature card in footer area" },
                ]}
            />
        </ComponentPageLayout>
    );
};
