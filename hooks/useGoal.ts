"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getGoals,
  addGoal as createGoal,
  updateGoal as editGoal,
  deleteGoal as removeGoal,
} from "@/services/goal.service";

import { Goal } from "@/types";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong.";
}

export default function useGoal() {
  const [goals, setGoals] =
    useState<Goal[]>([]);

  const [loading, setLoading] =
    useState(false);

  async function loadGoals() {
    try {
      setLoading(true);

      const data =
        await getGoals();

      setGoals(data);
    } catch (error) {
      console.error(error);

      toast.error(
        getErrorMessage(error)
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadGoals();
  }, []);

  async function addGoal(goal: Goal) {
    try {
      setLoading(true);

      await createGoal(goal);

      toast.success("Goal added");

      await loadGoals();
    } catch (error) {
      console.error(error);

      toast.error(
        getErrorMessage(error)
      );
    } finally {
      setLoading(false);
    }
  }

  async function updateGoal(goal: Goal) {
    try {
      setLoading(true);

      await editGoal(goal);

      toast.success("Goal updated");

      await loadGoals();
    } catch (error) {
      console.error(error);

      toast.error(
        getErrorMessage(error)
      );
    } finally {
      setLoading(false);
    }
  }

  async function deleteGoal(id: string) {
    try {
      setLoading(true);

      await removeGoal(id);

      toast.success("Goal deleted");

      await loadGoals();
    } catch (error) {
      console.error(error);

      toast.error(
        getErrorMessage(error)
      );
    } finally {
      setLoading(false);
    }
  }

  return {
    goals,
    loading,
    addGoal,
    updateGoal,
    deleteGoal,
    reload: loadGoals,
  };
}