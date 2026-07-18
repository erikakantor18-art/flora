"use client";

import TransactionSkeleton from "./TransactionSkeleton";

interface TransactionSkeletonListProps {
  count?: number;
}

export default function TransactionSkeletonList({
  count = 6,
}: TransactionSkeletonListProps) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <TransactionSkeleton key={index} />
      ))}
    </div>
  );
}