import { useRouter } from "next/router";
const Post = ({ id, title, text, image, tags }: any) => {
  const router = useRouter();
  return (
    <div className="post">
      <img src={image} alt="post-image" />
      <div className="post-description">
        <h2>{title}</h2>
        <p>{text}</p>
        <p className="article-link" onClick={() => router.push(`/blog/${id}`)}>
          Read more...
        </p>
        <p className="tags">{tags.map((tag: any) => tag.tag)}</p>
      </div>
    </div>
  );
};

export default Post;
