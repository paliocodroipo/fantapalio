import { players, pdkWeights } from '../data.js';

document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("playerDetails");
    const playerStatsContainer = document.getElementById("playerStatsContainer");

    // Sorta in ordine alfabetico
    players.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    // Rimuovi eventuali opzioni esistenti
    select.innerHTML = '';

    // Aggiungi nuove opzioni
    players.forEach((player, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.textContent = player.name;
        select.appendChild(opt);
    });

    // Aggiungi un event listener per l'evento change sulla tendina
    select.addEventListener("change", function() {
        // Ottieni l'indice del giocatore selezionato
        const playerIndex = parseInt(this.value);

        // Trova il giocatore corrispondente nell'array players
        const selectedPlayer = players[playerIndex];

        // Pulisci il contenitore delle schede
        playerStatsContainer.innerHTML = '';

        // Funzione per creare una scheda partita
        const createGameCard = (game, score, stats) => {
            const card = document.createElement('div');
            card.classList.add('game-card',`cardclass${selectedPlayer.team}`);
            let statsHtml = `
                <h3>${game}</h3>
                <p>Punteggio: <span class="totalpointsindex">${score}</span></p>
            `;
//mette dentro solo stats non nulle
            if (stats[0] !== 0) statsHtml += `<p>Punti: ${stats[0] * pdkWeights[0]} (${stats[0]} PTS)</p>`;
            if (stats[7] !== 0) statsHtml += `<p>Rimbalzi difensivi: ${stats[7] * pdkWeights[7]} (${stats[7]} DR)</p>`;
            if (stats[8] !== 0) statsHtml += `<p>Rimbalzi offensivi: ${stats[8] * pdkWeights[8]} (${stats[8]} OR)</p>`;
            if (stats[10] !== 0) statsHtml += `<p>Assist: ${stats[10] * pdkWeights[10]} (${stats[10]} AST)</p>`;
            if (stats[12] !== 0) statsHtml += `<p>Palle recuperate: ${stats[12] * pdkWeights[12]} (${stats[12]} STL)</p>`;
            if (stats[11] !== 0) statsHtml += `<p>Palle perse: ${stats[11] * pdkWeights[11]} (${stats[11]} TO)</p>`;
            if (stats[3] !== 0) statsHtml += `<p>Triple segnate: ${stats[3] * pdkWeights[3]} (${stats[3]} 3PM)</p>`;
            if (stats[2] !== 0 || stats[4] !== 0) statsHtml += `<p>Tiri sbagliati: ${(stats[2] * pdkWeights[2]) + (stats[4] * pdkWeights[4])} (${stats[2] + stats[4]} tiri)</p>`;
            if (stats[6] !== 0) statsHtml += `<p>Tiri liberi sbagliati: ${stats[6] * pdkWeights[6]} (${stats[6]} liberi)</p>`;
            if (stats[15] !== 0) statsHtml += `<p>Doppia doppia: ${stats[15] * pdkWeights[15]}</p>`;
            if (stats[16] !== 0) statsHtml += `<p>Tripla doppia: ${stats[16] * pdkWeights[16]}</p>`;
            if (stats[14] !== 0) statsHtml += `<p>Espulsione: ${stats[14] * pdkWeights[14]}</p>`;
            if (stats[17] !== 0) statsHtml += `<p>Vittoria: ${stats[17] * pdkWeights[17]}</p>`;
            if (stats[18] !== 0) statsHtml += `<p>Punti meme: ${stats[18] * pdkWeights[18]}</p>`;

            card.innerHTML = statsHtml;
            return card;
        };

        // Aggiungi schede per ogni partita
        playerStatsContainer.appendChild(createGameCard('G1', selectedPlayer.g1, selectedPlayer.stats_g1));
        playerStatsContainer.appendChild(createGameCard('G2', selectedPlayer.g2, selectedPlayer.stats_g2));
        playerStatsContainer.appendChild(createGameCard('G3', selectedPlayer.g3, selectedPlayer.stats_g3));
        playerStatsContainer.appendChild(createGameCard('Semifinale', selectedPlayer.semi, selectedPlayer.stats_semi));
        playerStatsContainer.appendChild(createGameCard('Tiro da 3', selectedPlayer.td3, selectedPlayer.stats_td3));
        playerStatsContainer.appendChild(createGameCard('Finale', selectedPlayer.final, selectedPlayer.stats_final));
    });
});
