import { useContext } from 'react';
import { EnhancedMultiSelectContext } from './EnhancedMultiSelect';

export default function EnhancedMultiSelectOption({ children, value }) {
  const { isSelected, setSelected, filter } = useContext(
    EnhancedMultiSelectContext,
  );
  if (!value.includes(filter)) {
    return null;
  }
  return (
    <label style={{ display: 'block' }}>
      <input
        type="checkbox"
        checked={isSelected(value)}
        onChange={evt => setSelected(value, evt.target.checked)}
      />
      {children}
    </label>
  );
}
