import { useLocation, Outlet } from "react-router";
import {
    BookOpen01,
    Image01,
    Code02,
    Edit01,
    Type01,
    Palette,
    Ruler,
} from "@untitledui/icons";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import type { NavItemType } from "@/components/application/app-navigation/config";

const NAV_ITEMS: NavItemType[] = [
    { label: "Introduction", href: "/introduction", icon: BookOpen01 },

    // Brand section header
    { label: "Brand", divider: true },
    { label: "01 Colors", href: "/brand#colors", icon: Palette },
    { label: "02 Typography", href: "/brand#typography", icon: Type01 },
    { label: "03 Logo & Imagery", href: "/brand#logo", icon: Image01 },
    { label: "04 Spacing", href: "/brand#spacing", icon: Ruler },
    { label: "05 Tokens", href: "/brand#tokens", icon: Code02 },
    { label: "06 Brand Voice", href: "/brand#voice", icon: Edit01 },

    // Base components section header
    { label: "Base components", divider: true },
    { label: "Avatars", href: "/components/avatars" },
    { label: "Badge groups", href: "/components/badge-groups" },
    { label: "Badges", href: "/components/badges" },
    { label: "Button groups", href: "/components/button-groups" },
    { label: "Buttons", href: "/components/buttons" },
    { label: "Checkboxes", href: "/components/checkboxes" },
    { label: "Dropdowns", href: "/components/dropdowns" },
    { label: "Inputs", href: "/components/inputs" },
    { label: "Progress indicators", href: "/components/progress-indicators" },
    { label: "Radio buttons", href: "/components/radio-buttons" },
    { label: "Radio groups", href: "/components/radio-groups" },
    { label: "Select", href: "/components/select" },
    { label: "Multi-select", href: "/components/multi-select" },
    { label: "Sliders", href: "/components/sliders" },
    { label: "Tags", href: "/components/tags" },
    { label: "Textarea", href: "/components/textarea" },
    { label: "Toggles", href: "/components/toggles" },
    { label: "Tooltips", href: "/components/tooltips" },

    // Application UI section header
    { label: "Application UI", divider: true },
    { label: "Alerts", href: "/components/alerts" },
    { label: "Modal", href: "/components/modals" },
    { label: "Tables", href: "/components/tables" },
    { label: "Tabs", href: "/components/tabs" },
    { label: "Sidebar nav", href: "/components/sidebar-nav" },
];

export const SiteLayout = () => {
    const location = useLocation();
    const activeUrl = location.pathname;

    return (
        <div className="flex min-h-screen bg-primary">
            <SidebarNavigationSimple
                activeUrl={activeUrl}
                items={NAV_ITEMS}
                showAccountCard={false}
            />
            <main className="flex-1 min-w-0 py-10 px-8 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
};
