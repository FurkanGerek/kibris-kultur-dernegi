// ... (dosyanın üst kısmı aynı)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      // DEĞİŞİKLİK BURADA: 'http://localhost:3001' kısmını siliyoruz.
      // Sadece '/api/login' yazarak, isteğin kendi bulunduğu domain'e gitmesini sağlıyoruz.
      const response = await fetch('/api/login', { // <-- BU SATIRI GÜNCELLE
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Bir hata oluştu.');
      }

      console.log('Giriş Başarılı:', data);
      localStorage.setItem('token', data.token);
      navigate('/girne');

    } catch (err) {
      setError(err.message);
      console.error('Giriş hatası:', err);
    }
  };

// ... (dosyanın alt kısmı aynı)