const StorageKeys = {
  formData: "modulAjarGeneratorFormData",
  history: "modulAjarGeneratorHistory",
};

function loadAppData() {
  const raw = localStorage.getItem(StorageKeys.formData);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveAppData(data) {
  localStorage.setItem(StorageKeys.formData, JSON.stringify(data));
}

function loadHistory() {
  const raw = localStorage.getItem(StorageKeys.history);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function addHistoryEntry(entry) {
  const history = loadHistory();
  history.push(entry);
  localStorage.setItem(StorageKeys.history, JSON.stringify(history));
}

function getDashboardStats() {
  const history = loadHistory();
  const latest = history.length ? history[history.length - 1] : null;
  return {
    totalModules: history.length,
    lastSubject: latest ? latest.subject : "-",
    lastMaterial: latest ? latest.material : "-",
    lastGeneratedAt: latest ? latest.createdAt : "-",
  };
}
