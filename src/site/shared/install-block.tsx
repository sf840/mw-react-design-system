import { useState } from "react";
import { CodeBlock } from "./code-block";

interface InstallBlockProps {
    componentName: string;
    filePath: string;
}

export const InstallBlock = ({ componentName, filePath }: InstallBlockProps) => {
    const [activeTab, setActiveTab] = useState<"cli" | "manual">("cli");

    const cliCode = `npx untitledui@latest add ${componentName}`;
    const manualCode = `# Copy the component file from:\n# ${filePath}\n\n# Then import it in your project:\nimport { ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} } from "@/components/base/${componentName}/${componentName}";`;

    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-primary">Installation</h3>
            <div className="overflow-hidden rounded-xl border border-secondary">
                <div className="flex border-b border-secondary bg-secondary_alt px-4">
                    {(["cli", "manual"] as const).map((tab) => (
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
                            {tab === "cli" ? "CLI" : "Manual"}
                        </button>
                    ))}
                </div>
                <CodeBlock code={activeTab === "cli" ? cliCode : manualCode} />
            </div>
        </div>
    );
};
