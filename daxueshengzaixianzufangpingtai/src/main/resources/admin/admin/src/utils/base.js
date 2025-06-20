const base = {
    get() {
        return {
            url : "http://localhost:8080/daxueshengzaixianzufangpingtai/",
            name: "daxueshengzaixianzufangpingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/daxueshengzaixianzufangpingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大学生在线租房平台"
        } 
    }
}
export default base
