import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

// ==========================================
// 🎨 PALETA DE CORES (Edite aqui para mudar tudo)
// ==========================================
const PALETTE = {
  background: '#09090B',       // Fundo da tela
  cardBackground: '#18181B',   // Fundo do card
  cardBorder: '#27272A',       // Borda do card
  primary: '#8B5CF6',          // Cor de destaque (linha decorativa e loading)
  textTitle: '#F4F4F5',         // Cor do título principal
  textBody: '#D4D4D8',          // Cor do conteúdo (body)
  textHeader: '#A78BFA',        // Texto do cabeçalho "ATIVIDADE REPOSIÇÃO (PDM)"
  textMuted: '#71717A',         // Texto de carregamento
  error: '#EF4444',             // Cor da mensagem de erro
};

type Post = {
  title: string;
  body: string;
};

export default function ConsumoApiScreen() {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        setPost(response.data);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    buscarDados();
  }, []);

  if (loading) {
    return (
      <View style={[styles.center, { backgroundColor: PALETTE.background }]}>
        <ActivityIndicator size="large" color={PALETTE.primary} />
        <Text style={[styles.textoMensagem, { color: PALETTE.textMuted }]}>
          Carregando dados da API...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.center, { backgroundColor: PALETTE.background }]}>
        <Text style={[styles.textoErro, { color: PALETTE.error }]}>
          Ops! Ocorreu um erro ao buscar a publicação.
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: PALETTE.background }]}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: PALETTE.textHeader }]}>
          ATIVIDADE REPOSIÇÃO (PDM)
        </Text>
      </View>

      <View style={styles.content}>
        <View style={[
          styles.card, 
          { 
            backgroundColor: PALETTE.cardBackground, 
            borderColor: PALETTE.cardBorder,
            shadowColor: PALETTE.primary 
          }
        ]}>
          <View style={[styles.linhaDecorativa, { backgroundColor: PALETTE.primary }]} />
          <Text style={[styles.titulo, { color: PALETTE.textTitle }]}>{post?.title}</Text>
          <Text style={[styles.conteudo, { color: PALETTE.textBody }]}>{post?.body}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    width: '100%',
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 60,
  },
  card: {
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 4,
  },
  linhaDecorativa: {
    width: 36,
    height: 4,
    borderRadius: 2,
    marginBottom: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textTransform: 'capitalize',
  },
  conteudo: {
    fontSize: 15,
    lineHeight: 24,
  },
  textoMensagem: {
    marginTop: 12,
    fontSize: 16,
  },
  textoErro: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});