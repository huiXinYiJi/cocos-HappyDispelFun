// Grid(cc.Node)挂载的js
import { ANI_WIDTH, ANI_HEIGHT } from '../Model/ConstValue'
import GameModel from '../Model/GameModel'

cc.Class({
    extends: cc.Component,

    properties: {
        aniPrefab: {
            default: [],
            type: [cc.Prefab],
            tooltip: '场景中物品预制资源集合'
        }
    },
    
    ctor() {
        this.cellViews = []
        this.gameModel = new GameModel()
        this.maps = []
    },

    onLoad () {
        this.width = this.node.width // 显示地图宽
        this.height = this.node.height // 显示地图高
        this.maps = this.gameModel.productMap(this.width, this.height) // 生成地图
    },

    start () {
        this.initPrefab(this.maps) // 生成物品
    },
    // 生成物品预制体
    initPrefab(maps) {
        const rowLength = maps.length
        const columnLength = maps[0].length
        for(var i = 0; i < columnLength; i++){
            const rows = maps[i]
            for(var j = 0; j < rowLength; j++){
                var type = rows[j]
                var aniView = cc.instantiate(this.aniPrefab[type])
                aniView.parent = this.node
                // 从地图左上角开始生成物品
                aniView.setPosition(this.getPosition(i, j))
            }
        }
    },
    getPosition(i, j) {
        var x = (ANI_WIDTH / 2) * (j * 2 + 1)
        var y = this.height - (i * 2 + 1) * (ANI_HEIGHT / 2)
        return cc.v2(x, y)
    }
    // update (dt) {},
});
