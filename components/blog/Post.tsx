import { useRouter } from "next/router";
const Post = ({ id, title, text, image, tags, published_at }: any) => {
  const router = useRouter();

  const limit = 450;
  // const cutText = text.substring(0, limit);
  let cutText =
    text.length > limit
      ? text.substring(0, limit - 3) + "..."
      : text.substring(0, limit);

  return (
    <div className="post">
      <div className="post-description">
        <h2>{title}</h2>
        <p className="post-text">{cutText}</p>
        <p>{new Date(published_at).toDateString()}</p>
        <p className="article-link" onClick={() => router.push(`/blog/${id}`)}>
          Read more...
        </p>
        <p className="tags">{tags.map((tag: any) => tag.tag)}</p>
      </div>
      <img src={image} alt="post-image" />
    </div>
  );
};

export default Post;
