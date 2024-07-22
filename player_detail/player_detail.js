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
            card.classList.add('game-card');
            card.innerHTML = `
                <h3>${game}</h3>
                <p>Punteggio: ${score}</p>
                <p>Punti: ${stats[0] * pdkWeights[0]} (${stats[0]} PTS)</p>
                <p>Rimbalzi difensivi: ${stats[7] * pdkWeights[7]} (${stats[7]} DR)</p>
                <p>Rimbalzi offensivi: ${stats[8] * pdkWeights[8]} (${stats[8]} OR)</p>
                <p>Assist: ${stats[10] * pdkWeights[10]} (${stats[10]} AST)</p>
                <p>Palle recuperate: ${stats[12] * pdkWeights[12]} (${stats[12]} STL)</p>
                <p>Palle perse: ${stats[11] * pdkWeights[11]} (${stats[11]} TO)</p>
                <p>Triple segnate: ${stats[3] * pdkWeights[3]} (${stats[3]} 3PM)</p>
                <p>Tiri sbagliati: ${(stats[2] * pdkWeights[2]) + (stats[4] * pdkWeights[4])} (${stats[2] + stats[4]} FG miss)</p>
                <p>Tiri liberi sbagliati: ${stats[6] * pdkWeights[6]} (${stats[6]} FT miss)</p>
                <p>Doppia doppia: ${stats[15] * pdkWeights[15]}</p>
                <p>Tripla doppia: ${stats[16] * pdkWeights[16]}</p>
                <p>Espulsione: ${stats[14] * pdkWeights[14]}</p>
                <p>Vittoria: ${stats[17] * pdkWeights[17]}</p>
                <p>Punti meme: ${stats[18] * pdkWeights[18]}</p>
            `;
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
