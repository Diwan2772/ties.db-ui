import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Button.scss';

const SIZE = {
  ICON: 'Icon',
  LARGE: 'Large',
  NORMAL: 'Normal',
};

const VARIANT = {
  DANGER: 'Danger',
  ICON: 'Icon',
  PRIMARY: 'Primary',
  SECONDARY: 'Secondary',
  SUCCESS: 'Success',
};

const Button = (props) => {
  const {
    className: classNameProp,
    children,
    size = SIZE.NORMAL,
    variant = VARIANT.PRIMARY,
  } = props;

  const className = classNames(classNameProp, styles.Root, {
    [styles.RootSizeIcon]: size === SIZE.ICON,
    [styles.RootSizeLarge]: size === SIZE.LARGE,
    [styles.RootSizeNormal]: size === SIZE.NORMAL,

    [styles.RootVariantDanger]: variant === VARIANT.DANGER,
    [styles.RootVariantIcon]: variant === VARIANT.ICON,
    [styles.RootVariantPrimary]: variant === VARIANT.PRIMARY,
    [styles.RootVariantSecondary]: variant === VARIANT.SECONDARY,
    [styles.RootVariantSuccess]: variant === VARIANT.SUCCESS,
  });

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf([SIZE.NORMAL, SIZE.LARGE]),
  type: PropTypes.string,
  variant: PropTypes.oneOf([VARIANT.DANGER, VARIANT.PRIMARY, VARIANT.SECONDARY, VARIANT.SUCCESS]),
};

Button.defaultProps = {
  type: 'button',
};

Button.SIZE = SIZE;
Button.VARIANT = VARIANT;

export default Button;
