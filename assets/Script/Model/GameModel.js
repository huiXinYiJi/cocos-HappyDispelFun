// 游戏逻辑
import { ANI_TYPE_NUM, ANI_WIDTH, ANI_HEIGHT } from './ConstValue'

export default class GameModel {
    constructor() {
        this.map = null
        this.ANI_NUM_W = null // 横向物品数量
        this.ANI_NUM_H = null // 纵向物品数量
    }
    init() {
    }
    // 根据地图宽高设置行列显示数量
    setAniNum(mapWidth, mapHeight) {
        this.ANI_NUM_W = parseInt(mapWidth / ANI_WIDTH)
        this.ANI_NUM_H = parseInt(mapHeight / ANI_HEIGHT)
    }
    // 生成地图9*9
    productMap(mapWidth, mapHeight) {
        this.setAniNum(mapWidth, mapHeight)
        const randomMap = []
        for (var x = 0; x < this.ANI_NUM_W; x++) { // x方向
            for (var y = 0; y < this.ANI_NUM_H; y++) { // y方向
                if (!randomMap[x]) {
                    randomMap[x] = []
                }
                // 生成0-6的值 物品类型
                var type = parseInt(Math.random() * ANI_TYPE_NUM)
                // console.log(randomMap[x], this.getColumnArray(randomMap, y))
                // 是否在x方向有连续3个或以上相同的值 若有相同三个则重新生成
                if (!this.judgeSameColor(randomMap[x], type)) {
                    type = this.createDiffType(type)
                }
                // 是否在y方向有连续3个或以上相同的值 若有相同三个则重新生成
                if (!this.judgeSameColor(this.getColumnArray(randomMap, y), type)) {
                    type = this.createDiffType(type)
                }
                randomMap[x].push(type)
            }
        }
        console.log(randomMap)
        return randomMap
    }
    // 判断是否有连续两个同色
    judgeSameColor(arr, value) {
        var isPass = true
        arr.map((item, index) => {
            if(arr[index - 1] !== undefined && item === value && arr[index - 1] === value){
                isPass = false
            }
        })
        return isPass
    }
    // 获取地图中某一列的数据
    getColumnArray(arr, index) {
        return arr.map(item => item[index])
    }
    // 生成 不同于type的值
    createDiffType(type) {
        var diffType = parseInt(Math.random() * ANI_TYPE_NUM)
        while (diffType === type) {
            diffType = parseInt(Math.random() * 5 + 1)
        }
        return diffType
    }
}