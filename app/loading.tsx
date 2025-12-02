import LoaderAnimation from "@/components/ui/LoaderAnimation";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-black gap-14">
      <LoaderAnimation />
    </div>
  );
}
