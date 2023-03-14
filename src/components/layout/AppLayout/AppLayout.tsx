import { Arimo, Big_Shoulders_Display } from '@next/font/google';
import React, { type HTMLAttributes } from 'react';

import { Modal } from '@/components/base/Modal';
import { HeaderMobile } from '@/components/layout/HeaderMobile';

import { useMediaQuery } from '@/lib/hooks/useMediaQuery';

import { Header } from '../Header';

import cx from './index.module.scss';

const arimo = Arimo({
	variable: '--next-font',
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

const bigShoulders = Big_Shoulders_Display({
	variable: '--next-font--heading',
	subsets: ['latin'],
	weight: ['400', '500', '900'],
});

export function AppLayout({
	className,
	children,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	const isTablet = useMediaQuery('(max-width: 768px)');

	return (
		<>
			<div
				className={cx(
					'Container',
					arimo.variable,
					bigShoulders.variable,
					className
				)}
				{...props}
			>
				{isTablet ? <HeaderMobile /> : <Header className={cx('Header')} />}
				{children}
				<Modal />
				{/* <div className={cx('Preloader')} /> */}
			</div>
		</>
	);
}
