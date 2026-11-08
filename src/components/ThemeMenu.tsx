"use client";

import { Icon, type IconName } from "@/components/ui/icons";
import { Menu, MenuLabel, menuItem } from "@/components/ui/Menu";
import { outlineIconButton } from "@/components/ui/button";
import { Bi } from "@/components/ui/Bi";
import { updateSettings, useSettings } from "@/lib/settings-store";
import { strings, type Bi as BiLabel } from "@/lib/strings";
import type { ThemeChoice } from "@/learning/settings";

const CHOICES: { choice: ThemeChoice; label: BiLabel; icon: IconName }[] = [
  { choice: "light", label: strings.themeDay, icon: "sun" },
  { choice: "dark", label: strings.themeNight, icon: "moon" },
  { choice: "system", label: strings.themeSystem, icon: "phone" },
];

/**
 * The theme as one icon button with a menu (Day, Night, Follow phone), in the header from tablets up and on
 * the public pages. It shows the current choice; Settings has the same choice as buttons.
 */
export function ThemeMenu() {
  const settings = useSettings();
  const current = settings?.theme;
  const shown = CHOICES.find((c) => c.choice === current) ?? CHOICES[2];
  return (
    <Menu
      label={strings.theme.en}
      buttonLabel={strings.theme.en}
      buttonTitle={current ? `${strings.theme.en}: ${shown.label.en}` : strings.theme.en}
      button={<Icon name={shown.icon} className="size-[1.3rem]" />}
      buttonClassName={outlineIconButton}
      disabled={!settings}
      menuClassName="w-60"
    >
      {(close) => (
        <>
          <MenuLabel>
            <Bi label={strings.theme} className="items-start" />
          </MenuLabel>
          {CHOICES.map(({ choice, label, icon }) => (
            <button
              key={choice}
              type="button"
              role="menuitemradio"
              aria-checked={current === choice}
              onClick={() => {
                updateSettings({ theme: choice });
                close();
              }}
              className={menuItem}
            >
              <Icon name={icon} className="size-5" />
              <Bi label={label} className="flex-1 items-start" />
              {current === choice && <Icon name="check" className="size-5 text-brand" />}
            </button>
          ))}
        </>
      )}
    </Menu>
  );
}
