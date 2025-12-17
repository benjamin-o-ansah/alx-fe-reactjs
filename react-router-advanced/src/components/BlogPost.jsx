import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();
  return (
    <div>
      <h2>Viewing Post ID: {postId}</h2>
      <p>This content is fetched dynamically based on the URL parameter.</p>
    </div>
  );
};

export default BlogPost;