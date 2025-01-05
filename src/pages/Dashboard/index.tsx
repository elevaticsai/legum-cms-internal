import React, { useState } from 'react';
import { DashboardTabs } from '../../components/dashboard/DashboardTabs';
import { ComplianceView } from '../../components/ComplianceView';
import { useDataManagement } from '../../hooks/useDataManagement';

export const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('license');
  const { 
    filteredData, 
    filters, 
    handleFilterChange, 
    getUniqueValues 
  } = useDataManagement();

  return (
    <div className="flex flex-col h-full">
      <DashboardTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 overflow-auto">
        <ComplianceView
          data={filteredData[activeTab as keyof typeof filteredData] || []}
          filters={filters}
          onFilterChange={handleFilterChange}
          getUniqueValues={getUniqueValues}
          activeTab={activeTab}
        />
      </div>
    </div>
  );
};