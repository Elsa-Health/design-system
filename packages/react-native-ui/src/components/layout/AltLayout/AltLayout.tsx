import React from 'react';
import { Pressable, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ElsaColorableIcon, ArrowBackIcon } from '../../../visuals/vectors';
import theme, { DefaultSpacing, DefaultColor } from '../../../theme';
import { RevealContent } from '../../misc';

import type { LayoutProps } from '../Layout';

import { Appbar } from 'react-native-paper';

/**
 * Alternative layout component with different style
 */
export default function AltLayout({
  hideGoBack = false,
  hideHeader = false,
  hideLogo = false,
  navigation,
  title,
  wrapperStyle,
  headerStyle,
  backIcon: BackIcon = ArrowBackIcon,
  testID,
  ...viewProps
}: LayoutProps) {
  const goBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={[{ flex: 1 }, wrapperStyle]}>
      <StatusBar
        animated
        backgroundColor={DefaultColor.primary.dark}
        barStyle={'light-content'}
      />
      {/* header component */}
      {!hideHeader && (
        <Appbar.Header>
          <RevealContent
            show={
              navigation !== undefined && navigation.canGoBack() && !hideGoBack
            }
          >
            <Appbar.BackAction onPress={goBack} />
          </RevealContent>
          <Appbar.Content title={title} />
          <RevealContent show={!hideLogo} style={{ paddingHorizontal: 8 }}>
            {/* @ts-ignore */}
            <ElsaColorableIcon
              color={'#fff'}
              style={{ alignSelf: 'flex-end' }}
              width={24}
              height={24}
            />
          </RevealContent>
        </Appbar.Header>
      )}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Show only show if there is a back navigation, or hide override */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <RevealContent
            show={
              navigation !== undefined && navigation.canGoBack() && !hideGoBack
            }
          >
            <Pressable
              android_ripple={{
                borderless: true,
                radius: 16,
                color: theme.color.primary.light,
              }}
              testID={`${testID}-back-button`}
              style={{ padding: 8, marginRight: 10 }}
              onPress={goBack}
            >
              {/* @ts-ignore */}
              <BackIcon style={{ color: theme.color.primary.dark }} />
            </Pressable>
          </RevealContent>
        </View>

        {/* Elsa's logo */}
      </View>

      {/* Right actions */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'blue',
        }}
      ></View>
      {/* child component */}
      <View
        {...viewProps}
        testID={testID}
        style={[
          {
            flex: 1,
            padding: DefaultSpacing.md,
            paddingTop: 8,
            backgroundColor: '#FFF',
          },
          viewProps.style,
        ]}
      />
    </SafeAreaView>
  );
}
