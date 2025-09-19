import React, { useEffect } from 'react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Notification: React.FC<NotificationProps> = ({ 
  message, 
  type, 
  isVisible, 
  onClose, 
  duration = 3000 
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const typeStyles = {
    success: 'bg-success-100 border-success-500 text-success-700',
    error: 'bg-error-100 border-error-500 text-error-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700',
    warning: 'bg-warning-100 border-warning-500 text-warning-700'
  };

  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️',
    warning: '⚠️'
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className={`max-w-sm p-4 rounded-lg border-2 shadow-lg ${typeStyles[type]}`}>
        <div className="flex items-center space-x-3">
          <span className="text-xl">{icons[type]}</span>
          <span className="flex-1 font-medium">{message}</span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;

