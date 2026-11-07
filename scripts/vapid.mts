// Prints a new VAPID key pair for daily reminders: `npm run vapid`. Put the three lines in .env.local and Vercel.
import { generateVAPIDKeys } from "web-push";

const keys = generateVAPIDKeys();
console.log(`NEXT_PUBLIC_VAPID_PUBLIC_KEY=${keys.publicKey}`);
console.log(`VAPID_PRIVATE_KEY=${keys.privateKey}`);
console.log("VAPID_SUBJECT=mailto:you@example.com   # change to the owner's email");
