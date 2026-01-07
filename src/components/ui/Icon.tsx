import { LayoutGrid, Sparkles, ShoppingCart, ShieldCheck } from "lucide-react";

export function Icon({ name }: { name: string }) {
  const props = { className: "size-5 text-white/90" };
  switch (name) {
    case "sparkle":
      return <Sparkles {...props} />;
    case "grid":
      return <LayoutGrid {...props} />;
    case "cart":
      return <ShoppingCart {...props} />;
    case "shield":
      return <ShieldCheck {...props} />;
    default:
      return <Sparkles {...props} />;
  }
}
