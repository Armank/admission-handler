export interface Application {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  address: string;
  status: 'pending' | 'handled';
  createdAt: string;
  updatedAt: string;
}

export const applications: Application[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    birthDate: '2000-01-01',
    address: '123 Main St, City, Country',
    status: 'pending',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '+1987654321',
    birthDate: '2001-02-15',
    address: '456 Oak Ave, Town, Country',
    status: 'handled',
    createdAt: '2024-01-16T14:30:00Z',
    updatedAt: '2024-01-17T09:15:00Z',
  },
  {
    id: '3',
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1122334455',
    birthDate: '2002-03-20',
    address: '789 Pine Rd, Village, Country',
    status: 'pending',
    createdAt: '2024-01-18T11:45:00Z',
    updatedAt: '2024-01-18T11:45:00Z',
  },
  {
    id: '4',
    firstName: 'Maria',
    lastName: 'Garcia',
    email: 'maria.garcia@example.com',
    phone: '+1555666777',
    birthDate: '2001-04-25',
    address: '321 Elm St, City, Country',
    status: 'pending',
    createdAt: '2024-01-19T16:20:00Z',
    updatedAt: '2024-01-19T16:20:00Z',
  },
  {
    id: '5',
    firstName: 'David',
    lastName: 'Wilson',
    email: 'david.wilson@example.com',
    phone: '+1444555666',
    birthDate: '2000-05-30',
    address: '654 Maple Dr, Town, Country',
    status: 'handled',
    createdAt: '2024-01-20T09:10:00Z',
    updatedAt: '2024-01-21T13:45:00Z',
  },
];

export const getApplicationsByMonth = () => {
  const monthlyData = new Map<string, number>();
  
  applications.forEach(app => {
    const month = app.createdAt.substring(0, 7); // YYYY-MM format
    monthlyData.set(month, (monthlyData.get(month) || 0) + 1);
  });

  return Array.from(monthlyData.entries()).map(([month, count]) => ({
    month,
    count,
  }));
}; 