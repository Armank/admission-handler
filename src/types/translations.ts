export interface Translation {
  common: {
    addNew: string;
    delete: string;
    edit: string;
    save: string;
    cancel: string;
    confirm: string;
    pending: string;
    handled: string;
    status: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    birthDate: string;
    address: string;
    createdAt: string;
    updatedAt: string;
    actions: string;
    confirmDelete: string;
    noApplications: string;
    applications: string;
    dashboard: string;
    totalApplications: string;
    pendingApplications: string;
    handledApplications: string;
    search: string;
    all: string;
  };
}

export type Translations = {
  [key: string]: Translation;
}; 