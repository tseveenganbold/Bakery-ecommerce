import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

const Feature = () => {
	return (
		<FeatureContainer>
			<h1>Cake of the Day</h1>
			<p>Ebony and Ivory, feel the heavenly taste of exotic chocolate.</p>
			<FeatureButton>Order Now</FeatureButton>
		</FeatureContainer>
	);
};

export default Feature;
