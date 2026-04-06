import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { ComponentPageLayout } from "@/site/shared/component-page-layout";
import { PreviewBlock } from "@/site/shared/preview-block";

const SECTIONS = [
    { id: "example", label: "Example" },
    { id: "with-checkboxes", label: "With checkboxes" },
    { id: "with-avatars", label: "With avatars" },
];

const USERS = [
    { id: "1", name: "Olivia Rhye", email: "olivia@untitledui.com", role: "Designer", status: "Active" as const },
    { id: "2", name: "Phoenix Baker", email: "phoenix@untitledui.com", role: "Engineering", status: "Active" as const },
    { id: "3", name: "Lana Steiner", email: "lana@untitledui.com", role: "Product", status: "Pending" as const },
    { id: "4", name: "Demi Wilkinson", email: "demi@untitledui.com", role: "Marketing", status: "Inactive" as const },
];

const STATUS_COLORS = {
    Active: "success",
    Pending: "warning",
    Inactive: "gray",
} as const;

const AVATAR_URL = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face";

export const TablesPage = () => {
    return (
        <ComponentPageLayout
            group="Application UI"
            name="Tables"
            title="Table components"
            description="Data table components for displaying structured information with sorting, filtering, and selection."
            componentName="tables"
            filePath="src/components/application/table/"
            sections={SECTIONS}
        >
            <PreviewBlock
                id="example"
                title="Basic table"
                preview={
                    <div className="w-full overflow-hidden rounded-xl border border-secondary">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-secondary_alt border-b border-secondary">
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-secondary">Name</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-secondary">Role</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-secondary">Status</th>
                                    <th className="px-4 py-3" />
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary">
                                {USERS.map((user) => (
                                    <tr key={user.id} className="bg-primary hover:bg-primary_hover transition duration-100">
                                        <td className="px-4 py-3">
                                            <div>
                                                <p className="font-medium text-primary">{user.name}</p>
                                                <p className="text-xs text-tertiary">{user.email}</p>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-secondary">{user.role}</td>
                                        <td className="px-4 py-3">
                                            <Badge color={STATUS_COLORS[user.status]} size="sm">
                                                {user.status}
                                            </Badge>
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <Button color="link-color" size="sm">Edit</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
                code={`<table className="w-full text-sm">
  <thead>
    <tr className="bg-secondary_alt border-b border-secondary">
      <th className="px-4 py-3 text-left text-xs font-semibold text-secondary">Name</th>
      <th className="px-4 py-3 text-left text-xs font-semibold text-secondary">Role</th>
      <th className="px-4 py-3 text-left text-xs font-semibold text-secondary">Status</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => (
      <tr key={user.id} className="hover:bg-primary_hover transition duration-100">
        <td className="px-4 py-3">{user.name}</td>
        <td className="px-4 py-3">{user.role}</td>
        <td className="px-4 py-3"><Badge color="success">{user.status}</Badge></td>
      </tr>
    ))}
  </tbody>
</table>`}
            />

            <PreviewBlock
                id="with-checkboxes"
                title="With row checkboxes"
                preview={
                    <div className="w-full overflow-hidden rounded-xl border border-secondary">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-secondary_alt border-b border-secondary">
                                    <th className="px-4 py-3 w-10">
                                        <Checkbox size="sm" />
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-secondary">Name</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-secondary">Role</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-secondary">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary">
                                {USERS.map((user) => (
                                    <tr key={user.id} className="bg-primary hover:bg-primary_hover transition duration-100">
                                        <td className="px-4 py-3">
                                            <Checkbox size="sm" />
                                        </td>
                                        <td className="px-4 py-3 font-medium text-primary">{user.name}</td>
                                        <td className="px-4 py-3 text-secondary">{user.role}</td>
                                        <td className="px-4 py-3">
                                            <Badge color={STATUS_COLORS[user.status]} size="sm">
                                                {user.status}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
                code={`<table>
  <thead>
    <tr>
      <th><Checkbox size="sm" /></th>
      <th>Name</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    {rows.map(row => (
      <tr key={row.id}>
        <td><Checkbox size="sm" /></td>
        <td>{row.name}</td>
        <td>{row.role}</td>
      </tr>
    ))}
  </tbody>
</table>`}
            />

            <PreviewBlock
                id="with-avatars"
                title="With user avatars"
                preview={
                    <div className="w-full overflow-hidden rounded-xl border border-secondary">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-secondary_alt border-b border-secondary">
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-secondary">User</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-secondary">Role</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-secondary">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary">
                                {USERS.map((user) => (
                                    <tr key={user.id} className="bg-primary hover:bg-primary_hover transition duration-100">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <Avatar src={AVATAR_URL} alt={user.name} size="sm" />
                                                <div>
                                                    <p className="font-medium text-primary">{user.name}</p>
                                                    <p className="text-xs text-tertiary">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-secondary">{user.role}</td>
                                        <td className="px-4 py-3">
                                            <Badge color={STATUS_COLORS[user.status]} size="sm">
                                                {user.status}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
                code={`<tr>
  <td>
    <div className="flex items-center gap-3">
      <Avatar src={user.avatar} size="sm" />
      <div>
        <p className="font-medium text-primary">{user.name}</p>
        <p className="text-xs text-tertiary">{user.email}</p>
      </div>
    </div>
  </td>
</tr>`}
            />
        </ComponentPageLayout>
    );
};
