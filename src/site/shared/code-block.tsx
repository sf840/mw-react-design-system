import { useState } from "react";
import { Copy01, Check } from "@untitledui/icons";

interface CodeBlockProps {
    code: string;
    language?: string;
}

export const CodeBlock = ({ code }: CodeBlockProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative rounded-xl bg-primary-solid overflow-hidden">
            <button
                type="button"
                onClick={handleCopy}
                className="absolute top-3 right-3 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-white/70 hover:text-white hover:bg-white/10 transition duration-100 ease-linear"
            >
                {copied ? <Check className="size-3.5" /> : <Copy01 className="size-3.5" />}
                {copied ? "Copied" : "Copy"}
            </button>
            <pre className="overflow-x-auto p-5 pr-20 text-sm text-white/80 font-mono leading-relaxed">
                <code>{code}</code>
            </pre>
        </div>
    );
};
