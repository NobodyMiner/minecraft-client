"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CurseForgeMod {
    constructor(name, projectId, fileId, sha1) {
        this.name = name;
        this.sha1 = sha1;
        this.file = `${projectId}`;
        this.type = "CurseForge";
        this.url = `https://minecraft.curseforge.com/projects/${projectId}/files/${fileId}/download`;
    }
}
exports.CurseForgeMod = CurseForgeMod;
class CustomForgeMod {
    constructor(name, filename, url, sha1) {
        this.name = name;
        this.sha1 = sha1;
        this.file = filename;
        this.type = "Direct";
        this.url = url;
    }
}
exports.CustomForgeMod = CustomForgeMod;
//# sourceMappingURL=Mods.js.map