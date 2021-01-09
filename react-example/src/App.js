import { useState } from 'react';
import EnhancedMultiSelect from './EnhancedMultiSelect';
import EnhancedMultiSelectOption from './EnhancedMultiSelectOption';

export default function App() {
  const [selection, setSelection] = useState(new Set());
  return (
    <section>
      <EnhancedMultiSelect value={selection} onChange={v => setSelection(v)}>
        <EnhancedMultiSelectOption value="apples">
          Apples
        </EnhancedMultiSelectOption>
        <EnhancedMultiSelectOption value="oranges">
          Oranges
        </EnhancedMultiSelectOption>
        <EnhancedMultiSelectOption value="peaches">
          Peaches
        </EnhancedMultiSelectOption>
        <EnhancedMultiSelectOption value="grapes">
          Grapes
        </EnhancedMultiSelectOption>
        <EnhancedMultiSelectOption value="plums">
          Plums
        </EnhancedMultiSelectOption>
      </EnhancedMultiSelect>
      <pre>
        <code>{JSON.stringify([...selection], null, 2)}</code>
      </pre>
    </section>
  );
}
