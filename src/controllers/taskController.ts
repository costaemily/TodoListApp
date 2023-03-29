import firestore from '@react-native-firebase/firestore';
import {Task} from '../models/task';

const tasksCollection = firestore().collection('Tasks');

export async function createTask(taskInfo: Task) {
  await tasksCollection.add({
    description: taskInfo.description,
    dateIn: taskInfo.dateIn,
    dateModification: taskInfo.dateModification,
    isDone: taskInfo.isDone,
  });
}

export async function consultTask(id: string) {
  return await tasksCollection.doc(id).get();
}

export async function updateTask(id: string, taskInfo: Task) {
  await tasksCollection.doc(id).update({
    description: taskInfo.description,
    dateIn: taskInfo.dateIn,
    dateModification: taskInfo.dateModification,
    isDone: taskInfo.isDone,
  });
}

export async function deleteTask(id: string) {
  await tasksCollection.doc(id).delete();
}

export async function listTasks() {
  return await tasksCollection.get();
}
