import React, { useState } from 'react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: GameSettings) => void;
  currentSettings: GameSettings;
}

interface GameSettings {
  soundEnabled: boolean;
  animationsEnabled: boolean;
  autoAdvance: boolean;
  showHints: boolean;
  theme: 'light' | 'dark' | 'auto';
}

const SettingsModal: React.FC<SettingsModalProps> = ({ 
  isOpen, 
  onClose, 
  onSave, 
  currentSettings 
}) => {
  const [settings, setSettings] = useState<GameSettings>(currentSettings);

  const handleSave = () => {
    onSave(settings);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="space-y-6">
            {/* Sound Settings */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Audio</h3>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.soundEnabled}
                  onChange={(e) => setSettings(prev => ({ ...prev, soundEnabled: e.target.checked }))}
                  className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                />
                <span className="text-gray-700">Enable sound effects</span>
              </label>
            </div>

            {/* Animation Settings */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Visual</h3>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.animationsEnabled}
                  onChange={(e) => setSettings(prev => ({ ...prev, animationsEnabled: e.target.checked }))}
                  className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                />
                <span className="text-gray-700">Enable animations</span>
              </label>
            </div>

            {/* Gameplay Settings */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Gameplay</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={settings.autoAdvance}
                    onChange={(e) => setSettings(prev => ({ ...prev, autoAdvance: e.target.checked }))}
                    className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                  />
                  <span className="text-gray-700">Auto-advance after answer</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={settings.showHints}
                    onChange={(e) => setSettings(prev => ({ ...prev, showHints: e.target.checked }))}
                    className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
                  />
                  <span className="text-gray-700">Always show hints</span>
                </label>
              </div>
            </div>

            {/* Theme Settings */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Theme</h3>
              <div className="space-y-2">
                {(['light', 'dark', 'auto'] as const).map((theme) => (
                  <label key={theme} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="theme"
                      value={theme}
                      checked={settings.theme === theme}
                      onChange={(e) => setSettings(prev => ({ ...prev, theme: e.target.value as 'light' | 'dark' | 'auto' }))}
                      className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-gray-700 capitalize">{theme}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-8">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;

