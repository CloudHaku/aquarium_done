player.onChat("BC", function () {
    結構中心 = player.position()
    結構起點 = player.position()
    結構走向 = positions.toCompassDirection(player.getOrientation())
    for (let H = 0; H <= 高度; H++) {
        Face2Dir_center(positions.add(
        結構中心,
        pos(0, H, 0)
        ), 結構走向)
        player.say(H)
        for (let index = 0; index <= 9; index++) {
            blocks.place(方塊[index], 角隅[index])
        }
    }
})
function Fillfish2 () {
    半深 += -1
    半寬 += -1
    player.say("安置發射器")
    Face2Dir_center(positions.add(
    結構中心,
    pos(0, 高度 * 1 + 1, 0)
    ), 結構走向)
    blocks.fill(
    HOPPER_ITEM,
    角隅[1],
    角隅[7],
    FillOperation.Replace
    )
    blocks.fill(
    HOPPER_ITEM,
    角隅[7],
    角隅[9],
    FillOperation.Replace
    )
    blocks.fill(
    HOPPER_ITEM,
    角隅[9],
    角隅[3],
    FillOperation.Replace
    )
    blocks.fill(
    HOPPER_ITEM,
    角隅[3],
    角隅[1],
    FillOperation.Replace
    )
    if (true) {
        Face2Dir_center(positions.add(
        結構中心,
        pos(0, 高度 * 1 - 1, 0)
        ), 結構走向)
        agent.teleport(角隅[1], 結構走向)
        agent.setItem(DISPENSER, 64, 1)
        for (let index = 0; index < 半深 * 2; index++) {
            agent.destroy(UP)
            agent.place(UP)
            agent.move(FORWARD, 1)
        }
        for (let index = 0; index < 半寬 * 2; index++) {
            agent.destroy(UP)
            agent.place(UP)
            agent.move(RIGHT, 1)
        }
        for (let index = 0; index < 半深 * 2; index++) {
            agent.destroy(UP)
            agent.place(UP)
            agent.move(BACK, 1)
        }
        for (let index = 0; index < 半寬 * 2; index++) {
            agent.destroy(UP)
            agent.place(UP)
            agent.move(LEFT, 1)
        }
    }
    if (true) {
        Face2Dir_center(positions.add(
        結構中心,
        pos(0, 高度 * 1 + 2, 0)
        ), 結構走向)
        agent.teleport(角隅[1], 結構走向)
        for (let index = 0; index < 半深 * 2; index++) {
            agent.setItem(SPAWN_TROPICAL_FISH, 64, 2)
            agent.drop(DOWN, 2, 64)
            agent.move(FORWARD, 1)
        }
        for (let index = 0; index < 半寬 * 2; index++) {
            agent.setItem(SPAWN_TROPICAL_FISH, 64, 2)
            agent.drop(DOWN, 2, 64)
            agent.move(RIGHT, 1)
        }
        for (let index = 0; index < 半深 * 2; index++) {
            agent.setItem(SPAWN_TROPICAL_FISH, 64, 2)
            agent.drop(DOWN, 2, 64)
            agent.move(BACK, 1)
        }
        for (let index = 0; index < 半寬 * 2; index++) {
            agent.setItem(SPAWN_TROPICAL_FISH, 64, 2)
            agent.drop(DOWN, 2, 64)
            agent.move(LEFT, 1)
        }
    }
    半寬 += 1
    半深 += 1
}
function BuOutter () {
    H = positions.add(
    結構中心,
    pos(0, 高度 * -1, 0)
    )
    for (let index = 0; index < 高度 * 2 - 1; index++) {
        H = positions.add(
        H,
        pos(0, 1, 0)
        )
        Face2Dir_center(H, 結構走向)
        builder.teleportTo(角隅[1])
        builder.mark()
        builder.teleportTo(角隅[7])
        builder.fill(方塊[1])
        builder.teleportTo(角隅[7])
        builder.mark()
        builder.teleportTo(角隅[9])
        builder.fill(方塊[1])
        builder.teleportTo(角隅[9])
        builder.mark()
        builder.teleportTo(角隅[3])
        builder.fill(方塊[1])
        builder.teleportTo(角隅[3])
        builder.mark()
        builder.teleportTo(角隅[1])
        builder.fill(方塊[1])
    }
}
function Face2Dir_center (中心: Position, 方向: number) {
    角隅[0] = pos(0 * 1, 0, 0 * 1)
    角隅[1] = pos(半寬 * 1, 0, 半深 * -1)
    角隅[2] = pos(0 * 1, 0, 半深 * -1)
    角隅[3] = pos(半寬 * -1, 0, 半深 * -1)
    角隅[4] = pos(半寬 * 1, 0, 0 * 1)
    角隅[5] = pos(0 * 1, 0, 0 * 1)
    角隅[6] = pos(半寬 * -1, 0, 0 * 1)
    角隅[7] = pos(半寬 * 1, 0, 半深 * 1)
    角隅[8] = pos(0 * 1, 0, 半深 * 1)
    角隅[9] = pos(半寬 * -1, 0, 半深 * 1)
    if (方向 == 4) {
        Rotating = 1
    } else {
        Rotating = (方向 + 2) % 4
    }
    for (let index = 0; index < Rotating; index++) {
        for (let index = 0; index <= 9; index++) {
            TempX = 角隅[index].getValue(Axis.X)
            TempZ = 角隅[index].getValue(Axis.Z)
            角隅[index] = pos(TempZ * -1, 0, TempX)
        }
    }
    for (let index = 0; index <= 9; index++) {
        TempX = 角隅[index].getValue(Axis.X)
        TempZ = 角隅[index].getValue(Axis.Z)
        角隅[index] = positions.add(
        中心,
        pos(TempX, 0, TempZ)
        )
    }
}
player.onChat("Bu", function () {
    結構中心 = player.position()
    結構起點 = player.position()
    結構走向 = positions.toCompassDirection(player.getOrientation())
    player.teleport(posLocal(0, 高度, 半深 * -1))
    player.say("水族館開始建造")
    player.say("首先要整理基地")
    BuClr()
    player.say("建造樓板")
    BuFloor()
    player.say("建造外牆")
    BuOutter()
    player.say("加水，沙，水草")
    FillWater()
    player.say("再來弄個通道")
    BuInner()
    player.say("整理一下天台")
    BuGate()
    player.say("來放些魚吧！")
    Fillfish()
    Fillfish2()
})
function Face2Dir_front (中心: Position, 方向: number) {
    角隅[0] = pos(0 * 1, 0, 0 * 1)
    角隅[1] = pos(半寬 * 1, 0, 0 * 1)
    角隅[2] = pos(0 * 1, 0, 0 * -1)
    角隅[3] = pos(半寬 * -1, 0, 0 * -1)
    角隅[4] = pos(半寬 * 1, 0, 半深 * 1)
    角隅[5] = pos(0 * 1, 0, 半深 * 1)
    角隅[6] = pos(半寬 * -1, 0, 半深 * 1)
    角隅[7] = pos(半寬 * 1, 0, 半深 * 2)
    角隅[8] = pos(0 * 1, 0, 半深 * 2)
    角隅[9] = pos(半寬 * -1, 0, 半深 * 2)
    if (方向 == 4) {
        Rotating = 1
    } else {
        Rotating = (方向 + 2) % 4
    }
    for (let index = 0; index < Rotating; index++) {
        for (let index = 0; index <= 9; index++) {
            TempX = 角隅[index].getValue(Axis.X)
            TempZ = 角隅[index].getValue(Axis.Z)
            角隅[index] = pos(TempZ * -1, 0, TempX)
        }
    }
    for (let index = 0; index <= 9; index++) {
        TempX = 角隅[index].getValue(Axis.X)
        TempZ = 角隅[index].getValue(Axis.Z)
        角隅[index] = positions.add(
        中心,
        pos(TempX, 0, TempZ)
        )
    }
}
function BuFloor () {
    H = positions.add(
    結構中心,
    pos(0, 高度 * -1, 0)
    )
    Face2Dir_center(H, 結構走向)
    builder.teleportTo(角隅[1])
    builder.mark()
    builder.teleportTo(角隅[9])
    builder.fill(方塊[2])
    H = positions.add(
    結構中心,
    pos(0, 高度 * 1, 0)
    )
    Face2Dir_center(H, 結構走向)
    builder.teleportTo(角隅[1])
    builder.mark()
    builder.teleportTo(角隅[9])
    builder.fill(方塊[3])
}
function BuInner () {
    TempW = 半寬
    半寬 = 通道
    player.say("填滿通道")
    H = positions.add(
    結構中心,
    pos(0, 通道 * 1, 0)
    )
    Face2Dir_center(H, 結構走向)
    builder.teleportTo(角隅[1])
    builder.mark()
    H = positions.add(
    結構中心,
    pos(0, 通道 * -1, 0)
    )
    Face2Dir_center(H, 結構走向)
    builder.teleportTo(角隅[9])
    builder.fill(方塊[1])
    player.say("挖空通道")
    半寬 += -1
    通道 += -1
    H = positions.add(
    結構中心,
    pos(0, 通道 * 1, 0)
    )
    Face2Dir_center(H, 結構走向)
    builder.teleportTo(角隅[1])
    builder.mark()
    H = positions.add(
    結構中心,
    pos(0, 通道 * -1, 0)
    )
    Face2Dir_center(H, 結構走向)
    builder.teleportTo(角隅[9])
    builder.fill(方塊[0])
    通道 += 1
    半寬 = TempW
}
player.onChat("BF", function () {
    結構中心 = player.position()
    結構起點 = player.position()
    結構走向 = positions.toCompassDirection(player.getOrientation())
    for (let H = 0; H <= 高度; H++) {
        Face2Dir_front(positions.add(
        結構中心,
        pos(0, H, 0)
        ), 結構走向)
        player.say(H)
        for (let index = 0; index <= 9; index++) {
            blocks.place(方塊[index], 角隅[index])
        }
    }
})
function BuGate () {
    player.say("做欄杆好了")
    H = positions.add(
    結構中心,
    pos(0, 高度 * 1 + 1, 0)
    )
    Face2Dir_center(H, 結構走向)
    builder.teleportTo(角隅[1])
    builder.mark()
    builder.teleportTo(角隅[7])
    builder.raiseWall(方塊[4], 3)
    loops.pause(30)
    builder.teleportTo(角隅[7])
    builder.mark()
    builder.teleportTo(角隅[9])
    builder.raiseWall(方塊[4], 3)
    loops.pause(30)
    builder.teleportTo(角隅[9])
    builder.mark()
    builder.teleportTo(角隅[3])
    builder.raiseWall(方塊[4], 3)
    loops.pause(30)
    builder.teleportTo(角隅[3])
    builder.mark()
    builder.teleportTo(角隅[1])
    builder.raiseWall(方塊[4], 3)
    player.say("挖洞方便餵魚")
    H = positions.add(
    結構中心,
    pos(0, 高度 * 1, 0)
    )
    半深 += -2
    TempW = 半寬
    半寬 = 通道
    Face2Dir_center(H, 結構走向)
    builder.teleportTo(角隅[1])
    builder.mark()
    builder.teleportTo(角隅[9])
    builder.fill(方塊[0])
    半寬 = TempW
    半深 += 2
}
function FillWater () {
    半深 += -1
    半寬 += -1
    H = positions.add(
    結構中心,
    pos(0, 高度 * -1, 0)
    )
    for (let index = 0; index < 高度 * 2 - 2; index++) {
        H = positions.add(
        H,
        pos(0, 1, 0)
        )
        Face2Dir_center(H, 結構走向)
        builder.teleportTo(角隅[1])
        builder.mark()
        builder.teleportTo(角隅[9])
        builder.fill(方塊[7])
    }
    player.say("放一些沙子")
    Face2Dir_center(positions.add(
    結構中心,
    pos(0, 高度 * -1 + 1, 0)
    ), 結構走向)
    builder.teleportTo(角隅[1])
    builder.mark()
    builder.teleportTo(角隅[9])
    builder.fill(方塊[8])
    player.say("放一些水草")
    Face2Dir_center(positions.add(
    結構中心,
    pos(0, 高度 * -1 + 3, 0)
    ), 結構走向)
    for (let index = 0; index <= 20; index++) {
        agent.setItem(方塊[5], 1, 1)
        agent.teleport(randpos(
        角隅[1],
        角隅[9]
        ), WEST)
        agent.place(DOWN)
    }
    for (let index = 0; index <= 20; index++) {
        agent.setItem(方塊[6], 1, 1)
        agent.teleport(randpos(
        角隅[1],
        角隅[9]
        ), WEST)
        agent.place(DOWN)
    }
    半深 += 1
    半寬 += 1
}
function Fillfish () {
    半深 += -1
    半寬 += -1
    player.say("放一些魚")
    Face2Dir_center(positions.add(
    結構中心,
    pos(0, 高度 * -1 + 3, 0)
    ), 結構走向)
    for (let index = 0; index <= 50; index++) {
        Egg = 蛋蛋._pickRandom()
        agent.setItem(Egg, 1, 1)
        agent.teleport(randpos(
        角隅[1],
        角隅[9]
        ), WEST)
        agent.place(DOWN)
        player.say("第" + index + "魚是" + blocks.nameOfBlock(Egg))
    }
    半深 += 1
    半寬 += 1
}
player.onChat("Way", function () {
    結構中心 = player.position()
    結構走向 = positions.toCompassDirection(player.getOrientation())
    BuFloor()
    Fillfish2()
})
function BuClr () {
    H = positions.add(
    結構中心,
    pos(0, 高度 * 1, 0)
    )
    Face2Dir_center(H, 結構走向)
    builder.teleportTo(角隅[1])
    builder.mark()
    H = positions.add(
    結構中心,
    pos(0, 高度 * -1, 0)
    )
    Face2Dir_center(H, 結構走向)
    builder.teleportTo(角隅[9])
    builder.fill(方塊[0])
}
let Egg = 0
let TempW = 0
let TempZ = 0
let TempX = 0
let Rotating = 0
let H: Position = null
let 結構走向: CompassDirection = null
let 結構起點: Position = null
let 結構中心: Position = null
let 蛋蛋: number[] = []
let 方塊: number[] = []
let 通道 = 0
let 角隅: Position[] = []
let 半深 = 0
let 半寬 = 0
let 高度 = 0
高度 = 6
半寬 = 8
半深 = 18
角隅 = []
通道 = 2
方塊 = [
AIR,
GLASS,
COBBLESTONE,
SEA_LANTERN,
CHERRY_FENCE,
SEAGRASS,
KELP,
WATER,
SAND,
AMETHYST_CLUSTER
]
蛋蛋 = [
SPAWN_TROPICAL_FISH,
SPAWN_SEA_TURTLE,
SPAWN_RAVAGER,
SPAWN_BREEZE,
SPAWN_PUFFERFISH,
BUCKET_OF_AXOLOTL,
SPAWN_AXOLOTL,
SPAWN_TROPICAL_FISH
]
