import { useState } from "react";
import { Check, Copy01, User01 } from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { AvatarProfilePhoto } from "@/components/base/avatar/avatar-profile-photo";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Input } from "@/components/base/input/input";
import { Select } from "@/components/base/select/select";
import { Toggle } from "@/components/base/toggle/toggle";
import { Tabs, TabList, Tab, TabPanel } from "@/components/application/tabs/tabs";
import { useClipboard } from "@/hooks/use-clipboard";

// ── Types ─────────────────────────────────────────────────────────────────────

type ComponentType = "avatar" | "label-group" | "profile-photo";
type Mode = "image" | "initials" | "icon";
type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type RestrictedSize = "sm" | "md" | "lg";

const RESTRICTED_SIZES: RestrictedSize[] = ["sm", "md", "lg"];

function clampSize(size: AvatarSize, type: ComponentType): AvatarSize | RestrictedSize {
    if (type === "avatar") return size;
    if (size === "xs" || size === "sm") return "sm";
    if (size === "xl" || size === "2xl") return "lg";
    return size as RestrictedSize;
}

// ── Code generation ───────────────────────────────────────────────────────────

interface ConfigState {
    componentType: ComponentType;
    mode: Mode;
    imageUrl: string;
    initials: string;
    name: string;
    subtitle: string;
    size: AvatarSize;
    rounded: boolean;
    border: boolean;
    status: "online" | "offline" | null;
    verified: boolean;
}

function generateCode(cfg: ConfigState): string {
    const effectiveSize = clampSize(cfg.size, cfg.componentType);
    const lines: string[] = [];

    const componentName =
        cfg.componentType === "avatar" ? "Avatar"
        : cfg.componentType === "label-group" ? "AvatarLabelGroup"
        : "AvatarProfilePhoto";

    // Content props
    if (cfg.mode === "image") {
        lines.push(`  src="${cfg.imageUrl}"`);
        lines.push(`  alt="User"`);
    } else if (cfg.mode === "initials") {
        lines.push(`  initials="${cfg.initials}"`);
    } else {
        lines.push(`  placeholderIcon={User01}`);
    }

    // Label group required props
    if (cfg.componentType === "label-group") {
        lines.push(`  title="${cfg.name}"`);
        lines.push(`  subtitle="${cfg.subtitle}"`);
    }

    // Size: always include for label-group/profile-photo; omit for avatar when "md"
    if (cfg.componentType === "avatar") {
        if (effectiveSize !== "md") lines.push(`  size="${effectiveSize}"`);
    } else {
        lines.push(`  size="${effectiveSize}"`);
    }

    // Appearance: rounded (avatar + label-group only)
    if (cfg.componentType !== "profile-photo" && !cfg.rounded) {
        lines.push(`  rounded={false}`);
    }
    // border: avatar only (label-group always forces border internally)
    if (cfg.componentType === "avatar" && cfg.border) {
        lines.push(`  border`);
    }
    if (cfg.status) lines.push(`  status="${cfg.status}"`);
    if (cfg.verified) lines.push(`  verified`);

    if (lines.length === 0) return `<${componentName} />`;
    return `<${componentName}\n${lines.join("\n")}\n/>`;
}

// ── Preview renderer ──────────────────────────────────────────────────────────

function AvatarPreview({ cfg }: { cfg: ConfigState }) {
    const effectiveSize = clampSize(cfg.size, cfg.componentType);
    const src = cfg.mode === "image" ? cfg.imageUrl : undefined;
    const initials = cfg.mode === "initials" ? cfg.initials : undefined;
    const placeholderIcon = cfg.mode === "icon" ? User01 : undefined;

    if (cfg.componentType === "label-group") {
        return (
            <div className="w-64 max-w-full">
                <AvatarLabelGroup
                    src={src}
                    alt={src ? "User" : undefined}
                    initials={initials}
                    placeholderIcon={placeholderIcon}
                    size={effectiveSize as RestrictedSize}
                    title={cfg.name}
                    subtitle={cfg.subtitle}
                    rounded={cfg.rounded}
                    status={cfg.status ?? undefined}
                    verified={cfg.verified}
                />
            </div>
        );
    }

    if (cfg.componentType === "profile-photo") {
        return (
            <AvatarProfilePhoto
                src={src}
                alt={src ? "User" : undefined}
                initials={initials}
                placeholderIcon={placeholderIcon}
                size={effectiveSize as RestrictedSize}
                status={cfg.status ?? undefined}
                verified={cfg.verified}
            />
        );
    }

    return (
        <Avatar
            src={src}
            alt={src ? "User" : undefined}
            initials={initials}
            placeholderIcon={placeholderIcon}
            size={effectiveSize as AvatarSize}
            rounded={cfg.rounded}
            border={cfg.border}
            status={cfg.status ?? undefined}
            verified={cfg.verified}
        />
    );
}

// ── Main configurator ─────────────────────────────────────────────────────────

export const AvatarConfigurator = () => {
    const { copied, copy } = useClipboard();

    const [componentType, setComponentType] = useState<ComponentType>("avatar");
    const [mode, setMode] = useState<Mode>("image");
    const [imageUrl, setImageUrl] = useState("https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80");
    const [initials, setInitials] = useState("OR");
    const [name, setName] = useState("Olivia Rhye");
    const [subtitle, setSubtitle] = useState("olivia@untitledui.com");
    const [size, setSize] = useState<AvatarSize>("md");
    const [rounded, setRounded] = useState(true);
    const [border, setBorder] = useState(false);
    const [status, setStatus] = useState<"online" | "offline" | null>(null);
    const [verified, setVerified] = useState(false);

    const cfg: ConfigState = { componentType, mode, imageUrl, initials, name, subtitle, size, rounded, border, status, verified };
    const code = generateCode(cfg);

    const isRestricted = componentType !== "avatar";

    const handleComponentTypeChange = (keys: Set<string>) => {
        const key = [...keys][0] as ComponentType | undefined;
        if (!key) return;
        setComponentType(key);
    };

    const handleModeChange = (keys: Set<string>) => {
        const key = [...keys][0] as Mode | undefined;
        if (key) setMode(key);
    };

    const handleSizeChange = (keys: Set<string>) => {
        const key = [...keys][0] as AvatarSize | undefined;
        if (key) setSize(key);
    };

    const sizeIsDisabled = (s: AvatarSize) =>
        isRestricted && !RESTRICTED_SIZES.includes(s as RestrictedSize);

    return (
        <div className="flex flex-col gap-5 rounded-xl border border-secondary bg-primary p-5">
            {/* Component type selector */}
            <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-quaternary">Component</p>
                <ButtonGroup
                    size="sm"
                    selectedKeys={new Set([componentType])}
                    onSelectionChange={(keys) => handleComponentTypeChange(keys as Set<string>)}
                >
                    <ButtonGroupItem id="avatar">Avatar</ButtonGroupItem>
                    <ButtonGroupItem id="label-group">Label group</ButtonGroupItem>
                    <ButtonGroupItem id="profile-photo">Profile photo</ButtonGroupItem>
                </ButtonGroup>
            </div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Preview panel */}
                <div className="flex min-h-48 items-center justify-center rounded-lg bg-secondary p-8">
                    <AvatarPreview cfg={cfg} />
                </div>

                {/* Controls panel */}
                <div>
                    <Tabs defaultSelectedKey="content">
                        <TabList type="button-border" size="sm" className="mb-4">
                            <Tab id="content">Content</Tab>
                            <Tab id="appearance">Appearance</Tab>
                        </TabList>

                        {/* ── Content tab ── */}
                        <TabPanel id="content" className="flex flex-col gap-4">
                            {/* Mode selector */}
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium text-secondary">Mode</p>
                                <ButtonGroup
                                    size="sm"
                                    selectedKeys={new Set([mode])}
                                    onSelectionChange={(keys) => handleModeChange(keys as Set<string>)}
                                >
                                    <ButtonGroupItem id="image">Image</ButtonGroupItem>
                                    <ButtonGroupItem id="initials">Initials</ButtonGroupItem>
                                    <ButtonGroupItem id="icon">Icon</ButtonGroupItem>
                                </ButtonGroup>
                            </div>

                            {/* Image URL input */}
                            {mode === "image" && (
                                <Input
                                    label="Image URL"
                                    size="sm"
                                    value={imageUrl}
                                    onChange={(v) => setImageUrl(v)}
                                    placeholder="https://..."
                                />
                            )}

                            {/* Initials input */}
                            {mode === "initials" && (
                                <Input
                                    label="Initials"
                                    size="sm"
                                    value={initials}
                                    onChange={(v) => setInitials(v.slice(0, 2))}
                                    maxLength={2}
                                    placeholder="OR"
                                />
                            )}

                            {/* Label group fields */}
                            {componentType === "label-group" && (
                                <>
                                    <Input
                                        label="Name"
                                        size="sm"
                                        value={name}
                                        onChange={(v) => setName(v)}
                                        placeholder="Olivia Rhye"
                                    />
                                    <Input
                                        label="Subtitle"
                                        size="sm"
                                        value={subtitle}
                                        onChange={(v) => setSubtitle(v)}
                                        placeholder="olivia@untitledui.com"
                                    />
                                </>
                            )}
                        </TabPanel>

                        {/* ── Appearance tab ── */}
                        <TabPanel id="appearance" className="flex flex-col gap-4">
                            {/* Size */}
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium text-secondary">Size</p>
                                <ButtonGroup
                                    size="sm"
                                    selectedKeys={new Set([size])}
                                    onSelectionChange={(keys) => handleSizeChange(keys as Set<string>)}
                                >
                                    {(["xs", "sm", "md", "lg", "xl", "2xl"] as AvatarSize[]).map((s) => (
                                        <ButtonGroupItem
                                            key={s}
                                            id={s}
                                            isDisabled={sizeIsDisabled(s)}
                                        >
                                            {s}
                                        </ButtonGroupItem>
                                    ))}
                                </ButtonGroup>
                            </div>

                            {/* Status */}
                            <Select
                                label="Status"
                                size="sm"
                                placeholder="None"
                                selectedKey={status ?? "none"}
                                onSelectionChange={(key) =>
                                    setStatus(key === "none" ? null : key as "online" | "offline")
                                }
                            >
                                <Select.Item id="none">None</Select.Item>
                                <Select.Item id="online">Online</Select.Item>
                                <Select.Item id="offline">Offline</Select.Item>
                            </Select>

                            {/* Toggles */}
                            <div className="flex flex-col gap-3">
                                {componentType !== "profile-photo" && (
                                    <Toggle
                                        label="Rounded"
                                        isSelected={rounded}
                                        onChange={setRounded}
                                    />
                                )}
                                {componentType === "avatar" && (
                                    <Toggle
                                        label="Show border"
                                        isSelected={border}
                                        onChange={setBorder}
                                    />
                                )}
                                <Toggle
                                    label="Verified badge"
                                    isSelected={verified}
                                    onChange={setVerified}
                                />
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>

            {/* Code block */}
            <div className="relative overflow-hidden rounded-lg bg-[#0d0d0d] p-4 pr-16">
                <button
                    type="button"
                    onClick={() => copy(code, "code")}
                    className="absolute top-3 right-3 flex items-center gap-1.5 rounded px-2.5 py-1.5 text-xs font-medium text-white/60 transition duration-100 ease-linear hover:bg-white/10 hover:text-white/90"
                >
                    {copied === "code" ? <Check className="size-3.5" /> : <Copy01 className="size-3.5" />}
                    {copied === "code" ? "Copied" : "Copy"}
                </button>
                <pre className="overflow-x-auto text-sm font-mono leading-relaxed text-white/80">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
};
