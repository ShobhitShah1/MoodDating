/* eslint-disable react-native/no-inline-styles */
import PropTypes from 'prop-types';
import React, {Component, createRef, RefObject} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

// Define the props for the OTPInput component
interface Props {
  value: string;
  codeLength?: number;
  cellSize?: number;
  cellSpacing?: number;
  placeholder?: string | React.ReactNode;
  mask?: string | React.ReactNode;
  maskDelay?: number;
  password?: boolean;
  autoFocus?: boolean;
  restrictToNumbers?: boolean;
  containerStyle?: ViewStyle;
  cellStyle?: ViewStyle;
  cellStyleFocused?: ViewStyle;
  cellStyleFilled?: ViewStyle;
  textStyle?: TextStyle;
  textStyleFocused?: TextStyle;
  keyboardType?: string;
  testID?: string;
  editable?: boolean;
  inputProps?: TextInputProps;
  disableFullscreenUI?: boolean;
  onFulfill?: (code: string) => void;
  onChangeText?: (text: string) => void;
  onBackspace?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

// Define the state for the OTPInput component
interface State {
  maskDelay: boolean;
  focused: boolean;
}

// Default styles for the component
const styles = StyleSheet.create({
  containerDefault: {},
  cellDefault: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  cellFocusedDefault: {
    borderColor: 'black',
    borderWidth: 2,
  },
  textStyleDefault: {
    color: 'gray',
    fontSize: 24,
  },
  textStyleFocusedDefault: {
    color: 'black',
  },
});

class OTPInput extends Component<Props, State> {
  // Default props
  static defaultProps = {
    value: '',
    codeLength: 4,
    cellSize: 48,
    cellSpacing: 4,
    placeholder: '',
    password: false,
    mask: '*',
    maskDelay: 200,
    keyboardType: 'numeric',
    autoFocus: false,
    restrictToNumbers: false,
    containerStyle: styles.containerDefault,
    cellStyle: styles.cellDefault,
    cellStyleFocused: styles.cellFocusedDefault,
    textStyle: styles.textStyleDefault,
    textStyleFocused: styles.textStyleFocusedDefault,
    editable: true,
    inputProps: {},
    disableFullscreenUI: true,
  };

  // Prop types for validation
  static propTypes = {
    value: PropTypes.string.isRequired,
    codeLength: PropTypes.number,
    cellSize: PropTypes.number,
    cellSpacing: PropTypes.number,
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    mask: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    maskDelay: PropTypes.number,
    password: PropTypes.bool,
    autoFocus: PropTypes.bool,
    restrictToNumbers: PropTypes.bool,
    containerStyle: PropTypes.object,
    cellStyle: PropTypes.object,
    cellStyleFocused: PropTypes.object,
    cellStyleFilled: PropTypes.object,
    textStyle: PropTypes.object,
    textStyleFocused: PropTypes.object,
    keyboardType: PropTypes.string,
    testID: PropTypes.string,
    editable: PropTypes.bool,
    inputProps: PropTypes.object,
    disableFullscreenUI: PropTypes.bool,
    onFulfill: PropTypes.func,
    onChangeText: PropTypes.func,
    onBackspace: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };

  state: State = {
    maskDelay: false,
    focused: false,
  };

  private inputRef: RefObject<TextInput> = createRef();
  private maskTimeout: ReturnType<typeof setTimeout> = setTimeout(() => {}, 0);

  // Clear timeout when component is unmounted
  componentWillUnmount() {
    clearTimeout(this.maskTimeout);
  }

  // Focus the input field
  focus = () => this.inputRef.current?.focus();
  // Blur the input field
  blur = () => this.inputRef.current?.blur();
  // Clear the input field
  clear = () => this.inputRef.current?.clear();

  // Handle code input
  private handleInputCode = (code: string) => {
    const {
      password,
      codeLength = 4,
      onChangeText,
      onFulfill,
      value,
      maskDelay = 200,
    } = this.props;

    // Restrict to numbers if the prop is set
    if (this.props.restrictToNumbers) {
      code = (code.match(/[0-9]/g) || []).join('');
    }

    // Call onChangeText prop if set
    if (onChangeText) {
      onChangeText(code);
    }

    // Call onFulfill prop if the code length is fulfilled
    if (code.length === codeLength && onFulfill) {
      onFulfill(code);
    }

    // Set delay mask if necessary
    const delayMask = Boolean(password && code.length > value.length);
    this.setState({maskDelay: delayMask});

    if (delayMask) {
      clearTimeout(this.maskTimeout);
      this.maskTimeout = setTimeout(() => {
        this.setState({maskDelay: false});
      }, maskDelay);
    }
  };

  // Handle key press events
  private handleKeyPress = (event: any) => {
    if (
      event.nativeEvent.key === 'Backspace' &&
      !this.props.value &&
      this.props.onBackspace
    ) {
      this.props.onBackspace();
    }
  };

  // Handle focus events
  private handleFocus = () => {
    this.setState({focused: true});
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  };

  // Handle blur events
  private handleBlur = () => {
    this.setState({focused: false});
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  };

  // Render the OTP input component
  render() {
    const {
      value,
      codeLength = 4,
      cellSize = 48,
      cellSpacing = 4,
      placeholder,
      password,
      mask,
      autoFocus,
      containerStyle,
      cellStyle,
      cellStyleFocused,
      cellStyleFilled,
      textStyle,
      textStyleFocused,
      keyboardType,
      testID,
      editable,
      inputProps,
      disableFullscreenUI,
    } = this.props;
    const {maskDelay, focused} = this.state;

    return (
      <View
        style={[
          {
            alignItems: 'stretch',
            flexDirection: 'row',
            justifyContent: 'center',
            position: 'relative',
            width: cellSize * codeLength + cellSpacing * (codeLength - 1),
            height: cellSize,
          },
          containerStyle,
        ]}>
        <View
          style={{
            position: 'absolute',
            margin: 0,
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {Array.from({length: codeLength}).map((_, idx) => {
            const cellFocused = focused && idx === value.length;
            const filled = idx < value.length;
            const last = idx === value.length - 1;
            const showMask = filled && password && (!maskDelay || !last);
            const isPlaceholderText = typeof placeholder === 'string';
            const isMaskText = typeof mask === 'string';
            const pinCodeChar = value.charAt(idx);

            let cellText: string | null = null;
            if (filled || placeholder !== null) {
              if (showMask && isMaskText) {
                cellText = mask as string;
              } else if (!filled && isPlaceholderText) {
                cellText = placeholder as string;
              } else if (pinCodeChar) {
                cellText = pinCodeChar;
              }
            }

            const placeholderComponent = !isPlaceholderText
              ? placeholder
              : null;
            const maskComponent = showMask && !isMaskText ? mask : null;
            const isCellText = typeof cellText === 'string';

            return (
              <View
                key={idx}
                style={[
                  {
                    width: cellSize,
                    height: cellSize,
                    marginLeft: cellSpacing / 2,
                    marginRight: cellSpacing / 2,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  cellStyle,
                  cellFocused ? cellStyleFocused : {},
                  filled ? cellStyleFilled : {},
                ]}>
                {isCellText && !maskComponent && (
                  <Text
                    style={[textStyle, cellFocused ? textStyleFocused : {}]}>
                    {cellText}
                  </Text>
                )}
                {!isCellText && !maskComponent && placeholderComponent}
                {isCellText && maskComponent}
              </View>
            );
          })}
        </View>
        <TextInput
          disableFullscreenUI={disableFullscreenUI}
          value={value}
          ref={this.inputRef}
          onChangeText={this.handleInputCode}
          onKeyPress={this.handleKeyPress}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          spellCheck={false}
          autoFocus={autoFocus}
          keyboardType={keyboardType as TextInputProps['keyboardType']}
          numberOfLines={1}
          caretHidden
          maxLength={codeLength}
          selection={{
            start: value.length,
            end: value.length,
          }}
          style={{flex: 1, opacity: 0, textAlign: 'center'}}
          testID={testID}
          editable={editable}
          {...inputProps}
        />
      </View>
    );
  }
}

export default OTPInput;
