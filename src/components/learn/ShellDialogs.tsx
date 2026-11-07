"use client";

import { TeluguHelpDialog, TELUGU_HELP_ID } from "@/components/player/TeluguVoiceHelp";
import { getSettings, updateSettings } from "@/lib/settings-store";

/** App-wide dialogs that any screen can open. */
export function ShellDialogs() {
  return <TeluguHelpDialog onDismiss={() => updateSettings({ dismissed: [...new Set([...getSettings().dismissed, TELUGU_HELP_ID])] })} />;
}
