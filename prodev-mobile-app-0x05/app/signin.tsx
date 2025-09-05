import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { styles } from "@/styles/_join";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function Signin() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headerText}>Welcome back</Text>

          <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Sign In</Text>
          </TouchableOpacity>

          <Text style={styles.divider}>Or continue with</Text>

          <View style={styles.socialGroup}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={GOOGLELOGO} style={styles.socialIcon} />
              <Text>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={FACEBOOKLOGO} style={styles.socialIcon} />
              <Text>Facebook</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Footer pinned at bottom */}
        <View style={styles.footerGroup}>
          <Text style={styles.footerText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/join")}>
            <Text style={styles.footerLink}>Join now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
