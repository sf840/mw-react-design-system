import type { ReactNode } from "react";
import { LinkExternal01 } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Breadcrumb } from "./breadcrumb";
import { InstallBlock } from "./install-block";
import { RightRail } from "./right-rail";

interface ComponentPageLayoutProps {
    group: string;
    name: string;
    title: string;
    description: string;
    isFree?: boolean;
    githubPath?: string;
    componentName: string;
    filePath: string;
    sections: { id: string; label: string }[];
    children: ReactNode;
}

export const ComponentPageLayout = ({
    group,
    name,
    title,
    description,
    isFree = true,
    githubPath,
    componentName,
    filePath,
    sections,
    children,
}: ComponentPageLayoutProps) => {
    return (
        <div className="flex gap-8 max-w-5xl">
            {/* Main content */}
            <div className="flex-1 min-w-0 flex flex-col gap-10">
                {/* Breadcrumb */}
                <Breadcrumb
                    items={[
                        { label: group },
                        { label: "Components" },
                        { label: name },
                    ]}
                />

                {/* Header */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 flex-wrap">
                        <h1 className="text-3xl font-semibold text-primary">{title}</h1>
                        {isFree && (
                            <Badge color="success" type="pill-color" size="md">
                                FREE
                            </Badge>
                        )}
                        {githubPath && (
                            <Button
                                href={`https://github.com/sf840/mw-react-design-system/blob/main/${githubPath}`}
                                color="secondary"
                                size="sm"
                                iconLeading={LinkExternal01}
                            >
                                Source
                            </Button>
                        )}
                    </div>
                    <p className="text-md text-tertiary leading-relaxed max-w-2xl">{description}</p>
                </div>

                {/* Divider */}
                <div className="border-t border-dashed border-secondary" />

                {/* Installation */}
                <InstallBlock componentName={componentName} filePath={filePath} />

                {/* Divider */}
                <div className="border-t border-dashed border-secondary" />

                {/* Content sections */}
                <div className="flex flex-col gap-12">
                    {children}
                </div>
            </div>

            {/* Right rail */}
            <RightRail sections={sections} />
        </div>
    );
};
