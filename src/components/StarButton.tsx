import { useAuth } from "@clerk/nextjs";
import { Id } from "../../convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Star } from "lucide-react";

function StarButton({ snippetId }: { snippetId: Id<"snippets"> }) {
  const { isSignedIn } = useAuth();

  // Fetch the initial starred state and star count
  const isStarredQuery = useQuery(api.snippets.isSnippetStarred, { snippetId });
  const starCountQuery = useQuery(api.snippets.getSnippetStarCount, { snippetId });
  
  // Mutation to toggle the star state
  const star = useMutation(api.snippets.starSnippet);

  // Handle the star/unstar action
  const handleStar = async () => {
    if (!isSignedIn) return;
    await star({ snippetId });
  };

  // If the queries are still loading, return placeholders or loading state
  if (isStarredQuery === undefined || starCountQuery === undefined) {
    return (
      <button className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-500/10 text-gray-400">
        <Star className="w-4 h-4 fill-none group-hover:fill-gray-400" />
        <span className="text-xs font-medium text-gray-400">Loading...</span>
      </button>
    );
  }

  return (
    <button
      className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-lg 
      transition-all duration-200 ${
        isStarredQuery ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20" : "bg-gray-500/10 text-gray-400 hover:bg-gray-500/20"
      }`}
      onClick={handleStar}
    >
      <Star
        className={`w-4 h-4 ${isStarredQuery ? "fill-yellow-500" : "fill-none group-hover:fill-gray-400"}`}
      />
      <span className={`text-xs font-medium ${isStarredQuery ? "text-yellow-500" : "text-gray-400"}`}>
        {starCountQuery}
      </span>
    </button>
  );
}

export default StarButton;
