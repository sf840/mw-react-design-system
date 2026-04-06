import { useState } from "react";
import { Copy01, Check } from "@untitledui/icons";

interface ColorSwatchProps {
    name: string;
    hex: string;
    usage?: string;
    className?: string;
}

export const ColorSwatch = ({ name, hex, usage, className }: ColorSwatchProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(hex);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            type="button"
            onClick={handleCopy}
            className={`group flex flex-col overflow-hidden rounded-xl border border-secondary text-left transition duration-100 ease-linear hover:shadow-md ${className ?? ""}`}
        >
            <div
                className="h-24 w-full"
                style={{ backgroundColor: hex }}
            />
            <div className="flex flex-col gap-0.5 px-3 py-3 bg-primary">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">{name}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition duration-100 ease-linear">
                        {copied ? <Check className="size-3.5 text-success-primary" /> : <Copy01 className="size-3.5 text-tertiary" />}
                    </span>
                </div>
                <span className="text-xs font-mono text-tertiary">{hex}</span>
                {usage && <span className="text-xs text-quaternary mt-0.5">{usage}</span>}
            </div>
        </button>
    );
};
