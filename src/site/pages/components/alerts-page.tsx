import { AlertCircle, CheckCircle, InfoCircle, AlertTriangle, X } from "@untitledui/icons";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "info", label: "Info" },
    { id: "success", label: "Success" },
    { id: "warning", label: "Warning" },
    { id: "error", label: "Error" },
];

type AlertVariant = "info" | "success" | "warning" | "error";

const ALERT_STYLES: Record<AlertVariant, {
    bg: string; border: string; iconColor: string; titleColor: string; textColor: string; Icon: React.FC<{ className?: string }>;
}> = {
    info: {
        bg: "bg-primary",
        border: "border-secondary",
        iconColor: "text-fg-brand-primary",
        titleColor: "text-primary",
        textColor: "text-tertiary",
        Icon: InfoCircle,
    },
    success: {
        bg: "bg-success-primary",
        border: "border-success-primary",
        iconColor: "text-fg-success-primary",
        titleColor: "text-success-primary",
        textColor: "text-success-primary",
        Icon: CheckCircle,
    },
    warning: {
        bg: "bg-warning-primary",
        border: "border-warning-primary",
        iconColor: "text-fg-warning-primary",
        titleColor: "text-warning-primary",
        textColor: "text-warning-primary",
        Icon: AlertTriangle,
    },
    error: {
        bg: "bg-error-primary",
        border: "border-error-primary",
        iconColor: "text-fg-error-primary",
        titleColor: "text-error-primary",
        textColor: "text-error-primary",
        Icon: AlertCircle,
    },
};

const Alert = ({
    variant,
    title,
    description,
    dismissible = false,
}: {
    variant: AlertVariant;
    title: string;
    description: string;
    dismissible?: boolean;
}) => {
    const styles = ALERT_STYLES[variant];
    const { Icon } = styles;

    return (
        <div className={`flex items-start gap-3 rounded-xl border p-4 ${styles.bg} ${styles.border}`}>
            <Icon className={`size-5 shrink-0 mt-0.5 ${styles.iconColor}`} />
            <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold ${styles.titleColor}`}>{title}</p>
                <p className={`mt-1 text-sm ${styles.textColor}`}>{description}</p>
            </div>
            {dismissible && (
                <button type="button" className={`shrink-0 ${styles.iconColor} hover:opacity-70 transition duration-100`}>
                    <X className="size-4" />
                </button>
            )}
        </div>
    );
};

export const AlertsPage = () => {
    return (
        <ComponentPageLayout
            group="Application UI"
            name="Alerts"
            title="Alert components"
            description="Alert banners for communicating status, feedback, and important information to users."
            componentName="alerts"
            filePath="src/components/application/"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Alert example"
                preview={
                    <div className="w-full max-w-lg">
                        <Alert
                            variant="info"
                            title="New features available"
                            description="Update your plan to access the latest features."
                        />
                    </div>
                }
                code={`<Alert variant="info" title="New features available" description="Update your plan." />`}
            />

            <PreviewBlock
                id="info"
                title="Info alert"
                preview={
                    <div className="w-full max-w-lg flex flex-col gap-3">
                        <Alert
                            variant="info"
                            title="Information"
                            description="Your account will be migrated to the new system on January 15th."
                        />
                        <Alert
                            variant="info"
                            title="Tip"
                            description="Use keyboard shortcuts to speed up your workflow."
                            dismissible
                        />
                    </div>
                }
                code={`<Alert variant="info" title="Information" description="..." />
<Alert variant="info" title="Tip" description="..." dismissible />`}
            />

            <PreviewBlock
                id="success"
                title="Success alert"
                preview={
                    <div className="w-full max-w-lg">
                        <Alert
                            variant="success"
                            title="Payment successful"
                            description="Your payment of $299 has been processed successfully."
                            dismissible
                        />
                    </div>
                }
                code={`<Alert variant="success" title="Payment successful" description="..." dismissible />`}
            />

            <PreviewBlock
                id="warning"
                title="Warning alert"
                preview={
                    <div className="w-full max-w-lg">
                        <Alert
                            variant="warning"
                            title="Account storage almost full"
                            description="You're using 90% of your 5GB storage limit. Upgrade to add more."
                            dismissible
                        />
                    </div>
                }
                code={`<Alert variant="warning" title="Storage almost full" description="..." dismissible />`}
            />

            <PreviewBlock
                id="error"
                title="Error alert"
                preview={
                    <div className="w-full max-w-lg">
                        <Alert
                            variant="error"
                            title="Could not save changes"
                            description="There was an error saving your profile. Please try again."
                            dismissible
                        />
                    </div>
                }
                code={`<Alert variant="error" title="Could not save changes" description="..." dismissible />`}
            />
        </ComponentPageLayout>
    );
};
