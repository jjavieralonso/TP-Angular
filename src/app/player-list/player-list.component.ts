import { Component, OnInit } from '@angular/core';
import { OnceInicialService } from '../once-inicial.service';
import { Player } from './Player';
@Component({
    selector: 'app-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
    players: Player[] = [{
        "image": "assets/img/lionel-messi.jpg",
        "name": "Lionel Messi",
        "position": "Delantero",
        "team": "PSG",
        "league": "Ligue 1",
        "number": 10
    }, {
        "image": "assets/img/rodrigo-depaul.jpg",
        "name": "Rodrigo de Paul",
        "position": "Mediocampista",
        "team": "Atletico de Madrid",
        "league": "LaLiga",
        "number": 7,
    }, {
        "image": "assets/img/emiliano-martinez.jpg",
        "name": "Emiliano Martinez",
        "position": "Arquero",
        "team": "Aston Villa",
        "league": "Premier League",
        "number": 23,
    }, {
        "image": "assets/img/franco-armani.jpg",
        "name": "Franco Armani",
        "position": "Arquero",
        "team": "River Plate",
        "league": "LPF",
        "number": 1,
    }, {
        "image": "assets/img/juan-foyth.jpg",
        "name": "Juan Foyth",
        "position": "Defensor",
        "team": "Villareal C.F",
        "league": "LaLiga",
        "number": 2,
    }, {
        "image": "assets/img/nicolas-tagliafico.jpg",
        "name": "Nicolás Tagliafico",
        "position": "Defensor",
        "team": "Olympique de Lyon",
        "league": "Ligue 1",
        "number": 3,
    }, {
        "image": "assets/img/gonzalo-montiel.jpg",
        "name": "Gonzalo Montiel",
        "position": "Defensor",
        "team": "Sevilla",
        "league": "LaLiga",
        "number": 4,
    }, {
        "image": "assets/img/leandro-paredes.jpg",
        "name": "Leandro Paredes",
        "position": "Mediocampista",
        "team": "Juventus",
        "league": "Serie A",
        "number": 5,
    }, {
        "image": "assets/img/german-pezzella.jpg",
        "name": "German Pezzella",
        "position": "Defensor",
        "team": "Real Betis",
        "league": "LaLiga",
        "number": 6,
    }, {
        "image": "assets/img/marcos-acuna.jpg",
        "name": "Marcos Acuña",
        "position": "Defensor",
        "team": "Sevilla",
        "league": "LaLiga",
        "number": 8,
    }, {
        "image": "assets/img/julian-alvarez.jpg",
        "name": "Julian Alvarez",
        "position": "Delantero",
        "team": "Manchester City",
        "league": "Premier League",
        "number": 9,
    }, {
        "image": "assets/img/angel-dimaria.jpg",
        "name": "Angel Di Maria",
        "position": "Delantero",
        "team": "Juventus",
        "league": "Serie A",
        "number": 11,
    }, {
        "image": "assets/img/geronimo-rulli.jpg",
        "name": "Geronimo Rulli",
        "position": "Arquero",
        "team": "Villareal",
        "league": "LaLiga",
        "number": 12,
    }, {
        "image": "assets/img/cristian-romero.jpg",
        "name": "Cristian Romero",
        "position": "Defensor",
        "team": "Tottenham",
        "league": "Premier League",
        "number": 13,
    }, {
        "image": "assets/img/exequiel-palacios.jpg",
        "name": "Exequiel Palacios",
        "position": "Mediocampista",
        "team": "Leverkusen",
        "league": "Bundesliga",
        "number": 14,
    }, {
        "image": "assets/img/nicolas-gonzalez.jpg",
        "name": "Nicolas Gonzalez",
        "position": "Delantero",
        "team": "Fiorentina",
        "league": "Serie A",
        "number": 15,
    }, {
        "image": "assets/img/joaquin-correa.jpg",
        "name": "Joaquin Correa",
        "position": "Delantero",
        "team": "Inter Milan",
        "league": "Serie A",
        "number": 16,
    }, {
        "image": "assets/img/alejandro-gomez.jpg",
        "name": "Alejandro Gomez",
        "position": "Mediocampista",
        "team": "Sevilla",
        "league": "LaLiga",
        "number": 17,
    }, {
        "image": "assets/img/guido-rodriguez.jpg",
        "name": "Guido Rodriguez",
        "position": "Mediocampista",
        "team": "Real Betis",
        "league": "LaLiga",
        "number": 18,
    }, {
        "image": "assets/img/nicolas-otamendi.jpg",
        "name": "Nicolas Otamendi",
        "position": "Defensor",
        "team": "Benfica",
        "league": "Primeira Liga",
        "number": 19,
    }, {
        "image": "assets/img/alexis-macallister.jpg",
        "name": "Alexis Mac Aliister",
        "position": "Mediocampista",
        "team": "Brighton",
        "league": "Premier League",
        "number": 20,
    }, {
        "image": "assets/img/paulo-dybala.jpg",
        "name": "Paulo Dybala",
        "position": "Delantero",
        "team": "AS Roma",
        "league": "Serie A",
        "number": 21,
    }, {
        "image": "assets/img/lautaro-martinez.jpg",
        "name": "Lautaro Martinez",
        "position": "Delantero",
        "team": "Inter Milan",
        "league": "Serie A",
        "number": 22,
    }, {
        "image": "assets/img/enzo-fernandez.jpg",
        "name": "Enzo Fernandez",
        "position": "Mediocampista",
        "team": "Benfica",
        "league": "Primeira Liga",
        "number": 24,
    }, {
        "image": "assets/img/lisandro-martinez.jpg",
        "name": "Lisandro Martinez",
        "position": "Defensor",
        "team": "Manchester United",
        "league": "Premier League",
        "number": 25,
    }, {
        "image": "assets/img/nahuel-molina.jpg",
        "name": "Nahuel Molina",
        "position": "Defensor",
        "team": "Atletico Madrid",
        "league": "LaLiga",
        "number": 26,
    }];
    constructor(private once: OnceInicialService) {}

    ngOnInit(): void {
    }
    addToTeam(player: Player): void {
        this.once.addToEleven(player);
    }

}