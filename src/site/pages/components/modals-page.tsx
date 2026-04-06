import { useState } from "react";
import { X, AlertCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";
import { PropsTable } from "@/site/shared/props-table";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "with-actions", label: "With actions" },
    { id: "confirmation", label: "Confirmation dialog" },
    { id: "props", label: "Props" },
];

const SimpleModal = ({
    isOpen,
    onClose,
    title,
    children,
    actions,
}: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    actions?: React.ReactNode;
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-overlay" onClick={onClose} />
            <div className="relative w-full max-w-md rounded-2xl bg-primary shadow-xl border border-secondary mx-4">
                <div className="flex items-center justify-between p-6 pb-0">
                    <h2 className="text-lg font-semibold text-primary">{title}</h2>
                    <button onClick={onClose} className="rounded-lg p-1.5 text-fg-quaternary hover:text-fg-tertiary hover:bg-primary_hover transition duration-100">
                        <X className="size-5" />
                    </button>
                </div>
                <div className="p-6 pt-4">{children}</div>
                {actions && <div className="flex gap-3 border-t border-secondary p-4 justify-end">{actions}</div>}
            </div>
        </div>
    );
};

const ModalDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button size="sm" onClick={() => setIsOpen(true)}>Open modal</Button>
            <SimpleModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Modal title"
                actions={
                    <>
                        <Button color="secondary" size="sm" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button size="sm" onClick={() => setIsOpen(false)}>Confirm</Button>
                    </>
                }
            >
                <p className="text-sm text-tertiary">
                    This is a modal dialog. It can contain any content you need to show to the user.
                </p>
            </SimpleModal>
        </>
    );
};

const ConfirmModalDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button color="primary-destructive" size="sm" onClick={() => setIsOpen(true)}>Delete item</Button>
            <SimpleModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Delete item"
                actions={
                    <>
                        <Button color="secondary" size="sm" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button color="primary-destructive" size="sm" onClick={() => setIsOpen(false)}>Delete</Button>
                    </>
                }
            >
                <div className="flex flex-col gap-3">
                    <AlertCircle className="size-10 text-fg-error-primary" />
                    <p className="text-sm text-tertiary">
                        Are you sure you want to delete this item? This action cannot be undone.
                    </p>
                </div>
            </SimpleModal>
        </>
    );
};

export const ModalsPage = () => {
    return (
        <ComponentPageLayout
            group="Application UI"
            name="Modal"
            title="Modal components"
            description="Overlay dialog components for focused user interactions, confirmations, and data entry."
            componentName="modals"
            filePath="src/components/application/modals/"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Modal example"
                preview={<ModalDemo />}
                code={`import { Modal } from "@/components/application/modals/modal";

const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open modal</Button>
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal title">
  <p>Modal content goes here.</p>
</Modal>`}
            />

            <PreviewBlock
                id="with-actions"
                title="With actions"
                preview={<ModalDemo />}
                code={`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Edit profile"
  actions={
    <>
      <Button color="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button onClick={() => setIsOpen(false)}>Save changes</Button>
    </>
  }
>
  <p>Form content here</p>
</Modal>`}
            />

            <PreviewBlock
                id="confirmation"
                title="Confirmation dialog"
                preview={<ConfirmModalDemo />}
                code={`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Delete item"
  actions={
    <>
      <Button color="secondary">Cancel</Button>
      <Button color="primary-destructive">Delete</Button>
    </>
  }
>
  <p>Are you sure? This action cannot be undone.</p>
</Modal>`}
            />

            <PropsTable
                props={[
                    { name: "isOpen", type: "boolean", default: "false", description: "Controls modal visibility" },
                    { name: "onClose", type: "() => void", default: "—", description: "Close handler" },
                    { name: "title", type: "string", default: "—", description: "Modal header title" },
                    { name: "children", type: "ReactNode", default: "—", description: "Modal body content" },
                    { name: "actions", type: "ReactNode", default: "—", description: "Footer action buttons" },
                ]}
            />
        </ComponentPageLayout>
    );
};
