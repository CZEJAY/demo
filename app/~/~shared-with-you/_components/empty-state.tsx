export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <img
        src="/assets/astronaut-fishing.webp"
        alt="No items found"
        className="mb-6 h-48 w-48 object-contain"
      />
      <h3 className="text-lg font-medium">No patexas found.</h3>
      <p className="text-sm text-muted-foreground">
        Patexas shared with you from other workspaces will appear here.
      </p>
    </div>
  );
}
