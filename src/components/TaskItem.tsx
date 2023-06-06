import React , {FC, useState} from 'react'

type Props = {
    task: Task,
    deleteTask:(id:number) => void
    setTaskDone:(id:number) => void
}
/**
 * 声明函数式UI组件TaskItem, 
 * 允许传入Props.task ,接收当前任务数据
 * 允许传入Props.deleteTask, 来接收删除任务的处理函数
 * 允许传入Props.setTaskDone, 来接收设置任务为完成状态的处理函数
 * 
 * 根据任务完成状态(task.isDone)来决定是否显示"完成"按钮
 * 以及(是否在任务名称和描述上增加下划线)
 * 当 task.isDone === true . 在任务名称和描述上增加下划线,并改为完成状态
 */
const TaskItem:FC<Props> = ({task, deleteTask, setTaskDone})=>{
    return (
        <div className='Item'>
            <div className="Item--text">
                <h1 className={task.isDone?'done-task':''}>{task.name}</h1>
                <span className={task.isDone?'done-task':''}>{task.description}</span>
            </div>
            <div className="Item--button">
                <button
                    onClick={()=>setTaskDone(task.id)}
                    className={task.isDone?`hide-button`: 'Item--button__done'}
                >
                    完成
                </button>
                <button
                    onClick={()=>{deleteTask(task.id)}}
                    className='Item--button__delete'
                >
                    删除
                </button>
            </div>
        </div>
    )
}

export default TaskItem;