"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Band = void 0;
class Band {
    constructor(id, name, musicGenre, responsible) {
        this.id = id;
        this.name = name;
        this.musicGenre = musicGenre;
        this.responsible = responsible;
        this.getId = () => {
            return this.id;
        };
        this.getName = () => {
            return this.name;
        };
        this.getMusicGenre = () => {
            return this.musicGenre;
        };
        this.getResponsible = () => {
            return this.responsible;
        };
    }
    static toBandModel(band) {
        return new Band(band.id, band.name, band.music_genre, band.responsible);
    }
}
exports.Band = Band;
//# sourceMappingURL=Band.js.map