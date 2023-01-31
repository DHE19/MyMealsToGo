import React, { useState, useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { Title } from "../components/account.styles";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import {
  ErrorContainer,
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label={"E-mail"}
          value={email}
          textContentType="emailAddress"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label={"Password"}
            value={password}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(u) => setPassword(u)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label={"Password"}
            value={confirmPassword}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(u) => setConfirmPassword(u)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size={"large"}>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size={"large"}>
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, confirmPassword)}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={MD2Colors.blue300} />
          )}
        </Spacer>
        <Spacer size="large">
          <AuthButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};

export default RegisterScreen;
