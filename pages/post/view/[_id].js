import ParallaxBG from "../../../components/cards/ParallaxBG";
import axios from "axios";
import PostPublic from "../../../components/cards/PostPublic";
import ReadPublicPost from "../../../components/cards/ReadPublicPost";

import Head from "next/head";

const SinglePost = ({ post }) => {
  const head = () => (
    <Head>
      <title>FARMING SPIRIT</title>
      <meta name="description" content={post.content} />
      <meta
        property="og:description"
        content="Together we can make farming practices easy"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="FARMING SPIRIT" />
      <meta
        property="og:url"
        content={`https://farmingspirit.com.ng/post/view/${post._id}`}
      />
      <meta property="og:image:secure_url" content={imageSource(post)} />
    </Head>
  );

  const imageSource = (post) => {
    if (post.image) {
      return post.image.url;
    } else {
      return "/images/everything.png";
    }
  };

  return (
    <>
      {head()}
      <ParallaxBG url="/images/everything.png" />

      <div className="container">
        <div className="row pt-5">
          <div className="col-md-8 offset-md-2">
            <ReadPublicPost key={post._id} post={post} />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { data } = await axios.get(`/post/${ctx.params._id}`);
  // console.log(data);
  return {
    props: {
      post: data,
    },
  };
}

export default SinglePost;