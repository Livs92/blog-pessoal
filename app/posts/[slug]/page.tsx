import Link from "next/link";
import { getPostBySlug, getPosts, formatDate } from "@/lib/posts";
import LikeButton from "@/components/LikeButton";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="space-y-4">
      <Link href="/" className="nav-link inline-flex items-center gap-2">
        <span aria-hidden>←</span> Voltar
      </Link>

      <article className="prose prose-invert max-w-none">
        <header className="mb-4">
          <h1 className="text-2xl font-semibold leading-tight">{post.title}</h1>
          <p className="text-textc-muted text-sm">
            Publicado em {formatDate(post.date)} • por Lívia
          </p>
        </header>

        <div className="card p-6">
          <p className="text-textc/90 leading-relaxed">{post.content}</p>
        </div>

        <div className="mt-6">
          <LikeButton initial={0} />
        </div>
      </article>
    </div>
  );
}
