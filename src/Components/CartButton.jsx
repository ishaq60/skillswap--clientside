import { useState, useEffect } from 'react';
import { ShoppingCart, Check } from 'lucide-react';

export default function CartButton() {
  const [cartState, setCartState] = useState('idle'); // idle, adding, success
  
  // Handle click on cart button
  const handleCartClick = () => {
    if (cartState !== 'idle') return;
    
    setCartState('adding');
    
    // Simulate adding to cart process
    setTimeout(() => {
      setCartState('success');
      
      // Reset back to idle after showing success
      setTimeout(() => {
        setCartState('idle');
      }, 2000);
    }, 1000);
  };
  
  return (
    <div className="flex justify-center items-center p-4">
      <button 
        onClick={handleCartClick}
        className={`
          relative overflow-hidden rounded-full px-6 py-3 text-white font-medium
          transition-all duration-300 ease-in-out transform 
          cursor-pointer flex items-center justify-center
          shadow-md hover:shadow-lg
          ${cartState === 'idle' ? 'bg-gradient-to-br from-blue-500 to-blue-700' : ''}
          ${cartState === 'adding' ? 'bg-gradient-to-br from-blue-500 to-blue-700 opacity-80 pointer-events-none' : ''}
          ${cartState === 'success' ? 'bg-gradient-to-br from-green-500 to-green-700' : ''}
        `}
      >
        <span className={`inline-flex items-center ${cartState === 'success' ? 'animate-bounce' : ''}`}>
          {cartState === 'success' ? (
            <Check className="mr-2 h-5 w-5" />
          ) : (
            <ShoppingCart className="mr-2 h-5 w-5" />
          )}
        </span>
        
        <span className="transition-all duration-300 ease-in-out">
          {cartState === 'success' ? 'Added!' : 'Add to Cart'}
        </span>
        
        {/* Progress bar */}
        {cartState === 'adding' && (
          <div className="absolute bottom-0 left-0 h-1 bg-white bg-opacity-80 animate-[progress_1s_ease-in-out]"></div>
        )}
      </button>
    </div>
  );
}