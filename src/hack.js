// src/hack.js
// Simuliere einen fortschrittlichen Hack-Vorgang im Matrix-Stil
export function hackMatrix(print) {
  const messages = [
    "[ACCESSING MAINFRAME...]",                 
    "[ENCRYPTION BYPASS INITIATED...]",
    "[CRYPTO-BARRIER BREACHED]",               
    "[LOGGING IN AS ROOT...]",                 
    "[KEYSTREAM ALIGNMENT: OK]",                
    "[TRACING SOURCE... REDIRECTED]",           
    "[KERNEL PATCH ACCEPTED]",                 
    "[DATA LINK ESTABLISHED]",                  
    "[TRINITY: 'I'm inside.']",
    "[DOWNLOADING MATRIX CORE...]",             
    "[MISSION COMPLETE. MATRIX DESTABILIZED]"
  ];

  let stage = 0;
  let percent = 0;
  print("[HACKING MATRIX...]");

  const showProgress = () => {
    if (percent >= 100) {
      clearInterval(progressInterval);
      print("[UPLOADING COMPLETE]");
      print("[ACCESS GRANTED]");
      return;
    }
    percent += Math.floor(Math.random() * 20) + 5;
    if (percent > 100) percent = 100;
    const bars = Math.floor(percent / 10);
    print(
      `[UPLOADING VIRUS ${"#".repeat(bars)}${" ".repeat(10 - bars)}] ${percent}%`
    );
  };

  const initialInterval = setInterval(() => {
    if (stage < messages.length) {
      print(messages[stage++]);
    } else {
      clearInterval(initialInterval);
      progressInterval = setInterval(showProgress, 400);
    }
  }, 500);

  let progressInterval;
}
