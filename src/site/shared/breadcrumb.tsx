import { ChevronRight } from "@untitledui/icons";
import { Link } from "react-router";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
    return (
        <nav className="flex items-center gap-1.5 text-sm text-tertiary">
            {items.map((item, index) => (
                <span key={index} className="flex items-center gap-1.5">
                    {index > 0 && <ChevronRight className="size-3.5 text-quaternary" />}
                    {item.href ? (
                        <Link to={item.href} className="hover:text-secondary transition duration-100 ease-linear">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-secondary font-medium">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
};
