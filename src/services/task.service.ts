import { AppDataSource } from "../../data-source";
import { TaskEntity } from "../entities/task.entity";

const taskRepo = AppDataSource.getRepository(TaskEntity);

export async function createTask(data: Partial<TaskEntity>){
    const task = taskRepo.create(data);
    return taskRepo.save(task);
}

export async function get(){
    return await taskRepo.find();
}

export async function getById(id: number){
    return await taskRepo.findOneBy({id});
}

export async function updateById(id: number, body: Partial<TaskEntity>){
    const task = await taskRepo.findOneBy({id})
    if (!task) return null;
    Object.assign(task, body);
    return await taskRepo.save(task)
}

export async function deleteById(id: number){
    const task = await taskRepo.findOneBy({id})
    if (!task) return false;
    await taskRepo.remove(task);
    return true;
}
