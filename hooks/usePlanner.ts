"use client";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import {
  getTasks,
  addTask as createTask,
  updateTask as editTask,
  deleteTask as removeTask,
} from "@/services/planner.service";

import { Planner } from "@/types";

export default function usePlanner() {

  const [tasks, setTasks] =
    useState<Planner[]>([]);

  const [loading, setLoading] =
    useState(false);

  async function loadTasks() {

    try {

      setLoading(true);

      const data =
        await getTasks();

      setTasks(data);

    } catch (error: any) {

      console.error(error);

      toast.error(
        error.message
      );

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadTasks();

  }, []);

  async function addTask(
    task: Planner
  ) {

    try {

      setLoading(true);

      await createTask(task);

      toast.success(
        "Task added"
      );

      await loadTasks();

    } catch (error: any) {

      console.error(error);

      toast.error(
        error.message
      );

    } finally {

      setLoading(false);

    }

  }

  async function updateTask(
    task: Planner
  ) {

    try {

      setLoading(true);

      await editTask(task);

      toast.success(
        "Task updated"
      );

      await loadTasks();

    } catch (error: any) {

      console.error(error);

      toast.error(
        error.message
      );

    } finally {

      setLoading(false);

    }

  }

  async function deleteTask(
    id: string
  ) {

    try {

      setLoading(true);

      await removeTask(id);

      toast.success(
        "Task deleted"
      );

      await loadTasks();

    } catch (error: any) {

      console.error(error);

      toast.error(
        error.message
      );

    } finally {

      setLoading(false);

    }

  }

  return {

    tasks,

    loading,

    addTask,

    updateTask,

    deleteTask,

    reload: loadTasks,

  };

}