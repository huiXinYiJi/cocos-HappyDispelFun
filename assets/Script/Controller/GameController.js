// import GameModel from '../Model/GameModel'

cc.Class({
    extends: cc.Component,

    properties: {
        grid: {
            default: null,
            type: cc.Node,
            tooltip: '放置所有物品的box'
        }
    },

    ctor() {
        // this.gameModel = new GameModel()
    },

    onLoad () {
        // this.gridScript = this.grid.getComponent("GridView")
        // this.width = this.grid.width // 显示物品地图宽
        // this.height = this.grid.height // 显示物品地图高
        // const maps = this.gameModel.productMap(this.width, this.height) // 生成地图
        // this.gridScript.initPrefab(maps) // 生成物品
    },

    start () {
        
    },

    // update (dt) {},
});
