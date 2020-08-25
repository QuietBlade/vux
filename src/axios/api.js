import instance  from './index.js';
import store from 'vuex'

export default{
    
    wx :{
        appid : 'wxf632d332f92c760c',
        appsecret : 'c3bf70dfef12c94df2e4752b9811585f',
        redirect : 'http://wx.yuanzhangzcc.com/',
        scope : 'snsapi_userinfo'
    },

    urlToObj(url){
        url = url.replace('?','')
        let string = url.split('&')
        let res = {}
        for(let i = 0;i<string.length;i++){
            let str = string[i].split('=')
            if(str[0]!=''){
                res[str[0]]=str[1]
            }
        }
        return res
    },

    getAccessToken(code){
        let _AccessTokenStr = '123'
        return _AccessTokenStr
    },

    getAccountCode(state){
        let wx = this.wx
        var state = '123'
        var oauth2 = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+wx.appid+'&redirect_uri='+wx.redirect+'&response_type=code&scope='+wx.scope+'&state='+state+'#wechat_redirect'
        window.location.href = oauth2
    },

    getAccountOpenid(_code){
        let wx = this.wx
        // var url = 'https://api.weixin.qq.com/sns/oauth2/access_token'
        // 反代理访问
        var url = '/wx/sns/oauth2/access_token'
        return instance.get(url,{params: {
            appid : wx.appid,
            secret : wx.appsecret,
            code : _code ,
            grant_type : 'authorization_code'
        }})
    },

    bindAccount(data){
        return instance.get('/api/bindAccount.json',{params: data});
    }
    
}