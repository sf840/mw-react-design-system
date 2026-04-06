import { useState } from "react";
import { BarChart01, Users01, Settings01, CreditCard01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { PropsTable } from "@/site/shared/props-table";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "with-icons", label: "With icons" },
    { id: "with-badges", label: "With badges" },
    { id: "underline", label: "Underline style" },
    { id: "props", label: "Props" },
];

const TabBar = ({
    tabs,
    activeTab,
    onTabChange,
    variant = "underline",
}: {
    tabs: { id: string; label: string; icon?: React.FC<{ className?: string }>; badge?: string }[];
    activeTab: string;
    onTabChange: (id: string) => void;
    variant?: "underline" | "pill";
}) => (
    <div className={`flex ${variant === "underline" ? "border-b border-secondary" : "bg-secondary_alt rounded-lg p-1 gap-1"}`}>
        {tabs.map(({ id, label, icon: Icon, badge }) => (
            <button
                key={id}
                type="button"
                onClick={() => onTabChange(id)}
                className={
                    variant === "underline"
                        ? `flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 -mb-px transition duration-100 ease-linear ${
                              activeTab === id
                                  ? "border-brand text-brand-secondary"
                                  : "border-transparent text-tertiary hover:text-secondary"
                          }`
                        : `flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition duration-100 ease-linear ${
                              activeTab === id
                                  ? "bg-primary text-primary shadow-xs"
                                  : "text-tertiary hover:text-secondary"
                          }`
                }
            >
                {Icon && <Icon className="size-4" />}
                {label}
                {badge && (
                    <Badge color="gray" size="sm">{badge}</Badge>
                )}
            </button>
        ))}
    </div>
);

const BasicTabsDemo = () => {
    const [active, setActive] = useState("overview");
    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "analytics", label: "Analytics" },
        { id: "reports", label: "Reports" },
        { id: "notifications", label: "Notifications" },
    ];
    return (
        <div className="w-full flex flex-col gap-4">
            <TabBar tabs={tabs} activeTab={active} onTabChange={setActive} />
            <div className="p-4 text-sm text-tertiary">
                Showing content for: <span className="font-medium text-secondary capitalize">{active}</span>
            </div>
        </div>
    );
};

const IconTabsDemo = () => {
    const [active, setActive] = useState("analytics");
    const tabs = [
        { id: "analytics", label: "Analytics", icon: BarChart01 },
        { id: "team", label: "Team", icon: Users01 },
        { id: "billing", label: "Billing", icon: CreditCard01 },
        { id: "settings", label: "Settings", icon: Settings01 },
    ];
    return (
        <div className="w-full flex flex-col gap-4">
            <TabBar tabs={tabs} activeTab={active} onTabChange={setActive} />
            <div className="p-4 text-sm text-tertiary">
                Active tab: <span className="font-medium text-secondary capitalize">{active}</span>
            </div>
        </div>
    );
};

const BadgeTabsDemo = () => {
    const [active, setActive] = useState("all");
    const tabs = [
        { id: "all", label: "All", badge: "24" },
        { id: "active", label: "Active", badge: "8" },
        { id: "archived", label: "Archived", badge: "16" },
    ];
    return (
        <div className="w-full flex flex-col gap-4">
            <TabBar tabs={tabs} activeTab={active} onTabChange={setActive} />
        </div>
    );
};

const PillTabsDemo = () => {
    const [active, setActive] = useState("monthly");
    const tabs = [
        { id: "monthly", label: "Monthly" },
        { id: "annual", label: "Annual" },
    ];
    return (
        <div className="w-full max-w-xs flex flex-col gap-4">
            <TabBar tabs={tabs} activeTab={active} onTabChange={setActive} variant="pill" />
        </div>
    );
};

export const TabsPage = () => {
    return (
        <ComponentPageLayout
            group="Application UI"
            name="Tabs"
            title="Tab components"
            description="Tab navigation components for organizing and switching between related content sections."
            componentName="tabs"
            filePath="src/components/application/tabs/"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Tabs example"
                preview={<BasicTabsDemo />}
                code={`const [active, setActive] = useState("overview");

<div className="flex border-b border-secondary">
  {tabs.map(tab => (
    <button
      key={tab.id}
      onClick={() => setActive(tab.id)}
      className={active === tab.id ? "border-b-2 border-brand text-brand-secondary" : "text-tertiary"}
    >
      {tab.label}
    </button>
  ))}
</div>`}
            />

            <PreviewBlock
                id="with-icons"
                title="Tabs with icons"
                preview={<IconTabsDemo />}
                code={`const tabs = [
  { id: "analytics", label: "Analytics", icon: BarChart01 },
  { id: "team", label: "Team", icon: Users01 },
];

// Each tab button includes the icon
<button>
  <Icon className="size-4" />
  {label}
</button>`}
            />

            <PreviewBlock
                id="with-badges"
                title="Tabs with badges"
                preview={<BadgeTabsDemo />}
                code={`const tabs = [
  { id: "all", label: "All", badge: "24" },
  { id: "active", label: "Active", badge: "8" },
];

<button>
  {label}
  <Badge color="gray" size="sm">{badge}</Badge>
</button>`}
            />

            <PreviewBlock
                id="underline"
                title="Pill / segment style"
                preview={<PillTabsDemo />}
                code={`// Pill-style tabs with bg-secondary_alt container
<div className="bg-secondary_alt rounded-lg p-1">
  <button className={active ? "bg-primary shadow-xs rounded-md" : ""}>
    Monthly
  </button>
  <button>Annual</button>
</div>`}
            />

            <PropsTable
                props={[
                    { name: "tabs", type: "{ id: string; label: string; icon?: FC }[]", default: "—", description: "Tab configuration" },
                    { name: "activeTab", type: "string", default: "—", description: "Currently active tab ID" },
                    { name: "onTabChange", type: "(id: string) => void", default: "—", description: "Tab change handler" },
                    { name: "variant", type: '"underline" | "pill"', default: '"underline"', description: "Visual style" },
                ]}
            />
        </ComponentPageLayout>
    );
};
