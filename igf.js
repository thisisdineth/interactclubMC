const accessToken = 'IGQWROTmhzYVAxTU5nd1lidEdNczNEcWRGU3ZAMOWlDNmJVOU1KdjV2VzZAWZAnZA0R0hobXUzbWwzVU9uN3BwUlhrbDBDTDExT2tBc0tRWkswNmluTUFSbGlaQWpLY0ViMGZADSWtjaktoVnM2LVc4VTFyZAXktaDl4aVkZD';
const userId = '5530711572';
const limit = 10; // Number of posts to display

async function fetchInstagramPosts() {
    const url = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink&access_token=${accessToken}&limit=${limit}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('API Response:', data);
        if (data.error) {
            console.error('API Error:', data.error.message);
            return;
        }
        displayPosts(data.data);
    } catch (error) {
        console.error('Error fetching Instagram posts:', error);
    }
}


function displayPosts(posts) {
    const feedContainer = document.getElementById('feed-container');
    if (!Array.isArray(posts)) {
        console.error('Invalid posts data:', posts);
        return;
    }
    posts.forEach(post => {
        const img = document.createElement('img');
        img.src = post.media_url;
        img.alt = post.caption || 'Instagram Post';
        img.onclick = () => window.open(post.permalink, '_blank');
        feedContainer.appendChild(img);
    });
}


document.addEventListener('DOMContentLoaded', fetchInstagramPosts);
