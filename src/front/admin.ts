import { connect, emit } from "./socket";

const code = localStorage.getItem("code");

connect(undefined, () => {
    emit({ name: "init", data: { code: code! } });
}, protocol => {
    if (protocol.name === "initFail") {
        alert("fail");
    } else if (protocol.name === "adminTick") {
        let html = '<div class="clients">';
        if (protocol.data.clients) {
            protocol.data.clients.forEach(client => {
                let p1: any = null;
                protocol.data.users.forEach(user => {
                    if (client.p1 === user.id) {
                        p1 = user;
                        return;
                    }
                });
                let playerData: string;
                if (p1) {
                    playerData = `<div class="player">
					${p1.status},${p1.score}<br/>
					${p1.carry || "空"} : ${p1.carryCount}
				</div>`;
                } else if (client.admin) {
                    playerData = '<div class="player">admin</div>';
                } else {
                    playerData = '<div class="player">ob</div>';
                }
                let banBtn: string;
                if (client.banned) {
                    banBtn = '<a data-clientid="' + client.id + '" class="btn ban banned">取消ban</a>';
                } else {
                    banBtn = '<a data-clientid="' + client.id + '" class="btn ban">ban</a>';
                }
                html += `<div class="user">
				<div class="client">
					名称: ${client.name}<br>
					IP: ${client.ip}<br>
					KDH: ${client.kill},${client.death},${client.highestKill}
				</div>
				${playerData}
				<div class="action">${banBtn}</div>
			</div>`;
            });
        }
        $(".users").html(html);
    }
});

$(".users").on("click", ".btn.ban", (e) => {
    const $t = $(e.currentTarget);
    const clientid = $t.data("clientid");
    if ($t.is(".banned")) {
        emit({ name: "unban", data: clientid });
        $t.removeClass("banned");
    } else {
        emit({ name: "ban", data: clientid });
        $t.addClass("banned");
    }
});
$(".items .btn").click((e) => {
    const type = $(e.currentTarget).data("type");
    emit({ name: "createItem", data: type });
});

$.ajax({
    url: "/roomsData",
    success(t) {
        const count = JSON.parse(t).length;
        if (count < 2) { return; }
        $(".rooms").append('<span class="active">1</span>');
        for (let i = 1; i < count; i++) {
            $(".rooms").append("<span>" + (i + 1) + "</span>");
        }
    },
});
