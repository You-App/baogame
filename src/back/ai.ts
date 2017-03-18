import * as services from "./services";
import * as common from "./common";
import * as core from "./core";

function userCanGoLeft(user: services.user.User) {
    const x = Math.floor((user.x - 5) / common.tileWidth);
    const y = Math.floor(user.y / common.tileHeight);
    return core.map.floor[y][x];
}
function userCanGoRight(user: services.user.User) {
    const x = Math.floor((user.x + 5) / common.tileWidth);
    const y = Math.floor(user.y / common.tileHeight);
    return core.map.floor[y][x];
}
export function play(user: services.user.User) {
    if (user.status === "standing") {
        if (user.carry === common.ItemType.power) {
            if (user.goleft || !user.goright) {
                user.goleft = true;
                if (userCanGoLeft(user)) {
                    user.control.leftDown = 200;
                } else {
                    user.goleft = false;
                    user.goright = true;
                    user.control.leftDown = 0;
                }
            }
            if (user.goright) {
                if (userCanGoRight(user)) {
                    user.control.rightDown = 200;
                } else {
                    user.goleft = true;
                    user.goright = false;
                    user.control.rightDown = 0;
                }
            }
        } else if (user.carry === common.ItemType.gun) {
            let find = false;
            for (const other of core.users) {
                if (user === other || other.dieing) { continue; }
                if (Math.abs(other.y - user.y) < 10 && other.carry !== common.ItemType.hide) {
                    if (user.facing && other.x < user.x || !user.facing && other.x > user.x) {
                        find = true;
                        break;
                    }
                }
            }
            user.control.itemPress = find;
        }
    }
}
export function create(name: string) {
    const u = services.user.create(name);
    u.npc = true;
    return u;
}
