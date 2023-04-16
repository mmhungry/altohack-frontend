import React, { useState } from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Dropdown } from "@/components/Dropdown";

export default function DashboardPage() {
  const [selectedTime, setSelectedTime] = useState("Day");

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const timeOptions = ["Day", "Week", "Month", "Year"];

  return (
    <div className="grid grid-cols-12 gap-2">
      <span className="col-span-6">
        <Card title="Energy Consumption">
          <span className="flex justify-end">
            <Dropdown
              options={timeOptions}
              onSelect={handleTimeSelect}
              button={
                <Button variant="primary" size="lg">
                  {selectedTime}
                </Button>
              }
            />
          </span>
        </Card>
      </span>
    </div>
  );
}
