import { post } from "../../../types/post";
import getPost from "./getPost";

const fetchPosts = async (userId: string, accessToken: string): Promise<post[] | null> => {
    const posts: post[] = [];
    const igUrl = `https://graph.instagram.com/${userId}/media?access_token=${accessToken}`;
    try {
        if (!userId || !accessToken) throw new Error("userId or accessToken is undefined");

        const res = await fetch(igUrl);
        const data = await res.json();
        const postsData = data.data?.slice(0, 20);
        const postsIds = postsData?.map((post: any) => post.id);

        for (const postId of postsIds) {
            const post = await getPost(postId, accessToken);
            posts.push(post);
        }
        return posts;
    } catch (err: any) {
        throw new Error(err.message);
    }
};

export default fetchPosts;
