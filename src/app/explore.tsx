import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Platform, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

// ==========================================
// 🎨 PALETA DE CORES (Edite aqui para mudar tudo)
// ==========================================
const PALETTE = {
  background: '#0B0F17',     // Fundo da tela
  cardBackground: '#111827', // Fundo dos cards e contêineres
  cardBorder: '#1F2937',     // Linhas de borda dos cards
  primary: '#0284C7',         // Cor principal (botão e destaque)
  accent: '#38BDF8',          // Título principal e links
  codeText: '#F472B6',        // Texto dos blocos de código
  codeBackground: '#1F2937',  // Fundo dos blocos de código
  textTitle: '#38BDF8',       // Título principal
  textBody: '#D1D5DB',        // Texto padrão
  textMuted: '#9CA3AF',       // Subtítulos e textos secundários
  textWhite: '#FFFFFF',       // Texto do botão
};

export default function TabTwoScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
  };

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
    web: {
      paddingTop: Spacing.six,
      paddingBottom: Spacing.four,
    },
  });

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: PALETTE.background }]}
      contentInset={insets}
      contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}>
      <ThemedView style={[styles.container, { backgroundColor: PALETTE.background }]}>
        
        {/* Bloco de Título / Boas-vindas */}
        <ThemedView style={[styles.titleContainer, { backgroundColor: PALETTE.cardBackground, borderColor: PALETTE.cardBorder }]}>
          <ThemedText style={[styles.mainTitle, { color: PALETTE.textTitle }]} type="subtitle">
            Explore
          </ThemedText>
          <ThemedText style={[styles.centerText, styles.subtitleText, { color: PALETTE.textMuted }]}>
            This starter app includes example{'\n'}code to help you get started.
          </ThemedText>

          <ExternalLink href="https://docs.expo.dev" asChild>
            <Pressable style={({ pressed }) => pressed && styles.pressed}>
              <ThemedView style={[styles.linkButton, { backgroundColor: PALETTE.primary, shadowColor: PALETTE.primary }]}>
                <ThemedText style={[styles.buttonText, { color: PALETTE.textWhite }]}>
                  Expo documentation
                </ThemedText>
                <SymbolView
                  tintColor={PALETTE.textWhite}
                  name={{ ios: 'arrow.up.right.square', android: 'link', web: 'link' }}
                  size={14}
                />
              </ThemedView>
            </Pressable>
          </ExternalLink>
        </ThemedView>

        {/* Lista de Seções / Cards */}
        <ThemedView style={[styles.sectionsWrapper, { backgroundColor: PALETTE.background }]}>
          <ThemedView style={[styles.card, { backgroundColor: PALETTE.cardBackground, borderColor: PALETTE.cardBorder }]}>
            <Collapsible title="File-based routing">
              <ThemedText style={[styles.cardBodyText, { color: PALETTE.textBody }]} type="small">
                This app has two screens:{' '}
                <ThemedText style={[styles.codeText, { color: PALETTE.codeText, backgroundColor: PALETTE.codeBackground }]}>
                  src/app/index.tsx
                </ThemedText>{' '}
                and{' '}
                <ThemedText style={[styles.codeText, { color: PALETTE.codeText, backgroundColor: PALETTE.codeBackground }]}>
                  src/app/explore.tsx
                </ThemedText>
              </ThemedText>
              <ThemedText style={[styles.cardBodyText, { color: PALETTE.textBody }]} type="small">
                The layout file in{' '}
                <ThemedText style={[styles.codeText, { color: PALETTE.codeText, backgroundColor: PALETTE.codeBackground }]}>
                  src/app/_layout.tsx
                </ThemedText>{' '}
                sets up the tab navigator.
              </ThemedText>
              <ExternalLink href="https://docs.expo.dev/router/introduction">
                <ThemedText style={[styles.linkAccent, { color: PALETTE.accent }]}>
                  Learn more →
                </ThemedText>
              </ExternalLink>
            </Collapsible>
          </ThemedView>

          <ThemedView style={[styles.card, { backgroundColor: PALETTE.cardBackground, borderColor: PALETTE.cardBorder }]}>
            <Collapsible title="Android, iOS, and web support">
              <ThemedView style={styles.collapsibleContent}>
                <ThemedText style={[styles.cardBodyText, { color: PALETTE.textBody }]} type="small">
                  You can open this project on Android, iOS, and the web. To open the web version,
                  press <ThemedText style={[styles.boldText, { color: PALETTE.textWhite }]}>w</ThemedText> in the terminal running this project.
                </ThemedText>
                <Image
                  source={require('@/assets/images/tutorial-web.png')}
                  style={styles.imageTutorial}
                />
              </ThemedView>
            </Collapsible>
          </ThemedView>

          <ThemedView style={[styles.card, { backgroundColor: PALETTE.cardBackground, borderColor: PALETTE.cardBorder }]}>
            <Collapsible title="Images">
              <ThemedText style={[styles.cardBodyText, { color: PALETTE.textBody }]} type="small">
                For static images, you can use the{' '}
                <ThemedText style={[styles.codeText, { color: PALETTE.codeText, backgroundColor: PALETTE.codeBackground }]}>
                  @2x
                </ThemedText>{' '}
                and{' '}
                <ThemedText style={[styles.codeText, { color: PALETTE.codeText, backgroundColor: PALETTE.codeBackground }]}>
                  @3x
                </ThemedText>{' '}
                suffixes to provide files for different screen densities.
              </ThemedText>
              <Image source={require('@/assets/images/react-logo.png')} style={styles.imageReact} />
              <ExternalLink href="https://reactnative.dev/docs/images">
                <ThemedText style={[styles.linkAccent, { color: PALETTE.accent }]}>
                  Learn more →
                </ThemedText>
              </ExternalLink>
            </Collapsible>
          </ThemedView>

          <ThemedView style={[styles.card, { backgroundColor: PALETTE.cardBackground, borderColor: PALETTE.cardBorder }]}>
            <Collapsible title="Light and dark mode components">
              <ThemedText style={[styles.cardBodyText, { color: PALETTE.textBody }]} type="small">
                This template has light and dark mode support. The{' '}
                <ThemedText style={[styles.codeText, { color: PALETTE.codeText, backgroundColor: PALETTE.codeBackground }]}>
                  useColorScheme()
                </ThemedText>{' '}
                hook lets you inspect what the user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
              </ThemedText>
              <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                <ThemedText style={[styles.linkAccent, { color: PALETTE.accent }]}>
                  Learn more →
                </ThemedText>
              </ExternalLink>
            </Collapsible>
          </ThemedView>

          <ThemedView style={[styles.card, { backgroundColor: PALETTE.cardBackground, borderColor: PALETTE.cardBorder }]}>
            <Collapsible title="Animations">
              <ThemedText style={[styles.cardBodyText, { color: PALETTE.textBody }]} type="small">
                This template includes an example of an animated component. The{' '}
                <ThemedText style={[styles.codeText, { color: PALETTE.codeText, backgroundColor: PALETTE.codeBackground }]}>
                  src/components/ui/collapsible.tsx
                </ThemedText>{' '}
                component uses the powerful{' '}
                <ThemedText style={[styles.codeText, { color: PALETTE.codeText, backgroundColor: PALETTE.codeBackground }]}>
                  react-native-reanimated
                </ThemedText>{' '}
                library to animate opening this hint.
              </ThemedText>
            </Collapsible>
          </ThemedView>
        </ThemedView>

        {Platform.OS === 'web' && <WebBadge />}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1,
  },
  titleContainer: {
    gap: Spacing.three,
    alignItems: 'center',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.six,
    marginHorizontal: Spacing.four,
    marginTop: Spacing.four,
    borderRadius: 16,
    borderWidth: 1,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: '700',
  },
  subtitleText: {
    fontSize: 14,
    lineHeight: 20,
  },
  centerText: {
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  linkButton: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.five,
    paddingVertical: Spacing.three,
    borderRadius: 24,
    justifyContent: 'center',
    gap: Spacing.two,
    alignItems: 'center',
    elevation: 3,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 14,
  },
  sectionsWrapper: {
    gap: Spacing.four,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: Spacing.six,
  },
  card: {
    borderRadius: 14,
    padding: Spacing.three,
    borderWidth: 1,
  },
  collapsibleContent: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: Spacing.two,
  },
  cardBodyText: {
    lineHeight: 20,
    marginTop: Spacing.two,
  },
  codeText: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontFamily: Platform.select({ ios: 'Courier', default: 'monospace' }),
  },
  boldText: {
    fontWeight: '700',
  },
  linkAccent: {
    fontWeight: '600',
    marginTop: Spacing.two,
  },
  imageTutorial: {
    width: '100%',
    aspectRatio: 296 / 171,
    borderRadius: 10,
    marginTop: Spacing.three,
  },
  imageReact: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginVertical: Spacing.three,
  },
}); 