import { useQuery } from '@tanstack/react-query'; // Ensure the import matches your installed package

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // v5 Syntax: Pass everything inside a single object
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ['posts'], // Key must be an array
    queryFn: fetchPosts,
    staleTime: 10000,
    cacheTike: 300000,            // (formerly cacheTime) Cache persists for 5 mins
    refetchOnWindowFocus: true, // Auto-refetch when user switches back to browser tab
    placeholderData: keepPreviousData,
  });

  if (isLoading) return <div>Loading initial data...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching} style={{ marginBottom: '10px' }}>
        {isFetching ? 'Refreshing...' : 'Refetch Data'}
      </button>

      <ul style={{ textAlign: 'left' }}>
        {data.slice(0, 5).map((post) => (
          <li key={post.id} style={{ marginBottom: '15px' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;