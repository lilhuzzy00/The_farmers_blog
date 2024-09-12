import { useContext } from "react";
import PostImage from "../images/PostImage";
import {
  
} from "@ant-design/icons";
import { UserContext } from "../../context";
import { useRouter } from "next/router";
import Link from "next/link";

const PostPublic = ({
  post,
  
}) => {
  const [state] = useContext(UserContext);
  const router = useRouter();

  return (
    <>
      {post && post.postedBy && (
        <div key={post._id} className="card mb-5">
          <div className="card-footer">
            {post.image && <PostImage url={post.image.url} />}
              <div className="card-body truncate" dangerouslySetInnerHTML={{__html: post.content}}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostPublic;