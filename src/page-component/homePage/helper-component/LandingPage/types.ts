
export interface Company {
    pathName: any;
    name: string;
  }
  
export interface SelectedBoxProps {
    selectedCompany: Company | null;
    setSelectedCompany: React.Dispatch<React.SetStateAction<Company | null>>;
  }
  