import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { styles as mainStyles } from "@/styles/_mainstyle";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Background Image */}
        <ImageBackground
          source={BACKGROUNDIMAGE}
          style={StyleSheet.absoluteFillObject}
          resizeMode="cover"
        />

        {/* Overlay */}
        <View style={mainStyles.overlay}>
          {/* Logo */}
          <Image source={HEROLOGO} />

          {/* Title + Subtitle */}
          <Text style={mainStyles.title}>Find your favorite place here</Text>
          <Text style={mainStyles.subtitle}>The best prices for over 2</Text>
          <Text style={mainStyles.subtitle}>million properties worldwide</Text>
        </View>

        {/* Buttons */}
        <View style={{ position: "absolute", bottom: 40, width: "100%" }}>
          <View style={mainStyles.buttonGroup}>
            <TouchableOpacity
              style={mainStyles.primaryButton}
              onPress={() => router.push("/join")}
            >
              <Text style={mainStyles.primaryButtonText}>Join</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={mainStyles.secondaryButton}
              onPress={() => router.push("/signin")}
            >
              <Text style={mainStyles.secondaryButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          {/* Skip Signin → Go Home */}
          <View style={{ alignItems: "center", paddingVertical: 20 }}>
            <TouchableOpacity onPress={() => router.replace("/(home)")}>
              <Text style={{ color: "white" }}>Continue to home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
