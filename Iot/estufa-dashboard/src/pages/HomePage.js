import React, { useState, useEffect } from 'react';
import { FaLeaf, FaThermometerHalf, FaTint, FaWater } from 'react-icons/fa';

const HomePage = () => {
  const [userName, setUserName] = useState(''); // Estado para armazenar o nome do usuário

  /**
   * Função para buscar o nome do usuário da API.
   * FUTURAMENTE: Substituir a lógica fictícia por uma chamada real para a API.
   * 
   * Exemplo de integração com API:
   * - Substitua `URL_DA_API` pela URL correta para buscar dados do usuário.
   * - Use o ID do usuário ou token para obter dados específicos.
   * 
   * useEffect(() => {
   *   const fetchUserName = async () => {
   *     try {
   *       const response = await fetch('URL_DA_API/user');
   *       const data = await response.json();
   *       setUserName(data.name); // Ajuste `data.name` de acordo com a resposta da API
   *     } catch (error) {
   *       console.error('Erro ao buscar o nome do usuário:', error);
   *     }
   *   };
   * 
   *   fetchUserName();
   * }, []);
   */

  useEffect(() => {
    // Simulação de nome do usuário para efeito visual
    setUserName('João da Silva');
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start', // Alinha os elementos ao topo (início)
      textAlign: 'justify',
      padding: '1.5rem',
      backgroundColor: '#f4f4f9',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      maxHeight: '75vh', // Limita a altura do contêiner
      overflowY: 'auto', // Adiciona rolagem se o conteúdo ultrapassar a altura
      margin: '20px auto',
    }}>
      <h1 style={{ fontSize: '2rem', color: '#333', marginBottom: '1rem' }}>Bem-vindo, {userName}!</h1>
      
      <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.5', marginBottom: '1.5rem' }}>
        <FaLeaf style={{ marginRight: '0.5rem', color: '#4CAF50' }} />
        Bem-vindo à sua plataforma de monitoramento para estufas inteligentes! Aqui, você acompanha temperatura, umidade do ar e do solo para um cultivo ideal.
      </p>

      <h2 style={{ fontSize: '1.5rem', color: '#333', marginTop: '1rem', marginBottom: '0.5rem' }}>Estufa Inteligente</h2>
      <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.5', marginBottom: '0.5rem' }}>
        <FaThermometerHalf style={{ marginRight: '0.5rem', color: '#FF5733' }} />
        Controla temperatura automaticamente para manter o ambiente ideal.
      </p>
      <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.5', marginBottom: '0.5rem' }}>
        <FaTint style={{ marginRight: '0.5rem', color: '#337AFF' }} />
        Monitora e ajusta a umidade do ar de acordo com as necessidades das plantas.
      </p>
      <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.5', marginBottom: '1rem' }}>
        <FaWater style={{ marginRight: '0.5rem', color: '#33FF57' }} />
        Gerencia a irrigação e a umidade do solo para evitar desperdícios e otimizar o crescimento.
      </p>
    </div>
  );
};

export default HomePage;
