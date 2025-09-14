import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  const mood = post.tags?.[0];
  return (
    <article className="card p-4 md:p-5">
      <div className="card-head px-4 py-3 md:px-5 md:py-4 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg md:text-xl font-semibold leading-tight">
            {post.title}
          </h3>
          <time className="text-xs md:text-sm opacity-90 whitespace-nowrap">
            {formatDate(post.date)}
          </time>
        </div>
      </div>

      <div className="mt-4 space-y-3 prose-base">
        <p className="text-[var(--color-ink)]/90">{post.excerpt}</p>

        {post.tags?.length ? (
          <div className="flex flex-wrap gap-2 text-sm">
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-full border border-[var(--color-ring)] text-muted"
              >
                #{t}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="chip">{mood ? "• " + mood : "• Diário"}</div>
        <Link
          href={`/posts/${post.slug}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-ring)] hover:border-[var(--color-mauve)] hover:text-[var(--color-mauve)] transition"
        >
          Ler post →
        </Link>
      </div>
    </article>
  );
}
