import { createContext, useContext, useState } from "react";

export interface BreadcrumbItemModel {
  id: string;
  path: string;
  type?: string;
  value?: string;
  title?: string;
}

interface AppContextValue {
  breadcrumbs: BreadcrumbItemModel[];

  addBreadcrumb: (data: BreadcrumbItemModel) => void;
  removeBreadcrumb: (id: string) => void;
  updateBreadcrumb: (data: BreadcrumbItemModel) => void;
}

export const AppContext = createContext<AppContextValue>({
  breadcrumbs: [],
  addBreadcrumb: () => {},
  removeBreadcrumb: () => {},
  updateBreadcrumb: () => {},
});

export const AppConsumer = AppContext.Consumer;

type AppProviderProps = {
  children?: React.ReactNode
}

export function AppProvider(props: AppProviderProps) {
  const { children } = props;
  const [ breadcrumbs, setBreadcrumbs ] = useState<BreadcrumbItemModel[]>([]);

  const addBreadcrumb = (data: BreadcrumbItemModel) => {
    setBreadcrumbs([...breadcrumbs, data]);
  };

  const removeBreadcrumb = (id: string) => {
    setBreadcrumbs(breadcrumbs.filter((x) => x.id !== id));
  };

  const updateBreadcrumb = (data: BreadcrumbItemModel) => {
    setBreadcrumbs(breadcrumbs.map((x) => {
      if (x.id === data.id) {
        return data;
      }
      return x;
    }));
  };

  return (
    <AppContext.Provider value={{
      breadcrumbs,
      addBreadcrumb,
      removeBreadcrumb,
      updateBreadcrumb,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
