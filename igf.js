const accessToken = 'IGQWRNMGM3dWJNX3BpQnkzVkRNdWMwWDNZAenpzT0haZAktfRk9qZAHhFelFIekJlWGpRc0dCTVQ0UmZA3RndlTEJWdE84eTNGVk5La3JfTVJTNzlQb0RQZA0JONTNJSVhIbThXN3RYZAk9QZAWJUM016aUF0WXNBS0R6NncZD';
const userId = '5530711572';
const limit = 10; // Number of posts to display

async function fetchInstagramPosts() {
    const url = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink&access_token=${accessToken}&limit=${limit}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.error) {
            console.error('API Error:', data.error.message);
            if (data.error.message.includes('access token')) {
                alert('The access token has expired. Please regenerate it.');
            }
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
