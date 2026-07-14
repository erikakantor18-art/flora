"use client";

import Card from "@/components/ui/Card";
import Progress from "@/components/ui/Progress";

import useStudy from "@/hooks/useStudy";

export default function StudyOverview() {

  const { studies } =
    useStudy();

  return (

    <Card>

      <h2 className="text-2xl font-bold">

        📚 Study Progress

      </h2>

      <div className="mt-6 space-y-6">

        {studies.length === 0 ? (

          <p className="text-slate-500">

            No study data.

          </p>

        ) : (

          studies.map((item)=>(

            <div
              key={item.id}
            >

              <div className="mb-2 flex justify-between">

                <span className="font-semibold">

                  {item.title}

                </span>

                <span>

                  {item.progress}%

                </span>

              </div>

              <Progress
                value={item.progress}
              />

            </div>

          ))

        )}

      </div>

    </Card>

  );

}