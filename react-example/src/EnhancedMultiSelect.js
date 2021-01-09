import { createContext, useState } from 'react';

export const EnhancedMultiSelectContext = createContext();

export default function EnhancedMultiSelect({ children, value, onChange }) {
  const [filter, setFilter] = useState('');
  return (
    <EnhancedMultiSelectContext.Provider
      value={{
        isSelected: key => value.has(key),
        setSelected: (key, selected) => {
          const newValue = new Set([...value]);
          if (selected) {
            newValue.add(key);
          } else {
            newValue.delete(key);
          }
          onChange(newValue);
        },
        filter,
      }}
    >
      <input
        type="text"
        placeholder="Filter options..."
        value={filter}
        onChange={evt => setFilter(evt.target.value)}
      />
      {children}
    </EnhancedMultiSelectContext.Provider>
  );
}
