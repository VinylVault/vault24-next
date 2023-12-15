/** @format */

import { getRecommended } from '@/lib/recommended-service';
import Recommended from './recommended';
import { Toggle } from './toggle';
import { Wrapper } from './wrapper';

const SideBar = async () => {
	const recommended = await getRecommended();
	return (
		<Wrapper>
			<Toggle />
			<div className="space-y-4">
				<Recommended data={recommended} />
			</div>
		</Wrapper>
	);
};

export default SideBar;
