const getPost = async (postId: string, accessToken: string) => {
    try {
        const postUrl = `https://graph.instagram.com/${postId}?access_token=${accessToken}&fields=media_url,media_type,permalink`;
        const res = await fetch(postUrl);
        const data = await res.json();

        const post = {
            url: data.permalink,
            thumbnailUrl: data.media_url,
            type: data.media_type,
        };
        return post;
    } catch (err: any) {
        throw new Error(err.message);
    }
};
export default getPost;
