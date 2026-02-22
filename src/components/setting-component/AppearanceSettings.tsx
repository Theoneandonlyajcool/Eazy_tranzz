import { Moon, Palette, Sun, TvMinimal } from "lucide-react";

type Theme = "light" | "dark" | "auto";
type FontSize = "small" | "medium" | "large";

interface Props {
  theme: Theme;
  fontSize: FontSize;
  setTheme: (theme: Theme) => void;
  setFontSize: (size: FontSize) => void;
}

const AppearanceSettings: React.FC<Props> = ({
  theme,
  fontSize,
  setTheme,
  setFontSize,
}) => {
  const themes: Theme[] = ["light", "dark", "auto"];
  const sizes: FontSize[] = ["small", "medium", "large"];

  return (
    <div className=" text-foreground rounded-2xl p-6 border border-border transition-colors duration-300">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Appearance Settings</h2>
        <p className="text-muted-foreground">
          Customize your visual experience
        </p>
      </div>

      {/* Theme Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Palette size={18} className="text-muted-foreground" />
          <h3 className="text-lg font-semibold">Theme</h3>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {themes.map((mode) => (
            <button
              key={mode}
              onClick={() => setTheme(mode)}
              className={`px-6 py-6 rounded-lg font-semibold transition-all flex flex-col items-center gap-3
              ${
                theme === mode
                  ? "border-2 border-rose-700"
                  : "border border-border"
              }
              bg-card hover:bg-muted`}
            >
              <span className="text-2xl">
                {mode === "light" ? (
                  <Sun />
                ) : mode === "dark" ? (
                  <Moon />
                ) : (
                  <TvMinimal />
                )}
              </span>

              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Font Size Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Font Size</h3>

        <div className="grid grid-cols-3 gap-4">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setFontSize(size)}
              className={`px-6 py-4 rounded-lg font-semibold transition-all
              ${
                fontSize === size
                  ? "border-2 border-rose-700"
                  : "border border-border"
              }
              bg-card hover:bg-muted`}
            >
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-3 bg-linear-to-b from-[#953E79] to-[#440830] text-white font-semibold rounded-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AppearanceSettings;
