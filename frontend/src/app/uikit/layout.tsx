import { Navbar } from "@/components/layout";

export default function UIKitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex flex-1 flex-col">{children}</div>
    </>
  );
}
