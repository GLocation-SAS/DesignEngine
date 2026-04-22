import UIKitPage from "@/modules/uikit/pages/UIKitPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI Kit | DesignEngine",
  description: "Reference guide for the DesignEngine design system.",
};

export default function Page() {
  return <UIKitPage />;
}
