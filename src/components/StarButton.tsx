import { useAuth } from "@clerk/nextjs";
import { Id } from "../../convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Star } from "lucide-react";

function StarButton({ snippetId }: { snippetId: Id<"snippets"> }) {
  const { isSignedIn } = useAuth();

  // Fetch if the snippet is starred by the current user
  const isStarred = useQuery(api.snippets.isSnippetStarred, { snippetId }) ?? false; // Default to false if undefined

  // Fetch the star count for the snippet
  const starCount = useQuery(api.snippets.getSnippetStarCount, { snippetId }) ?? 0; // Default to 0 if undefined

  // Mutation to toggle the star state for the snippet
  const star = useMutation(api.snippets.starSnippet);

  const handleStar = async () => {
    if (!isSignedIn) return;

    // Perform the mutation to toggle the star state
    await star({ snippetId });

    // Manually trigger a re-fetch by using the query again after mutation
  };

  return (
    <button
      className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 ${
        isStarred ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20" : "bg-gray-500/10 text-gray-400 hover:bg-gray-500/20"
      }`}
      onClick={handleStar}
    >
      <Star
        className={`w-4 h-4 ${isStarred ? "fill-yellow-500" : "fill-none group-hover:fill-gray-400"}`}
      />
      <span className={`text-xs font-medium ${isStarred ? "text-yellow-500" : "text-gray-400"}`}>
        {starCount}
      </span>
    </button>
  );
}

export default StarButton;
