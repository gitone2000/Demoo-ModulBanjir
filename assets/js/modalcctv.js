function openCCTV(src, camId) {
  const modal = document.getElementById("cctvModal");
  const player = document.getElementById("cctvPlayer");
  const source = player.querySelector("source");
  const camLabel = document.getElementById("modalCamId");

  source.src = src;
  player.load();
  player.play();

  camLabel.textContent = camId;
  modal.style.display = "flex";

  // update timestamp realtime
  updateTimestamp();
  window.timestampInterval = setInterval(updateTimestamp, 1000);
}

function closeCCTV() {
  const modal = document.getElementById("cctvModal");
  const player = document.getElementById("cctvPlayer");

  modal.style.display = "none";
  player.pause();

  clearInterval(window.timestampInterval);
}

function updateTimestamp() {
  const now = new Date();
  const timeStr =
    now.toLocaleString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour12: false,
    }) + " WIB";
  document.getElementById("modalTimestamp").textContent = timeStr;
}
