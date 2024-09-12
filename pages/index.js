import { useContext } from "react";
import { UserContext } from "../context";
import ParallaxBG from "../components/cards/ParallaxBG";
import axios from "axios";
import PostPublic from "../components/cards/PostPublic";
import Head from "next/head";
import Link from "next/link";

const Home = ({ posts }) => {
  const [state, setState] = useContext(UserContext);

  const head = () => (
    <Head>
      <title>FARMING SPIRIT</title>
      <meta
        name="description"
        content="Together we can make farming practices easy"
      />
      <meta
        property="og:description"
        content="Together we can make farming practices easy"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="FARMING SPIRIT" />
      <meta property="og:url" content="https://farmingspirit.com.ng" />
      <meta
        property="og:image:secure_url"
        content="http://merncamp.com/images/default.jpg"
      />
    </Head>
  );

  return (
    <>
      {head()}
      <ParallaxBG url="/images/everything.png" />

      <div className="container">
        <div className="row pt-5">
          {posts.map((post) => (
            <div className="col-md-4">
              <Link href={`/post/view/${post._id}`}>
                <a>
                  <PostPublic key={post._id} post={post} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get("/posts");
  // console.log(data);
  return {
    props: {
      posts: data,
    },
  };
}

export default Home;