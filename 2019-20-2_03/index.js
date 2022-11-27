
const albumok = {
    sbm: [
        { id: 1, title: 'A mindent vívő sláger', artist: 'Sub Bass Monster', duration: '3:30' },
        { id: 2, title: 'Ne sírj anyám', artist: 'Sub Bass Monster', duration: '2:12' },
        { id: 3, title: 'Sebesség mámor', artist: 'Sub Bass Monster', duration: '4:51' },
        { id: 4, title: 'Négy ütem', artist: 'Sub Bass Monster', duration: '5:41' },
    ],
    dyna: [
        { id: 1, title: 'The Tristar', artist: 'Dynatron', duration: '3:30' },
        { id: 2, title: 'Contact', artist: 'Dynatron', duration: '4:18' },
        { id: 3, title: 'Stones', artist: 'Dynatron', duration: '2:20' },
        { id: 4, title: 'Storms', artist: 'Dynatron', duration: '1:33' },
        { id: 5, title: 'The Unknown', artist: 'Dynatron', duration: '5:41' },
    ],
};

function toTableRow(tableRow) {
    const row = document.createElement('tr');
    Object.keys(tableRow).forEach(key => {
        const cell = document.createElement('td');
        cell.innerText = tableRow[key];
        row.appendChild(cell);
    });
    return row;
}

function updateTable(album, table) {
    table.innerHTML = '';
    album.forEach(track => {
        table.appendChild(toTableRow(track));
    });
}

function orderAlbumById(album) {
    return album.sort((a, b) => a.id - b.id);
}

function orderAlbumByTitle(album) {
    return album.sort((a, b) => a.title.localeCompare(b.title));
}

function getSelectedAlbum() {
    const album = document.querySelector('input[name="album"]:checked');
    return albumok[album.value];
}

window.addEventListener('load', () => {
    const table = document.getElementById('tbody');
    const radios = document.querySelectorAll('input[type="radio"]');
    const id = document.getElementById('id');
    const title = document.getElementById('title');

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            updateTable(albumok[radio.value], table);
        });
    });

    id.addEventListener('click', () => {
        const album = orderAlbumById(getSelectedAlbum());
        updateTable(album, table);
    });

    title.addEventListener('click', () => {
        const album = orderAlbumByTitle(getSelectedAlbum());
        updateTable(album, table);
    });
});