 // List of additional artworks to add dynamically
 const newArtworks = [
    { title: 'The Artists Garden at Giverny', artist: 'Claude Monet', img: 'https://storage.googleapis.com/pod_public/1300/235463.jpg' },
    { title: 'Café Terrace at Night', artist: 'Vincent van Gogh', img: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/03/05/11/sei54258302-0.jpg?quality=75&auto=webp&width=960' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://media.timeout.com/images/105795964/750/562/image.jpg' },
    { title: 'Mountain Lake', artist: 'Bob Ross', img: 'https://i.cbc.ca/1.5659999.1595507752!/fileImage/httpImage/image.jpg_gen/derivatives/original_780/bob-ross-mountain-summit-1987.jpg' },
    { title: 'Church at Varengeville Normandy', artist: 'Claude Monet', img: 'https://www.tallengestore.com/cdn/shop/products/ChurchatVarengevilleNormandy_LeglisedeVarengevilleSoleilCouchant_-ClaudeMonet_bcb9c21b-ba62-4600-8bf8-ad3984b2fc0b.jpg?v=1620135327' },
    { title: 'Seascape', artist: 'Bob Ross', img: 'https://www.twoinchbrush.com/images/fanpaintings/fanpainting1856.jpg' },
    { title: 'Wheat Field with Cypresses', artist: 'Vincent van Gogh', img: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/03/05/12/sei55389926.jpg?quality=75&auto=webp&width=960' },
    { title: 'Mona Lisa', artist: 'Leonardo da Vinci', img: 'https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg' },
    { title: 'Impression, Sunrise', artist: 'Claude Monet', img: 'https://img.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/K6H3LY574RH2VN7HN3N4BTERPI.jpg&high_res=true&w=2048' },
    { title: 'Starry Night', artist: 'Vincent van Gogh', img: 'https://m.media-amazon.com/images/I/81hjf27YFHL._AC_UF894,1000_QL80_.jpg' }
];

let viewCount = 0; 

function updateCounter() {
document.getElementById('counter').innerText = `Artworks Viewed: ${viewedCount}`;
}

function onArtPanelClick(event) {
    const panel = event.currentTarget;
    if (!panel.classList.contains('viewed')) {
        panel.classList.add('viewed');
        panel.style.backgroundColor = '#EFD99E'; 
        viewedCount++;
        updateCounter();
    }
}

document.querySelectorAll('.art-panel').forEach(panel => {
    panel.addEventListener('click', onArtPanelClick);
});

function addNewArtwork() {
    const randArtwork = newArtworks[Math.floor(Math.random() * newArtworks.length)];
    const newPanel = document.createElement('div');
    newPanel.classList.add('art-panel');
    const imgElement = document.createElement('img');
    imgElement.src = randArtwork.img;
    imgElement.alt = `${randArtwork.title} by ${randArtwork.artist}`;
    const titleElement = document.createElement('p');
    titleElement.innerText = `${randArtwork.title} by ${randArtwork.artist}`;
    newPanel.appendChild(imgElement);
    newPanel.appendChild(titleElement);
    newPanel.addEventListener('click', onArtPanelClick);
    document.querySelector('.art-grid').appendChild(newPanel);
}

document.getElementById('add-art-button').addEventListener('click', addNewArtwork);

function resetGallery() {
    document.querySelectorAll('.art-panel').forEach(panel => {
        panel.classList.remove('viewed');
        panel.style.backgroundColor = '#F7CBC9'; 
});

    viewedCount = 0;
    updateCounter();
}

document.getElementById('reset-button').addEventListener('click', resetGallery);
updateCounter(); 