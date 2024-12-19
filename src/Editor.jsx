import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import Toolbar from './Components/Toolbar';

const Editor = () => {
	const [value, setValue] = useState([
		{
			type: 'paragraph',
			children: [{ text: '' }],
		},
	]);

	const editor = useMemo(() => withHistory(withReact(createEditor())), []);

	const init = [{ type: 'paragraph', children: [{ text: '' }] }];
	const contentRef = useRef(null);

	useEffect(() => {
		contentRef.current = value;
	}, [value]);

	const handleChange = (newValue) => {
		if (newValue && Array.isArray(newValue)) {
			setValue(newValue);
			contentRef.current = newValue;
		} else {
			console.log('Invalid value');
		}
	};

	return (
		<div className='max-w-3xl mx-auto p-4 border border-gray-300 rounded-lg shadow-lg'>
			<Slate
				editor={editor}
				initialValue={init}
				value={value}
				onChange={handleChange}
			>
				<Toolbar editor={editor} />
				<div className='mb-4 mt-4'>
					<Editable
						className='p-4 border-2 border-gray-300 rounded-lg min-h-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500'
						placeholder='Write Content...'
						onChange={(newValue) => (editor.children = newValue)}
					/>
				</div>
			</Slate>
		</div>
	);
};

export default Editor;
