import React, { useEffect, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import PinViewStyle from "./PinViewStyle.js"

const ViewButton = ({
  activeOpacity,
  onButtonPress,
  buttonSize = 89,
  text,
  customComponent,
  customViewStyle,
  accessible,
  accessibilityLabel,
  disabled,
  customTextStyle,
  customRightButtonViewStyle,
}) => {
  return (
    <TouchableOpacity
      accessible={accessible}
      accessibilityRole="keyboardkey"
      accessibilityLabel={customComponent !== undefined ? accessibilityLabel : text}
      activeOpacity={activeOpacity}
      disabled={disabled}
      style={PinViewStyle.buttonContainer}
      onPress={onButtonPress}>
      <View
        style={[
          PinViewStyle.buttonView,
          customViewStyle,
          !customComponent && { borderWidth: 0, borderBottomColor: '#fff', borderBottomWidth:1 },
        ]}>
        {customComponent ? (
          <View style={[customRightButtonViewStyle, {borderColor:'tranparent', marginTop: 5}]}>
          {customComponent}
          </View>
        ) : (
          <Text style={[PinViewStyle.buttonText, customTextStyle]}>{text}</Text>
        )}
      </View>
    </TouchableOpacity>
  )
}

const ViewInput = ({
  showInputText = true,
  inputTextStyle,
  size = 61,
  customStyle,
  text,
}) => {
  if (showInputText) {
    return (
      <View
        style={[
          PinViewStyle.inputView,
          {
            shadowOffset:{  width: 2,  height: 2,  },
            shadowColor: '#000',
            shadowOpacity: 0.8, 
          }
        ]}>
        <Text style={[PinViewStyle.inputText, {color: 'blue'}]}>{text}</Text>
      </View>
    )
  } else {
    return (
      <View
        style={[
          PinViewStyle.inputView,
          customStyle,
          { width: size, height: size, borderRadius: 6, backgroundColor: '#fff' },
        ]}
      />
    )
  }
}

const ViewHolder = () => {
  return <View style={PinViewStyle.buttonContainer} />
}

const PinView = React.forwardRef(
  (
    {
      buttonTextByKey,
      accessible,
      style,
      onButtonPress,
      onValueChange,
      buttonAreaStyle,
      inputAreaStyle,
      inputViewStyle,
      activeOpacity,
      pinLength,
      buttonSize,
      buttonViewStyle,
      buttonTextStyle ,
      inputViewEmptyStyle,
      inputViewFilledStyle,
      showInputText,
      inputTextStyle,
      inputSize,
      disabled,
      customLeftButton,
      customRightButton,
      customRightAccessibilityLabel,
      customLeftAccessibilityLabel,
      customLeftButtonViewStyle,
      customRightButtonViewStyle,
      customLeftButtonDisabled,
      customRightButtonDisabled,
      resendStyle,
      resendText,
      resendButtonSelection,
    },
    ref
  ) => {
    const [input, setInput] = useState("")
    ref.current = {
      clear: () => {
        if (input.length > 0) {
          setInput(input.slice(0, -1))
        }
      },
      clearAll: () => {
        if (input.length > 0) {
          setInput("")
        }
      },
    }

    const clear = () => {
      if (input.length > 0) {
        setInput(input.slice(0, -1))
      }
    }

    const onButtonPressHandle = (key, value) => {
      onButtonPress(key)
      if (input.length < pinLength) {
        setInput(input + "" + value)
      }
    }

    useEffect(() => {
      if (onValueChange!==undefined){
         onValueChange(input)
      }
    }, [input])


    return (
      <View style={[PinViewStyle.pinView, style]}>
        <View style={{alignItems: 'center',justifyContent:'center'}}>
        <View style={[PinViewStyle.inputContainer, inputAreaStyle]}>
          {Array.apply(null, { length: pinLength }).map((e, i) => (
            <ViewInput
              inputTextStyle={inputTextStyle}
              showInputText={showInputText}
              inputEmptyStyle={inputViewEmptyStyle}
              inputFilledStyle={inputViewFilledStyle}
              text={input[i]}
              customStyle={inputViewStyle}
              size={inputSize}
              key={"input-view-" + i}
            />
          ))}
        </View>
        <TouchableOpacity onPress={resendButtonSelection}>
        <Text style={resendStyle}>{resendText}</Text>
        </TouchableOpacity>
        </View>
        <View style={[PinViewStyle.buttonAreaContainer]}>
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("one", "1")}
            buttonSize={buttonSize}
            text={buttonTextByKey.one}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("two", "2")}
            buttonSize={buttonSize}
            text={buttonTextByKey.two}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("three", "3")}
            buttonSize={buttonSize}
            text={buttonTextByKey.three}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("four", "4")}
            buttonSize={buttonSize}
            text={buttonTextByKey.four}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("five", "5")}
            buttonSize={buttonSize}
            text={buttonTextByKey.five}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("six", "6")}
            buttonSize={buttonSize}
            text={buttonTextByKey.six}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("seven", "7")}
            buttonSize={buttonSize}
            text={buttonTextByKey.seven}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("eight", "8")}
            buttonSize={buttonSize}
            text={buttonTextByKey.eight}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("nine", "9")}
            buttonSize={buttonSize}
            text={buttonTextByKey.nine}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          {customLeftButton !== undefined ? (
            <ViewButton
              disabled={customLeftButtonDisabled}
              accessible={accessible}
              activeOpacity={activeOpacity}
              accessibilityLabel={customLeftAccessibilityLabel}
              onButtonPress={() => onButtonPress("custom_left")}
              customViewStyle={customLeftButtonViewStyle}
              customComponent={customLeftButton}
            />
          ) : (
            <ViewHolder />
          )}
          <ViewButton
            disabled={disabled}
            accessible={accessible}
            activeOpacity={activeOpacity}
            onButtonPress={() => onButtonPressHandle("zero", "0")}
            buttonSize={buttonSize}
            text={buttonTextByKey.zero}
            customTextStyle={buttonTextStyle}
            customViewStyle={buttonViewStyle}
          />
          {customRightButton !== undefined ? (
            <ViewButton
              disabled={customRightButtonDisabled}
              accessible={accessible}
              activeOpacity={activeOpacity}
              accessibilityLabel={customRightAccessibilityLabel}
              onButtonPress={() => onButtonPress("custom_left")}
              customViewStyle={customRightButtonViewStyle}
              customComponent={customRightButton}
            />
          ) : (
            <ViewHolder />
          )}
        </View>
      </View>
    )
  }
)

PinView.defaultProps = {
  buttonTextByKey: {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    zero: "0",
  },
  accessible: false,
  onButtonPress: () => {},
  inputTextStyle : { color: "#FFF" },
  buttonAreaStyle : { marginVertical: 12 },
  inputAreaStyle : { marginVertical: 12 },
  activeOpacity :0.9,
  buttonTextStyle : { color: "#FFF", fontSize: 30 },
  customRightAccessibilityLabel : "right",
  customLeftAccessibilityLabel : "left",
  disabled: false,
  customLeftButtonDisabled: false,
  customRightButtonDisabled: false,
}
export default PinView
