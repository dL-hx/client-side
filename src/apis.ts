import axios , {AxiosResponse} from 'axios'
const baseUrl:string = 'http://localhost:8000'

/**
 * 
 * 提供了任务管理后端API的功能, 使用Axios调用前面编写的任务管理后端API
 * getTaskList()  调用API: 'http://localhost:8000/tasks' GET 获取全部任务列表
 * getTaskList()  调用API: 'http://localhost:8000/task' POST 创建新的任务
 * deleteTask()  调用API: 'http://localhost:8000/task/:id' DELETE 删除指定id的任务 
 * setTaskDone()  调用API: 'http://localhost:8000/task/:id' PUT 设置指定id的任务为完成状态
 * 
 */

// 声明返回值的泛型定义
export const getTaskList =async ():Promise<AxiosResponse<Task[]>> => {
    const tasks:AxiosResponse<Task[]> = await axios.get(
        baseUrl + '/tasks'
    )
    return tasks;
}

export const addTask =async (task:Task):Promise<AxiosResponse<Task>> => {
    const newTask:AxiosResponse<Task> = await axios.post(
        baseUrl + '/task',
        task
    )
    return newTask;
}

export const deleteTask =async (taskId:number):Promise<AxiosResponse<boolean>> => {
    const res:AxiosResponse<boolean> = await axios.delete(
        baseUrl + '/task/' + taskId
    )
    return res;
}

export const setTaskDone =async (taskId:number):Promise<AxiosResponse<boolean>> => {
    const res:AxiosResponse<boolean> = await axios.put(
        baseUrl + '/task/' + taskId
    )
    return res;
}