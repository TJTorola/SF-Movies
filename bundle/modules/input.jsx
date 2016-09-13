// Source: https://www.npmjs.com/package/react-floating-label

import React, {PropTypes} from 'react';
import classNames from 'classnames';

export default class FloatingLabel extends React.Component {
	static propTypes: {
		autoComplete: PropTypes.bool,
		errorMsg: PropTypes.string,
		placeholder: PropTypes.string.isRequired,
		pattern: PropTypes.any,
		type: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		isDisabled: PropTypes.bool
	};

	constructor (props) {
		super(props)

		this.state = {hasValue: Boolean(this.props.defaultValue), hasError: false};
	}

	onBlur(event) {
		this.setState({hasValue: Boolean(event.currentTarget.value)});
	}

	onChange(event) {
		const { pattern } = this.props;
		let test;

		if (typeof pattern === 'function') {
			test = pattern;
		} else {
			test = pattern.test;
		}
		
		this.setState({
			hasError: !test(event.currentTarget.value),
			hasValue: Boolean(event.currentTarget.value)
		});

		if (this.props.onChange) {
			this.props.onChange(event);
		}
	}

	render () {
		const {
			autoComplete,
			errorMsg,
			id,
			isDisabled,
			pattern,
			placeholder,
			type,
			defaultValue,
		} = this.props;

		const {
			hasValue,
			hasError
		} = this.state;

		const inputClasses = classNames(
			'fl-input',
			{ 'fl-valid': hasValue && !hasError },
			{ 'fl-invalid': hasValue && hasError }
		);

		const errMsgClasses = classNames(
			{'fl-error-msg': errorMsg}, 
			{'fl-error-show': (hasError && hasValue) && (errorMsg && pattern) }
		);

		return(
			<div className='fl-input-container'>
				<input
					defaultValue = { defaultValue }
					autoComplete = { autoComplete }
					className    = { inputClasses }
					disabled     = { isDisabled }
					id           = { id }
					onBlur       = { this.onBlur.bind(this) }
					onChange     = { pattern ? this.onChange.bind(this) : this.props.onChange.bind(this) }
					type         = { type } 
				/>
				<label className='fl-input-label' htmlFor={ id }>{ placeholder }</label>
				<span className='fl-input-bar'/>
				{ errorMsg && <span className={ errMsgClasses }>{ errorMsg }</span> }
			</div>
		);
	}
}

FloatingLabel.defaultProps = {
	autoComplete: false,
	type: 'text',
	isDisabled: false,
	id: 'text-box',
	placeholder: 'name',
	onChange: () => {}
};