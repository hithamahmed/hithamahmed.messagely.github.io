const INSTAGRAM_ACCESS_TOKEN = 'your_access_token_here';

export async function getRecentMedia() {
  const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${INSTAGRAM_ACCESS_TOKEN}`);
  const json = await response.json();

  return json.data;
}
