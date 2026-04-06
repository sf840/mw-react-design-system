interface SectionHeaderProps {
    id?: string;
    title: string;
    description?: string;
}

export const SectionHeader = ({ id, title, description }: SectionHeaderProps) => {
    return (
        <div id={id} className="scroll-mt-8">
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            {description && <p className="mt-1 text-sm text-tertiary">{description}</p>}
        </div>
    );
};
