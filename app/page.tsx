import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/posts";

export default async function HomePage() {
  const posts = await getPosts();

  if (!posts?.length) {
    return (
      <div className="text-center text-muted py-12">
        Sem posts por enquanto — em breve novidades ✨
      </div>
    );
  }

  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <PostCard key={p.slug} post={p} />
      ))}
    </section>
  );
}
