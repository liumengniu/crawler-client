/**
 * @author Kevin
 * @Date: 2024-6-7
 */
/**
 * description： 嵌入web（包括内部网页和第三方外部网页）的browserView 和 主进程/网页视图 交互事件
 * @author Kevin
 * @date 2022/6/13
 */

const { contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld("mainProcess", {
	saveDisk: (params) => {
		console.log("browserView传递给主进程通信事件", params)
		return ipcRenderer.invoke("saveDisk", params)
	},
})
