import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-shimmer bg-gradient-to-r from-muted via-muted-foreground/10 to-muted bg-[length:200%_100%] rounded-md", className)}
      role="status"
      aria-label="Loading"
      {...props}
    />
  );
}

/**
 * Skeleton Card
 * Standard skeleton for card layouts
 */
const SkeletonCard = ({ count = 1 }: { count?: number }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card-premium p-6 space-y-4">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
          <Skeleton className="h-10 w-32 mt-6" />
        </div>
      ))}
    </>
  );
};

/**
 * Skeleton Text
 * Quick skeleton for text content
 */
const SkeletonText = ({ lines = 3 }: { lines?: number }) => {
  return (
    <div className="space-y-3">
      <Skeleton className="h-4 w-full" />
      {lines > 1 && <Skeleton className="h-4 w-5/6" />}
      {lines > 2 && <Skeleton className="h-4 w-4/6" />}
    </div>
  );
};

export { Skeleton, SkeletonCard, SkeletonText };
