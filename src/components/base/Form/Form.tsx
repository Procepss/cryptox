import axios from 'axios';
import { type HTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/base/Button';
import { Heading } from '@/components/base/Heading';

import {
	BUTTON,
	EMAIL_INVALID_MESSAGE,
	EMAIL_PATTERN,
	REQUIRED_MESSAGE,
	TITLE,
} from './constants';
import { type Inputs } from './constants/Form.interfaces';

import cx from './index.module.scss';

interface FormProps extends HTMLAttributes<HTMLFormElement> {
	submit: () => void;
}

const instance = axios.create({
	baseURL: '/api',
	headers: { 'Content-Type': 'application/json' },
});

export const Form = ({ submit }: FormProps) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<Inputs>();

	const postForm = async (data: Inputs) => {
		try {
			await instance.post('/email', data);
		} catch (e) {
			console.log(e);
		}
	};

	const onSubmit = (data: Inputs) => {
		void postForm(data);
		submit();
	};

	return (
		<form className={cx('Form')} onSubmit={handleSubmit(onSubmit)}>
			<div className={cx('Body')}>
				<Heading className={cx('Title')} level={2}>
					{TITLE}
				</Heading>
				<div className={cx('Fields')}>
					<div className={cx('InputWrapper')}>
						<input
							className={cx('Input', { 'Input--withError': errors.name })}
							placeholder="NAME*"
							{...register('name', { required: REQUIRED_MESSAGE })}
						/>
						{errors.name && (
							<span className={cx('Error')}>This field is required</span>
						)}
					</div>
					<div className={cx('InputWrapper')}>
						<input
							className={cx('Input', { 'Input--withError': errors.email })}
							placeholder="EMAIL*"
							{...register('email', {
								required: REQUIRED_MESSAGE,
								pattern: {
									value: EMAIL_PATTERN,
									message: EMAIL_INVALID_MESSAGE,
								},
							})}
						/>
						{errors.email && (
							<span className={cx('Error')}>{errors.email.message}</span>
						)}
					</div>
					<div className={cx('InputWrapper')}>
						<input
							className={cx('Input')}
							placeholder="COMPANY"
							{...register('company')}
						/>
					</div>
					<div className={cx('InputWrapper')}>
						<input
							className={cx('Input')}
							placeholder="YOUR MESSAGE"
							{...register('message')}
						/>
					</div>
				</div>
				<Button className={cx('Submit')} type="submit">
					{BUTTON}
				</Button>
			</div>
		</form>
	);
};
