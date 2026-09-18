(function () {
  "use strict";

  /* ---------- SVG illustrations ---------- */
  const I = {
    line: 'stroke="var(--ink)" fill="none" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"',
    acc: 'stroke="var(--sage)" fill="none" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"',
    accF: 'fill="var(--sage)"',
  };
  const svgs = {
    chin: `<svg viewBox="0 0 120 96">
      <g ${I.line} opacity="0.28">
        <circle cx="78" cy="34" r="15"/><path d="M74 49 q4 8 -2 14"/>
      </g>
      <g ${I.line}>
        <circle cx="54" cy="34" r="15"/>
        <path d="M54 49 v18 M40 63 q14 8 28 0"/>
      </g>
      <path ${I.acc} d="M84 30 h-20"/><path ${I.acc} d="M70 24 l-8 6 8 6"/>
    </svg>`,
    wall: `<svg viewBox="0 0 120 96">
      <line x1="20" y1="8" x2="20" y2="88" ${I.line} opacity="0.4"/>
      <g ${I.line}>
        <circle cx="40" cy="24" r="10"/>
        <path d="M40 34 v30 M30 84 h20 M30 64 h20"/>
        <path d="M40 44 l-14 -8 M40 44 l14 -8"/>
      </g>
      <path ${I.acc} d="M28 34 l-4 -12 M52 34 l4 -12"/>
      <path ${I.accF} d="M24 22 l-4 6 h8 z"/><path ${I.accF} d="M56 22 l4 6 h-8 z"/>
    </svg>`,
    chest: `<svg viewBox="0 0 120 96">
      <line x1="88" y1="8" x2="88" y2="88" ${I.line} opacity="0.4"/>
      <g ${I.line}>
        <circle cx="52" cy="26" r="10"/>
        <path d="M52 36 v26 M52 62 l-10 22 M52 62 l6 22"/>
        <path d="M52 44 l24 -6 M76 38 v10"/>
      </g>
      <path ${I.acc} d="M40 70 h-18"/><path ${I.accF} d="M22 64 l-8 6 8 6 z"/>
    </svg>`,
    scap: `<svg viewBox="0 0 120 96">
      <g ${I.line}>
        <ellipse cx="60" cy="72" rx="34" ry="9"/>
        <circle cx="60" cy="34" r="11"/>
        <path d="M46 58 l-14 4 M74 58 l14 4"/>
        <path d="M50 50 l-10 12 M70 50 l10 12"/>
      </g>
      <path ${I.acc} d="M40 40 h14 M80 40 h-14"/>
      <path ${I.accF} d="M56 34 l-6 6 6 6 z"/><path ${I.accF} d="M64 34 l6 6 -6 6 z"/>
    </svg>`,
    tspine: `<svg viewBox="0 0 120 96">
      <line x1="12" y1="82" x2="108" y2="82" ${I.line} opacity="0.4"/>
      <ellipse cx="52" cy="74" rx="9" ry="7" ${I.line}/>
      <g ${I.line}>
        <path d="M28 66 q24 -22 44 -2"/>
        <circle cx="26" cy="60" r="9"/>
        <path d="M22 54 q-8 -8 -4 -18"/>
        <path d="M70 62 q10 4 18 -2"/>
      </g>
      <path ${I.acc} d="M44 44 q10 -8 20 0"/>
    </svg>`,
    trap: `<svg viewBox="0 0 120 96">
      <g ${I.line}>
        <circle cx="54" cy="30" r="12" transform="rotate(-18 54 30)"/>
        <path d="M54 42 v26 M40 84 h28 M54 68 l-10 16 M54 68 l10 16"/>
        <path d="M60 20 q14 -2 16 8"/>
      </g>
      <path ${I.acc} d="M44 18 q-10 6 -6 16"/>
      <path ${I.accF} d="M36 30 l2 8 6 -4 z"/>
    </svg>`,
  };

  /* ---------- Exercises ---------- */
  const EXERCISES = [
    {
      id: "chin",
      name: "Nackenretraktion",
      dur: 2,
      cue: "Kräftigt die tiefen Halsbeuger",
      steps: [
        "Sitz oder steh aufrecht, Blick geradeaus.",
        "Zieh das Kinn gerade nach hinten – als würdest du bewusst ein Doppelkinn machen. Nicht nach unten nicken.",
        "5 Sekunden halten, dann locker lassen. 10 Wiederholungen.",
      ],
    },
    {
      id: "trap",
      name: "Nacken-Seitdehnung",
      dur: 2,
      cue: "Entspannt den überaktiven oberen Trapez",
      steps: [
        "Aufrecht sitzen. Kopf langsam zur rechten Schulter neigen.",
        "Rechte Hand leicht auf den Kopf legen, ohne zu ziehen. 30 Sek halten.",
        "Seite wechseln.",
      ],
    },
    {
      id: "wall",
      name: "Wandengel",
      dur: 2,
      cue: "Aktiviert unteren Trapez & Schulterblätter",
      steps: [
        "Rücken, Kopf und Gesäß an die Wand, Füße etwas davor.",
        'Arme an die Wand in ein „W" (Ellbogen unten).',
        'Langsam nach oben zu einem „Y" schieben, Handrücken bleibt an der Wand, dann zurück.',
        "10 langsame Wiederholungen.",
      ],
    },
    {
      id: "chest",
      name: "Brustöffnung im Türrahmen",
      dur: 2,
      cue: "Löst die verkürzte Brustmuskulatur",
      steps: [
        "In einen Türrahmen stellen, Unterarme an den Rahmen (Ellbogen ca. 90°).",
        "Kleiner Schritt nach vorne, bis du die Dehnung in der Brust spürst.",
        "30–45 Sekunden ruhig halten, 2× wiederholen.",
      ],
    },
    {
      id: "scap",
      name: "Schulterblatt-Aktivierung",
      dur: 2,
      cue: "Kräftigt Rhomboiden & hintere Schulter",
      steps: [
        'Auf den Bauch legen, Stirn zum Boden, Arme im „W" neben dem Körper.',
        "Schulterblätter zusammenziehen und die Arme leicht vom Boden heben.",
        "3 Sekunden halten, 10 Wiederholungen.",
      ],
    },
    {
      id: "tspine",
      name: "Brustwirbelsäulen-Streckung",
      dur: 2,
      cue: "Mobilisiert den runden oberen Rücken",
      steps: [
        "Ein Handtuch fest zusammenrollen und quer unter den oberen Rücken legen.",
        "Rücklings darüberlegen, Hände hinter dem Kopf, den oberen Rücken sanft über die Rolle strecken.",
        "Ruhig atmen, 1–2 Minuten.",
      ],
    },
  ];
  const TOTAL = EXERCISES.length;
  const KEY = "aufrichten-tracker-v1";
  const EXPORT_FORMAT = "aufrichten-progress";
  const EXPORT_VERSION = 1;
  const storageWarn = document.getElementById("storageWarn");

  /* ---------- Storage ---------- */
  let storageOK = true;
  function showStorageWarning() {
    storageOK = false;
    storageWarn.hidden = false;
  }
  function loadAll() {
    try {
      const raw = localStorage.getItem(KEY);
      const data = raw ? JSON.parse(raw) : {};
      return data && typeof data === "object" && !Array.isArray(data)
        ? data
        : {};
    } catch (e) {
      showStorageWarning();
      return {};
    }
  }
  function saveAll(data) {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      showStorageWarning();
    }
  }
  // Probe storage availability up front.
  try {
    localStorage.setItem("__t", "1");
    localStorage.removeItem("__t");
  } catch (e) {
    storageOK = false;
  }

  let store = loadAll();
  if (!storageOK) showStorageWarning();

  /* ---------- Date helpers ---------- */
  function keyOf(d) {
    return (
      d.getFullYear() +
      "-" +
      String(d.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(d.getDate()).padStart(2, "0")
    );
  }
  const TODAY = new Date();
  const TODAY_KEY = keyOf(TODAY);
  const MONTHS = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];
  const WDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

  function checkedFor(k) {
    const saved =
      store[k] && Array.isArray(store[k].checked) ? store[k].checked : [];
    return saved.filter((id) => EXERCISES.some((e) => e.id === id));
  }
  function exportableDays() {
    return Object.fromEntries(
      Object.keys(store)
        .filter((key) => /^\d{4}-\d{2}-\d{2}$/.test(key))
        .map((key) => [key, [...new Set(checkedFor(key))]])
        .filter(([, checked]) => checked.length > 0),
    );
  }
  function setTransferStatus(message) {
    document.getElementById("transferStatus").textContent = message;
  }
  function downloadExport(contents, filename) {
    const blob = new Blob([contents], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function shareExport(contents, filename) {
    if (
      typeof File !== "function" ||
      typeof navigator.share !== "function" ||
      typeof navigator.canShare !== "function"
    ) {
      return false;
    }

    const file = new File([contents], filename, { type: "application/json" });
    let canShareFile = false;
    try {
      canShareFile = navigator.canShare({ files: [file] });
    } catch (error) {
      return false;
    }
    if (!canShareFile) return false;

    try {
      await navigator.share({ files: [file] });
      setTransferStatus("Exportdatei wurde bereitgestellt.");
      return true;
    } catch (error) {
      if (error?.name === "AbortError") return true;
      return false;
    }
  }

  async function exportProgress() {
    try {
      const filename = `aufrichten-fortschritt-${TODAY_KEY}.json`;
      const payload = {
        format: EXPORT_FORMAT,
        version: EXPORT_VERSION,
        exportedAt: new Date().toISOString(),
        days: exportableDays(),
      };
      const contents = JSON.stringify(payload, null, 2);

      if (await shareExport(contents, filename)) return;

      downloadExport(contents, filename);
      setTransferStatus("Exportdatei wurde heruntergeladen.");
    } catch (error) {
      setTransferStatus("Die Exportdatei konnte nicht erstellt werden.");
    }
  }
  function validImportedDays(payload) {
    if (
      !payload ||
      payload.format !== EXPORT_FORMAT ||
      payload.version !== EXPORT_VERSION ||
      !payload.days ||
      typeof payload.days !== "object" ||
      Array.isArray(payload.days)
    ) {
      throw new Error("invalid-format");
    }

    const validIds = new Set(EXERCISES.map((exercise) => exercise.id));
    const days = {};
    Object.entries(payload.days).forEach(([date, checked]) => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Array.isArray(checked)) return;
      const ids = [...new Set(checked.filter((id) => validIds.has(id)))];
      if (ids.length > 0) days[date] = ids;
    });
    return days;
  }

  function mergeImportedDays(days) {
    let addedExercises = 0;
    Object.entries(days).forEach(([date, importedIds]) => {
      const existingIds = checkedFor(date);
      const mergedIds = [...new Set([...existingIds, ...importedIds])];
      addedExercises += mergedIds.length - existingIds.length;
      store[date] = { checked: mergedIds };
    });
    saveAll(store);
    return addedExercises;
  }

  async function importProgress(file) {
    if (!file) return;
    if (file.size > 1024 * 1024) {
      setTransferStatus("Die Importdatei ist zu groß.");
      return;
    }

    try {
      const payload = JSON.parse(await file.text());
      const days = validImportedDays(payload);
      const dayCount = Object.keys(days).length;
      if (dayCount === 0) throw new Error("no-days");
      const addedExercises = mergeImportedDays(days);
      buildToday();
      if (!viewCalEl.hidden) buildCalendar();
      setTransferStatus(
        addedExercises > 0
          ? `${addedExercises} neue Übung${addedExercises === 1 ? "" : "en"} aus ${dayCount} Tag${dayCount === 1 ? "" : "en"} ergänzt.`
          : "Die importierten Daten waren bereits vollständig vorhanden.",
      );
    } catch (error) {
      setTransferStatus("Diese Datei enthält keine gültigen Aufrichten-Daten.");
    }
  }

  function minutesFor(k) {
    return checkedFor(k).reduce((s, id) => {
      const e = EXERCISES.find((x) => x.id === id);
      return s + (e ? e.dur : 0);
    }, 0);
  }
  /* ---------- Today view ---------- */
  const cardsEl = document.getElementById("cards");
  const spineEl = document.getElementById("spine");
  const tick =
    '<svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>';

  function buildToday() {
    // date label
    const opts = { weekday: "long", day: "numeric", month: "long" };
    document.getElementById("todayDate").textContent = TODAY.toLocaleDateString(
      "de-DE",
      opts,
    );

    // spine
    spineEl.innerHTML = "";
    for (let i = 0; i < TOTAL; i++) {
      const v = document.createElement("div");
      v.className = "vert";
      v.dataset.i = i;
      spineEl.appendChild(v);
    }
    // cards
    cardsEl.innerHTML = "";
    EXERCISES.forEach((e, idx) => {
      const done = checkedFor(TODAY_KEY).includes(e.id);
      const card = document.createElement("article");
      const detailId = `exercise-detail-${e.id}`;
      card.className = "card" + (done ? " done" : "");
      card.innerHTML =
        '<div class="card-head">' +
        '<div class="illo">' +
        svgs[e.id] +
        "</div>" +
        '<div class="titles">' +
        '<h2 class="ex-name">' +
        e.name +
        "</h2>" +
        '<p class="ex-cue">' +
        e.cue +
        "</p>" +
        '<span class="ex-dur">' +
        e.dur +
        " Min</span>" +
        "</div>" +
        '<button class="check" type="button" role="checkbox" aria-checked="' +
        done +
        '" aria-label="' +
        e.name +
        ' erledigt">' +
        tick +
        "</button>" +
        "</div>" +
        '<button class="expand-hint" type="button" aria-expanded="false" aria-controls="' +
        detailId +
        '">Anleitung <svg class="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--sage-deep)" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button>' +
        '<div class="detail" id="' +
        detailId +
        '" aria-hidden="true"><div class="steps"><ol>' +
        e.steps.map((s) => "<li>" + s + "</li>").join("") +
        "</ol></div></div>";

      const checkButton = card.querySelector(".check");
      checkButton.addEventListener("click", () => toggle(e.id));

      const expandButton = card.querySelector(".expand-hint");
      const detail = card.querySelector(".detail");
      expandButton.addEventListener("click", () => {
        const isOpen = card.classList.toggle("open");
        expandButton.setAttribute("aria-expanded", String(isOpen));
        detail.setAttribute("aria-hidden", String(!isOpen));
      });

      cardsEl.appendChild(card);
    });
    refreshSpine();
  }

  function refreshSpine() {
    const n = checkedFor(TODAY_KEY).length;
    [...spineEl.children].forEach((v, i) => v.classList.toggle("on", i < n));
    document.getElementById("spineCount").textContent = n + "/" + TOTAL;
    document.getElementById("spineMin").textContent =
      minutesFor(TODAY_KEY) + " Min";
    document.getElementById("doneBanner").classList.toggle("show", n >= TOTAL);
  }

  function toggle(id) {
    const arr = checkedFor(TODAY_KEY).slice();
    const i = arr.indexOf(id);
    if (i >= 0) arr.splice(i, 1);
    else arr.push(id);
    store[TODAY_KEY] = { checked: arr };
    if (arr.length === 0) delete store[TODAY_KEY];
    saveAll(store);
    // update the one card + spine without full rebuild
    const idx = EXERCISES.findIndex((x) => x.id === id);
    const card = cardsEl.children[idx];
    const nowDone = arr.includes(id);
    card.classList.toggle("done", nowDone);
    card.querySelector(".check").setAttribute("aria-checked", nowDone);
    refreshSpine();
  }

  /* ---------- Calendar view ---------- */
  let viewYear = TODAY.getFullYear();
  let viewMonth = TODAY.getMonth();

  const wdEl = document.getElementById("weekdays");
  WDAYS.forEach((w) => {
    const d = document.createElement("div");
    d.className = "wd";
    d.textContent = w;
    wdEl.appendChild(d);
  });

  /* ---------- Milestones ---------- */
  const MILESTONES = [
    {
      day: 7,
      when: "1 Woche",
      label: "Routine kennenlernen",
      desc: "Sieben Tage bewusst bewegt",
    },
    {
      day: 14,
      when: "2 Wochen",
      label: "Regelmäßigkeit stärken",
      desc: "Die Routine wird vertrauter",
    },
    {
      day: 28,
      when: "4 Wochen",
      label: "Bewegung bewusster",
      desc: "Vier Wochen aufmerksam drangeblieben",
    },
    {
      day: 42,
      when: "6 Wochen",
      label: "Routine festigen",
      desc: "Übungen sicherer und ruhiger ausführen",
    },
    {
      day: 90,
      when: "3 Monate",
      label: "Dranbleiben",
      desc: "Drei Monate Zeit für die eigene Haltung",
    },
  ];
  const TODAY0 = new Date(
    TODAY.getFullYear(),
    TODAY.getMonth(),
    TODAY.getDate(),
  );
  let msStarted = false;

  function startDay() {
    const keys = Object.keys(store)
      .filter((k) => checkedFor(k).length > 0)
      .sort();
    if (keys.length) {
      msStarted = true;
      const p = keys[0].split("-");
      return new Date(+p[0], +p[1] - 1, +p[2]);
    }
    msStarted = false;
    return new Date(TODAY0);
  }
  function milestoneDate(m) {
    const d = new Date(startDay());
    d.setDate(d.getDate() + m.day - 1);
    return d;
  }
  function milestoneMap() {
    const map = {};
    MILESTONES.forEach((m) => {
      map[keyOf(milestoneDate(m))] = m;
    });
    return map;
  }

  // progress ring colour: grey -> yellow -> green, muted to match the palette
  function fillColor(frac) {
    const grey = [168, 172, 160],
      yellow = [212, 176, 88],
      green = [93, 161, 110];
    const mix = (a, b, t) =>
      "rgb(" +
      Math.round(a[0] + (b[0] - a[0]) * t) +
      "," +
      Math.round(a[1] + (b[1] - a[1]) * t) +
      "," +
      Math.round(a[2] + (b[2] - a[2]) * t) +
      ")";
    if (frac <= 0) return "transparent";
    if (frac <= 0.5) return mix(grey, yellow, frac / 0.5);
    return mix(yellow, green, (frac - 0.5) / 0.5);
  }

  function buildCalendar() {
    document.getElementById("calTitle").textContent =
      MONTHS[viewMonth] + " " + viewYear;
    const daysEl = document.getElementById("days");
    daysEl.innerHTML = "";
    const first = new Date(viewYear, viewMonth, 1);
    let lead = (first.getDay() + 6) % 7; // Monday = 0
    const dim = new Date(viewYear, viewMonth + 1, 0).getDate();
    const msMap = milestoneMap();
    for (let i = 0; i < lead; i++) {
      const c = document.createElement("div");
      c.className = "day empty";
      daysEl.appendChild(c);
    }
    for (let d = 1; d <= dim; d++) {
      const date = new Date(viewYear, viewMonth, d);
      const k = keyOf(date);
      const isFuture = date > TODAY && k !== TODAY_KEY;
      const ms = msMap[k];
      const done = checkedFor(k).length;
      const frac = done / TOTAL;
      const mins = minutesFor(k);
      const cell = document.createElement("div");
      cell.className =
        "day" + (k === TODAY_KEY ? " today" : "") + (isFuture ? " future" : "");
      const ringStyle =
        'style="--frac:' +
        frac +
        (frac > 0 ? ";--fill:" + fillColor(frac) : "") +
        '"';
      cell.innerHTML =
        (ms ? '<span class="ms-dot"></span>' : "") +
        '<div class="ring" ' +
        ringStyle +
        '><span class="num">' +
        d +
        "</span></div>" +
        (mins ? '<span class="mins">' + mins + "′</span>" : "");
      if (ms) cell.title = ms.when + " · " + ms.label;
      daysEl.appendChild(cell);
    }
    buildMilestones();
    buildStats();
  }

  function buildMilestones() {
    const listEl = document.getElementById("msList");
    listEl.innerHTML = "";
    let nextMarked = false;
    MILESTONES.forEach((m) => {
      const d = milestoneDate(m);
      const diff = Math.round((d - TODAY0) / 86400000);
      const reached = diff <= 0;
      let status,
        cls = "";
      if (reached) {
        cls = "reached";
        status =
          "✓ " +
          d.toLocaleDateString("de-DE", { day: "numeric", month: "short" });
      } else {
        status = diff === 1 ? "morgen" : "in " + diff + " Tagen";
        if (!nextMarked) {
          cls = "next";
          nextMarked = true;
        }
      }
      const row = document.createElement("div");
      row.className = "ms-row" + (cls ? " " + cls : "");
      row.innerHTML =
        '<span class="ms-when">' +
        m.when +
        "</span>" +
        '<span class="ms-label">' +
        m.label +
        '<span class="ms-desc">' +
        m.desc +
        "</span></span>" +
        '<span class="ms-status">' +
        status +
        "</span>";
      listEl.appendChild(row);
    });
    document.getElementById("msSub").textContent = msStarted
      ? "Ab deinem ersten Übungstag"
      : "Vorschau – zählt ab deinem ersten Übungstag";
  }

  function buildStats() {
    const keys = Object.keys(store).filter((k) => checkedFor(k).length > 0);
    const activeDays = keys.length;
    const totalMin = keys.reduce((s, k) => s + minutesFor(k), 0);
    // current streak: consecutive days up to today with >=1 checked
    let streak = 0;
    let cur = new Date(TODAY);
    // if today has nothing, start counting from yesterday
    if (checkedFor(keyOf(cur)).length === 0) cur.setDate(cur.getDate() - 1);
    while (checkedFor(keyOf(cur)).length > 0) {
      streak++;
      cur.setDate(cur.getDate() - 1);
    }
    document.getElementById("statStreak").textContent = streak;
    document.getElementById("statDays").textContent = activeDays;
    document.getElementById("statMin").textContent = totalMin;
  }

  document.getElementById("prevMonth").addEventListener("click", () => {
    viewMonth--;
    if (viewMonth < 0) {
      viewMonth = 11;
      viewYear--;
    }
    buildCalendar();
  });
  document.getElementById("nextMonth").addEventListener("click", () => {
    viewMonth++;
    if (viewMonth > 11) {
      viewMonth = 0;
      viewYear++;
    }
    buildCalendar();
  });

  /* ---------- Tabs ---------- */
  const tabToday = document.getElementById("tabToday");
  const tabCal = document.getElementById("tabCal");
  const viewTodayEl = document.getElementById("viewToday");
  const viewCalEl = document.getElementById("viewCal");
  function selectTab(which, { focus = false } = {}) {
    const isToday = which === "today";
    const activeTab = isToday ? tabToday : tabCal;
    const inactiveTab = isToday ? tabCal : tabToday;

    activeTab.setAttribute("aria-selected", "true");
    activeTab.tabIndex = 0;
    inactiveTab.setAttribute("aria-selected", "false");
    inactiveTab.tabIndex = -1;
    viewTodayEl.hidden = !isToday;
    viewCalEl.hidden = isToday;

    if (!isToday) {
      viewYear = TODAY.getFullYear();
      viewMonth = TODAY.getMonth();
      buildCalendar();
    }
    if (focus) activeTab.focus();
  }

  tabToday.addEventListener("click", () => selectTab("today"));
  tabCal.addEventListener("click", () => selectTab("cal"));
  [tabToday, tabCal].forEach((tab) => {
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
        return;
      event.preventDefault();
      const showToday =
        event.key === "Home" ||
        (event.key === "ArrowLeft" && tab === tabCal) ||
        (event.key === "ArrowRight" && tab === tabCal);
      selectTab(showToday ? "today" : "cal", { focus: true });
    });
  });

  /* ---------- Reset ---------- */
  document.getElementById("resetBtn").addEventListener("click", () => {
    if (
      confirm(
        "Wirklich alle gespeicherten Fortschritte löschen? Das kann nicht rückgängig gemacht werden.",
      )
    ) {
      store = {};
      saveAll(store);
      buildToday();
      if (!viewCalEl.hidden) buildCalendar();
    }
  });

  document
    .getElementById("exportBtn")
    .addEventListener("click", exportProgress);
  const importFile = document.getElementById("importFile");
  document.getElementById("importBtn").addEventListener("click", () => {
    importFile.click();
  });
  importFile.addEventListener("change", async () => {
    const [file] = importFile.files;
    await importProgress(file);
    importFile.value = "";
  });

  const transferGuide = document.getElementById("transferGuide");
  const transferGuideToggle = document.getElementById("transferGuideToggle");
  const transferGuidePanel = document.getElementById("transferGuidePanel");
  transferGuideToggle.addEventListener("click", () => {
    const isOpen = transferGuide.classList.toggle("open");
    transferGuideToggle.setAttribute("aria-expanded", String(isOpen));
    transferGuidePanel.setAttribute("aria-hidden", String(!isOpen));
  });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && keyOf(new Date()) !== TODAY_KEY)
      window.location.reload();
  });

  /* ---------- Init ---------- */
  buildToday();
})();
