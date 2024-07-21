// 定义全局常量baseUrl用来存储前缀
// const baseURL = 'http://mobile.ximalaya.com/mobile/discovery/v3/recommend/hotAndGuess?code=43_310000_3100&device=android&version=5.4.45';
const baseUrl = 'http://yczxx.cpolar.cn/cailun/app';

/**
 * 使用Promise对wx.request api进行封装
 * @param {*} params 
 */
function request(params = { method, url, data }) {
	return new Promise(function (resolve, reject) {
		wx.request({
			url: 'http://yczxx.cpolar.cn/cailun/app' + params.url,
			method: params.method,
			data: params.data ? JSON.stringify(params.data) : null,
			header: { 'content-type': 'application/json' },
			success(res) {
        console.log("res",res)
				// 判断状态码 根据后端定义来判断
				const { code } = res.data
				if (code !== '-1') {  // 请求成功
					resolve(res);
				} else {
					reject('运行时错误,请稍后再试'); // 其他异常
				}
			},
			fail(err) {
				// 请求失败
				reject(err)
			}
		})
	})
}

// 向外暴露接口
module.exports = {
	request: request
}