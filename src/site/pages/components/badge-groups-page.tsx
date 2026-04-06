import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "with-avatar", label: "With avatar" },
    { id: "stacked", label: "Stacked badges" },
];

const AVATAR_URL = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face";

export const BadgeGroupsPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Badge groups"
            title="Badge group components"
            description="Combine badges with avatars and other elements to display grouped status information."
            componentName="badge-groups"
            filePath="src/components/base/badges/badges.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Badge group example"
                preview={
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            <Avatar src={AVATAR_URL} alt="User 1" size="sm" border />
                            <Avatar initials="PB" size="sm" border />
                            <Avatar initials="LW" size="sm" border />
                        </div>
                        <Badge color="gray" size="md">+5 more</Badge>
                    </div>
                }
                code={`import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";

<div className="flex items-center gap-2">
  <div className="flex -space-x-2">
    <Avatar src="/avatar.jpg" size="sm" border />
    <Avatar initials="PB" size="sm" border />
    <Avatar initials="LW" size="sm" border />
  </div>
  <Badge color="gray">+5 more</Badge>
</div>`}
            />

            <PreviewBlock
                id="with-avatar"
                title="Badge with avatar"
                preview={
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-1.5 rounded-full border border-secondary bg-primary py-1 pr-2.5 pl-1">
                            <Avatar src={AVATAR_URL} alt="Olivia Rhye" size="xs" />
                            <span className="text-sm font-medium text-secondary">Olivia Rhye</span>
                        </div>
                        <div className="flex items-center gap-1.5 rounded-full border border-secondary bg-primary py-1 pr-2.5 pl-1">
                            <Avatar initials="PB" size="xs" />
                            <span className="text-sm font-medium text-secondary">Phoenix Baker</span>
                        </div>
                    </div>
                }
                code={`<div className="flex items-center gap-1.5 rounded-full border border-secondary bg-primary py-1 pr-2.5 pl-1">
  <Avatar src="/avatar.jpg" size="xs" />
  <span className="text-sm font-medium text-secondary">Olivia Rhye</span>
</div>`}
            />

            <PreviewBlock
                id="stacked"
                title="Stacked badges"
                preview={
                    <div className="flex flex-col gap-3">
                        {[
                            ["Design", "Engineering", "Product"],
                            ["React", "TypeScript", "Tailwind"],
                        ].map((group, i) => (
                            <div key={i} className="flex flex-wrap gap-2">
                                {group.map((label) => (
                                    <Badge key={label} color="brand" type="pill-color">{label}</Badge>
                                ))}
                            </div>
                        ))}
                    </div>
                }
                code={`<div className="flex gap-2">
  <Badge color="brand" type="pill-color">Design</Badge>
  <Badge color="brand" type="pill-color">Engineering</Badge>
  <Badge color="brand" type="pill-color">Product</Badge>
</div>`}
            />
        </ComponentPageLayout>
    );
};
