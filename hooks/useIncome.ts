"use client";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import {
  getIncome,
  addIncome as createIncome,
  updateIncome as editIncome,
  deleteIncome as removeIncome,
} from "@/services/income.service";

import { Income } from "@/types";

function getErrorMessage(
  error: unknown
): string {

  if (error instanceof Error) {

    return error.message;

  }

  return "Something went wrong.";

}

export default function useIncome() {

  const [income, setIncome] =
    useState<Income[]>([]);

  const [loading, setLoading] =
    useState(false);

  async function loadIncome() {

    try {

      setLoading(true);

      const data =
        await getIncome();

      setIncome(data);

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

    loadIncome();

  }, []);

  async function addIncome(
    item: Income
  ) {

    try {

      setLoading(true);

      await createIncome(item);

      toast.success(
        "Income added."
      );

      await loadIncome();

    } catch (error) {

      console.error(error);

      toast.error(
        getErrorMessage(error)
      );

    } finally {

      setLoading(false);

    }

  }

  async function updateIncome(
    item: Income
  ) {

    try {

      setLoading(true);

      await editIncome(item);

      toast.success(
        "Income updated."
      );

      await loadIncome();

    } catch (error) {

      console.error(error);

      toast.error(
        getErrorMessage(error)
      );

    } finally {

      setLoading(false);

    }

  }

  async function deleteIncome(
    id: string
  ) {

    try {

      setLoading(true);

      await removeIncome(id);

      toast.success(
        "Income deleted."
      );

      await loadIncome();

    } catch (error) {

      console.error(error);

      toast.error(
        getErrorMessage(error)
      );

    } finally {

      setLoading(false);

    }

  }

  const totalIncome =
    income.reduce(
      (total, item) =>
        total + item.amount,
      0
    );

  return {

    income,

    loading,

    totalIncome,

    addIncome,

    updateIncome,

    deleteIncome,

    reload: loadIncome,

  };

}