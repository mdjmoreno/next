import { Poppins } from 'next/font/google';
import { useMemo } from 'react';


const poppins700 = Poppins({ weight: '700', subsets: ['latin'] });
const poppins300 = Poppins({
	weight: '300',
	subsets: ['latin'],
});

export function useFont(weight = 300) {
	const font = useMemo(() => {
		const fontWeight = `${weight}`;

		const formatFont = ({ className, style }) => [className, style];

		if (fontWeight === '700') {
			return formatFont(poppins700);
		}

		return formatFont(poppins300);
	}, [weight]);

	return font;
}
