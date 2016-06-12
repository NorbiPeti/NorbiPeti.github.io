function convert() { //Find: ".+ (.+)" - Replace: "$1"
    var replacecmds = ["achievement", "ban", "ban", "ban-ip", "banlist", "blockdata", "clear", "clone", "debug", "defaultgamemode", "deop", "difficulty", "effect", "enchant", "entitydata", "execute", "fill", "gamemode", "gamerule", "give", "help", "kick", "kill", "list", "me", "op", "pardon", "particle", "playsound", "publish", "replaceitem", "save", "save-all", "save-off", "save-on", "say", "scoreboard", "seed", "setblock", "setidletimeout", "setworldspawn", "spawnpoint", "spreadplayers", "stats", "stop", "stopsound", "summon", "teleport", "tell", "tellraw", "testfor", "testforblock", "testforblocks", "time", "title", "toggledownfall", "tp", "trigger", "weather", "whitelist", "worldborder", "xp", "commands", "banip", "broadcast", "home", "setspawn", "solid", "unban"];
    var result = document.getElementById("result");
    var command = document.getElementById("command");
    result.value = command.value;
    for (var i = 0, len = replacecmds.length; i < len; i++) {
        result.value = result.value.replace(new RegExp("\\/" + replacecmds[i], "g"), "/minecraft:" + replacecmds[i]).replace(new RegExp("Command\\:" + replacecmds[i], "g"), "Command:minecraft:" + replacecmds[i]);
    }
}
