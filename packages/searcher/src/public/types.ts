export type SearchItem = {
  id: string;
  title: string;
  description?: string;
  url?: string;
};

export type SearchBoxProps = {
  placeholder?: string;
  autoFocus?: boolean;
  minChars?: number;
  debounceMs?: number;
  defaultQuery?: string;
  onSubmit?: (q: string) => void | Promise<void>;
  onSelectResult?: (item: SearchItem) => void | Promise<void>;
  navigateTo?: (item: SearchItem) => void;
  className?: string;
  renderItem?: (item: SearchItem) => React.ReactNode;
};
