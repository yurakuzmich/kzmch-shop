import 'zone.js/dist/zone'; // Included with Angular CLI.

(window as any).global = window;
(window as any).process = {
  env: { DEBUG: undefined },
};
(window as any).Zone['__zone_symbol__ignoreConsoleErrorUncaughtError'] = true;
