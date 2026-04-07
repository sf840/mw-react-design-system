import type { ReactNode } from "react";
import { Moon01, Sun } from "@untitledui/icons";
import { MidwesternLogo } from "@/components/foundations/logo/midwestern-logo";
import { useTheme } from "@/providers/theme-provider";
import { cx } from "@/utils/cx";
import { MobileNavigationHeader } from "../base-components/mobile-header";
import { NavAccountCard } from "../base-components/nav-account-card";
import { NavItemBase } from "../base-components/nav-item";
import { NavList } from "../base-components/nav-list";
import type { NavItemType } from "../config";

interface SidebarNavigationProps {
    /** URL of the currently active item. */
    activeUrl?: string;
    /** List of items to display. */
    items: NavItemType[];
    /** List of footer items to display. */
    footerItems?: NavItemType[];
    /** Feature card to display. */
    featureCard?: ReactNode;
    /** Whether to show the account card. */
    showAccountCard?: boolean;
    /** Whether to hide the right side border. */
    hideBorder?: boolean;
    /** Additional CSS classes to apply to the sidebar. */
    className?: string;
    /** Whether to round the account card avatar. */
    avatarRounded?: boolean;
}

const SidebarHeader = () => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div className="shrink-0 flex items-center justify-between px-4 lg:px-5 pt-4 lg:pt-5 pb-4">
            <MidwesternLogo variant="primary" colorScheme={isDark ? "light" : "dark"} height={24} />
            <button
                type="button"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="flex size-8 items-center justify-center rounded-lg text-quaternary transition duration-100 ease-linear hover:bg-secondary hover:text-tertiary"
            >
                {isDark ? <Sun className="size-4" /> : <Moon01 className="size-4" />}
            </button>
        </div>
    );
};

export const SidebarNavigationSimple = ({
    activeUrl,
    items,
    footerItems = [],
    featureCard,
    showAccountCard = true,
    hideBorder = false,
    className,
}: SidebarNavigationProps) => {
    const MAIN_SIDEBAR_WIDTH = 280;

    const content = (
        <aside
            style={
                {
                    "--width": `${MAIN_SIDEBAR_WIDTH}px`,
                } as React.CSSProperties
            }
            className={cx(
                "flex h-full w-full max-w-full flex-col bg-primary lg:w-(--width)",
                !hideBorder && "border-secondary md:border-r",
                className,
            )}
        >
            {/* Fixed logo header — does not scroll */}
            <SidebarHeader />

            {/* Scrollable nav list */}
            <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
                <NavList activeUrl={activeUrl} items={items} />
            </div>

            {/* Fixed footer */}
            {(footerItems.length > 0 || featureCard || showAccountCard) && (
                <div className="shrink-0 flex flex-col gap-3 px-4 py-4 lg:py-5">
                    {footerItems.length > 0 && (
                        <ul className="flex flex-col">
                            {footerItems.map((item) => (
                                <li key={item.label} className="py-px">
                                    <NavItemBase badge={item.badge} icon={item.icon} href={item.href} type="link" current={item.href === activeUrl}>
                                        {item.label}
                                    </NavItemBase>
                                </li>
                            ))}
                        </ul>
                    )}

                    {featureCard}

                    {showAccountCard && <NavAccountCard />}
                </div>
            )}
        </aside>
    );

    return (
        <>
            {/* Mobile header navigation */}
            <MobileNavigationHeader>{content}</MobileNavigationHeader>

            {/* Desktop sidebar navigation */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex">{content}</div>

            {/* Placeholder to take up physical space because the real sidebar has `fixed` position. */}
            <div
                style={{
                    paddingLeft: MAIN_SIDEBAR_WIDTH,
                }}
                className="invisible hidden lg:sticky lg:top-0 lg:bottom-0 lg:left-0 lg:block"
            />
        </>
    );
};
