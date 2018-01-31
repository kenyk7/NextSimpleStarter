
const PostList = ({ posts }) => (
  <div className="card-columns">
    {posts.map((post, i) => (
      <div key={i} className="card text-right p-3 mb-4">
        <blockquote className="blockquote mb-0">
          <p>{post.title}</p>
          <footer className="blockquote-footer">
            <small>
              Title posts of <cite title="typicode">Typicode</cite>
            </small>
          </footer>
        </blockquote>
      </div>
    ))}
  </div>
);

export default PostList;
