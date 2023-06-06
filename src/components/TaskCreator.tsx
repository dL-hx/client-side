import React , {FC, useState} from 'react'

type Props = {
  addTask:(e:React.FormEvent, formData:Task | any) => void
}
/**
 * 声明函数式UI组件TaskCreator, 
 * 允许传入Props.addTask ,接收添加任务处理函数
 */
const TaskCreator:FC<Props> = ({addTask})=>{
    const [formData, setFormData] = useState<Task|{}>()

    // 处理表单组件,收集表单数据
    const handleForm = (e:React.FormEvent<HTMLInputElement>):void=>{
        setFormData({
            ...formData,
            [e.currentTarget.id]:e.currentTarget.value
        })
    }
    
    return (
        <form className='Form' onSubmit={(e)=>{
            e.preventDefault();
            addTask(e, formData)
        }}>
            <div>
                <div>
                    <label htmlFor="name">任务名称</label>
                    <input type="text" id="name" onChange={handleForm}/>
                </div>
            </div>

            <div>
                <div>
                    <label htmlFor="name">任务描述</label>
                    <input type="text" id="description" onChange={handleForm}/>
                </div>
            </div>
            <button disabled={formData===undefined?true:false}>添加任务</button>
        </form>
    )
}

export default TaskCreator;