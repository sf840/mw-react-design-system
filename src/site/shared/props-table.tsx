interface PropRow {
    name: string;
    type: string;
    default?: string;
    description: string;
}

interface PropsTableProps {
    props: PropRow[];
}

export const PropsTable = ({ props }: PropsTableProps) => {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-primary">Props</h3>
            <div className="overflow-hidden rounded-xl border border-secondary">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-secondary_alt border-b border-secondary">
                            <th className="px-4 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Prop</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Type</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Default</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-secondary uppercase tracking-wide">Description</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary">
                        {props.map((prop) => (
                            <tr key={prop.name} className="bg-primary hover:bg-primary_hover transition duration-100 ease-linear">
                                <td className="px-4 py-3 font-mono text-xs font-medium text-brand-secondary">{prop.name}</td>
                                <td className="px-4 py-3 font-mono text-xs text-secondary">{prop.type}</td>
                                <td className="px-4 py-3 font-mono text-xs text-tertiary">{prop.default ?? "—"}</td>
                                <td className="px-4 py-3 text-xs text-tertiary">{prop.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
