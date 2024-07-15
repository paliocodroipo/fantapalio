import {
    fantateam_type,
    NORD, SUD, EST, WEST,
    fantateams
} from '../data.js';

document.addEventListener('DOMContentLoaded', function() {
    const teamTableBody = document.getElementById('teamTableBody');

    // Ordina le squadre per punteggio in ordine decrescente
    fantateams.sort((a, b) => b.tot_team - a.tot_team);

    // Ciclo attraverso le squadre e creo le righe della tabella
    fantateams.forEach((team, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td class="team-name">${team.name}</td>
            <td><strong>${team.tot_team}</strong></td>
            <td class="player-info">${team.p1.name} (${team.p1.tot})</td>
            <td class="player-info">${team.p2.name} (${team.p2.tot})</td>
            <td class="player-info">${team.p3.name} (${team.p3.tot})</td>
            <td class="player-info">${team.p4.name} (${team.p4.tot})</td>
            <td class="player-info">${team.p5.name} (${team.p5.tot})</td>
            <td>${team.rione.name}</td>
        `;
        teamTableBody.appendChild(row);
    });
});
