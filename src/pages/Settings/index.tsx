import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs';
import { UserManagement } from './sections/UserManagement';
import { SystemPreferences } from './sections/SystemPreferences';
import { ComplianceCalendar } from './sections/ComplianceCalendar';
import { Integration } from './sections/Integration';
import { Security } from './sections/Security';
import { Badge } from '../../components/ui/badge';
import { Users, Settings, Calendar, Link, Shield } from 'lucide-react';

export const SettingsPage = () => {
  return (
    <div className="w-full p-4 space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Settings Dashboard</h1>
        <Badge variant="outline">System Version: 2.1.0</Badge>
      </div>

      <Tabs defaultValue="user-management" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="user-management">
            <Users className="w-4 h-4 mr-2" />
            User Management
          </TabsTrigger>
          <TabsTrigger value="system-preferences">
            <Settings className="w-4 h-4 mr-2" />
            System Preferences
          </TabsTrigger>
          <TabsTrigger value="compliance-calendar">
            <Calendar className="w-4 h-4 mr-2" />
            Compliance Calendar
          </TabsTrigger>
          <TabsTrigger value="integration">
            <Link className="w-4 h-4 mr-2" />
            Integration
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="w-4 h-4 mr-2" />
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="user-management">
          <UserManagement />
        </TabsContent>

        <TabsContent value="system-preferences">
          <SystemPreferences />
        </TabsContent>

        <TabsContent value="compliance-calendar">
          <ComplianceCalendar />
        </TabsContent>

        <TabsContent value="integration">
          <Integration />
        </TabsContent>

        <TabsContent value="security">
          <Security />
        </TabsContent>
      </Tabs>
    </div>
  );
};