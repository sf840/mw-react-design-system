import { useEffect, useState } from "react";

interface RailSection {
    id: string;
    label: string;
}

interface RightRailProps {
    sections: RailSection[];
}

export const RightRail = ({ sections }: RightRailProps) => {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0% -60% 0%" }
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
        <nav className="hidden xl:block w-48 shrink-0">
            <div className="sticky top-8">
                <p className="text-xs font-semibold text-secondary uppercase tracking-wide mb-3">On this page</p>
                <ul className="flex flex-col gap-1">
                    {sections.map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={`block text-sm transition duration-100 ease-linear py-0.5 ${
                                    activeId === id ? "text-brand-secondary font-medium" : "text-tertiary hover:text-secondary"
                                }`}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
