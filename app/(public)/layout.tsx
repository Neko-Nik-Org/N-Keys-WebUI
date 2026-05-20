import SiteNav from "@/components/navbar/public";
import SiteFooter from "@/components/common/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="site-shell">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
