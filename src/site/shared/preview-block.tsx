import { useState } from "react";
import { CodeBlock } from "./code-block";
import { SectionHeader } from "./section-header";

interface PreviewBlockProps {
    title: string;
    description?: string;
    preview: React.ReactNode;
    code: string;
    id?: string;
    className?: string;
}

export const PreviewBlock = ({ title, description, preview, code, id, className }: PreviewBlockProps) => {
    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

    return (
        <div id={id} className={`scroll-mt-8 flex flex-col gap-4 ${className ?? ""}`}>
            <SectionHeader title={title} description={description} />

            <div className="flex flex-col gap-0 overflow-hidden rounded-xl border border-secondary">
                {/* Tab bar */}
                <div className="flex border-b border-secondary bg-secondary_alt px-4">
                    {(["preview", "code"] as const).map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => setActiveTab(tab)}
                            className={`px-1 py-3 text-sm font-medium capitalize transition duration-100 ease-linear border-b-2 -mb-px ${
                                activeTab === tab
                                    ? "border-brand text-brand-secondary"
                                    : "border-transparent text-tertiary hover:text-secondary"
                            }`}
                        >
                            {tab === "preview" ? "Preview" : "Code"}
                        </button>
                    ))}
                </div>

                {/* Content */}
                {activeTab === "preview" ? (
                    <div className="min-h-40 flex flex-wrap items-center justify-center gap-4 p-8 bg-primary">
                        {preview}
                    </div>
                ) : (
                    <div className="rounded-b-xl overflow-hidden">
                        <CodeBlock code={code} />
                    </div>
                )}
            </div>
        </div>
    );
};
