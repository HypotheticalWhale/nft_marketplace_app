import { TouchableOpacity, View, Text,Image, Touchable } from "react-native";
import { COLORS,SIZES,FONTS,SHADOWS } from "../constants";
export const CircleButton = ({imgUrl,handlePress,...props}) => {
  return (
      <TouchableOpacity style={{
          width: 40,
          height: 40,
          backgroundColor: COLORS.white,
          position: 'absolute',
          borderRadius: SIZES.large,
          alignItems: 'center',
          justifyContent: 'center',
          ...SHADOWS.light,
          ...props,
      }} onPress={handlePress}>
          <Image source={imgUrl} resizeMode="contain" style={{width:24,width:24}} />
    </TouchableOpacity>
  )
}


export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};