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
    <div className="bg-white dark:bg-slate-900 dark:text-white text-foreground rounded-2xl p-4 sm:p-6 border border-border transition-colors duration-300">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold">Appearance Settings</h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Customize your visual experience
        </p>
      </div>

      {/* Theme Section */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Palette
            size={16}
            className="sm:w-[18px] sm:h-[18px] text-muted-foreground"
          />
          <h3 className="text-base sm:text-lg font-semibold">Theme</h3>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4">
          {themes.map((mode) => (
            <button
              key={mode}
              onClick={() => setTheme(mode)}
              className={`px-3 sm:px-6 py-4 sm:py-6 rounded-lg font-semibold transition-all flex flex-col items-center gap-2 sm:gap-3
              ${
                theme === mode
                  ? "border-2 border-rose-700"
                  : "border border-border"
              }
              bg-card hover:bg-muted active:scale-95 touch-manipulation`}
              aria-pressed={theme === mode}
            >
              <span className="text-xl sm:text-2xl">
                {mode === "light" ? (
                  <Sun className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : mode === "dark" ? (
                  <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <TvMinimal className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </span>

              <span className="text-xs sm:text-sm capitalize">{mode}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Font Size Section */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
          Font Size
        </h3>

        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setFontSize(size)}
              className={`px-3 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all
              ${
                fontSize === size
                  ? "border-2 border-rose-700"
                  : "border border-border"
              }
              bg-card hover:bg-muted active:scale-95 touch-manipulation text-xs sm:text-sm capitalize
              ${
                size === "small"
                  ? "text-sm sm:text-base"
                  : size === "medium"
                    ? "text-base sm:text-lg"
                    : "text-lg sm:text-xl"
              }`}
              aria-pressed={fontSize === size}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Optional: Preview text to show font size effect */}
      <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-muted rounded-lg">
        <p
          className={`text-muted-foreground
          ${
            fontSize === "small"
              ? "text-xs sm:text-sm"
              : fontSize === "medium"
                ? "text-sm sm:text-base"
                : "text-base sm:text-lg"
          }`}
        >
          Preview: This is how your text will appear
        </p>
      </div>
    </div>
  );
};

export default AppearanceSettings;
