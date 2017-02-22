import * as services from "../services";

export const map: services.MapData = {
    w: 28,
    h: 13,
    floor: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    pilla: [{
        x: 23.5,
        y1: 1,
        y2: 5,
    }, {
        x: 6.5,
        y1: 4,
        y2: 7,
    }, {
        x: 16.5,
        y1: 6,
        y2: 9,
    }, {
        x: 6.5,
        y1: 8,
        y2: 11,
    }],
    borns: [{
        x: 5,
        y: 1,
    }],
    npcs: [{
        x: 13,
        y: 1,
        name: "坏人甲",
        carry: 1,
        carryCount: 9999999,
    }, {
        x: 15,
        y: 1,
        name: "坏人乙",
        carry: 1,
        carryCount: 9999999,
    }, {
        x: 7,
        y: 4,
        name: "坏人丙",
        carry: 1,
        carryCount: 9999999,
        AI: "walking",
    }, {
        x: 7,
        y: 8,
        name: "坏人丁",
        carry: 2,
        carryCount: 9999999,
        AI: "walking",
    }, {
        x: 9,
        y: 10,
        name: "龙套A",
    }, {
        x: 14,
        y: 10,
        name: "龙套B",
    }, {
        x: 25,
        y: 10,
        name: "龙套C",
    }, {
        x: 23,
        y: 10,
        name: "龙套D",
    }, {
        x: 21,
        y: 10,
        name: "龙套E",
    }],
    structs: [{
        type: "sign",
        x: 5,
        y: 1,
        message: "使用各种物品可以帮你更有效的消灭敌人",
    }, {
        type: "sign",
        x: 7,
        y: 1,
        message: "手枪是一种强力的远程武器，可以用于消灭你正前方的敌人",
    }, {
        type: "sign",
        x: 9,
        y: 1,
        message: "拿到手枪后，按q使用开火，注意只有三发子弹",
    }, {
        type: "itemGate",
        x: 8,
        y: 1,
        itemType: 1,
    }, {
        type: "itemGate",
        x: 19,
        y: 4,
        itemType: 2,
    }, {
        type: "sign",
        x: 21,
        y: 4,
        message: "地雷可以被埋在地上，碰到他的人会被炸飞",
    }, {
        type: "sign",
        x: 20,
        y: 4,
        message: "你只能看到自己埋的地雷",
    }, {
        type: "sign",
        x: 17,
        y: 4,
        message: "按q可以在面前埋雷，注意自己不要踩到地雷",
    }, {
        type: "itemGate",
        x: 10,
        y: 6,
        itemType: 3,
    }, {
        type: "sign",
        x: 8,
        y: 6,
        message: "碰到毒药的人会死亡，离他们远一些",
    }, {
        type: "sign",
        x: 15,
        y: 6,
        message: "隐身将会使你的敌人无法看到你",
    }, {
        type: "itemGate",
        x: 17,
        y: 6,
        itemType: 4,
    }, {
        type: "itemGate",
        x: 4,
        y: 10,
        itemType: 0,
    }, {
        type: "sign",
        x: 7,
        y: 10,
        message: "无敌是一件强大的武器，其他弱者们碰到你会被弹飞",
    }, {
        type: "sign",
        x: 11,
        y: 10,
        message: "目标：消灭其他所有人",
    },
    ],
    hooks: {
        onKilled: (game: services.Game, u: services.User) => {
            for (const user of game.users) {
                if (user.npc === true && !user.dieing && !user.dead) {
                    return;
                }
            }
            game.win({ id: 0 });
        },
    },
};
