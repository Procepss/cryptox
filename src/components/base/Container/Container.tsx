import cx from './index.module.scss';

export const Container = ({ className, ...props }: any) => (
	<div className={cx('Root', className)} {...props} />
);
