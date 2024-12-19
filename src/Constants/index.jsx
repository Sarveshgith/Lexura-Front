import {
	FaBold,
	FaItalic,
	FaUnderline,
	FaSubscript,
	FaSuperscript,
	FaHighlighter,
	FaCode,
	FaAlignLeft,
	FaAlignCenter,
	FaAlignRight,
	FaStrikethrough,
	FaAlignJustify,
	FaUndo,
	FaRedo,
} from 'react-icons/fa';
import { HiOutlineNumberedList, HiOutlineListBullet } from 'react-icons/hi2';
import { RxDividerVertical } from 'react-icons/rx';

export const TypeAction = {
	Bold: 'bold',
	Italic: 'italic',
	Underline: 'underline',
	Subscript: 'subscript',
	Superscript: 'superscript',
	Highlight: 'highlight',
	Code: 'code',
	AlignLeft: 'align-left',
	AlignCenter: 'align-center',
	AlignRight: 'align-right',
	Strikethrough: 'strikethrough',
	AlignJustify: 'align-justify',
	NumberedList: 'numbered-list',
	ListBullet: 'list-bullet',
	Divider: 'divider',
	Undo: 'undo',
	Redo: 'redo',
};

export const actions = [
	{
		id: TypeAction.Bold,
		icon: <FaBold />,
		title: 'Bold',
	},
	{
		id: TypeAction.Italic,
		icon: <FaItalic />,
		title: 'Italic',
	},
	{
		id: TypeAction.Underline,
		icon: <FaUnderline />,
		title: 'Underline',
	},
	{
		id: TypeAction.Subscript,
		icon: <FaSubscript />,
		title: 'Subscript',
	},
	{
		id: TypeAction.Superscript,
		icon: <FaSuperscript />,
		title: 'Superscript',
	},
	{
		id: TypeAction.Highlight,
		icon: <FaHighlighter />,
		title: 'Highlight',
	},
	{
		id: TypeAction.Code,
		icon: <FaCode />,
		title: 'Code',
	},
	{
		id: TypeAction.AlignLeft,
		icon: <FaAlignLeft />,
		title: 'Align Left',
	},
	{
		id: TypeAction.AlignCenter,
		icon: <FaAlignCenter />,
		title: 'Align Center',
	},
	{
		id: TypeAction.AlignRight,
		icon: <FaAlignRight />,
		title: 'Align Right',
	},
	{
		id: TypeAction.Strikethrough,
		icon: <FaStrikethrough />,
		title: 'Strikethrough',
	},
	{
		id: TypeAction.AlignJustify,
		icon: <FaAlignJustify />,
		title: 'Align Justify',
	},
	{
		id: TypeAction.NumberedList,
		icon: <HiOutlineNumberedList />,
		title: 'Numbered List',
		fontSize: '20px',
		type: 'bold',
	},
	{
		id: TypeAction.ListBullet,
		icon: <HiOutlineListBullet />,
		title: 'Bullet List',
		fontSize: '20px',
		type: 'bold',
	},
	{
		id: TypeAction.Divider,
		icon: <RxDividerVertical />,
		title: 'Divider',
		fontSize: '20px',
		type: 'bold',
	},
	{
		id: TypeAction.Undo,
		icon: <FaUndo />,
		title: 'Undo',
	},
	{
		id: TypeAction.Redo,
		icon: <FaRedo />,
		title: 'Redo',
	},
];
