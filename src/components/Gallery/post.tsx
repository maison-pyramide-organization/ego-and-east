import { post } from "../../types/post";
import styles from "./styles.module.scss";
import { ReactComponent as IgIcon } from "../../assets/Icons/instagram.svg";

interface Iprops {
  post: post;
}
const Post = (props: Iprops) => {
  const { post } = props;

  if (post.type == "VIDEO") return null;
  return (
    <div>
      <a
        target="_blank"
        href={post.url}
        className={styles.imageWraper}
        key={post.url}
        style={{ backgroundImage: `url(${post.thumbnailUrl})` }}
      >
        <IgIcon className={styles.igIcon} />
      </a>
    </div>
  );
};
export default Post;
