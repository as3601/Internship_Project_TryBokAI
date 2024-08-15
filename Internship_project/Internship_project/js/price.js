function generateApiKey() {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    let apiKey = '';
    const keyLength = 32; // length of the API key

    // Generate a random key
    for (let i = 0; i < keyLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        apiKey += charset[randomIndex];
    }

    // Format the key (assuming fixed formatting with underscores every 6 characters)
    const formattedKey = apiKey.match(/.{1,6}/g).join('_');
    return formattedKey;
}

document.getElementById('generate-key-button').addEventListener('click', function() {
    const apiKey = generateApiKey();
    document.getElementById('apikey').textContent = 'Your API Key: ' + apiKey;
});