import { Snippet } from "@/types";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Trash2, User } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import StarButton from "@/components/StarButton";

function SnippetCard({ snippet }: { snippet: Snippet }) {
  const { user } = useUser();
  const deleteSnippet = useMutation(api.snippets.deleteSnippet);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteSnippet({ snippetId: snippet._id });
    } catch (error) {
      console.log("Error deleting snippet:", error);
      toast.error("Error deleting snippet");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <motion.div
      layout
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <Link href={`/snippets/${snippet._id}`} className="block h-full">
        <div className="relative h-full bg-gradient-to-b from-[#1e1e2e]/95 to-[#1e1e2e]/90 backdrop-blur-xl rounded-xl 
          border border-[#313244]/30 hover:border-[#313244]/60 shadow-lg hover:shadow-xl
          transition-all duration-500 overflow-hidden">
          
          <div className="p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl blur opacity-25 
                    group-hover:opacity-40 transition-all duration-500" />
                  <div className="relative p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                    group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500
                    border border-white/5">
                    <Image
                      src={`/${snippet.language}.png`}
                      alt={`${snippet.language} logo`}
                      className="w-7 h-7 object-contain relative z-10"
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-xl text-sm font-medium
                    border border-blue-500/10 group-hover:border-blue-500/20 transition-colors">
                    {snippet.language}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="size-4" />
                    {new Date(snippet._creationTime).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-6 z-10 flex gap-4 items-center"
                onClick={(e) => e.preventDefault()}>
                <StarButton snippetId={snippet._id} />

                {user?.id === snippet.userId && (
                  <div className="z-10" onClick={(e) => e.preventDefault()}>
                    <button
                      onClick={handleDelete}
                      disabled={isDeleting}
                      className={`group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300
                        ${isDeleting
                          ? "bg-red-500/20 text-red-400 cursor-not-allowed border border-red-500/20"
                          : "bg-gray-500/10 text-gray-400 hover:bg-red-500/10 hover:text-red-400 border border-gray-500/10 hover:border-red-500/20"
                        }`}
                    >
                      {isDeleting ? (
                        <div className="size-4 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin" />
                      ) : (
                        <Trash2 className="size-4" />
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-3 line-clamp-1 
                  group-hover:text-blue-400 transition-colors">
                  {snippet.title}
                </h2>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-gray-800/50 border border-gray-700/30">
                      <User className="size-4" />
                    </div>
                    <span className="truncate max-w-[180px] font-medium">{snippet.userName}</span>
                  </div>
                </div>
              </div>

              <div className="relative group/code">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-xl 
                  opacity-0 group-hover/code:opacity-100 transition-all duration-500" />
                <pre className="relative bg-black/40 rounded-xl p-6 overflow-hidden text-sm text-gray-300 
                  font-mono line-clamp-3 border border-gray-800/30">
                  {snippet.code}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default SnippetCard;