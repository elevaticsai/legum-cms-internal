import React from 'react';
import { StatsCard } from './StatsCard';
import { EmployeeOverview } from './EmployeeOverview';
import { GenderDistribution } from './GenderDistribution';
import type { EmployeeData } from '../../types';

interface EmployeeStatsProps {
  data: EmployeeData[];
}

export const EmployeeStats: React.FC<EmployeeStatsProps> = ({ data }) => {
  const currentMonth = data[data.length - 1];
  const previousMonth = data[data.length - 2] || currentMonth;

  const calculateTrend = (current: number, previous: number) => 
    ((current - previous) / previous) * 100;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <StatsCard
          title="Total Employees"
          value={currentMonth['Total No of Employee']}
          trend={{
            value: calculateTrend(
              currentMonth['Total No of Employee'],
              previousMonth['Total No of Employee']
            ),
            label: "vs last month"
          }}
          icon="users"
        />
        <StatsCard
          title="New Joiners"
          value={currentMonth['Total Joinee']}
          trend={{
            value: calculateTrend(
              currentMonth['Total Joinee'],
              previousMonth['Total Joinee']
            ),
            label: "vs last month"
          }}
          icon="plus"
        />
        <StatsCard
          title="Resignations"
          value={currentMonth['Total Resigned']}
          trend={{
            value: calculateTrend(
              currentMonth['Total Resigned'],
              previousMonth['Total Resigned']
            ),
            label: "vs last month"
          }}
          icon="minus"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <EmployeeOverview data={data} />
        <GenderDistribution data={data} />
      </div>
    </div>
  );
};