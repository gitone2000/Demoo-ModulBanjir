function updateTimestamp(id) {
  const el = document.getElementById(id);
  if (!el) return;

  setInterval(() => {
    const now = new Date();
    const jam = String(now.getHours()).padStart(2, "0");
    const menit = String(now.getMinutes()).padStart(2, "0");
    const detik = String(now.getSeconds()).padStart(2, "0");
    const tanggal = now.toLocaleDateString("id-ID");

    el.textContent = `${tanggal} ${jam}:${menit}:${detik}`;
  }, 1000);
}

// panggil untuk cam 1
updateTimestamp("timestamp1");
updateTimestamp("timestamp2");
updateTimestamp("timestamp3");
updateTimestamp("timestamp4");
