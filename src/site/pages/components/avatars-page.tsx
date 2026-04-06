import { User01 } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { PropsTable } from "@/site/shared/props-table";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "sizes", label: "Sizes" },
    { id: "status", label: "Status" },
    { id: "initials", label: "Initials" },
    { id: "label-group", label: "Label group" },
    { id: "props", label: "Props" },
];

const AVATAR_URL = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face";

export const AvatarsPage = () => {
    return (
        <ComponentPageLayout
            group="Base components"
            name="Avatars"
            title="Avatar components"
            description="Free and open-source React avatar components for displaying user profile images, initials, and online status indicators."
            componentName="avatar"
            filePath="src/components/base/avatar/avatar.tsx"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Avatar example"
                preview={
                    <div className="flex items-center gap-4">
                        <Avatar src={AVATAR_URL} alt="Olivia Rhye" size="md" />
                        <Avatar initials="OR" size="md" />
                        <Avatar placeholderIcon={User01} size="md" />
                    </div>
                }
                code={`import { Avatar } from "@/components/base/avatar/avatar";

<Avatar src="/avatar.jpg" alt="Olivia Rhye" size="md" />
<Avatar initials="OR" size="md" />
<Avatar placeholderIcon={User01} size="md" />`}
            />

            <PreviewBlock
                id="sizes"
                title="Sizes"
                description="xs through 2xl"
                preview={
                    <div className="flex items-end gap-4">
                        {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
                            <Avatar key={size} src={AVATAR_URL} alt="User" size={size} />
                        ))}
                    </div>
                }
                code={`<Avatar src="/avatar.jpg" size="xs" />
<Avatar src="/avatar.jpg" size="sm" />
<Avatar src="/avatar.jpg" size="md" />
<Avatar src="/avatar.jpg" size="lg" />
<Avatar src="/avatar.jpg" size="xl" />
<Avatar src="/avatar.jpg" size="2xl" />`}
            />

            <PreviewBlock
                id="status"
                title="Status indicators"
                preview={
                    <div className="flex items-center gap-4">
                        <Avatar src={AVATAR_URL} alt="Online user" size="md" status="online" />
                        <Avatar src={AVATAR_URL} alt="Offline user" size="md" status="offline" />
                        <Avatar src={AVATAR_URL} alt="Verified user" size="md" verified />
                    </div>
                }
                code={`<Avatar src="/avatar.jpg" size="md" status="online" />
<Avatar src="/avatar.jpg" size="md" status="offline" />
<Avatar src="/avatar.jpg" size="md" verified />`}
            />

            <PreviewBlock
                id="initials"
                title="Initials fallback"
                preview={
                    <div className="flex items-center gap-4">
                        {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
                            <Avatar key={size} initials="OR" size={size} />
                        ))}
                    </div>
                }
                code={`<Avatar initials="OR" size="md" />`}
            />

            <PreviewBlock
                id="label-group"
                title="Avatar label group"
                preview={
                    <div className="flex flex-col gap-3">
                        <AvatarLabelGroup src={AVATAR_URL} title="Olivia Rhye" subtitle="olivia@untitledui.com" size="md" />
                        <AvatarLabelGroup src={AVATAR_URL} title="Phoenix Baker" subtitle="phoenix@untitledui.com" size="sm" />
                    </div>
                }
                code={`import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";

<AvatarLabelGroup
  src="/avatar.jpg"
  title="Olivia Rhye"
  subtitle="olivia@untitledui.com"
  size="md"
/>`}
            />

            <PropsTable
                props={[
                    { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"', default: '"md"', description: "Avatar size" },
                    { name: "src", type: "string | null", default: "—", description: "Image URL" },
                    { name: "alt", type: "string", default: "—", description: "Alt text for accessibility" },
                    { name: "initials", type: "string", default: "—", description: "Text initials when no image" },
                    { name: "placeholderIcon", type: "FC", default: "—", description: "Icon when no image or initials" },
                    { name: "status", type: '"online" | "offline"', default: "—", description: "Status indicator" },
                    { name: "verified", type: "boolean", default: "false", description: "Show verification badge" },
                    { name: "rounded", type: "boolean", default: "true", description: "Whether avatar is circular" },
                ]}
            />
        </ComponentPageLayout>
    );
};
