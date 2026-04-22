const DATA = [
      { rank: 1, model: "Claude Opus 4.6", release: "2026-02-05", resolved_rate: 65.3, resolved_rate_sem: 0.66, pass_at_5: 70.2, cost_per_problem: 1.12, tokens_per_problem: 1296667, cached_tokens_pct: 92.9 },
      { rank: 2, model: "gpt-5.2-2025-12-11-medium", release: "2025-12-11", resolved_rate: 64.4, resolved_rate_sem: 1.85, pass_at_5: 73.7, cost_per_problem: 0.62, tokens_per_problem: 1009563, cached_tokens_pct: 78.3 },
      { rank: 3, model: "GLM-5", release: "2026-02-12", resolved_rate: 62.8, resolved_rate_sem: 0.86, pass_at_5: 70.2, cost_per_problem: 0.76, tokens_per_problem: 2218525, cached_tokens_pct: 78.7 },
      { rank: 4, model: "gpt-5.4-2026-03-05-medium", release: "2026-03-05", resolved_rate: 62.8, resolved_rate_sem: 1.79, pass_at_5: 70.2, cost_per_problem: 0.63, tokens_per_problem: 774607, cached_tokens_pct: 77.6 },
      { rank: 5, model: "Gemini 3.1 Pro Preview", release: "2026-02-19", resolved_rate: 62.3, resolved_rate_sem: 0.76, pass_at_5: 75.4, cost_per_problem: 0.66, tokens_per_problem: 1420386, cached_tokens_pct: 81.6 },
      { rank: 6, model: "DeepSeek-V3.2", release: "2025-12-01", resolved_rate: 60.9, resolved_rate_sem: 1.45, pass_at_5: 73.7, cost_per_problem: 0.75, tokens_per_problem: 3056040, cached_tokens_pct: 15.7 },
      { rank: 7, model: "Claude Sonnet 4.6", release: "2026-02-17", resolved_rate: 60.7, resolved_rate_sem: 0.89, pass_at_5: 70.2, cost_per_problem: 1.02, tokens_per_problem: 2086974, cached_tokens_pct: 95.3 },
      { rank: 8, model: "Claude Sonnet 4.5", release: "2025-09-29", resolved_rate: 60.0, resolved_rate_sem: 0.71, pass_at_5: 69.6, cost_per_problem: 1.18, tokens_per_problem: 2408578, cached_tokens_pct: 96.3 },
      { rank: 9, model: "Qwen3.5-397B-A17B", release: "2026-02-16", resolved_rate: 59.9, resolved_rate_sem: 1.64, pass_at_5: 71.9, cost_per_problem: 1.18, tokens_per_problem: 2957222, cached_tokens_pct: 91.4 },
      { rank: 10, model: "Step-3.5-Flash", release: "2026-02-12", resolved_rate: 59.6, resolved_rate_sem: 0.54, pass_at_5: 71.9, cost_per_problem: 0.14, tokens_per_problem: 3745323, cached_tokens_pct: 81.9 },
      { rank: 12, model: "gpt-5.3-codex-xhigh", release: "2026-02-05", resolved_rate: 58.6, resolved_rate_sem: 0.89, pass_at_5: 70.2, cost_per_problem: 0.89, tokens_per_problem: 1771028, cached_tokens_pct: 84.4 },
      { rank: 13, model: "Kimi K2.5", release: "2026-01-27", resolved_rate: 58.5, resolved_rate_sem: 0.66, pass_at_5: 70.2, cost_per_problem: 0.21, tokens_per_problem: 1536041, cached_tokens_pct: 93.9 },
      { rank: 16, model: "gpt-5.3-codex", release: "2026-02-05", resolved_rate: 58.2, resolved_rate_sem: 1.34, pass_at_5: 62.5, cost_per_problem: 0.40, tokens_per_problem: 680434, cached_tokens_pct: 79.1 },
      { rank: 17, model: "Kimi K2 Thinking", release: "2025-11-06", resolved_rate: 57.4, resolved_rate_sem: 2.76, pass_at_5: 71.9, cost_per_problem: 0.62, tokens_per_problem: 3411000, cached_tokens_pct: 95.7 },
      { rank: 18, model: "gpt-5.2-codex", release: "2025-12-18", resolved_rate: 56.8, resolved_rate_sem: 1.54, pass_at_5: 64.3, cost_per_problem: 0.42, tokens_per_problem: 732529, cached_tokens_pct: 74.9 },
      { rank: 19, model: "MiniMax M2.5", release: "2026-01-16", resolved_rate: 54.6, resolved_rate_sem: 2.05, pass_at_5: 63.2, cost_per_problem: 0.13, tokens_per_problem: 2325201, cached_tokens_pct: 90.4 },
      { rank: 20, model: "Qwen3-Coder-Next", release: "2026-02-02", resolved_rate: 54.4, resolved_rate_sem: 0.62, pass_at_5: 63.2, cost_per_problem: 1.67, tokens_per_problem: 8137372, cached_tokens_pct: 98.5 },
      { rank: 21, model: "Qwen3.5-35B-A3B", release: "2026-02-24", resolved_rate: 53.7, resolved_rate_sem: 2.52, pass_at_5: 63.2, cost_per_problem: 0.81, tokens_per_problem: 4753719, cached_tokens_pct: 94.3 },
      { rank: 22, model: "Gemini 3 Flash Preview", release: "2025-12-17", resolved_rate: 52.5, resolved_rate_sem: 1.06, pass_at_5: 68.4, cost_per_problem: 0.26, tokens_per_problem: 1945862, cached_tokens_pct: 75.9 },
      { rank: 23, model: "Devstral-2-123B-Instruct-2512", release: "2025-12-09", resolved_rate: 48.8, resolved_rate_sem: 2.31, pass_at_5: 59.6, cost_per_problem: 0.09, tokens_per_problem: 1677742, cached_tokens_pct: 97.3 },
      { rank: 24, model: "Qwen3-Coder-480B-A35B-Instruct", release: "2025-07-22", resolved_rate: 44.7, resolved_rate_sem: 0.63, pass_at_5: 56.1, cost_per_problem: 0.45, tokens_per_problem: 2231580, cached_tokens_pct: 29.0 },
      { rank: 25, model: "Devstral-Small-2-24B-Instruct-2512", release: "2025-12-09", resolved_rate: 38.9, resolved_rate_sem: 2.14, pass_at_5: 63.2, cost_per_problem: 0.13, tokens_per_problem: 2075167, cached_tokens_pct: 97.3 },
      { rank: 26, model: "GLM-4.5 Air", release: "2025-07-28", resolved_rate: 38.3, resolved_rate_sem: 1.41, pass_at_5: 57.9, cost_per_problem: 0.08, tokens_per_problem: 1771630, cached_tokens_pct: 93.9 },
      { rank: 27, model: "GLM-4.7 Flash", release: "2026-01-19", resolved_rate: 34.0, resolved_rate_sem: 2.19, pass_at_5: 56.1, cost_per_problem: 0.08, tokens_per_problem: 4556686, cached_tokens_pct: 90.3 },
      { rank: 28, model: "gpt-oss-120b", release: "2025-08-05", resolved_rate: 33.3, resolved_rate_sem: 1.13, pass_at_5: 47.4, cost_per_problem: 0.19, tokens_per_problem: 1271158, cached_tokens_pct: 94.3 }
    ].map(item => ({ ...item, releaseDate: new Date(item.release + "T00:00:00Z") }));

    const svg = document.getElementById("cost-chart");
    const tooltip = document.getElementById("chart-tooltip");
    const thresholdSlider = document.getElementById("threshold-slider");
    const thresholdValue = document.getElementById("threshold-value");
    const logScaleToggle = document.getElementById("log-scale-toggle");
    const frontierToggle = document.getElementById("frontier-toggle");
    const resolvedRateMinLabel = document.getElementById("resolved-rate-min-label");
    const resolvedRateMidLabel = document.getElementById("resolved-rate-mid-label");
    const resolvedRateMaxLabel = document.getElementById("resolved-rate-max-label");
    const labelsToggle = document.getElementById("labels-toggle");
    const modelList = document.getElementById("model-list");
    const selectionSummary = document.getElementById("selection-summary");
    const costChartTitle = document.getElementById("cost-chart-title");
    const allModels = [...DATA].sort((a, b) => a.rank - b.rank).map(d => d.model);

    const state = {
      threshold: 50,
      logScale: false,
      showLabels: true,
      showFrontier: true,
      selectedModels: new Set(allModels)
    };

    function formatDate(date) {
      return new Intl.DateTimeFormat("en", { year: "numeric", month: "short" }).format(date);
    }

    function formatNumber(value, digits = 2) {
      return Number(value).toFixed(digits);
    }

    function formatTokens(value) {
      return new Intl.NumberFormat("en-US").format(value);
    }

    function escapeHtml(text) {
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;");
    }

    function viridisColor(value, min, max) {
      const stops = [
        [68, 1, 84],
        [59, 82, 139],
        [33, 145, 140],
        [94, 201, 97],
        [253, 231, 37]
      ];
      const t = max === min ? 0.5 : (value - min) / (max - min);
      const scaled = Math.max(0, Math.min(0.9999, t)) * (stops.length - 1);
      const index = Math.floor(scaled);
      const local = scaled - index;
      const a = stops[index];
      const b = stops[Math.min(index + 1, stops.length - 1)];
      const rgb = a.map((channel, i) => Math.round(channel + (b[i] - channel) * local));
      return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    }

    function buildModelList() {
      modelList.innerHTML = allModels.map(model => {
        const id = `model-${model.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
        return `<label class="model-item" for="${id}"><input id="${id}" type="checkbox" data-model="${escapeHtml(model)}" checked /> <span>${escapeHtml(model)}</span></label>`;
      }).join("");

      modelList.querySelectorAll("input[type='checkbox']").forEach(input => {
        input.addEventListener("change", event => {
          const model = event.target.getAttribute("data-model");
          if (event.target.checked) {
            state.selectedModels.add(model);
          } else {
            state.selectedModels.delete(model);
          }
          render();
        });
      });
    }

    function syncModelInputs() {
      modelList.querySelectorAll("input[type='checkbox']").forEach(input => {
        const model = input.getAttribute("data-model");
        input.checked = state.selectedModels.has(model);
      });
    }

    function filterModels() {
      return DATA
        .filter(model => model.resolved_rate > state.threshold && state.selectedModels.has(model.model))
        .sort((a, b) => {
          if (a.releaseDate.getTime() !== b.releaseDate.getTime()) {
            return a.releaseDate - b.releaseDate;
          }
          if (a.cost_per_problem !== b.cost_per_problem) {
            return a.cost_per_problem - b.cost_per_problem;
          }
          return a.rank - b.rank;
        });
    }

    function costFrontier(models) {
      const frontier = [];
      let cheapest = Infinity;
      for (const model of models) {
        if (model.cost_per_problem < cheapest) {
          frontier.push(model);
          cheapest = model.cost_per_problem;
        }
      }
      return frontier;
    }

    function monthTicks(startDate, endDate) {
      const ticks = [];
      const cursor = new Date(Date.UTC(startDate.getUTCFullYear(), startDate.getUTCMonth(), 1));
      while (cursor <= endDate) {
        ticks.push(new Date(cursor));
        cursor.setUTCMonth(cursor.getUTCMonth() + 1);
      }
      return ticks;
    }

    function linearTicks(min, max, count = 5) {
      if (min === max) {
        return [min];
      }
      const span = max - min;
      const roughStep = span / Math.max(1, count);
      const power = 10 ** Math.floor(Math.log10(roughStep));
      const normalized = roughStep / power;
      let step = power;
      if (normalized >= 5) {
        step = 5 * power;
      } else if (normalized >= 2) {
        step = 2 * power;
      }
      const first = Math.floor(min / step) * step;
      const ticks = [];
      for (let value = first; value <= max + step; value += step) {
        if (value >= min - step * 0.25) {
          ticks.push(Number(value.toFixed(10)));
        }
      }
      return ticks;
    }

    function logTicks(min, max) {
      const candidates = [1, 2, 5];
      const ticks = [];
      const startPower = Math.floor(Math.log10(min));
      const endPower = Math.ceil(Math.log10(max));
      for (let power = startPower; power <= endPower; power += 1) {
        for (const c of candidates) {
          const value = c * (10 ** power);
          if (value >= min && value <= max) {
            ticks.push(value);
          }
        }
      }
      return ticks;
    }

    function createSvgElement(name, attrs = {}) {
      const el = document.createElementNS("http://www.w3.org/2000/svg", name);
      for (const [key, value] of Object.entries(attrs)) {
        el.setAttribute(key, value);
      }
      return el;
    }

    function linePath(points, xScale, yScale) {
      return points.map((point, index) => `${index === 0 ? "M" : "L"} ${xScale(point.x)} ${yScale(point.y)}`).join(" ");
    }

    function render() {
      thresholdValue.textContent = `${state.threshold}%`;
      syncModelInputs();

      const filtered = filterModels();
      const visibleByThreshold = DATA.filter(model => model.resolved_rate > state.threshold);
      selectionSummary.textContent = `${filtered.length} model${filtered.length === 1 ? "" : "s"} shown at ${state.threshold}% threshold.`;
      costChartTitle.textContent = `Cost per problem for models above a ${state.threshold}% resolved-rate threshold`;

      svg.innerHTML = "";
      tooltip.style.display = "none";

      const width = 900;
      const height = 560;
      const margin = { top: 24, right: 24, bottom: 88, left: 72 };
      const plotWidth = width - margin.left - margin.right;
      const plotHeight = height - margin.top - margin.bottom;

      const background = createSvgElement("rect", {
        x: 0,
        y: 0,
        width,
        height,
        fill: "#ffffff"
      });
      svg.appendChild(background);

      if (!filtered.length) {
        const text = createSvgElement("text", {
          x: width / 2,
          y: height / 2,
          "text-anchor": "middle",
          fill: "#444444",
          "font-size": "20"
        });
        text.textContent = "No data for this selection.";
        svg.appendChild(text);
        return;
      }

      const allDates = DATA.map(model => model.releaseDate.getTime());
      const dayMs = 24 * 60 * 60 * 1000;
      const minDate = new Date(Math.min(...allDates) - 30 * dayMs);
      const maxDate = new Date(Math.max(...allDates) + 30 * dayMs);
      const frontier = costFrontier(filtered);
      const allYValues = filtered.map(model => model.cost_per_problem);
      let yMin = state.logScale ? 0.05 : 0;
      let yMax = 1.8;

      const xScale = date => {
        const ratio = (date.getTime() - minDate.getTime()) / (maxDate.getTime() - minDate.getTime() || 1);
        return margin.left + ratio * plotWidth;
      };

      const yScale = value => {
        if (state.logScale) {
          const minLog = Math.log10(yMin);
          const maxLog = Math.log10(yMax);
          const ratio = (Math.log10(value) - minLog) / (maxLog - minLog || 1);
          return margin.top + plotHeight - ratio * plotHeight;
        }
        const ratio = (value - yMin) / (yMax - yMin || 1);
        return margin.top + plotHeight - ratio * plotHeight;
      };

      const xTicks = monthTicks(minDate, maxDate);
      const yTicks = state.logScale ? logTicks(yMin, yMax) : linearTicks(yMin, yMax, 5);
      const yAxisGroup = createSvgElement("g");
      const xAxisGroup = createSvgElement("g");
      const gridGroup = createSvgElement("g");
      const plotGroup = createSvgElement("g");
      const labelGroup = createSvgElement("g");

      for (const tick of yTicks) {
        const y = yScale(tick);
        gridGroup.appendChild(createSvgElement("line", {
          x1: margin.left,
          y1: y,
          x2: width - margin.right,
          y2: y,
          stroke: "#dddddd",
          "stroke-dasharray": "4 4"
        }));
        const text = createSvgElement("text", {
          x: margin.left - 10,
          y: y + 4,
          "text-anchor": "end",
          fill: "#444444",
          "font-size": "13"
        });
        text.textContent = state.logScale ? tick.toPrecision(tick < 1 ? 1 : 2) : tick.toFixed(tick < 1 ? 2 : 1);
        yAxisGroup.appendChild(text);
      }

      for (const tick of xTicks) {
        const x = xScale(tick);
        gridGroup.appendChild(createSvgElement("line", {
          x1: x,
          y1: margin.top,
          x2: x,
          y2: height - margin.bottom,
          stroke: "#eeeeee"
        }));

        if (x < margin.left + 18 || x > width - margin.right - 18) {
          continue;
        }

        const text = createSvgElement("text", {
          x,
          y: height - margin.bottom + 22,
          "text-anchor": "end",
          transform: `rotate(-45 ${x} ${height - margin.bottom + 22})`,
          fill: "#444444",
          "font-size": "13"
        });
        text.textContent = formatDate(tick);
        xAxisGroup.appendChild(text);
      }

      const xAxis = createSvgElement("line", {
        x1: margin.left,
        y1: height - margin.bottom,
        x2: width - margin.right,
        y2: height - margin.bottom,
        stroke: "#000000"
      });
      const yAxis = createSvgElement("line", {
        x1: margin.left,
        y1: margin.top,
        x2: margin.left,
        y2: height - margin.bottom,
        stroke: "#000000"
      });
      svg.appendChild(gridGroup);
      svg.appendChild(xAxis);
      svg.appendChild(yAxis);
      svg.appendChild(yAxisGroup);
      svg.appendChild(xAxisGroup);

      const xLabel = createSvgElement("text", {
        x: margin.left + plotWidth / 2,
        y: height - 20,
        "text-anchor": "middle",
        fill: "#000000",
        "font-size": "15"
      });
      xLabel.textContent = "Release date";
      svg.appendChild(xLabel);

      const yLabel = createSvgElement("text", {
        x: 20,
        y: margin.top + plotHeight / 2,
        transform: `rotate(-90 20 ${margin.top + plotHeight / 2})`,
        "text-anchor": "middle",
        fill: "#000000",
        "font-size": "15"
      });
      yLabel.textContent = state.logScale ? "Cost per problem (USD, log scale)" : "Cost per problem (USD)";
      svg.appendChild(yLabel);

      if (state.showFrontier && frontier.length) {
        const frontierPath = createSvgElement("path", {
          d: linePath(frontier.map(model => ({ x: model.releaseDate, y: model.cost_per_problem })), xScale, yScale),
          fill: "none",
          stroke: "#808080",
          "stroke-width": "2.2",
          "stroke-dasharray": "8 6"
        });
        plotGroup.appendChild(frontierPath);
      }

      const minResolved = Math.min(...DATA.map(model => model.resolved_rate));
      const maxResolved = Math.max(...DATA.map(model => model.resolved_rate));
      const sortedForPoints = [...filtered].sort((a, b) => a.cost_per_problem - b.cost_per_problem);

      for (const model of sortedForPoints) {
        const x = xScale(model.releaseDate);
        const y = yScale(model.cost_per_problem);
        const point = createSvgElement("circle", {
          cx: x,
          cy: y,
          r: 6,
          fill: viridisColor(model.resolved_rate, minResolved, maxResolved),
          stroke: "#000000",
          "stroke-width": "1"
        });

        point.addEventListener("mouseenter", event => {
          tooltip.innerHTML = `
            <strong>${escapeHtml(model.model)}</strong><br />
            Release: ${escapeHtml(model.release)}<br />
            Resolved rate: ${formatNumber(model.resolved_rate, 1)}%<br />
            Cost per problem: $${formatNumber(model.cost_per_problem, 2)}<br />
            Pass@5: ${formatNumber(model.pass_at_5, 1)}%<br />
            Tokens per problem: ${formatTokens(model.tokens_per_problem)}
          `;
          tooltip.style.display = "block";
        });

        point.addEventListener("mousemove", event => {
          const rect = svg.getBoundingClientRect();
          const wrapperRect = svg.parentElement.getBoundingClientRect();
          const left = event.clientX - wrapperRect.left + 14;
          const top = event.clientY - wrapperRect.top + 14;
          tooltip.style.left = `${Math.min(left, rect.width - 220)}px`;
          tooltip.style.top = `${top}px`;
        });

        point.addEventListener("mouseleave", () => {
          tooltip.style.display = "none";
        });

        plotGroup.appendChild(point);

        if (state.showLabels) {
          const label = createSvgElement("text", {
            x: x + 8,
            y: y - 8,
            fill: "#111111",
            "font-size": "11"
          });
          label.textContent = model.model;
          labelGroup.appendChild(label);
        }
      }

      svg.appendChild(plotGroup);
      svg.appendChild(labelGroup);

    }

    thresholdSlider.addEventListener("input", event => {
      state.threshold = Number(event.target.value);
      render();
    });

    logScaleToggle.addEventListener("change", event => {
      state.logScale = event.target.checked;
      render();
    });

    labelsToggle.addEventListener("change", event => {
      state.showLabels = event.target.checked;
      render();
    });

    frontierToggle.addEventListener("change", event => {
      state.showFrontier = event.target.checked;
      render();
    });

    document.getElementById("select-all-models").addEventListener("click", () => {
      state.selectedModels = new Set(allModels);
      render();
    });

    document.getElementById("clear-all-models").addEventListener("click", () => {
      state.selectedModels = new Set();
      render();
    });

    document.getElementById("models-above-threshold").addEventListener("click", () => {
      state.selectedModels = new Set(DATA.filter(model => model.resolved_rate > state.threshold).map(model => model.model));
      render();
    });

    const datasetResolvedRates = DATA.map(model => model.resolved_rate);
    const minResolvedRate = Math.min(...datasetResolvedRates);
    const maxResolvedRate = Math.max(...datasetResolvedRates);
    const midResolvedRate = (minResolvedRate + maxResolvedRate) / 2;
    resolvedRateMinLabel.textContent = `${formatNumber(minResolvedRate, 1)}%`;
    resolvedRateMidLabel.textContent = `${formatNumber(midResolvedRate, 1)}%`;
    resolvedRateMaxLabel.textContent = `${formatNumber(maxResolvedRate, 1)}%`;

    buildModelList();
    render();

(function () {
      const svg = document.getElementById("budget-curves-chart");
      const tooltip = document.getElementById("budget-curves-tooltip");
      const modelList = document.getElementById("budget-model-list");
      const summary = document.getElementById("budget-selection-summary");
      const legend = document.getElementById("budget-chart-legend");
      const experimentToggle = document.getElementById("budget-experiment-toggle");
      const experimentSummary = document.getElementById("budget-experiment-summary");
      const experimentOptions = Array.from(document.querySelectorAll("#budget-experiment-toggle .experiment-option"));
      const xAxisToggle = document.getElementById("budget-x-axis-toggle");
      const xAxisSummary = document.getElementById("budget-x-axis-summary");
      const xAxisOptions = Array.from(document.querySelectorAll("#budget-x-axis-toggle .x-axis-option"));
      const selectAllButton = document.getElementById("budget-select-all-models");
      const clearAllButton = document.getElementById("budget-clear-all-models");

      const PRICE_PER_TOKEN = {
        "Claude 3 Opus": (15 + 75) / 2e6,
        "Claude 3.5 Sonnet (Old)": (6 + 30) / 2e6,
        "Claude 3.5 Sonnet (New)": (6 + 30) / 2e6,
        "Claude 3.7 Sonnet": (3 + 15) / 2e6,
        "Claude 4 Opus": (15 + 75) / 2e6,
        "Claude 4.1 Opus": (15 + 75) / 2e6,
        "Claude Opus 4.5": (5 + 25) / 2e6,
        "GPT-4 0125": (10 + 30) / 2e6,
        "GPT-4 0314": (30 + 60) / 2e6,
        "GPT-4 1106": (10 + 30) / 2e6,
        "GPT-4 Turbo": (10 + 30) / 2e6,
        "GPT-4o": (2.5 + 10) / 2e6,
        "GPT-5": (1.25 + 10) / 2e6,
        "GPT-5.1-Codex-Max": (1.25 + 10) / 2e6,
        "GPT-5.2": (1.75 + 14) / 2e6,
        "Gemini 3 Pro": (2 + 12) / 2e6,
        "o1": (15 + 60) / 2e6,
        "o1-preview": (15 + 60) / 2e6,
        "o3": (2 + 8) / 2e6
      };

      const state = {
        data: null,
        experiment: "1.1",
        xAxisMode: "usd",
        selections: {},
        hourlyGuides: {}
      };

      const FAMILY_STYLES = {
        claude3: {
          start: [244, 211, 78],
          end: [194, 122, 0],
          alpha: [0.72, 0.98]
        },
        claude4: {
          start: [245, 172, 74],
          end: [189, 82, 0],
          alpha: [0.74, 0.98]
        },
        gpt4: {
          start: [127, 219, 211],
          end: [0, 150, 136],
          alpha: [0.68, 0.98]
        },
        gpt5: {
          start: [237, 141, 193],
          end: [201, 44, 126],
          alpha: [0.68, 0.98]
        },
        gemini: {
          fixed: "rgba(54, 99, 216, 0.95)"
        },
        other: {
          start: [220, 220, 220],
          end: [100, 100, 100],
          alpha: [0.4, 0.95]
        }
      };

      let budgetChartColorMap = null;

      function createSvgElement(name, attrs = {}) {
        const el = document.createElementNS("http://www.w3.org/2000/svg", name);
        for (const [key, value] of Object.entries(attrs)) {
          el.setAttribute(key, value);
        }
        return el;
      }

      function escapeHtml(text) {
        return String(text)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/\"/g, "&quot;");
      }

      function formatBudget(value) {
        if (value >= 100) return `$${value.toFixed(0)}`;
        if (value >= 10) return `$${value.toFixed(1)}`;
        if (value >= 1) return `$${value.toFixed(2)}`;
        if (value >= 0.1) return `$${value.toFixed(2)}`;
        if (value >= 0.01) return `$${value.toFixed(3)}`;
        return `$${value.toPrecision(2)}`;
      }

      function formatMinutes(value) {
        if (value < 1) {
          return `${Math.round(value * 60)} sec`;
        }
        if (value < 60) {
          return `${value >= 10 ? value.toFixed(0) : value.toFixed(1)} min`;
        }
        const hours = value / 60;
        return `${hours >= 10 ? hours.toFixed(0) : hours.toFixed(1)} h`;
      }

      function xTicks([minX, maxX]) {
        const ticks = [];
        const minPower = Math.ceil(Math.log10(minX));
        const maxPower = Math.floor(Math.log10(maxX));
        for (let power = minPower; power <= maxPower; power += 1) {
          ticks.push(10 ** power);
        }
        return ticks;
      }

      function yTicks(domain, preset) {
        return preset.filter(value => value >= domain[0] && value <= domain[1]);
      }

      function parseReleaseDate(value) {
        return new Date(`${value}T00:00:00Z`).getTime();
      }

      function interpolateChannel(start, end, t) {
        return Math.round(start + (end - start) * t);
      }

      function rgbaString(rgb, alpha) {
        return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha.toFixed(3)})`;
      }

      function modelFamily(model) {
        if (/^Claude 3(\b|\.)/.test(model)) return "claude3";
        if (/^Claude 4(\b|\.)/.test(model) || /^Claude Opus 4\./.test(model) || /^Claude Sonnet 4\./.test(model)) return "claude4";
        if (/^GPT-4(\b|o| )/.test(model)) return "gpt4";
        if (/^(GPT-5|o1\b|o1-preview\b|o3\b)/.test(model)) return "gpt5";
        if (/^Gemini\b/.test(model)) return "gemini";
        return "other";
      }

      function buildBudgetChartColorMap() {
        if (budgetChartColorMap || !state.data) {
          return budgetChartColorMap || {};
        }

        const modelMeta = new Map();
        Object.values(state.data.experiments).forEach(experiment => {
          Object.entries(experiment.models).forEach(([model, rows]) => {
            if (!rows.length) return;
            const releaseDate = rows[0].release_date;
            const existing = modelMeta.get(model);
            if (!existing || parseReleaseDate(releaseDate) < parseReleaseDate(existing.release_date)) {
              modelMeta.set(model, {
                model,
                release_date: releaseDate,
                family: modelFamily(model)
              });
            }
          });
        });

        const families = new Map();
        Array.from(modelMeta.values()).forEach(meta => {
          if (!families.has(meta.family)) {
            families.set(meta.family, []);
          }
          families.get(meta.family).push(meta);
        });

        budgetChartColorMap = {};
        families.forEach((models, family) => {
          const style = FAMILY_STYLES[family] || FAMILY_STYLES.other;
          const ordered = models.slice().sort((a, b) => {
            const diff = parseReleaseDate(a.release_date) - parseReleaseDate(b.release_date);
            return diff !== 0 ? diff : a.model.localeCompare(b.model);
          });

          ordered.forEach((meta, index) => {
            if (style.fixed) {
              budgetChartColorMap[meta.model] = style.fixed;
              return;
            }
            const t = ordered.length === 1 ? 1 : index / (ordered.length - 1);
            const rgb = [0, 1, 2].map(channel => interpolateChannel(style.start[channel], style.end[channel], t));
            const alpha = style.alpha[0] + (style.alpha[1] - style.alpha[0]) * t;
            budgetChartColorMap[meta.model] = rgbaString(rgb, alpha);
          });
        });

        return budgetChartColorMap;
      }

      function colorForModel(model) {
        return buildBudgetChartColorMap()[model] || FAMILY_STYLES.other.fixed || "rgba(100, 100, 100, 0.95)";
      }

      function modelReleaseDate(model) {
        if (!state.data) return Infinity;
        const experiments = Object.values(state.data.experiments);
        let best = Infinity;
        experiments.forEach(experiment => {
          const rows = experiment.models[model];
          if (rows && rows.length) {
            best = Math.min(best, parseReleaseDate(rows[0].release_date));
          }
        });
        return best;
      }

      function sortModelsByReleaseDate(models) {
        return models.slice().sort((a, b) => {
          const diff = modelReleaseDate(a) - modelReleaseDate(b);
          return diff !== 0 ? diff : a.localeCompare(b);
        });
      }

      function modelLab(model) {
        const family = modelFamily(model);
        if (family === "claude3" || family === "claude4") return "anthropic";
        if (family === "gpt4" || family === "gpt5") return "openai";
        if (family === "gemini") return "google";
        return "other";
      }

      function sortModelsForLegend(models) {
        const labOrder = { anthropic: 0, openai: 1, google: 2, other: 3 };
        const familyOrder = { claude3: 0, claude4: 1, gpt4: 2, gpt5: 3, gemini: 4, other: 5 };
        return models.slice().sort((a, b) => {
          const labDiff = (labOrder[modelLab(a)] ?? 99) - (labOrder[modelLab(b)] ?? 99);
          if (labDiff !== 0) return labDiff;
          const familyDiff = (familyOrder[modelFamily(a)] ?? 99) - (familyOrder[modelFamily(b)] ?? 99);
          if (familyDiff !== 0) return familyDiff;
          const releaseDiff = modelReleaseDate(a) - modelReleaseDate(b);
          if (releaseDiff !== 0) return releaseDiff;
          return a.localeCompare(b);
        });
      }

      function currentModels() {
        if (!state.data) return [];
        return sortModelsByReleaseDate(Object.keys(state.data.experiments[state.experiment].models));
      }

      function ensureSelectionForExperiment() {
        const models = currentModels();
        if (!state.selections[state.experiment]) {
          state.selections[state.experiment] = new Set(models);
        }
        const selection = state.selections[state.experiment];
        for (const model of Array.from(selection)) {
          if (!models.includes(model)) {
            selection.delete(model);
          }
        }
      }

      function experimentLabel(value) {
        return value === "1.0" ? "Time Horizon 1.0 (Mar 2025)" : "Time Horizon 1.1 (Current)";
      }

      function xAxisModeLabel(value) {
        return value === "tokens" ? "Tokens" : "$";
      }

      function pricePerTokenForModel(model) {
        return PRICE_PER_TOKEN[model] ?? null;
      }

      function tokenCountForRow(row, model) {
        const rate = pricePerTokenForModel(model);
        return rate ? row.budget / rate : null;
      }

      function xValueForRow(row, model) {
        return state.xAxisMode === "tokens" ? tokenCountForRow(row, model) : row.budget;
      }

      function formatTokenAxisValue(value) {
        if (value >= 1e9) return `${Number((value / 1e9).toPrecision(2))}B`;
        if (value >= 1e6) return `${Number((value / 1e6).toPrecision(2))}M`;
        if (value >= 1e3) return `${Number((value / 1e3).toPrecision(2))}k`;
        return formatTokens(Math.round(value));
      }

      function budgetChartXLabel() {
        return state.xAxisMode === "tokens" ? "Per-run token count" : "Per-run budget (USD)";
      }

      function xAxisTickLabel(value) {
        return state.xAxisMode === "tokens" ? formatTokenAxisValue(value) : formatBudget(value);
      }

      function currentXDomain(experiment) {
        if (state.xAxisMode === "usd") {
          return state.data.meta.x_domain;
        }
        let minToken = Infinity;
        let maxToken = 0;
        Object.entries(experiment.models).forEach(([model, rows]) => {
          rows.forEach(row => {
            const tokenCount = tokenCountForRow(row, model);
            if (tokenCount > 0) {
              minToken = Math.min(minToken, tokenCount);
              maxToken = Math.max(maxToken, tokenCount);
            }
          });
        });
        return Number.isFinite(minToken) && maxToken > minToken ? [minToken, maxToken] : [1e3, 1e6];
      }

      function ensureHourlyGuidesForExperiment() {
        if (!state.hourlyGuides[state.experiment]) {
          state.hourlyGuides[state.experiment] = new Set();
        }
      }

      function buildModelList() {
        const models = currentModels();
        ensureSelectionForExperiment();
        ensureHourlyGuidesForExperiment();
        const selected = state.selections[state.experiment];
        const guideSelected = state.hourlyGuides[state.experiment];
        modelList.innerHTML = models.map(model => {
          const id = `budget-model-${model.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
          const checked = selected.has(model) ? "checked" : "";
          const guideOn = guideSelected.has(model) ? "is-active" : "";
          return `<div class="model-row"><label class="model-item" for="${id}"><input id="${id}" type="checkbox" data-model="${escapeHtml(model)}" ${checked} /> <span>${escapeHtml(model)}</span></label><button type="button" class="hourly-guide-toggle ${guideOn}" data-guide-model="${escapeHtml(model)}" aria-label="Toggle minimal hourly cost guide for ${escapeHtml(model)}">$/h</button></div>`;
        }).join("");

        modelList.querySelectorAll("input[type='checkbox']").forEach(input => {
          input.addEventListener("change", event => {
            const model = event.target.getAttribute("data-model");
            if (event.target.checked) {
              selected.add(model);
            } else {
              selected.delete(model);
              guideSelected.delete(model);
            }
            renderBudgetCurves();
          });
        });

        modelList.querySelectorAll(".hourly-guide-toggle").forEach(button => {
          button.addEventListener("click", event => {
            const model = event.currentTarget.getAttribute("data-guide-model");
            if (!selected.has(model)) {
              selected.add(model);
            }
            if (guideSelected.has(model)) {
              guideSelected.delete(model);
            } else {
              guideSelected.add(model);
            }
            renderBudgetCurves();
          });
        });
      }

      function renderLegend(models) {
        const orderedModels = sortModelsForLegend(models);
        legend.innerHTML = orderedModels.map(model => {
          const color = colorForModel(model);
          return `<span class="budget-legend-item" style="color:${color}"><span class="budget-legend-swatch"></span><span>${escapeHtml(model)}</span></span>`;
        }).join("");
      }

      function minimalHourlyCost(rows) {
        let best = Infinity;
        rows.forEach(row => {
          if (row.budget > 0 && row.p50 > 0) {
            best = Math.min(best, (row.budget / row.p50) * 60);
          }
        });
        return Number.isFinite(best) ? best : null;
      }

      function minimalHourlyCostLineGeometry(hourlyCost, domainX, domainY, xScale, yScale, rate = 1) {
        if (!(hourlyCost > 0) || !(rate > 0)) {
          return null;
        }
        const slope = (60 * rate) / hourlyCost;
        const xStart = Math.max(domainX[0], domainY[0] / slope);
        const xEnd = Math.min(domainX[1], domainY[1] / slope);
        if (!(xEnd > xStart)) {
          return null;
        }
        const start = { x: xScale(xStart), y: yScale(slope * xStart), xValue: xStart, horizon: slope * xStart };
        const end = { x: xScale(xEnd), y: yScale(slope * xEnd), xValue: xEnd, horizon: slope * xEnd };
        return {
          path: `M ${start.x} ${start.y} L ${end.x} ${end.y}`,
          start,
          end
        };
      }

      function renderBudgetCurves() {
        if (!state.data) {
          svg.innerHTML = "";
          return;
        }

        ensureSelectionForExperiment();
        buildModelList();

        const experiment = state.data.experiments[state.experiment];
        const allModels = Object.keys(experiment.models);
        ensureHourlyGuidesForExperiment();
        const selectedModels = allModels.filter(model => state.selections[state.experiment].has(model));
        const guideSelected = state.hourlyGuides[state.experiment];
        experimentSummary.textContent = experimentLabel(state.experiment);
        xAxisSummary.textContent = xAxisModeLabel(state.xAxisMode);
        experimentOptions.forEach(button => {
          button.classList.toggle("is-selected", button.getAttribute("data-experiment-value") === state.experiment);
        });
        xAxisOptions.forEach(button => {
          button.classList.toggle("is-selected", button.getAttribute("data-x-axis-value") === state.xAxisMode);
        });
        summary.textContent = `${experiment.label}: ${selectedModels.length} model${selectedModels.length === 1 ? "" : "s"} shown.`;
        renderLegend(selectedModels);
        tooltip.style.display = "none";
        svg.innerHTML = "";

        const width = 900;
        const height = 560;
        const margin = { top: 24, right: 28, bottom: 78, left: 78 };
        const plotWidth = width - margin.left - margin.right;
        const plotHeight = height - margin.top - margin.bottom;
        const domainX = currentXDomain(experiment);
        const domainY = [0.25, state.data.meta.y_ticks[state.data.meta.y_ticks.length - 1]];
        const logMinX = Math.log10(domainX[0]);
        const logMaxX = Math.log10(domainX[1]);
        const logMinY = Math.log10(domainY[0]);
        const logMaxY = Math.log10(domainY[1]);

        const xScale = value => margin.left + ((Math.log10(value) - logMinX) / (logMaxX - logMinX)) * plotWidth;
        const yScale = value => margin.top + plotHeight - ((Math.log10(value) - logMinY) / (logMaxY - logMinY)) * plotHeight;

        svg.appendChild(createSvgElement("rect", { x: 0, y: 0, width, height, fill: "#ffffff" }));

        const gridGroup = createSvgElement("g");
        const axisLabelGroup = createSvgElement("g");
        const plotGroup = createSvgElement("g");

        xTicks(domainX).forEach(tick => {
          const x = xScale(tick);
          gridGroup.appendChild(createSvgElement("line", {
            x1: x, y1: margin.top, x2: x, y2: height - margin.bottom, stroke: "#eeeeee"
          }));
          const label = createSvgElement("text", {
            x, y: height - margin.bottom + 22, "text-anchor": "middle", fill: "#444444", "font-size": "13"
          });
          label.textContent = xAxisTickLabel(tick);
          axisLabelGroup.appendChild(label);
        });

        yTicks(domainY, state.data.meta.y_ticks).forEach(tick => {
          const y = yScale(tick);
          gridGroup.appendChild(createSvgElement("line", {
            x1: margin.left, y1: y, x2: width - margin.right, y2: y, stroke: "#dddddd", "stroke-dasharray": "4 4"
          }));
          const label = createSvgElement("text", {
            x: margin.left - 10, y: y + 4, "text-anchor": "end", fill: "#444444", "font-size": "13"
          });
          label.textContent = formatMinutes(tick);
          axisLabelGroup.appendChild(label);
        });

        svg.appendChild(gridGroup);
        svg.appendChild(createSvgElement("line", {
          x1: margin.left, y1: height - margin.bottom, x2: width - margin.right, y2: height - margin.bottom, stroke: "#000000"
        }));
        svg.appendChild(createSvgElement("line", {
          x1: margin.left, y1: margin.top, x2: margin.left, y2: height - margin.bottom, stroke: "#000000"
        }));
        svg.appendChild(axisLabelGroup);

        const xLabel = createSvgElement("text", {
          x: margin.left + plotWidth / 2, y: height - 20, "text-anchor": "middle", fill: "#000000", "font-size": "15"
        });
        xLabel.textContent = budgetChartXLabel();
        svg.appendChild(xLabel);

        const yLabel = createSvgElement("text", {
          x: 22, y: margin.top + plotHeight / 2,
          transform: `rotate(-90 22 ${margin.top + plotHeight / 2})`,
          "text-anchor": "middle", fill: "#000000", "font-size": "15"
        });
        yLabel.textContent = "50% time horizon";
        svg.appendChild(yLabel);

        if (!selectedModels.length) {
          const text = createSvgElement("text", {
            x: width / 2, y: height / 2, "text-anchor": "middle", fill: "#444444", "font-size": "20"
          });
          text.textContent = "No models selected.";
          svg.appendChild(text);
          legend.innerHTML = "";
          return;
        }

        const showInlineLabels = selectedModels.length <= 8;

        selectedModels.forEach(model => {
          const color = colorForModel(model);
          const allRows = experiment.models[model];
          const rows = allRows.filter(row => row.p50 >= domainY[0]);
          const rate = pricePerTokenForModel(model);
          if (!rows.length) {
            return;
          }

          if (guideSelected.has(model)) {
            const cMin = minimalHourlyCost(allRows);
            const guide = minimalHourlyCostLineGeometry(cMin, domainX, domainY, xScale, yScale, state.xAxisMode === "tokens" ? rate : 1);
            if (guide) {
              const guideColor = "#7a7a7a";
              plotGroup.appendChild(createSvgElement("path", {
                d: guide.path,
                fill: "none",
                stroke: guideColor,
                "stroke-width": "1.4",
                "stroke-dasharray": "6 5",
                opacity: "0.9"
              }));

              const topPoint = guide.start.y <= guide.end.y ? guide.start : guide.end;
              const otherPoint = topPoint === guide.start ? guide.end : guide.start;
              const rawAngle = Math.atan2(otherPoint.y - topPoint.y, otherPoint.x - topPoint.x) * 180 / Math.PI;
              const flippedText = rawAngle > 90 || rawAngle < -90;
              let angle = rawAngle;
              if (angle > 90) {
                angle -= 180;
              } else if (angle < -90) {
                angle += 180;
              }
              const inwardDx = otherPoint.x - topPoint.x;
              const inwardDy = otherPoint.y - topPoint.y;
              const inwardLength = Math.hypot(inwardDx, inwardDy) || 1;
              const tangentX = inwardDx / inwardLength;
              const tangentY = inwardDy / inwardLength;
              const normalA = { x: -tangentY, y: tangentX };
              const normalB = { x: tangentY, y: -tangentX };
              const aboveNormal = normalA.y < normalB.y ? normalA : normalB;
              const offsetFromLine = 9;
              const minLabelY = margin.top + 24;
              const requiredInset = (minLabelY - topPoint.y - aboveNormal.y * offsetFromLine) / Math.max(tangentY, 0.001);
              const insetAlongLine = Math.max(36, requiredInset);
              const labelX = topPoint.x + tangentX * insetAlongLine + aboveNormal.x * offsetFromLine;
              const labelY = topPoint.y + tangentY * insetAlongLine + aboveNormal.y * offsetFromLine;
              const label = createSvgElement("text", {
                x: labelX,
                y: labelY,
                fill: guideColor,
                "font-size": "11",
                "text-anchor": flippedText ? "end" : "start",
                transform: `rotate(${angle} ${labelX} ${labelY})`
              });
              label.textContent = `${model} — $${cMin.toFixed(2)}/h`;
              plotGroup.appendChild(label);
            }
          }

          const commands = [];
          rows.forEach((row, index) => {
            const x = xScale(xValueForRow(row, model));
            const y = yScale(row.p50);
            if (index === 0) {
              commands.push(`M ${x} ${y}`);
            } else {
              commands.push(`H ${x}`);
              commands.push(`V ${y}`);
            }
          });

          const path = createSvgElement("path", {
            d: commands.join(" "),
            fill: "none",
            stroke: color,
            "stroke-width": "2",
            "stroke-linejoin": "round",
            "stroke-linecap": "round"
          });
          plotGroup.appendChild(path);

          const hoverPath = createSvgElement("path", {
            d: commands.join(" "),
            fill: "none",
            stroke: "transparent",
            "stroke-width": "12",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            style: "cursor:pointer"
          });

          hoverPath.addEventListener("mousemove", event => {
            const wrapperRect = svg.parentElement.getBoundingClientRect();
            const svgRect = svg.getBoundingClientRect();
            const scaleX = width / svgRect.width;
            const mouseX = (event.clientX - svgRect.left) * scaleX;
            const tooltipX = event.clientX - wrapperRect.left;
            let nearest = rows[0];
            let bestDistance = Infinity;
            for (const row of rows) {
              const distance = Math.abs(xScale(xValueForRow(row, model)) - mouseX);
              if (distance < bestDistance) {
                bestDistance = distance;
                nearest = row;
              }
            }
            const tokenCount = tokenCountForRow(nearest, model);
            tooltip.innerHTML = `<strong>${escapeHtml(model)}</strong><br />${state.xAxisMode === "tokens" ? `Tokens: ${formatTokens(Math.round(tokenCount))}<br />Estimated cost: ${formatBudget(nearest.budget)}` : `Budget: ${formatBudget(nearest.budget)}<br />Tokens: ${formatTokens(Math.round(tokenCount))}`}<br />50% time horizon: ${formatMinutes(nearest.p50)}<br />Release date: ${escapeHtml(nearest.release_date)}`;
            tooltip.style.display = "block";
            tooltip.style.left = `${Math.min(tooltipX + 14, wrapperRect.width - 220)}px`;
            tooltip.style.top = `${event.clientY - wrapperRect.top + 14}px`;
          });

          hoverPath.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
          });

          plotGroup.appendChild(hoverPath);

          if (showInlineLabels) {
            const last = rows[rows.length - 1];
            const label = createSvgElement("text", {
              x: Math.min(width - margin.right - 4, xScale(xValueForRow(last, model)) + 6),
              y: yScale(last.p50) - 4,
              fill: color,
              "font-size": "11"
            });
            label.textContent = model;
            plotGroup.appendChild(label);
          }
        });

        svg.appendChild(plotGroup);
      }

      experimentOptions.forEach(button => {
        button.addEventListener("click", () => {
          state.experiment = button.getAttribute("data-experiment-value");
          experimentToggle.open = false;
          renderBudgetCurves();
        });
      });

      xAxisOptions.forEach(button => {
        button.addEventListener("click", () => {
          state.xAxisMode = button.getAttribute("data-x-axis-value");
          xAxisToggle.open = false;
          renderBudgetCurves();
        });
      });

      selectAllButton.addEventListener("click", () => {
        state.selections[state.experiment] = new Set(currentModels());
        renderBudgetCurves();
      });

      clearAllButton.addEventListener("click", () => {
        state.selections[state.experiment] = new Set();
        state.hourlyGuides[state.experiment] = new Set();
        renderBudgetCurves();
      });

      document.addEventListener("click", event => {
        document.querySelectorAll("details.models-toggle, details.experiment-toggle").forEach(details => {
          if (details.open && !details.contains(event.target)) {
            details.open = false;
          }
        });
      });

      if (window.CODING_CAPABILITIES_BUDGET_CURVES) {
        state.data = window.CODING_CAPABILITIES_BUDGET_CURVES;
        ensureSelectionForExperiment();
        renderBudgetCurves();
      } else {
        summary.textContent = "Could not load interactive graph data.";
        modelList.innerHTML = "";
        legend.innerHTML = "";
        svg.innerHTML = "";
        const text = createSvgElement("text", {
          x: 450, y: 280, "text-anchor": "middle", fill: "#444444", "font-size": "18"
        });
        text.textContent = "Could not load chart data.";
        svg.appendChild(text);
      }
    })();
