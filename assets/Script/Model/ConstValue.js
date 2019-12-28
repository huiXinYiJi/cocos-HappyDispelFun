// 物品/游戏参数
const ANI_TYPE_NUM = 7 // 物品种类
// const ANI_NUM_W = 9 // 横向物品数量
// const ANI_NUM_H = 9 // 纵向物品数量
const ANI_WIDTH = 70 // 物品宽
const ANI_HEIGHT = 70 // 物品高

// 物品种类数组 [0, 1, 2, 3, 4, 5, 6]
const ANI_TYPE_ARR = []
for (var i = 0; i < ANI_TYPE_NUM; i ++) {
    ANI_TYPE_ARR.push(i)
}

export default {
    ANI_TYPE_NUM,
    ANI_TYPE_ARR,
    // ANI_NUM_W,
    // ANI_NUM_H,
    ANI_WIDTH,
    ANI_HEIGHT
}
