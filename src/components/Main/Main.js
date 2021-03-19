import './Main.css';
import './Post.css';
import './Posts.css';

const Main = ({
    posts
}) => {
  return (
    <main className="Main">
        <h1>Sooooooooome Heading</h1>
        <div className="Posts">
            {posts.map(x =>
                <div key={x.id + 1} className="Post">
                <img key={x.id + 2} src="blue-origami-bird.png" alt=""/>
                <p key={x.id + 3} className="description">{x.content}</p>
                <div key={x.id + 4}>
                    <span key={x.id + 5}>
                        <small key={x.id+6}>Author:</small>
                        {x.author}
                    </span>
                </div>
            </div>
            )}
        </div>
    </main>
  );
}

export default Main;
