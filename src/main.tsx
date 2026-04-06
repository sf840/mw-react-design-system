import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ThemeProvider } from "@/providers/theme-provider";
import { RouteProvider } from "@/providers/router-provider";
import { SiteLayout } from "@/site/site-layout";
import { IntroductionPage } from "@/site/pages/introduction-page";
import { BrandPage } from "@/site/pages/brand-page";
import { AvatarsPage } from "@/site/pages/components/avatars-page";
import { BadgeGroupsPage } from "@/site/pages/components/badge-groups-page";
import { BadgesPage } from "@/site/pages/components/badges-page";
import { ButtonGroupsPage } from "@/site/pages/components/button-groups-page";
import { ButtonsPage } from "@/site/pages/components/buttons-page";
import { CheckboxesPage } from "@/site/pages/components/checkboxes-page";
import { DropdownsPage } from "@/site/pages/components/dropdowns-page";
import { InputsPage } from "@/site/pages/components/inputs-page";
import { ProgressPage } from "@/site/pages/components/progress-page";
import { RadioButtonsPage } from "@/site/pages/components/radio-buttons-page";
import { RadioGroupsPage } from "@/site/pages/components/radio-groups-page";
import { SelectPage } from "@/site/pages/components/select-page";
import { MultiSelectPage } from "@/site/pages/components/multi-select-page";
import { SlidersPage } from "@/site/pages/components/sliders-page";
import { TagsPage } from "@/site/pages/components/tags-page";
import { TextAreaPage } from "@/site/pages/components/textarea-page";
import { TogglesPage } from "@/site/pages/components/toggles-page";
import { TooltipsPage } from "@/site/pages/components/tooltips-page";
import { AlertsPage } from "@/site/pages/components/alerts-page";
import { ModalsPage } from "@/site/pages/components/modals-page";
import { TablesPage } from "@/site/pages/components/tables-page";
import { TabsPage } from "@/site/pages/components/tabs-page";
import { SidebarNavPage } from "@/site/pages/components/sidebar-nav-page";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="light">
            <BrowserRouter>
                <RouteProvider>
                    <Routes>
                        <Route path="/" element={<SiteLayout />}>
                            <Route index element={<Navigate to="/introduction" replace />} />
                            <Route path="introduction" element={<IntroductionPage />} />
                            <Route path="brand" element={<BrandPage />} />
                            <Route path="components/avatars" element={<AvatarsPage />} />
                            <Route path="components/badge-groups" element={<BadgeGroupsPage />} />
                            <Route path="components/badges" element={<BadgesPage />} />
                            <Route path="components/button-groups" element={<ButtonGroupsPage />} />
                            <Route path="components/buttons" element={<ButtonsPage />} />
                            <Route path="components/checkboxes" element={<CheckboxesPage />} />
                            <Route path="components/dropdowns" element={<DropdownsPage />} />
                            <Route path="components/inputs" element={<InputsPage />} />
                            <Route path="components/progress-indicators" element={<ProgressPage />} />
                            <Route path="components/radio-buttons" element={<RadioButtonsPage />} />
                            <Route path="components/radio-groups" element={<RadioGroupsPage />} />
                            <Route path="components/select" element={<SelectPage />} />
                            <Route path="components/multi-select" element={<MultiSelectPage />} />
                            <Route path="components/sliders" element={<SlidersPage />} />
                            <Route path="components/tags" element={<TagsPage />} />
                            <Route path="components/textarea" element={<TextAreaPage />} />
                            <Route path="components/toggles" element={<TogglesPage />} />
                            <Route path="components/tooltips" element={<TooltipsPage />} />
                            <Route path="components/alerts" element={<AlertsPage />} />
                            <Route path="components/modals" element={<ModalsPage />} />
                            <Route path="components/tables" element={<TablesPage />} />
                            <Route path="components/tabs" element={<TabsPage />} />
                            <Route path="components/sidebar-nav" element={<SidebarNavPage />} />
                        </Route>
                    </Routes>
                </RouteProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
