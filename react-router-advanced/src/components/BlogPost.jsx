import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Viewing Post ID: {id}</h2>
      <p>This content is fetched dynamically based on the URL parameter.</p>
    </div>
  );
};

export default BlogPost;