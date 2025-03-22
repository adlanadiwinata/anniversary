const spotifyApi = {
    clientId: 'YOUR_SPOTIFY_CLIENT_ID',
    redirectUri: 'YOUR_REDIRECT_URI',
    scopes: ['user-read-private', 'user-read-email'],
    accessToken: null,

    authenticate: function() {
        const authUrl = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=${this.scopes.join('%20')}&response_type=token`;
        window.location.href = authUrl;
    },

    setAccessToken: function(token) {
        this.accessToken = token;
    },

    fetchPlaylist: function(playlistId) {
        return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        })
        .then(response => response.json())
        .then(data => this.displaySongs(data.items))
        .catch(error => console.error('Error fetching playlist:', error));
    },

    displaySongs: function(songs) {
        const songList = document.getElementById('song-list');
        songList.innerHTML = '';

        songs.forEach(item => {
            const song = item.track;
            const listItem = document.createElement('li');
            listItem.textContent = `${song.name} by ${song.artists.map(artist => artist.name).join(', ')}`;
            songList.appendChild(listItem);
        });
    }
};

// Example usage
// spotifyApi.authenticate();
// spotifyApi.setAccessToken('YOUR_ACCESS_TOKEN');
// spotifyApi.fetchPlaylist('YOUR_PLAYLIST_ID');