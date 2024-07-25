    // data.js

    // Definizione del tipo player_type
    const player_type = {
        name: "Nome Giocatore",
        team: "Nome Squadra",
        number: 0,
        g1: 0.0,
        stats_g1: Array(19).fill(0),
        g2: 0.0,
        stats_g2: Array(19).fill(0),
        g3: 0.0,
        stats_g3: Array(19).fill(0),
        semi: 0.0,
        stats_semi: Array(19).fill(0),
        td3: 0.0,
        stats_td3: Array(13).fill(0),
        final: 0.0,
        stats_final: Array(19).fill(0),
        tot: 0.0,
        cost: 0
    };
//questo array sarà da riempire per ogni giocatore per ogni partita
//poi il resto (player.g1 ecc viene calcolato in automatico)
//                   0    1   2   3    4   5   6    7   8    9     10  11  12  13  14   15  16  17   18
// gx_stats =      [PTS, 2P, 2Px, 3P, 3Px, FT, FTx, DR, OR, Rtot, ASS, TO, ST, BL, EXP, DD, TD, Win, Meme]
//pesi per ogni stat (totale sarà calcolato con sumproduct)




    // Definizione del tipo rione_type
    const rione_type = {
        name: "Nome Rione",
        final_points: 0
    };

    // Definizione del tipo fantateam_type
    const fantateam_type = {
        team_index: 0,
        name: "Nome Fantasquadra",
        p1: { ...player_type }, // Esempio di inclusione di player_type come attributo di fantateam_type
        p2: { ...player_type },
        p3: { ...player_type },
        p4: { ...player_type },
        p5: { ...player_type },
        rione: { ...rione_type }, // Esempio di inclusione di rione_type come attributo di fantateam_type
        total_cost : 0,
        tot_g1: 0.0,
        tot_g2: 0.0,
        tot_g3: 0.0,
        tot_semi: 0.0,
        tot_td3: 0.0,
        tot_final: 0.0,
        tot_team: 0.0,
    };

    // Funzione per creare un nuovo giocatore
function createPlayer(name, cost, team, number) {
    const player = { ...player_type, team: team, number:number, name: name, cost: cost }
    return player;
}

//questo fatto da chatgpt dandogli nomi costo squadra e numero
// Creazione dei giocatori per il team WEST
const MassimilianoMoretti24 = createPlayer("Massimiliano Moretti", 11, "WEST", 13);
const AndreaMoretti24 = createPlayer("Andrea Moretti", 4, "WEST", 24);
const LarryTrevisan24 = createPlayer("Larry Trevisan", 6, "WEST", 23);
const AlessandroCostantini24 = createPlayer("Alessandro Costantini", 7, "WEST", 4);
const MatteoMargarit24 = createPlayer("Matteo Margarit", 7, "WEST", 22);
const MauroCuridori24 = createPlayer("Mauro Curidori", 5, "WEST", 2);
const ChristianZanet24 = createPlayer("Christian Zanet", 6, "WEST", 9);
const GiacomoPiacentini24 = createPlayer("Giacomo Piacentini", 5, "WEST", 20);
const GiovanniDalFarra24 = createPlayer("Giovanni dal Farra", 4, "WEST", 7);
const MiracleObichukwu24 = createPlayer("Miracle Obichukwu", 4, "WEST", 14);
const LucaDellaLonga24 = createPlayer("Luca della Longa", 4, "WEST", 3);
const AlessandroRojatti24 = createPlayer("Alessandro Rojatti", 4, "WEST", 12);
const MicheleGorasso24 = createPlayer("Michele Gorasso", 5, "WEST", 21);
const GiacomoFerigo24 = createPlayer("Giacomo Ferigo", 4, "WEST", 16);
const UmbertoNobile24 = createPlayer("Umberto Nobile", 7, "WEST", 15);
const DevinChiarcos24 = createPlayer("Devin Chiarcos", 4, "WEST", 18);
const ValentinoCigainero24 = createPlayer("Valentino Cigainero", 5, "WEST", 0);
const MicheleDeAnna24 = createPlayer("Michele de Anna", 6, "WEST", 19);
const DavideParon24 = createPlayer("Davide Paron", 4, "WEST", 6);
const AlessioFurlan24 = createPlayer("Alessio Furlan", 4, "WEST", 10);
const MichaelMargarit24 = createPlayer("Michael Margarit", 4, "WEST", 0);
const SebastianoTonizzo24 = createPlayer("Sebastiano Tonizzo", 4, "WEST", 5);

// Creazione dei giocatori per il team NORD
const DanieleGanzit24 = createPlayer("Daniele Ganzit", 5, "NORD", 20);
const GiacomoSilvestri24 = createPlayer("Giacomo Silvestri", 5, "NORD", 9);
const VittorioGri24 = createPlayer("Vittorio Gri", 5, "NORD", 11);
const VittorioBasso24 = createPlayer("Vittorio Basso", 4, "NORD", 8);
const AlessandroRizzi24 = createPlayer("Alessandro Rizzi", 7, "NORD", 10);
const MassimoBaldassi24 = createPlayer("Massimo Baldassi", 4, "NORD", 0);
const GabrieleMiani24 = createPlayer("Gabriele Miani", 14, "NORD", 14);
const MarcoMarchetti24 = createPlayer("Marco Marchetti", 4, "NORD", 0);
const MarcoLombardo24 = createPlayer("Marco Lombardo", 7, "NORD", 15);
const MicheleVendrame24 = createPlayer("Michele Vendrame", 4, "NORD", 13);
const LorenzoSchinella24 = createPlayer("Lorenzo Schinella", 4, "NORD", 3);
const GioeleTudini24 = createPlayer("Gioele Tudini", 4, "NORD", 7);
const FilippoPasquon24 = createPlayer("Filippo Pasquon", 5, "NORD", 2);
const TommasoMartello24 = createPlayer("Tommaso Martello", 6, "NORD", 16);
const MarcoRizzi24 = createPlayer("Marco Rizzi", 4, "NORD", 6);
const DavidGaspardo24 = createPlayer("David Gaspardo", 9, "NORD", 19);
const AntonioGri24 = createPlayer("Antonio Gri", 4, "NORD", 5);
const RiccardoSchinella24 = createPlayer("Riccardo Schinella", 4, "NORD", 1);

// Creazione dei giocatori per il team SUD
const SimoneMartinelli24 = createPlayer("Simone Martinelli", 4, "SUD", 22);
const MatteoSpagnolo24 = createPlayer("Matteo Spagnolo", 4, "SUD", 21);
const DavideFaurlin24 = createPlayer("Davide Faurlin", 4, "SUD", 18);
const GiovanniTonizzo24 = createPlayer("Giovanni Tonizzo", 5, "SUD", 5);
const AlessandroSant24 = createPlayer("Alessandro Sant", 8, "SUD", 7);
const MatteoBazzaro24 = createPlayer("Matteo Bazzaro", 4, "SUD", 1);
const AlessandroSantin24 = createPlayer("Alessandro Santin", 4, "SUD", 10);
const AlessandroGalassi24 = createPlayer("Alessandro Galassi", 5, "SUD", 19);
const PietroSoramel24 = createPlayer("Pietro Soramel", 6, "SUD", 16);
const FilippoAgnoluzzi24 = createPlayer("Filippo Agnoluzzi", 4, "SUD", 2);
const EmanueleDaneluzzi24 = createPlayer("Emanuele Daneluzzi", 5, "SUD", 6);
const LucaSoramel24 = createPlayer("Luca Soramel", 5, "SUD", 12);
const PaoloZorzi24 = createPlayer("Paolo Zorzi", 4, "SUD", 9);
const ChristianFedrizzi24 = createPlayer("Christian Fedrizzi", 4, "SUD", 3);
const FilippoSappa24 = createPlayer("Filippo Sappa", 8, "SUD", 15);
const GiovanniZanin24 = createPlayer("Giovanni Zanin", 9, "SUD", 23);
const EnricoSant24 = createPlayer("Enrico Sant", 5, "SUD", 4);
const StefanoPolano24 = createPlayer("Stefano Polano", 5, "SUD", 17);

// Creazione dei giocatori per il team EST
const MarcoPolo24 = createPlayer("Marco Polo", 4, "EST", 15);
const MarcoSerrao24 = createPlayer("Marco Serrao", 7, "EST", 8);
const WilliamIob24 = createPlayer("William Iob", 7, "EST", 12);
const DavideBroggi24 = createPlayer("Davide Broggi", 4, "EST", 3);
const AlexMicottis24 = createPlayer("Alex Micottis", 4, "EST", 21);
const MassimilianoRossi24 = createPlayer("Massimiliano Rossi", 4, "EST", 22);
const MassimoMasotti24 = createPlayer("Massimo Masotti", 4, "EST", 10);
const EugenioDeTina24 = createPlayer("Eugenio De Tina", 5, "EST", 9);
const LucaAnedda24 = createPlayer("Luca Anedda", 4, "EST", 5);
const DenisVanin24 = createPlayer("Denis Vanin", 4, "EST", 17);
const ThomasBaracetti24 = createPlayer("Thomas Baracetti", 4, "EST", 2);
const LucaGemo24 = createPlayer("Luca Gemo", 4, "EST", 6);
const DiegoNata24 = createPlayer("Diego Nata", 9, "EST", 19);
const MattiaRoiatti24 = createPlayer("Mattia Roiatti", 4, "EST", 11);
const EdoardoPicogna24 = createPlayer("Edoardo Picogna", 4, "EST", 7);
const MauroPerina24 = createPlayer("Mauro Perina", 4, "EST", 18);
const LorenzoMoro24 = createPlayer("Lorenzo Moro", 5, "EST", 14);
const GionaTell24 = createPlayer("Giona Tell", 5, "EST", 4);
const IacopoPivetta24 = createPlayer("Iacopo Pivetta", 6, "EST", 20);
const MattiaMasotti24 = createPlayer("Mattia Masotti", 6, "EST", 13);


    // //definizione players
    // // Team WEST
    // const MassimilianoMoretti = { ...player_type, team: "WEST", name: "Massimiliano Moretti", cost: 11 };
    // const AndreaMoretti = { ...player_type, team: "WEST", name: "Andrea Moretti", cost: 4 };
    // const LarryTrevisan = { ...player_type, team: "WEST", name: "Larry Trevisan", cost: 6 };
    // const AlessandroCostantini = { ...player_type, team: "WEST", name: "Alessandro Costantini", cost: 7 };
    // const MatteoMargarit = { ...player_type, team: "WEST", name: "Matteo Margarit", cost: 7 };
    // const MauroCuridori = { ...player_type, team: "WEST", name: "Mauro Curidori", cost: 5 };
    // const ChristianZanet = { ...player_type, team: "WEST", name: "Christian Zanet", cost: 6 };
    // const GiacomoPiacentini = { ...player_type, team: "WEST", name: "Giacomo Piacentini", cost: 5 };
    // const GiovanniDalFarra = { ...player_type, team: "WEST", name: "Giovanni dal Farra", cost: 4 };
    // const MiracleObichukwu = { ...player_type, team: "WEST", name: "Miracle Obichukwu", cost: 4 };
    // const LucaDellaLonga = { ...player_type, team: "WEST", name: "Luca della Longa", cost: 4 };
    // const AlessandroRojatti = { ...player_type, team: "WEST", name: "Alessandro Rojatti", cost: 4 };
    // const MicheleGorasso = { ...player_type, team: "WEST", name: "Michele Gorasso", cost: 5 };
    // const GiacomoFerigo = { ...player_type, team: "WEST", name: "Giacomo Ferigo", cost: 4 };
    // const UmbertoNobile = { ...player_type, team: "WEST", name: "Umberto Nobile", cost: 7 };
    // const DevinChiarcos = { ...player_type, team: "WEST", name: "Devin Chiarcos", cost: 4 };
    // const ValentinoCigainero = { ...player_type, team: "WEST", name: "Valentino Cigainero", cost: 5 };
    // const MicheleDeAnna = { ...player_type, team: "WEST", name: "Michele de Anna", cost: 6 };
    // const DavideParon = { ...player_type, team: "WEST", name: "Davide Paron", cost: 4 };
    // const AlessioFurlan = { ...player_type, team: "WEST", name: "Alessio Furlan", cost: 4 };
    // const MichaelMargarit = { ...player_type, team: "WEST", name: "Michael Margarit", cost: 4 };
    // const SebastianoTonizzo = { ...player_type, team: "WEST", name: "Sebastiano Tonizzo", cost: 4 };

    // // Team NORD
    // const DanieleGanzit = { ...player_type, team: "NORD", name: "Daniele Ganzit", cost: 5 };
    // const GiacomoSilvestri = { ...player_type, team: "NORD", name: "Giacomo Silvestri", cost: 5 };
    // const VittorioGri = { ...player_type, team: "NORD", name: "Vittorio Gri", cost: 5 };
    // const VittorioBasso = { ...player_type, team: "NORD", name: "Vittorio Basso", cost: 4 };
    // const AlessandroRizzi = { ...player_type, team: "NORD", name: "Alessandro Rizzi", cost: 7 };
    // const MassimoBaldassi = { ...player_type, team: "NORD", name: "Massimo Baldassi", cost: 4 };
    // const GabrieleMiani = { ...player_type, team: "NORD", name: "Gabriele Miani", cost: 14 };
    // const MarcoMarchetti = { ...player_type, team: "NORD", name: "Marco Marchetti", cost: 4 };
    // const MarcoLombardo = { ...player_type, team: "NORD", name: "Marco Lombardo", cost: 7 };
    // const MicheleVendrame = { ...player_type, team: "NORD", name: "Michele Vendrame", cost: 4 };
    // const LorenzoSchinella = { ...player_type, team: "NORD", name: "Lorenzo Schinella", cost: 4 };
    // const GioeleTudini = { ...player_type, team: "NORD", name: "Gioele Tudini", cost: 4 };
    // const FilippoPasquon = { ...player_type, team: "NORD", name: "Filippo Pasquon", cost: 5 };
    // const TommasoMartello = { ...player_type, team: "NORD", name: "Tommaso Martello", cost: 6 };
    // const MarcoRizzi = { ...player_type, team: "NORD", name: "Marco Rizzi", cost: 4 };
    // const DavidGaspardo = { ...player_type, team: "NORD", name: "David Gaspardo", cost: 9 };
    // const AntonioGri = { ...player_type, team: "NORD", name: "Antonio Gri", cost: 4 };
    // const RiccardoSchinella = { ...player_type, team: "NORD", name: "Riccardo Schinella", cost: 4 };

    // // Team SUD
    // const SimoneMartinelli = { ...player_type, team: "SUD", name: "Simone Martinelli", cost: 4 };
    // const MatteoSpagnolo = { ...player_type, team: "SUD", name: "Matteo Spagnolo", cost: 4 };
    // const DavideFaurlin = { ...player_type, team: "SUD", name: "Davide Faurlin", cost: 4 };
    // const GiovanniTonizzo = { ...player_type, team: "SUD", name: "Giovanni Tonizzo", cost: 5 };
    // const AlessandroSant = { ...player_type, team: "SUD", name: "Alessandro Sant", cost: 8 };
    // const MatteoBazzaro = { ...player_type, team: "SUD", name: "Matteo Bazzaro", cost: 4 };
    // const AlessandroSantin = { ...player_type, team: "SUD", name: "Alessandro Santin", cost: 4 };
    // const AlessandroGalassi = { ...player_type, team: "SUD", name: "Alessandro Galassi", cost: 5 };
    // const PietroSoramel = { ...player_type, team: "SUD", name: "Pietro Soramel", cost: 6 };
    // const FilippoAgnoluzzi = { ...player_type, team: "SUD", name: "Filippo Agnoluzzi", cost: 4 };
    // const EmanueleDaneluzzi = { ...player_type, team: "SUD", name: "Emanuele Daneluzzi", cost: 5 };
    // const LucaSoramel = { ...player_type, team: "SUD", name: "Luca Soramel", cost: 5 };
    // const PaoloZorzi = { ...player_type, team: "SUD", name: "Paolo Zorzi", cost: 4 };
    // const ChristianFedrizzi = { ...player_type, team: "SUD", name: "Christian Fedrizzi", cost: 4 };
    // const FilippoSappa = { ...player_type, team: "SUD", name: "Filippo Sappa", cost: 8 };
    // const GiovanniZanin = { ...player_type, team: "SUD", name: "Giovanni Zanin", cost: 9 };
    // const EnricoSant = { ...player_type, team: "SUD", name: "Enrico Sant", cost: 5 };
    // const StefanoPolano = { ...player_type, team: "SUD", name: "Stefano Polano", cost: 5 };

    // // Team EST
    // const MarcoPolo = { ...player_type, team: "EST", name: "Marco Polo", cost: 4 };
    // const MarcoSerrao = { ...player_type, team: "EST", name: "Marco Serrao", cost: 7 };
    // const WilliamIob = { ...player_type, team: "EST", name: "William Iob", cost: 7 };
    // const DavideBroggi = { ...player_type, team: "EST", name: "Davide Broggi", cost: 4 };
    // const AlexMicottis = { ...player_type, team: "EST", name: "Alex Micottis", cost: 4 };
    // const MassimilianoRossi = { ...player_type, team: "EST", name: "Massimiliano Rossi", cost: 4 };
    // const MassimoMasotti = { ...player_type, team: "EST", name: "Massimo Masotti", cost: 4 };
    // const EugenioDeTina = { ...player_type, team: "EST", name: "Eugenio De Tina", cost: 5 };
    // const LucaAnedda = { ...player_type, team: "EST", name: "Luca Anedda", cost: 4 };
    // const DenisVanin = { ...player_type, team: "EST", name: "Denis Vanin", cost: 4 };
    // const ThomasBaracetti = { ...player_type, team: "EST", name: "Thomas Baracetti", cost: 4 };
    // const LucaGemo = { ...player_type, team: "EST", name: "Luca Gemo", cost: 4 };
    // const DiegoNata = { ...player_type, team: "EST", name: "Diego Nata", cost: 9 };
    // const MattiaRoiatti = { ...player_type, team: "EST", name: "Mattia Roiatti", cost: 4 };
    // const EdoardoPicogna = { ...player_type, team: "EST", name: "Edoardo Picogna", cost: 4 };
    // const MauroPerina = { ...player_type, team: "EST", name: "Mauro Perina", cost: 4 };
    // const LorenzoMoro = { ...player_type, team: "EST", name: "Lorenzo Moro", cost: 5 };
    // const GionaTell = { ...player_type, team: "EST", name: "Giona Tell", cost: 5 };
    // const IacopoPivetta = { ...player_type, team: "EST", name: "Iacopo Pivetta", cost: 6 };
    // const MattiaMasotti = { ...player_type, team: "EST", name: "Mattia Masotti", cost: 6 };



    // Definizione Rioni
    const NORD = { ...rione_type, name: "NORD", final_points: 10 };
    const SUD  = { ...rione_type, name: "SUD", final_points: 0 };
    const EST  = { ...rione_type, name: "EST", final_points: 5 };
    const WEST = { ...rione_type, name: "WEST", final_points: 20 };
    //questo commentone da non cancellare che serve per averli vuoti prima di riempirli
    // //                               | | | | | | | | | | | | | | | | | | | 
    // //     gx_stats =             [PTS, 2Px,3Px,FTx, OR, ASS,ST,EXP,TD,Meme]
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // //                               | | | | | | | | | | | | | | | | | | | 
    // MassimilianoMoretti.stats_g2=   []; //13
    // AndreaMoretti.stats_g2 =        []; //24
    // LarryTrevisan.stats_g2 =        []; // 23
    // AlessandroCostantini.stats_g2 = []; // 4 
    // MatteoMargarit.stats_g2 =       []; // 22
    // MauroCuridori.stats_g2 =        []; // 2 
    // ChristianZanet.stats_g2 =       []; // 9
    // GiacomoPiacentini.stats_g2 =    []; // 20
    // GiovanniDalFarra.stats_g2 =     []; // 7
    // MiracleObichukwu.stats_g2 =     []; // 14
    // LucaDellaLonga.stats_g2 =       []; // 3
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // AlessandroRojatti.stats_g2 =    []; // 12
    // MicheleGorasso.stats_g2 =       []; // 21
    // GiacomoFerigo.stats_g2 =        []; // 16
    // UmbertoNobile.stats_g2 =        []; // 15
    // DevinChiarcos.stats_g2 =        []; // 18
    // ValentinoCigainero.stats_g2 =   []; //
    // MicheleDeAnna.stats_g2 =        []; //
    // DavideParon.stats_g2 =          []; // 6
    // AlessioFurlan.stats_g2 =        []; // 10
    // MichaelMargarit.stats_g2 =      []; //
    // SebastianoTonizzo.stats_g2 =    []; // 5
    // //                               | | | | | | | | | | | | | | | | | | | 
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // //                               | | | | | | | | | | | | | | | | | | | 
    // DanieleGanzit.stats_g2 =        []; // 
    // GiacomoSilvestri.stats_g2 =     []; // 9
    // VittorioGri.stats_g2 =          []; // 11
    // VittorioBasso.stats_g2 =        []; // 8
    // AlessandroRizzi.stats_g2 =      []; // 10
    // MassimoBaldassi.stats_g2 =      []; // 
    // GabrieleMiani.stats_g2 =        []; // 14
    // MarcoMarchetti.stats_g2 =       []; // 
    // MarcoLombardo.stats_g2 =        []; // 15
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // MicheleVendrame.stats_g2 =      []; // 13
    // LorenzoSchinella.stats_g2 =     []; // 3
    // GioeleTudini.stats_g2 =         []; // 7
    // FilippoPasquon.stats_g2 =       []; // 2
    // TommasoMartello.stats_g2 =      []; // 16
    // MarcoRizzi.stats_g2 =           []; // 6
    // DavidGaspardo.stats_g2 =        []; // 19
    // AntonioGri.stats_g2 =           []; // 5
    // RiccardoSchinella.stats_g2 =    []; // 1
    // //                               | | | | | | | | | | | | | | | | | | | 
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // //                               | | | | | | | | | | | | | | | | | | | 
    // SimoneMartinelli.stats_g2 =     []; // 22
    // MatteoSpagnolo.stats_g2 =       []; // 21
    // DavideFaurlin.stats_g2 =        []; // 18
    // GiovanniTonizzo.stats_g2 =      []; // 5
    // AlessandroSant.stats_g2 =       []; // 7
    // MatteoBazzaro.stats_g2 =        []; // 1
    // AlessandroSantin.stats_g2 =     []; // 10
    // AlessandroGalassi.stats_g2 =    []; // 19
    // PietroSoramel.stats_g2 =        []; // 16
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // FilippoAgnoluzzi.stats_g2 =     []; // 2
    // EmanueleDaneluzzi.stats_g2 =    []; // 6
    // LucaSoramel.stats_g2 =          []; // 12
    // PaoloZorzi.stats_g2 =           []; // 9
    // ChristianFedrizzi.stats_g2 =    []; // 3
    // FilippoSappa.stats_g2 =         []; // 15
    // GiovanniZanin.stats_g2 =        []; // 23
    // EnricoSant.stats_g2 =           []; // 4
    // StefanoPolano.stats_g2 =        []; // 17
    // //                                 | | | | | | | | | | | | | | | | | | 
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // //                               | | | | | | | | | | | | | | | | | | | 
    // MarcoPolo.stats_g2 =            []; // 15
    // MarcoSerrao.stats_g2 =          []; // 8
    // WilliamIob.stats_g2 =           []; // 12
    // DavideBroggi.stats_g2 =         []; // 3
    // AlexMicottis.stats_g2 =         []; // 21
    // MassimilianoRossi.stats_g2 =    []; // 22
    // MassimoMasotti.stats_g2 =       []; // 10
    // EugenioDeTina.stats_g2 =        []; // 9
    // LucaAnedda.stats_g2 =           []; // 5
    // DenisVanin.stats_g2 =           []; // 17
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // ThomasBaracetti.stats_g2 =      []; // 2
    // LucaGemo.stats_g2 =             []; // 6
    // DiegoNata.stats_g2 =            []; // 19
    // MattiaRoiatti.stats_g2 =        []; // 11
    // EdoardoPicogna.stats_g2 =       []; // 7
    // MauroPerina.stats_g2 =          []; // 18
    // LorenzoMoro.stats_g2 =          []; // 14
    // GionaTell.stats_g2 =            []; // 4
    // IacopoPivetta.stats_g2 =        []; // 20
    // MattiaMasotti.stats_g2 =        []; // 13
    // //                               | | | | | | | | | | | | | | | | | | | 
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // //                               | | | | | | | | | | | | | | | | | | | 
    //     gx_stats =             [PTS, 2Px,3Px,FTx, OR, ASS,ST,EXP,TD,Meme]
    //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    MassimilianoMoretti24.stats_g1=   [0,2,2,0,1,0,0,2,2,0,0,1,3,0,0,0,0,1,1]; //13
    AndreaMoretti24.stats_g1 =        [0,0,3,0,1,0,0,3,1,0,0,3,0,0,0,0,0,1,0]; //24
    LarryTrevisan24.stats_g1 =        [0,0,2,0,1,1,1,3,1,0,2,1,1,0,0,0,0,1,0]; // 23
    AlessandroCostantini24.stats_g1 = [0,3,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,1,1]; // 4 
    MatteoMargarit24.stats_g1 =       [0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1]; // 22
    MauroCuridori24.stats_g1 =        [0,2,0,1,2,0,0,2,0,0,1,3,1,0,0,0,0,1,0]; // 2 
    ChristianZanet24.stats_g1 =       [0,0,0,0,1,0,0,0,0,0,1,2,0,0,0,0,0,1,0]; // 9
    GiacomoPiacentini24.stats_g1 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 20
    GiovanniDalFarra24.stats_g1 =     [0,1,1,0,1,0,2,1,0,0,0,1,1,0,0,0,0,1,0]; // 7
    MiracleObichukwu24.stats_g1 =     [0,1,2,0,0,2,0,0,2,0,0,1,0,0,0,0,0,1,0]; // 14
    LucaDellaLonga24.stats_g1 =       [0,0,1,0,0,2,0,1,0,0,1,3,0,0,0,0,0,1,0]; // 3
    AlessandroRojatti24.stats_g1 =    [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 12
    MicheleGorasso24.stats_g1 =       [0,2,2,0,1,2,1,1,1,0,1,0,1,0,0,0,0,1,0]; // 21
    GiacomoFerigo24.stats_g1 =        [0,0,0,1,1,0,0,2,0,0,1,1,1,0,0,0,0,1,0]; // 16
    UmbertoNobile24.stats_g1 =        [0,2,0,0,0,2,0,5,3,0,5,0,1,0,0,0,0,1,0]; // 15
    DevinChiarcos24.stats_g1 =        [0,2,2,4,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1]; // 18
    ValentinoCigainero24.stats_g1 =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    MicheleDeAnna24.stats_g1 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    DavideParon24.stats_g1 =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 6
    AlessioFurlan24.stats_g1 =        [0,0,2,1,0,2,0,1,0,0,0,0,0,0,0,0,0,1,1]; // 10
    MichaelMargarit24.stats_g1 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    SebastianoTonizzo24.stats_g1 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 5
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    DanieleGanzit24.stats_g1 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 
    GiacomoSilvestri24.stats_g1 =     [0,0,0,0,1,1,1,0,0,0,0,2,0,0,0,0,0,1,3]; // 9
    VittorioGri24.stats_g1 =          [0,1,5,0,0,0,0,1,0,0,0,2,1,0,0,0,0,1,3]; // 11
    VittorioBasso24.stats_g1 =        [0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,1,2]; // 8
    AlessandroRizzi24.stats_g1 =      [0,0,2,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,3]; // 10
    MassimoBaldassi24.stats_g1 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 
    GabrieleMiani24.stats_g1 =        [0,6,3,3,3,3,0,3,7,0,2,1,1,0,0,0,0,1,3]; // 14
    MarcoMarchetti24.stats_g1 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 
    MarcoLombardo24.stats_g1 =        [0,1,5,0,0,2,1,3,4,0,0,1,1,0,0,0,0,1,2]; // 15
    MicheleVendrame24.stats_g1 =      [0,2,0,0,0,0,0,2,0,0,0,1,0,0,0,0,0,1,2]; // 13
    LorenzoSchinella24.stats_g1 =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 3
    GioeleTudini24.stats_g1 =         [0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,2]; // 7
    FilippoPasquon24.stats_g1 =       [0,1,0,0,3,0,2,1,1,0,1,0,3,0,0,0,0,1,2]; // 2
    TommasoMartello24.stats_g1 =      [0,3,2,0,1,2,5,0,0,0,0,2,2,0,0,0,0,1,2]; // 16
    MarcoRizzi24.stats_g1 =           [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,2]; // 6
    DavidGaspardo24.stats_g1 =        [0,0,1,1,7,0,0,7,1,0,2,3,1,0,0,0,0,1,2]; // 19  //1 tripla sbagliata di troppo
    AntonioGri24.stats_g1 =           [0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 5
    RiccardoSchinella24.stats_g1 =    [0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 1
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    SimoneMartinelli24.stats_g1 =     [0,1,3,0,4,0,1,1,0,0,0,1,0,0,0,0,0,0,0]; // 22
    MatteoSpagnolo24.stats_g1 =       [0,0,0,0,2,0,0,2,2,0,0,0,2,1,0,0,0,0,0]; // 21
    DavideFaurlin24.stats_g1 =        [0,0,1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0]; // 18
    GiovanniTonizzo24.stats_g1 =      [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0]; // 5
    AlessandroSant24.stats_g1 =       [0,0,3,0,4,4,2,0,0,0,1,1,1,1,0,0,0,0,0]; // 7
    MatteoBazzaro24.stats_g1 =        [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 1
    AlessandroSantin24.stats_g1 =     [0,0,2,0,2,0,0,1,0,0,0,0,0,0,0,0,0,0,0]; // 10
    AlessandroGalassi24.stats_g1 =    [0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]; // 19
    PietroSoramel24.stats_g1 =        [0,1,2,2,0,0,0,1,2,0,1,0,2,0,0,0,0,0,0]; // 16
    FilippoAgnoluzzi24.stats_g1 =     [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 2
    EmanueleDaneluzzi24.stats_g1 =    [0,0,0,0,0,2,0,2,1,0,0,2,0,0,0,0,0,0,0]; // 6
    LucaSoramel24.stats_g1 =          [0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0]; // 12
    PaoloZorzi24.stats_g1 =           [0,0,1,1,0,0,0,0,1,0,0,2,1,1,0,0,0,0,0]; // 9
    ChristianFedrizzi24.stats_g1 =    [0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 3
    FilippoSappa24.stats_g1 =         [0,3,4,0,2,5,1,3,6,0,2,3,2,0,0,0,0,0,1]; // 15
    GiovanniZanin24.stats_g1 =        [0,1,6,0,3,3,4,6,4,0,2,4,0,0,0,0,0,0,1]; // 23
    EnricoSant24.stats_g1 =           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 4
    StefanoPolano24.stats_g1 =        [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 17
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    MarcoPolo24.stats_g1 =            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 15
    MarcoSerrao24.stats_g1 =          [0,3,6,2,2,2,1,5,2,0,2,1,0,1,0,0,0,0,3]; // 8
    WilliamIob24.stats_g1 =           [0,4,2,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,4]; // 12
    DavideBroggi24.stats_g1 =         [0,0,2,0,0,2,0,1,0,0,0,1,2,0,0,0,0,0,3]; // 3
    AlexMicottis24.stats_g1 =         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 21
    MassimilianoRossi24.stats_g1 =    [0,0,0,0,2,0,0,1,0,0,0,2,2,0,0,0,0,0,3]; // 22
    MassimoMasotti24.stats_g1 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 10
    EugenioDeTina24.stats_g1 =        [0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,3]; // 9
    LucaAnedda24.stats_g1 =           [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4]; // 5
    DenisVanin24.stats_g1 =           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4]; // 17
    ThomasBaracetti24.stats_g1 =      [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,3]; // 2
    LucaGemo24.stats_g1 =             [0,0,0,0,0,0,0,1,0,0,1,3,0,0,0,0,0,0,3]; // 6
    DiegoNata24.stats_g1 =            [0,3,6,1,0,0,0,6,2,0,1,2,3,0,0,0,0,0,1]; // 19
    MattiaRoiatti24.stats_g1 =        [0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,4]; // 11
    EdoardoPicogna24.stats_g1 =       [0,0,0,0,2,1,1,0,0,0,0,2,1,0,0,0,0,0,4]; // 7
    MauroPerina24.stats_g1 =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 18
    LorenzoMoro24.stats_g1 =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8]; // 14
    GionaTell24.stats_g1 =            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 4
    IacopoPivetta24.stats_g1 =        [0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,4]; // 20
    MattiaMasotti24.stats_g1 =        [0,3,5,0,4,2,3,2,4,0,0,2,1,1,0,0,0,0,3]; // 13
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =             [PTS, 2Px,3Px,FTx, OR, ASS,ST,EXP,TD,Meme]
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    MassimilianoMoretti24.stats_g2=   [0,2,4,1,0,1,4,4,2,0,0,5,2,0,1,0,0,1,1]; //13
    AndreaMoretti24.stats_g2 =        [0,0,1,0,0,1,1,3,0,0,0,0,0,0,0,0,0,1,0]; //24
    LarryTrevisan24.stats_g2 =        [0,2,1,0,2,0,0,1,0,0,0,0,0,0,0,0,0,1,0]; // 23
    AlessandroCostantini24.stats_g2 = [0,1,0,2,0,4,0,1,1,0,2,0,0,1,0,0,0,1,1]; // 4 
    MatteoMargarit24.stats_g2 =       [0,2,1,0,1,0,0,6,2,0,1,1,0,0,0,0,0,1,0]; // 22
    MauroCuridori24.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 2 
    ChristianZanet24.stats_g2 =       [0,1,1,0,0,1,0,1,0,0,0,3,1,0,0,0,0,1,0]; // 9
    GiacomoPiacentini24.stats_g2 =    [0,0,1,0,2,0,0,0,0,0,0,1,0,0,0,0,0,1,0]; // 20
    GiovanniDalFarra24.stats_g2 =     [0,0,2,0,2,1,1,0,0,0,0,0,0,0,0,0,0,1,0]; // 7 //manca 1 assist
    MiracleObichukwu24.stats_g2 =     [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 14
    LucaDellaLonga24.stats_g2 =       [0,0,2,0,0,0,0,1,1,0,0,2,1,0,0,0,0,1,0]; // 3
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    AlessandroRojatti24.stats_g2 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 12
    MicheleGorasso24.stats_g2 =       [0,0,2,0,0,0,0,2,0,0,0,2,1,0,0,0,0,1,0]; // 21
    GiacomoFerigo24.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0]; // 16
    UmbertoNobile24.stats_g2 =        [0,2,1,1,0,7,1,4,1,0,3,1,0,0,0,0,0,1,1]; // 15
    DevinChiarcos24.stats_g2 =        [0,0,0,0,1,0,0,4,0,0,0,1,0,0,0,0,0,1,0]; // 18
    ValentinoCigainero24.stats_g2 =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    MicheleDeAnna24.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    DavideParon24.stats_g2 =          [0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0]; // 6
    AlessioFurlan24.stats_g2 =        [0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0]; // 10
    MichaelMargarit24.stats_g2 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    SebastianoTonizzo24.stats_g2 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 5
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    DanieleGanzit24.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 
    GiacomoSilvestri24.stats_g2 =     [0,2,2,1,1,3,1,1,0,0,0,0,2,0,0,0,0,0,0]; // 9
    VittorioGri24.stats_g2 =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 11
    VittorioBasso24.stats_g2 =        [0,2,1,0,2,0,0,2,2,0,0,4,1,0,0,0,0,0,0]; // 8
    AlessandroRizzi24.stats_g2 =      [0,1,2,1,1,3,0,2,0,0,0,1,0,0,0,0,0,0,1]; // 10
    MassimoBaldassi24.stats_g2 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 
    GabrieleMiani24.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 14
    MarcoMarchetti24.stats_g2 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 
    MarcoLombardo24.stats_g2 =        [0,2,1,0,1,2,0,2,1,0,1,2,0,0,0,0,0,0,1]; // 15
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    MicheleVendrame24.stats_g2 =      [0,0,0,0,0,0,0,3,0,0,0,1,2,0,0,0,0,0,5]; // 13
    LorenzoSchinella24.stats_g2 =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]; // 3
    GioeleTudini24.stats_g2 =         [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0]; // 7
    FilippoPasquon24.stats_g2 =       [0,0,2,0,1,0,0,2,0,0,0,1,0,0,0,0,0,0,0]; // 2
    TommasoMartello24.stats_g2 =      [0,2,2,0,2,2,3,1,0,0,0,2,1,1,0,0,0,0,0]; // 16
    MarcoRizzi24.stats_g2 =           [0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1]; // 6
    DavidGaspardo24.stats_g2 =        [0,3,5,0,7,4,1,6,2,0,0,2,1,1,0,0,0,0,1]; // 19
    AntonioGri24.stats_g2 =           [0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0]; // 5
    RiccardoSchinella24.stats_g2 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 1
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    SimoneMartinelli24.stats_g2 =     [0,0,3,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0]; // 22 // ho messo vittoria anche asud 
    MatteoSpagnolo24.stats_g2 =       [0,3,3,1,2,0,0,2,0,0,0,2,0,1,0,0,0,1,0]; // 21 // ma hanno perso
    DavideFaurlin24.stats_g2 =        [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 18
    GiovanniTonizzo24.stats_g2 =      [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 5
    AlessandroSant24.stats_g2 =       [0,1,4,0,7,6,4,1,0,0,0,1,6,0,0,0,0,1,0]; // 7
    MatteoBazzaro24.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 1
    AlessandroSantin24.stats_g2 =     [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 10
    AlessandroGalassi24.stats_g2 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 19
    PietroSoramel24.stats_g2 =        [0,1,3,2,3,0,0,1,0,0,2,1,1,0,0,0,0,1,1]; // 16
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    FilippoAgnoluzzi24.stats_g2 =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 2
    EmanueleDaneluzzi24.stats_g2 =    [0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0]; // 6
    LucaSoramel24.stats_g2 =          [0,1,1,1,1,0,0,0,0,0,1,2,1,0,0,0,0,1,1]; // 12
    PaoloZorzi24.stats_g2 =           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 9
    ChristianFedrizzi24.stats_g2 =    [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0]; // 3
    FilippoSappa24.stats_g2 =         [0,4,2,1,4,10,7,7,2,0,2,1,5,0,0,0,0,1,0]; // 15
    GiovanniZanin24.stats_g2 =        [0,2,3,0,1,0,2,8,1,0,3,1,1,0,0,0,0,1,1]; // 23
    EnricoSant24.stats_g2 =           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 4
    StefanoPolano24.stats_g2 =        [0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0]; // 17
    //                                 | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    MarcoPolo24.stats_g2 =            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 15
    MarcoSerrao24.stats_g2 =          [0,0,3,4,0,5,0,3,0,0,2,4,1,0,0,0,0,1,0]; // 8
    WilliamIob24.stats_g2 =           [0,0,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,1,1]; // 12
    DavideBroggi24.stats_g2 =         [0,0,2,0,1,0,0,2,0,0,0,3,0,0,0,0,0,1,0]; // 3   //manca 5 di tiro da metà (forse)
    AlexMicottis24.stats_g2 =         [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1]; // 21
    MassimilianoRossi24.stats_g2 =    [0,2,1,0,0,1,1,7,1,0,1,1,0,0,0,0,0,1,1]; // 22
    MassimoMasotti24.stats_g2 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 10
    EugenioDeTina24.stats_g2 =        [0,0,1,1,3,0,0,4,0,0,0,1,0,0,0,0,0,1,0]; // 9
    LucaAnedda24.stats_g2 =           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 5
    DenisVanin24.stats_g2 =           [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 17
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    ThomasBaracetti24.stats_g2 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 2
    LucaGemo24.stats_g2 =             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 6
    DiegoNata24.stats_g2 =            [0,9,6,0,0,3,7,10,6,0,0,2,1,0,0,0,0,1,0]; // 19
    MattiaRoiatti24.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 11
    EdoardoPicogna24.stats_g2 =       [0,1,0,0,3,0,0,1,0,0,0,1,0,0,0,0,0,1,0]; // 7
    MauroPerina24.stats_g2 =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 18
    LorenzoMoro24.stats_g2 =          [0,0,2,0,3,2,2,0,0,0,4,3,1,0,0,0,0,1,0]; // 14
    GionaTell24.stats_g2 =            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 4
    IacopoPivetta24.stats_g2 =        [0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0]; // 20
    MattiaMasotti24.stats_g2 =        [0,3,3,0,2,0,2,3,2,0,0,1,0,0,0,0,0,1,0]; // 13
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    //questo commentone da non cancellare che serve per averli vuoti prima di riempirli
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =             [PTS, 2Px,3Px,FTx, OR, ASS,ST,EXP,TD,Meme]
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    MassimilianoMoretti24.stats_g3=   [0,4,0,0,0,0,6,1,1,0,2,2,4,0,0,0,0,1,2]; //13
    AndreaMoretti24.stats_g3 =        [0,0,1,1,0,0,0,2,1,0,0,3,1,0,0,0,0,1,1]; //24
    LarryTrevisan24.stats_g3 =        [0,3,0,0,1,3,0,3,0,0,0,0,1,0,0,0,0,1,0]; // 23
    AlessandroCostantini24.stats_g3 = [0,1,0,0,2,0,0,0,0,0,1,0,0,0,0,0,0,1,2]; // 4 
    MatteoMargarit24.stats_g3 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 22
    MauroCuridori24.stats_g3 =        [0,2,2,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0]; // 2 
    ChristianZanet24.stats_g3 =       [0,1,0,0,0,0,0,0,0,0,1,1,3,0,0,0,0,1,0]; // 9
    GiacomoPiacentini24.stats_g3 =    [0,0,0,0,0,0,0,1,1,2,1,1,0,0,0,0,0,1,-1]; // 20
    GiovanniDalFarra24.stats_g3 =     [0,2,0,0,3,0,0,0,0,0,1,2,2,0,0,0,0,1,0]; // 7
    MiracleObichukwu24.stats_g3 =     [0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0]; // 14
    LucaDellaLonga24.stats_g3 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 3
    AlessandroRojatti24.stats_g3 =    [0,0,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0]; // 12
    MicheleGorasso24.stats_g3 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 21
    GiacomoFerigo24.stats_g3 =        [0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0]; // 16
    UmbertoNobile24.stats_g3 =        [0,3,1,0,2,0,0,4,3,7,2,1,0,0,0,0,0,1,1]; // 15
    DevinChiarcos24.stats_g3 =        [5,2,1,0,4,1,0,2,0,2,1,1,2,0,0,0,0,1,0]; // 18
    ValentinoCigainero24.stats_g3 =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    MicheleDeAnna24.stats_g3 =        [9,2,2,0,0,5,2,5,1,6,1,1,0,0,0,0,0,1,1]; // 19
    DavideParon24.stats_g3 =          [0,0,1,0,1,0,0,0,2,2,0,0,0,0,0,0,0,1,0]; // 6
    AlessioFurlan24.stats_g3 =        [0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0]; // 10
    MichaelMargarit24.stats_g3 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    SebastianoTonizzo24.stats_g3 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 5
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    DanieleGanzit24.stats_g3 =        [2,1,1,0,0,0,2,0,1,1,0,0,0,0,0,0,0,1,0]; // 20
    GiacomoSilvestri24.stats_g3 =     [0,0,2,0,2,0,0,0,0,0,0,0,1,0,0,0,0,1,1]; // 9
    VittorioGri24.stats_g3 =          [0,0,0,0,2,0,0,3,0,0,0,3,0,1,0,0,0,1,1]; // 11
    VittorioBasso24.stats_g3 =        [4,2,1,0,2,0,0,1,0,1,0,1,3,0,0,0,0,1,0]; // 8
    AlessandroRizzi24.stats_g3 =      [3,0,2,1,3,0,0,4,0,4,2,1,0,0,0,0,0,1,0]; // 10
    MassimoBaldassi24.stats_g3 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 
    GabrieleMiani24.stats_g3 =        [0,6,2,0,3,3,0,6,3,0,2,1,2,0,0,0,0,1,0]; // 14
    MarcoMarchetti24.stats_g3 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 
    MarcoLombardo24.stats_g3 =        [6,3,1,0,0,0,0,3,0,3,4,3,0,0,0,0,0,1,1]; // 15
    MicheleVendrame24.stats_g3 =      [0,0,2,0,2,0,0,2,0,2,3,0,0,0,0,0,0,1,0]; // 13
    LorenzoSchinella24.stats_g3 =     [0,0,0,0,1,0,0,2,0,2,1,0,0,0,0,0,0,1,0]; // 3
    GioeleTudini24.stats_g3 =         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 7
    FilippoPasquon24.stats_g3 =       [0,3,1,2,4,0,0,1,0,1,0,0,0,0,0,0,0,1,1]; // 2
    TommasoMartello24.stats_g3 =      [0,0,0,0,2,0,0,0,0,0,1,0,0,0,0,0,0,1,0]; // 16
    MarcoRizzi24.stats_g3 =           [0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0]; // 6
    DavidGaspardo24.stats_g3 =        [0,0,0,2,5,0,0,6,1,0,3,2,0,0,0,0,0,1,1]; // 19
    AntonioGri24.stats_g3 =           [2,1,2,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0]; // 5
    RiccardoSchinella24.stats_g3 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 1
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    SimoneMartinelli24.stats_g3 =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0]; // 22
    MatteoSpagnolo24.stats_g3 =       [0,1,2,1,1,0,0,4,0,4,0,0,0,0,0,0,0,-1,0]; // 21
    DavideFaurlin24.stats_g3 =        [2,1,2,0,0,0,0,2,1,3,0,0,0,0,0,0,0,-1,0]; // 18
    GiovanniTonizzo24.stats_g3 =      [0,0,0,0,2,0,0,1,0,1,1,1,0,0,0,0,0,-1,0]; // 5
    AlessandroSant24.stats_g3 =       [0,0,2,0,1,0,0,0,0,0,1,0,0,0,0,0,0,-1,1]; // 7
    MatteoBazzaro24.stats_g3 =        [0,0,2,0,0,0,0,2,0,2,0,1,1,0,0,0,0,-1,0]; // 1
    AlessandroSantin24.stats_g3 =     [5,0,2,1,2,2,0,3,1,4,0,0,0,0,0,0,0,-1,0]; // 10
    AlessandroGalassi24.stats_g3 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0]; // 19
    PietroSoramel24.stats_g3 =        [2,1,2,0,2,0,0,1,0,1,1,1,1,0,0,0,0,-1,0]; // 16
    FilippoAgnoluzzi24.stats_g3 =     [0,0,0,0,0,0,0,1,1,2,0,0,0,0,0,0,0,-1,0]; // 2
    EmanueleDaneluzzi24.stats_g3 =    [2,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,-1,1]; // 6
    LucaSoramel24.stats_g3 =          [0,2,3,0,1,1,1,0,2,2,0,1,0,0,0,0,0,-1,1]; // 12
    PaoloZorzi24.stats_g3 =           [2,1,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,-1,0]; // 9
    ChristianFedrizzi24.stats_g3 =    [0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,-1,0]; // 3
    FilippoSappa24.stats_g3 =         [0,2,2,0,5,4,2,2,0,2,5,3,4,0,0,0,0,-1,2]; // 15
    GiovanniZanin24.stats_g3 =        [3,0,5,1,0,0,0,2,0,2,0,2,0,0,0,0,0,-1,1]; // 23
    EnricoSant24.stats_g3 =           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,3]; // 4
    StefanoPolano24.stats_g3 =        [2,1,0,0,0,0,0,2,1,3,0,0,0,0,0,0,0,-1,0]; // 17
    //                                 | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    MarcoPolo24.stats_g3 =            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1]; // 15
    MarcoSerrao24.stats_g3 =          [4,1,1,0,5,2,2,1,0,1,0,3,1,0,0,0,0,0,1]; // 8
    WilliamIob24.stats_g3 =           [2,1,2,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0]; // 12
    DavideBroggi24.stats_g3 =         [4,1,0,0,1,2,1,0,0,0,0,0,0,0,0,0,0,0,5]; // 3
    AlexMicottis24.stats_g3 =         [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 21
    MassimilianoRossi24.stats_g3 =    [0,0,3,0,0,0,0,2,0,2,0,1,0,0,0,0,0,0,0]; // 22
    MassimoMasotti24.stats_g3 =       [0,0,0,0,0,0,0,2,0,0,0,3,0,0,0,0,0,0,0]; // 10
    EugenioDeTina24.stats_g3 =        [0,0,1,1,1,0,0,0,0,0,0,2,0,0,0,0,0,0,0]; // 9
    LucaAnedda24.stats_g3 =           [0,0,0,0,0,0,0,2,0,2,0,1,2,0,0,0,0,0,1]; // 5
    DenisVanin24.stats_g3 =           [2,1,1,0,0,0,0,1,1,2,0,0,1,0,0,0,0,0,0]; // 17
    ThomasBaracetti24.stats_g3 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 2
    LucaGemo24.stats_g3 =             [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]; // 6
    DiegoNata24.stats_g3 =            [0,7,8,0,1,1,1,9,3,0,0,2,0,1,0,0,0,0,1]; // 19 vedaimo se calcola doppia doppia
    MattiaRoiatti24.stats_g3 =        [2,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 11
    EdoardoPicogna24.stats_g3 =       [0,0,0,0,2,0,2,1,0,1,0,1,0,0,0,0,0,0,0]; // 7
    MauroPerina24.stats_g3 =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 18
    LorenzoMoro24.stats_g3 =          [0,0,2,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1]; // 14
    GionaTell24.stats_g3 =            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 4
    IacopoPivetta24.stats_g3 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]; // 20
    MattiaMasotti24.stats_g3 =        [2,1,2,0,1,0,0,1,1,2,0,1,1,0,0,0,0,0,-1]; // 13
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|

    //     gx24_stats =               [PTS, 2Px,3Px,FTx, OR, ASS,ST,EXP,TD,Meme]
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                                 | | | | | | | | | | | | | | | | | | | 
    MassimilianoMoretti24.stats_semi=   [0,3,2,1,6,1,3,6,1,0,1,4,4,0,0,0,0,1,1]; //13
    AndreaMoretti24.stats_semi =        [0,0,1,0,1,0,0,2,1,3,1,0,0,0,0,0,0,1,1]; //24
    LarryTrevisan24.stats_semi =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 23
    AlessandroCostantini24.stats_semi = [0,2,0,1,3,0,0,0,0,0,0,1,1,0,0,0,0,1,4]; // 4 
    MatteoMargarit24.stats_semi =       [0,3,2,0,0,0,2,8,3,0,1,2,0,1,0,0,0,1,2]; // 22
    MauroCuridori24.stats_semi =        [2,1,2,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1]; // 2 
    ChristianZanet24.stats_semi =       [2,1,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,1,1]; // 9
    GiacomoPiacentini24.stats_semi =    [0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1]; // 20
    GiovanniDalFarra24.stats_semi =     [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1]; // 7
    MiracleObichukwu24.stats_semi =     [0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1]; // 14
    LucaDellaLonga24.stats_semi =       [0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1]; // 3
    //     gx24_stats =                PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    AlessandroRojatti24.stats_semi =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 12
    MicheleGorasso24.stats_semi =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 21
    GiacomoFerigo24.stats_semi =        [0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1,1]; // 16
    UmbertoNobile24.stats_semi =        [0,3,3,0,2,3,0,6,1,0,1,0,0,0,0,0,0,1,2]; // 15
    DevinChiarcos24.stats_semi =        [0,0,1,1,1,0,0,3,0,3,1,0,1,1,0,0,0,1,1]; // 18
    ValentinoCigainero24.stats_semi =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,4]; //
    MicheleDeAnna24.stats_semi =        [2,1,1,0,0,0,2,2,0,2,0,0,1,0,0,0,0,1,1]; //
    DavideParon24.stats_semi =          [0,0,1,0,1,0,0,1,0,1,0,2,0,0,0,0,0,1,1]; // 6
    AlessioFurlan24.stats_semi =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 10
    MichaelMargarit24.stats_semi =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; //
    SebastianoTonizzo24.stats_semi =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]; // 5
    //                                 | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =                PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                                 | | | | | | | | | | | | | | | | | | | 
    DanieleGanzit24.stats_semi =        [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3]; // 
    GiacomoSilvestri24.stats_semi =     [0,0,1,0,1,0,0,1,0,1,0,2,0,0,0,0,0,1,3]; // 9
    VittorioGri24.stats_semi =          [0,0,2,0,1,0,0,2,0,2,1,0,0,2,0,0,0,1,3]; // 11
    VittorioBasso24.stats_semi =        [0,4,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,3]; // 8
    AlessandroRizzi24.stats_semi =      [0,3,2,0,1,0,0,2,1,3,1,0,2,0,0,0,0,1,3]; // 10
    MassimoBaldassi24.stats_semi =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 
    GabrieleMiani24.stats_semi =        [0,4,0,0,4,3,0,10,0,0,4,2,0,0,0,1,0,1,3]; // 14
    MarcoMarchetti24.stats_semi =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 
    MarcoLombardo24.stats_semi =        [0,2,2,0,0,1,3,1,2,3,1,0,1,0,0,0,0,1,4]; // 15
    //     gx24_stats =                PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    MicheleVendrame24.stats_semi =      [0,0,5,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,2]; // 13
    LorenzoSchinella24.stats_semi =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 3
    GioeleTudini24.stats_semi =         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 7
    FilippoPasquon24.stats_semi =       [0,0,1,0,0,0,0,1,1,2,2,0,2,0,0,0,0,1,2]; // 2
    TommasoMartello24.stats_semi =      [0,0,0,0,1,3,1,0,0,0,0,2,1,0,0,0,0,1,2]; // 16
    MarcoRizzi24.stats_semi =           [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,2]; // 6
    DavidGaspardo24.stats_semi =        [0,2,0,3,5,3,1,5,0,5,1,1,0,0,0,0,0,1,2]; // 19
    AntonioGri24.stats_semi =           [0,1,0,0,2,1,1,0,0,0,0,1,0,0,0,0,0,1,2]; // 5
    RiccardoSchinella24.stats_semi =    [0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1,3]; // 1
    //                                 | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =                PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                                 | | | | | | | | | | | | | | | | | | | 
    SimoneMartinelli24.stats_semi =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 22
    MatteoSpagnolo24.stats_semi =       [0,1,2,0,2,0,0,2,0,2,0,1,1,0,0,0,0,0,2]; // 21
    DavideFaurlin24.stats_semi =        [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 18
    GiovanniTonizzo24.stats_semi =      [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2]; // 5
    AlessandroSant24.stats_semi =       [0,1,3,1,5,0,0,3,0,3,0,0,2,0,0,0,0,0,2]; // 7
    MatteoBazzaro24.stats_semi =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 1
    AlessandroSantin24.stats_semi =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 10
    AlessandroGalassi24.stats_semi =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 19
    PietroSoramel24.stats_semi =        [0,4,4,1,6,1,3,2,1,3,1,1,2,0,0,0,0,0,-1]; // 16
    //     gx24_stats =                PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    FilippoAgnoluzzi24.stats_semi =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 2
    EmanueleDaneluzzi24.stats_semi =    [0,1,1,0,0,0,0,1,2,3,1,1,1,0,0,0,0,0,2]; // 6
    LucaSoramel24.stats_semi =          [0,0,4,1,0,0,2,1,2,3,2,2,1,0,0,0,0,0,3]; // 12
    PaoloZorzi24.stats_semi =           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 9
    ChristianFedrizzi24.stats_semi =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 3
    FilippoSappa24.stats_semi =         [0,2,2,0,1,2,4,2,0,2,2,0,1,0,0,0,0,0,3]; // 15
    GiovanniZanin24.stats_semi =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 23
    EnricoSant24.stats_semi =           [0,0,1,2,2,0,0,4,0,4,1,3,1,0,0,0,0,0,5]; // 4
    StefanoPolano24.stats_semi =        [0,0,2,0,0,0,0,2,0,2,0,1,0,0,0,0,0,0,2]; // 17
    //                                   | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =                PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                                  | | | | | | | | | | | | | | | | | | | 
    MarcoPolo24.stats_semi =            [0,0,0,0,0,0,0,2,0,2,1,0,0,0,0,0,0,0,2]; // 15
    MarcoSerrao24.stats_semi =          [0,1,5,2,4,4,3,5,0,5,0,0,0,0,0,0,0,0,2]; // 8
    WilliamIob24.stats_semi =           [1,0,2,0,0,1,1,4,0,4,0,1,1,0,0,0,0,0,2]; // 12
    DavideBroggi24.stats_semi =         [0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 3
    AlexMicottis24.stats_semi =         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 21
    MassimilianoRossi24.stats_semi =    [0,3,0,0,1,0,0,5,0,0,0,3,0,0,0,0,0,0,2]; // 22
    MassimoMasotti24.stats_semi =       [0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 10
    EugenioDeTina24.stats_semi =        [0,0,0,0,2,0,0,0,0,0,0,1,1,0,0,0,0,0,2]; // 9
    LucaAnedda24.stats_semi =           [0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,3]; // 5
    DenisVanin24.stats_semi =           [0,0,2,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,2]; // 17
    //     gx24_stats =                PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    ThomasBaracetti24.stats_semi =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 2
    LucaGemo24.stats_semi =             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 6
    DiegoNata24.stats_semi =            [0,0,6,0,1,0,0,4,5,0,1,2,0,0,0,0,0,0,6]; // 19
    MattiaRoiatti24.stats_semi =        [3,0,0,1,1,0,0,2,0,2,0,0,0,0,0,0,0,0,3]; // 11
    EdoardoPicogna24.stats_semi =       [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 7
    MauroPerina24.stats_semi =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 18
    LorenzoMoro24.stats_semi =          [0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2]; // 14
    GionaTell24.stats_semi =            [0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2]; // 4
    IacopoPivetta24.stats_semi =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]; // 20
    MattiaMasotti24.stats_semi =        [0,3,2,1,1,1,4,2,1,3,1,4,3,1,0,0,0,0,2]; // 13
    //                                 | | | | | | | | | | | | | | | | | | | 
    //     gx24_stats =                PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx24_stats =                  |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|

   
//qui si potrebbe fare uno script che prende il copia da excel (FG800) e fa gli array, anche chatGPT lo fa da solo
    MassimilianoMoretti24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
    AndreaMoretti24.stats_td3 = [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    LarryTrevisan24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    AlessandroCostantini24.stats_td3 = [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MatteoMargarit24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MauroCuridori24.stats_td3 = [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    ChristianZanet24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    GiacomoPiacentini24.stats_td3 = [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0];
    GiovanniDalFarra24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MiracleObichukwu24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    LucaDellaLonga24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    AlessandroRojatti24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MicheleGorasso24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    GiacomoFerigo24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    UmbertoNobile24.stats_td3 = [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    DevinChiarcos24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    ValentinoCigainero24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MicheleDeAnna24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    DavideParon24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    AlessioFurlan24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MichaelMargarit24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    SebastianoTonizzo24.stats_td3 = [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    DanieleGanzit24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    GiacomoSilvestri24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
    VittorioGri24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
    VittorioBasso24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    AlessandroRizzi24.stats_td3 = [1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
    MassimoBaldassi24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    GabrieleMiani24.stats_td3 = [1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 3];
    MarcoMarchetti24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MarcoLombardo24.stats_td3 = [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 5];
    MicheleVendrame24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    LorenzoSchinella24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    GioeleTudini24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    FilippoPasquon24.stats_td3 = [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
    TommasoMartello24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    MarcoRizzi24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    DavidGaspardo24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    AntonioGri24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    RiccardoSchinella24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    SimoneMartinelli24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MatteoSpagnolo24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    DavideFaurlin24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    GiovanniTonizzo24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
    AlessandroSant24.stats_td3 = [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0];
    MatteoBazzaro24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    AlessandroSantin24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    AlessandroGalassi24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    PietroSoramel24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    FilippoAgnoluzzi24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    EmanueleDaneluzzi24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    LucaSoramel24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    PaoloZorzi24.stats_td3 = [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    ChristianFedrizzi24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    FilippoSappa24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    GiovanniZanin24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    EnricoSant24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    StefanoPolano24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    MarcoPolo24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MarcoSerrao24.stats_td3 = [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    WilliamIob24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
    DavideBroggi24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    AlexMicottis24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MassimilianoRossi24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MassimoMasotti24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    EugenioDeTina24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    LucaAnedda24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    DenisVanin24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    ThomasBaracetti24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    LucaGemo24.stats_td3 = [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    DiegoNata24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MattiaRoiatti24.stats_td3 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0];
    EdoardoPicogna24.stats_td3 = [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    MauroPerina24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    LorenzoMoro24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
    GionaTell24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    IacopoPivetta24.stats_td3 = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    MattiaMasotti24.stats_td3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    




//fatti da script pulisci_class_esistente.py che finisce in init_fantateam_js:
MassimilianoMoretti24.stats_final = [12, 4, 5, 1, 6, 1, 4, 3, 3, 6, 3, 1, 2, 0, 0, 0, 0, 1, 1];
AndreaMoretti24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
LarryTrevisan24.stats_final = [23, 7, 5, 3, 1, 0, 0, 2, 1, 3, 1, 1, 2, 3, 0, 0, 0, 1, 0];
AlessandroCostantini24.stats_final = [3, 0, 5, 1, 4, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0];
MatteoMargarit24.stats_final = [12, 5, 3, 0, 0, 2, 0, 5, 3, 8, 0, 2, 0, 0, 0, 0, 0, 1, 0];
MauroCuridori24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
ChristianZanet24.stats_final = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0];
GiacomoPiacentini24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1];
GiovanniDalFarra24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
MiracleObichukwu24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
LucaDellaLonga24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
AlessandroRojatti24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
MicheleGorasso24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
GiacomoFerigo24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
UmbertoNobile24.stats_final = [11, 4, 4, 0, 1, 3, 1, 6, 1, 7, 2, 0, 2, 0, 0, 0, 0, 1, -3];
DevinChiarcos24.stats_final = [4, 2, 2, 0, 1, 0, 0, 0, 4, 4, 1, 0, 1, 0, 0, 0, 0, 1, 0];
ValentinoCigainero24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
MicheleDeAnna24.stats_final = [5, 2, 3, 0, 1, 1, 1, 1, 3, 4, 1, 2, 0, 1, 0, 0, 0, 1, 0];
DavideParon24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
AlessioFurlan24.stats_final = [2, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
MichaelMargarit24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
SebastianoTonizzo24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
DanieleGanzit24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
GiacomoSilvestri24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
VittorioGri24.stats_final = [2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0];
VittorioBasso24.stats_final = [5, 1, 1, 1, 2, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0];
AlessandroRizzi24.stats_final = [8, 4, 4, 0, 3, 0, 1, 1, 0, 1, 3, 2, 0, 1, 0, 0, 0, 0, 0];
MassimoBaldassi24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
GabrieleMiani24.stats_final = [31, 5, 4, 4, 2, 9, 1, 9, 4, 13, 2, 1, 0, 0, 0, 1, 0, 0, 0];
MarcoMarchetti24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
MarcoLombardo24.stats_final = [10, 3, 5, 0, 0, 4, 1, 2, 2, 4, 0, 1, 0, 0, 0, 0, 0, 0, 5];
MicheleVendrame24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
LorenzoSchinella24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
GioeleTudini24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
FilippoPasquon24.stats_final = [0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
TommasoMartello24.stats_final = [5, 0, 1, 1, 0, 2, 4, 1, 1, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0];
MarcoRizzi24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
DavidGaspardo24.stats_final = [8, 2, 6, 1, 5, 1, 0, 6, 0, 6, 1, 5, 0, 0, 0, 0, 0, 0, 0];
AntonioGri24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
RiccardoSchinella24.stats_final = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];



    //QUI SARANNO DA DARE TUTTI I PUNTEGGI DI TUTTI I GIOCATORI IN TUTTE LE GIORNATE
    

    
    // GIORNATA 2
    // MassimilianoMoretti.g2 = 8;
    // AndreaMoretti.g2 = 4.75;
    // LarryTrevisan.g2 = 4.75;
    // AlessandroCostantini.g2 = 22.75;
    // MatteoMargarit.g2 = 13.5;
    // MauroCuridori.g2 = 2;
    // ChristianZanet.g2 = 3.75;
    // GiacomoPiacentini.g2 = -1.25;
    // GiovanniDalFarra.g2 = -0.5;
    // MiracleObichukwu.g2 = 0.5;
    // LucaDellaLonga.g2 = 2.25;
    // AlessandroRojatti.g2 = 2;
    // MicheleGorasso.g2 = 2;
    // GiacomoFerigo.g2 = 1;
    // UmbertoNobile.g2 = 25;
    // DevinChiarcos.g2 = 4.25;
    // ValentinoCigainero.g2 = 2;
    // MicheleDeAnna.g2 = 2;
    // DavideParon.g2 = 5.75;
    // AlessioFurlan.g2 = 5;
    // MichaelMargarit.g2 = 2;
    // SebastianoTonizzo.g2 = 2;

    // DanieleGanzit.g2 = 0;
    // GiacomoSilvestri.g2 = 11.75;
    // VittorioGri.g2 = 0;
    // VittorioBasso.g2 = 3.75;
    // AlessandroRizzi.g2 = 8.25;
    // MassimoBaldassi.g2 = 0;
    // GabrieleMiani.g2 = 0;
    // MarcoMarchetti.g2 = 0;
    // MarcoLombardo.g2 = 10.75;
    // MicheleVendrame.g2 = 10;
    // LorenzoSchinella.g2 = 1;
    // GioeleTudini.g2 = 0.75;
    // FilippoPasquon.g2 = -1.25;
    // TommasoMartello.g2 = 3.5;
    // MarcoRizzi.g2 = 2.5;
    // DavidGaspardo.g2 = 11;
    // AntonioGri.g2 = 1.25;
    // RiccardoSchinella.g2 = 0;

    // SimoneMartinelli.g2 = 0;
    // MatteoSpagnolo.g2 = 9.25;
    // DavideFaurlin.g2 = 1.25;
    // GiovanniTonizzo.g2 = 2.25;
    // AlessandroSant.g2 = 8.75;
    // MatteoBazzaro.g2 = 2;
    // AlessandroSantin.g2 = 1.25;
    // AlessandroGalassi.g2 = 2;
    // PietroSoramel.g2 = 12;
    // FilippoAgnoluzzi.g2 = 2;
    // EmanueleDaneluzzi.g2 = 0.25;
    // LucaSoramel.g2 = 9;
    // PaoloZorzi.g2 = 2;
    // ChristianFedrizzi.g2 = 3.5;
    // FilippoSappa.g2 = 34.5;
    // GiovanniZanin.g2 = 17.25;
    // EnricoSant.g2 = 2;
    // StefanoPolano.g2 = 3.5;

    // MarcoPolo.g2 = 1.25;
    // MarcoSerrao.g2 = 22.25;
    // WilliamIob.g2 = 3;
    // DavideBroggi.g2 = -1.25;
    // AlexMicottis.g2 = 4;
    // MassimilianoRossi.g2 = 15.5;
    // MassimoMasotti.g2 = 2;
    // EugenioDeTina.g2 = 5.5;
    // LucaAnedda.g2 = 3;
    // DenisVanin.g2 = 4;
    // ThomasBaracetti.g2 = 3;
    // LucaGemo.g2 = 2;
    // DiegoNata.g2 = 35;
    // MattiaRoiatti.g2 = 3;
    // EdoardoPicogna.g2 = 1.75;
    // MauroPerina.g2 = 3;
    // LorenzoMoro.g2 = 3.75;
    // GionaTell.g2 = 2;
    // IacopoPivetta.g2 = 0.25;
    // MattiaMasotti.g2 = 7.75;


    // GIORNATA 3
 


    const players = [MassimilianoMoretti24, AndreaMoretti24, LarryTrevisan24, AlessandroCostantini24, MatteoMargarit24, 
        MauroCuridori24, ChristianZanet24, GiacomoPiacentini24, GiovanniDalFarra24, MiracleObichukwu24, LucaDellaLonga24, 
        AlessandroRojatti24, MicheleGorasso24, GiacomoFerigo24, UmbertoNobile24, DevinChiarcos24, ValentinoCigainero24, 
        MicheleDeAnna24, DavideParon24, AlessioFurlan24, MichaelMargarit24, SebastianoTonizzo24, 

        DanieleGanzit24, GiacomoSilvestri24, VittorioGri24, VittorioBasso24, AlessandroRizzi24, MassimoBaldassi24, 
        GabrieleMiani24, MarcoMarchetti24, MarcoLombardo24, MicheleVendrame24, LorenzoSchinella24, GioeleTudini24, 
        FilippoPasquon24, TommasoMartello24, MarcoRizzi24, DavidGaspardo24, AntonioGri24, RiccardoSchinella24,

        SimoneMartinelli24, MatteoSpagnolo24, DavideFaurlin24, GiovanniTonizzo24, AlessandroSant24, MatteoBazzaro24, 
        AlessandroSantin24, AlessandroGalassi24, PietroSoramel24, FilippoAgnoluzzi24, EmanueleDaneluzzi24, LucaSoramel24, 
        PaoloZorzi24, ChristianFedrizzi24, FilippoSappa24, GiovanniZanin24, EnricoSant24, StefanoPolano24,

        MarcoPolo24, MarcoSerrao24, WilliamIob24, DavideBroggi24, AlexMicottis24, MassimilianoRossi24, MassimoMasotti24, 
        EugenioDeTina24, LucaAnedda24, DenisVanin24, ThomasBaracetti24, LucaGemo24, DiegoNata24, MattiaRoiatti24, 
        EdoardoPicogna24, MauroPerina24, LorenzoMoro24, GionaTell24, IacopoPivetta24, MattiaMasotti24 ];


        // Funzione per calcolare il prodotto scalare
    function sumProduct(array1, array2) {
        return array1.reduce((sum, a, i) => sum + a * array2[i], 0);
    }



    //                   0    1   2   3    4   5   6    7   8    9     10  11  12  13  14   15  16  17   18
    // gx_stats =      [PTS, 2P, 2Px, 3P, 3Px, FT, FTx, DR, OR, Rtot, ASS, TO, ST, BL, EXP, DD, TD, Win, Meme]
    const pdkWeights = [1, 0, -0.75, 0.5, -0.75, 0, -0.5, 1, 1.25,  0, 1.5, -1, 1.5, 1.5, -3,  3,  6,   2,  1];

    //                   0    1       2        3       4       5       6     7    8    9    10     11     12
    // td3_stats=    [part, nopart, passa1, passa2, passa3, passa4, finale, 3rd, 2nd, 1st, 0su10, ciab, altri meme]
    const td3Weights = [1,   -5,      1,       1,      2,      2,     3,      5,   10, 20,  -2,    1  ,    1     ];
    // Calcola g1 per ogni giocatore
    for (let player of players) {
        // Calcola PTS (player.stats_g1[0])
        player.stats_g1[0] = player.stats_g1[1] * 2 + player.stats_g1[3] * 3 + player.stats_g1[5];
        
        // Calcola Rtot (player.stats_g1[9])
        player.stats_g1[9] = player.stats_g1[7] + player.stats_g1[8];
    
        // Calcolo DD e TD
        const valuesToCheck = [player.stats_g1[0], player.stats_g1[9], player.stats_g1[10], player.stats_g1[12], player.stats_g1[13]];
        const countGreaterThanNine = valuesToCheck.filter(value => value > 9).length;
        
        // Imposta player.stats_g1[15] e player.stats_g1[16]
        player.stats_g1[15] = countGreaterThanNine >= 2 ? 1 : 0;
        player.stats_g1[16] = countGreaterThanNine >= 3 ? 1 : 0;
    
        // Calcola g1 utilizzando sumProduct
        player.g1 = sumProduct(player.stats_g1, pdkWeights);
    
        // Ripeti per g2, g3, semi, final
        // Per semplicità, i calcoli di PTS e Rtot sono gli stessi, solo cambiando l'array di riferimento (player.stats_g2, player.stats_g3, ecc.)
        //da scommentare altre giornate
        player.stats_g2[0] = player.stats_g2[1] * 2 + player.stats_g2[3] * 3 + player.stats_g2[5];
        player.stats_g2[9] = player.stats_g2[7] + player.stats_g2[8];
        const valuesToCheckG2 = [player.stats_g2[0], player.stats_g2[9], player.stats_g2[10], player.stats_g2[12], player.stats_g2[13]];
        const countGreaterThanNineG2 = valuesToCheckG2.filter(value => value > 9).length;
        player.stats_g2[15] = countGreaterThanNineG2 >= 2 ? 1 : 0;
        player.stats_g2[16] = countGreaterThanNineG2 >= 3 ? 1 : 0;
        player.g2 = sumProduct(player.stats_g2, pdkWeights);
    
        player.stats_g3[0] = player.stats_g3[1] * 2 + player.stats_g3[3] * 3 + player.stats_g3[5];
        player.stats_g3[9] = player.stats_g3[7] + player.stats_g3[8];
        const valuesToCheckG3 = [player.stats_g3[0], player.stats_g3[9], player.stats_g3[10], player.stats_g3[12], player.stats_g3[13]];
        const countGreaterThanNineG3 = valuesToCheckG3.filter(value => value > 9).length;
        player.stats_g3[15] = countGreaterThanNineG3 >= 2 ? 1 : 0;
        player.stats_g3[16] = countGreaterThanNineG3 >= 3 ? 1 : 0;
        player.g3 = sumProduct(player.stats_g3, pdkWeights);
    
        player.stats_semi[0] = player.stats_semi[1] * 2 + player.stats_semi[3] * 3 + player.stats_semi[5];
        player.stats_semi[9] = player.stats_semi[7] + player.stats_semi[8];
        const valuesToCheckSemi = [player.stats_semi[0], player.stats_semi[9], player.stats_semi[10], player.stats_semi[12], player.stats_semi[13]];
        const countGreaterThanNineSemi = valuesToCheckSemi.filter(value => value > 9).length;
        player.stats_semi[15] = countGreaterThanNineSemi >= 2 ? 1 : 0;
        player.stats_semi[16] = countGreaterThanNineSemi >= 3 ? 1 : 0;
        player.semi = sumProduct(player.stats_semi, pdkWeights);
    
        player.td3 = sumProduct(player.stats_td3, td3Weights);

        player.stats_final[0] = player.stats_final[1] * 2 + player.stats_final[3] * 3 + player.stats_final[5];
        player.stats_final[9] = player.stats_final[7] + player.stats_final[8];
        const valuesToCheckFinal = [player.stats_final[0], player.stats_final[9], player.stats_final[10], player.stats_final[12], player.stats_final[13]];
        const countGreaterThanNineFinal = valuesToCheckFinal.filter(value => value > 9).length;
        player.stats_final[15] = countGreaterThanNineFinal >= 2 ? 1 : 0;
        player.stats_final[16] = countGreaterThanNineFinal >= 3 ? 1 : 0;
        player.final = sumProduct(player.stats_final, pdkWeights);

    }
// MassimilianoMoretti24.td3 = 3
// AndreaMoretti24.td3 = 5
// LarryTrevisan24.td3 = -5
// AlessandroCostantini24.td3 = 3
// MatteoMargarit24.td3 = -5
// MauroCuridori24.td3 = 5
// ChristianZanet24.td3 = 2
// GiacomoPiacentini24.td3 = 10
// GiovanniDalFarra24.td3 = -5
// MiracleObichukwu24.td3 = -5
// LucaDellaLonga24.td3 = -5
// AlessandroRojatti24.td3 = -5
// MicheleGorasso24.td3 = -5
// GiacomoFerigo24.td3 = -5
// UmbertoNobile24.td3 = 5
// DevinChiarcos24.td3 = 0
// ValentinoCigainero24.td3 = -5
// MicheleDeAnna24.td3 = -5
// DavideParon24.td3 = 0
// AlessioFurlan24.td3 = -5
// MichaelMargarit24.td3 = -5
// SebastianoTonizzo24.td3 = 5
// DanieleGanzit24.td3 = -5
// GiacomoSilvestri24.td3 = 2
// VittorioGri24.td3 = 3
// VittorioBasso24.td3 = 2
// AlessandroRizzi24.td3 = 15
// MassimoBaldassi24.td3 = -5

// MarcoMarchetti24.td3 = -5
// MarcoLombardo24.td3 = 7
// MicheleVendrame24.td3 = -5
// LorenzoSchinella24.td3 = -5
// GioeleTudini24.td3 = -5
// FilippoPasquon24.td3 = 7
// TommasoMartello24.td3 = -1
// MarcoRizzi24.td3 = 1
// DavidGaspardo24.td3 = -5
// AntonioGri24.td3 = -5
// RiccardoSchinella24.td3 = -1
// SimoneMartinelli24.td3 = -5
// MatteoSpagnolo24.td3 = -1
// DavideFaurlin24.td3 = -5
// GiovanniTonizzo24.td3 = 2
// AlessandroSant24.td3 = 11
// MatteoBazzaro24.td3 = 2
// AlessandroSantin24.td3 = 0
// AlessandroGalassi24.td3 = -5
// PietroSoramel24.td3 = -1
// FilippoAgnoluzzi24.td3 = -5
// EmanueleDaneluzzi24.td3 = -5
// LucaSoramel24.td3 = 2
// PaoloZorzi24.td3 = 1
// ChristianFedrizzi24.td3 = -1
// FilippoSappa24.td3 = -5
// GiovanniZanin24.td3 = -5
// EnricoSant24.td3 = 2
// StefanoPolano24.td3 = 0
// MarcoPolo24.td3 = -5
// MarcoSerrao24.td3 = 5
// WilliamIob24.td3 = 2
// DavideBroggi24.td3 = 1
// AlexMicottis24.td3 = 2
// MassimilianoRossi24.td3 = 2
// MassimoMasotti24.td3 = 0
// EugenioDeTina24.td3 = 2
// LucaAnedda24.td3 = 1
// DenisVanin24.td3 = -5
// ThomasBaracetti24.td3 = -5
// LucaGemo24.td3 = 3
// DiegoNata24.td3 = -5
// MattiaRoiatti24.td3 = 1
// EdoardoPicogna24.td3 = 1
// MauroPerina24.td3 = -5
// LorenzoMoro24.td3 = -1
// GionaTell24.td3 = -5
// IacopoPivetta24.td3 = -5
// MattiaMasotti24.td3 = 1

// Calcola le statistiche medie

    //FINALE punteggi medi
SimoneMartinelli24.final = Math.round(-0.88 * 100) / 100;
MatteoSpagnolo24.final = Math.round(6.38 * 100) / 100;
DavideFaurlin24.final = Math.round(0.38 * 100) / 100;
GiovanniTonizzo24.final = Math.round(0.50 * 100) / 100;
AlessandroSant24.final = Math.round(3.94 * 100) / 100;
MatteoBazzaro24.final = Math.round(0.56 * 100) / 100;
AlessandroSantin24.final = Math.round(1.50 * 100) / 100;
AlessandroGalassi24.final = Math.round(0.63 * 100) / 100;
PietroSoramel24.final = Math.round(9.19 * 100) / 100;
FilippoAgnoluzzi24.final = Math.round(1.38 * 100) / 100;
EmanueleDaneluzzi24.final = Math.round(3.69 * 100) / 100;
LucaSoramel24.final = Math.round(4.44 * 100) / 100;
PaoloZorzi24.final = Math.round(2.13 * 100) / 100;
ChristianFedrizzi24.final = Math.round(0.94 * 100) / 100;
FilippoSappa24.final = Math.round(20.13 * 100) / 100;
GiovanniZanin24.final = Math.round(6.31 * 100) / 100;
EnricoSant24.final = Math.round(4.19 * 100) / 100;
StefanoPolano24.final = Math.round(2.08 * 100) / 100;
MarcoPolo24.final = Math.round(2.44 * 100) / 100;
MarcoSerrao24.final = Math.round(13.88 * 100) / 100;
WilliamIob24.final = Math.round(6.44 * 100) / 100;
DavideBroggi24.final = Math.round(3.38 * 100) / 100;
AlexMicottis24.final = Math.round(2.31 * 100) / 100;
MassimilianoRossi24.final = Math.round(6.75 * 100) / 100;
MassimoMasotti24.final = Math.round(1.19 * 100) / 100;
EugenioDeTina24.final = Math.round(1.94 * 100) / 100;
LucaAnedda24.final = Math.round(4.00 * 100) / 100;
DenisVanin24.final = Math.round(3.63 * 100) / 100;
ThomasBaracetti24.final = Math.round(1.75 * 100) / 100;
LucaGemo24.final = Math.round(1.38 * 100) / 100;
DiegoNata24.final = Math.round(22.00 * 100) / 100;
MattiaRoiatti24.final = Math.round(4.13 * 100) / 100;
EdoardoPicogna24.final = Math.round(0.75 * 100) / 100;
MauroPerina24.final = Math.round(2.00 * 100) / 100;
LorenzoMoro24.final = Math.round(2.44 * 100) / 100;
GionaTell24.final = Math.round(1.50 * 100) / 100;
IacopoPivetta24.final = Math.round(1.31 * 100) / 100;
MattiaMasotti24.final = Math.round(8.75 * 100) / 100;

    // Ciclo for per calcolare player.tot per ogni giocatore
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        player.tot = Math.round((player.g1 + player.g2 + player.g3 + player.semi + player.td3 + player.final)*100)/100;
    };
    //
    function createFantateam(teamIndex, teamName, rione, players) {
        const fantateam = {
            ...fantateam_type,
            team_index: teamIndex,
            name: teamName,
            rione: { ...rione },
            p1: { ...players[0] },
            p2: { ...players[1] },
            p3: { ...players[2] },
            p4: { ...players[3] },
            p5: { ...players[4] },
        };
        
        fantateam.total_cost = fantateam.p1.cost + fantateam.p2.cost + fantateam.p3.cost + fantateam.p4.cost + fantateam.p5.cost;
        fantateam.tot_g1 = fantateam.p1.g1 + fantateam.p2.g1 + fantateam.p3.g1 + fantateam.p4.g1 + fantateam.p5.g1;
        fantateam.tot_g2 = fantateam.p1.g2 + fantateam.p2.g2 + fantateam.p3.g2 + fantateam.p4.g2 + fantateam.p5.g2;
        fantateam.tot_g3 = fantateam.p1.g3 + fantateam.p2.g3 + fantateam.p3.g3 + fantateam.p4.g3 + fantateam.p5.g3;
        fantateam.tot_semi = fantateam.p1.semi + fantateam.p2.semi + fantateam.p3.semi + fantateam.p4.semi + fantateam.p5.semi;
        fantateam.tot_td3 = fantateam.p1.td3 + fantateam.p2.td3 + fantateam.p3.td3 + fantateam.p4.td3 + fantateam.p5.td3;
        fantateam.tot_final = fantateam.p1.final + fantateam.p2.final + fantateam.p3.final + fantateam.p4.final + fantateam.p5.final;
        fantateam.tot_team = fantateam.p1.tot + fantateam.p2.tot + fantateam.p3.tot + fantateam.p4.tot + fantateam.p5.tot + fantateam.rione.final_points;
    
        return fantateam;
    }
//fatti da script pulisci_class_esistente.py che finisce in init_fantateam_js
const ft1 = createFantateam(1, "Burritos Picantes", EST, [EdoardoPicogna24, WilliamIob24, FilippoSappa24, UmbertoNobile24, MatteoSpagnolo24]);
const ft2 = createFantateam(2, "Nord", NORD, [AlessandroRizzi24, DevinChiarcos24, UmbertoNobile24, GiacomoFerigo24, AlessandroSant24]);
const ft3 = createFantateam(3, "Festainvigna", WEST, [FilippoAgnoluzzi24, UmbertoNobile24, MatteoSpagnolo24, MassimilianoMoretti24, PaoloZorzi24]);
const ft4 = createFantateam(4, "Pangri", EST, [MarcoRizzi24, AlessioFurlan24, UmbertoNobile24, MassimilianoMoretti24, MarcoPolo24]);
const ft5 = createFantateam(5, "Zoo_Rehab", WEST, [DavidGaspardo24, UmbertoNobile24, DevinChiarcos24, GiacomoPiacentini24, FilippoPasquon24]);
const ft6 = createFantateam(6, "Nordes (vincitore)", NORD, [DiegoNata24, FilippoPasquon24, UmbertoNobile24, LucaAnedda24, DevinChiarcos24]);
const ft7 = createFantateam(7, "Estateam", EST, [SimoneMartinelli24, UmbertoNobile24, MattiaMasotti24, FilippoSappa24, FilippoPasquon24]);
const ft8 = createFantateam(8, "stirati", NORD, [UmbertoNobile24, AlessandroSant24, FilippoPasquon24, MiracleObichukwu24, LarryTrevisan24]);
const ft9 = createFantateam(9, "emosbobna", NORD, [DevinChiarcos24, MarcoLombardo24, GiovanniZanin24, MattiaRoiatti24, PietroSoramel24]);
const ft10 = createFantateam(10, "Gabro's top team", WEST, [UmbertoNobile24, AlessandroCostantini24, MarcoSerrao24, MiracleObichukwu24, EnricoSant24]);
const ft11 = createFantateam(11, "oilapledecoval", NORD, [AlessandroSantin24, MarcoMarchetti24, DavidGaspardo24, UmbertoNobile24, PietroSoramel24]);
const ft12 = createFantateam(12, "Armata Rossa", NORD, [MarcoRizzi24, MassimilianoMoretti24, UmbertoNobile24, MassimilianoRossi24, LucaAnedda24]);
const ft13 = createFantateam(13, "La Betty", WEST, [EmanueleDaneluzzi24, MassimilianoMoretti24, PietroSoramel24, EdoardoPicogna24, MiracleObichukwu24]);
const ft14 = createFantateam(14, "Estinti", WEST, [UmbertoNobile24, AlessandroCostantini24, AlessandroSant24, MauroPerina24, MarcoMarchetti24]);
const ft15 = createFantateam(15, "C&C", SUD, [FilippoSappa24, LorenzoMoro24, PietroSoramel24, EnricoSant24, DanieleGanzit24]);
const ft16 = createFantateam(16, "🦀", WEST, [PietroSoramel24, MassimilianoMoretti24, AlessioFurlan24, LucaSoramel24, MarcoRizzi24]);
const ft17 = createFantateam(17, "Melinda", NORD, [PietroSoramel24, LucaSoramel24, MassimilianoMoretti24, AlessioFurlan24, AndreaMoretti24]);
const ft18 = createFantateam(18, "Winxclub", EST, [AlessioFurlan24, MassimilianoMoretti24, LucaSoramel24, PietroSoramel24, LucaAnedda24]);
const ft19 = createFantateam(19, "tnerb", SUD, [MassimilianoMoretti24, GiovanniTonizzo24, PietroSoramel24, MarcoPolo24, MatteoSpagnolo24]);
const ft20 = createFantateam(20, "Prime time players", WEST, [LarryTrevisan24, MarcoSerrao24, UmbertoNobile24, FilippoPasquon24, LorenzoMoro24]);
const ft21 = createFantateam(21, "Golden Cod Cepe’s Warriors", SUD, [AntonioGri24, GiovanniZanin24, MiracleObichukwu24, FilippoSappa24, GiovanniTonizzo24]);
const ft22 = createFantateam(22, "sustovich", WEST, [MiracleObichukwu24, MassimilianoMoretti24, LucaSoramel24, AndreaMoretti24, PietroSoramel24]);
const ft23 = createFantateam(23, "Groviscrazia", WEST, [PietroSoramel24, LucaSoramel24, MiracleObichukwu24, MicheleVendrame24, MassimilianoMoretti24]);
const ft24 = createFantateam(24, "DEVIN", WEST, [MassimilianoMoretti24, GiacomoPiacentini24, DevinChiarcos24, VittorioBasso24, FilippoPasquon24]);
const ft25 = createFantateam(25, "Mia", WEST, [DavideParon24, MassimilianoMoretti24, DevinChiarcos24, MattiaMasotti24, FilippoPasquon24]);
const ft26 = createFantateam(26, "Goggo Bello", WEST, [AlessandroSant24, MiracleObichukwu24, UmbertoNobile24, TommasoMartello24, GionaTell24]);
const ft27 = createFantateam(27, "Rione Muscletto", NORD, [GioeleTudini24, FilippoSappa24, LarryTrevisan24, AlessandroSant24, AlessandroRojatti24]);
const ft28 = createFantateam(28, "Oklahoma city tinder", WEST, [DevinChiarcos24, MattiaRoiatti24, MattiaMasotti24, FilippoPasquon24, MassimilianoMoretti24]);
const ft29 = createFantateam(29, "Mau", WEST, [EnricoSant24, MauroCuridori24, GiacomoSilvestri24, FilippoSappa24, AlessandroRizzi24]);
const ft30 = createFantateam(30, "SuperOne", WEST, [AndreaMoretti24, MicheleDeAnna24, MassimilianoMoretti24, MiracleObichukwu24, MicheleGorasso24]);
const ft31 = createFantateam(31, "Liam", NORD, [MattiaMasotti24, MassimilianoMoretti24, EnricoSant24, MassimoMasotti24, DevinChiarcos24]);
const ft32 = createFantateam(32, "Flacko the sheriff", WEST, [MicheleVendrame24, MassimilianoMoretti24, MattiaRoiatti24, PietroSoramel24, ValentinoCigainero24]);
const ft33 = createFantateam(33, "Ghetto boys", NORD, [MiracleObichukwu24, LarryTrevisan24, GiovanniTonizzo24, PietroSoramel24, DiegoNata24]);
const ft34 = createFantateam(34, "GIOGIZ", WEST, [GiacomoPiacentini24, GiacomoFerigo24, DevinChiarcos24, DavidGaspardo24, FilippoAgnoluzzi24]);
const ft35 = createFantateam(35, "After CapOstile", WEST, [SebastianoTonizzo24, MassimilianoMoretti24, LarryTrevisan24, MiracleObichukwu24, VittorioGri24]);
const ft36 = createFantateam(36, "Ringhio", WEST, [LucaSoramel24, MassimilianoMoretti24, LarryTrevisan24, AlessandroRojatti24, GiacomoFerigo24]);
const ft37 = createFantateam(37, "Matte", WEST, [GiacomoSilvestri24, MarcoSerrao24, LucaGemo24, FilippoSappa24, LarryTrevisan24]);
const ft38 = createFantateam(38, "Unavoltaerofortealchiosco!", WEST, [UmbertoNobile24, MarcoSerrao24, AlessandroRizzi24, GiacomoPiacentini24, MassimilianoRossi24]);
const ft39 = createFantateam(39, "Samu Masotti", EST, [DevinChiarcos24, AlessandroCostantini24, VittorioBasso24, FilippoPasquon24, DavideBroggi24]);
const ft40 = createFantateam(40, "Machico", NORD, [AndreaMoretti24, MassimilianoMoretti24, GiovanniTonizzo24, LucaAnedda24, PietroSoramel24]);
const ft41 = createFantateam(41, "Alto Moro", SUD, [ChristianZanet24, MicheleDeAnna24, UmbertoNobile24, FilippoPasquon24, MattiaMasotti24]);
const ft42 = createFantateam(42, "Fittofatto BC", NORD, [FilippoPasquon24, MassimilianoMoretti24, PietroSoramel24, MattiaRoiatti24, LucaAnedda24]);
const ft43 = createFantateam(43, "Caspinixx", SUD, [MarcoRizzi24, MassimilianoMoretti24, AndreaMoretti24, LucaSoramel24, PietroSoramel24]);
const ft44 = createFantateam(44, "Enea", NORD, [GabrieleMiani24, GiacomoFerigo24, DevinChiarcos24, VittorioBasso24, AntonioGri24]);
const ft45 = createFantateam(45, "TheFinalCut95", WEST, [AlessandroSant24, LucaSoramel24, DanieleGanzit24, UmbertoNobile24, EnricoSant24]);
const ft46 = createFantateam(46, "SEBA CENGA", WEST, [LucaDellaLonga24, DiegoNata24, AndreaMoretti24, UmbertoNobile24, DavideFaurlin24]);
const ft47 = createFantateam(47, "Carichi", NORD, [MiracleObichukwu24, AlessandroCostantini24, MatteoMargarit24, GiacomoPiacentini24, ChristianZanet24]);
const ft48 = createFantateam(48, "TheFinalCut95!", WEST, [AlessandroSant24, LucaSoramel24, DanieleGanzit24, UmbertoNobile24, EnricoSant24]);
const ft49 = createFantateam(49, "I Penny's Five", SUD, [MassimilianoRossi24, AlessandroRizzi24, TommasoMartello24, UmbertoNobile24, GiovanniTonizzo24]);
const ft50 = createFantateam(50, "Bmax", EST, [EnricoSant24, MattiaMasotti24, UmbertoNobile24, FilippoPasquon24, MarcoLombardo24]);
const ft51 = createFantateam(51, "Gli Sbronzatissimi", NORD, [GiovanniTonizzo24, UmbertoNobile24, AlessandroRizzi24, MarcoLombardo24, MattiaRoiatti24]);
const ft52 = createFantateam(52, "I belli", NORD, [LucaAnedda24, AlessandroRizzi24, PietroSoramel24, GiovanniTonizzo24, AlessandroCostantini24]);
const ft53 = createFantateam(53, "Golden shower", WEST, [MattiaMasotti24, AlessandroRizzi24, MatteoMargarit24, PietroSoramel24, MattiaRoiatti24]);
const ft54 = createFantateam(54, "DOZERS CONFEDERATI", SUD, [AlessandroSant24, AlessioFurlan24, AlessandroRizzi24, PietroSoramel24, LucaSoramel24]);
const ft55 = createFantateam(55, "Appalla", WEST, [VittorioBasso24, LucaDellaLonga24, AlessandroSant24, FilippoSappa24, MattiaMasotti24]);
const ft56 = createFantateam(56, "I pupetti", EST, [LucaSoramel24, AlessandroRizzi24, AlessandroCostantini24, VittorioGri24, PietroSoramel24]);
const ft57 = createFantateam(57, "The best", WEST, [GiacomoFerigo24, VittorioBasso24, GiovanniDalFarra24, TommasoMartello24, MassimilianoMoretti24]);
const ft58 = createFantateam(58, "Betta Zul", EST, [MattiaMasotti24, LucaDellaLonga24, MarcoSerrao24, FilippoSappa24, EnricoSant24]);
const ft59 = createFantateam(59, "Fil🥷", EST, [ThomasBaracetti24, ValentinoCigainero24, MassimilianoMoretti24, LarryTrevisan24, AlexMicottis24]);
const ft60 = createFantateam(60, "i Bolliti", SUD, [LarryTrevisan24, AlessandroCostantini24, DavidGaspardo24, MatteoSpagnolo24, AlessandroSantin24]);
const ft61 = createFantateam(61, "CT", NORD, [PietroSoramel24, GiovanniZanin24, TommasoMartello24, EnricoSant24, AntonioGri24]);
const ft62 = createFantateam(62, "I miracoli", WEST, [AlessandroSant24, AlessandroRizzi24, GiacomoPiacentini24, MattiaMasotti24, DevinChiarcos24]);
const ft63 = createFantateam(63, "Dr Tanzimat", SUD, [GiovanniZanin24, LucaSoramel24, PietroSoramel24, GiovanniTonizzo24, VittorioGri24]);
const ft64 = createFantateam(64, "Vichingo72", NORD, [LucaAnedda24, MassimilianoMoretti24, AlessandroCostantini24, MauroPerina24, MattiaRoiatti24]);
const ft65 = createFantateam(65, "ivan", NORD, [FilippoPasquon24, MiracleObichukwu24, AlessandroGalassi24, PietroSoramel24, AlessandroRizzi24]);
const ft66 = createFantateam(66, "Dusty Bottoms", WEST, [GiacomoPiacentini24, AlessandroCostantini24, LarryTrevisan24, MicheleDeAnna24, ChristianZanet24]);
const ft67 = createFantateam(67, "Spagnolo sposami", SUD, [SebastianoTonizzo24, MatteoSpagnolo24, MatteoMargarit24, DavideParon24, MichaelMargarit24]);
const ft68 = createFantateam(68, "Franta Palio", NORD, [FilippoSappa24, AlessandroRojatti24, AlessandroRizzi24, TommasoMartello24, GiovanniTonizzo24]);
const ft69 = createFantateam(69, "Nani del sud", SUD, [FilippoAgnoluzzi24, FilippoSappa24, LucaAnedda24, GiacomoSilvestri24, DavidGaspardo24]);
const ft70 = createFantateam(70, "Penelope's Team", SUD, [GiovanniTonizzo24, AlessandroSant24, MarcoPolo24, LucaSoramel24, FilippoSappa24]);
const ft71 = createFantateam(71, "Codroipen F.C.", WEST, [DavideParon24, DevinChiarcos24, GabrieleMiani24, EdoardoPicogna24, VittorioBasso24]);
const ft72 = createFantateam(72, "west solos", WEST, [MassimoMasotti24, MassimilianoMoretti24, GiacomoPiacentini24, MiracleObichukwu24, EnricoSant24]);
const ft73 = createFantateam(73, "Sud", SUD, [GiacomoPiacentini24, DevinChiarcos24, VittorioBasso24, EdoardoPicogna24, DavidGaspardo24]);
const ft74 = createFantateam(74, "NORDmania", NORD, [GioeleTudini24, MassimilianoMoretti24, FilippoPasquon24, MatteoSpagnolo24, MattiaMasotti24]);
const ft75 = createFantateam(75, "Ta qifsha pidhin", EST, [GionaTell24, AlessandroSantin24, MassimilianoMoretti24, MassimoBaldassi24, LarryTrevisan24]);
const ft76 = createFantateam(76, "Le bimbe di maso", EST, [MassimilianoMoretti24, MiracleObichukwu24, DenisVanin24, MassimoMasotti24, MattiaMasotti24]);
const ft77 = createFantateam(77, "DajeRoma", NORD, [TommasoMartello24, MiracleObichukwu24, DanieleGanzit24, MassimilianoMoretti24, LucaAnedda24]);
const ft78 = createFantateam(78, "👸🏼", NORD, [MattiaRoiatti24, MauroCuridori24, DanieleGanzit24, DiegoNata24, MatteoMargarit24]);
const ft79 = createFantateam(79, "Team17", WEST, [DanieleGanzit24, MassimilianoMoretti24, MattiaMasotti24, PaoloZorzi24, MassimilianoRossi24]);
const ft80 = createFantateam(80, "Trrr.... Non va!", SUD, [GiovanniTonizzo24, AlessandroSantin24, AlessandroSant24, DevinChiarcos24, DiegoNata24]);
const ft81 = createFantateam(81, "La Foca per una Codroipo Libera", NORD, [IacopoPivetta24, LarryTrevisan24, MiracleObichukwu24, ValentinoCigainero24, MarcoPolo24]);
const ft82 = createFantateam(82, "Non capisco di pallacanestro", NORD, [MatteoMargarit24, FilippoPasquon24, LucaGemo24, StefanoPolano24, GiovanniZanin24]);
const ft83 = createFantateam(83, "TEAM LG", NORD, [LucaGemo24, GiovanniZanin24, MatteoMargarit24, StefanoPolano24, EnricoSant24]);
const ft84 = createFantateam(84, "NonCapiscoNienteDiBasket", SUD, [StefanoPolano24, GiovanniZanin24, MatteoMargarit24, MassimilianoRossi24, DanieleGanzit24]);
const ft85 = createFantateam(85, "Nipponici", EST, [AndreaMoretti24, MattiaRoiatti24, DiegoNata24, AlessandroRizzi24, PietroSoramel24]);
const ft86 = createFantateam(86, "Massive Crash", EST, [LucaSoramel24, AlessandroSant24, PietroSoramel24, AlessandroRizzi24, AndreaMoretti24]);
const ft87 = createFantateam(87, "gigiovena", NORD, [GiovanniTonizzo24, PietroSoramel24, AlessandroRizzi24, MarcoSerrao24, VittorioGri24]);
const ft88 = createFantateam(88, "pausa giacomone", SUD, [ChristianFedrizzi24, VittorioGri24, MatteoSpagnolo24, PaoloZorzi24, DavidGaspardo24]);
const ft89 = createFantateam(89, "Michael Scott's Tots", NORD, [DavidGaspardo24, MiracleObichukwu24, AlessioFurlan24, DiegoNata24, MarcoPolo24]);
const ft90 = createFantateam(90, "ee4", SUD, [ValentinoCigainero24, MauroCuridori24, MicheleDeAnna24, MattiaMasotti24, TommasoMartello24]);
const ft91 = createFantateam(91, "Utopia (:", WEST, [AndreaMoretti24, AlessandroRojatti24, MarcoRizzi24, MassimilianoMoretti24, AlessandroRizzi24]);
const ft92 = createFantateam(92, "AirBall", EST, [AlessandroRojatti24, MassimilianoMoretti24, AlessandroRizzi24, AntonioGri24, LucaAnedda24]);
const ft93 = createFantateam(93, "Panade", NORD, [AntonioGri24, MassimilianoMoretti24, AlessandroRizzi24, AlessandroRojatti24, AndreaMoretti24]);
const ft94 = createFantateam(94, "DD", WEST, [MassimoMasotti24, MassimilianoMoretti24, AlessandroRizzi24, AntonioGri24, MatteoBazzaro24]);
const ft95 = createFantateam(95, "West4ever", WEST, [LucaSoramel24, MassimilianoMoretti24, AndreaMoretti24, EnricoSant24, StefanoPolano24]);
const ft96 = createFantateam(96, "Uoff", SUD, [MassimilianoMoretti24, MarcoRizzi24, LucaAnedda24, MattiaRoiatti24, AlessandroRizzi24]);
const ft97 = createFantateam(97, "SimoVinny", SUD, [ValentinoCigainero24, MassimilianoMoretti24, DavideFaurlin24, MattiaMasotti24, MarcoRizzi24]);
const ft98 = createFantateam(98, "Verità per GR", NORD, [MattiaRoiatti24, LucaAnedda24, MassimilianoMoretti24, MarcoRizzi24, FilippoPasquon24]);
const ft99 = createFantateam(99, "Maestro Shifu", NORD, [MattiaRoiatti24, MassimilianoMoretti24, AlessandroRizzi24, MarcoRizzi24, AndreaMoretti24]);
const ft100 = createFantateam(100, "A tutta birra", NORD, [MarcoRizzi24, LucaSoramel24, EugenioDeTina24, MassimilianoMoretti24, EnricoSant24]);
const ft101 = createFantateam(101, "Bitchass", WEST, [MarcoRizzi24, MassimilianoMoretti24, LucaAnedda24, LucaSoramel24, MattiaRoiatti24]);
const ft102 = createFantateam(102, "Azzzzz", EST, [GiovanniTonizzo24, ChristianZanet24, MicheleDeAnna24, MattiaRoiatti24, AlessandroCostantini24]);
const ft103 = createFantateam(103, "Super chicche", WEST, [LucaSoramel24, GiovanniTonizzo24, MarcoRizzi24, MassimilianoMoretti24, VittorioGri24]);
const ft104 = createFantateam(104, "il Fanto Padre", NORD, [LucaDellaLonga24, GiovanniZanin24, GiovanniTonizzo24, GiacomoPiacentini24, MarcoLombardo24]);
const ft105 = createFantateam(105, "dunk", WEST, [LucaSoramel24, PaoloZorzi24, ChristianFedrizzi24, EmanueleDaneluzzi24, FilippoAgnoluzzi24]);
const ft106 = createFantateam(106, "Vitellonseeee", SUD, [AlessandroSantin24, MattiaMasotti24, AlessandroSant24, GiacomoPiacentini24, AlessandroCostantini24]);
const ft107 = createFantateam(107, "Visca", NORD, [GiacomoSilvestri24, LarryTrevisan24, ChristianZanet24, MicheleDeAnna24, AlessandroRizzi24]);
const ft108 = createFantateam(108, "Ailantus", WEST, [MarcoRizzi24, MatteoMargarit24, ChristianZanet24, AlessandroRizzi24, MicheleDeAnna24]);
const ft109 = createFantateam(109, "Giangi", WEST, [ChristianFedrizzi24, GiacomoFerigo24, MicheleVendrame24, LorenzoSchinella24, DavideBroggi24]);
const ft110 = createFantateam(110, "PSYCHO P", NORD, [MarcoLombardo24, MarcoSerrao24, FilippoPasquon24, AlessandroCostantini24, VittorioBasso24]);
const ft111 = createFantateam(111, "fantadario", WEST, [LarryTrevisan24, FilippoPasquon24, AlessandroSant24, AlessandroGalassi24, MattiaMasotti24]);
const ft112 = createFantateam(112, "Leggende", NORD, [LarryTrevisan24, DanieleGanzit24, MarcoPolo24, MarcoSerrao24, AlessandroSant24]);
const ft113 = createFantateam(113, "Paperelle gay", EST, [EnricoSant24, WilliamIob24, AlessandroCostantini24, MarcoSerrao24, DenisVanin24]);
const ft114 = createFantateam(114, "CIPPI", NORD, [AlessandroCostantini24, VittorioGri24, LucaSoramel24, GionaTell24, AlessandroSant24]);
const ft115 = createFantateam(115, "Samu & Ema", EST, [AlessandroCostantini24, EnricoSant24, MattiaMasotti24, FilippoPasquon24, AlessandroRizzi24]);
const ft116 = createFantateam(116, "Robur Nazionale", WEST, [AlessandroRizzi24, MattiaMasotti24, MarcoSerrao24, MicheleDeAnna24, MiracleObichukwu24]);
const ft117 = createFantateam(117, "Giacomone", SUD, [MatteoSpagnolo24, ChristianZanet24, VittorioGri24, AlessandroSant24, WilliamIob24]);
const ft118 = createFantateam(118, "Team Canaja", NORD, [MarcoLombardo24, DiegoNata24, DanieleGanzit24, EnricoSant24, AlessioFurlan24]);
const ft119 = createFantateam(119, "Trrrr non va", SUD, [DiegoNata24, AndreaMoretti24, AlessioFurlan24, MarcoRizzi24, DavidGaspardo24]);
const ft120 = createFantateam(120, "Samu veni", SUD, [MiracleObichukwu24, AlessandroRizzi24, DavidGaspardo24, GioeleTudini24, MicheleDeAnna24]);
const ft121 = createFantateam(121, "Miangeles", NORD, [EdoardoPicogna24, FilippoPasquon24, RiccardoSchinella24, AlessandroSant24, GiovanniZanin24]);
const ft122 = createFantateam(122, "Amico di Simone Cengarle", NORD, [VittorioBasso24, MarcoLombardo24, DavidGaspardo24, MatteoBazzaro24, LarryTrevisan24]);
const ft123 = createFantateam(123, "Gabrindri", EST, [LucaSoramel24, AlessioFurlan24, FilippoPasquon24, DiegoNata24, MattiaMasotti24]);
const ft124 = createFantateam(124, "Olimpia Armadi", WEST, [MiracleObichukwu24, MarcoSerrao24, AlessandroSant24, MauroPerina24, AlessandroRizzi24]);
const ft125 = createFantateam(125, "PAMPA MENTALITY", SUD, [FilippoPasquon24, MattiaMasotti24, ChristianZanet24, MiracleObichukwu24, DiegoNata24]);
const ft126 = createFantateam(126, "Axeliathepoliceofficer", EST, [MatteoBazzaro24, MiracleObichukwu24, MarcoRizzi24, MarcoPolo24, LucaAnedda24]);
const ft127 = createFantateam(127, "ISTANBULKEBAB GLOBETROTTERS", SUD, [ValentinoCigainero24, MicheleDeAnna24, MattiaRoiatti24, LucaAnedda24, GiacomoSilvestri24]);
const ft128 = createFantateam(128, "Wpalio", SUD, [StefanoPolano24, DavidGaspardo24, ThomasBaracetti24, AlessandroGalassi24, EmanueleDaneluzzi24]);
const ft129 = createFantateam(129, "giulia", EST, [AlessandroRizzi24, MarcoRizzi24, LucaAnedda24, MattiaRoiatti24, EmanueleDaneluzzi24]);
const ft130 = createFantateam(130, "giorgina", EST, [MarcoRizzi24, ValentinoCigainero24, MattiaRoiatti24, LucaAnedda24, GiacomoSilvestri24]);
const ft131 = createFantateam(131, "CesoloilNordAP", NORD, [DiegoNata24, LucaAnedda24, FilippoPasquon24, AlessandroRizzi24, GiacomoPiacentini24]);
const ft132 = createFantateam(132, "Real Codroipen", WEST, [ThomasBaracetti24, GabrieleMiani24, SebastianoTonizzo24, MarcoMarchetti24, EdoardoPicogna24]);
const ft133 = createFantateam(133, "Pix", WEST, [GiacomoPiacentini24, VittorioBasso24, MarcoSerrao24, TommasoMartello24, AlessandroRizzi24]);
const ft134 = createFantateam(134, "FMB united", EST, [AlessandroRojatti24, GabrieleMiani24, MarcoRizzi24, MattiaRoiatti24, LucaAnedda24]);
const ft135 = createFantateam(135, "Ghisangeles Clippers II", EST, [MattiaMasotti24, ChristianZanet24, FilippoPasquon24, DavidGaspardo24, MassimilianoRossi24]);
const ft136 = createFantateam(136, "asdfg", WEST, [MassimilianoRossi24, MassimoMasotti24, EugenioDeTina24, DenisVanin24, LucaAnedda24]);
const ft137 = createFantateam(137, "zioperone", NORD, [LorenzoMoro24, DavidGaspardo24, FilippoPasquon24, VittorioBasso24, WilliamIob24]);
const ft138 = createFantateam(138, "Baskettone", NORD, [MattiaRoiatti24, GabrieleMiani24, MauroPerina24, MarcoMarchetti24, MassimoMasotti24]);
const ft139 = createFantateam(139, "Gate 2 Aeroporto Malpensa-Silvio Berlusconi Milano✈️", EST, [DavidGaspardo24, FilippoPasquon24, MarcoPolo24, MattiaMasotti24, LucaGemo24]);
const ft140 = createFantateam(140, "Arrosto & tiro", EST, [IacopoPivetta24, WilliamIob24, DenisVanin24, DanieleGanzit24, MarcoSerrao24]);
const ft141 = createFantateam(141, "West riformulato", WEST, [VittorioGri24, ChristianZanet24, MauroPerina24, MattiaRoiatti24, AlessandroRizzi24]);
const ft142 = createFantateam(142, "Ratflingbanana", SUD, [DavideBroggi24, MattiaMasotti24, GiacomoSilvestri24, ChristianZanet24, DavidGaspardo24]);
const ft143 = createFantateam(143, "Ducks", NORD, [MarcoRizzi24, MarcoLombardo24, DavidGaspardo24, FilippoPasquon24, LorenzoMoro24]);
const ft144 = createFantateam(144, "Trevi BC", SUD, [DavidGaspardo24, FilippoPasquon24, MarcoLombardo24, EnricoSant24, MarcoRizzi24]);
const ft145 = createFantateam(145, "FIRETEAM!", NORD, [VittorioGri24, MarcoLombardo24, MarcoSerrao24, AlessandroRizzi24, VittorioBasso24]);
const ft146 = createFantateam(146, "Orsa", NORD, [GabrieleMiani24, LucaAnedda24, AlessandroSantin24, LucaDellaLonga24, MarcoPolo24]);
const ft147 = createFantateam(147, "Fantasia 0", NORD, [GioeleTudini24, GabrieleMiani24, MarcoMarchetti24, MicheleVendrame24, LorenzoSchinella24]);
const ft148 = createFantateam(148, "Los Vikingos", NORD, [MarcoRizzi24, AlessandroRizzi24, DiegoNata24, LucaSoramel24, VittorioGri24]);
const ft149 = createFantateam(149, "Quelli di zona", EST, [AndreaMoretti24, AlessandroRizzi24, DiegoNata24, MassimilianoRossi24, LucaSoramel24]);
const ft150 = createFantateam(150, "Furbicomevolpi", EST, [MarcoSerrao24, WilliamIob24, DenisVanin24, SimoneMartinelli24, AlessandroSant24]);
const ft151 = createFantateam(151, "qwerty", EST, [GionaTell24, LorenzoMoro24, SimoneMartinelli24, MauroPerina24, EdoardoPicogna24]);
const ft152 = createFantateam(152, "Top con Gabri", WEST, [GabrieleMiani24, DevinChiarcos24, MassimilianoRossi24, MatteoSpagnolo24, VittorioBasso24]);
const ft153 = createFantateam(152, "Optimum", WEST, [UmbertoNobile24, DevinChiarcos24, FilippoSappa24, MarcoSerrao24, VittorioBasso24]);

    // Definizione team
    // const ft1 = {
    //     ...fantateam_type,
    //     team_index: 1,
    //     name: "Burritos Picantes",
    //     rione: { ...EST },
    //     p1: { ...EdoardoPicogna24 },
    //     p2: { ...WilliamIob24 },
    //     p3: { ...FilippoSappa24 },
    //     p4: { ...UmbertoNobile24 },
    //     p5: { ...MatteoSpagnolo24 },
    // };
    // ft1.total_cost = ft1.p1.cost + ft1.p2.cost + ft1.p3.cost + ft1.p4.cost + ft1.p5.cost;
    // ft1.tot_g1 = ft1.p1.g1 + ft1.p2.g1 + ft1.p3.g1 + ft1.p4.g1 + ft1.p5.g1;
    // ft1.tot_g2 = ft1.p1.g2 + ft1.p2.g2 + ft1.p3.g2 + ft1.p4.g2 + ft1.p5.g2;
    // ft1.tot_g3 = ft1.p1.g3 + ft1.p2.g3 + ft1.p3.g3 + ft1.p4.g3 + ft1.p5.g3;
    // ft1.tot_semi = ft1.p1.semi + ft1.p2.semi + ft1.p3.semi + ft1.p4.semi + ft1.p5.semi;
    // ft1.tot_td3 = ft1.p1.td3 + ft1.p2.td3 + ft1.p3.td3 + ft1.p4.td3 + ft1.p5.td3;
    // ft1.tot_final = ft1.p1.final + ft1.p2.final + ft1.p3.final + ft1.p4.final + ft1.p5.final;
    // ft1.tot_team = ft1.p1.tot + ft1.p2.tot + ft1.p3.tot + ft1.p4.tot + ft1.p5.tot + ft1.rione.final_points;
    // const ft2 = {
    //     ...fantateam_type,
    //     team_index: 2,
    //     name: "Nord",
    //     rione: { ...NORD },
    //     p1: { ...AlessandroRizzi24 },
    //     p2: { ...DevinChiarcos24 },
    //     p3: { ...UmbertoNobile24 },
    //     p4: { ...GiacomoFerigo24 },
    //     p5: { ...AlessandroSant24 },
    // };
    // ft2.total_cost = ft2.p1.cost + ft2.p2.cost + ft2.p3.cost + ft2.p4.cost + ft2.p5.cost;
    // ft2.tot_g1 = ft2.p1.g1 + ft2.p2.g1 + ft2.p3.g1 + ft2.p4.g1 + ft2.p5.g1;
    // ft2.tot_g2 = ft2.p1.g2 + ft2.p2.g2 + ft2.p3.g2 + ft2.p4.g2 + ft2.p5.g2;
    // ft2.tot_g3 = ft2.p1.g3 + ft2.p2.g3 + ft2.p3.g3 + ft2.p4.g3 + ft2.p5.g3;
    // ft2.tot_semi = ft2.p1.semi + ft2.p2.semi + ft2.p3.semi + ft2.p4.semi + ft2.p5.semi;
    // ft2.tot_td3 = ft2.p1.td3 + ft2.p2.td3 + ft2.p3.td3 + ft2.p4.td3 + ft2.p5.td3;
    // ft2.tot_final = ft2.p1.final + ft2.p2.final + ft2.p3.final + ft2.p4.final + ft2.p5.final;
    // ft2.tot_team = ft2.p1.tot + ft2.p2.tot + ft2.p3.tot + ft2.p4.tot + ft2.p5.tot + ft2.rione.final_points;
    // const ft3 = {
    //     ...fantateam_type,
    //     team_index: 3,
    //     name: "Festainvigna",
    //     rione: { ...WEST },
    //     p1: { ...FilippoAgnoluzzi24 },
    //     p2: { ...UmbertoNobile24 },
    //     p3: { ...MatteoSpagnolo24 },
    //     p4: { ...MassimilianoMoretti24 },
    //     p5: { ...PaoloZorzi24 },
    // };
    // ft3.total_cost = ft3.p1.cost + ft3.p2.cost + ft3.p3.cost + ft3.p4.cost + ft3.p5.cost;
    // ft3.tot_g1 = ft3.p1.g1 + ft3.p2.g1 + ft3.p3.g1 + ft3.p4.g1 + ft3.p5.g1;
    // ft3.tot_g2 = ft3.p1.g2 + ft3.p2.g2 + ft3.p3.g2 + ft3.p4.g2 + ft3.p5.g2;
    // ft3.tot_g3 = ft3.p1.g3 + ft3.p2.g3 + ft3.p3.g3 + ft3.p4.g3 + ft3.p5.g3;
    // ft3.tot_semi = ft3.p1.semi + ft3.p2.semi + ft3.p3.semi + ft3.p4.semi + ft3.p5.semi;
    // ft3.tot_td3 = ft3.p1.td3 + ft3.p2.td3 + ft3.p3.td3 + ft3.p4.td3 + ft3.p5.td3;
    // ft3.tot_final = ft3.p1.final + ft3.p2.final + ft3.p3.final + ft3.p4.final + ft3.p5.final;
    // ft3.tot_team = ft3.p1.tot + ft3.p2.tot + ft3.p3.tot + ft3.p4.tot + ft3.p5.tot + ft3.rione.final_points;
    // const ft4 = {
    //     ...fantateam_type,
    //     team_index: 4,
    //     name: "Pangri",
    //     rione: { ...EST },
    //     p1: { ...MarcoRizzi24 },
    //     p2: { ...AlessioFurlan24 },
    //     p3: { ...UmbertoNobile24 },
    //     p4: { ...MassimilianoMoretti24 },
    //     p5: { ...MarcoPolo24 },
    // };
    // ft4.total_cost = ft4.p1.cost + ft4.p2.cost + ft4.p3.cost + ft4.p4.cost + ft4.p5.cost;
    // ft4.tot_g1 = ft4.p1.g1 + ft4.p2.g1 + ft4.p3.g1 + ft4.p4.g1 + ft4.p5.g1;
    // ft4.tot_g2 = ft4.p1.g2 + ft4.p2.g2 + ft4.p3.g2 + ft4.p4.g2 + ft4.p5.g2;
    // ft4.tot_g3 = ft4.p1.g3 + ft4.p2.g3 + ft4.p3.g3 + ft4.p4.g3 + ft4.p5.g3;
    // ft4.tot_semi = ft4.p1.semi + ft4.p2.semi + ft4.p3.semi + ft4.p4.semi + ft4.p5.semi;
    // ft4.tot_td3 = ft4.p1.td3 + ft4.p2.td3 + ft4.p3.td3 + ft4.p4.td3 + ft4.p5.td3;
    // ft4.tot_final = ft4.p1.final + ft4.p2.final + ft4.p3.final + ft4.p4.final + ft4.p5.final;
    // ft4.tot_team = ft4.p1.tot + ft4.p2.tot + ft4.p3.tot + ft4.p4.tot + ft4.p5.tot + ft4.rione.final_points;
    // const ft5 = {
    //     ...fantateam_type,
    //     team_index: 5,
    //     name: "Zoo_Rehab",
    //     rione: { ...WEST },
    //     p1: { ...DavidGaspardo24 },
    //     p2: { ...UmbertoNobile24 },
    //     p3: { ...DevinChiarcos24 },
    //     p4: { ...GiacomoPiacentini24 },
    //     p5: { ...FilippoPasquon24 },
    // };
    // ft5.total_cost = ft5.p1.cost + ft5.p2.cost + ft5.p3.cost + ft5.p4.cost + ft5.p5.cost;
    // ft5.tot_g1 = ft5.p1.g1 + ft5.p2.g1 + ft5.p3.g1 + ft5.p4.g1 + ft5.p5.g1;
    // ft5.tot_g2 = ft5.p1.g2 + ft5.p2.g2 + ft5.p3.g2 + ft5.p4.g2 + ft5.p5.g2;
    // ft5.tot_g3 = ft5.p1.g3 + ft5.p2.g3 + ft5.p3.g3 + ft5.p4.g3 + ft5.p5.g3;
    // ft5.tot_semi = ft5.p1.semi + ft5.p2.semi + ft5.p3.semi + ft5.p4.semi + ft5.p5.semi;
    // ft5.tot_td3 = ft5.p1.td3 + ft5.p2.td3 + ft5.p3.td3 + ft5.p4.td3 + ft5.p5.td3;
    // ft5.tot_final = ft5.p1.final + ft5.p2.final + ft5.p3.final + ft5.p4.final + ft5.p5.final;
    // ft5.tot_team = ft5.p1.tot + ft5.p2.tot + ft5.p3.tot + ft5.p4.tot + ft5.p5.tot + ft5.rione.final_points;
    // const ft6 = {
    //     ...fantateam_type,
    //     team_index: 6,
    //     name: "Nordes",
    //     rione: { ...NORD },
    //     p1: { ...DiegoNata24 },
    //     p2: { ...FilippoPasquon24 },
    //     p3: { ...UmbertoNobile24 },
    //     p4: { ...LucaAnedda24 },
    //     p5: { ...DevinChiarcos24 },
    // };
    // ft6.total_cost = ft6.p1.cost + ft6.p2.cost + ft6.p3.cost + ft6.p4.cost + ft6.p5.cost;
    // ft6.tot_g1 = ft6.p1.g1 + ft6.p2.g1 + ft6.p3.g1 + ft6.p4.g1 + ft6.p5.g1;
    // ft6.tot_g2 = ft6.p1.g2 + ft6.p2.g2 + ft6.p3.g2 + ft6.p4.g2 + ft6.p5.g2;
    // ft6.tot_g3 = ft6.p1.g3 + ft6.p2.g3 + ft6.p3.g3 + ft6.p4.g3 + ft6.p5.g3;
    // ft6.tot_semi = ft6.p1.semi + ft6.p2.semi + ft6.p3.semi + ft6.p4.semi + ft6.p5.semi;
    // ft6.tot_td3 = ft6.p1.td3 + ft6.p2.td3 + ft6.p3.td3 + ft6.p4.td3 + ft6.p5.td3;
    // ft6.tot_final = ft6.p1.final + ft6.p2.final + ft6.p3.final + ft6.p4.final + ft6.p5.final;
    // ft6.tot_team = ft6.p1.tot + ft6.p2.tot + ft6.p3.tot + ft6.p4.tot + ft6.p5.tot + ft6.rione.final_points;
    // const ft7 = {
    //     ...fantateam_type,
    //     team_index: 7,
    //     name: "Estateam",
    //     rione: { ...EST },
    //     p1: { ...SimoneMartinelli24 },
    //     p2: { ...UmbertoNobile24 },
    //     p3: { ...MattiaMasotti24 },
    //     p4: { ...FilippoSappa24 },
    //     p5: { ...FilippoPasquon24 },
    // };
    // ft7.total_cost = ft7.p1.cost + ft7.p2.cost + ft7.p3.cost + ft7.p4.cost + ft7.p5.cost;
    // ft7.tot_g1 = ft7.p1.g1 + ft7.p2.g1 + ft7.p3.g1 + ft7.p4.g1 + ft7.p5.g1;
    // ft7.tot_g2 = ft7.p1.g2 + ft7.p2.g2 + ft7.p3.g2 + ft7.p4.g2 + ft7.p5.g2;
    // ft7.tot_g3 = ft7.p1.g3 + ft7.p2.g3 + ft7.p3.g3 + ft7.p4.g3 + ft7.p5.g3;
    // ft7.tot_semi = ft7.p1.semi + ft7.p2.semi + ft7.p3.semi + ft7.p4.semi + ft7.p5.semi;
    // ft7.tot_td3 = ft7.p1.td3 + ft7.p2.td3 + ft7.p3.td3 + ft7.p4.td3 + ft7.p5.td3;
    // ft7.tot_final = ft7.p1.final + ft7.p2.final + ft7.p3.final + ft7.p4.final + ft7.p5.final;
    // ft7.tot_team = ft7.p1.tot + ft7.p2.tot + ft7.p3.tot + ft7.p4.tot + ft7.p5.tot + ft7.rione.final_points;
    // const ft8 = {
    //     ...fantateam_type,
    //     team_index: 8,
    //     name: "stirati",
    //     rione: { ...NORD },
    //     p1: { ...UmbertoNobile24 },
    //     p2: { ...AlessandroSant24 },
    //     p3: { ...FilippoPasquon24 },
    //     p4: { ...MiracleObichukwu24 },
    //     p5: { ...LarryTrevisan24 },
    // };
    // ft8.total_cost = ft8.p1.cost + ft8.p2.cost + ft8.p3.cost + ft8.p4.cost + ft8.p5.cost;
    // ft8.tot_g1 = ft8.p1.g1 + ft8.p2.g1 + ft8.p3.g1 + ft8.p4.g1 + ft8.p5.g1;
    // ft8.tot_g2 = ft8.p1.g2 + ft8.p2.g2 + ft8.p3.g2 + ft8.p4.g2 + ft8.p5.g2;
    // ft8.tot_g3 = ft8.p1.g3 + ft8.p2.g3 + ft8.p3.g3 + ft8.p4.g3 + ft8.p5.g3;
    // ft8.tot_semi = ft8.p1.semi + ft8.p2.semi + ft8.p3.semi + ft8.p4.semi + ft8.p5.semi;
    // ft8.tot_td3 = ft8.p1.td3 + ft8.p2.td3 + ft8.p3.td3 + ft8.p4.td3 + ft8.p5.td3;
    // ft8.tot_final = ft8.p1.final + ft8.p2.final + ft8.p3.final + ft8.p4.final + ft8.p5.final;
    // ft8.tot_team = ft8.p1.tot + ft8.p2.tot + ft8.p3.tot + ft8.p4.tot + ft8.p5.tot + ft8.rione.final_points;
    // const ft9 = {
    //     ...fantateam_type,
    //     team_index: 9,
    //     name: "emosbobna",
    //     rione: { ...NORD },
    //     p1: { ...DevinChiarcos24 },
    //     p2: { ...MarcoLombardo24 },
    //     p3: { ...GiovanniZanin24 },
    //     p4: { ...MattiaRoiatti24 },
    //     p5: { ...PietroSoramel24 },
    // };
    // ft9.total_cost = ft9.p1.cost + ft9.p2.cost + ft9.p3.cost + ft9.p4.cost + ft9.p5.cost;
    // ft9.tot_g1 = ft9.p1.g1 + ft9.p2.g1 + ft9.p3.g1 + ft9.p4.g1 + ft9.p5.g1;
    // ft9.tot_g2 = ft9.p1.g2 + ft9.p2.g2 + ft9.p3.g2 + ft9.p4.g2 + ft9.p5.g2;
    // ft9.tot_g3 = ft9.p1.g3 + ft9.p2.g3 + ft9.p3.g3 + ft9.p4.g3 + ft9.p5.g3;
    // ft9.tot_semi = ft9.p1.semi + ft9.p2.semi + ft9.p3.semi + ft9.p4.semi + ft9.p5.semi;
    // ft9.tot_td3 = ft9.p1.td3 + ft9.p2.td3 + ft9.p3.td3 + ft9.p4.td3 + ft9.p5.td3;
    // ft9.tot_final = ft9.p1.final + ft9.p2.final + ft9.p3.final + ft9.p4.final + ft9.p5.final;
    // ft9.tot_team = ft9.p1.tot + ft9.p2.tot + ft9.p3.tot + ft9.p4.tot + ft9.p5.tot + ft9.rione.final_points;
    // const ft10 = {
    //     ...fantateam_type,
    //     team_index: 10,
    //     name: "Gabro's top team",
    //     rione: { ...WEST },
    //     p1: { ...UmbertoNobile24 },
    //     p2: { ...AlessandroCostantini24 },
    //     p3: { ...MarcoSerrao24 },
    //     p4: { ...MiracleObichukwu24 },
    //     p5: { ...EnricoSant24 },
    // };
    // ft10.total_cost = ft10.p1.cost + ft10.p2.cost + ft10.p3.cost + ft10.p4.cost + ft10.p5.cost;
    // ft10.tot_g1 = ft10.p1.g1 + ft10.p2.g1 + ft10.p3.g1 + ft10.p4.g1 + ft10.p5.g1;
    // ft10.tot_g2 = ft10.p1.g2 + ft10.p2.g2 + ft10.p3.g2 + ft10.p4.g2 + ft10.p5.g2;
    // ft10.tot_g3 = ft10.p1.g3 + ft10.p2.g3 + ft10.p3.g3 + ft10.p4.g3 + ft10.p5.g3;
    // ft10.tot_semi = ft10.p1.semi + ft10.p2.semi + ft10.p3.semi + ft10.p4.semi + ft10.p5.semi;
    // ft10.tot_td3 = ft10.p1.td3 + ft10.p2.td3 + ft10.p3.td3 + ft10.p4.td3 + ft10.p5.td3;
    // ft10.tot_final = ft10.p1.final + ft10.p2.final + ft10.p3.final + ft10.p4.final + ft10.p5.final;
    // ft10.tot_team = ft10.p1.tot + ft10.p2.tot + ft10.p3.tot + ft10.p4.tot + ft10.p5.tot + ft10.rione.final_points;
    // const ft11 = {
    //     ...fantateam_type,
    //     team_index: 11,
    //     name: "oilapledecoval",
    //     rione: { ...NORD },
    //     p1: { ...AlessandroSantin24 },
    //     p2: { ...MarcoMarchetti24 },
    //     p3: { ...DavidGaspardo24 },
    //     p4: { ...UmbertoNobile24 },
    //     p5: { ...PietroSoramel24 },
    // };
    // ft11.total_cost = ft11.p1.cost + ft11.p2.cost + ft11.p3.cost + ft11.p4.cost + ft11.p5.cost;
    // ft11.tot_g1 = ft11.p1.g1 + ft11.p2.g1 + ft11.p3.g1 + ft11.p4.g1 + ft11.p5.g1;
    // ft11.tot_g2 = ft11.p1.g2 + ft11.p2.g2 + ft11.p3.g2 + ft11.p4.g2 + ft11.p5.g2;
    // ft11.tot_g3 = ft11.p1.g3 + ft11.p2.g3 + ft11.p3.g3 + ft11.p4.g3 + ft11.p5.g3;
    // ft11.tot_semi = ft11.p1.semi + ft11.p2.semi + ft11.p3.semi + ft11.p4.semi + ft11.p5.semi;
    // ft11.tot_td3 = ft11.p1.td3 + ft11.p2.td3 + ft11.p3.td3 + ft11.p4.td3 + ft11.p5.td3;
    // ft11.tot_final = ft11.p1.final + ft11.p2.final + ft11.p3.final + ft11.p4.final + ft11.p5.final;
    // ft11.tot_team = ft11.p1.tot + ft11.p2.tot + ft11.p3.tot + ft11.p4.tot + ft11.p5.tot + ft11.rione.final_points;
    // const ft12 = {
    //     ...fantateam_type,
    //     team_index: 12,
    //     name: "Armata Rossa",
    //     rione: { ...NORD },
    //     p1: { ...MarcoRizzi24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...UmbertoNobile24 },
    //     p4: { ...MassimilianoRossi24 },
    //     p5: { ...LucaAnedda24 },
    // };
    // ft12.total_cost = ft12.p1.cost + ft12.p2.cost + ft12.p3.cost + ft12.p4.cost + ft12.p5.cost;
    // ft12.tot_g1 = ft12.p1.g1 + ft12.p2.g1 + ft12.p3.g1 + ft12.p4.g1 + ft12.p5.g1;
    // ft12.tot_g2 = ft12.p1.g2 + ft12.p2.g2 + ft12.p3.g2 + ft12.p4.g2 + ft12.p5.g2;
    // ft12.tot_g3 = ft12.p1.g3 + ft12.p2.g3 + ft12.p3.g3 + ft12.p4.g3 + ft12.p5.g3;
    // ft12.tot_semi = ft12.p1.semi + ft12.p2.semi + ft12.p3.semi + ft12.p4.semi + ft12.p5.semi;
    // ft12.tot_td3 = ft12.p1.td3 + ft12.p2.td3 + ft12.p3.td3 + ft12.p4.td3 + ft12.p5.td3;
    // ft12.tot_final = ft12.p1.final + ft12.p2.final + ft12.p3.final + ft12.p4.final + ft12.p5.final;
    // ft12.tot_team = ft12.p1.tot + ft12.p2.tot + ft12.p3.tot + ft12.p4.tot + ft12.p5.tot + ft12.rione.final_points;
    // const ft13 = {
    //     ...fantateam_type,
    //     team_index: 13,
    //     name: "La Betty",
    //     rione: { ...WEST },
    //     p1: { ...EmanueleDaneluzzi24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...PietroSoramel24 },
    //     p4: { ...EdoardoPicogna24 },
    //     p5: { ...MiracleObichukwu24 },
    // };
    // ft13.total_cost = ft13.p1.cost + ft13.p2.cost + ft13.p3.cost + ft13.p4.cost + ft13.p5.cost;
    // ft13.tot_g1 = ft13.p1.g1 + ft13.p2.g1 + ft13.p3.g1 + ft13.p4.g1 + ft13.p5.g1;
    // ft13.tot_g2 = ft13.p1.g2 + ft13.p2.g2 + ft13.p3.g2 + ft13.p4.g2 + ft13.p5.g2;
    // ft13.tot_g3 = ft13.p1.g3 + ft13.p2.g3 + ft13.p3.g3 + ft13.p4.g3 + ft13.p5.g3;
    // ft13.tot_semi = ft13.p1.semi + ft13.p2.semi + ft13.p3.semi + ft13.p4.semi + ft13.p5.semi;
    // ft13.tot_td3 = ft13.p1.td3 + ft13.p2.td3 + ft13.p3.td3 + ft13.p4.td3 + ft13.p5.td3;
    // ft13.tot_final = ft13.p1.final + ft13.p2.final + ft13.p3.final + ft13.p4.final + ft13.p5.final;
    // ft13.tot_team = ft13.p1.tot + ft13.p2.tot + ft13.p3.tot + ft13.p4.tot + ft13.p5.tot + ft13.rione.final_points;
    // const ft14 = {
    //     ...fantateam_type,
    //     team_index: 14,
    //     name: "Estinti",
    //     rione: { ...WEST },
    //     p1: { ...UmbertoNobile24 },
    //     p2: { ...AlessandroCostantini24 },
    //     p3: { ...AlessandroSant24 },
    //     p4: { ...MauroPerina24 },
    //     p5: { ...MarcoMarchetti24 },
    // };
    // ft14.total_cost = ft14.p1.cost + ft14.p2.cost + ft14.p3.cost + ft14.p4.cost + ft14.p5.cost;
    // ft14.tot_g1 = ft14.p1.g1 + ft14.p2.g1 + ft14.p3.g1 + ft14.p4.g1 + ft14.p5.g1;
    // ft14.tot_g2 = ft14.p1.g2 + ft14.p2.g2 + ft14.p3.g2 + ft14.p4.g2 + ft14.p5.g2;
    // ft14.tot_g3 = ft14.p1.g3 + ft14.p2.g3 + ft14.p3.g3 + ft14.p4.g3 + ft14.p5.g3;
    // ft14.tot_semi = ft14.p1.semi + ft14.p2.semi + ft14.p3.semi + ft14.p4.semi + ft14.p5.semi;
    // ft14.tot_td3 = ft14.p1.td3 + ft14.p2.td3 + ft14.p3.td3 + ft14.p4.td3 + ft14.p5.td3;
    // ft14.tot_final = ft14.p1.final + ft14.p2.final + ft14.p3.final + ft14.p4.final + ft14.p5.final;
    // ft14.tot_team = ft14.p1.tot + ft14.p2.tot + ft14.p3.tot + ft14.p4.tot + ft14.p5.tot + ft14.rione.final_points;
    // const ft15 = {
    //     ...fantateam_type,
    //     team_index: 15,
    //     name: "C&C",
    //     rione: { ...SUD },
    //     p1: { ...FilippoSappa24 },
    //     p2: { ...LorenzoMoro24 },
    //     p3: { ...PietroSoramel24 },
    //     p4: { ...EnricoSant24 },
    //     p5: { ...DanieleGanzit24 },
    // };
    // ft15.total_cost = ft15.p1.cost + ft15.p2.cost + ft15.p3.cost + ft15.p4.cost + ft15.p5.cost;
    // ft15.tot_g1 = ft15.p1.g1 + ft15.p2.g1 + ft15.p3.g1 + ft15.p4.g1 + ft15.p5.g1;
    // ft15.tot_g2 = ft15.p1.g2 + ft15.p2.g2 + ft15.p3.g2 + ft15.p4.g2 + ft15.p5.g2;
    // ft15.tot_g3 = ft15.p1.g3 + ft15.p2.g3 + ft15.p3.g3 + ft15.p4.g3 + ft15.p5.g3;
    // ft15.tot_semi = ft15.p1.semi + ft15.p2.semi + ft15.p3.semi + ft15.p4.semi + ft15.p5.semi;
    // ft15.tot_td3 = ft15.p1.td3 + ft15.p2.td3 + ft15.p3.td3 + ft15.p4.td3 + ft15.p5.td3;
    // ft15.tot_final = ft15.p1.final + ft15.p2.final + ft15.p3.final + ft15.p4.final + ft15.p5.final;
    // ft15.tot_team = ft15.p1.tot + ft15.p2.tot + ft15.p3.tot + ft15.p4.tot + ft15.p5.tot + ft15.rione.final_points;
    // const ft16 = {
    //     ...fantateam_type,
    //     team_index: 16,
    //     name: "🦀",
    //     rione: { ...WEST },
    //     p1: { ...PietroSoramel24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...AlessioFurlan24 },
    //     p4: { ...LucaSoramel24 },
    //     p5: { ...MarcoRizzi24 },
    // };
    // ft16.total_cost = ft16.p1.cost + ft16.p2.cost + ft16.p3.cost + ft16.p4.cost + ft16.p5.cost;
    // ft16.tot_g1 = ft16.p1.g1 + ft16.p2.g1 + ft16.p3.g1 + ft16.p4.g1 + ft16.p5.g1;
    // ft16.tot_g2 = ft16.p1.g2 + ft16.p2.g2 + ft16.p3.g2 + ft16.p4.g2 + ft16.p5.g2;
    // ft16.tot_g3 = ft16.p1.g3 + ft16.p2.g3 + ft16.p3.g3 + ft16.p4.g3 + ft16.p5.g3;
    // ft16.tot_semi = ft16.p1.semi + ft16.p2.semi + ft16.p3.semi + ft16.p4.semi + ft16.p5.semi;
    // ft16.tot_td3 = ft16.p1.td3 + ft16.p2.td3 + ft16.p3.td3 + ft16.p4.td3 + ft16.p5.td3;
    // ft16.tot_final = ft16.p1.final + ft16.p2.final + ft16.p3.final + ft16.p4.final + ft16.p5.final;
    // ft16.tot_team = ft16.p1.tot + ft16.p2.tot + ft16.p3.tot + ft16.p4.tot + ft16.p5.tot + ft16.rione.final_points;
    // const ft17 = {
    //     ...fantateam_type,
    //     team_index: 17,
    //     name: "Melinda",
    //     rione: { ...NORD },
    //     p1: { ...PietroSoramel24 },
    //     p2: { ...LucaSoramel24 },
    //     p3: { ...MassimilianoMoretti24 },
    //     p4: { ...AlessioFurlan24 },
    //     p5: { ...AndreaMoretti24 },
    // };
    // ft17.total_cost = ft17.p1.cost + ft17.p2.cost + ft17.p3.cost + ft17.p4.cost + ft17.p5.cost;
    // ft17.tot_g1 = ft17.p1.g1 + ft17.p2.g1 + ft17.p3.g1 + ft17.p4.g1 + ft17.p5.g1;
    // ft17.tot_g2 = ft17.p1.g2 + ft17.p2.g2 + ft17.p3.g2 + ft17.p4.g2 + ft17.p5.g2;
    // ft17.tot_g3 = ft17.p1.g3 + ft17.p2.g3 + ft17.p3.g3 + ft17.p4.g3 + ft17.p5.g3;
    // ft17.tot_semi = ft17.p1.semi + ft17.p2.semi + ft17.p3.semi + ft17.p4.semi + ft17.p5.semi;
    // ft17.tot_td3 = ft17.p1.td3 + ft17.p2.td3 + ft17.p3.td3 + ft17.p4.td3 + ft17.p5.td3;
    // ft17.tot_final = ft17.p1.final + ft17.p2.final + ft17.p3.final + ft17.p4.final + ft17.p5.final;
    // ft17.tot_team = ft17.p1.tot + ft17.p2.tot + ft17.p3.tot + ft17.p4.tot + ft17.p5.tot + ft17.rione.final_points;
    // const ft18 = {
    //     ...fantateam_type,
    //     team_index: 18,
    //     name: "Winxclub",
    //     rione: { ...EST },
    //     p1: { ...AlessioFurlan24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...LucaSoramel24 },
    //     p4: { ...PietroSoramel24 },
    //     p5: { ...LucaAnedda24 },
    // };
    // ft18.total_cost = ft18.p1.cost + ft18.p2.cost + ft18.p3.cost + ft18.p4.cost + ft18.p5.cost;
    // ft18.tot_g1 = ft18.p1.g1 + ft18.p2.g1 + ft18.p3.g1 + ft18.p4.g1 + ft18.p5.g1;
    // ft18.tot_g2 = ft18.p1.g2 + ft18.p2.g2 + ft18.p3.g2 + ft18.p4.g2 + ft18.p5.g2;
    // ft18.tot_g3 = ft18.p1.g3 + ft18.p2.g3 + ft18.p3.g3 + ft18.p4.g3 + ft18.p5.g3;
    // ft18.tot_semi = ft18.p1.semi + ft18.p2.semi + ft18.p3.semi + ft18.p4.semi + ft18.p5.semi;
    // ft18.tot_td3 = ft18.p1.td3 + ft18.p2.td3 + ft18.p3.td3 + ft18.p4.td3 + ft18.p5.td3;
    // ft18.tot_final = ft18.p1.final + ft18.p2.final + ft18.p3.final + ft18.p4.final + ft18.p5.final;
    // ft18.tot_team = ft18.p1.tot + ft18.p2.tot + ft18.p3.tot + ft18.p4.tot + ft18.p5.tot + ft18.rione.final_points;
    // const ft19 = {
    //     ...fantateam_type,
    //     team_index: 19,
    //     name: "tnerb",
    //     rione: { ...SUD },
    //     p1: { ...MassimilianoMoretti24 },
    //     p2: { ...GiovanniTonizzo24 },
    //     p3: { ...PietroSoramel24 },
    //     p4: { ...MarcoPolo24 },
    //     p5: { ...MatteoSpagnolo24 },
    // };
    // ft19.total_cost = ft19.p1.cost + ft19.p2.cost + ft19.p3.cost + ft19.p4.cost + ft19.p5.cost;
    // ft19.tot_g1 = ft19.p1.g1 + ft19.p2.g1 + ft19.p3.g1 + ft19.p4.g1 + ft19.p5.g1;
    // ft19.tot_g2 = ft19.p1.g2 + ft19.p2.g2 + ft19.p3.g2 + ft19.p4.g2 + ft19.p5.g2;
    // ft19.tot_g3 = ft19.p1.g3 + ft19.p2.g3 + ft19.p3.g3 + ft19.p4.g3 + ft19.p5.g3;
    // ft19.tot_semi = ft19.p1.semi + ft19.p2.semi + ft19.p3.semi + ft19.p4.semi + ft19.p5.semi;
    // ft19.tot_td3 = ft19.p1.td3 + ft19.p2.td3 + ft19.p3.td3 + ft19.p4.td3 + ft19.p5.td3;
    // ft19.tot_final = ft19.p1.final + ft19.p2.final + ft19.p3.final + ft19.p4.final + ft19.p5.final;
    // ft19.tot_team = ft19.p1.tot + ft19.p2.tot + ft19.p3.tot + ft19.p4.tot + ft19.p5.tot + ft19.rione.final_points;
    // const ft20 = {
    //     ...fantateam_type,
    //     team_index: 20,
    //     name: "Prime time players",
    //     rione: { ...WEST },
    //     p1: { ...LarryTrevisan24 },
    //     p2: { ...MarcoSerrao24 },
    //     p3: { ...UmbertoNobile24 },
    //     p4: { ...FilippoPasquon24 },
    //     p5: { ...LorenzoMoro24 },
    // };
    // ft20.total_cost = ft20.p1.cost + ft20.p2.cost + ft20.p3.cost + ft20.p4.cost + ft20.p5.cost;
    // ft20.tot_g1 = ft20.p1.g1 + ft20.p2.g1 + ft20.p3.g1 + ft20.p4.g1 + ft20.p5.g1;
    // ft20.tot_g2 = ft20.p1.g2 + ft20.p2.g2 + ft20.p3.g2 + ft20.p4.g2 + ft20.p5.g2;
    // ft20.tot_g3 = ft20.p1.g3 + ft20.p2.g3 + ft20.p3.g3 + ft20.p4.g3 + ft20.p5.g3;
    // ft20.tot_semi = ft20.p1.semi + ft20.p2.semi + ft20.p3.semi + ft20.p4.semi + ft20.p5.semi;
    // ft20.tot_td3 = ft20.p1.td3 + ft20.p2.td3 + ft20.p3.td3 + ft20.p4.td3 + ft20.p5.td3;
    // ft20.tot_final = ft20.p1.final + ft20.p2.final + ft20.p3.final + ft20.p4.final + ft20.p5.final;
    // ft20.tot_team = ft20.p1.tot + ft20.p2.tot + ft20.p3.tot + ft20.p4.tot + ft20.p5.tot + ft20.rione.final_points;
    // const ft21 = {
    //     ...fantateam_type,
    //     team_index: 21,
    //     name: "Golden Cod Cepe’s Warriors",
    //     rione: { ...SUD },
    //     p1: { ...AntonioGri24 },
    //     p2: { ...GiovanniZanin24 },
    //     p3: { ...MiracleObichukwu24 },
    //     p4: { ...FilippoSappa24 },
    //     p5: { ...GiovanniTonizzo24 },
    // };
    // ft21.total_cost = ft21.p1.cost + ft21.p2.cost + ft21.p3.cost + ft21.p4.cost + ft21.p5.cost;
    // ft21.tot_g1 = ft21.p1.g1 + ft21.p2.g1 + ft21.p3.g1 + ft21.p4.g1 + ft21.p5.g1;
    // ft21.tot_g2 = ft21.p1.g2 + ft21.p2.g2 + ft21.p3.g2 + ft21.p4.g2 + ft21.p5.g2;
    // ft21.tot_g3 = ft21.p1.g3 + ft21.p2.g3 + ft21.p3.g3 + ft21.p4.g3 + ft21.p5.g3;
    // ft21.tot_semi = ft21.p1.semi + ft21.p2.semi + ft21.p3.semi + ft21.p4.semi + ft21.p5.semi;
    // ft21.tot_td3 = ft21.p1.td3 + ft21.p2.td3 + ft21.p3.td3 + ft21.p4.td3 + ft21.p5.td3;
    // ft21.tot_final = ft21.p1.final + ft21.p2.final + ft21.p3.final + ft21.p4.final + ft21.p5.final;
    // ft21.tot_team = ft21.p1.tot + ft21.p2.tot + ft21.p3.tot + ft21.p4.tot + ft21.p5.tot + ft21.rione.final_points;
    // const ft22 = {
    //     ...fantateam_type,
    //     team_index: 22,
    //     name: "sustovich",
    //     rione: { ...WEST },
    //     p1: { ...MiracleObichukwu24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...LucaSoramel24 },
    //     p4: { ...AndreaMoretti24 },
    //     p5: { ...PietroSoramel24 },
    // };
    // ft22.total_cost = ft22.p1.cost + ft22.p2.cost + ft22.p3.cost + ft22.p4.cost + ft22.p5.cost;
    // ft22.tot_g1 = ft22.p1.g1 + ft22.p2.g1 + ft22.p3.g1 + ft22.p4.g1 + ft22.p5.g1;
    // ft22.tot_g2 = ft22.p1.g2 + ft22.p2.g2 + ft22.p3.g2 + ft22.p4.g2 + ft22.p5.g2;
    // ft22.tot_g3 = ft22.p1.g3 + ft22.p2.g3 + ft22.p3.g3 + ft22.p4.g3 + ft22.p5.g3;
    // ft22.tot_semi = ft22.p1.semi + ft22.p2.semi + ft22.p3.semi + ft22.p4.semi + ft22.p5.semi;
    // ft22.tot_td3 = ft22.p1.td3 + ft22.p2.td3 + ft22.p3.td3 + ft22.p4.td3 + ft22.p5.td3;
    // ft22.tot_final = ft22.p1.final + ft22.p2.final + ft22.p3.final + ft22.p4.final + ft22.p5.final;
    // ft22.tot_team = ft22.p1.tot + ft22.p2.tot + ft22.p3.tot + ft22.p4.tot + ft22.p5.tot + ft22.rione.final_points;
    // const ft23 = {
    //     ...fantateam_type,
    //     team_index: 23,
    //     name: "Groviscrazia",
    //     rione: { ...WEST },
    //     p1: { ...PietroSoramel24 },
    //     p2: { ...LucaSoramel24 },
    //     p3: { ...MiracleObichukwu24 },
    //     p4: { ...MicheleVendrame24 },
    //     p5: { ...MassimilianoMoretti24 },
    // };
    // ft23.total_cost = ft23.p1.cost + ft23.p2.cost + ft23.p3.cost + ft23.p4.cost + ft23.p5.cost;
    // ft23.tot_g1 = ft23.p1.g1 + ft23.p2.g1 + ft23.p3.g1 + ft23.p4.g1 + ft23.p5.g1;
    // ft23.tot_g2 = ft23.p1.g2 + ft23.p2.g2 + ft23.p3.g2 + ft23.p4.g2 + ft23.p5.g2;
    // ft23.tot_g3 = ft23.p1.g3 + ft23.p2.g3 + ft23.p3.g3 + ft23.p4.g3 + ft23.p5.g3;
    // ft23.tot_semi = ft23.p1.semi + ft23.p2.semi + ft23.p3.semi + ft23.p4.semi + ft23.p5.semi;
    // ft23.tot_td3 = ft23.p1.td3 + ft23.p2.td3 + ft23.p3.td3 + ft23.p4.td3 + ft23.p5.td3;
    // ft23.tot_final = ft23.p1.final + ft23.p2.final + ft23.p3.final + ft23.p4.final + ft23.p5.final;
    // ft23.tot_team = ft23.p1.tot + ft23.p2.tot + ft23.p3.tot + ft23.p4.tot + ft23.p5.tot + ft23.rione.final_points;
    // const ft24 = {
    //     ...fantateam_type,
    //     team_index: 24,
    //     name: "DEVIN",
    //     rione: { ...WEST },
    //     p1: { ...MassimilianoMoretti24 },
    //     p2: { ...GiacomoPiacentini24 },
    //     p3: { ...DevinChiarcos24 },
    //     p4: { ...VittorioBasso24 },
    //     p5: { ...FilippoPasquon24 },
    // };
    // ft24.total_cost = ft24.p1.cost + ft24.p2.cost + ft24.p3.cost + ft24.p4.cost + ft24.p5.cost;
    // ft24.tot_g1 = ft24.p1.g1 + ft24.p2.g1 + ft24.p3.g1 + ft24.p4.g1 + ft24.p5.g1;
    // ft24.tot_g2 = ft24.p1.g2 + ft24.p2.g2 + ft24.p3.g2 + ft24.p4.g2 + ft24.p5.g2;
    // ft24.tot_g3 = ft24.p1.g3 + ft24.p2.g3 + ft24.p3.g3 + ft24.p4.g3 + ft24.p5.g3;
    // ft24.tot_semi = ft24.p1.semi + ft24.p2.semi + ft24.p3.semi + ft24.p4.semi + ft24.p5.semi;
    // ft24.tot_td3 = ft24.p1.td3 + ft24.p2.td3 + ft24.p3.td3 + ft24.p4.td3 + ft24.p5.td3;
    // ft24.tot_final = ft24.p1.final + ft24.p2.final + ft24.p3.final + ft24.p4.final + ft24.p5.final;
    // ft24.tot_team = ft24.p1.tot + ft24.p2.tot + ft24.p3.tot + ft24.p4.tot + ft24.p5.tot + ft24.rione.final_points;
    // const ft25 = {
    //     ...fantateam_type,
    //     team_index: 25,
    //     name: "Mia",
    //     rione: { ...WEST },
    //     p1: { ...DavideParon24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...DevinChiarcos24 },
    //     p4: { ...MattiaMasotti24 },
    //     p5: { ...FilippoPasquon24 },
    // };
    // ft25.total_cost = ft25.p1.cost + ft25.p2.cost + ft25.p3.cost + ft25.p4.cost + ft25.p5.cost;
    // ft25.tot_g1 = ft25.p1.g1 + ft25.p2.g1 + ft25.p3.g1 + ft25.p4.g1 + ft25.p5.g1;
    // ft25.tot_g2 = ft25.p1.g2 + ft25.p2.g2 + ft25.p3.g2 + ft25.p4.g2 + ft25.p5.g2;
    // ft25.tot_g3 = ft25.p1.g3 + ft25.p2.g3 + ft25.p3.g3 + ft25.p4.g3 + ft25.p5.g3;
    // ft25.tot_semi = ft25.p1.semi + ft25.p2.semi + ft25.p3.semi + ft25.p4.semi + ft25.p5.semi;
    // ft25.tot_td3 = ft25.p1.td3 + ft25.p2.td3 + ft25.p3.td3 + ft25.p4.td3 + ft25.p5.td3;
    // ft25.tot_final = ft25.p1.final + ft25.p2.final + ft25.p3.final + ft25.p4.final + ft25.p5.final;
    // ft25.tot_team = ft25.p1.tot + ft25.p2.tot + ft25.p3.tot + ft25.p4.tot + ft25.p5.tot + ft25.rione.final_points;
    // const ft26 = {
    //     ...fantateam_type,
    //     team_index: 26,
    //     name: "Goggo Bello",
    //     rione: { ...WEST },
    //     p1: { ...AlessandroSant24 },
    //     p2: { ...MiracleObichukwu24 },
    //     p3: { ...UmbertoNobile24 },
    //     p4: { ...TommasoMartello24 },
    //     p5: { ...GionaTell24 },
    // };
    // ft26.total_cost = ft26.p1.cost + ft26.p2.cost + ft26.p3.cost + ft26.p4.cost + ft26.p5.cost;
    // ft26.tot_g1 = ft26.p1.g1 + ft26.p2.g1 + ft26.p3.g1 + ft26.p4.g1 + ft26.p5.g1;
    // ft26.tot_g2 = ft26.p1.g2 + ft26.p2.g2 + ft26.p3.g2 + ft26.p4.g2 + ft26.p5.g2;
    // ft26.tot_g3 = ft26.p1.g3 + ft26.p2.g3 + ft26.p3.g3 + ft26.p4.g3 + ft26.p5.g3;
    // ft26.tot_semi = ft26.p1.semi + ft26.p2.semi + ft26.p3.semi + ft26.p4.semi + ft26.p5.semi;
    // ft26.tot_td3 = ft26.p1.td3 + ft26.p2.td3 + ft26.p3.td3 + ft26.p4.td3 + ft26.p5.td3;
    // ft26.tot_final = ft26.p1.final + ft26.p2.final + ft26.p3.final + ft26.p4.final + ft26.p5.final;
    // ft26.tot_team = ft26.p1.tot + ft26.p2.tot + ft26.p3.tot + ft26.p4.tot + ft26.p5.tot + ft26.rione.final_points;
    // const ft27 = {
    //     ...fantateam_type,
    //     team_index: 27,
    //     name: "Rione Muscletto",
    //     rione: { ...NORD },
    //     p1: { ...GioeleTudini24 },
    //     p2: { ...FilippoSappa24 },
    //     p3: { ...LarryTrevisan24 },
    //     p4: { ...AlessandroSant24 },
    //     p5: { ...AlessandroRojatti24 },
    // };
    // ft27.total_cost = ft27.p1.cost + ft27.p2.cost + ft27.p3.cost + ft27.p4.cost + ft27.p5.cost;
    // ft27.tot_g1 = ft27.p1.g1 + ft27.p2.g1 + ft27.p3.g1 + ft27.p4.g1 + ft27.p5.g1;
    // ft27.tot_g2 = ft27.p1.g2 + ft27.p2.g2 + ft27.p3.g2 + ft27.p4.g2 + ft27.p5.g2;
    // ft27.tot_g3 = ft27.p1.g3 + ft27.p2.g3 + ft27.p3.g3 + ft27.p4.g3 + ft27.p5.g3;
    // ft27.tot_semi = ft27.p1.semi + ft27.p2.semi + ft27.p3.semi + ft27.p4.semi + ft27.p5.semi;
    // ft27.tot_td3 = ft27.p1.td3 + ft27.p2.td3 + ft27.p3.td3 + ft27.p4.td3 + ft27.p5.td3;
    // ft27.tot_final = ft27.p1.final + ft27.p2.final + ft27.p3.final + ft27.p4.final + ft27.p5.final;
    // ft27.tot_team = ft27.p1.tot + ft27.p2.tot + ft27.p3.tot + ft27.p4.tot + ft27.p5.tot + ft27.rione.final_points;
    // const ft28 = {
    //     ...fantateam_type,
    //     team_index: 28,
    //     name: "Oklahoma city tinder",
    //     rione: { ...WEST },
    //     p1: { ...DevinChiarcos24 },
    //     p2: { ...MattiaRoiatti24 },
    //     p3: { ...MattiaMasotti24 },
    //     p4: { ...FilippoPasquon24 },
    //     p5: { ...MassimilianoMoretti24 },
    // };
    // ft28.total_cost = ft28.p1.cost + ft28.p2.cost + ft28.p3.cost + ft28.p4.cost + ft28.p5.cost;
    // ft28.tot_g1 = ft28.p1.g1 + ft28.p2.g1 + ft28.p3.g1 + ft28.p4.g1 + ft28.p5.g1;
    // ft28.tot_g2 = ft28.p1.g2 + ft28.p2.g2 + ft28.p3.g2 + ft28.p4.g2 + ft28.p5.g2;
    // ft28.tot_g3 = ft28.p1.g3 + ft28.p2.g3 + ft28.p3.g3 + ft28.p4.g3 + ft28.p5.g3;
    // ft28.tot_semi = ft28.p1.semi + ft28.p2.semi + ft28.p3.semi + ft28.p4.semi + ft28.p5.semi;
    // ft28.tot_td3 = ft28.p1.td3 + ft28.p2.td3 + ft28.p3.td3 + ft28.p4.td3 + ft28.p5.td3;
    // ft28.tot_final = ft28.p1.final + ft28.p2.final + ft28.p3.final + ft28.p4.final + ft28.p5.final;
    // ft28.tot_team = ft28.p1.tot + ft28.p2.tot + ft28.p3.tot + ft28.p4.tot + ft28.p5.tot + ft28.rione.final_points;
    // const ft29 = {
    //     ...fantateam_type,
    //     team_index: 29,
    //     name: "Mau",
    //     rione: { ...WEST },
    //     p1: { ...EnricoSant24 },
    //     p2: { ...MauroCuridori24 },
    //     p3: { ...GiacomoSilvestri24 },
    //     p4: { ...FilippoSappa24 },
    //     p5: { ...AlessandroRizzi24 },
    // };
    // ft29.total_cost = ft29.p1.cost + ft29.p2.cost + ft29.p3.cost + ft29.p4.cost + ft29.p5.cost;
    // ft29.tot_g1 = ft29.p1.g1 + ft29.p2.g1 + ft29.p3.g1 + ft29.p4.g1 + ft29.p5.g1;
    // ft29.tot_g2 = ft29.p1.g2 + ft29.p2.g2 + ft29.p3.g2 + ft29.p4.g2 + ft29.p5.g2;
    // ft29.tot_g3 = ft29.p1.g3 + ft29.p2.g3 + ft29.p3.g3 + ft29.p4.g3 + ft29.p5.g3;
    // ft29.tot_semi = ft29.p1.semi + ft29.p2.semi + ft29.p3.semi + ft29.p4.semi + ft29.p5.semi;
    // ft29.tot_td3 = ft29.p1.td3 + ft29.p2.td3 + ft29.p3.td3 + ft29.p4.td3 + ft29.p5.td3;
    // ft29.tot_final = ft29.p1.final + ft29.p2.final + ft29.p3.final + ft29.p4.final + ft29.p5.final;
    // ft29.tot_team = ft29.p1.tot + ft29.p2.tot + ft29.p3.tot + ft29.p4.tot + ft29.p5.tot + ft29.rione.final_points;
    // const ft30 = {
    //     ...fantateam_type,
    //     team_index: 30,
    //     name: "SuperOne",
    //     rione: { ...WEST },
    //     p1: { ...AndreaMoretti24 },
    //     p2: { ...MicheleDeAnna24 },
    //     p3: { ...MassimilianoMoretti24 },
    //     p4: { ...MiracleObichukwu24 },
    //     p5: { ...MicheleGorasso24 },
    // };
    // ft30.total_cost = ft30.p1.cost + ft30.p2.cost + ft30.p3.cost + ft30.p4.cost + ft30.p5.cost;
    // ft30.tot_g1 = ft30.p1.g1 + ft30.p2.g1 + ft30.p3.g1 + ft30.p4.g1 + ft30.p5.g1;
    // ft30.tot_g2 = ft30.p1.g2 + ft30.p2.g2 + ft30.p3.g2 + ft30.p4.g2 + ft30.p5.g2;
    // ft30.tot_g3 = ft30.p1.g3 + ft30.p2.g3 + ft30.p3.g3 + ft30.p4.g3 + ft30.p5.g3;
    // ft30.tot_semi = ft30.p1.semi + ft30.p2.semi + ft30.p3.semi + ft30.p4.semi + ft30.p5.semi;
    // ft30.tot_td3 = ft30.p1.td3 + ft30.p2.td3 + ft30.p3.td3 + ft30.p4.td3 + ft30.p5.td3;
    // ft30.tot_final = ft30.p1.final + ft30.p2.final + ft30.p3.final + ft30.p4.final + ft30.p5.final;
    // ft30.tot_team = ft30.p1.tot + ft30.p2.tot + ft30.p3.tot + ft30.p4.tot + ft30.p5.tot + ft30.rione.final_points;
    // const ft31 = {
    //     ...fantateam_type,
    //     team_index: 31,
    //     name: "Liam",
    //     rione: { ...NORD },
    //     p1: { ...MattiaMasotti24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...EnricoSant24 },
    //     p4: { ...MassimoMasotti24 },
    //     p5: { ...DevinChiarcos24 },
    // };
    // ft31.total_cost = ft31.p1.cost + ft31.p2.cost + ft31.p3.cost + ft31.p4.cost + ft31.p5.cost;
    // ft31.tot_g1 = ft31.p1.g1 + ft31.p2.g1 + ft31.p3.g1 + ft31.p4.g1 + ft31.p5.g1;
    // ft31.tot_g2 = ft31.p1.g2 + ft31.p2.g2 + ft31.p3.g2 + ft31.p4.g2 + ft31.p5.g2;
    // ft31.tot_g3 = ft31.p1.g3 + ft31.p2.g3 + ft31.p3.g3 + ft31.p4.g3 + ft31.p5.g3;
    // ft31.tot_semi = ft31.p1.semi + ft31.p2.semi + ft31.p3.semi + ft31.p4.semi + ft31.p5.semi;
    // ft31.tot_td3 = ft31.p1.td3 + ft31.p2.td3 + ft31.p3.td3 + ft31.p4.td3 + ft31.p5.td3;
    // ft31.tot_final = ft31.p1.final + ft31.p2.final + ft31.p3.final + ft31.p4.final + ft31.p5.final;
    // ft31.tot_team = ft31.p1.tot + ft31.p2.tot + ft31.p3.tot + ft31.p4.tot + ft31.p5.tot + ft31.rione.final_points;
    // const ft32 = {
    //     ...fantateam_type,
    //     team_index: 32,
    //     name: "Flacko the sheriff",
    //     rione: { ...WEST },
    //     p1: { ...MicheleVendrame24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...MattiaRoiatti24 },
    //     p4: { ...PietroSoramel24 },
    //     p5: { ...ValentinoCigainero24 },
    // };
    // ft32.total_cost = ft32.p1.cost + ft32.p2.cost + ft32.p3.cost + ft32.p4.cost + ft32.p5.cost;
    // ft32.tot_g1 = ft32.p1.g1 + ft32.p2.g1 + ft32.p3.g1 + ft32.p4.g1 + ft32.p5.g1;
    // ft32.tot_g2 = ft32.p1.g2 + ft32.p2.g2 + ft32.p3.g2 + ft32.p4.g2 + ft32.p5.g2;
    // ft32.tot_g3 = ft32.p1.g3 + ft32.p2.g3 + ft32.p3.g3 + ft32.p4.g3 + ft32.p5.g3;
    // ft32.tot_semi = ft32.p1.semi + ft32.p2.semi + ft32.p3.semi + ft32.p4.semi + ft32.p5.semi;
    // ft32.tot_td3 = ft32.p1.td3 + ft32.p2.td3 + ft32.p3.td3 + ft32.p4.td3 + ft32.p5.td3;
    // ft32.tot_final = ft32.p1.final + ft32.p2.final + ft32.p3.final + ft32.p4.final + ft32.p5.final;
    // ft32.tot_team = ft32.p1.tot + ft32.p2.tot + ft32.p3.tot + ft32.p4.tot + ft32.p5.tot + ft32.rione.final_points;
    // const ft33 = {
    //     ...fantateam_type,
    //     team_index: 33,
    //     name: "Ghetto boys",
    //     rione: { ...NORD },
    //     p1: { ...MiracleObichukwu24 },
    //     p2: { ...LarryTrevisan24 },
    //     p3: { ...GiovanniTonizzo24 },
    //     p4: { ...PietroSoramel24 },
    //     p5: { ...DiegoNata24 },
    // };
    // ft33.total_cost = ft33.p1.cost + ft33.p2.cost + ft33.p3.cost + ft33.p4.cost + ft33.p5.cost;
    // ft33.tot_g1 = ft33.p1.g1 + ft33.p2.g1 + ft33.p3.g1 + ft33.p4.g1 + ft33.p5.g1;
    // ft33.tot_g2 = ft33.p1.g2 + ft33.p2.g2 + ft33.p3.g2 + ft33.p4.g2 + ft33.p5.g2;
    // ft33.tot_g3 = ft33.p1.g3 + ft33.p2.g3 + ft33.p3.g3 + ft33.p4.g3 + ft33.p5.g3;
    // ft33.tot_semi = ft33.p1.semi + ft33.p2.semi + ft33.p3.semi + ft33.p4.semi + ft33.p5.semi;
    // ft33.tot_td3 = ft33.p1.td3 + ft33.p2.td3 + ft33.p3.td3 + ft33.p4.td3 + ft33.p5.td3;
    // ft33.tot_final = ft33.p1.final + ft33.p2.final + ft33.p3.final + ft33.p4.final + ft33.p5.final;
    // ft33.tot_team = ft33.p1.tot + ft33.p2.tot + ft33.p3.tot + ft33.p4.tot + ft33.p5.tot + ft33.rione.final_points;
    // const ft34 = {
    //     ...fantateam_type,
    //     team_index: 34,
    //     name: "GIOGIZ",
    //     rione: { ...WEST },
    //     p1: { ...GiacomoPiacentini24 },
    //     p2: { ...GiacomoFerigo24 },
    //     p3: { ...DevinChiarcos24 },
    //     p4: { ...DavidGaspardo24 },
    //     p5: { ...FilippoAgnoluzzi24 },
    // };
    // ft34.total_cost = ft34.p1.cost + ft34.p2.cost + ft34.p3.cost + ft34.p4.cost + ft34.p5.cost;
    // ft34.tot_g1 = ft34.p1.g1 + ft34.p2.g1 + ft34.p3.g1 + ft34.p4.g1 + ft34.p5.g1;
    // ft34.tot_g2 = ft34.p1.g2 + ft34.p2.g2 + ft34.p3.g2 + ft34.p4.g2 + ft34.p5.g2;
    // ft34.tot_g3 = ft34.p1.g3 + ft34.p2.g3 + ft34.p3.g3 + ft34.p4.g3 + ft34.p5.g3;
    // ft34.tot_semi = ft34.p1.semi + ft34.p2.semi + ft34.p3.semi + ft34.p4.semi + ft34.p5.semi;
    // ft34.tot_td3 = ft34.p1.td3 + ft34.p2.td3 + ft34.p3.td3 + ft34.p4.td3 + ft34.p5.td3;
    // ft34.tot_final = ft34.p1.final + ft34.p2.final + ft34.p3.final + ft34.p4.final + ft34.p5.final;
    // ft34.tot_team = ft34.p1.tot + ft34.p2.tot + ft34.p3.tot + ft34.p4.tot + ft34.p5.tot + ft34.rione.final_points;
    // const ft35 = {
    //     ...fantateam_type,
    //     team_index: 35,
    //     name: "After CapOstile",
    //     rione: { ...WEST },
    //     p1: { ...SebastianoTonizzo24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...LarryTrevisan24 },
    //     p4: { ...MiracleObichukwu24 },
    //     p5: { ...VittorioGri24 },
    // };
    // ft35.total_cost = ft35.p1.cost + ft35.p2.cost + ft35.p3.cost + ft35.p4.cost + ft35.p5.cost;
    // ft35.tot_g1 = ft35.p1.g1 + ft35.p2.g1 + ft35.p3.g1 + ft35.p4.g1 + ft35.p5.g1;
    // ft35.tot_g2 = ft35.p1.g2 + ft35.p2.g2 + ft35.p3.g2 + ft35.p4.g2 + ft35.p5.g2;
    // ft35.tot_g3 = ft35.p1.g3 + ft35.p2.g3 + ft35.p3.g3 + ft35.p4.g3 + ft35.p5.g3;
    // ft35.tot_semi = ft35.p1.semi + ft35.p2.semi + ft35.p3.semi + ft35.p4.semi + ft35.p5.semi;
    // ft35.tot_td3 = ft35.p1.td3 + ft35.p2.td3 + ft35.p3.td3 + ft35.p4.td3 + ft35.p5.td3;
    // ft35.tot_final = ft35.p1.final + ft35.p2.final + ft35.p3.final + ft35.p4.final + ft35.p5.final;
    // ft35.tot_team = ft35.p1.tot + ft35.p2.tot + ft35.p3.tot + ft35.p4.tot + ft35.p5.tot + ft35.rione.final_points;
    // const ft36 = {
    //     ...fantateam_type,
    //     team_index: 36,
    //     name: "Ringhio",
    //     rione: { ...WEST },
    //     p1: { ...LucaSoramel24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...LarryTrevisan24 },
    //     p4: { ...AlessandroRojatti24 },
    //     p5: { ...GiacomoFerigo24 },
    // };
    // ft36.total_cost = ft36.p1.cost + ft36.p2.cost + ft36.p3.cost + ft36.p4.cost + ft36.p5.cost;
    // ft36.tot_g1 = ft36.p1.g1 + ft36.p2.g1 + ft36.p3.g1 + ft36.p4.g1 + ft36.p5.g1;
    // ft36.tot_g2 = ft36.p1.g2 + ft36.p2.g2 + ft36.p3.g2 + ft36.p4.g2 + ft36.p5.g2;
    // ft36.tot_g3 = ft36.p1.g3 + ft36.p2.g3 + ft36.p3.g3 + ft36.p4.g3 + ft36.p5.g3;
    // ft36.tot_semi = ft36.p1.semi + ft36.p2.semi + ft36.p3.semi + ft36.p4.semi + ft36.p5.semi;
    // ft36.tot_td3 = ft36.p1.td3 + ft36.p2.td3 + ft36.p3.td3 + ft36.p4.td3 + ft36.p5.td3;
    // ft36.tot_final = ft36.p1.final + ft36.p2.final + ft36.p3.final + ft36.p4.final + ft36.p5.final;
    // ft36.tot_team = ft36.p1.tot + ft36.p2.tot + ft36.p3.tot + ft36.p4.tot + ft36.p5.tot + ft36.rione.final_points;
    // const ft37 = {
    //     ...fantateam_type,
    //     team_index: 37,
    //     name: "Matte",
    //     rione: { ...WEST },
    //     p1: { ...GiacomoSilvestri24 },
    //     p2: { ...MarcoSerrao24 },
    //     p3: { ...LucaGemo24 },
    //     p4: { ...FilippoSappa24 },
    //     p5: { ...LarryTrevisan24 },
    // };
    // ft37.total_cost = ft37.p1.cost + ft37.p2.cost + ft37.p3.cost + ft37.p4.cost + ft37.p5.cost;
    // ft37.tot_g1 = ft37.p1.g1 + ft37.p2.g1 + ft37.p3.g1 + ft37.p4.g1 + ft37.p5.g1;
    // ft37.tot_g2 = ft37.p1.g2 + ft37.p2.g2 + ft37.p3.g2 + ft37.p4.g2 + ft37.p5.g2;
    // ft37.tot_g3 = ft37.p1.g3 + ft37.p2.g3 + ft37.p3.g3 + ft37.p4.g3 + ft37.p5.g3;
    // ft37.tot_semi = ft37.p1.semi + ft37.p2.semi + ft37.p3.semi + ft37.p4.semi + ft37.p5.semi;
    // ft37.tot_td3 = ft37.p1.td3 + ft37.p2.td3 + ft37.p3.td3 + ft37.p4.td3 + ft37.p5.td3;
    // ft37.tot_final = ft37.p1.final + ft37.p2.final + ft37.p3.final + ft37.p4.final + ft37.p5.final;
    // ft37.tot_team = ft37.p1.tot + ft37.p2.tot + ft37.p3.tot + ft37.p4.tot + ft37.p5.tot + ft37.rione.final_points;
    // const ft38 = {
    //     ...fantateam_type,
    //     team_index: 38,
    //     name: "Unavoltaerofortealchiosco!",
    //     rione: { ...WEST },
    //     p1: { ...UmbertoNobile24 },
    //     p2: { ...MarcoSerrao24 },
    //     p3: { ...AlessandroRizzi24 },
    //     p4: { ...GiacomoPiacentini24 },
    //     p5: { ...MassimilianoRossi24 },
    // };
    // ft38.total_cost = ft38.p1.cost + ft38.p2.cost + ft38.p3.cost + ft38.p4.cost + ft38.p5.cost;
    // ft38.tot_g1 = ft38.p1.g1 + ft38.p2.g1 + ft38.p3.g1 + ft38.p4.g1 + ft38.p5.g1;
    // ft38.tot_g2 = ft38.p1.g2 + ft38.p2.g2 + ft38.p3.g2 + ft38.p4.g2 + ft38.p5.g2;
    // ft38.tot_g3 = ft38.p1.g3 + ft38.p2.g3 + ft38.p3.g3 + ft38.p4.g3 + ft38.p5.g3;
    // ft38.tot_semi = ft38.p1.semi + ft38.p2.semi + ft38.p3.semi + ft38.p4.semi + ft38.p5.semi;
    // ft38.tot_td3 = ft38.p1.td3 + ft38.p2.td3 + ft38.p3.td3 + ft38.p4.td3 + ft38.p5.td3;
    // ft38.tot_final = ft38.p1.final + ft38.p2.final + ft38.p3.final + ft38.p4.final + ft38.p5.final;
    // ft38.tot_team = ft38.p1.tot + ft38.p2.tot + ft38.p3.tot + ft38.p4.tot + ft38.p5.tot + ft38.rione.final_points;
    // const ft39 = {
    //     ...fantateam_type,
    //     team_index: 39,
    //     name: "Samu Masotti",
    //     rione: { ...EST },
    //     p1: { ...DevinChiarcos24 },
    //     p2: { ...AlessandroCostantini24 },
    //     p3: { ...VittorioBasso24 },
    //     p4: { ...FilippoPasquon24 },
    //     p5: { ...DavideBroggi24 },
    // };
    // ft39.total_cost = ft39.p1.cost + ft39.p2.cost + ft39.p3.cost + ft39.p4.cost + ft39.p5.cost;
    // ft39.tot_g1 = ft39.p1.g1 + ft39.p2.g1 + ft39.p3.g1 + ft39.p4.g1 + ft39.p5.g1;
    // ft39.tot_g2 = ft39.p1.g2 + ft39.p2.g2 + ft39.p3.g2 + ft39.p4.g2 + ft39.p5.g2;
    // ft39.tot_g3 = ft39.p1.g3 + ft39.p2.g3 + ft39.p3.g3 + ft39.p4.g3 + ft39.p5.g3;
    // ft39.tot_semi = ft39.p1.semi + ft39.p2.semi + ft39.p3.semi + ft39.p4.semi + ft39.p5.semi;
    // ft39.tot_td3 = ft39.p1.td3 + ft39.p2.td3 + ft39.p3.td3 + ft39.p4.td3 + ft39.p5.td3;
    // ft39.tot_final = ft39.p1.final + ft39.p2.final + ft39.p3.final + ft39.p4.final + ft39.p5.final;
    // ft39.tot_team = ft39.p1.tot + ft39.p2.tot + ft39.p3.tot + ft39.p4.tot + ft39.p5.tot + ft39.rione.final_points;
    // const ft40 = {
    //     ...fantateam_type,
    //     team_index: 40,
    //     name: "Machico",
    //     rione: { ...NORD },
    //     p1: { ...AndreaMoretti24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...GiovanniTonizzo24 },
    //     p4: { ...LucaAnedda24 },
    //     p5: { ...PietroSoramel24 },
    // };
    // ft40.total_cost = ft40.p1.cost + ft40.p2.cost + ft40.p3.cost + ft40.p4.cost + ft40.p5.cost;
    // ft40.tot_g1 = ft40.p1.g1 + ft40.p2.g1 + ft40.p3.g1 + ft40.p4.g1 + ft40.p5.g1;
    // ft40.tot_g2 = ft40.p1.g2 + ft40.p2.g2 + ft40.p3.g2 + ft40.p4.g2 + ft40.p5.g2;
    // ft40.tot_g3 = ft40.p1.g3 + ft40.p2.g3 + ft40.p3.g3 + ft40.p4.g3 + ft40.p5.g3;
    // ft40.tot_semi = ft40.p1.semi + ft40.p2.semi + ft40.p3.semi + ft40.p4.semi + ft40.p5.semi;
    // ft40.tot_td3 = ft40.p1.td3 + ft40.p2.td3 + ft40.p3.td3 + ft40.p4.td3 + ft40.p5.td3;
    // ft40.tot_final = ft40.p1.final + ft40.p2.final + ft40.p3.final + ft40.p4.final + ft40.p5.final;
    // ft40.tot_team = ft40.p1.tot + ft40.p2.tot + ft40.p3.tot + ft40.p4.tot + ft40.p5.tot + ft40.rione.final_points;
    // const ft41 = {
    //     ...fantateam_type,
    //     team_index: 41,
    //     name: "Alto Moro",
    //     rione: { ...SUD },
    //     p1: { ...ChristianZanet24 },
    //     p2: { ...MicheleDeAnna24 },
    //     p3: { ...UmbertoNobile24 },
    //     p4: { ...FilippoPasquon24 },
    //     p5: { ...MattiaMasotti24 },
    // };
    // ft41.total_cost = ft41.p1.cost + ft41.p2.cost + ft41.p3.cost + ft41.p4.cost + ft41.p5.cost;
    // ft41.tot_g1 = ft41.p1.g1 + ft41.p2.g1 + ft41.p3.g1 + ft41.p4.g1 + ft41.p5.g1;
    // ft41.tot_g2 = ft41.p1.g2 + ft41.p2.g2 + ft41.p3.g2 + ft41.p4.g2 + ft41.p5.g2;
    // ft41.tot_g3 = ft41.p1.g3 + ft41.p2.g3 + ft41.p3.g3 + ft41.p4.g3 + ft41.p5.g3;
    // ft41.tot_semi = ft41.p1.semi + ft41.p2.semi + ft41.p3.semi + ft41.p4.semi + ft41.p5.semi;
    // ft41.tot_td3 = ft41.p1.td3 + ft41.p2.td3 + ft41.p3.td3 + ft41.p4.td3 + ft41.p5.td3;
    // ft41.tot_final = ft41.p1.final + ft41.p2.final + ft41.p3.final + ft41.p4.final + ft41.p5.final;
    // ft41.tot_team = ft41.p1.tot + ft41.p2.tot + ft41.p3.tot + ft41.p4.tot + ft41.p5.tot + ft41.rione.final_points;
    // const ft42 = {
    //     ...fantateam_type,
    //     team_index: 42,
    //     name: "Fittofatto BC",
    //     rione: { ...NORD },
    //     p1: { ...FilippoPasquon24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...PietroSoramel24 },
    //     p4: { ...MattiaRoiatti24 },
    //     p5: { ...LucaAnedda24 },
    // };
    // ft42.total_cost = ft42.p1.cost + ft42.p2.cost + ft42.p3.cost + ft42.p4.cost + ft42.p5.cost;
    // ft42.tot_g1 = ft42.p1.g1 + ft42.p2.g1 + ft42.p3.g1 + ft42.p4.g1 + ft42.p5.g1;
    // ft42.tot_g2 = ft42.p1.g2 + ft42.p2.g2 + ft42.p3.g2 + ft42.p4.g2 + ft42.p5.g2;
    // ft42.tot_g3 = ft42.p1.g3 + ft42.p2.g3 + ft42.p3.g3 + ft42.p4.g3 + ft42.p5.g3;
    // ft42.tot_semi = ft42.p1.semi + ft42.p2.semi + ft42.p3.semi + ft42.p4.semi + ft42.p5.semi;
    // ft42.tot_td3 = ft42.p1.td3 + ft42.p2.td3 + ft42.p3.td3 + ft42.p4.td3 + ft42.p5.td3;
    // ft42.tot_final = ft42.p1.final + ft42.p2.final + ft42.p3.final + ft42.p4.final + ft42.p5.final;
    // ft42.tot_team = ft42.p1.tot + ft42.p2.tot + ft42.p3.tot + ft42.p4.tot + ft42.p5.tot + ft42.rione.final_points;
    // const ft43 = {
    //     ...fantateam_type,
    //     team_index: 43,
    //     name: "Caspinixx",
    //     rione: { ...SUD },
    //     p1: { ...MarcoRizzi24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...AndreaMoretti24 },
    //     p4: { ...LucaSoramel24 },
    //     p5: { ...PietroSoramel24 },
    // };
    // ft43.total_cost = ft43.p1.cost + ft43.p2.cost + ft43.p3.cost + ft43.p4.cost + ft43.p5.cost;
    // ft43.tot_g1 = ft43.p1.g1 + ft43.p2.g1 + ft43.p3.g1 + ft43.p4.g1 + ft43.p5.g1;
    // ft43.tot_g2 = ft43.p1.g2 + ft43.p2.g2 + ft43.p3.g2 + ft43.p4.g2 + ft43.p5.g2;
    // ft43.tot_g3 = ft43.p1.g3 + ft43.p2.g3 + ft43.p3.g3 + ft43.p4.g3 + ft43.p5.g3;
    // ft43.tot_semi = ft43.p1.semi + ft43.p2.semi + ft43.p3.semi + ft43.p4.semi + ft43.p5.semi;
    // ft43.tot_td3 = ft43.p1.td3 + ft43.p2.td3 + ft43.p3.td3 + ft43.p4.td3 + ft43.p5.td3;
    // ft43.tot_final = ft43.p1.final + ft43.p2.final + ft43.p3.final + ft43.p4.final + ft43.p5.final;
    // ft43.tot_team = ft43.p1.tot + ft43.p2.tot + ft43.p3.tot + ft43.p4.tot + ft43.p5.tot + ft43.rione.final_points;
    // const ft44 = {
    //     ...fantateam_type,
    //     team_index: 44,
    //     name: "Enea",
    //     rione: { ...NORD },
    //     p1: { ...GabrieleMiani24 },
    //     p2: { ...GiacomoFerigo24 },
    //     p3: { ...DevinChiarcos24 },
    //     p4: { ...VittorioBasso24 },
    //     p5: { ...AntonioGri24 },
    // };
    // ft44.total_cost = ft44.p1.cost + ft44.p2.cost + ft44.p3.cost + ft44.p4.cost + ft44.p5.cost;
    // ft44.tot_g1 = ft44.p1.g1 + ft44.p2.g1 + ft44.p3.g1 + ft44.p4.g1 + ft44.p5.g1;
    // ft44.tot_g2 = ft44.p1.g2 + ft44.p2.g2 + ft44.p3.g2 + ft44.p4.g2 + ft44.p5.g2;
    // ft44.tot_g3 = ft44.p1.g3 + ft44.p2.g3 + ft44.p3.g3 + ft44.p4.g3 + ft44.p5.g3;
    // ft44.tot_semi = ft44.p1.semi + ft44.p2.semi + ft44.p3.semi + ft44.p4.semi + ft44.p5.semi;
    // ft44.tot_td3 = ft44.p1.td3 + ft44.p2.td3 + ft44.p3.td3 + ft44.p4.td3 + ft44.p5.td3;
    // ft44.tot_final = ft44.p1.final + ft44.p2.final + ft44.p3.final + ft44.p4.final + ft44.p5.final;
    // ft44.tot_team = ft44.p1.tot + ft44.p2.tot + ft44.p3.tot + ft44.p4.tot + ft44.p5.tot + ft44.rione.final_points;
    // const ft45 = {
    //     ...fantateam_type,
    //     team_index: 45,
    //     name: "TheFinalCut95",
    //     rione: { ...WEST },
    //     p1: { ...AlessandroSant24 },
    //     p2: { ...LucaSoramel24 },
    //     p3: { ...DanieleGanzit24 },
    //     p4: { ...UmbertoNobile24 },
    //     p5: { ...EnricoSant24 },
    // };
    // ft45.total_cost = ft45.p1.cost + ft45.p2.cost + ft45.p3.cost + ft45.p4.cost + ft45.p5.cost;
    // ft45.tot_g1 = ft45.p1.g1 + ft45.p2.g1 + ft45.p3.g1 + ft45.p4.g1 + ft45.p5.g1;
    // ft45.tot_g2 = ft45.p1.g2 + ft45.p2.g2 + ft45.p3.g2 + ft45.p4.g2 + ft45.p5.g2;
    // ft45.tot_g3 = ft45.p1.g3 + ft45.p2.g3 + ft45.p3.g3 + ft45.p4.g3 + ft45.p5.g3;
    // ft45.tot_semi = ft45.p1.semi + ft45.p2.semi + ft45.p3.semi + ft45.p4.semi + ft45.p5.semi;
    // ft45.tot_td3 = ft45.p1.td3 + ft45.p2.td3 + ft45.p3.td3 + ft45.p4.td3 + ft45.p5.td3;
    // ft45.tot_final = ft45.p1.final + ft45.p2.final + ft45.p3.final + ft45.p4.final + ft45.p5.final;
    // ft45.tot_team = ft45.p1.tot + ft45.p2.tot + ft45.p3.tot + ft45.p4.tot + ft45.p5.tot + ft45.rione.final_points;
    // const ft46 = {
    //     ...fantateam_type,
    //     team_index: 46,
    //     name: "SEBA CENGA",
    //     rione: { ...WEST },
    //     p1: { ...LucaDellaLonga24 },
    //     p2: { ...DiegoNata24 },
    //     p3: { ...AndreaMoretti24 },
    //     p4: { ...UmbertoNobile24 },
    //     p5: { ...DavideFaurlin24 },
    // };
    // ft46.total_cost = ft46.p1.cost + ft46.p2.cost + ft46.p3.cost + ft46.p4.cost + ft46.p5.cost;
    // ft46.tot_g1 = ft46.p1.g1 + ft46.p2.g1 + ft46.p3.g1 + ft46.p4.g1 + ft46.p5.g1;
    // ft46.tot_g2 = ft46.p1.g2 + ft46.p2.g2 + ft46.p3.g2 + ft46.p4.g2 + ft46.p5.g2;
    // ft46.tot_g3 = ft46.p1.g3 + ft46.p2.g3 + ft46.p3.g3 + ft46.p4.g3 + ft46.p5.g3;
    // ft46.tot_semi = ft46.p1.semi + ft46.p2.semi + ft46.p3.semi + ft46.p4.semi + ft46.p5.semi;
    // ft46.tot_td3 = ft46.p1.td3 + ft46.p2.td3 + ft46.p3.td3 + ft46.p4.td3 + ft46.p5.td3;
    // ft46.tot_final = ft46.p1.final + ft46.p2.final + ft46.p3.final + ft46.p4.final + ft46.p5.final;
    // ft46.tot_team = ft46.p1.tot + ft46.p2.tot + ft46.p3.tot + ft46.p4.tot + ft46.p5.tot + ft46.rione.final_points;
    // const ft47 = {
    //     ...fantateam_type,
    //     team_index: 47,
    //     name: "Carichi",
    //     rione: { ...NORD },
    //     p1: { ...MiracleObichukwu24 },
    //     p2: { ...AlessandroCostantini24 },
    //     p3: { ...MatteoMargarit24 },
    //     p4: { ...GiacomoPiacentini24 },
    //     p5: { ...ChristianZanet24 },
    // };
    // ft47.total_cost = ft47.p1.cost + ft47.p2.cost + ft47.p3.cost + ft47.p4.cost + ft47.p5.cost;
    // ft47.tot_g1 = ft47.p1.g1 + ft47.p2.g1 + ft47.p3.g1 + ft47.p4.g1 + ft47.p5.g1;
    // ft47.tot_g2 = ft47.p1.g2 + ft47.p2.g2 + ft47.p3.g2 + ft47.p4.g2 + ft47.p5.g2;
    // ft47.tot_g3 = ft47.p1.g3 + ft47.p2.g3 + ft47.p3.g3 + ft47.p4.g3 + ft47.p5.g3;
    // ft47.tot_semi = ft47.p1.semi + ft47.p2.semi + ft47.p3.semi + ft47.p4.semi + ft47.p5.semi;
    // ft47.tot_td3 = ft47.p1.td3 + ft47.p2.td3 + ft47.p3.td3 + ft47.p4.td3 + ft47.p5.td3;
    // ft47.tot_final = ft47.p1.final + ft47.p2.final + ft47.p3.final + ft47.p4.final + ft47.p5.final;
    // ft47.tot_team = ft47.p1.tot + ft47.p2.tot + ft47.p3.tot + ft47.p4.tot + ft47.p5.tot + ft47.rione.final_points;
    // const ft48 = {
    //     ...fantateam_type,
    //     team_index: 48,
    //     name: "TheFinalCut95!",
    //     rione: { ...WEST },
    //     p1: { ...AlessandroSant24 },
    //     p2: { ...LucaSoramel24 },
    //     p3: { ...DanieleGanzit24 },
    //     p4: { ...UmbertoNobile24 },
    //     p5: { ...EnricoSant24 },
    // };
    // ft48.total_cost = ft48.p1.cost + ft48.p2.cost + ft48.p3.cost + ft48.p4.cost + ft48.p5.cost;
    // ft48.tot_g1 = ft48.p1.g1 + ft48.p2.g1 + ft48.p3.g1 + ft48.p4.g1 + ft48.p5.g1;
    // ft48.tot_g2 = ft48.p1.g2 + ft48.p2.g2 + ft48.p3.g2 + ft48.p4.g2 + ft48.p5.g2;
    // ft48.tot_g3 = ft48.p1.g3 + ft48.p2.g3 + ft48.p3.g3 + ft48.p4.g3 + ft48.p5.g3;
    // ft48.tot_semi = ft48.p1.semi + ft48.p2.semi + ft48.p3.semi + ft48.p4.semi + ft48.p5.semi;
    // ft48.tot_td3 = ft48.p1.td3 + ft48.p2.td3 + ft48.p3.td3 + ft48.p4.td3 + ft48.p5.td3;
    // ft48.tot_final = ft48.p1.final + ft48.p2.final + ft48.p3.final + ft48.p4.final + ft48.p5.final;
    // ft48.tot_team = ft48.p1.tot + ft48.p2.tot + ft48.p3.tot + ft48.p4.tot + ft48.p5.tot + ft48.rione.final_points;
    // const ft49 = {
    //     ...fantateam_type,
    //     team_index: 49,
    //     name: "I Penny's Five",
    //     rione: { ...SUD },
    //     p1: { ...MassimilianoRossi24 },
    //     p2: { ...AlessandroRizzi24 },
    //     p3: { ...TommasoMartello24 },
    //     p4: { ...UmbertoNobile24 },
    //     p5: { ...GiovanniTonizzo24 },
    // };
    // ft49.total_cost = ft49.p1.cost + ft49.p2.cost + ft49.p3.cost + ft49.p4.cost + ft49.p5.cost;
    // ft49.tot_g1 = ft49.p1.g1 + ft49.p2.g1 + ft49.p3.g1 + ft49.p4.g1 + ft49.p5.g1;
    // ft49.tot_g2 = ft49.p1.g2 + ft49.p2.g2 + ft49.p3.g2 + ft49.p4.g2 + ft49.p5.g2;
    // ft49.tot_g3 = ft49.p1.g3 + ft49.p2.g3 + ft49.p3.g3 + ft49.p4.g3 + ft49.p5.g3;
    // ft49.tot_semi = ft49.p1.semi + ft49.p2.semi + ft49.p3.semi + ft49.p4.semi + ft49.p5.semi;
    // ft49.tot_td3 = ft49.p1.td3 + ft49.p2.td3 + ft49.p3.td3 + ft49.p4.td3 + ft49.p5.td3;
    // ft49.tot_final = ft49.p1.final + ft49.p2.final + ft49.p3.final + ft49.p4.final + ft49.p5.final;
    // ft49.tot_team = ft49.p1.tot + ft49.p2.tot + ft49.p3.tot + ft49.p4.tot + ft49.p5.tot + ft49.rione.final_points;
    // const ft50 = {
    //     ...fantateam_type,
    //     team_index: 50,
    //     name: "Bmax",
    //     rione: { ...EST },
    //     p1: { ...EnricoSant24 },
    //     p2: { ...MattiaMasotti24 },
    //     p3: { ...UmbertoNobile24 },
    //     p4: { ...FilippoPasquon24 },
    //     p5: { ...MarcoLombardo24 },
    // };
    // ft50.total_cost = ft50.p1.cost + ft50.p2.cost + ft50.p3.cost + ft50.p4.cost + ft50.p5.cost;
    // ft50.tot_g1 = ft50.p1.g1 + ft50.p2.g1 + ft50.p3.g1 + ft50.p4.g1 + ft50.p5.g1;
    // ft50.tot_g2 = ft50.p1.g2 + ft50.p2.g2 + ft50.p3.g2 + ft50.p4.g2 + ft50.p5.g2;
    // ft50.tot_g3 = ft50.p1.g3 + ft50.p2.g3 + ft50.p3.g3 + ft50.p4.g3 + ft50.p5.g3;
    // ft50.tot_semi = ft50.p1.semi + ft50.p2.semi + ft50.p3.semi + ft50.p4.semi + ft50.p5.semi;
    // ft50.tot_td3 = ft50.p1.td3 + ft50.p2.td3 + ft50.p3.td3 + ft50.p4.td3 + ft50.p5.td3;
    // ft50.tot_final = ft50.p1.final + ft50.p2.final + ft50.p3.final + ft50.p4.final + ft50.p5.final;
    // ft50.tot_team = ft50.p1.tot + ft50.p2.tot + ft50.p3.tot + ft50.p4.tot + ft50.p5.tot + ft50.rione.final_points;
    // const ft51 = {
    //     ...fantateam_type,
    //     team_index: 51,
    //     name: "Gli Sbronzatissimi",
    //     rione: { ...NORD },
    //     p1: { ...GiovanniTonizzo24 },
    //     p2: { ...UmbertoNobile24 },
    //     p3: { ...AlessandroRizzi24 },
    //     p4: { ...MarcoLombardo24 },
    //     p5: { ...MattiaRoiatti24 },
    // };
    // ft51.total_cost = ft51.p1.cost + ft51.p2.cost + ft51.p3.cost + ft51.p4.cost + ft51.p5.cost;
    // ft51.tot_g1 = ft51.p1.g1 + ft51.p2.g1 + ft51.p3.g1 + ft51.p4.g1 + ft51.p5.g1;
    // ft51.tot_g2 = ft51.p1.g2 + ft51.p2.g2 + ft51.p3.g2 + ft51.p4.g2 + ft51.p5.g2;
    // ft51.tot_g3 = ft51.p1.g3 + ft51.p2.g3 + ft51.p3.g3 + ft51.p4.g3 + ft51.p5.g3;
    // ft51.tot_semi = ft51.p1.semi + ft51.p2.semi + ft51.p3.semi + ft51.p4.semi + ft51.p5.semi;
    // ft51.tot_td3 = ft51.p1.td3 + ft51.p2.td3 + ft51.p3.td3 + ft51.p4.td3 + ft51.p5.td3;
    // ft51.tot_final = ft51.p1.final + ft51.p2.final + ft51.p3.final + ft51.p4.final + ft51.p5.final;
    // ft51.tot_team = ft51.p1.tot + ft51.p2.tot + ft51.p3.tot + ft51.p4.tot + ft51.p5.tot + ft51.rione.final_points;
    // const ft52 = {
    //     ...fantateam_type,
    //     team_index: 52,
    //     name: "I belli",
    //     rione: { ...NORD },
    //     p1: { ...LucaAnedda24 },
    //     p2: { ...AlessandroRizzi24 },
    //     p3: { ...PietroSoramel24 },
    //     p4: { ...GiovanniTonizzo24 },
    //     p5: { ...AlessandroCostantini24 },
    // };
    // ft52.total_cost = ft52.p1.cost + ft52.p2.cost + ft52.p3.cost + ft52.p4.cost + ft52.p5.cost;
    // ft52.tot_g1 = ft52.p1.g1 + ft52.p2.g1 + ft52.p3.g1 + ft52.p4.g1 + ft52.p5.g1;
    // ft52.tot_g2 = ft52.p1.g2 + ft52.p2.g2 + ft52.p3.g2 + ft52.p4.g2 + ft52.p5.g2;
    // ft52.tot_g3 = ft52.p1.g3 + ft52.p2.g3 + ft52.p3.g3 + ft52.p4.g3 + ft52.p5.g3;
    // ft52.tot_semi = ft52.p1.semi + ft52.p2.semi + ft52.p3.semi + ft52.p4.semi + ft52.p5.semi;
    // ft52.tot_td3 = ft52.p1.td3 + ft52.p2.td3 + ft52.p3.td3 + ft52.p4.td3 + ft52.p5.td3;
    // ft52.tot_final = ft52.p1.final + ft52.p2.final + ft52.p3.final + ft52.p4.final + ft52.p5.final;
    // ft52.tot_team = ft52.p1.tot + ft52.p2.tot + ft52.p3.tot + ft52.p4.tot + ft52.p5.tot + ft52.rione.final_points;
    // const ft53 = {
    //     ...fantateam_type,
    //     team_index: 53,
    //     name: "Golden shower",
    //     rione: { ...WEST },
    //     p1: { ...MattiaMasotti24 },
    //     p2: { ...AlessandroRizzi24 },
    //     p3: { ...MatteoMargarit24 },
    //     p4: { ...PietroSoramel24 },
    //     p5: { ...MattiaRoiatti24 },
    // };
    // ft53.total_cost = ft53.p1.cost + ft53.p2.cost + ft53.p3.cost + ft53.p4.cost + ft53.p5.cost;
    // ft53.tot_g1 = ft53.p1.g1 + ft53.p2.g1 + ft53.p3.g1 + ft53.p4.g1 + ft53.p5.g1;
    // ft53.tot_g2 = ft53.p1.g2 + ft53.p2.g2 + ft53.p3.g2 + ft53.p4.g2 + ft53.p5.g2;
    // ft53.tot_g3 = ft53.p1.g3 + ft53.p2.g3 + ft53.p3.g3 + ft53.p4.g3 + ft53.p5.g3;
    // ft53.tot_semi = ft53.p1.semi + ft53.p2.semi + ft53.p3.semi + ft53.p4.semi + ft53.p5.semi;
    // ft53.tot_td3 = ft53.p1.td3 + ft53.p2.td3 + ft53.p3.td3 + ft53.p4.td3 + ft53.p5.td3;
    // ft53.tot_final = ft53.p1.final + ft53.p2.final + ft53.p3.final + ft53.p4.final + ft53.p5.final;
    // ft53.tot_team = ft53.p1.tot + ft53.p2.tot + ft53.p3.tot + ft53.p4.tot + ft53.p5.tot + ft53.rione.final_points;
    // const ft54 = {
    //     ...fantateam_type,
    //     team_index: 54,
    //     name: "DOZERS CONFEDERATI",
    //     rione: { ...SUD },
    //     p1: { ...AlessandroSant24 },
    //     p2: { ...AlessioFurlan24 },
    //     p3: { ...AlessandroRizzi24 },
    //     p4: { ...PietroSoramel24 },
    //     p5: { ...LucaSoramel24 },
    // };
    // ft54.total_cost = ft54.p1.cost + ft54.p2.cost + ft54.p3.cost + ft54.p4.cost + ft54.p5.cost;
    // ft54.tot_g1 = ft54.p1.g1 + ft54.p2.g1 + ft54.p3.g1 + ft54.p4.g1 + ft54.p5.g1;
    // ft54.tot_g2 = ft54.p1.g2 + ft54.p2.g2 + ft54.p3.g2 + ft54.p4.g2 + ft54.p5.g2;
    // ft54.tot_g3 = ft54.p1.g3 + ft54.p2.g3 + ft54.p3.g3 + ft54.p4.g3 + ft54.p5.g3;
    // ft54.tot_semi = ft54.p1.semi + ft54.p2.semi + ft54.p3.semi + ft54.p4.semi + ft54.p5.semi;
    // ft54.tot_td3 = ft54.p1.td3 + ft54.p2.td3 + ft54.p3.td3 + ft54.p4.td3 + ft54.p5.td3;
    // ft54.tot_final = ft54.p1.final + ft54.p2.final + ft54.p3.final + ft54.p4.final + ft54.p5.final;
    // ft54.tot_team = ft54.p1.tot + ft54.p2.tot + ft54.p3.tot + ft54.p4.tot + ft54.p5.tot + ft54.rione.final_points;
    // const ft55 = {
    //     ...fantateam_type,
    //     team_index: 55,
    //     name: "Appalla",
    //     rione: { ...WEST },
    //     p1: { ...VittorioBasso24 },
    //     p2: { ...LucaDellaLonga24 },
    //     p3: { ...AlessandroSant24 },
    //     p4: { ...FilippoSappa24 },
    //     p5: { ...MattiaMasotti24 },
    // };
    // ft55.total_cost = ft55.p1.cost + ft55.p2.cost + ft55.p3.cost + ft55.p4.cost + ft55.p5.cost;
    // ft55.tot_g1 = ft55.p1.g1 + ft55.p2.g1 + ft55.p3.g1 + ft55.p4.g1 + ft55.p5.g1;
    // ft55.tot_g2 = ft55.p1.g2 + ft55.p2.g2 + ft55.p3.g2 + ft55.p4.g2 + ft55.p5.g2;
    // ft55.tot_g3 = ft55.p1.g3 + ft55.p2.g3 + ft55.p3.g3 + ft55.p4.g3 + ft55.p5.g3;
    // ft55.tot_semi = ft55.p1.semi + ft55.p2.semi + ft55.p3.semi + ft55.p4.semi + ft55.p5.semi;
    // ft55.tot_td3 = ft55.p1.td3 + ft55.p2.td3 + ft55.p3.td3 + ft55.p4.td3 + ft55.p5.td3;
    // ft55.tot_final = ft55.p1.final + ft55.p2.final + ft55.p3.final + ft55.p4.final + ft55.p5.final;
    // ft55.tot_team = ft55.p1.tot + ft55.p2.tot + ft55.p3.tot + ft55.p4.tot + ft55.p5.tot + ft55.rione.final_points;
    // const ft56 = {
    //     ...fantateam_type,
    //     team_index: 56,
    //     name: "I pupetti",
    //     rione: { ...EST },
    //     p1: { ...LucaSoramel24 },
    //     p2: { ...AlessandroRizzi24 },
    //     p3: { ...AlessandroCostantini24 },
    //     p4: { ...VittorioGri24 },
    //     p5: { ...PietroSoramel24 },
    // };
    // ft56.total_cost = ft56.p1.cost + ft56.p2.cost + ft56.p3.cost + ft56.p4.cost + ft56.p5.cost;
    // ft56.tot_g1 = ft56.p1.g1 + ft56.p2.g1 + ft56.p3.g1 + ft56.p4.g1 + ft56.p5.g1;
    // ft56.tot_g2 = ft56.p1.g2 + ft56.p2.g2 + ft56.p3.g2 + ft56.p4.g2 + ft56.p5.g2;
    // ft56.tot_g3 = ft56.p1.g3 + ft56.p2.g3 + ft56.p3.g3 + ft56.p4.g3 + ft56.p5.g3;
    // ft56.tot_semi = ft56.p1.semi + ft56.p2.semi + ft56.p3.semi + ft56.p4.semi + ft56.p5.semi;
    // ft56.tot_td3 = ft56.p1.td3 + ft56.p2.td3 + ft56.p3.td3 + ft56.p4.td3 + ft56.p5.td3;
    // ft56.tot_final = ft56.p1.final + ft56.p2.final + ft56.p3.final + ft56.p4.final + ft56.p5.final;
    // ft56.tot_team = ft56.p1.tot + ft56.p2.tot + ft56.p3.tot + ft56.p4.tot + ft56.p5.tot + ft56.rione.final_points;
    // const ft57 = {
    //     ...fantateam_type,
    //     team_index: 57,
    //     name: "The best",
    //     rione: { ...WEST },
    //     p1: { ...GiacomoFerigo24 },
    //     p2: { ...VittorioBasso24 },
    //     p3: { ...GiovanniDalFarra24 },
    //     p4: { ...TommasoMartello24 },
    //     p5: { ...MassimilianoMoretti24 },
    // };
    // ft57.total_cost = ft57.p1.cost + ft57.p2.cost + ft57.p3.cost + ft57.p4.cost + ft57.p5.cost;
    // ft57.tot_g1 = ft57.p1.g1 + ft57.p2.g1 + ft57.p3.g1 + ft57.p4.g1 + ft57.p5.g1;
    // ft57.tot_g2 = ft57.p1.g2 + ft57.p2.g2 + ft57.p3.g2 + ft57.p4.g2 + ft57.p5.g2;
    // ft57.tot_g3 = ft57.p1.g3 + ft57.p2.g3 + ft57.p3.g3 + ft57.p4.g3 + ft57.p5.g3;
    // ft57.tot_semi = ft57.p1.semi + ft57.p2.semi + ft57.p3.semi + ft57.p4.semi + ft57.p5.semi;
    // ft57.tot_td3 = ft57.p1.td3 + ft57.p2.td3 + ft57.p3.td3 + ft57.p4.td3 + ft57.p5.td3;
    // ft57.tot_final = ft57.p1.final + ft57.p2.final + ft57.p3.final + ft57.p4.final + ft57.p5.final;
    // ft57.tot_team = ft57.p1.tot + ft57.p2.tot + ft57.p3.tot + ft57.p4.tot + ft57.p5.tot + ft57.rione.final_points;
    // const ft58 = {
    //     ...fantateam_type,
    //     team_index: 58,
    //     name: "Betta Zul",
    //     rione: { ...EST },
    //     p1: { ...MattiaMasotti24 },
    //     p2: { ...LucaDellaLonga24 },
    //     p3: { ...MarcoSerrao24 },
    //     p4: { ...FilippoSappa24 },
    //     p5: { ...EnricoSant24 },
    // };
    // ft58.total_cost = ft58.p1.cost + ft58.p2.cost + ft58.p3.cost + ft58.p4.cost + ft58.p5.cost;
    // ft58.tot_g1 = ft58.p1.g1 + ft58.p2.g1 + ft58.p3.g1 + ft58.p4.g1 + ft58.p5.g1;
    // ft58.tot_g2 = ft58.p1.g2 + ft58.p2.g2 + ft58.p3.g2 + ft58.p4.g2 + ft58.p5.g2;
    // ft58.tot_g3 = ft58.p1.g3 + ft58.p2.g3 + ft58.p3.g3 + ft58.p4.g3 + ft58.p5.g3;
    // ft58.tot_semi = ft58.p1.semi + ft58.p2.semi + ft58.p3.semi + ft58.p4.semi + ft58.p5.semi;
    // ft58.tot_td3 = ft58.p1.td3 + ft58.p2.td3 + ft58.p3.td3 + ft58.p4.td3 + ft58.p5.td3;
    // ft58.tot_final = ft58.p1.final + ft58.p2.final + ft58.p3.final + ft58.p4.final + ft58.p5.final;
    // ft58.tot_team = ft58.p1.tot + ft58.p2.tot + ft58.p3.tot + ft58.p4.tot + ft58.p5.tot + ft58.rione.final_points;
    // const ft59 = {
    //     ...fantateam_type,
    //     team_index: 59,
    //     name: "Fil🥷",
    //     rione: { ...EST },
    //     p1: { ...ThomasBaracetti24 },
    //     p2: { ...ValentinoCigainero24 },
    //     p3: { ...MassimilianoMoretti24 },
    //     p4: { ...LarryTrevisan24 },
    //     p5: { ...AlexMicottis24 },
    // };
    // ft59.total_cost = ft59.p1.cost + ft59.p2.cost + ft59.p3.cost + ft59.p4.cost + ft59.p5.cost;
    // ft59.tot_g1 = ft59.p1.g1 + ft59.p2.g1 + ft59.p3.g1 + ft59.p4.g1 + ft59.p5.g1;
    // ft59.tot_g2 = ft59.p1.g2 + ft59.p2.g2 + ft59.p3.g2 + ft59.p4.g2 + ft59.p5.g2;
    // ft59.tot_g3 = ft59.p1.g3 + ft59.p2.g3 + ft59.p3.g3 + ft59.p4.g3 + ft59.p5.g3;
    // ft59.tot_semi = ft59.p1.semi + ft59.p2.semi + ft59.p3.semi + ft59.p4.semi + ft59.p5.semi;
    // ft59.tot_td3 = ft59.p1.td3 + ft59.p2.td3 + ft59.p3.td3 + ft59.p4.td3 + ft59.p5.td3;
    // ft59.tot_final = ft59.p1.final + ft59.p2.final + ft59.p3.final + ft59.p4.final + ft59.p5.final;
    // ft59.tot_team = ft59.p1.tot + ft59.p2.tot + ft59.p3.tot + ft59.p4.tot + ft59.p5.tot + ft59.rione.final_points;
    // const ft60 = {
    //     ...fantateam_type,
    //     team_index: 60,
    //     name: "i Bolliti",
    //     rione: { ...SUD },
    //     p1: { ...LarryTrevisan24 },
    //     p2: { ...AlessandroCostantini24 },
    //     p3: { ...DavidGaspardo24 },
    //     p4: { ...MatteoSpagnolo24 },
    //     p5: { ...AlessandroSantin24 },
    // };
    // ft60.total_cost = ft60.p1.cost + ft60.p2.cost + ft60.p3.cost + ft60.p4.cost + ft60.p5.cost;
    // ft60.tot_g1 = ft60.p1.g1 + ft60.p2.g1 + ft60.p3.g1 + ft60.p4.g1 + ft60.p5.g1;
    // ft60.tot_g2 = ft60.p1.g2 + ft60.p2.g2 + ft60.p3.g2 + ft60.p4.g2 + ft60.p5.g2;
    // ft60.tot_g3 = ft60.p1.g3 + ft60.p2.g3 + ft60.p3.g3 + ft60.p4.g3 + ft60.p5.g3;
    // ft60.tot_semi = ft60.p1.semi + ft60.p2.semi + ft60.p3.semi + ft60.p4.semi + ft60.p5.semi;
    // ft60.tot_td3 = ft60.p1.td3 + ft60.p2.td3 + ft60.p3.td3 + ft60.p4.td3 + ft60.p5.td3;
    // ft60.tot_final = ft60.p1.final + ft60.p2.final + ft60.p3.final + ft60.p4.final + ft60.p5.final;
    // ft60.tot_team = ft60.p1.tot + ft60.p2.tot + ft60.p3.tot + ft60.p4.tot + ft60.p5.tot + ft60.rione.final_points;
    // const ft61 = {
    //     ...fantateam_type,
    //     team_index: 61,
    //     name: "CT",
    //     rione: { ...NORD },
    //     p1: { ...PietroSoramel24 },
    //     p2: { ...GiovanniZanin24 },
    //     p3: { ...TommasoMartello24 },
    //     p4: { ...EnricoSant24 },
    //     p5: { ...AntonioGri24 },
    // };
    // ft61.total_cost = ft61.p1.cost + ft61.p2.cost + ft61.p3.cost + ft61.p4.cost + ft61.p5.cost;
    // ft61.tot_g1 = ft61.p1.g1 + ft61.p2.g1 + ft61.p3.g1 + ft61.p4.g1 + ft61.p5.g1;
    // ft61.tot_g2 = ft61.p1.g2 + ft61.p2.g2 + ft61.p3.g2 + ft61.p4.g2 + ft61.p5.g2;
    // ft61.tot_g3 = ft61.p1.g3 + ft61.p2.g3 + ft61.p3.g3 + ft61.p4.g3 + ft61.p5.g3;
    // ft61.tot_semi = ft61.p1.semi + ft61.p2.semi + ft61.p3.semi + ft61.p4.semi + ft61.p5.semi;
    // ft61.tot_td3 = ft61.p1.td3 + ft61.p2.td3 + ft61.p3.td3 + ft61.p4.td3 + ft61.p5.td3;
    // ft61.tot_final = ft61.p1.final + ft61.p2.final + ft61.p3.final + ft61.p4.final + ft61.p5.final;
    // ft61.tot_team = ft61.p1.tot + ft61.p2.tot + ft61.p3.tot + ft61.p4.tot + ft61.p5.tot + ft61.rione.final_points;
    // const ft62 = {
    //     ...fantateam_type,
    //     team_index: 62,
    //     name: "I miracoli",
    //     rione: { ...WEST },
    //     p1: { ...AlessandroSant24 },
    //     p2: { ...AlessandroRizzi24 },
    //     p3: { ...GiacomoPiacentini24 },
    //     p4: { ...MattiaMasotti24 },
    //     p5: { ...DevinChiarcos24 },
    // };
    // ft62.total_cost = ft62.p1.cost + ft62.p2.cost + ft62.p3.cost + ft62.p4.cost + ft62.p5.cost;
    // ft62.tot_g1 = ft62.p1.g1 + ft62.p2.g1 + ft62.p3.g1 + ft62.p4.g1 + ft62.p5.g1;
    // ft62.tot_g2 = ft62.p1.g2 + ft62.p2.g2 + ft62.p3.g2 + ft62.p4.g2 + ft62.p5.g2;
    // ft62.tot_g3 = ft62.p1.g3 + ft62.p2.g3 + ft62.p3.g3 + ft62.p4.g3 + ft62.p5.g3;
    // ft62.tot_semi = ft62.p1.semi + ft62.p2.semi + ft62.p3.semi + ft62.p4.semi + ft62.p5.semi;
    // ft62.tot_td3 = ft62.p1.td3 + ft62.p2.td3 + ft62.p3.td3 + ft62.p4.td3 + ft62.p5.td3;
    // ft62.tot_final = ft62.p1.final + ft62.p2.final + ft62.p3.final + ft62.p4.final + ft62.p5.final;
    // ft62.tot_team = ft62.p1.tot + ft62.p2.tot + ft62.p3.tot + ft62.p4.tot + ft62.p5.tot + ft62.rione.final_points;
    // const ft63 = {
    //     ...fantateam_type,
    //     team_index: 63,
    //     name: "Dr Tanzimat",
    //     rione: { ...SUD },
    //     p1: { ...GiovanniZanin24 },
    //     p2: { ...LucaSoramel24 },
    //     p3: { ...PietroSoramel24 },
    //     p4: { ...GiovanniTonizzo24 },
    //     p5: { ...VittorioGri24 },
    // };
    // ft63.total_cost = ft63.p1.cost + ft63.p2.cost + ft63.p3.cost + ft63.p4.cost + ft63.p5.cost;
    // ft63.tot_g1 = ft63.p1.g1 + ft63.p2.g1 + ft63.p3.g1 + ft63.p4.g1 + ft63.p5.g1;
    // ft63.tot_g2 = ft63.p1.g2 + ft63.p2.g2 + ft63.p3.g2 + ft63.p4.g2 + ft63.p5.g2;
    // ft63.tot_g3 = ft63.p1.g3 + ft63.p2.g3 + ft63.p3.g3 + ft63.p4.g3 + ft63.p5.g3;
    // ft63.tot_semi = ft63.p1.semi + ft63.p2.semi + ft63.p3.semi + ft63.p4.semi + ft63.p5.semi;
    // ft63.tot_td3 = ft63.p1.td3 + ft63.p2.td3 + ft63.p3.td3 + ft63.p4.td3 + ft63.p5.td3;
    // ft63.tot_final = ft63.p1.final + ft63.p2.final + ft63.p3.final + ft63.p4.final + ft63.p5.final;
    // ft63.tot_team = ft63.p1.tot + ft63.p2.tot + ft63.p3.tot + ft63.p4.tot + ft63.p5.tot + ft63.rione.final_points;
    // const ft64 = {
    //     ...fantateam_type,
    //     team_index: 64,
    //     name: "Vichingo72",
    //     rione: { ...NORD },
    //     p1: { ...LucaAnedda24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...AlessandroCostantini24 },
    //     p4: { ...MauroPerina24 },
    //     p5: { ...MattiaRoiatti24 },
    // };
    // ft64.total_cost = ft64.p1.cost + ft64.p2.cost + ft64.p3.cost + ft64.p4.cost + ft64.p5.cost;
    // ft64.tot_g1 = ft64.p1.g1 + ft64.p2.g1 + ft64.p3.g1 + ft64.p4.g1 + ft64.p5.g1;
    // ft64.tot_g2 = ft64.p1.g2 + ft64.p2.g2 + ft64.p3.g2 + ft64.p4.g2 + ft64.p5.g2;
    // ft64.tot_g3 = ft64.p1.g3 + ft64.p2.g3 + ft64.p3.g3 + ft64.p4.g3 + ft64.p5.g3;
    // ft64.tot_semi = ft64.p1.semi + ft64.p2.semi + ft64.p3.semi + ft64.p4.semi + ft64.p5.semi;
    // ft64.tot_td3 = ft64.p1.td3 + ft64.p2.td3 + ft64.p3.td3 + ft64.p4.td3 + ft64.p5.td3;
    // ft64.tot_final = ft64.p1.final + ft64.p2.final + ft64.p3.final + ft64.p4.final + ft64.p5.final;
    // ft64.tot_team = ft64.p1.tot + ft64.p2.tot + ft64.p3.tot + ft64.p4.tot + ft64.p5.tot + ft64.rione.final_points;
    // const ft65 = {
    //     ...fantateam_type,
    //     team_index: 65,
    //     name: "ivan",
    //     rione: { ...NORD },
    //     p1: { ...FilippoPasquon24 },
    //     p2: { ...MiracleObichukwu24 },
    //     p3: { ...AlessandroGalassi24 },
    //     p4: { ...PietroSoramel24 },
    //     p5: { ...AlessandroRizzi24 },
    // };
    // ft65.total_cost = ft65.p1.cost + ft65.p2.cost + ft65.p3.cost + ft65.p4.cost + ft65.p5.cost;
    // ft65.tot_g1 = ft65.p1.g1 + ft65.p2.g1 + ft65.p3.g1 + ft65.p4.g1 + ft65.p5.g1;
    // ft65.tot_g2 = ft65.p1.g2 + ft65.p2.g2 + ft65.p3.g2 + ft65.p4.g2 + ft65.p5.g2;
    // ft65.tot_g3 = ft65.p1.g3 + ft65.p2.g3 + ft65.p3.g3 + ft65.p4.g3 + ft65.p5.g3;
    // ft65.tot_semi = ft65.p1.semi + ft65.p2.semi + ft65.p3.semi + ft65.p4.semi + ft65.p5.semi;
    // ft65.tot_td3 = ft65.p1.td3 + ft65.p2.td3 + ft65.p3.td3 + ft65.p4.td3 + ft65.p5.td3;
    // ft65.tot_final = ft65.p1.final + ft65.p2.final + ft65.p3.final + ft65.p4.final + ft65.p5.final;
    // ft65.tot_team = ft65.p1.tot + ft65.p2.tot + ft65.p3.tot + ft65.p4.tot + ft65.p5.tot + ft65.rione.final_points;
    // const ft66 = {
    //     ...fantateam_type,
    //     team_index: 66,
    //     name: "Dusty Bottoms",
    //     rione: { ...WEST },
    //     p1: { ...GiacomoPiacentini24 },
    //     p2: { ...AlessandroCostantini24 },
    //     p3: { ...LarryTrevisan24 },
    //     p4: { ...MicheleDeAnna24 },
    //     p5: { ...ChristianZanet24 },
    // };
    // ft66.total_cost = ft66.p1.cost + ft66.p2.cost + ft66.p3.cost + ft66.p4.cost + ft66.p5.cost;
    // ft66.tot_g1 = ft66.p1.g1 + ft66.p2.g1 + ft66.p3.g1 + ft66.p4.g1 + ft66.p5.g1;
    // ft66.tot_g2 = ft66.p1.g2 + ft66.p2.g2 + ft66.p3.g2 + ft66.p4.g2 + ft66.p5.g2;
    // ft66.tot_g3 = ft66.p1.g3 + ft66.p2.g3 + ft66.p3.g3 + ft66.p4.g3 + ft66.p5.g3;
    // ft66.tot_semi = ft66.p1.semi + ft66.p2.semi + ft66.p3.semi + ft66.p4.semi + ft66.p5.semi;
    // ft66.tot_td3 = ft66.p1.td3 + ft66.p2.td3 + ft66.p3.td3 + ft66.p4.td3 + ft66.p5.td3;
    // ft66.tot_final = ft66.p1.final + ft66.p2.final + ft66.p3.final + ft66.p4.final + ft66.p5.final;
    // ft66.tot_team = ft66.p1.tot + ft66.p2.tot + ft66.p3.tot + ft66.p4.tot + ft66.p5.tot + ft66.rione.final_points;
    // const ft67 = {
    //     ...fantateam_type,
    //     team_index: 67,
    //     name: "Spagnolo sposami",
    //     rione: { ...SUD },
    //     p1: { ...SebastianoTonizzo24 },
    //     p2: { ...MatteoSpagnolo24 },
    //     p3: { ...MatteoMargarit24 },
    //     p4: { ...DavideParon24 },
    //     p5: { ...MichaelMargarit24 },
    // };
    // ft67.total_cost = ft67.p1.cost + ft67.p2.cost + ft67.p3.cost + ft67.p4.cost + ft67.p5.cost;
    // ft67.tot_g1 = ft67.p1.g1 + ft67.p2.g1 + ft67.p3.g1 + ft67.p4.g1 + ft67.p5.g1;
    // ft67.tot_g2 = ft67.p1.g2 + ft67.p2.g2 + ft67.p3.g2 + ft67.p4.g2 + ft67.p5.g2;
    // ft67.tot_g3 = ft67.p1.g3 + ft67.p2.g3 + ft67.p3.g3 + ft67.p4.g3 + ft67.p5.g3;
    // ft67.tot_semi = ft67.p1.semi + ft67.p2.semi + ft67.p3.semi + ft67.p4.semi + ft67.p5.semi;
    // ft67.tot_td3 = ft67.p1.td3 + ft67.p2.td3 + ft67.p3.td3 + ft67.p4.td3 + ft67.p5.td3;
    // ft67.tot_final = ft67.p1.final + ft67.p2.final + ft67.p3.final + ft67.p4.final + ft67.p5.final;
    // ft67.tot_team = ft67.p1.tot + ft67.p2.tot + ft67.p3.tot + ft67.p4.tot + ft67.p5.tot + ft67.rione.final_points;
    // const ft68 = {
    //     ...fantateam_type,
    //     team_index: 68,
    //     name: "Franta Palio",
    //     rione: { ...NORD },
    //     p1: { ...FilippoSappa24 },
    //     p2: { ...AlessandroRojatti24 },
    //     p3: { ...AlessandroRizzi24 },
    //     p4: { ...TommasoMartello24 },
    //     p5: { ...GiovanniTonizzo24 },
    // };
    // ft68.total_cost = ft68.p1.cost + ft68.p2.cost + ft68.p3.cost + ft68.p4.cost + ft68.p5.cost;
    // ft68.tot_g1 = ft68.p1.g1 + ft68.p2.g1 + ft68.p3.g1 + ft68.p4.g1 + ft68.p5.g1;
    // ft68.tot_g2 = ft68.p1.g2 + ft68.p2.g2 + ft68.p3.g2 + ft68.p4.g2 + ft68.p5.g2;
    // ft68.tot_g3 = ft68.p1.g3 + ft68.p2.g3 + ft68.p3.g3 + ft68.p4.g3 + ft68.p5.g3;
    // ft68.tot_semi = ft68.p1.semi + ft68.p2.semi + ft68.p3.semi + ft68.p4.semi + ft68.p5.semi;
    // ft68.tot_td3 = ft68.p1.td3 + ft68.p2.td3 + ft68.p3.td3 + ft68.p4.td3 + ft68.p5.td3;
    // ft68.tot_final = ft68.p1.final + ft68.p2.final + ft68.p3.final + ft68.p4.final + ft68.p5.final;
    // ft68.tot_team = ft68.p1.tot + ft68.p2.tot + ft68.p3.tot + ft68.p4.tot + ft68.p5.tot + ft68.rione.final_points;
    // const ft69 = {
    //     ...fantateam_type,
    //     team_index: 69,
    //     name: "Nani del sud",
    //     rione: { ...SUD },
    //     p1: { ...FilippoAgnoluzzi24 },
    //     p2: { ...FilippoSappa24 },
    //     p3: { ...LucaAnedda24 },
    //     p4: { ...GiacomoSilvestri24 },
    //     p5: { ...DavidGaspardo24 },
    // };
    // ft69.total_cost = ft69.p1.cost + ft69.p2.cost + ft69.p3.cost + ft69.p4.cost + ft69.p5.cost;
    // ft69.tot_g1 = ft69.p1.g1 + ft69.p2.g1 + ft69.p3.g1 + ft69.p4.g1 + ft69.p5.g1;
    // ft69.tot_g2 = ft69.p1.g2 + ft69.p2.g2 + ft69.p3.g2 + ft69.p4.g2 + ft69.p5.g2;
    // ft69.tot_g3 = ft69.p1.g3 + ft69.p2.g3 + ft69.p3.g3 + ft69.p4.g3 + ft69.p5.g3;
    // ft69.tot_semi = ft69.p1.semi + ft69.p2.semi + ft69.p3.semi + ft69.p4.semi + ft69.p5.semi;
    // ft69.tot_td3 = ft69.p1.td3 + ft69.p2.td3 + ft69.p3.td3 + ft69.p4.td3 + ft69.p5.td3;
    // ft69.tot_final = ft69.p1.final + ft69.p2.final + ft69.p3.final + ft69.p4.final + ft69.p5.final;
    // ft69.tot_team = ft69.p1.tot + ft69.p2.tot + ft69.p3.tot + ft69.p4.tot + ft69.p5.tot + ft69.rione.final_points;
    // const ft70 = {
    //     ...fantateam_type,
    //     team_index: 70,
    //     name: "Penelope's Team",
    //     rione: { ...SUD },
    //     p1: { ...GiovanniTonizzo24 },
    //     p2: { ...AlessandroSant24 },
    //     p3: { ...MarcoPolo24 },
    //     p4: { ...LucaSoramel24 },
    //     p5: { ...FilippoSappa24 },
    // };
    // ft70.total_cost = ft70.p1.cost + ft70.p2.cost + ft70.p3.cost + ft70.p4.cost + ft70.p5.cost;
    // ft70.tot_g1 = ft70.p1.g1 + ft70.p2.g1 + ft70.p3.g1 + ft70.p4.g1 + ft70.p5.g1;
    // ft70.tot_g2 = ft70.p1.g2 + ft70.p2.g2 + ft70.p3.g2 + ft70.p4.g2 + ft70.p5.g2;
    // ft70.tot_g3 = ft70.p1.g3 + ft70.p2.g3 + ft70.p3.g3 + ft70.p4.g3 + ft70.p5.g3;
    // ft70.tot_semi = ft70.p1.semi + ft70.p2.semi + ft70.p3.semi + ft70.p4.semi + ft70.p5.semi;
    // ft70.tot_td3 = ft70.p1.td3 + ft70.p2.td3 + ft70.p3.td3 + ft70.p4.td3 + ft70.p5.td3;
    // ft70.tot_final = ft70.p1.final + ft70.p2.final + ft70.p3.final + ft70.p4.final + ft70.p5.final;
    // ft70.tot_team = ft70.p1.tot + ft70.p2.tot + ft70.p3.tot + ft70.p4.tot + ft70.p5.tot + ft70.rione.final_points;
    // const ft71 = {
    //     ...fantateam_type,
    //     team_index: 71,
    //     name: "Codroipen F.C.",
    //     rione: { ...WEST },
    //     p1: { ...DavideParon24 },
    //     p2: { ...DevinChiarcos24 },
    //     p3: { ...GabrieleMiani24 },
    //     p4: { ...EdoardoPicogna24 },
    //     p5: { ...VittorioBasso24 },
    // };
    // ft71.total_cost = ft71.p1.cost + ft71.p2.cost + ft71.p3.cost + ft71.p4.cost + ft71.p5.cost;
    // ft71.tot_g1 = ft71.p1.g1 + ft71.p2.g1 + ft71.p3.g1 + ft71.p4.g1 + ft71.p5.g1;
    // ft71.tot_g2 = ft71.p1.g2 + ft71.p2.g2 + ft71.p3.g2 + ft71.p4.g2 + ft71.p5.g2;
    // ft71.tot_g3 = ft71.p1.g3 + ft71.p2.g3 + ft71.p3.g3 + ft71.p4.g3 + ft71.p5.g3;
    // ft71.tot_semi = ft71.p1.semi + ft71.p2.semi + ft71.p3.semi + ft71.p4.semi + ft71.p5.semi;
    // ft71.tot_td3 = ft71.p1.td3 + ft71.p2.td3 + ft71.p3.td3 + ft71.p4.td3 + ft71.p5.td3;
    // ft71.tot_final = ft71.p1.final + ft71.p2.final + ft71.p3.final + ft71.p4.final + ft71.p5.final;
    // ft71.tot_team = ft71.p1.tot + ft71.p2.tot + ft71.p3.tot + ft71.p4.tot + ft71.p5.tot + ft71.rione.final_points;
    // const ft72 = {
    //     ...fantateam_type,
    //     team_index: 72,
    //     name: "west solos",
    //     rione: { ...WEST },
    //     p1: { ...MassimoMasotti24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...GiacomoPiacentini24 },
    //     p4: { ...MiracleObichukwu24 },
    //     p5: { ...EnricoSant24 },
    // };
    // ft72.total_cost = ft72.p1.cost + ft72.p2.cost + ft72.p3.cost + ft72.p4.cost + ft72.p5.cost;
    // ft72.tot_g1 = ft72.p1.g1 + ft72.p2.g1 + ft72.p3.g1 + ft72.p4.g1 + ft72.p5.g1;
    // ft72.tot_g2 = ft72.p1.g2 + ft72.p2.g2 + ft72.p3.g2 + ft72.p4.g2 + ft72.p5.g2;
    // ft72.tot_g3 = ft72.p1.g3 + ft72.p2.g3 + ft72.p3.g3 + ft72.p4.g3 + ft72.p5.g3;
    // ft72.tot_semi = ft72.p1.semi + ft72.p2.semi + ft72.p3.semi + ft72.p4.semi + ft72.p5.semi;
    // ft72.tot_td3 = ft72.p1.td3 + ft72.p2.td3 + ft72.p3.td3 + ft72.p4.td3 + ft72.p5.td3;
    // ft72.tot_final = ft72.p1.final + ft72.p2.final + ft72.p3.final + ft72.p4.final + ft72.p5.final;
    // ft72.tot_team = ft72.p1.tot + ft72.p2.tot + ft72.p3.tot + ft72.p4.tot + ft72.p5.tot + ft72.rione.final_points;
    // const ft73 = {
    //     ...fantateam_type,
    //     team_index: 73,
    //     name: "Sud",
    //     rione: { ...SUD },
    //     p1: { ...GiacomoPiacentini24 },
    //     p2: { ...DevinChiarcos24 },
    //     p3: { ...VittorioBasso24 },
    //     p4: { ...EdoardoPicogna24 },
    //     p5: { ...DavidGaspardo24 },
    // };
    // ft73.total_cost = ft73.p1.cost + ft73.p2.cost + ft73.p3.cost + ft73.p4.cost + ft73.p5.cost;
    // ft73.tot_g1 = ft73.p1.g1 + ft73.p2.g1 + ft73.p3.g1 + ft73.p4.g1 + ft73.p5.g1;
    // ft73.tot_g2 = ft73.p1.g2 + ft73.p2.g2 + ft73.p3.g2 + ft73.p4.g2 + ft73.p5.g2;
    // ft73.tot_g3 = ft73.p1.g3 + ft73.p2.g3 + ft73.p3.g3 + ft73.p4.g3 + ft73.p5.g3;
    // ft73.tot_semi = ft73.p1.semi + ft73.p2.semi + ft73.p3.semi + ft73.p4.semi + ft73.p5.semi;
    // ft73.tot_td3 = ft73.p1.td3 + ft73.p2.td3 + ft73.p3.td3 + ft73.p4.td3 + ft73.p5.td3;
    // ft73.tot_final = ft73.p1.final + ft73.p2.final + ft73.p3.final + ft73.p4.final + ft73.p5.final;
    // ft73.tot_team = ft73.p1.tot + ft73.p2.tot + ft73.p3.tot + ft73.p4.tot + ft73.p5.tot + ft73.rione.final_points;
    // const ft74 = {
    //     ...fantateam_type,
    //     team_index: 74,
    //     name: "NORDmania",
    //     rione: { ...NORD },
    //     p1: { ...GioeleTudini24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...FilippoPasquon24 },
    //     p4: { ...MatteoSpagnolo24 },
    //     p5: { ...MattiaMasotti24 },
    // };
    // ft74.total_cost = ft74.p1.cost + ft74.p2.cost + ft74.p3.cost + ft74.p4.cost + ft74.p5.cost;
    // ft74.tot_g1 = ft74.p1.g1 + ft74.p2.g1 + ft74.p3.g1 + ft74.p4.g1 + ft74.p5.g1;
    // ft74.tot_g2 = ft74.p1.g2 + ft74.p2.g2 + ft74.p3.g2 + ft74.p4.g2 + ft74.p5.g2;
    // ft74.tot_g3 = ft74.p1.g3 + ft74.p2.g3 + ft74.p3.g3 + ft74.p4.g3 + ft74.p5.g3;
    // ft74.tot_semi = ft74.p1.semi + ft74.p2.semi + ft74.p3.semi + ft74.p4.semi + ft74.p5.semi;
    // ft74.tot_td3 = ft74.p1.td3 + ft74.p2.td3 + ft74.p3.td3 + ft74.p4.td3 + ft74.p5.td3;
    // ft74.tot_final = ft74.p1.final + ft74.p2.final + ft74.p3.final + ft74.p4.final + ft74.p5.final;
    // ft74.tot_team = ft74.p1.tot + ft74.p2.tot + ft74.p3.tot + ft74.p4.tot + ft74.p5.tot + ft74.rione.final_points;
    // const ft75 = {
    //     ...fantateam_type,
    //     team_index: 75,
    //     name: "Ta qifsha pidhin",
    //     rione: { ...EST },
    //     p1: { ...GionaTell24 },
    //     p2: { ...AlessandroSantin24 },
    //     p3: { ...MassimilianoMoretti24 },
    //     p4: { ...MassimoBaldassi24 },
    //     p5: { ...LarryTrevisan24 },
    // };
    // ft75.total_cost = ft75.p1.cost + ft75.p2.cost + ft75.p3.cost + ft75.p4.cost + ft75.p5.cost;
    // ft75.tot_g1 = ft75.p1.g1 + ft75.p2.g1 + ft75.p3.g1 + ft75.p4.g1 + ft75.p5.g1;
    // ft75.tot_g2 = ft75.p1.g2 + ft75.p2.g2 + ft75.p3.g2 + ft75.p4.g2 + ft75.p5.g2;
    // ft75.tot_g3 = ft75.p1.g3 + ft75.p2.g3 + ft75.p3.g3 + ft75.p4.g3 + ft75.p5.g3;
    // ft75.tot_semi = ft75.p1.semi + ft75.p2.semi + ft75.p3.semi + ft75.p4.semi + ft75.p5.semi;
    // ft75.tot_td3 = ft75.p1.td3 + ft75.p2.td3 + ft75.p3.td3 + ft75.p4.td3 + ft75.p5.td3;
    // ft75.tot_final = ft75.p1.final + ft75.p2.final + ft75.p3.final + ft75.p4.final + ft75.p5.final;
    // ft75.tot_team = ft75.p1.tot + ft75.p2.tot + ft75.p3.tot + ft75.p4.tot + ft75.p5.tot + ft75.rione.final_points;
    // const ft76 = {
    //     ...fantateam_type,
    //     team_index: 76,
    //     name: "Le bimbe di maso",
    //     rione: { ...EST },
    //     p1: { ...MassimilianoMoretti24 },
    //     p2: { ...MiracleObichukwu24 },
    //     p3: { ...DenisVanin24 },
    //     p4: { ...MassimoMasotti24 },
    //     p5: { ...MattiaMasotti24 },
    // };
    // ft76.total_cost = ft76.p1.cost + ft76.p2.cost + ft76.p3.cost + ft76.p4.cost + ft76.p5.cost;
    // ft76.tot_g1 = ft76.p1.g1 + ft76.p2.g1 + ft76.p3.g1 + ft76.p4.g1 + ft76.p5.g1;
    // ft76.tot_g2 = ft76.p1.g2 + ft76.p2.g2 + ft76.p3.g2 + ft76.p4.g2 + ft76.p5.g2;
    // ft76.tot_g3 = ft76.p1.g3 + ft76.p2.g3 + ft76.p3.g3 + ft76.p4.g3 + ft76.p5.g3;
    // ft76.tot_semi = ft76.p1.semi + ft76.p2.semi + ft76.p3.semi + ft76.p4.semi + ft76.p5.semi;
    // ft76.tot_td3 = ft76.p1.td3 + ft76.p2.td3 + ft76.p3.td3 + ft76.p4.td3 + ft76.p5.td3;
    // ft76.tot_final = ft76.p1.final + ft76.p2.final + ft76.p3.final + ft76.p4.final + ft76.p5.final;
    // ft76.tot_team = ft76.p1.tot + ft76.p2.tot + ft76.p3.tot + ft76.p4.tot + ft76.p5.tot + ft76.rione.final_points;
    // const ft77 = {
    //     ...fantateam_type,
    //     team_index: 77,
    //     name: "DajeRoma",
    //     rione: { ...NORD },
    //     p1: { ...TommasoMartello24 },
    //     p2: { ...MiracleObichukwu24 },
    //     p3: { ...DanieleGanzit24 },
    //     p4: { ...MassimilianoMoretti24 },
    //     p5: { ...LucaAnedda24 },
    // };
    // ft77.total_cost = ft77.p1.cost + ft77.p2.cost + ft77.p3.cost + ft77.p4.cost + ft77.p5.cost;
    // ft77.tot_g1 = ft77.p1.g1 + ft77.p2.g1 + ft77.p3.g1 + ft77.p4.g1 + ft77.p5.g1;
    // ft77.tot_g2 = ft77.p1.g2 + ft77.p2.g2 + ft77.p3.g2 + ft77.p4.g2 + ft77.p5.g2;
    // ft77.tot_g3 = ft77.p1.g3 + ft77.p2.g3 + ft77.p3.g3 + ft77.p4.g3 + ft77.p5.g3;
    // ft77.tot_semi = ft77.p1.semi + ft77.p2.semi + ft77.p3.semi + ft77.p4.semi + ft77.p5.semi;
    // ft77.tot_td3 = ft77.p1.td3 + ft77.p2.td3 + ft77.p3.td3 + ft77.p4.td3 + ft77.p5.td3;
    // ft77.tot_final = ft77.p1.final + ft77.p2.final + ft77.p3.final + ft77.p4.final + ft77.p5.final;
    // ft77.tot_team = ft77.p1.tot + ft77.p2.tot + ft77.p3.tot + ft77.p4.tot + ft77.p5.tot + ft77.rione.final_points;
    // const ft78 = {
    //     ...fantateam_type,
    //     team_index: 78,
    //     name: "👸🏼",
    //     rione: { ...NORD },
    //     p1: { ...MattiaRoiatti24 },
    //     p2: { ...MauroCuridori24 },
    //     p3: { ...DanieleGanzit24 },
    //     p4: { ...DiegoNata24 },
    //     p5: { ...MatteoMargarit24 },
    // };
    // ft78.total_cost = ft78.p1.cost + ft78.p2.cost + ft78.p3.cost + ft78.p4.cost + ft78.p5.cost;
    // ft78.tot_g1 = ft78.p1.g1 + ft78.p2.g1 + ft78.p3.g1 + ft78.p4.g1 + ft78.p5.g1;
    // ft78.tot_g2 = ft78.p1.g2 + ft78.p2.g2 + ft78.p3.g2 + ft78.p4.g2 + ft78.p5.g2;
    // ft78.tot_g3 = ft78.p1.g3 + ft78.p2.g3 + ft78.p3.g3 + ft78.p4.g3 + ft78.p5.g3;
    // ft78.tot_semi = ft78.p1.semi + ft78.p2.semi + ft78.p3.semi + ft78.p4.semi + ft78.p5.semi;
    // ft78.tot_td3 = ft78.p1.td3 + ft78.p2.td3 + ft78.p3.td3 + ft78.p4.td3 + ft78.p5.td3;
    // ft78.tot_final = ft78.p1.final + ft78.p2.final + ft78.p3.final + ft78.p4.final + ft78.p5.final;
    // ft78.tot_team = ft78.p1.tot + ft78.p2.tot + ft78.p3.tot + ft78.p4.tot + ft78.p5.tot + ft78.rione.final_points;
    // const ft79 = {
    //     ...fantateam_type,
    //     team_index: 79,
    //     name: "Team17",
    //     rione: { ...WEST },
    //     p1: { ...DanieleGanzit24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...MattiaMasotti24 },
    //     p4: { ...PaoloZorzi24 },
    //     p5: { ...MassimilianoRossi24 },
    // };
    // ft79.total_cost = ft79.p1.cost + ft79.p2.cost + ft79.p3.cost + ft79.p4.cost + ft79.p5.cost;
    // ft79.tot_g1 = ft79.p1.g1 + ft79.p2.g1 + ft79.p3.g1 + ft79.p4.g1 + ft79.p5.g1;
    // ft79.tot_g2 = ft79.p1.g2 + ft79.p2.g2 + ft79.p3.g2 + ft79.p4.g2 + ft79.p5.g2;
    // ft79.tot_g3 = ft79.p1.g3 + ft79.p2.g3 + ft79.p3.g3 + ft79.p4.g3 + ft79.p5.g3;
    // ft79.tot_semi = ft79.p1.semi + ft79.p2.semi + ft79.p3.semi + ft79.p4.semi + ft79.p5.semi;
    // ft79.tot_td3 = ft79.p1.td3 + ft79.p2.td3 + ft79.p3.td3 + ft79.p4.td3 + ft79.p5.td3;
    // ft79.tot_final = ft79.p1.final + ft79.p2.final + ft79.p3.final + ft79.p4.final + ft79.p5.final;
    // ft79.tot_team = ft79.p1.tot + ft79.p2.tot + ft79.p3.tot + ft79.p4.tot + ft79.p5.tot + ft79.rione.final_points;
    // const ft80 = {
    //     ...fantateam_type,
    //     team_index: 80,
    //     name: "Trrr.... Non va!",
    //     rione: { ...SUD },
    //     p1: { ...GiovanniTonizzo24 },
    //     p2: { ...AlessandroSantin24 },
    //     p3: { ...AlessandroSant24 },
    //     p4: { ...DevinChiarcos24 },
    //     p5: { ...DiegoNata24 },
    // };
    // ft80.total_cost = ft80.p1.cost + ft80.p2.cost + ft80.p3.cost + ft80.p4.cost + ft80.p5.cost;
    // ft80.tot_g1 = ft80.p1.g1 + ft80.p2.g1 + ft80.p3.g1 + ft80.p4.g1 + ft80.p5.g1;
    // ft80.tot_g2 = ft80.p1.g2 + ft80.p2.g2 + ft80.p3.g2 + ft80.p4.g2 + ft80.p5.g2;
    // ft80.tot_g3 = ft80.p1.g3 + ft80.p2.g3 + ft80.p3.g3 + ft80.p4.g3 + ft80.p5.g3;
    // ft80.tot_semi = ft80.p1.semi + ft80.p2.semi + ft80.p3.semi + ft80.p4.semi + ft80.p5.semi;
    // ft80.tot_td3 = ft80.p1.td3 + ft80.p2.td3 + ft80.p3.td3 + ft80.p4.td3 + ft80.p5.td3;
    // ft80.tot_final = ft80.p1.final + ft80.p2.final + ft80.p3.final + ft80.p4.final + ft80.p5.final;
    // ft80.tot_team = ft80.p1.tot + ft80.p2.tot + ft80.p3.tot + ft80.p4.tot + ft80.p5.tot + ft80.rione.final_points;
    // const ft81 = {
    //     ...fantateam_type,
    //     team_index: 81,
    //     name: "La Foca per una Codroipo Libera",
    //     rione: { ...NORD },
    //     p1: { ...IacopoPivetta24 },
    //     p2: { ...LarryTrevisan24 },
    //     p3: { ...MiracleObichukwu24 },
    //     p4: { ...ValentinoCigainero24 },
    //     p5: { ...MarcoPolo24 },
    // };
    // ft81.total_cost = ft81.p1.cost + ft81.p2.cost + ft81.p3.cost + ft81.p4.cost + ft81.p5.cost;
    // ft81.tot_g1 = ft81.p1.g1 + ft81.p2.g1 + ft81.p3.g1 + ft81.p4.g1 + ft81.p5.g1;
    // ft81.tot_g2 = ft81.p1.g2 + ft81.p2.g2 + ft81.p3.g2 + ft81.p4.g2 + ft81.p5.g2;
    // ft81.tot_g3 = ft81.p1.g3 + ft81.p2.g3 + ft81.p3.g3 + ft81.p4.g3 + ft81.p5.g3;
    // ft81.tot_semi = ft81.p1.semi + ft81.p2.semi + ft81.p3.semi + ft81.p4.semi + ft81.p5.semi;
    // ft81.tot_td3 = ft81.p1.td3 + ft81.p2.td3 + ft81.p3.td3 + ft81.p4.td3 + ft81.p5.td3;
    // ft81.tot_final = ft81.p1.final + ft81.p2.final + ft81.p3.final + ft81.p4.final + ft81.p5.final;
    // ft81.tot_team = ft81.p1.tot + ft81.p2.tot + ft81.p3.tot + ft81.p4.tot + ft81.p5.tot + ft81.rione.final_points;
    // const ft82 = {
    //     ...fantateam_type,
    //     team_index: 82,
    //     name: "Non capisco di pallacanestro",
    //     rione: { ...NORD },
    //     p1: { ...MatteoMargarit24 },
    //     p2: { ...FilippoPasquon24 },
    //     p3: { ...LucaGemo24 },
    //     p4: { ...StefanoPolano24 },
    //     p5: { ...GiovanniZanin24 },
    // };
    // ft82.total_cost = ft82.p1.cost + ft82.p2.cost + ft82.p3.cost + ft82.p4.cost + ft82.p5.cost;
    // ft82.tot_g1 = ft82.p1.g1 + ft82.p2.g1 + ft82.p3.g1 + ft82.p4.g1 + ft82.p5.g1;
    // ft82.tot_g2 = ft82.p1.g2 + ft82.p2.g2 + ft82.p3.g2 + ft82.p4.g2 + ft82.p5.g2;
    // ft82.tot_g3 = ft82.p1.g3 + ft82.p2.g3 + ft82.p3.g3 + ft82.p4.g3 + ft82.p5.g3;
    // ft82.tot_semi = ft82.p1.semi + ft82.p2.semi + ft82.p3.semi + ft82.p4.semi + ft82.p5.semi;
    // ft82.tot_td3 = ft82.p1.td3 + ft82.p2.td3 + ft82.p3.td3 + ft82.p4.td3 + ft82.p5.td3;
    // ft82.tot_final = ft82.p1.final + ft82.p2.final + ft82.p3.final + ft82.p4.final + ft82.p5.final;
    // ft82.tot_team = ft82.p1.tot + ft82.p2.tot + ft82.p3.tot + ft82.p4.tot + ft82.p5.tot + ft82.rione.final_points;
    // const ft83 = {
    //     ...fantateam_type,
    //     team_index: 83,
    //     name: "TEAM LG",
    //     rione: { ...NORD },
    //     p1: { ...LucaGemo24 },
    //     p2: { ...GiovanniZanin24 },
    //     p3: { ...MatteoMargarit24 },
    //     p4: { ...StefanoPolano24 },
    //     p5: { ...EnricoSant24 },
    // };
    // ft83.total_cost = ft83.p1.cost + ft83.p2.cost + ft83.p3.cost + ft83.p4.cost + ft83.p5.cost;
    // ft83.tot_g1 = ft83.p1.g1 + ft83.p2.g1 + ft83.p3.g1 + ft83.p4.g1 + ft83.p5.g1;
    // ft83.tot_g2 = ft83.p1.g2 + ft83.p2.g2 + ft83.p3.g2 + ft83.p4.g2 + ft83.p5.g2;
    // ft83.tot_g3 = ft83.p1.g3 + ft83.p2.g3 + ft83.p3.g3 + ft83.p4.g3 + ft83.p5.g3;
    // ft83.tot_semi = ft83.p1.semi + ft83.p2.semi + ft83.p3.semi + ft83.p4.semi + ft83.p5.semi;
    // ft83.tot_td3 = ft83.p1.td3 + ft83.p2.td3 + ft83.p3.td3 + ft83.p4.td3 + ft83.p5.td3;
    // ft83.tot_final = ft83.p1.final + ft83.p2.final + ft83.p3.final + ft83.p4.final + ft83.p5.final;
    // ft83.tot_team = ft83.p1.tot + ft83.p2.tot + ft83.p3.tot + ft83.p4.tot + ft83.p5.tot + ft83.rione.final_points;
    // const ft84 = {
    //     ...fantateam_type,
    //     team_index: 84,
    //     name: "NonCapiscoNienteDiBasket",
    //     rione: { ...SUD },
    //     p1: { ...StefanoPolano24 },
    //     p2: { ...GiovanniZanin24 },
    //     p3: { ...MatteoMargarit24 },
    //     p4: { ...MassimilianoRossi24 },
    //     p5: { ...DanieleGanzit24 },
    // };
    // ft84.total_cost = ft84.p1.cost + ft84.p2.cost + ft84.p3.cost + ft84.p4.cost + ft84.p5.cost;
    // ft84.tot_g1 = ft84.p1.g1 + ft84.p2.g1 + ft84.p3.g1 + ft84.p4.g1 + ft84.p5.g1;
    // ft84.tot_g2 = ft84.p1.g2 + ft84.p2.g2 + ft84.p3.g2 + ft84.p4.g2 + ft84.p5.g2;
    // ft84.tot_g3 = ft84.p1.g3 + ft84.p2.g3 + ft84.p3.g3 + ft84.p4.g3 + ft84.p5.g3;
    // ft84.tot_semi = ft84.p1.semi + ft84.p2.semi + ft84.p3.semi + ft84.p4.semi + ft84.p5.semi;
    // ft84.tot_td3 = ft84.p1.td3 + ft84.p2.td3 + ft84.p3.td3 + ft84.p4.td3 + ft84.p5.td3;
    // ft84.tot_final = ft84.p1.final + ft84.p2.final + ft84.p3.final + ft84.p4.final + ft84.p5.final;
    // ft84.tot_team = ft84.p1.tot + ft84.p2.tot + ft84.p3.tot + ft84.p4.tot + ft84.p5.tot + ft84.rione.final_points;
    // const ft85 = {
    //     ...fantateam_type,
    //     team_index: 85,
    //     name: "Nipponici",
    //     rione: { ...EST },
    //     p1: { ...AndreaMoretti24 },
    //     p2: { ...MattiaRoiatti24 },
    //     p3: { ...DiegoNata24 },
    //     p4: { ...AlessandroRizzi24 },
    //     p5: { ...PietroSoramel24 },
    // };
    // ft85.total_cost = ft85.p1.cost + ft85.p2.cost + ft85.p3.cost + ft85.p4.cost + ft85.p5.cost;
    // ft85.tot_g1 = ft85.p1.g1 + ft85.p2.g1 + ft85.p3.g1 + ft85.p4.g1 + ft85.p5.g1;
    // ft85.tot_g2 = ft85.p1.g2 + ft85.p2.g2 + ft85.p3.g2 + ft85.p4.g2 + ft85.p5.g2;
    // ft85.tot_g3 = ft85.p1.g3 + ft85.p2.g3 + ft85.p3.g3 + ft85.p4.g3 + ft85.p5.g3;
    // ft85.tot_semi = ft85.p1.semi + ft85.p2.semi + ft85.p3.semi + ft85.p4.semi + ft85.p5.semi;
    // ft85.tot_td3 = ft85.p1.td3 + ft85.p2.td3 + ft85.p3.td3 + ft85.p4.td3 + ft85.p5.td3;
    // ft85.tot_final = ft85.p1.final + ft85.p2.final + ft85.p3.final + ft85.p4.final + ft85.p5.final;
    // ft85.tot_team = ft85.p1.tot + ft85.p2.tot + ft85.p3.tot + ft85.p4.tot + ft85.p5.tot + ft85.rione.final_points;
    // const ft86 = {
    //     ...fantateam_type,
    //     team_index: 86,
    //     name: "Massive Crash",
    //     rione: { ...EST },
    //     p1: { ...LucaSoramel24 },
    //     p2: { ...AlessandroSant24 },
    //     p3: { ...PietroSoramel24 },
    //     p4: { ...AlessandroRizzi24 },
    //     p5: { ...AndreaMoretti24 },
    // };
    // ft86.total_cost = ft86.p1.cost + ft86.p2.cost + ft86.p3.cost + ft86.p4.cost + ft86.p5.cost;
    // ft86.tot_g1 = ft86.p1.g1 + ft86.p2.g1 + ft86.p3.g1 + ft86.p4.g1 + ft86.p5.g1;
    // ft86.tot_g2 = ft86.p1.g2 + ft86.p2.g2 + ft86.p3.g2 + ft86.p4.g2 + ft86.p5.g2;
    // ft86.tot_g3 = ft86.p1.g3 + ft86.p2.g3 + ft86.p3.g3 + ft86.p4.g3 + ft86.p5.g3;
    // ft86.tot_semi = ft86.p1.semi + ft86.p2.semi + ft86.p3.semi + ft86.p4.semi + ft86.p5.semi;
    // ft86.tot_td3 = ft86.p1.td3 + ft86.p2.td3 + ft86.p3.td3 + ft86.p4.td3 + ft86.p5.td3;
    // ft86.tot_final = ft86.p1.final + ft86.p2.final + ft86.p3.final + ft86.p4.final + ft86.p5.final;
    // ft86.tot_team = ft86.p1.tot + ft86.p2.tot + ft86.p3.tot + ft86.p4.tot + ft86.p5.tot + ft86.rione.final_points;
    // const ft87 = {
    //     ...fantateam_type,
    //     team_index: 87,
    //     name: "gigiovena",
    //     rione: { ...NORD },
    //     p1: { ...GiovanniTonizzo24 },
    //     p2: { ...PietroSoramel24 },
    //     p3: { ...AlessandroRizzi24 },
    //     p4: { ...MarcoSerrao24 },
    //     p5: { ...VittorioGri24 },
    // };
    // ft87.total_cost = ft87.p1.cost + ft87.p2.cost + ft87.p3.cost + ft87.p4.cost + ft87.p5.cost;
    // ft87.tot_g1 = ft87.p1.g1 + ft87.p2.g1 + ft87.p3.g1 + ft87.p4.g1 + ft87.p5.g1;
    // ft87.tot_g2 = ft87.p1.g2 + ft87.p2.g2 + ft87.p3.g2 + ft87.p4.g2 + ft87.p5.g2;
    // ft87.tot_g3 = ft87.p1.g3 + ft87.p2.g3 + ft87.p3.g3 + ft87.p4.g3 + ft87.p5.g3;
    // ft87.tot_semi = ft87.p1.semi + ft87.p2.semi + ft87.p3.semi + ft87.p4.semi + ft87.p5.semi;
    // ft87.tot_td3 = ft87.p1.td3 + ft87.p2.td3 + ft87.p3.td3 + ft87.p4.td3 + ft87.p5.td3;
    // ft87.tot_final = ft87.p1.final + ft87.p2.final + ft87.p3.final + ft87.p4.final + ft87.p5.final;
    // ft87.tot_team = ft87.p1.tot + ft87.p2.tot + ft87.p3.tot + ft87.p4.tot + ft87.p5.tot + ft87.rione.final_points;
    // const ft88 = {
    //     ...fantateam_type,
    //     team_index: 88,
    //     name: "pausa giacomone",
    //     rione: { ...SUD },
    //     p1: { ...ChristianFedrizzi24 },
    //     p2: { ...VittorioGri24 },
    //     p3: { ...MatteoSpagnolo24 },
    //     p4: { ...PaoloZorzi24 },
    //     p5: { ...DavidGaspardo24 },
    // };
    // ft88.total_cost = ft88.p1.cost + ft88.p2.cost + ft88.p3.cost + ft88.p4.cost + ft88.p5.cost;
    // ft88.tot_g1 = ft88.p1.g1 + ft88.p2.g1 + ft88.p3.g1 + ft88.p4.g1 + ft88.p5.g1;
    // ft88.tot_g2 = ft88.p1.g2 + ft88.p2.g2 + ft88.p3.g2 + ft88.p4.g2 + ft88.p5.g2;
    // ft88.tot_g3 = ft88.p1.g3 + ft88.p2.g3 + ft88.p3.g3 + ft88.p4.g3 + ft88.p5.g3;
    // ft88.tot_semi = ft88.p1.semi + ft88.p2.semi + ft88.p3.semi + ft88.p4.semi + ft88.p5.semi;
    // ft88.tot_td3 = ft88.p1.td3 + ft88.p2.td3 + ft88.p3.td3 + ft88.p4.td3 + ft88.p5.td3;
    // ft88.tot_final = ft88.p1.final + ft88.p2.final + ft88.p3.final + ft88.p4.final + ft88.p5.final;
    // ft88.tot_team = ft88.p1.tot + ft88.p2.tot + ft88.p3.tot + ft88.p4.tot + ft88.p5.tot + ft88.rione.final_points;
    // const ft89 = {
    //     ...fantateam_type,
    //     team_index: 89,
    //     name: "Michael Scott's Tots",
    //     rione: { ...NORD },
    //     p1: { ...DavidGaspardo24 },
    //     p2: { ...MiracleObichukwu24 },
    //     p3: { ...AlessioFurlan24 },
    //     p4: { ...DiegoNata24 },
    //     p5: { ...MarcoPolo24 },
    // };
    // ft89.total_cost = ft89.p1.cost + ft89.p2.cost + ft89.p3.cost + ft89.p4.cost + ft89.p5.cost;
    // ft89.tot_g1 = ft89.p1.g1 + ft89.p2.g1 + ft89.p3.g1 + ft89.p4.g1 + ft89.p5.g1;
    // ft89.tot_g2 = ft89.p1.g2 + ft89.p2.g2 + ft89.p3.g2 + ft89.p4.g2 + ft89.p5.g2;
    // ft89.tot_g3 = ft89.p1.g3 + ft89.p2.g3 + ft89.p3.g3 + ft89.p4.g3 + ft89.p5.g3;
    // ft89.tot_semi = ft89.p1.semi + ft89.p2.semi + ft89.p3.semi + ft89.p4.semi + ft89.p5.semi;
    // ft89.tot_td3 = ft89.p1.td3 + ft89.p2.td3 + ft89.p3.td3 + ft89.p4.td3 + ft89.p5.td3;
    // ft89.tot_final = ft89.p1.final + ft89.p2.final + ft89.p3.final + ft89.p4.final + ft89.p5.final;
    // ft89.tot_team = ft89.p1.tot + ft89.p2.tot + ft89.p3.tot + ft89.p4.tot + ft89.p5.tot + ft89.rione.final_points;
    // const ft90 = {
    //     ...fantateam_type,
    //     team_index: 90,
    //     name: "ee4",
    //     rione: { ...SUD },
    //     p1: { ...ValentinoCigainero24 },
    //     p2: { ...MauroCuridori24 },
    //     p3: { ...MicheleDeAnna24 },
    //     p4: { ...MattiaMasotti24 },
    //     p5: { ...TommasoMartello24 },
    // };
    // ft90.total_cost = ft90.p1.cost + ft90.p2.cost + ft90.p3.cost + ft90.p4.cost + ft90.p5.cost;
    // ft90.tot_g1 = ft90.p1.g1 + ft90.p2.g1 + ft90.p3.g1 + ft90.p4.g1 + ft90.p5.g1;
    // ft90.tot_g2 = ft90.p1.g2 + ft90.p2.g2 + ft90.p3.g2 + ft90.p4.g2 + ft90.p5.g2;
    // ft90.tot_g3 = ft90.p1.g3 + ft90.p2.g3 + ft90.p3.g3 + ft90.p4.g3 + ft90.p5.g3;
    // ft90.tot_semi = ft90.p1.semi + ft90.p2.semi + ft90.p3.semi + ft90.p4.semi + ft90.p5.semi;
    // ft90.tot_td3 = ft90.p1.td3 + ft90.p2.td3 + ft90.p3.td3 + ft90.p4.td3 + ft90.p5.td3;
    // ft90.tot_final = ft90.p1.final + ft90.p2.final + ft90.p3.final + ft90.p4.final + ft90.p5.final;
    // ft90.tot_team = ft90.p1.tot + ft90.p2.tot + ft90.p3.tot + ft90.p4.tot + ft90.p5.tot + ft90.rione.final_points;
    // const ft91 = {
    //     ...fantateam_type,
    //     team_index: 91,
    //     name: "Utopia (:",
    //     rione: { ...WEST },
    //     p1: { ...AndreaMoretti24 },
    //     p2: { ...AlessandroRojatti24 },
    //     p3: { ...MarcoRizzi24 },
    //     p4: { ...MassimilianoMoretti24 },
    //     p5: { ...AlessandroRizzi24 },
    // };
    // ft91.total_cost = ft91.p1.cost + ft91.p2.cost + ft91.p3.cost + ft91.p4.cost + ft91.p5.cost;
    // ft91.tot_g1 = ft91.p1.g1 + ft91.p2.g1 + ft91.p3.g1 + ft91.p4.g1 + ft91.p5.g1;
    // ft91.tot_g2 = ft91.p1.g2 + ft91.p2.g2 + ft91.p3.g2 + ft91.p4.g2 + ft91.p5.g2;
    // ft91.tot_g3 = ft91.p1.g3 + ft91.p2.g3 + ft91.p3.g3 + ft91.p4.g3 + ft91.p5.g3;
    // ft91.tot_semi = ft91.p1.semi + ft91.p2.semi + ft91.p3.semi + ft91.p4.semi + ft91.p5.semi;
    // ft91.tot_td3 = ft91.p1.td3 + ft91.p2.td3 + ft91.p3.td3 + ft91.p4.td3 + ft91.p5.td3;
    // ft91.tot_final = ft91.p1.final + ft91.p2.final + ft91.p3.final + ft91.p4.final + ft91.p5.final;
    // ft91.tot_team = ft91.p1.tot + ft91.p2.tot + ft91.p3.tot + ft91.p4.tot + ft91.p5.tot + ft91.rione.final_points;
    // const ft92 = {
    //     ...fantateam_type,
    //     team_index: 92,
    //     name: "AirBall",
    //     rione: { ...EST },
    //     p1: { ...AlessandroRojatti24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...AlessandroRizzi24 },
    //     p4: { ...AntonioGri24 },
    //     p5: { ...LucaAnedda24 },
    // };
    // ft92.total_cost = ft92.p1.cost + ft92.p2.cost + ft92.p3.cost + ft92.p4.cost + ft92.p5.cost;
    // ft92.tot_g1 = ft92.p1.g1 + ft92.p2.g1 + ft92.p3.g1 + ft92.p4.g1 + ft92.p5.g1;
    // ft92.tot_g2 = ft92.p1.g2 + ft92.p2.g2 + ft92.p3.g2 + ft92.p4.g2 + ft92.p5.g2;
    // ft92.tot_g3 = ft92.p1.g3 + ft92.p2.g3 + ft92.p3.g3 + ft92.p4.g3 + ft92.p5.g3;
    // ft92.tot_semi = ft92.p1.semi + ft92.p2.semi + ft92.p3.semi + ft92.p4.semi + ft92.p5.semi;
    // ft92.tot_td3 = ft92.p1.td3 + ft92.p2.td3 + ft92.p3.td3 + ft92.p4.td3 + ft92.p5.td3;
    // ft92.tot_final = ft92.p1.final + ft92.p2.final + ft92.p3.final + ft92.p4.final + ft92.p5.final;
    // ft92.tot_team = ft92.p1.tot + ft92.p2.tot + ft92.p3.tot + ft92.p4.tot + ft92.p5.tot + ft92.rione.final_points;
    // const ft93 = {
    //     ...fantateam_type,
    //     team_index: 93,
    //     name: "Panade",
    //     rione: { ...NORD },
    //     p1: { ...AntonioGri24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...AlessandroRizzi24 },
    //     p4: { ...AlessandroRojatti24 },
    //     p5: { ...AndreaMoretti24 },
    // };
    // ft93.total_cost = ft93.p1.cost + ft93.p2.cost + ft93.p3.cost + ft93.p4.cost + ft93.p5.cost;
    // ft93.tot_g1 = ft93.p1.g1 + ft93.p2.g1 + ft93.p3.g1 + ft93.p4.g1 + ft93.p5.g1;
    // ft93.tot_g2 = ft93.p1.g2 + ft93.p2.g2 + ft93.p3.g2 + ft93.p4.g2 + ft93.p5.g2;
    // ft93.tot_g3 = ft93.p1.g3 + ft93.p2.g3 + ft93.p3.g3 + ft93.p4.g3 + ft93.p5.g3;
    // ft93.tot_semi = ft93.p1.semi + ft93.p2.semi + ft93.p3.semi + ft93.p4.semi + ft93.p5.semi;
    // ft93.tot_td3 = ft93.p1.td3 + ft93.p2.td3 + ft93.p3.td3 + ft93.p4.td3 + ft93.p5.td3;
    // ft93.tot_final = ft93.p1.final + ft93.p2.final + ft93.p3.final + ft93.p4.final + ft93.p5.final;
    // ft93.tot_team = ft93.p1.tot + ft93.p2.tot + ft93.p3.tot + ft93.p4.tot + ft93.p5.tot + ft93.rione.final_points;
    // const ft94 = {
    //     ...fantateam_type,
    //     team_index: 94,
    //     name: "DD",
    //     rione: { ...WEST },
    //     p1: { ...MassimoMasotti24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...AlessandroRizzi24 },
    //     p4: { ...AntonioGri24 },
    //     p5: { ...MatteoBazzaro24 },
    // };
    // ft94.total_cost = ft94.p1.cost + ft94.p2.cost + ft94.p3.cost + ft94.p4.cost + ft94.p5.cost;
    // ft94.tot_g1 = ft94.p1.g1 + ft94.p2.g1 + ft94.p3.g1 + ft94.p4.g1 + ft94.p5.g1;
    // ft94.tot_g2 = ft94.p1.g2 + ft94.p2.g2 + ft94.p3.g2 + ft94.p4.g2 + ft94.p5.g2;
    // ft94.tot_g3 = ft94.p1.g3 + ft94.p2.g3 + ft94.p3.g3 + ft94.p4.g3 + ft94.p5.g3;
    // ft94.tot_semi = ft94.p1.semi + ft94.p2.semi + ft94.p3.semi + ft94.p4.semi + ft94.p5.semi;
    // ft94.tot_td3 = ft94.p1.td3 + ft94.p2.td3 + ft94.p3.td3 + ft94.p4.td3 + ft94.p5.td3;
    // ft94.tot_final = ft94.p1.final + ft94.p2.final + ft94.p3.final + ft94.p4.final + ft94.p5.final;
    // ft94.tot_team = ft94.p1.tot + ft94.p2.tot + ft94.p3.tot + ft94.p4.tot + ft94.p5.tot + ft94.rione.final_points;
    // const ft95 = {
    //     ...fantateam_type,
    //     team_index: 95,
    //     name: "West4ever",
    //     rione: { ...WEST },
    //     p1: { ...LucaSoramel24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...AndreaMoretti24 },
    //     p4: { ...EnricoSant24 },
    //     p5: { ...StefanoPolano24 },
    // };
    // ft95.total_cost = ft95.p1.cost + ft95.p2.cost + ft95.p3.cost + ft95.p4.cost + ft95.p5.cost;
    // ft95.tot_g1 = ft95.p1.g1 + ft95.p2.g1 + ft95.p3.g1 + ft95.p4.g1 + ft95.p5.g1;
    // ft95.tot_g2 = ft95.p1.g2 + ft95.p2.g2 + ft95.p3.g2 + ft95.p4.g2 + ft95.p5.g2;
    // ft95.tot_g3 = ft95.p1.g3 + ft95.p2.g3 + ft95.p3.g3 + ft95.p4.g3 + ft95.p5.g3;
    // ft95.tot_semi = ft95.p1.semi + ft95.p2.semi + ft95.p3.semi + ft95.p4.semi + ft95.p5.semi;
    // ft95.tot_td3 = ft95.p1.td3 + ft95.p2.td3 + ft95.p3.td3 + ft95.p4.td3 + ft95.p5.td3;
    // ft95.tot_final = ft95.p1.final + ft95.p2.final + ft95.p3.final + ft95.p4.final + ft95.p5.final;
    // ft95.tot_team = ft95.p1.tot + ft95.p2.tot + ft95.p3.tot + ft95.p4.tot + ft95.p5.tot + ft95.rione.final_points;
    // const ft96 = {
    //     ...fantateam_type,
    //     team_index: 96,
    //     name: "Uoff",
    //     rione: { ...SUD },
    //     p1: { ...MassimilianoMoretti24 },
    //     p2: { ...MarcoRizzi24 },
    //     p3: { ...LucaAnedda24 },
    //     p4: { ...MattiaRoiatti24 },
    //     p5: { ...AlessandroRizzi24 },
    // };
    // ft96.total_cost = ft96.p1.cost + ft96.p2.cost + ft96.p3.cost + ft96.p4.cost + ft96.p5.cost;
    // ft96.tot_g1 = ft96.p1.g1 + ft96.p2.g1 + ft96.p3.g1 + ft96.p4.g1 + ft96.p5.g1;
    // ft96.tot_g2 = ft96.p1.g2 + ft96.p2.g2 + ft96.p3.g2 + ft96.p4.g2 + ft96.p5.g2;
    // ft96.tot_g3 = ft96.p1.g3 + ft96.p2.g3 + ft96.p3.g3 + ft96.p4.g3 + ft96.p5.g3;
    // ft96.tot_semi = ft96.p1.semi + ft96.p2.semi + ft96.p3.semi + ft96.p4.semi + ft96.p5.semi;
    // ft96.tot_td3 = ft96.p1.td3 + ft96.p2.td3 + ft96.p3.td3 + ft96.p4.td3 + ft96.p5.td3;
    // ft96.tot_final = ft96.p1.final + ft96.p2.final + ft96.p3.final + ft96.p4.final + ft96.p5.final;
    // ft96.tot_team = ft96.p1.tot + ft96.p2.tot + ft96.p3.tot + ft96.p4.tot + ft96.p5.tot + ft96.rione.final_points;
    // const ft97 = {
    //     ...fantateam_type,
    //     team_index: 97,
    //     name: "SimoVinny",
    //     rione: { ...SUD },
    //     p1: { ...ValentinoCigainero24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...DavideFaurlin24 },
    //     p4: { ...MattiaMasotti24 },
    //     p5: { ...MarcoRizzi24 },
    // };
    // ft97.total_cost = ft97.p1.cost + ft97.p2.cost + ft97.p3.cost + ft97.p4.cost + ft97.p5.cost;
    // ft97.tot_g1 = ft97.p1.g1 + ft97.p2.g1 + ft97.p3.g1 + ft97.p4.g1 + ft97.p5.g1;
    // ft97.tot_g2 = ft97.p1.g2 + ft97.p2.g2 + ft97.p3.g2 + ft97.p4.g2 + ft97.p5.g2;
    // ft97.tot_g3 = ft97.p1.g3 + ft97.p2.g3 + ft97.p3.g3 + ft97.p4.g3 + ft97.p5.g3;
    // ft97.tot_semi = ft97.p1.semi + ft97.p2.semi + ft97.p3.semi + ft97.p4.semi + ft97.p5.semi;
    // ft97.tot_td3 = ft97.p1.td3 + ft97.p2.td3 + ft97.p3.td3 + ft97.p4.td3 + ft97.p5.td3;
    // ft97.tot_final = ft97.p1.final + ft97.p2.final + ft97.p3.final + ft97.p4.final + ft97.p5.final;
    // ft97.tot_team = ft97.p1.tot + ft97.p2.tot + ft97.p3.tot + ft97.p4.tot + ft97.p5.tot + ft97.rione.final_points;
    // const ft98 = {
    //     ...fantateam_type,
    //     team_index: 98,
    //     name: "Verità per GR",
    //     rione: { ...NORD },
    //     p1: { ...MattiaRoiatti24 },
    //     p2: { ...LucaAnedda24 },
    //     p3: { ...MassimilianoMoretti24 },
    //     p4: { ...MarcoRizzi24 },
    //     p5: { ...FilippoPasquon24 },
    // };
    // ft98.total_cost = ft98.p1.cost + ft98.p2.cost + ft98.p3.cost + ft98.p4.cost + ft98.p5.cost;
    // ft98.tot_g1 = ft98.p1.g1 + ft98.p2.g1 + ft98.p3.g1 + ft98.p4.g1 + ft98.p5.g1;
    // ft98.tot_g2 = ft98.p1.g2 + ft98.p2.g2 + ft98.p3.g2 + ft98.p4.g2 + ft98.p5.g2;
    // ft98.tot_g3 = ft98.p1.g3 + ft98.p2.g3 + ft98.p3.g3 + ft98.p4.g3 + ft98.p5.g3;
    // ft98.tot_semi = ft98.p1.semi + ft98.p2.semi + ft98.p3.semi + ft98.p4.semi + ft98.p5.semi;
    // ft98.tot_td3 = ft98.p1.td3 + ft98.p2.td3 + ft98.p3.td3 + ft98.p4.td3 + ft98.p5.td3;
    // ft98.tot_final = ft98.p1.final + ft98.p2.final + ft98.p3.final + ft98.p4.final + ft98.p5.final;
    // ft98.tot_team = ft98.p1.tot + ft98.p2.tot + ft98.p3.tot + ft98.p4.tot + ft98.p5.tot + ft98.rione.final_points;
    // const ft99 = {
    //     ...fantateam_type,
    //     team_index: 99,
    //     name: "Maestro Shifu",
    //     rione: { ...NORD },
    //     p1: { ...MattiaRoiatti24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...AlessandroRizzi24 },
    //     p4: { ...MarcoRizzi24 },
    //     p5: { ...AndreaMoretti24 },
    // };
    // ft99.total_cost = ft99.p1.cost + ft99.p2.cost + ft99.p3.cost + ft99.p4.cost + ft99.p5.cost;
    // ft99.tot_g1 = ft99.p1.g1 + ft99.p2.g1 + ft99.p3.g1 + ft99.p4.g1 + ft99.p5.g1;
    // ft99.tot_g2 = ft99.p1.g2 + ft99.p2.g2 + ft99.p3.g2 + ft99.p4.g2 + ft99.p5.g2;
    // ft99.tot_g3 = ft99.p1.g3 + ft99.p2.g3 + ft99.p3.g3 + ft99.p4.g3 + ft99.p5.g3;
    // ft99.tot_semi = ft99.p1.semi + ft99.p2.semi + ft99.p3.semi + ft99.p4.semi + ft99.p5.semi;
    // ft99.tot_td3 = ft99.p1.td3 + ft99.p2.td3 + ft99.p3.td3 + ft99.p4.td3 + ft99.p5.td3;
    // ft99.tot_final = ft99.p1.final + ft99.p2.final + ft99.p3.final + ft99.p4.final + ft99.p5.final;
    // ft99.tot_team = ft99.p1.tot + ft99.p2.tot + ft99.p3.tot + ft99.p4.tot + ft99.p5.tot + ft99.rione.final_points;
    // const ft100 = {
    //     ...fantateam_type,
    //     team_index: 100,
    //     name: "A tutta birra",
    //     rione: { ...NORD },
    //     p1: { ...MarcoRizzi24 },
    //     p2: { ...LucaSoramel24 },
    //     p3: { ...EugenioDeTina24 },
    //     p4: { ...MassimilianoMoretti24 },
    //     p5: { ...EnricoSant24 },
    // };
    // ft100.total_cost = ft100.p1.cost + ft100.p2.cost + ft100.p3.cost + ft100.p4.cost + ft100.p5.cost;
    // ft100.tot_g1 = ft100.p1.g1 + ft100.p2.g1 + ft100.p3.g1 + ft100.p4.g1 + ft100.p5.g1;
    // ft100.tot_g2 = ft100.p1.g2 + ft100.p2.g2 + ft100.p3.g2 + ft100.p4.g2 + ft100.p5.g2;
    // ft100.tot_g3 = ft100.p1.g3 + ft100.p2.g3 + ft100.p3.g3 + ft100.p4.g3 + ft100.p5.g3;
    // ft100.tot_semi = ft100.p1.semi + ft100.p2.semi + ft100.p3.semi + ft100.p4.semi + ft100.p5.semi;
    // ft100.tot_td3 = ft100.p1.td3 + ft100.p2.td3 + ft100.p3.td3 + ft100.p4.td3 + ft100.p5.td3;
    // ft100.tot_final = ft100.p1.final + ft100.p2.final + ft100.p3.final + ft100.p4.final + ft100.p5.final;
    // ft100.tot_team = ft100.p1.tot + ft100.p2.tot + ft100.p3.tot + ft100.p4.tot + ft100.p5.tot + ft100.rione.final_points;
    // const ft101 = {
    //     ...fantateam_type,
    //     team_index: 101,
    //     name: "Bitchass",
    //     rione: { ...WEST },
    //     p1: { ...MarcoRizzi24 },
    //     p2: { ...MassimilianoMoretti24 },
    //     p3: { ...LucaAnedda24 },
    //     p4: { ...LucaSoramel24 },
    //     p5: { ...MattiaRoiatti24 },
    // };
    // ft101.total_cost = ft101.p1.cost + ft101.p2.cost + ft101.p3.cost + ft101.p4.cost + ft101.p5.cost;
    // ft101.tot_g1 = ft101.p1.g1 + ft101.p2.g1 + ft101.p3.g1 + ft101.p4.g1 + ft101.p5.g1;
    // ft101.tot_g2 = ft101.p1.g2 + ft101.p2.g2 + ft101.p3.g2 + ft101.p4.g2 + ft101.p5.g2;
    // ft101.tot_g3 = ft101.p1.g3 + ft101.p2.g3 + ft101.p3.g3 + ft101.p4.g3 + ft101.p5.g3;
    // ft101.tot_semi = ft101.p1.semi + ft101.p2.semi + ft101.p3.semi + ft101.p4.semi + ft101.p5.semi;
    // ft101.tot_td3 = ft101.p1.td3 + ft101.p2.td3 + ft101.p3.td3 + ft101.p4.td3 + ft101.p5.td3;
    // ft101.tot_final = ft101.p1.final + ft101.p2.final + ft101.p3.final + ft101.p4.final + ft101.p5.final;
    // ft101.tot_team = ft101.p1.tot + ft101.p2.tot + ft101.p3.tot + ft101.p4.tot + ft101.p5.tot + ft101.rione.final_points;
    // const ft102 = {
    //     ...fantateam_type,
    //     team_index: 102,
    //     name: "Azzzzz",
    //     rione: { ...EST },
    //     p1: { ...GiovanniTonizzo24 },
    //     p2: { ...ChristianZanet24 },
    //     p3: { ...MicheleDeAnna24 },
    //     p4: { ...MattiaRoiatti24 },
    //     p5: { ...AlessandroCostantini24 },
    // };
    // ft102.total_cost = ft102.p1.cost + ft102.p2.cost + ft102.p3.cost + ft102.p4.cost + ft102.p5.cost;
    // ft102.tot_g1 = ft102.p1.g1 + ft102.p2.g1 + ft102.p3.g1 + ft102.p4.g1 + ft102.p5.g1;
    // ft102.tot_g2 = ft102.p1.g2 + ft102.p2.g2 + ft102.p3.g2 + ft102.p4.g2 + ft102.p5.g2;
    // ft102.tot_g3 = ft102.p1.g3 + ft102.p2.g3 + ft102.p3.g3 + ft102.p4.g3 + ft102.p5.g3;
    // ft102.tot_semi = ft102.p1.semi + ft102.p2.semi + ft102.p3.semi + ft102.p4.semi + ft102.p5.semi;
    // ft102.tot_td3 = ft102.p1.td3 + ft102.p2.td3 + ft102.p3.td3 + ft102.p4.td3 + ft102.p5.td3;
    // ft102.tot_final = ft102.p1.final + ft102.p2.final + ft102.p3.final + ft102.p4.final + ft102.p5.final;
    // ft102.tot_team = ft102.p1.tot + ft102.p2.tot + ft102.p3.tot + ft102.p4.tot + ft102.p5.tot + ft102.rione.final_points;
    // const ft103 = {
    //     ...fantateam_type,
    //     team_index: 103,
    //     name: "Super chicche",
    //     rione: { ...WEST },
    //     p1: { ...LucaSoramel24 },
    //     p2: { ...GiovanniTonizzo24 },
    //     p3: { ...MarcoRizzi24 },
    //     p4: { ...MassimilianoMoretti24 },
    //     p5: { ...VittorioGri24 },
    // };
    // ft103.total_cost = ft103.p1.cost + ft103.p2.cost + ft103.p3.cost + ft103.p4.cost + ft103.p5.cost;
    // ft103.tot_g1 = ft103.p1.g1 + ft103.p2.g1 + ft103.p3.g1 + ft103.p4.g1 + ft103.p5.g1;
    // ft103.tot_g2 = ft103.p1.g2 + ft103.p2.g2 + ft103.p3.g2 + ft103.p4.g2 + ft103.p5.g2;
    // ft103.tot_g3 = ft103.p1.g3 + ft103.p2.g3 + ft103.p3.g3 + ft103.p4.g3 + ft103.p5.g3;
    // ft103.tot_semi = ft103.p1.semi + ft103.p2.semi + ft103.p3.semi + ft103.p4.semi + ft103.p5.semi;
    // ft103.tot_td3 = ft103.p1.td3 + ft103.p2.td3 + ft103.p3.td3 + ft103.p4.td3 + ft103.p5.td3;
    // ft103.tot_final = ft103.p1.final + ft103.p2.final + ft103.p3.final + ft103.p4.final + ft103.p5.final;
    // ft103.tot_team = ft103.p1.tot + ft103.p2.tot + ft103.p3.tot + ft103.p4.tot + ft103.p5.tot + ft103.rione.final_points;
    // const ft104 = {
    //     ...fantateam_type,
    //     team_index: 104,
    //     name: "il Fanto Padre",
    //     rione: { ...NORD },
    //     p1: { ...LucaDellaLonga24 },
    //     p2: { ...GiovanniZanin24 },
    //     p3: { ...GiovanniTonizzo24 },
    //     p4: { ...GiacomoPiacentini24 },
    //     p5: { ...MarcoLombardo24 },
    // };
    // ft104.total_cost = ft104.p1.cost + ft104.p2.cost + ft104.p3.cost + ft104.p4.cost + ft104.p5.cost;
    // ft104.tot_g1 = ft104.p1.g1 + ft104.p2.g1 + ft104.p3.g1 + ft104.p4.g1 + ft104.p5.g1;
    // ft104.tot_g2 = ft104.p1.g2 + ft104.p2.g2 + ft104.p3.g2 + ft104.p4.g2 + ft104.p5.g2;
    // ft104.tot_g3 = ft104.p1.g3 + ft104.p2.g3 + ft104.p3.g3 + ft104.p4.g3 + ft104.p5.g3;
    // ft104.tot_semi = ft104.p1.semi + ft104.p2.semi + ft104.p3.semi + ft104.p4.semi + ft104.p5.semi;
    // ft104.tot_td3 = ft104.p1.td3 + ft104.p2.td3 + ft104.p3.td3 + ft104.p4.td3 + ft104.p5.td3;
    // ft104.tot_final = ft104.p1.final + ft104.p2.final + ft104.p3.final + ft104.p4.final + ft104.p5.final;
    // ft104.tot_team = ft104.p1.tot + ft104.p2.tot + ft104.p3.tot + ft104.p4.tot + ft104.p5.tot + ft104.rione.final_points;
    // const ft105 = {
    //     ...fantateam_type,
    //     team_index: 105,
    //     name: "dunk",
    //     rione: { ...WEST },
    //     p1: { ...LucaSoramel24 },
    //     p2: { ...PaoloZorzi24 },
    //     p3: { ...ChristianFedrizzi24 },
    //     p4: { ...EmanueleDaneluzzi24 },
    //     p5: { ...FilippoAgnoluzzi24 },
    // };
    // ft105.total_cost = ft105.p1.cost + ft105.p2.cost + ft105.p3.cost + ft105.p4.cost + ft105.p5.cost;
    // ft105.tot_g1 = ft105.p1.g1 + ft105.p2.g1 + ft105.p3.g1 + ft105.p4.g1 + ft105.p5.g1;
    // ft105.tot_g2 = ft105.p1.g2 + ft105.p2.g2 + ft105.p3.g2 + ft105.p4.g2 + ft105.p5.g2;
    // ft105.tot_g3 = ft105.p1.g3 + ft105.p2.g3 + ft105.p3.g3 + ft105.p4.g3 + ft105.p5.g3;
    // ft105.tot_semi = ft105.p1.semi + ft105.p2.semi + ft105.p3.semi + ft105.p4.semi + ft105.p5.semi;
    // ft105.tot_td3 = ft105.p1.td3 + ft105.p2.td3 + ft105.p3.td3 + ft105.p4.td3 + ft105.p5.td3;
    // ft105.tot_final = ft105.p1.final + ft105.p2.final + ft105.p3.final + ft105.p4.final + ft105.p5.final;
    // ft105.tot_team = ft105.p1.tot + ft105.p2.tot + ft105.p3.tot + ft105.p4.tot + ft105.p5.tot + ft105.rione.final_points;
    // const ft106 = {
    //     ...fantateam_type,
    //     team_index: 106,
    //     name: "Vitellonseeee",
    //     rione: { ...SUD },
    //     p1: { ...AlessandroSantin24 },
    //     p2: { ...MattiaMasotti24 },
    //     p3: { ...AlessandroSant24 },
    //     p4: { ...GiacomoPiacentini24 },
    //     p5: { ...AlessandroCostantini24 },
    // };
    // ft106.total_cost = ft106.p1.cost + ft106.p2.cost + ft106.p3.cost + ft106.p4.cost + ft106.p5.cost;
    // ft106.tot_g1 = ft106.p1.g1 + ft106.p2.g1 + ft106.p3.g1 + ft106.p4.g1 + ft106.p5.g1;
    // ft106.tot_g2 = ft106.p1.g2 + ft106.p2.g2 + ft106.p3.g2 + ft106.p4.g2 + ft106.p5.g2;
    // ft106.tot_g3 = ft106.p1.g3 + ft106.p2.g3 + ft106.p3.g3 + ft106.p4.g3 + ft106.p5.g3;
    // ft106.tot_semi = ft106.p1.semi + ft106.p2.semi + ft106.p3.semi + ft106.p4.semi + ft106.p5.semi;
    // ft106.tot_td3 = ft106.p1.td3 + ft106.p2.td3 + ft106.p3.td3 + ft106.p4.td3 + ft106.p5.td3;
    // ft106.tot_final = ft106.p1.final + ft106.p2.final + ft106.p3.final + ft106.p4.final + ft106.p5.final;
    // ft106.tot_team = ft106.p1.tot + ft106.p2.tot + ft106.p3.tot + ft106.p4.tot + ft106.p5.tot + ft106.rione.final_points;
    // const ft107 = {
    //     ...fantateam_type,
    //     team_index: 107,
    //     name: "Visca",
    //     rione: { ...NORD },
    //     p1: { ...GiacomoSilvestri24 },
    //     p2: { ...LarryTrevisan24 },
    //     p3: { ...ChristianZanet24 },
    //     p4: { ...MicheleDeAnna24 },
    //     p5: { ...AlessandroRizzi24 },
    // };
    // ft107.total_cost = ft107.p1.cost + ft107.p2.cost + ft107.p3.cost + ft107.p4.cost + ft107.p5.cost;
    // ft107.tot_g1 = ft107.p1.g1 + ft107.p2.g1 + ft107.p3.g1 + ft107.p4.g1 + ft107.p5.g1;
    // ft107.tot_g2 = ft107.p1.g2 + ft107.p2.g2 + ft107.p3.g2 + ft107.p4.g2 + ft107.p5.g2;
    // ft107.tot_g3 = ft107.p1.g3 + ft107.p2.g3 + ft107.p3.g3 + ft107.p4.g3 + ft107.p5.g3;
    // ft107.tot_semi = ft107.p1.semi + ft107.p2.semi + ft107.p3.semi + ft107.p4.semi + ft107.p5.semi;
    // ft107.tot_td3 = ft107.p1.td3 + ft107.p2.td3 + ft107.p3.td3 + ft107.p4.td3 + ft107.p5.td3;
    // ft107.tot_final = ft107.p1.final + ft107.p2.final + ft107.p3.final + ft107.p4.final + ft107.p5.final;
    // ft107.tot_team = ft107.p1.tot + ft107.p2.tot + ft107.p3.tot + ft107.p4.tot + ft107.p5.tot + ft107.rione.final_points;
    // const ft108 = {
    //     ...fantateam_type,
    //     team_index: 108,
    //     name: "Ailantus",
    //     rione: { ...WEST },
    //     p1: { ...MarcoRizzi24 },
    //     p2: { ...MatteoMargarit24 },
    //     p3: { ...ChristianZanet24 },
    //     p4: { ...AlessandroRizzi24 },
    //     p5: { ...MicheleDeAnna24 },
    // };
    // ft108.total_cost = ft108.p1.cost + ft108.p2.cost + ft108.p3.cost + ft108.p4.cost + ft108.p5.cost;
    // ft108.tot_g1 = ft108.p1.g1 + ft108.p2.g1 + ft108.p3.g1 + ft108.p4.g1 + ft108.p5.g1;
    // ft108.tot_g2 = ft108.p1.g2 + ft108.p2.g2 + ft108.p3.g2 + ft108.p4.g2 + ft108.p5.g2;
    // ft108.tot_g3 = ft108.p1.g3 + ft108.p2.g3 + ft108.p3.g3 + ft108.p4.g3 + ft108.p5.g3;
    // ft108.tot_semi = ft108.p1.semi + ft108.p2.semi + ft108.p3.semi + ft108.p4.semi + ft108.p5.semi;
    // ft108.tot_td3 = ft108.p1.td3 + ft108.p2.td3 + ft108.p3.td3 + ft108.p4.td3 + ft108.p5.td3;
    // ft108.tot_final = ft108.p1.final + ft108.p2.final + ft108.p3.final + ft108.p4.final + ft108.p5.final;
    // ft108.tot_team = ft108.p1.tot + ft108.p2.tot + ft108.p3.tot + ft108.p4.tot + ft108.p5.tot + ft108.rione.final_points;
    // const ft109 = {
    //     ...fantateam_type,
    //     team_index: 109,
    //     name: "Giangi",
    //     rione: { ...WEST },
    //     p1: { ...ChristianFedrizzi24 },
    //     p2: { ...GiacomoFerigo24 },
    //     p3: { ...MicheleVendrame24 },
    //     p4: { ...LorenzoSchinella24 },
    //     p5: { ...DavideBroggi24 },
    // };
    // ft109.total_cost = ft109.p1.cost + ft109.p2.cost + ft109.p3.cost + ft109.p4.cost + ft109.p5.cost;
    // ft109.tot_g1 = ft109.p1.g1 + ft109.p2.g1 + ft109.p3.g1 + ft109.p4.g1 + ft109.p5.g1;
    // ft109.tot_g2 = ft109.p1.g2 + ft109.p2.g2 + ft109.p3.g2 + ft109.p4.g2 + ft109.p5.g2;
    // ft109.tot_g3 = ft109.p1.g3 + ft109.p2.g3 + ft109.p3.g3 + ft109.p4.g3 + ft109.p5.g3;
    // ft109.tot_semi = ft109.p1.semi + ft109.p2.semi + ft109.p3.semi + ft109.p4.semi + ft109.p5.semi;
    // ft109.tot_td3 = ft109.p1.td3 + ft109.p2.td3 + ft109.p3.td3 + ft109.p4.td3 + ft109.p5.td3;
    // ft109.tot_final = ft109.p1.final + ft109.p2.final + ft109.p3.final + ft109.p4.final + ft109.p5.final;
    // ft109.tot_team = ft109.p1.tot + ft109.p2.tot + ft109.p3.tot + ft109.p4.tot + ft109.p5.tot + ft109.rione.final_points;
    // const ft110 = {
    //     ...fantateam_type,
    //     team_index: 110,
    //     name: "PSYCHO P",
    //     rione: { ...NORD },
    //     p1: { ...MarcoLombardo24 },
    //     p2: { ...MarcoSerrao24 },
    //     p3: { ...FilippoPasquon24 },
    //     p4: { ...AlessandroCostantini24 },
    //     p5: { ...VittorioBasso24 },
    // };
    // ft110.total_cost = ft110.p1.cost + ft110.p2.cost + ft110.p3.cost + ft110.p4.cost + ft110.p5.cost;
    // ft110.tot_g1 = ft110.p1.g1 + ft110.p2.g1 + ft110.p3.g1 + ft110.p4.g1 + ft110.p5.g1;
    // ft110.tot_g2 = ft110.p1.g2 + ft110.p2.g2 + ft110.p3.g2 + ft110.p4.g2 + ft110.p5.g2;
    // ft110.tot_g3 = ft110.p1.g3 + ft110.p2.g3 + ft110.p3.g3 + ft110.p4.g3 + ft110.p5.g3;
    // ft110.tot_semi = ft110.p1.semi + ft110.p2.semi + ft110.p3.semi + ft110.p4.semi + ft110.p5.semi;
    // ft110.tot_td3 = ft110.p1.td3 + ft110.p2.td3 + ft110.p3.td3 + ft110.p4.td3 + ft110.p5.td3;
    // ft110.tot_final = ft110.p1.final + ft110.p2.final + ft110.p3.final + ft110.p4.final + ft110.p5.final;
    // ft110.tot_team = ft110.p1.tot + ft110.p2.tot + ft110.p3.tot + ft110.p4.tot + ft110.p5.tot + ft110.rione.final_points;
    // const ft111 = {
    //     ...fantateam_type,
    //     team_index: 111,
    //     name: "fantadario",
    //     rione: { ...WEST },
    //     p1: { ...LarryTrevisan24 },
    //     p2: { ...FilippoPasquon24 },
    //     p3: { ...AlessandroSant24 },
    //     p4: { ...AlessandroGalassi24 },
    //     p5: { ...MattiaMasotti24 },
    // };
    // ft111.total_cost = ft111.p1.cost + ft111.p2.cost + ft111.p3.cost + ft111.p4.cost + ft111.p5.cost;
    // ft111.tot_g1 = ft111.p1.g1 + ft111.p2.g1 + ft111.p3.g1 + ft111.p4.g1 + ft111.p5.g1;
    // ft111.tot_g2 = ft111.p1.g2 + ft111.p2.g2 + ft111.p3.g2 + ft111.p4.g2 + ft111.p5.g2;
    // ft111.tot_g3 = ft111.p1.g3 + ft111.p2.g3 + ft111.p3.g3 + ft111.p4.g3 + ft111.p5.g3;
    // ft111.tot_semi = ft111.p1.semi + ft111.p2.semi + ft111.p3.semi + ft111.p4.semi + ft111.p5.semi;
    // ft111.tot_td3 = ft111.p1.td3 + ft111.p2.td3 + ft111.p3.td3 + ft111.p4.td3 + ft111.p5.td3;
    // ft111.tot_final = ft111.p1.final + ft111.p2.final + ft111.p3.final + ft111.p4.final + ft111.p5.final;
    // ft111.tot_team = ft111.p1.tot + ft111.p2.tot + ft111.p3.tot + ft111.p4.tot + ft111.p5.tot + ft111.rione.final_points;
    // const ft112 = {
    //     ...fantateam_type,
    //     team_index: 112,
    //     name: "Leggende",
    //     rione: { ...NORD },
    //     p1: { ...LarryTrevisan24 },
    //     p2: { ...DanieleGanzit24 },
    //     p3: { ...MarcoPolo24 },
    //     p4: { ...MarcoSerrao24 },
    //     p5: { ...AlessandroSant24 },
    // };
    // ft112.total_cost = ft112.p1.cost + ft112.p2.cost + ft112.p3.cost + ft112.p4.cost + ft112.p5.cost;
    // ft112.tot_g1 = ft112.p1.g1 + ft112.p2.g1 + ft112.p3.g1 + ft112.p4.g1 + ft112.p5.g1;
    // ft112.tot_g2 = ft112.p1.g2 + ft112.p2.g2 + ft112.p3.g2 + ft112.p4.g2 + ft112.p5.g2;
    // ft112.tot_g3 = ft112.p1.g3 + ft112.p2.g3 + ft112.p3.g3 + ft112.p4.g3 + ft112.p5.g3;
    // ft112.tot_semi = ft112.p1.semi + ft112.p2.semi + ft112.p3.semi + ft112.p4.semi + ft112.p5.semi;
    // ft112.tot_td3 = ft112.p1.td3 + ft112.p2.td3 + ft112.p3.td3 + ft112.p4.td3 + ft112.p5.td3;
    // ft112.tot_final = ft112.p1.final + ft112.p2.final + ft112.p3.final + ft112.p4.final + ft112.p5.final;
    // ft112.tot_team = ft112.p1.tot + ft112.p2.tot + ft112.p3.tot + ft112.p4.tot + ft112.p5.tot + ft112.rione.final_points;
    // const ft113 = {
    //     ...fantateam_type,
    //     team_index: 113,
    //     name: "Paperelle gay",
    //     rione: { ...EST },
    //     p1: { ...EnricoSant24 },
    //     p2: { ...WilliamIob24 },
    //     p3: { ...AlessandroCostantini24 },
    //     p4: { ...MarcoSerrao24 },
    //     p5: { ...DenisVanin24 },
    // };
    // ft113.total_cost = ft113.p1.cost + ft113.p2.cost + ft113.p3.cost + ft113.p4.cost + ft113.p5.cost;
    // ft113.tot_g1 = ft113.p1.g1 + ft113.p2.g1 + ft113.p3.g1 + ft113.p4.g1 + ft113.p5.g1;
    // ft113.tot_g2 = ft113.p1.g2 + ft113.p2.g2 + ft113.p3.g2 + ft113.p4.g2 + ft113.p5.g2;
    // ft113.tot_g3 = ft113.p1.g3 + ft113.p2.g3 + ft113.p3.g3 + ft113.p4.g3 + ft113.p5.g3;
    // ft113.tot_semi = ft113.p1.semi + ft113.p2.semi + ft113.p3.semi + ft113.p4.semi + ft113.p5.semi;
    // ft113.tot_td3 = ft113.p1.td3 + ft113.p2.td3 + ft113.p3.td3 + ft113.p4.td3 + ft113.p5.td3;
    // ft113.tot_final = ft113.p1.final + ft113.p2.final + ft113.p3.final + ft113.p4.final + ft113.p5.final;
    // ft113.tot_team = ft113.p1.tot + ft113.p2.tot + ft113.p3.tot + ft113.p4.tot + ft113.p5.tot + ft113.rione.final_points;
    // const ft114 = {
    //     ...fantateam_type,
    //     team_index: 114,
    //     name: "CIPPI",
    //     rione: { ...NORD },
    //     p1: { ...AlessandroCostantini24 },
    //     p2: { ...VittorioGri24 },
    //     p3: { ...LucaSoramel24 },
    //     p4: { ...GionaTell24 },
    //     p5: { ...AlessandroSant24 },
    // };
    // ft114.total_cost = ft114.p1.cost + ft114.p2.cost + ft114.p3.cost + ft114.p4.cost + ft114.p5.cost;
    // ft114.tot_g1 = ft114.p1.g1 + ft114.p2.g1 + ft114.p3.g1 + ft114.p4.g1 + ft114.p5.g1;
    // ft114.tot_g2 = ft114.p1.g2 + ft114.p2.g2 + ft114.p3.g2 + ft114.p4.g2 + ft114.p5.g2;
    // ft114.tot_g3 = ft114.p1.g3 + ft114.p2.g3 + ft114.p3.g3 + ft114.p4.g3 + ft114.p5.g3;
    // ft114.tot_semi = ft114.p1.semi + ft114.p2.semi + ft114.p3.semi + ft114.p4.semi + ft114.p5.semi;
    // ft114.tot_td3 = ft114.p1.td3 + ft114.p2.td3 + ft114.p3.td3 + ft114.p4.td3 + ft114.p5.td3;
    // ft114.tot_final = ft114.p1.final + ft114.p2.final + ft114.p3.final + ft114.p4.final + ft114.p5.final;
    // ft114.tot_team = ft114.p1.tot + ft114.p2.tot + ft114.p3.tot + ft114.p4.tot + ft114.p5.tot + ft114.rione.final_points;
    // const ft115 = {
    //     ...fantateam_type,
    //     team_index: 115,
    //     name: "Samu & Ema",
    //     rione: { ...EST },
    //     p1: { ...AlessandroCostantini24 },
    //     p2: { ...EnricoSant24 },
    //     p3: { ...MattiaMasotti24 },
    //     p4: { ...FilippoPasquon24 },
    //     p5: { ...AlessandroRizzi24 },
    // };
    // ft115.total_cost = ft115.p1.cost + ft115.p2.cost + ft115.p3.cost + ft115.p4.cost + ft115.p5.cost;
    // ft115.tot_g1 = ft115.p1.g1 + ft115.p2.g1 + ft115.p3.g1 + ft115.p4.g1 + ft115.p5.g1;
    // ft115.tot_g2 = ft115.p1.g2 + ft115.p2.g2 + ft115.p3.g2 + ft115.p4.g2 + ft115.p5.g2;
    // ft115.tot_g3 = ft115.p1.g3 + ft115.p2.g3 + ft115.p3.g3 + ft115.p4.g3 + ft115.p5.g3;
    // ft115.tot_semi = ft115.p1.semi + ft115.p2.semi + ft115.p3.semi + ft115.p4.semi + ft115.p5.semi;
    // ft115.tot_td3 = ft115.p1.td3 + ft115.p2.td3 + ft115.p3.td3 + ft115.p4.td3 + ft115.p5.td3;
    // ft115.tot_final = ft115.p1.final + ft115.p2.final + ft115.p3.final + ft115.p4.final + ft115.p5.final;
    // ft115.tot_team = ft115.p1.tot + ft115.p2.tot + ft115.p3.tot + ft115.p4.tot + ft115.p5.tot + ft115.rione.final_points;
    // const ft116 = {
    //     ...fantateam_type,
    //     team_index: 116,
    //     name: "Robur Nazionale",
    //     rione: { ...WEST },
    //     p1: { ...AlessandroRizzi24 },
    //     p2: { ...MattiaMasotti24 },
    //     p3: { ...MarcoSerrao24 },
    //     p4: { ...MicheleDeAnna24 },
    //     p5: { ...MiracleObichukwu24 },
    // };
    // ft116.total_cost = ft116.p1.cost + ft116.p2.cost + ft116.p3.cost + ft116.p4.cost + ft116.p5.cost;
    // ft116.tot_g1 = ft116.p1.g1 + ft116.p2.g1 + ft116.p3.g1 + ft116.p4.g1 + ft116.p5.g1;
    // ft116.tot_g2 = ft116.p1.g2 + ft116.p2.g2 + ft116.p3.g2 + ft116.p4.g2 + ft116.p5.g2;
    // ft116.tot_g3 = ft116.p1.g3 + ft116.p2.g3 + ft116.p3.g3 + ft116.p4.g3 + ft116.p5.g3;
    // ft116.tot_semi = ft116.p1.semi + ft116.p2.semi + ft116.p3.semi + ft116.p4.semi + ft116.p5.semi;
    // ft116.tot_td3 = ft116.p1.td3 + ft116.p2.td3 + ft116.p3.td3 + ft116.p4.td3 + ft116.p5.td3;
    // ft116.tot_final = ft116.p1.final + ft116.p2.final + ft116.p3.final + ft116.p4.final + ft116.p5.final;
    // ft116.tot_team = ft116.p1.tot + ft116.p2.tot + ft116.p3.tot + ft116.p4.tot + ft116.p5.tot + ft116.rione.final_points;
    // const ft117 = {
    //     ...fantateam_type,
    //     team_index: 117,
    //     name: "Giacomone",
    //     rione: { ...SUD },
    //     p1: { ...MatteoSpagnolo24 },
    //     p2: { ...ChristianZanet24 },
    //     p3: { ...VittorioGri24 },
    //     p4: { ...AlessandroSant24 },
    //     p5: { ...WilliamIob24 },
    // };
    // ft117.total_cost = ft117.p1.cost + ft117.p2.cost + ft117.p3.cost + ft117.p4.cost + ft117.p5.cost;
    // ft117.tot_g1 = ft117.p1.g1 + ft117.p2.g1 + ft117.p3.g1 + ft117.p4.g1 + ft117.p5.g1;
    // ft117.tot_g2 = ft117.p1.g2 + ft117.p2.g2 + ft117.p3.g2 + ft117.p4.g2 + ft117.p5.g2;
    // ft117.tot_g3 = ft117.p1.g3 + ft117.p2.g3 + ft117.p3.g3 + ft117.p4.g3 + ft117.p5.g3;
    // ft117.tot_semi = ft117.p1.semi + ft117.p2.semi + ft117.p3.semi + ft117.p4.semi + ft117.p5.semi;
    // ft117.tot_td3 = ft117.p1.td3 + ft117.p2.td3 + ft117.p3.td3 + ft117.p4.td3 + ft117.p5.td3;
    // ft117.tot_final = ft117.p1.final + ft117.p2.final + ft117.p3.final + ft117.p4.final + ft117.p5.final;
    // ft117.tot_team = ft117.p1.tot + ft117.p2.tot + ft117.p3.tot + ft117.p4.tot + ft117.p5.tot + ft117.rione.final_points;
    // const ft118 = {
    //     ...fantateam_type,
    //     team_index: 118,
    //     name: "Team Canaja",
    //     rione: { ...NORD },
    //     p1: { ...MarcoLombardo24 },
    //     p2: { ...DiegoNata24 },
    //     p3: { ...DanieleGanzit24 },
    //     p4: { ...EnricoSant24 },
    //     p5: { ...AlessioFurlan24 },
    // };
    // ft118.total_cost = ft118.p1.cost + ft118.p2.cost + ft118.p3.cost + ft118.p4.cost + ft118.p5.cost;
    // ft118.tot_g1 = ft118.p1.g1 + ft118.p2.g1 + ft118.p3.g1 + ft118.p4.g1 + ft118.p5.g1;
    // ft118.tot_g2 = ft118.p1.g2 + ft118.p2.g2 + ft118.p3.g2 + ft118.p4.g2 + ft118.p5.g2;
    // ft118.tot_g3 = ft118.p1.g3 + ft118.p2.g3 + ft118.p3.g3 + ft118.p4.g3 + ft118.p5.g3;
    // ft118.tot_semi = ft118.p1.semi + ft118.p2.semi + ft118.p3.semi + ft118.p4.semi + ft118.p5.semi;
    // ft118.tot_td3 = ft118.p1.td3 + ft118.p2.td3 + ft118.p3.td3 + ft118.p4.td3 + ft118.p5.td3;
    // ft118.tot_final = ft118.p1.final + ft118.p2.final + ft118.p3.final + ft118.p4.final + ft118.p5.final;
    // ft118.tot_team = ft118.p1.tot + ft118.p2.tot + ft118.p3.tot + ft118.p4.tot + ft118.p5.tot + ft118.rione.final_points;
    // const ft119 = {
    //     ...fantateam_type,
    //     team_index: 119,
    //     name: "Trrrr non va",
    //     rione: { ...SUD },
    //     p1: { ...DiegoNata24 },
    //     p2: { ...AndreaMoretti24 },
    //     p3: { ...AlessioFurlan24 },
    //     p4: { ...MarcoRizzi24 },
    //     p5: { ...DavidGaspardo24 },
    // };
    // ft119.total_cost = ft119.p1.cost + ft119.p2.cost + ft119.p3.cost + ft119.p4.cost + ft119.p5.cost;
    // ft119.tot_g1 = ft119.p1.g1 + ft119.p2.g1 + ft119.p3.g1 + ft119.p4.g1 + ft119.p5.g1;
    // ft119.tot_g2 = ft119.p1.g2 + ft119.p2.g2 + ft119.p3.g2 + ft119.p4.g2 + ft119.p5.g2;
    // ft119.tot_g3 = ft119.p1.g3 + ft119.p2.g3 + ft119.p3.g3 + ft119.p4.g3 + ft119.p5.g3;
    // ft119.tot_semi = ft119.p1.semi + ft119.p2.semi + ft119.p3.semi + ft119.p4.semi + ft119.p5.semi;
    // ft119.tot_td3 = ft119.p1.td3 + ft119.p2.td3 + ft119.p3.td3 + ft119.p4.td3 + ft119.p5.td3;
    // ft119.tot_final = ft119.p1.final + ft119.p2.final + ft119.p3.final + ft119.p4.final + ft119.p5.final;
    // ft119.tot_team = ft119.p1.tot + ft119.p2.tot + ft119.p3.tot + ft119.p4.tot + ft119.p5.tot + ft119.rione.final_points;
    // const ft120 = {
    //     ...fantateam_type,
    //     team_index: 120,
    //     name: "Samu veni",
    //     rione: { ...SUD },
    //     p1: { ...MiracleObichukwu24 },
    //     p2: { ...AlessandroRizzi24 },
    //     p3: { ...DavidGaspardo24 },
    //     p4: { ...GioeleTudini24 },
    //     p5: { ...MicheleDeAnna24 },
    // };
    // ft120.total_cost = ft120.p1.cost + ft120.p2.cost + ft120.p3.cost + ft120.p4.cost + ft120.p5.cost;
    // ft120.tot_g1 = ft120.p1.g1 + ft120.p2.g1 + ft120.p3.g1 + ft120.p4.g1 + ft120.p5.g1;
    // ft120.tot_g2 = ft120.p1.g2 + ft120.p2.g2 + ft120.p3.g2 + ft120.p4.g2 + ft120.p5.g2;
    // ft120.tot_g3 = ft120.p1.g3 + ft120.p2.g3 + ft120.p3.g3 + ft120.p4.g3 + ft120.p5.g3;
    // ft120.tot_semi = ft120.p1.semi + ft120.p2.semi + ft120.p3.semi + ft120.p4.semi + ft120.p5.semi;
    // ft120.tot_td3 = ft120.p1.td3 + ft120.p2.td3 + ft120.p3.td3 + ft120.p4.td3 + ft120.p5.td3;
    // ft120.tot_final = ft120.p1.final + ft120.p2.final + ft120.p3.final + ft120.p4.final + ft120.p5.final;
    // ft120.tot_team = ft120.p1.tot + ft120.p2.tot + ft120.p3.tot + ft120.p4.tot + ft120.p5.tot + ft120.rione.final_points;
    // const ft121 = {
    //     ...fantateam_type,
    //     team_index: 121,
    //     name: "Miangeles",
    //     rione: { ...NORD },
    //     p1: { ...EdoardoPicogna24 },
    //     p2: { ...FilippoPasquon24 },
    //     p3: { ...RiccardoSchinella24 },
    //     p4: { ...AlessandroSant24 },
    //     p5: { ...GiovanniZanin24 },
    // };
    // ft121.total_cost = ft121.p1.cost + ft121.p2.cost + ft121.p3.cost + ft121.p4.cost + ft121.p5.cost;
    // ft121.tot_g1 = ft121.p1.g1 + ft121.p2.g1 + ft121.p3.g1 + ft121.p4.g1 + ft121.p5.g1;
    // ft121.tot_g2 = ft121.p1.g2 + ft121.p2.g2 + ft121.p3.g2 + ft121.p4.g2 + ft121.p5.g2;
    // ft121.tot_g3 = ft121.p1.g3 + ft121.p2.g3 + ft121.p3.g3 + ft121.p4.g3 + ft121.p5.g3;
    // ft121.tot_semi = ft121.p1.semi + ft121.p2.semi + ft121.p3.semi + ft121.p4.semi + ft121.p5.semi;
    // ft121.tot_td3 = ft121.p1.td3 + ft121.p2.td3 + ft121.p3.td3 + ft121.p4.td3 + ft121.p5.td3;
    // ft121.tot_final = ft121.p1.final + ft121.p2.final + ft121.p3.final + ft121.p4.final + ft121.p5.final;
    // ft121.tot_team = ft121.p1.tot + ft121.p2.tot + ft121.p3.tot + ft121.p4.tot + ft121.p5.tot + ft121.rione.final_points;
    // const ft122 = {
    //     ...fantateam_type,
    //     team_index: 122,
    //     name: "Amico di Simone Cengarle",
    //     rione: { ...NORD },
    //     p1: { ...VittorioBasso24 },
    //     p2: { ...MarcoLombardo24 },
    //     p3: { ...DavidGaspardo24 },
    //     p4: { ...MatteoBazzaro24 },
    //     p5: { ...LarryTrevisan24 },
    // };
    // ft122.total_cost = ft122.p1.cost + ft122.p2.cost + ft122.p3.cost + ft122.p4.cost + ft122.p5.cost;
    // ft122.tot_g1 = ft122.p1.g1 + ft122.p2.g1 + ft122.p3.g1 + ft122.p4.g1 + ft122.p5.g1;
    // ft122.tot_g2 = ft122.p1.g2 + ft122.p2.g2 + ft122.p3.g2 + ft122.p4.g2 + ft122.p5.g2;
    // ft122.tot_g3 = ft122.p1.g3 + ft122.p2.g3 + ft122.p3.g3 + ft122.p4.g3 + ft122.p5.g3;
    // ft122.tot_semi = ft122.p1.semi + ft122.p2.semi + ft122.p3.semi + ft122.p4.semi + ft122.p5.semi;
    // ft122.tot_td3 = ft122.p1.td3 + ft122.p2.td3 + ft122.p3.td3 + ft122.p4.td3 + ft122.p5.td3;
    // ft122.tot_final = ft122.p1.final + ft122.p2.final + ft122.p3.final + ft122.p4.final + ft122.p5.final;
    // ft122.tot_team = ft122.p1.tot + ft122.p2.tot + ft122.p3.tot + ft122.p4.tot + ft122.p5.tot + ft122.rione.final_points;
    // const ft123 = {
    //     ...fantateam_type,
    //     team_index: 123,
    //     name: "Gabrindri",
    //     rione: { ...EST },
    //     p1: { ...LucaSoramel24 },
    //     p2: { ...AlessioFurlan24 },
    //     p3: { ...FilippoPasquon24 },
    //     p4: { ...DiegoNata24 },
    //     p5: { ...MattiaMasotti24 },
    // };
    // ft123.total_cost = ft123.p1.cost + ft123.p2.cost + ft123.p3.cost + ft123.p4.cost + ft123.p5.cost;
    // ft123.tot_g1 = ft123.p1.g1 + ft123.p2.g1 + ft123.p3.g1 + ft123.p4.g1 + ft123.p5.g1;
    // ft123.tot_g2 = ft123.p1.g2 + ft123.p2.g2 + ft123.p3.g2 + ft123.p4.g2 + ft123.p5.g2;
    // ft123.tot_g3 = ft123.p1.g3 + ft123.p2.g3 + ft123.p3.g3 + ft123.p4.g3 + ft123.p5.g3;
    // ft123.tot_semi = ft123.p1.semi + ft123.p2.semi + ft123.p3.semi + ft123.p4.semi + ft123.p5.semi;
    // ft123.tot_td3 = ft123.p1.td3 + ft123.p2.td3 + ft123.p3.td3 + ft123.p4.td3 + ft123.p5.td3;
    // ft123.tot_final = ft123.p1.final + ft123.p2.final + ft123.p3.final + ft123.p4.final + ft123.p5.final;
    // ft123.tot_team = ft123.p1.tot + ft123.p2.tot + ft123.p3.tot + ft123.p4.tot + ft123.p5.tot + ft123.rione.final_points;
    // const ft124 = {
    //     ...fantateam_type,
    //     team_index: 124,
    //     name: "Olimpia Armadi",
    //     rione: { ...WEST },
    //     p1: { ...MiracleObichukwu24 },
    //     p2: { ...MarcoSerrao24 },
    //     p3: { ...AlessandroSant24 },
    //     p4: { ...MauroPerina24 },
    //     p5: { ...AlessandroRizzi24 },
    // };
    // ft124.total_cost = ft124.p1.cost + ft124.p2.cost + ft124.p3.cost + ft124.p4.cost + ft124.p5.cost;
    // ft124.tot_g1 = ft124.p1.g1 + ft124.p2.g1 + ft124.p3.g1 + ft124.p4.g1 + ft124.p5.g1;
    // ft124.tot_g2 = ft124.p1.g2 + ft124.p2.g2 + ft124.p3.g2 + ft124.p4.g2 + ft124.p5.g2;
    // ft124.tot_g3 = ft124.p1.g3 + ft124.p2.g3 + ft124.p3.g3 + ft124.p4.g3 + ft124.p5.g3;
    // ft124.tot_semi = ft124.p1.semi + ft124.p2.semi + ft124.p3.semi + ft124.p4.semi + ft124.p5.semi;
    // ft124.tot_td3 = ft124.p1.td3 + ft124.p2.td3 + ft124.p3.td3 + ft124.p4.td3 + ft124.p5.td3;
    // ft124.tot_final = ft124.p1.final + ft124.p2.final + ft124.p3.final + ft124.p4.final + ft124.p5.final;
    // ft124.tot_team = ft124.p1.tot + ft124.p2.tot + ft124.p3.tot + ft124.p4.tot + ft124.p5.tot + ft124.rione.final_points;
    // const ft125 = {
    //     ...fantateam_type,
    //     team_index: 125,
    //     name: "PAMPA MENTALITY",
    //     rione: { ...SUD },
    //     p1: { ...FilippoPasquon24 },
    //     p2: { ...MattiaMasotti24 },
    //     p3: { ...ChristianZanet24 },
    //     p4: { ...MiracleObichukwu24 },
    //     p5: { ...DiegoNata24 },
    // };
    // ft125.total_cost = ft125.p1.cost + ft125.p2.cost + ft125.p3.cost + ft125.p4.cost + ft125.p5.cost;
    // ft125.tot_g1 = ft125.p1.g1 + ft125.p2.g1 + ft125.p3.g1 + ft125.p4.g1 + ft125.p5.g1;
    // ft125.tot_g2 = ft125.p1.g2 + ft125.p2.g2 + ft125.p3.g2 + ft125.p4.g2 + ft125.p5.g2;
    // ft125.tot_g3 = ft125.p1.g3 + ft125.p2.g3 + ft125.p3.g3 + ft125.p4.g3 + ft125.p5.g3;
    // ft125.tot_semi = ft125.p1.semi + ft125.p2.semi + ft125.p3.semi + ft125.p4.semi + ft125.p5.semi;
    // ft125.tot_td3 = ft125.p1.td3 + ft125.p2.td3 + ft125.p3.td3 + ft125.p4.td3 + ft125.p5.td3;
    // ft125.tot_final = ft125.p1.final + ft125.p2.final + ft125.p3.final + ft125.p4.final + ft125.p5.final;
    // ft125.tot_team = ft125.p1.tot + ft125.p2.tot + ft125.p3.tot + ft125.p4.tot + ft125.p5.tot + ft125.rione.final_points;
    // const ft126 = {
    //     ...fantateam_type,
    //     team_index: 126,
    //     name: "Axeliathepoliceofficer",
    //     rione: { ...EST },
    //     p1: { ...MatteoBazzaro24 },
    //     p2: { ...MiracleObichukwu24 },
    //     p3: { ...MarcoRizzi24 },
    //     p4: { ...MarcoPolo24 },
    //     p5: { ...LucaAnedda24 },
    // };
    // ft126.total_cost = ft126.p1.cost + ft126.p2.cost + ft126.p3.cost + ft126.p4.cost + ft126.p5.cost;
    // ft126.tot_g1 = ft126.p1.g1 + ft126.p2.g1 + ft126.p3.g1 + ft126.p4.g1 + ft126.p5.g1;
    // ft126.tot_g2 = ft126.p1.g2 + ft126.p2.g2 + ft126.p3.g2 + ft126.p4.g2 + ft126.p5.g2;
    // ft126.tot_g3 = ft126.p1.g3 + ft126.p2.g3 + ft126.p3.g3 + ft126.p4.g3 + ft126.p5.g3;
    // ft126.tot_semi = ft126.p1.semi + ft126.p2.semi + ft126.p3.semi + ft126.p4.semi + ft126.p5.semi;
    // ft126.tot_td3 = ft126.p1.td3 + ft126.p2.td3 + ft126.p3.td3 + ft126.p4.td3 + ft126.p5.td3;
    // ft126.tot_final = ft126.p1.final + ft126.p2.final + ft126.p3.final + ft126.p4.final + ft126.p5.final;
    // ft126.tot_team = ft126.p1.tot + ft126.p2.tot + ft126.p3.tot + ft126.p4.tot + ft126.p5.tot + ft126.rione.final_points;
    // const ft127 = {
    //     ...fantateam_type,
    //     team_index: 127,
    //     name: "ISTANBULKEBAB GLOBETROTTERS",
    //     rione: { ...SUD },
    //     p1: { ...ValentinoCigainero24 },
    //     p2: { ...MicheleDeAnna24 },
    //     p3: { ...MattiaRoiatti24 },
    //     p4: { ...LucaAnedda24 },
    //     p5: { ...GiacomoSilvestri24 },
    // };
    // ft127.total_cost = ft127.p1.cost + ft127.p2.cost + ft127.p3.cost + ft127.p4.cost + ft127.p5.cost;
    // ft127.tot_g1 = ft127.p1.g1 + ft127.p2.g1 + ft127.p3.g1 + ft127.p4.g1 + ft127.p5.g1;
    // ft127.tot_g2 = ft127.p1.g2 + ft127.p2.g2 + ft127.p3.g2 + ft127.p4.g2 + ft127.p5.g2;
    // ft127.tot_g3 = ft127.p1.g3 + ft127.p2.g3 + ft127.p3.g3 + ft127.p4.g3 + ft127.p5.g3;
    // ft127.tot_semi = ft127.p1.semi + ft127.p2.semi + ft127.p3.semi + ft127.p4.semi + ft127.p5.semi;
    // ft127.tot_td3 = ft127.p1.td3 + ft127.p2.td3 + ft127.p3.td3 + ft127.p4.td3 + ft127.p5.td3;
    // ft127.tot_final = ft127.p1.final + ft127.p2.final + ft127.p3.final + ft127.p4.final + ft127.p5.final;
    // ft127.tot_team = ft127.p1.tot + ft127.p2.tot + ft127.p3.tot + ft127.p4.tot + ft127.p5.tot + ft127.rione.final_points;
    // const ft128 = {
    //     ...fantateam_type,
    //     team_index: 128,
    //     name: "Wpalio",
    //     rione: { ...SUD },
    //     p1: { ...StefanoPolano24 },
    //     p2: { ...DavidGaspardo24 },
    //     p3: { ...ThomasBaracetti24 },
    //     p4: { ...AlessandroGalassi24 },
    //     p5: { ...EmanueleDaneluzzi24 },
    // };
    // ft128.total_cost = ft128.p1.cost + ft128.p2.cost + ft128.p3.cost + ft128.p4.cost + ft128.p5.cost;
    // ft128.tot_g1 = ft128.p1.g1 + ft128.p2.g1 + ft128.p3.g1 + ft128.p4.g1 + ft128.p5.g1;
    // ft128.tot_g2 = ft128.p1.g2 + ft128.p2.g2 + ft128.p3.g2 + ft128.p4.g2 + ft128.p5.g2;
    // ft128.tot_g3 = ft128.p1.g3 + ft128.p2.g3 + ft128.p3.g3 + ft128.p4.g3 + ft128.p5.g3;
    // ft128.tot_semi = ft128.p1.semi + ft128.p2.semi + ft128.p3.semi + ft128.p4.semi + ft128.p5.semi;
    // ft128.tot_td3 = ft128.p1.td3 + ft128.p2.td3 + ft128.p3.td3 + ft128.p4.td3 + ft128.p5.td3;
    // ft128.tot_final = ft128.p1.final + ft128.p2.final + ft128.p3.final + ft128.p4.final + ft128.p5.final;
    // ft128.tot_team = ft128.p1.tot + ft128.p2.tot + ft128.p3.tot + ft128.p4.tot + ft128.p5.tot + ft128.rione.final_points;
    // const ft129 = {
    //     ...fantateam_type,
    //     team_index: 129,
    //     name: "giulia",
    //     rione: { ...EST },
    //     p1: { ...AlessandroRizzi24 },
    //     p2: { ...MarcoRizzi24 },
    //     p3: { ...LucaAnedda24 },
    //     p4: { ...MattiaRoiatti24 },
    //     p5: { ...EmanueleDaneluzzi24 },
    // };
    // ft129.total_cost = ft129.p1.cost + ft129.p2.cost + ft129.p3.cost + ft129.p4.cost + ft129.p5.cost;
    // ft129.tot_g1 = ft129.p1.g1 + ft129.p2.g1 + ft129.p3.g1 + ft129.p4.g1 + ft129.p5.g1;
    // ft129.tot_g2 = ft129.p1.g2 + ft129.p2.g2 + ft129.p3.g2 + ft129.p4.g2 + ft129.p5.g2;
    // ft129.tot_g3 = ft129.p1.g3 + ft129.p2.g3 + ft129.p3.g3 + ft129.p4.g3 + ft129.p5.g3;
    // ft129.tot_semi = ft129.p1.semi + ft129.p2.semi + ft129.p3.semi + ft129.p4.semi + ft129.p5.semi;
    // ft129.tot_td3 = ft129.p1.td3 + ft129.p2.td3 + ft129.p3.td3 + ft129.p4.td3 + ft129.p5.td3;
    // ft129.tot_final = ft129.p1.final + ft129.p2.final + ft129.p3.final + ft129.p4.final + ft129.p5.final;
    // ft129.tot_team = ft129.p1.tot + ft129.p2.tot + ft129.p3.tot + ft129.p4.tot + ft129.p5.tot + ft129.rione.final_points;
    // const ft130 = {
    //     ...fantateam_type,
    //     team_index: 130,
    //     name: "giorgina",
    //     rione: { ...EST },
    //     p1: { ...MarcoRizzi24 },
    //     p2: { ...ValentinoCigainero24 },
    //     p3: { ...MattiaRoiatti24 },
    //     p4: { ...LucaAnedda24 },
    //     p5: { ...GiacomoSilvestri24 },
    // };
    // ft130.total_cost = ft130.p1.cost + ft130.p2.cost + ft130.p3.cost + ft130.p4.cost + ft130.p5.cost;
    // ft130.tot_g1 = ft130.p1.g1 + ft130.p2.g1 + ft130.p3.g1 + ft130.p4.g1 + ft130.p5.g1;
    // ft130.tot_g2 = ft130.p1.g2 + ft130.p2.g2 + ft130.p3.g2 + ft130.p4.g2 + ft130.p5.g2;
    // ft130.tot_g3 = ft130.p1.g3 + ft130.p2.g3 + ft130.p3.g3 + ft130.p4.g3 + ft130.p5.g3;
    // ft130.tot_semi = ft130.p1.semi + ft130.p2.semi + ft130.p3.semi + ft130.p4.semi + ft130.p5.semi;
    // ft130.tot_td3 = ft130.p1.td3 + ft130.p2.td3 + ft130.p3.td3 + ft130.p4.td3 + ft130.p5.td3;
    // ft130.tot_final = ft130.p1.final + ft130.p2.final + ft130.p3.final + ft130.p4.final + ft130.p5.final;
    // ft130.tot_team = ft130.p1.tot + ft130.p2.tot + ft130.p3.tot + ft130.p4.tot + ft130.p5.tot + ft130.rione.final_points;
    // const ft131 = {
    //     ...fantateam_type,
    //     team_index: 131,
    //     name: "CesoloilNordAP",
    //     rione: { ...NORD },
    //     p1: { ...DiegoNata24 },
    //     p2: { ...LucaAnedda24 },
    //     p3: { ...FilippoPasquon24 },
    //     p4: { ...AlessandroRizzi24 },
    //     p5: { ...GiacomoPiacentini24 },
    // };
    // ft131.total_cost = ft131.p1.cost + ft131.p2.cost + ft131.p3.cost + ft131.p4.cost + ft131.p5.cost;
    // ft131.tot_g1 = ft131.p1.g1 + ft131.p2.g1 + ft131.p3.g1 + ft131.p4.g1 + ft131.p5.g1;
    // ft131.tot_g2 = ft131.p1.g2 + ft131.p2.g2 + ft131.p3.g2 + ft131.p4.g2 + ft131.p5.g2;
    // ft131.tot_g3 = ft131.p1.g3 + ft131.p2.g3 + ft131.p3.g3 + ft131.p4.g3 + ft131.p5.g3;
    // ft131.tot_semi = ft131.p1.semi + ft131.p2.semi + ft131.p3.semi + ft131.p4.semi + ft131.p5.semi;
    // ft131.tot_td3 = ft131.p1.td3 + ft131.p2.td3 + ft131.p3.td3 + ft131.p4.td3 + ft131.p5.td3;
    // ft131.tot_final = ft131.p1.final + ft131.p2.final + ft131.p3.final + ft131.p4.final + ft131.p5.final;
    // ft131.tot_team = ft131.p1.tot + ft131.p2.tot + ft131.p3.tot + ft131.p4.tot + ft131.p5.tot + ft131.rione.final_points;
    // const ft132 = {
    //     ...fantateam_type,
    //     team_index: 132,
    //     name: "Real Codroipen",
    //     rione: { ...WEST },
    //     p1: { ...ThomasBaracetti24 },
    //     p2: { ...GabrieleMiani24 },
    //     p3: { ...SebastianoTonizzo24 },
    //     p4: { ...MarcoMarchetti24 },
    //     p5: { ...EdoardoPicogna24 },
    // };
    // ft132.total_cost = ft132.p1.cost + ft132.p2.cost + ft132.p3.cost + ft132.p4.cost + ft132.p5.cost;
    // ft132.tot_g1 = ft132.p1.g1 + ft132.p2.g1 + ft132.p3.g1 + ft132.p4.g1 + ft132.p5.g1;
    // ft132.tot_g2 = ft132.p1.g2 + ft132.p2.g2 + ft132.p3.g2 + ft132.p4.g2 + ft132.p5.g2;
    // ft132.tot_g3 = ft132.p1.g3 + ft132.p2.g3 + ft132.p3.g3 + ft132.p4.g3 + ft132.p5.g3;
    // ft132.tot_semi = ft132.p1.semi + ft132.p2.semi + ft132.p3.semi + ft132.p4.semi + ft132.p5.semi;
    // ft132.tot_td3 = ft132.p1.td3 + ft132.p2.td3 + ft132.p3.td3 + ft132.p4.td3 + ft132.p5.td3;
    // ft132.tot_final = ft132.p1.final + ft132.p2.final + ft132.p3.final + ft132.p4.final + ft132.p5.final;
    // ft132.tot_team = ft132.p1.tot + ft132.p2.tot + ft132.p3.tot + ft132.p4.tot + ft132.p5.tot + ft132.rione.final_points;
    // const ft133 = {
    //     ...fantateam_type,
    //     team_index: 133,
    //     name: "Pix",
    //     rione: { ...WEST },
    //     p1: { ...GiacomoPiacentini24 },
    //     p2: { ...VittorioBasso24 },
    //     p3: { ...MarcoSerrao24 },
    //     p4: { ...TommasoMartello24 },
    //     p5: { ...AlessandroRizzi24 },
    // };
    // ft133.total_cost = ft133.p1.cost + ft133.p2.cost + ft133.p3.cost + ft133.p4.cost + ft133.p5.cost;
    // ft133.tot_g1 = ft133.p1.g1 + ft133.p2.g1 + ft133.p3.g1 + ft133.p4.g1 + ft133.p5.g1;
    // ft133.tot_g2 = ft133.p1.g2 + ft133.p2.g2 + ft133.p3.g2 + ft133.p4.g2 + ft133.p5.g2;
    // ft133.tot_g3 = ft133.p1.g3 + ft133.p2.g3 + ft133.p3.g3 + ft133.p4.g3 + ft133.p5.g3;
    // ft133.tot_semi = ft133.p1.semi + ft133.p2.semi + ft133.p3.semi + ft133.p4.semi + ft133.p5.semi;
    // ft133.tot_td3 = ft133.p1.td3 + ft133.p2.td3 + ft133.p3.td3 + ft133.p4.td3 + ft133.p5.td3;
    // ft133.tot_final = ft133.p1.final + ft133.p2.final + ft133.p3.final + ft133.p4.final + ft133.p5.final;
    // ft133.tot_team = ft133.p1.tot + ft133.p2.tot + ft133.p3.tot + ft133.p4.tot + ft133.p5.tot + ft133.rione.final_points;
    // const ft134 = {
    //     ...fantateam_type,
    //     team_index: 134,
    //     name: "FMB united",
    //     rione: { ...EST },
    //     p1: { ...AlessandroRojatti24 },
    //     p2: { ...GabrieleMiani24 },
    //     p3: { ...MarcoRizzi24 },
    //     p4: { ...MattiaRoiatti24 },
    //     p5: { ...LucaAnedda24 },
    // };
    // ft134.total_cost = ft134.p1.cost + ft134.p2.cost + ft134.p3.cost + ft134.p4.cost + ft134.p5.cost;
    // ft134.tot_g1 = ft134.p1.g1 + ft134.p2.g1 + ft134.p3.g1 + ft134.p4.g1 + ft134.p5.g1;
    // ft134.tot_g2 = ft134.p1.g2 + ft134.p2.g2 + ft134.p3.g2 + ft134.p4.g2 + ft134.p5.g2;
    // ft134.tot_g3 = ft134.p1.g3 + ft134.p2.g3 + ft134.p3.g3 + ft134.p4.g3 + ft134.p5.g3;
    // ft134.tot_semi = ft134.p1.semi + ft134.p2.semi + ft134.p3.semi + ft134.p4.semi + ft134.p5.semi;
    // ft134.tot_td3 = ft134.p1.td3 + ft134.p2.td3 + ft134.p3.td3 + ft134.p4.td3 + ft134.p5.td3;
    // ft134.tot_final = ft134.p1.final + ft134.p2.final + ft134.p3.final + ft134.p4.final + ft134.p5.final;
    // ft134.tot_team = ft134.p1.tot + ft134.p2.tot + ft134.p3.tot + ft134.p4.tot + ft134.p5.tot + ft134.rione.final_points;
    // const ft135 = {
    //     ...fantateam_type,
    //     team_index: 135,
    //     name: "Ghisangeles Clippers II",
    //     rione: { ...EST },
    //     p1: { ...MattiaMasotti24 },
    //     p2: { ...ChristianZanet24 },
    //     p3: { ...FilippoPasquon24 },
    //     p4: { ...DavidGaspardo24 },
    //     p5: { ...MassimilianoRossi24 },
    // };
    // ft135.total_cost = ft135.p1.cost + ft135.p2.cost + ft135.p3.cost + ft135.p4.cost + ft135.p5.cost;
    // ft135.tot_g1 = ft135.p1.g1 + ft135.p2.g1 + ft135.p3.g1 + ft135.p4.g1 + ft135.p5.g1;
    // ft135.tot_g2 = ft135.p1.g2 + ft135.p2.g2 + ft135.p3.g2 + ft135.p4.g2 + ft135.p5.g2;
    // ft135.tot_g3 = ft135.p1.g3 + ft135.p2.g3 + ft135.p3.g3 + ft135.p4.g3 + ft135.p5.g3;
    // ft135.tot_semi = ft135.p1.semi + ft135.p2.semi + ft135.p3.semi + ft135.p4.semi + ft135.p5.semi;
    // ft135.tot_td3 = ft135.p1.td3 + ft135.p2.td3 + ft135.p3.td3 + ft135.p4.td3 + ft135.p5.td3;
    // ft135.tot_final = ft135.p1.final + ft135.p2.final + ft135.p3.final + ft135.p4.final + ft135.p5.final;
    // ft135.tot_team = ft135.p1.tot + ft135.p2.tot + ft135.p3.tot + ft135.p4.tot + ft135.p5.tot + ft135.rione.final_points;
    // const ft136 = {
    //     ...fantateam_type,
    //     team_index: 136,
    //     name: "asdfg",
    //     rione: { ...WEST },
    //     p1: { ...MassimilianoRossi24 },
    //     p2: { ...MassimoMasotti24 },
    //     p3: { ...EugenioDeTina24 },
    //     p4: { ...DenisVanin24 },
    //     p5: { ...LucaAnedda24 },
    // };
    // ft136.total_cost = ft136.p1.cost + ft136.p2.cost + ft136.p3.cost + ft136.p4.cost + ft136.p5.cost;
    // ft136.tot_g1 = ft136.p1.g1 + ft136.p2.g1 + ft136.p3.g1 + ft136.p4.g1 + ft136.p5.g1;
    // ft136.tot_g2 = ft136.p1.g2 + ft136.p2.g2 + ft136.p3.g2 + ft136.p4.g2 + ft136.p5.g2;
    // ft136.tot_g3 = ft136.p1.g3 + ft136.p2.g3 + ft136.p3.g3 + ft136.p4.g3 + ft136.p5.g3;
    // ft136.tot_semi = ft136.p1.semi + ft136.p2.semi + ft136.p3.semi + ft136.p4.semi + ft136.p5.semi;
    // ft136.tot_td3 = ft136.p1.td3 + ft136.p2.td3 + ft136.p3.td3 + ft136.p4.td3 + ft136.p5.td3;
    // ft136.tot_final = ft136.p1.final + ft136.p2.final + ft136.p3.final + ft136.p4.final + ft136.p5.final;
    // ft136.tot_team = ft136.p1.tot + ft136.p2.tot + ft136.p3.tot + ft136.p4.tot + ft136.p5.tot + ft136.rione.final_points;
    // const ft137 = {
    //     ...fantateam_type,
    //     team_index: 137,
    //     name: "zioperone",
    //     rione: { ...NORD },
    //     p1: { ...LorenzoMoro24 },
    //     p2: { ...DavidGaspardo24 },
    //     p3: { ...FilippoPasquon24 },
    //     p4: { ...VittorioBasso24 },
    //     p5: { ...WilliamIob24 },
    // };
    // ft137.total_cost = ft137.p1.cost + ft137.p2.cost + ft137.p3.cost + ft137.p4.cost + ft137.p5.cost;
    // ft137.tot_g1 = ft137.p1.g1 + ft137.p2.g1 + ft137.p3.g1 + ft137.p4.g1 + ft137.p5.g1;
    // ft137.tot_g2 = ft137.p1.g2 + ft137.p2.g2 + ft137.p3.g2 + ft137.p4.g2 + ft137.p5.g2;
    // ft137.tot_g3 = ft137.p1.g3 + ft137.p2.g3 + ft137.p3.g3 + ft137.p4.g3 + ft137.p5.g3;
    // ft137.tot_semi = ft137.p1.semi + ft137.p2.semi + ft137.p3.semi + ft137.p4.semi + ft137.p5.semi;
    // ft137.tot_td3 = ft137.p1.td3 + ft137.p2.td3 + ft137.p3.td3 + ft137.p4.td3 + ft137.p5.td3;
    // ft137.tot_final = ft137.p1.final + ft137.p2.final + ft137.p3.final + ft137.p4.final + ft137.p5.final;
    // ft137.tot_team = ft137.p1.tot + ft137.p2.tot + ft137.p3.tot + ft137.p4.tot + ft137.p5.tot + ft137.rione.final_points;
    // const ft138 = {
    //     ...fantateam_type,
    //     team_index: 138,
    //     name: "Baskettone",
    //     rione: { ...NORD },
    //     p1: { ...MattiaRoiatti24 },
    //     p2: { ...GabrieleMiani24 },
    //     p3: { ...MauroPerina24 },
    //     p4: { ...MarcoMarchetti24 },
    //     p5: { ...MassimoMasotti24 },
    // };
    // ft138.total_cost = ft138.p1.cost + ft138.p2.cost + ft138.p3.cost + ft138.p4.cost + ft138.p5.cost;
    // ft138.tot_g1 = ft138.p1.g1 + ft138.p2.g1 + ft138.p3.g1 + ft138.p4.g1 + ft138.p5.g1;
    // ft138.tot_g2 = ft138.p1.g2 + ft138.p2.g2 + ft138.p3.g2 + ft138.p4.g2 + ft138.p5.g2;
    // ft138.tot_g3 = ft138.p1.g3 + ft138.p2.g3 + ft138.p3.g3 + ft138.p4.g3 + ft138.p5.g3;
    // ft138.tot_semi = ft138.p1.semi + ft138.p2.semi + ft138.p3.semi + ft138.p4.semi + ft138.p5.semi;
    // ft138.tot_td3 = ft138.p1.td3 + ft138.p2.td3 + ft138.p3.td3 + ft138.p4.td3 + ft138.p5.td3;
    // ft138.tot_final = ft138.p1.final + ft138.p2.final + ft138.p3.final + ft138.p4.final + ft138.p5.final;
    // ft138.tot_team = ft138.p1.tot + ft138.p2.tot + ft138.p3.tot + ft138.p4.tot + ft138.p5.tot + ft138.rione.final_points;
    // const ft139 = {
    //     ...fantateam_type,
    //     team_index: 139,
    //     name: "Gate 2 Aeroporto Malpensa-Silvio Berlusconi Milano✈️",
    //     rione: { ...EST },
    //     p1: { ...DavidGaspardo24 },
    //     p2: { ...FilippoPasquon24 },
    //     p3: { ...MarcoPolo24 },
    //     p4: { ...MattiaMasotti24 },
    //     p5: { ...LucaGemo24 },
    // };
    // ft139.total_cost = ft139.p1.cost + ft139.p2.cost + ft139.p3.cost + ft139.p4.cost + ft139.p5.cost;
    // ft139.tot_g1 = ft139.p1.g1 + ft139.p2.g1 + ft139.p3.g1 + ft139.p4.g1 + ft139.p5.g1;
    // ft139.tot_g2 = ft139.p1.g2 + ft139.p2.g2 + ft139.p3.g2 + ft139.p4.g2 + ft139.p5.g2;
    // ft139.tot_g3 = ft139.p1.g3 + ft139.p2.g3 + ft139.p3.g3 + ft139.p4.g3 + ft139.p5.g3;
    // ft139.tot_semi = ft139.p1.semi + ft139.p2.semi + ft139.p3.semi + ft139.p4.semi + ft139.p5.semi;
    // ft139.tot_td3 = ft139.p1.td3 + ft139.p2.td3 + ft139.p3.td3 + ft139.p4.td3 + ft139.p5.td3;
    // ft139.tot_final = ft139.p1.final + ft139.p2.final + ft139.p3.final + ft139.p4.final + ft139.p5.final;
    // ft139.tot_team = ft139.p1.tot + ft139.p2.tot + ft139.p3.tot + ft139.p4.tot + ft139.p5.tot + ft139.rione.final_points;
    // const ft140 = {
    //     ...fantateam_type,
    //     team_index: 140,
    //     name: "Arrosto & tiro",
    //     rione: { ...EST },
    //     p1: { ...IacopoPivetta24 },
    //     p2: { ...WilliamIob24 },
    //     p3: { ...DenisVanin24 },
    //     p4: { ...DanieleGanzit24 },
    //     p5: { ...MarcoSerrao24 },
    // };
    // ft140.total_cost = ft140.p1.cost + ft140.p2.cost + ft140.p3.cost + ft140.p4.cost + ft140.p5.cost;
    // ft140.tot_g1 = ft140.p1.g1 + ft140.p2.g1 + ft140.p3.g1 + ft140.p4.g1 + ft140.p5.g1;
    // ft140.tot_g2 = ft140.p1.g2 + ft140.p2.g2 + ft140.p3.g2 + ft140.p4.g2 + ft140.p5.g2;
    // ft140.tot_g3 = ft140.p1.g3 + ft140.p2.g3 + ft140.p3.g3 + ft140.p4.g3 + ft140.p5.g3;
    // ft140.tot_semi = ft140.p1.semi + ft140.p2.semi + ft140.p3.semi + ft140.p4.semi + ft140.p5.semi;
    // ft140.tot_td3 = ft140.p1.td3 + ft140.p2.td3 + ft140.p3.td3 + ft140.p4.td3 + ft140.p5.td3;
    // ft140.tot_final = ft140.p1.final + ft140.p2.final + ft140.p3.final + ft140.p4.final + ft140.p5.final;
    // ft140.tot_team = ft140.p1.tot + ft140.p2.tot + ft140.p3.tot + ft140.p4.tot + ft140.p5.tot + ft140.rione.final_points;
    // const ft141 = {
    //     ...fantateam_type,
    //     team_index: 141,
    //     name: "West riformulato",
    //     rione: { ...WEST },
    //     p1: { ...VittorioGri24 },
    //     p2: { ...ChristianZanet24 },
    //     p3: { ...MauroPerina24 },
    //     p4: { ...MattiaRoiatti24 },
    //     p5: { ...AlessandroRizzi24 },
    // };
    // ft141.total_cost = ft141.p1.cost + ft141.p2.cost + ft141.p3.cost + ft141.p4.cost + ft141.p5.cost;
    // ft141.tot_g1 = ft141.p1.g1 + ft141.p2.g1 + ft141.p3.g1 + ft141.p4.g1 + ft141.p5.g1;
    // ft141.tot_g2 = ft141.p1.g2 + ft141.p2.g2 + ft141.p3.g2 + ft141.p4.g2 + ft141.p5.g2;
    // ft141.tot_g3 = ft141.p1.g3 + ft141.p2.g3 + ft141.p3.g3 + ft141.p4.g3 + ft141.p5.g3;
    // ft141.tot_semi = ft141.p1.semi + ft141.p2.semi + ft141.p3.semi + ft141.p4.semi + ft141.p5.semi;
    // ft141.tot_td3 = ft141.p1.td3 + ft141.p2.td3 + ft141.p3.td3 + ft141.p4.td3 + ft141.p5.td3;
    // ft141.tot_final = ft141.p1.final + ft141.p2.final + ft141.p3.final + ft141.p4.final + ft141.p5.final;
    // ft141.tot_team = ft141.p1.tot + ft141.p2.tot + ft141.p3.tot + ft141.p4.tot + ft141.p5.tot + ft141.rione.final_points;
    // const ft142 = {
    //     ...fantateam_type,
    //     team_index: 142,
    //     name: "Ratflingbanana",
    //     rione: { ...SUD },
    //     p1: { ...DavideBroggi24 },
    //     p2: { ...MattiaMasotti24 },
    //     p3: { ...GiacomoSilvestri24 },
    //     p4: { ...ChristianZanet24 },
    //     p5: { ...DavidGaspardo24 },
    // };
    // ft142.total_cost = ft142.p1.cost + ft142.p2.cost + ft142.p3.cost + ft142.p4.cost + ft142.p5.cost;
    // ft142.tot_g1 = ft142.p1.g1 + ft142.p2.g1 + ft142.p3.g1 + ft142.p4.g1 + ft142.p5.g1;
    // ft142.tot_g2 = ft142.p1.g2 + ft142.p2.g2 + ft142.p3.g2 + ft142.p4.g2 + ft142.p5.g2;
    // ft142.tot_g3 = ft142.p1.g3 + ft142.p2.g3 + ft142.p3.g3 + ft142.p4.g3 + ft142.p5.g3;
    // ft142.tot_semi = ft142.p1.semi + ft142.p2.semi + ft142.p3.semi + ft142.p4.semi + ft142.p5.semi;
    // ft142.tot_td3 = ft142.p1.td3 + ft142.p2.td3 + ft142.p3.td3 + ft142.p4.td3 + ft142.p5.td3;
    // ft142.tot_final = ft142.p1.final + ft142.p2.final + ft142.p3.final + ft142.p4.final + ft142.p5.final;
    // ft142.tot_team = ft142.p1.tot + ft142.p2.tot + ft142.p3.tot + ft142.p4.tot + ft142.p5.tot + ft142.rione.final_points;
    // const ft143 = {
    //     ...fantateam_type,
    //     team_index: 143,
    //     name: "Ducks",
    //     rione: { ...NORD },
    //     p1: { ...MarcoRizzi24 },
    //     p2: { ...MarcoLombardo24 },
    //     p3: { ...DavidGaspardo24 },
    //     p4: { ...FilippoPasquon24 },
    //     p5: { ...LorenzoMoro24 },
    // };
    // ft143.total_cost = ft143.p1.cost + ft143.p2.cost + ft143.p3.cost + ft143.p4.cost + ft143.p5.cost;
    // ft143.tot_g1 = ft143.p1.g1 + ft143.p2.g1 + ft143.p3.g1 + ft143.p4.g1 + ft143.p5.g1;
    // ft143.tot_g2 = ft143.p1.g2 + ft143.p2.g2 + ft143.p3.g2 + ft143.p4.g2 + ft143.p5.g2;
    // ft143.tot_g3 = ft143.p1.g3 + ft143.p2.g3 + ft143.p3.g3 + ft143.p4.g3 + ft143.p5.g3;
    // ft143.tot_semi = ft143.p1.semi + ft143.p2.semi + ft143.p3.semi + ft143.p4.semi + ft143.p5.semi;
    // ft143.tot_td3 = ft143.p1.td3 + ft143.p2.td3 + ft143.p3.td3 + ft143.p4.td3 + ft143.p5.td3;
    // ft143.tot_final = ft143.p1.final + ft143.p2.final + ft143.p3.final + ft143.p4.final + ft143.p5.final;
    // ft143.tot_team = ft143.p1.tot + ft143.p2.tot + ft143.p3.tot + ft143.p4.tot + ft143.p5.tot + ft143.rione.final_points;
    // const ft144 = {
    //     ...fantateam_type,
    //     team_index: 144,
    //     name: "Trevi BC",
    //     rione: { ...SUD },
    //     p1: { ...DavidGaspardo24 },
    //     p2: { ...FilippoPasquon24 },
    //     p3: { ...MarcoLombardo24 },
    //     p4: { ...EnricoSant24 },
    //     p5: { ...MarcoRizzi24 },
    // };
    // ft144.total_cost = ft144.p1.cost + ft144.p2.cost + ft144.p3.cost + ft144.p4.cost + ft144.p5.cost;
    // ft144.tot_g1 = ft144.p1.g1 + ft144.p2.g1 + ft144.p3.g1 + ft144.p4.g1 + ft144.p5.g1;
    // ft144.tot_g2 = ft144.p1.g2 + ft144.p2.g2 + ft144.p3.g2 + ft144.p4.g2 + ft144.p5.g2;
    // ft144.tot_g3 = ft144.p1.g3 + ft144.p2.g3 + ft144.p3.g3 + ft144.p4.g3 + ft144.p5.g3;
    // ft144.tot_semi = ft144.p1.semi + ft144.p2.semi + ft144.p3.semi + ft144.p4.semi + ft144.p5.semi;
    // ft144.tot_td3 = ft144.p1.td3 + ft144.p2.td3 + ft144.p3.td3 + ft144.p4.td3 + ft144.p5.td3;
    // ft144.tot_final = ft144.p1.final + ft144.p2.final + ft144.p3.final + ft144.p4.final + ft144.p5.final;
    // ft144.tot_team = ft144.p1.tot + ft144.p2.tot + ft144.p3.tot + ft144.p4.tot + ft144.p5.tot + ft144.rione.final_points;
    // const ft145 = {
    //     ...fantateam_type,
    //     team_index: 145,
    //     name: "FIRETEAM!",
    //     rione: { ...NORD },
    //     p1: { ...VittorioGri24 },
    //     p2: { ...MarcoLombardo24 },
    //     p3: { ...MarcoSerrao24 },
    //     p4: { ...AlessandroRizzi24 },
    //     p5: { ...VittorioBasso24 },
    // };
    // ft145.total_cost = ft145.p1.cost + ft145.p2.cost + ft145.p3.cost + ft145.p4.cost + ft145.p5.cost;
    // ft145.tot_g1 = ft145.p1.g1 + ft145.p2.g1 + ft145.p3.g1 + ft145.p4.g1 + ft145.p5.g1;
    // ft145.tot_g2 = ft145.p1.g2 + ft145.p2.g2 + ft145.p3.g2 + ft145.p4.g2 + ft145.p5.g2;
    // ft145.tot_g3 = ft145.p1.g3 + ft145.p2.g3 + ft145.p3.g3 + ft145.p4.g3 + ft145.p5.g3;
    // ft145.tot_semi = ft145.p1.semi + ft145.p2.semi + ft145.p3.semi + ft145.p4.semi + ft145.p5.semi;
    // ft145.tot_td3 = ft145.p1.td3 + ft145.p2.td3 + ft145.p3.td3 + ft145.p4.td3 + ft145.p5.td3;
    // ft145.tot_final = ft145.p1.final + ft145.p2.final + ft145.p3.final + ft145.p4.final + ft145.p5.final;
    // ft145.tot_team = ft145.p1.tot + ft145.p2.tot + ft145.p3.tot + ft145.p4.tot + ft145.p5.tot + ft145.rione.final_points;
    // const ft146 = {
    //     ...fantateam_type,
    //     team_index: 146,
    //     name: "Orsa",
    //     rione: { ...NORD },
    //     p1: { ...GabrieleMiani24 },
    //     p2: { ...LucaAnedda24 },
    //     p3: { ...AlessandroSantin24 },
    //     p4: { ...LucaDellaLonga24 },
    //     p5: { ...MarcoPolo24 },
    // };
    // ft146.total_cost = ft146.p1.cost + ft146.p2.cost + ft146.p3.cost + ft146.p4.cost + ft146.p5.cost;
    // ft146.tot_g1 = ft146.p1.g1 + ft146.p2.g1 + ft146.p3.g1 + ft146.p4.g1 + ft146.p5.g1;
    // ft146.tot_g2 = ft146.p1.g2 + ft146.p2.g2 + ft146.p3.g2 + ft146.p4.g2 + ft146.p5.g2;
    // ft146.tot_g3 = ft146.p1.g3 + ft146.p2.g3 + ft146.p3.g3 + ft146.p4.g3 + ft146.p5.g3;
    // ft146.tot_semi = ft146.p1.semi + ft146.p2.semi + ft146.p3.semi + ft146.p4.semi + ft146.p5.semi;
    // ft146.tot_td3 = ft146.p1.td3 + ft146.p2.td3 + ft146.p3.td3 + ft146.p4.td3 + ft146.p5.td3;
    // ft146.tot_final = ft146.p1.final + ft146.p2.final + ft146.p3.final + ft146.p4.final + ft146.p5.final;
    // ft146.tot_team = ft146.p1.tot + ft146.p2.tot + ft146.p3.tot + ft146.p4.tot + ft146.p5.tot + ft146.rione.final_points;
    // const ft147 = {
    //     ...fantateam_type,
    //     team_index: 147,
    //     name: "Fantasia 0",
    //     rione: { ...NORD },
    //     p1: { ...GioeleTudini24 },
    //     p2: { ...GabrieleMiani24 },
    //     p3: { ...MarcoMarchetti24 },
    //     p4: { ...MicheleVendrame24 },
    //     p5: { ...LorenzoSchinella24 },
    // };
    // ft147.total_cost = ft147.p1.cost + ft147.p2.cost + ft147.p3.cost + ft147.p4.cost + ft147.p5.cost;
    // ft147.tot_g1 = ft147.p1.g1 + ft147.p2.g1 + ft147.p3.g1 + ft147.p4.g1 + ft147.p5.g1;
    // ft147.tot_g2 = ft147.p1.g2 + ft147.p2.g2 + ft147.p3.g2 + ft147.p4.g2 + ft147.p5.g2;
    // ft147.tot_g3 = ft147.p1.g3 + ft147.p2.g3 + ft147.p3.g3 + ft147.p4.g3 + ft147.p5.g3;
    // ft147.tot_semi = ft147.p1.semi + ft147.p2.semi + ft147.p3.semi + ft147.p4.semi + ft147.p5.semi;
    // ft147.tot_td3 = ft147.p1.td3 + ft147.p2.td3 + ft147.p3.td3 + ft147.p4.td3 + ft147.p5.td3;
    // ft147.tot_final = ft147.p1.final + ft147.p2.final + ft147.p3.final + ft147.p4.final + ft147.p5.final;
    // ft147.tot_team = ft147.p1.tot + ft147.p2.tot + ft147.p3.tot + ft147.p4.tot + ft147.p5.tot + ft147.rione.final_points;
    // const ft148 = {
    //     ...fantateam_type,
    //     team_index: 148,
    //     name: "Los Vikingos	-",
    //     rione: { ...NORD },
    //     p1: { ...MarcoRizzi24 },
    //     p2: { ...AlessandroRizzi24 },
    //     p3: { ...DiegoNata24 },
    //     p4: { ...LucaSoramel24 },
    //     p5: { ...VittorioGri24 },
    // };
    // ft148.total_cost = ft148.p1.cost + ft148.p2.cost + ft148.p3.cost + ft148.p4.cost + ft148.p5.cost;
    // ft148.tot_g1 = ft148.p1.g1 + ft148.p2.g1 + ft148.p3.g1 + ft148.p4.g1 + ft148.p5.g1;
    // ft148.tot_g2 = ft148.p1.g2 + ft148.p2.g2 + ft148.p3.g2 + ft148.p4.g2 + ft148.p5.g2;
    // ft148.tot_g3 = ft148.p1.g3 + ft148.p2.g3 + ft148.p3.g3 + ft148.p4.g3 + ft148.p5.g3;
    // ft148.tot_semi = ft148.p1.semi + ft148.p2.semi + ft148.p3.semi + ft148.p4.semi + ft148.p5.semi;
    // ft148.tot_td3 = ft148.p1.td3 + ft148.p2.td3 + ft148.p3.td3 + ft148.p4.td3 + ft148.p5.td3;
    // ft148.tot_final = ft148.p1.final + ft148.p2.final + ft148.p3.final + ft148.p4.final + ft148.p5.final;
    // ft148.tot_team = ft148.p1.tot + ft148.p2.tot + ft148.p3.tot + ft148.p4.tot + ft148.p5.tot + ft148.rione.final_points;
    // const ft149 = {
    //     ...fantateam_type,
    //     team_index: 149,
    //     name: "Quelli di zona	-",
    //     rione: { ...EST },
    //     p1: { ...AndreaMoretti24 },
    //     p2: { ...AlessandroRizzi24 },
    //     p3: { ...DiegoNata24 },
    //     p4: { ...MassimilianoRossi24 },
    //     p5: { ...LucaSoramel24 },
    // };
    // ft149.total_cost = ft149.p1.cost + ft149.p2.cost + ft149.p3.cost + ft149.p4.cost + ft149.p5.cost;
    // ft149.tot_g1 = ft149.p1.g1 + ft149.p2.g1 + ft149.p3.g1 + ft149.p4.g1 + ft149.p5.g1;
    // ft149.tot_g2 = ft149.p1.g2 + ft149.p2.g2 + ft149.p3.g2 + ft149.p4.g2 + ft149.p5.g2;
    // ft149.tot_g3 = ft149.p1.g3 + ft149.p2.g3 + ft149.p3.g3 + ft149.p4.g3 + ft149.p5.g3;
    // ft149.tot_semi = ft149.p1.semi + ft149.p2.semi + ft149.p3.semi + ft149.p4.semi + ft149.p5.semi;
    // ft149.tot_td3 = ft149.p1.td3 + ft149.p2.td3 + ft149.p3.td3 + ft149.p4.td3 + ft149.p5.td3;
    // ft149.tot_final = ft149.p1.final + ft149.p2.final + ft149.p3.final + ft149.p4.final + ft149.p5.final;
    // ft149.tot_team = ft149.p1.tot + ft149.p2.tot + ft149.p3.tot + ft149.p4.tot + ft149.p5.tot + ft149.rione.final_points;
    // const ft150 = {
    //     ...fantateam_type,
    //     team_index: 150,
    //     name: "Furbicomevolpi	-",
    //     rione: { ...EST },
    //     p1: { ...MarcoSerrao24 },
    //     p2: { ...WilliamIob24 },
    //     p3: { ...DenisVanin24 },
    //     p4: { ...SimoneMartinelli24 },
    //     p5: { ...AlessandroSant24 },
    // };
    // ft150.total_cost = ft150.p1.cost + ft150.p2.cost + ft150.p3.cost + ft150.p4.cost + ft150.p5.cost;
    // ft150.tot_g1 = ft150.p1.g1 + ft150.p2.g1 + ft150.p3.g1 + ft150.p4.g1 + ft150.p5.g1;
    // ft150.tot_g2 = ft150.p1.g2 + ft150.p2.g2 + ft150.p3.g2 + ft150.p4.g2 + ft150.p5.g2;
    // ft150.tot_g3 = ft150.p1.g3 + ft150.p2.g3 + ft150.p3.g3 + ft150.p4.g3 + ft150.p5.g3;
    // ft150.tot_semi = ft150.p1.semi + ft150.p2.semi + ft150.p3.semi + ft150.p4.semi + ft150.p5.semi;
    // ft150.tot_td3 = ft150.p1.td3 + ft150.p2.td3 + ft150.p3.td3 + ft150.p4.td3 + ft150.p5.td3;
    // ft150.tot_final = ft150.p1.final + ft150.p2.final + ft150.p3.final + ft150.p4.final + ft150.p5.final;
    // ft150.tot_team = ft150.p1.tot + ft150.p2.tot + ft150.p3.tot + ft150.p4.tot + ft150.p5.tot + ft150.rione.final_points;
    // const ft151 = {
    //     ...fantateam_type,
    //     team_index: 151,
    //     name: "qwerty	-",
    //     rione: { ...EST },
    //     p1: { ...GionaTell24 },
    //     p2: { ...LorenzoMoro24 },
    //     p3: { ...SimoneMartinelli24 },
    //     p4: { ...MauroPerina24 },
    //     p5: { ...EdoardoPicogna24 },
    // };
    // ft151.total_cost = ft151.p1.cost + ft151.p2.cost + ft151.p3.cost + ft151.p4.cost + ft151.p5.cost;
    // ft151.tot_g1 = ft151.p1.g1 + ft151.p2.g1 + ft151.p3.g1 + ft151.p4.g1 + ft151.p5.g1;
    // ft151.tot_g2 = ft151.p1.g2 + ft151.p2.g2 + ft151.p3.g2 + ft151.p4.g2 + ft151.p5.g2;
    // ft151.tot_g3 = ft151.p1.g3 + ft151.p2.g3 + ft151.p3.g3 + ft151.p4.g3 + ft151.p5.g3;
    // ft151.tot_semi = ft151.p1.semi + ft151.p2.semi + ft151.p3.semi + ft151.p4.semi + ft151.p5.semi;
    // ft151.tot_td3 = ft151.p1.td3 + ft151.p2.td3 + ft151.p3.td3 + ft151.p4.td3 + ft151.p5.td3;
    // ft151.tot_final = ft151.p1.final + ft151.p2.final + ft151.p3.final + ft151.p4.final + ft151.p5.final;
    // ft151.tot_team = ft151.p1.tot + ft151.p2.tot + ft151.p3.tot + ft151.p4.tot + ft151.p5.tot + ft151.rione.final_points;
    
    
    
    const fantateams = [
        ft1, ft2, ft3, ft4, ft5, ft6, ft7, ft8, ft9, ft10, 
        ft11, ft12, ft13, ft14, ft15, ft16, ft17, ft18, ft19, ft20, 
        ft21, ft22, ft23, ft24, ft25, ft26, ft27, ft28, ft29, ft30, 
        ft31, ft32, ft33, ft34, ft35, ft36, ft37, ft38, ft39, ft40, 
        ft41, ft42, ft43, ft44, ft45, ft46, ft47, ft48, ft49, ft50, 
        ft51, ft52, ft53, ft54, ft55, ft56, ft57, ft58, ft59, ft60, 
        ft61, ft62, ft63, ft64, ft65, ft66, ft67, ft68, ft69, ft70, 
        ft71, ft72, ft73, ft74, ft75, ft76, ft77, ft78, ft79, ft80, 
        ft81, ft82, ft83, ft84, ft85, ft86, ft87, ft88, ft89, ft90, 
        ft91, ft92, ft93, ft94, ft95, ft96, ft97, ft98, ft99, ft100, 
        ft101, ft102, ft103, ft104, ft105, ft106, ft107, ft108, ft109, ft110, 
        ft111, ft112, ft113, ft114, ft115, ft116, ft117, ft118, ft119, ft120, 
        ft121, ft122, ft123, ft124, ft125, ft126, ft127, ft128, ft129, ft130, 
        ft131, ft132, ft133, ft134, ft135, ft136, ft137, ft138, ft139, ft140, 
        ft141, ft142, ft143, ft144, ft145, ft146, ft147, ft148, ft149, ft150, 
        ft151, ft152, ft153
      ];
      
    


    //Esporta i tipi di dati per renderli disponibili agli altri script
    export {
        player_type,
        rione_type,
        fantateam_type,
        // MassimilianoMoretti, AndreaMoretti, LarryTrevisan, AlessandroCostantini, MatteoMargarit,
        // MauroCuridori, ChristianZanet, GiacomoPiacentini, GiovanniDalFarra, MiracleObichukwu,
        // LucaDellaLonga, AlessandroRojatti, MicheleGorasso, GiacomoFerigo, UmbertoNobile,
        // DevinChiarcos, ValentinoCigainero, MicheleDeAnna, DavideParon, AlessioFurlan,
        // MichaelMargarit, SebastianoTonizzo,
        // DanieleGanzit, GiacomoSilvestri, VittorioGri, VittorioBasso, AlessandroRizzi,
        // MassimoBaldassi, GabrieleMiani, MarcoMarchetti, MarcoLombardo, MicheleVendrame,
        // LorenzoSchinella, GioeleTudini, FilippoPasquon, TommasoMartello, MarcoRizzi,
        // DavidGaspardo, AntonioGri, RiccardoSchinella,
        // SimoneMartinelli, MatteoSpagnolo, DavideFaurlin, GiovanniTonizzo, AlessandroSant,
        // MatteoBazzaro, AlessandroSantin, AlessandroGalassi, PietroSoramel, FilippoAgnoluzzi,
        // EmanueleDaneluzzi, LucaSoramel, PaoloZorzi, ChristianFedrizzi, FilippoSappa,
        // GiovanniZanin, EnricoSant, StefanoPolano,
        // MarcoPolo, MarcoSerrao, WilliamIob, DavideBroggi, AlexMicottis,
        // MassimilianoRossi, MassimoMasotti, EugenioDeTina, LucaAnedda, DenisVanin,
        // ThomasBaracetti, LucaGemo, DiegoNata, MattiaRoiatti, EdoardoPicogna,
        // MauroPerina, LorenzoMoro, GionaTell, IacopoPivetta, MattiaMasotti,
        NORD, SUD, EST, WEST,
        // ft1, ft2, ft3, ft4, ft5, ft6, ft7, ft8, ft9, ft10, 
        // ft11, ft12, ft13, ft14, ft15, ft16, ft17, ft18, ft19, ft20, 
        // ft21, ft22, ft23, ft24, ft25, ft26, ft27, ft28, ft29, ft30, 
        // ft31, ft32, ft33, ft34, ft35, ft36, ft37, ft38, ft39, ft40, 
        // ft41, ft42, ft43, ft44, ft45, ft46, ft47, ft48, ft49, ft50, 
        // ft51, ft52, ft53, ft54, ft55, ft56, ft57, ft58, ft59, ft60, 
        // ft61, ft62, ft63, ft64, ft65, ft66, ft67, ft68, ft69, ft70, 
        // ft71, ft72, ft73, ft74, ft75, ft76, ft77, ft78, ft79, ft80, 
        // ft81, ft82, ft83, ft84, ft85, ft86, ft87, ft88, ft89, ft90, 
        // ft91, ft92,


    


        fantateams, players, pdkWeights,td3Weights
    };



