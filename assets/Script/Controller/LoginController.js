cc.Class({
    extends: cc.Component,

    properties: {
        loadingBar: {
            type: cc.ProgressBar,
            default: null
        },
        loginButton: {
            type: cc.Button,
            default: null
        },
        worldSceneBGM: {
            type: cc.AudioClip,
            default: null
        }
    },

    onLoad () {
        // 播放音频
        this.gameSceneBGMAudioId = cc.audioEngine.play(this.worldSceneBGM, true, 1)
        this.loadtext = (this.loadingBar.node.getChildByName('loadtext')).getComponent(cc.Label)
    },

    onLogin () {
        this.loginButton.node.active = false // 隐藏登录按钮
        this.loadingBar.node.active = true // 显示进度条
        this.loadingBar.progress = 0 // 进度条初始值为0
        this.loadtext.string = ''
        cc.director.preloadScene('Game', (completedCount, totalCount, item) => {
            // console.log(completedCount, totalCount)
            this.loadingBar.progress = completedCount / totalCount
            this.loadtext.string = `${completedCount / totalCount * 100}%`
            // 3秒后跳转到游戏界面
            setTimeout(() => {
                cc.director.loadScene("Game")
                this.loadingBar.node.active = false
                this.loginButton.node.active = true
                this.loadtext.string = ''
            }, 2000)
        }, (err, asset) => {
            console.log('preload Game done')
        })
    },

    start () {

    },

    // update (dt) {},

    onDestroy() {
        // 停止播放音频
        cc.audioEngine.stop(this.gameSceneBGMAudioId)
    }
});
