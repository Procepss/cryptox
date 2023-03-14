import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import { Form } from '@/components/base/Form';
import { Heading } from '@/components/base/Heading';

import Close from '@/public/icons/close.svg';
import sphereGoogle from '@/public/videos/about/sphere.webm';
import sphereSafari from '@/public/videos/about/sphere2.mov';
import safariVideo from '@/public/videos/contacts/arrow-safari.mov';
import googleVideo from '@/public/videos/contacts/arrow-video.webm';

import cx from './index.module.scss';

export const OPEN_MODAL_EVENT = 'contact-us';

const TITLE = 'Thank you';
const CAPTION = 'We will get back to you soon';

export const Modal = () => {
	const modalRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const closeModal = () => {
		const modal = modalRef.current;

		setIsOpen(false);
		setIsSuccess(false);
		if (modal) {
			enableBodyScroll(modal);
		}
	};

	useEffect(() => {
		const openModal = () => {
			const modal = modalRef.current;

			setIsOpen(true);
			if (modal) disableBodyScroll(modal);
		};

		document.addEventListener(OPEN_MODAL_EVENT, openModal);

		return () => {
			document.removeEventListener(OPEN_MODAL_EVENT, openModal);
		};
	}, []);

	return (
		<div ref={modalRef} className={cx('Root', { 'Root--open': isOpen })}>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						onClick={closeModal}
						className={cx('mask')}
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.8 }}
						exit={{ opacity: 0, transition: { duration: 0.15 } }}
					></motion.div>
				)}
				{isOpen && (
					<motion.div
						className={cx('Modal')}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { duration: 0.15 } }}
					>
						<button className={cx('Close')} onClick={closeModal}>
							<Close />
						</button>
						<div
							className={cx('Container', { 'Container--success': isSuccess })}
						>
							<div className={cx('Left')}>
								<video
									key={new Date().getTime()}
									className={cx('Video')}
									autoPlay
									loop
									muted
									playsInline
								>
									<source
										src={isSuccess ? sphereSafari : safariVideo}
										type='video/mp4; codecs="hvc1"'
									/>
									<source
										src={isSuccess ? sphereGoogle : googleVideo}
										type="video/webm"
									/>
								</video>
							</div>
							<div className={cx('Form')}>
								{isSuccess ? (
									<div className={cx('Success')}>
										<Heading className={cx('SuccessTitle')} level={2}>
											{TITLE}
										</Heading>
										<span className={cx('SuccessCaption')}>{CAPTION}</span>
									</div>
								) : (
									<Form
										submit={() => {
											setIsSuccess(true);
										}}
									/>
								)}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
