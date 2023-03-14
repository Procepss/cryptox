import { motion } from 'framer-motion';
import React from 'react';

interface WrapperProps {
	children: React.ReactNode;
}

// Word wrapper
const Wrapper = (props: WrapperProps) => (
	// We'll do this to prevent wrapping of words using CSS
	<span className="word-wrapper">{props.children}</span>
);
// Map API "type" vaules to JSX tag names
const tagMap: Record<string, string> = {
	paragraph: 'p',
	heading1: 'h1',
	heading2: 'h2',
};

interface AnimatedTextProps {
	type: string | number;
	text: string;
}

// AnimatedText
// Handles the deconstruction of each word and character to setup for the
// individual character animations
export const AnimatedText = (props: AnimatedTextProps) => {
	// Framer Motion variant object, for controlling animation
	const item = {
		hidden: {
			opacity: 0,
			y: '100%',
			transition: {
				type: 'spring',
				damping: 17,
				stiffness: 100,
			},
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				damping: 17,
				stiffness: 100,
			},
		},
	};

	//  Split each word of props.text into an array
	const splitWords = props.text.split(' ');

	// Create storage array
	const words: string[][] = [];

	// Push each word into words array
	for (const [, item] of splitWords.entries()) {
		words.push(item.split(''));
	}

	// Add a space ("\u00A0") to the end of each word
	words.map((word) => word.push('\u00A0'));

	// Get the tag name from tagMap
	const Tag: any = tagMap[props.type];

	return Tag ? (
		<Tag>
			{words.map((word, index) => (
				// Wrap each word in the Wrapper component
				<Wrapper key={index}>
					{words[index].flat().map((element, index) => (
						<span
							style={{
								overflow: 'hidden',
								display: 'inline-block',
							}}
							key={index}
						>
							<motion.span style={{ display: 'inline-block' }} variants={item}>
								{element}
							</motion.span>
						</span>
					))}
				</Wrapper>
			))}
			{/* {} */}
		</Tag>
	) : null;
};
