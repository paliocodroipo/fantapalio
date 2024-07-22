import { players } from '../data.js';

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
                <p>Statistiche: ${stats.join(', ')}</p>
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
