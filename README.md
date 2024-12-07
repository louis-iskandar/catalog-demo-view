# README
@Author: Louis Iskandar (07.12.2024)

Arbeitsaufwand: 10 Stunden inklusive Frontend


Dieses Projekt wurde mit Angular CLI Version 19.0.4 erstellt.

Die Benutzeroberfläche ist sehr einfach gehalten: Es gibt eine Tabelle und die Möglichkeit, eine Datei hochzuladen.

**Wichtig:**
- Nach dem Hochladen der Datei muss die Tabelle aktualisiert werden, um die Daten anzuzeigen.
- Die API muss zuerst auf Port **9001** gestartet werden. Falls die API auf einem anderen Port läuft, passt die `baseURL`-Variable in der Datei `app.service.ts` entsprechend an.
- Der Sprachwechsel funktioniert nur, wenn die jeweilige Sprache verfügbar ist. Stellt sicher, dass beide Sprachen hochgeladen sind, damit der Sprachwechsel korrekt funktioniert.

Alles wurde wie in der Anforderung beschrieben umgesetzt. Ich wünsche euch viel Spaß damit!

---

## Entwicklungsserver

Um einen lokalen Entwicklungsserver zu starten, führt den folgenden Befehl aus:

    npm install
    npm run start

sobald der Server läuft, öffnet euren Browser und navigiert zu http://localhost:4200/.
Die Anwendung wird automatisch neu geladen, sobald Änderungen an den Quelldateien vorgenommen werden.


Falls du weitere Anpassungen benötigst, lass es mich wissen! 😊
