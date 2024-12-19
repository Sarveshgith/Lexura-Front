import { actions } from '../Constants';
import { toggleFormat } from '../utils/EditorUtils';

const Toolbar = ({ editor }) => {
	return (
		<div className='align-center justify-center gap-2'>
			{actions.map((action) => (
				<button
					key={action.id}
					title={action.title}
					className='p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
					onClick={() => toggleFormat(editor, action.id)}
					style={{ fontSize: action.fontSize, fontWeight: action.type }}
				>
					{action.icon}
				</button>
			))}
		</div>
	);
};

export default Toolbar;
