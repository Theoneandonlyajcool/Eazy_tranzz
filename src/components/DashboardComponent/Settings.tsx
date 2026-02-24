import { useTheme } from "@/lib/ThemeContext";
import AppearanceSettings from "../setting-component/AppearanceSettings";
import GeneralSettings from "../setting-component/GeneralSettings";
import SecuritySettings from "../setting-component/SecuritySettings";

const SettingsPage = () => {
  const { theme, setTheme, fontSize, setFontSize } = useTheme();

  return (
    <div className="min-h-screen text-black bg-white dark:bg-linear-to-b from-[#1A1A2E] to-[#0A0A0F] dark:text-white rounded-2xl p-6">
      <div className="mx-auto space-y-8">
        <GeneralSettings />

        <SecuritySettings />

        <AppearanceSettings
          theme={theme}
          setTheme={setTheme}
          fontSize={fontSize}
          setFontSize={setFontSize}
        />
      </div>
    </div>
  );
};

export default SettingsPage;
