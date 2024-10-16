const accessToken = 'YOUR_INSTAGRAM_ACCESS_TOKEN';
const userId = 'YOUR_INSTAGRAM_USER_ID';
const limit = 10; // Number of posts to display

async function fetchInstagramPosts() {
    const url = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink&access_token=${accessToken}&limit=${limit}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayPosts(data.data);
    } catch (error) {
        console.error('Error fetching Instagram posts:', error);
    }
}

function displayPosts(posts) {
    const feedContainer = document.getElementById('feed-container');
    posts.forEach(post => {
        const img = document.createElement('img');
        img.src = post.media_url;
        img.alt = post.caption || 'Instagram Post';
        img.onclick = () => window.open(post.permalink, '_blank');
        feedContainer.appendChild(img);
    });
}

document.addEventListener('DOMContentLoaded', fetchInstagramPosts);
