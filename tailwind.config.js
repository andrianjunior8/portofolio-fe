extend: {
  animation: {
    'fade-in': 'fadeIn 1s ease-out',
    'fade-up': 'fadeUp 0.8s ease-out',
    'slide-up': 'slideUp 0.6s ease-out',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    fadeUp: {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
    slideUp: {
      '0%': { transform: 'translateY(30px)', opacity: 0 },
      '100%': { transform: 'translateY(0)', opacity: 1 },
    },
  },
}
